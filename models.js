// models.js — All MongoDB schemas for MyFinances
const mongoose = require('mongoose');

// ── User ──────────────────────────────────────────────────────────────────
const userSchema = new mongoose.Schema({
  username:        { type: String, required: true, unique: true, lowercase: true, trim: true },
  password:        { type: String, required: true },  // bcrypt hash
  fullname:        { type: String, required: true, trim: true },
  partnerUsername: { type: String, default: null },
}, { timestamps: true });

// ── Account ───────────────────────────────────────────────────────────────
const accountSchema = new mongoose.Schema({
  userId:  { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name:    { type: String, required: true },
  type:    { type: String, enum: ['checking','savings','investment','credit','cash','other'], default: 'checking' },
  balance: { type: Number, default: 0 },
}, { timestamps: true });

// ── Transaction ───────────────────────────────────────────────────────────
const transactionSchema = new mongoose.Schema({
  userId:    { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  accountId: { type: String, default: null },
  toAccountId: { type: String, default: null },   // used for transfers
  type:      { type: String, enum: ['income','expense','transfer'], required: true },
  amount:    { type: Number, required: true },
  desc:      { type: String, default: '' },
  category:  { type: String, default: '' },
  date:      { type: String, required: true },  // YYYY-MM-DD
}, { timestamps: true });

// ── Bill ──────────────────────────────────────────────────────────────────
const billSchema = new mongoose.Schema({
  userId:    { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name:      { type: String, required: true },
  amount:    { type: Number, default: 0 },
  startDate: { type: String, required: true },
  recur:     { type: String, enum: ['once','weekly','biweekly','monthly','yearly'], default: 'monthly' },
  endDate:   { type: String, default: null },
  paid:      { type: Boolean, default: false },
}, { timestamps: true });

// ── Payday ────────────────────────────────────────────────────────────────
const paydaySchema = new mongoose.Schema({
  userId:    { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  label:     { type: String, required: true },
  amount:    { type: Number, default: 0 },
  startDate: { type: String, required: true },
  freq:      { type: String, enum: ['weekly','biweekly','semimonthly','monthly'], default: 'biweekly' },
  endDate:   { type: String, default: null },
}, { timestamps: true });

// ── Goal (personal + mutual) ──────────────────────────────────────────────
const goalSchema = new mongoose.Schema({
  userId:          { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name:            { type: String, required: true },
  category:        { type: String, default: '🎯 Custom' },
  target:          { type: Number, required: true },
  saved:           { type: Number, default: 0 },
  targetDate:      { type: String, default: null },
  met:             { type: Boolean, default: false },
  acctId:          { type: String, default: null },
  isMutual:        { type: Boolean, default: false },
  partnerUsername: { type: String, default: null },
}, { timestamps: true });

// ── Budget ────────────────────────────────────────────────────────────────
const budgetSchema = new mongoose.Schema({
  userId:          { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  key:             { type: String, required: true },   // "monthly|🍔 Food" etc.
  period:          { type: String, enum: ['weekly','monthly','yearly'], default: 'monthly' },
  cat:             { type: String, default: '' },      // blank = all spending
  amount:          { type: Number, required: true },
  isMutual:        { type: Boolean, default: false },
  partnerUsername: { type: String, default: null },
}, { timestamps: true });

// ── Connect Request ───────────────────────────────────────────────────────
const connectRequestSchema = new mongoose.Schema({
  fromUsername: { type: String, required: true },
  toUsername:   { type: String, required: true },
  code:         { type: String, required: true },
  status:       { type: String, enum: ['pending','approved','denied'], default: 'pending' },
  expiresAt:    { type: Date, default: () => new Date(Date.now() + 48*60*60*1000) },
}, { timestamps: true });

module.exports = {
  User:           mongoose.model('User',           userSchema),
  Account:        mongoose.model('Account',        accountSchema),
  Transaction:    mongoose.model('Transaction',    transactionSchema),
  Bill:           mongoose.model('Bill',           billSchema),
  Payday:         mongoose.model('Payday',         paydaySchema),
  Goal:           mongoose.model('Goal',           goalSchema),
  Budget:         mongoose.model('Budget',         budgetSchema),
  ConnectRequest: mongoose.model('ConnectRequest', connectRequestSchema),
};
