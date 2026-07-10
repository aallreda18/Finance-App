// server.js — MyFinances Express + MongoDB API
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bcrypt   = require('bcryptjs');
const jwt      = require('jsonwebtoken');
const cors     = require('cors');
const path     = require('path');

const {
  User, Account, Transaction, Bill,
  Payday, Goal, Budget, ConnectRequest
} = require('./models');

const app = express();
const PORT       = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || 'change_this_secret';

// ── Middleware ────────────────────────────────────────────────────────────
app.use(express.json());
app.use(cors({ origin: '*', credentials: true }));
app.use(express.static(path.join(__dirname, 'public')));

// ── MongoDB ───────────────────────────────────────────────────────────────
if (!process.env.MONGODB_URI) {
  console.warn('⚠️  No MONGODB_URI set — falling back to localhost, which will NOT work once deployed. Set MONGODB_URI (e.g. a MongoDB Atlas connection string) in your host\'s environment variables.');
}
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/myfinances')
  .then(() => console.log('✅  MongoDB connected'))
  .catch(err => console.error('❌  MongoDB error:', err.message));

// ── Auth middleware ───────────────────────────────────────────────────────
function auth(req, res, next) {
  const header = req.headers.authorization;
  if (!header || !header.startsWith('Bearer '))
    return res.status(401).json({ error: 'No token provided' });
  try {
    req.user = jwt.verify(header.slice(7), JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ error: 'Invalid or expired token' });
  }
}

// ═══════════════════════════════════════════════════════════════════════════
//  AUTH ROUTES
// ═══════════════════════════════════════════════════════════════════════════

// Register
app.post('/api/auth/register', async (req, res) => {
  try {
    const { username, password, fullname } = req.body;
    if (!username || !password || !fullname)
      return res.status(400).json({ error: 'All fields are required' });
    if (password.length < 4)
      return res.status(400).json({ error: 'Password must be at least 4 characters' });
    const clean = username.toLowerCase().replace(/[^a-z0-9_]/g, '');
    if (!clean) return res.status(400).json({ error: 'Invalid username' });
    if (await User.findOne({ username: clean }))
      return res.status(400).json({ error: 'Username already taken' });
    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ username: clean, password: hash, fullname });
    const token = jwt.sign({ id: user._id, username: user.username }, JWT_SECRET, { expiresIn: '90d' });
    res.json({ token, user: { username: user.username, fullname: user.fullname, partnerUsername: null } });
  } catch (e) {
    console.error('Register error:', e.message);
    res.status(500).json({ error: e.message });
  }
});

// Login
app.post('/api/auth/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const clean = (username || '').toLowerCase().trim();
    const user = await User.findOne({ username: clean });
    if (!user || !(await bcrypt.compare(password, user.password)))
      return res.status(401).json({ error: 'Invalid username or password' });
    const token = jwt.sign({ id: user._id, username: user.username }, JWT_SECRET, { expiresIn: '90d' });
    res.json({ token, user: { username: user.username, fullname: user.fullname, partnerUsername: user.partnerUsername } });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// Get current user (used for auto-login token validation)
app.get('/api/auth/me', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json({ username: user.username, fullname: user.fullname, partnerUsername: user.partnerUsername });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// Change password
app.post('/api/auth/change-password', auth, async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    const user = await User.findById(req.user.id);
    if (!(await bcrypt.compare(currentPassword, user.password)))
      return res.status(400).json({ error: 'Current password is incorrect' });
    if (!newPassword || newPassword.length < 4)
      return res.status(400).json({ error: 'New password must be at least 4 characters' });
    user.password = await bcrypt.hash(newPassword, 10);
    await user.save();
    res.json({ ok: true });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// Delete account
app.delete('/api/auth/account', auth, async (req, res) => {
  try {
    const id = req.user.id;
    await Promise.all([
      User.findByIdAndDelete(id),
      Account.deleteMany({ userId: id }),
      Transaction.deleteMany({ userId: id }),
      Bill.deleteMany({ userId: id }),
      Payday.deleteMany({ userId: id }),
      Goal.deleteMany({ userId: id }),
      Budget.deleteMany({ userId: id }),
      ConnectRequest.deleteMany({ $or: [{ fromUsername: req.user.username }, { toUsername: req.user.username }] }),
    ]);
    res.json({ ok: true });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// ═══════════════════════════════════════════════════════════════════════════
//  ACCOUNTS
// ═══════════════════════════════════════════════════════════════════════════
app.get('/api/accounts', auth, async (req, res) => {
  res.json(await Account.find({ userId: req.user.id }));
});
app.post('/api/accounts', auth, async (req, res) => {
  try {
    const acct = await Account.create({ ...req.body, userId: req.user.id });
    res.json(acct);
  } catch (e) { res.status(400).json({ error: e.message }); }
});
app.patch('/api/accounts/:id', auth, async (req, res) => {
  try {
    const acct = await Account.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.id }, req.body, { new: true }
    );
    if (!acct) return res.status(404).json({ error: 'Account not found' });
    res.json(acct);
  } catch (e) { res.status(400).json({ error: e.message }); }
});
app.delete('/api/accounts/:id', auth, async (req, res) => {
  await Account.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
  res.json({ ok: true });
});

// Transfer between accounts (balance only — no income/expense transaction created)
app.post('/api/accounts/transfer', auth, async (req, res) => {
  try {
    const { fromId, toId, amount, note } = req.body;
    if (!fromId || !toId || !amount || amount <= 0)
      return res.status(400).json({ error: 'Invalid transfer data' });
    if (fromId === toId)
      return res.status(400).json({ error: 'From and To accounts must be different' });
    const [fromAcct, toAcct] = await Promise.all([
      Account.findOne({ _id: fromId, userId: req.user.id }),
      Account.findOne({ _id: toId,   userId: req.user.id }),
    ]);
    if (!fromAcct || !toAcct) return res.status(404).json({ error: 'Account not found' });
    fromAcct.balance -= amount;
    toAcct.balance   += amount;
    await Promise.all([fromAcct.save(), toAcct.save()]);
    // Log a single neutral transfer record (excluded from income/expense calculations)
    const tx = await Transaction.create({
      userId: req.user.id,
      accountId: fromId,
      toAccountId: toId,
      type: 'transfer',
      amount,
      desc: note || `Transfer: ${fromAcct.name} → ${toAcct.name}`,
      category: '🔄 Transfer',
      date: new Date().toISOString().split('T')[0],
    });
    res.json({ fromAcct, toAcct, tx });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// ═══════════════════════════════════════════════════════════════════════════
//  TRANSACTIONS
// ═══════════════════════════════════════════════════════════════════════════
app.get('/api/transactions', auth, async (req, res) => {
  const txs = await Transaction.find({ userId: req.user.id }).sort({ date: -1, createdAt: -1 }).limit(200);
  res.json(txs);
});
app.post('/api/transactions', auth, async (req, res) => {
  try {
    const tx = await Transaction.create({ ...req.body, userId: req.user.id });
    // Update account balance
    if (tx.accountId && tx.type !== 'transfer') {
      const delta = tx.type === 'income' ? tx.amount : -tx.amount;
      await Account.findOneAndUpdate({ _id: tx.accountId, userId: req.user.id }, { $inc: { balance: delta } });
    }
    res.json(tx);
  } catch (e) { res.status(400).json({ error: e.message }); }
});
app.patch('/api/transactions/:id', auth, async (req, res) => {
  try {
    const old = await Transaction.findOne({ _id: req.params.id, userId: req.user.id });
    if (!old) return res.status(404).json({ error: 'Transaction not found' });
    // Reverse old balance change
    if (old.accountId && old.type !== 'transfer') {
      const delta = old.type === 'income' ? -old.amount : old.amount;
      await Account.findOneAndUpdate({ _id: old.accountId, userId: req.user.id }, { $inc: { balance: delta } });
    }
    const updated = await Transaction.findByIdAndUpdate(req.params.id, req.body, { new: true });
    // Apply new balance change
    if (updated.accountId && updated.type !== 'transfer') {
      const delta = updated.type === 'income' ? updated.amount : -updated.amount;
      await Account.findOneAndUpdate({ _id: updated.accountId, userId: req.user.id }, { $inc: { balance: delta } });
    }
    res.json(updated);
  } catch (e) { res.status(400).json({ error: e.message }); }
});
app.delete('/api/transactions/:id', auth, async (req, res) => {
  try {
    const tx = await Transaction.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
    if (tx && tx.accountId && tx.type !== 'transfer') {
      const delta = tx.type === 'income' ? -tx.amount : tx.amount;
      await Account.findOneAndUpdate({ _id: tx.accountId, userId: req.user.id }, { $inc: { balance: delta } });
    }
    res.json({ ok: true });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// ═══════════════════════════════════════════════════════════════════════════
//  BILLS
// ═══════════════════════════════════════════════════════════════════════════
app.get('/api/bills', auth, async (req, res) => {
  res.json(await Bill.find({ userId: req.user.id }).sort({ startDate: 1 }));
});
app.post('/api/bills', auth, async (req, res) => {
  try { res.json(await Bill.create({ ...req.body, userId: req.user.id })); }
  catch (e) { res.status(400).json({ error: e.message }); }
});
app.patch('/api/bills/:id', auth, async (req, res) => {
  try {
    const bill = await Bill.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.id }, req.body, { new: true }
    );
    if (!bill) return res.status(404).json({ error: 'Bill not found' });
    res.json(bill);
  } catch (e) { res.status(400).json({ error: e.message }); }
});
app.delete('/api/bills/:id', auth, async (req, res) => {
  await Bill.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
  res.json({ ok: true });
});

// ═══════════════════════════════════════════════════════════════════════════
//  PAYDAYS
// ═══════════════════════════════════════════════════════════════════════════
app.get('/api/paydays', auth, async (req, res) => {
  res.json(await Payday.find({ userId: req.user.id }).sort({ startDate: 1 }));
});
app.post('/api/paydays', auth, async (req, res) => {
  try { res.json(await Payday.create({ ...req.body, userId: req.user.id })); }
  catch (e) { res.status(400).json({ error: e.message }); }
});
app.patch('/api/paydays/:id', auth, async (req, res) => {
  try {
    const p = await Payday.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.id }, req.body, { new: true }
    );
    if (!p) return res.status(404).json({ error: 'Payday not found' });
    res.json(p);
  } catch (e) { res.status(400).json({ error: e.message }); }
});
app.delete('/api/paydays/:id', auth, async (req, res) => {
  await Payday.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
  res.json({ ok: true });
});

// ═══════════════════════════════════════════════════════════════════════════
//  GOALS
// ═══════════════════════════════════════════════════════════════════════════
app.get('/api/goals', auth, async (req, res) => {
  res.json(await Goal.find({ userId: req.user.id }));
});
// Mutual goals: goals where this user OR their partner created them and isMutual=true
app.get('/api/mutual-goals', auth, async (req, res) => {
  try {
    const query = {
      isMutual: true,
      $or: [
        { userId: req.user.id },
        { partnerUsername: req.user.username }
      ]
    };
    res.json(await Goal.find(query));
  } catch (e) { res.status(500).json({ error: e.message }); }
});
app.post('/api/goals', auth, async (req, res) => {
  try { res.json(await Goal.create({ ...req.body, userId: req.user.id })); }
  catch (e) { res.status(400).json({ error: e.message }); }
});
app.patch('/api/goals/:id', auth, async (req, res) => {
  try {
    // Allow update if owner OR if partner on a mutual goal
    const goal = await Goal.findOne({
      _id: req.params.id,
      $or: [{ userId: req.user.id }, { partnerUsername: req.user.username }]
    });
    if (!goal) return res.status(404).json({ error: 'Goal not found' });
    Object.assign(goal, req.body);
    await goal.save();
    res.json(goal);
  } catch (e) { res.status(400).json({ error: e.message }); }
});
app.delete('/api/goals/:id', auth, async (req, res) => {
  await Goal.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
  res.json({ ok: true });
});

// ═══════════════════════════════════════════════════════════════════════════
//  BUDGETS
// ═══════════════════════════════════════════════════════════════════════════
app.get('/api/budgets', auth, async (req, res) => {
  const query = { userId: req.user.id };
  if (req.query.mutual === 'true') query.isMutual = true;
  else query.isMutual = { $ne: true };
  res.json(await Budget.find(query));
});
app.post('/api/budgets', auth, async (req, res) => {
  try { res.json(await Budget.create({ ...req.body, userId: req.user.id })); }
  catch (e) { res.status(400).json({ error: e.message }); }
});
app.patch('/api/budgets/:id', auth, async (req, res) => {
  try {
    const b = await Budget.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.id }, req.body, { new: true }
    );
    if (!b) return res.status(404).json({ error: 'Budget not found' });
    res.json(b);
  } catch (e) { res.status(400).json({ error: e.message }); }
});
app.delete('/api/budgets/:id', auth, async (req, res) => {
  await Budget.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
  res.json({ ok: true });
});

// ═══════════════════════════════════════════════════════════════════════════
//  PARTNER / MUTUAL FINANCES
// ═══════════════════════════════════════════════════════════════════════════

// Send a connection request and get back a code
app.post('/api/partner/request', auth, async (req, res) => {
  try {
    const { targetUsername } = req.body;
    const clean = (targetUsername || '').toLowerCase().trim();
    if (!clean || clean === req.user.username)
      return res.status(400).json({ error: 'Invalid username' });
    // Check target exists
    const target = await User.findOne({ username: clean });
    if (!target) return res.status(404).json({ error: 'User "' + clean + '" not found' });
    // Check sender not already connected
    const me = await User.findById(req.user.id);
    if (me.partnerUsername)
      return res.status(400).json({ error: 'Already connected with @' + me.partnerUsername + '. Disconnect first.' });
    // Remove any old pending requests from this sender
    await ConnectRequest.deleteMany({ fromUsername: req.user.username, status: 'pending' });
    // Create new request
    const code = String(Math.floor(100000 + Math.random() * 900000));
    const request = await ConnectRequest.create({
      fromUsername: req.user.username,
      toUsername: clean,
      code,
    });
    res.json({ ok: true, code, requestId: request._id });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// Check for a pending incoming request (used by the bell notification)
app.get('/api/partner/incoming', auth, async (req, res) => {
  try {
    const pending = await ConnectRequest.findOne({
      toUsername: req.user.username,
      status: 'pending',
      expiresAt: { $gt: new Date() },
    }).sort({ createdAt: -1 });
    res.json({ pending: pending ? { from: pending.fromUsername } : null });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// Approve a connection request
app.post('/api/partner/approve', auth, async (req, res) => {
  try {
    const { fromUsername, code } = req.body;
    if (!fromUsername || !code) return res.status(400).json({ error: 'Missing fromUsername or code' });
    // Find the pending request — it MUST exist and MUST match, otherwise reject.
    const connReq = await ConnectRequest.findOne({
      fromUsername,
      toUsername: req.user.username,
      status: 'pending',
      expiresAt: { $gt: new Date() },
    });
    if (!connReq)
      return res.status(404).json({ error: 'No pending request found from that user. Ask them to send a new one.' });
    if (code !== connReq.code)
      return res.status(400).json({ error: 'Incorrect code' });
    // Connect both users
    await User.findOneAndUpdate({ username: req.user.username }, { partnerUsername: fromUsername });
    await User.findOneAndUpdate({ username: fromUsername },      { partnerUsername: req.user.username });
    connReq.status = 'approved';
    await connReq.save();
    res.json({ ok: true, partnerUsername: fromUsername });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// Deny a connection request
app.post('/api/partner/deny', auth, async (req, res) => {
  try {
    const { fromUsername } = req.body;
    await ConnectRequest.updateMany(
      { fromUsername, toUsername: req.user.username, status: 'pending' },
      { status: 'denied' }
    );
    res.json({ ok: true });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// Disconnect from partner
app.post('/api/partner/disconnect', auth, async (req, res) => {
  try {
    const me = await User.findById(req.user.id);
    if (me.partnerUsername) {
      await User.findOneAndUpdate({ username: me.partnerUsername }, { partnerUsername: null });
    }
    me.partnerUsername = null;
    await me.save();
    res.json({ ok: true });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// Get partner data (accounts, transactions, bills, paydays, goals)
app.get('/api/partner/data', auth, async (req, res) => {
  try {
    const me = await User.findById(req.user.id);
    if (!me.partnerUsername)
      return res.status(404).json({ error: 'No partner connected' });
    const partner = await User.findOne({ username: me.partnerUsername });
    if (!partner)
      return res.status(404).json({ error: 'Partner account not found' });
    const [accounts, transactions, bills, paydays, goals] = await Promise.all([
      Account.find({ userId: partner._id }),
      Transaction.find({ userId: partner._id }).sort({ date: -1 }).limit(100),
      Bill.find({ userId: partner._id }),
      Payday.find({ userId: partner._id }),
      Goal.find({ userId: partner._id }),
    ]);
    res.json({
      partner: { username: partner.username, fullname: partner.fullname },
      fullname: partner.fullname,
      accounts, transactions, bills, paydays, goals,
    });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// ═══════════════════════════════════════════════════════════════════════════
//  AI SPENDING ANALYSIS — proxied through the server so your Anthropic API
//  key stays secret. The browser can never call api.anthropic.com directly
//  with a real key; this endpoint holds the key server-side instead.
//  Requires an ANTHROPIC_API_KEY environment variable. If it's not set,
//  the frontend automatically falls back to a local heuristic analysis.
// ═══════════════════════════════════════════════════════════════════════════
app.post('/api/ai/analyze', auth, async (req, res) => {
  try {
    if (!process.env.ANTHROPIC_API_KEY) {
      return res.status(503).json({ error: 'AI analysis is not configured on this server (missing ANTHROPIC_API_KEY).' });
    }
    const { prompt } = req.body;
    if (!prompt) return res.status(400).json({ error: 'Missing prompt' });
    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-5',
        max_tokens: 1000,
        messages: [{ role: 'user', content: prompt }],
      }),
    });
    const data = await r.json();
    res.json(data);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// ═══════════════════════════════════════════════════════════════════════════
//  SERVE FRONTEND — serves index.html from the root directory
// ═══════════════════════════════════════════════════════════════════════════
app.use(express.static(__dirname));   // serve all static files from root

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀  MyFinances server running at http://localhost:${PORT}`);
});
