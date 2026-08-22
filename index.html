<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0,viewport-fit=cover"/>
<meta name="apple-mobile-web-app-capable" content="yes"/>
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
<meta name="apple-mobile-web-app-title" content="MyFinances"/>
<meta name="theme-color" content="#f0f4ff"/>
<link rel="apple-touch-icon" href="icon.png"/>
<link rel="icon" type="image/png" href="icon.png"/>
<link rel="manifest" href="manifest.json"/>
<title>MyFinances</title>
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script>
<style>
:root{
  /* Light theme (default palette — overridden at runtime by the selected color scheme) */
  --navy:#f0f4ff;--navy-mid:#ffffff;--royal:#2563eb;--royal-bright:#1d4ed8;--royal-glow:#3b82f6;
  --accent:#1d4ed8;--accent-light:#1e40af;--gold:#b45309;--green:#047857;--red:#dc2626;
  --text-primary:#0f172a;--text-secondary:#475569;--text-muted:#94a3b8;
  --surface:#ffffff;--surface-2:#f1f5f9;--surface-3:#e2e8f0;
  --border:rgba(37,99,235,0.12);--border-bright:rgba(37,99,235,0.28);
  --safe-top:env(safe-area-inset-top,0px);--safe-bottom:env(safe-area-inset-bottom,0px);
}
*{box-sizing:border-box;margin:0;padding:0;-webkit-tap-highlight-color:transparent}
html,body{height:100%;overflow:hidden;background:var(--navy);font-family:-apple-system,BlinkMacSystemFont,'SF Pro Text','Segoe UI',sans-serif;color:var(--text-primary);transition:background .25s ease,color .25s ease}
/* AUTH */
#auth-screen{position:fixed;inset:0;background:var(--navy);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:2rem;z-index:999;overflow-y:auto}
.auth-logo{width:100px;height:100px;background:transparent;border-radius:0;display:flex;align-items:center;justify-content:center;margin-bottom:1rem}
.auth-logo img{width:100%;height:100%;object-fit:contain}
.auth-title{font-size:1.75rem;font-weight:700;letter-spacing:-0.5px;margin-bottom:.25rem}
.auth-sub{font-size:.9rem;color:var(--text-secondary);margin-bottom:2rem}
.auth-tabs{display:flex;background:var(--surface);border-radius:10px;padding:3px;margin-bottom:1.5rem;width:100%;max-width:340px}
.auth-tab{flex:1;padding:8px;text-align:center;border-radius:8px;font-size:.875rem;font-weight:500;cursor:pointer;transition:all .2s;color:var(--text-secondary)}
.auth-tab.active{background:var(--royal);color:#fff}
.auth-form{width:100%;max-width:340px;display:flex;flex-direction:column;gap:12px}
.auth-form input{width:100%;padding:14px 16px;background:var(--surface);border:1px solid var(--border);border-radius:12px;color:var(--text-primary);font-size:1rem;outline:none;transition:border .2s}
.auth-form input:focus{border-color:var(--royal-glow)}
.auth-form input::placeholder{color:var(--text-muted)}
.btn-primary{padding:14px;background:var(--royal);border:none;border-radius:12px;color:#fff;font-size:1rem;font-weight:600;cursor:pointer;transition:all .2s;width:100%}
.btn-primary:active{transform:scale(.98);background:var(--royal-bright)}
.btn-primary:disabled{opacity:.6;cursor:not-allowed}
.btn-sm{padding:10px 16px;font-size:.875rem;border-radius:10px;width:auto}
.auth-error{color:var(--red);font-size:.8rem;text-align:center;min-height:1rem}
/* APP SHELL */
#app{position:fixed;inset:0;display:flex;flex-direction:column;display:none}
.top-bar{padding:calc(var(--safe-top) + 12px) 16px 12px;background:var(--navy);border-bottom:1px solid var(--border);display:flex;align-items:center;justify-content:space-between;flex-shrink:0}
.top-bar-title{font-size:1.1rem;font-weight:700}
.top-bar-right{display:flex;gap:10px;align-items:center}
.icon-btn{width:36px;height:36px;border-radius:50%;background:var(--surface);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:1.1rem;transition:all .2s;position:relative}
.icon-btn:active{transform:scale(.92)}
.notif-badge{position:absolute;top:-3px;right:-3px;width:16px;height:16px;background:var(--red);border-radius:50%;font-size:.6rem;font-weight:700;display:flex;align-items:center;justify-content:center;color:#fff}
.user-avatar{width:32px;height:32px;border-radius:50%;background:var(--royal);display:flex;align-items:center;justify-content:center;font-size:.8rem;font-weight:700;cursor:pointer}
.screens{flex:1;overflow:hidden;position:relative}
.screen{position:absolute;inset:0;overflow-y:auto;display:none;padding:16px 16px calc(80px + var(--safe-bottom))}
.screen.active{display:block}
/* BOTTOM NAV */
.bottom-nav{display:flex;background:var(--surface);border-top:1px solid var(--border);padding:8px 0 calc(8px + var(--safe-bottom));flex-shrink:0}
.nav-item{flex:1;display:flex;flex-direction:column;align-items:center;gap:3px;padding:6px 0;cursor:pointer;transition:all .2s;color:var(--text-muted);font-size:.6rem;font-weight:500}
.nav-item .nav-icon{font-size:1.25rem;transition:all .2s}
.nav-item.active{color:var(--accent)}
.nav-item.active .nav-icon{transform:scale(1.15)}
/* CARDS */
.card{background:var(--surface);border:1px solid var(--border);border-radius:16px;padding:16px;margin-bottom:12px}
.card-title{font-size:.75rem;font-weight:600;color:var(--text-secondary);text-transform:uppercase;letter-spacing:.6px;margin-bottom:10px}
.hero-card{background:linear-gradient(135deg,var(--royal) 0%,var(--royal-bright) 100%);border-radius:20px;padding:20px;margin-bottom:12px}
.hero-label{font-size:.78rem;color:rgba(255,255,255,.7);margin-bottom:4px}
.hero-amount{font-size:2.2rem;font-weight:700;letter-spacing:-1px;color:#ffffff}
.hero-sub{font-size:.8rem;color:rgba(255,255,255,.6);margin-top:4px}
.badge{display:inline-flex;align-items:center;gap:4px;padding:3px 8px;border-radius:6px;font-size:.72rem;font-weight:600}
.badge-green{background:rgba(16,185,129,.15);color:var(--green)}
.badge-red{background:rgba(239,68,68,.15);color:var(--red)}
.badge-blue{background:#dbeafe;color:#1d4ed8}
.badge-gold{background:rgba(245,158,11,.15);color:var(--gold)}
/* ACCOUNT ROWS */
.account-row{display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid var(--border)}
.account-row:last-child{border-bottom:none;padding-bottom:0}
.account-icon{width:38px;height:38px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:1.1rem;flex-shrink:0}
.account-name{font-size:.9rem;font-weight:500}
.account-type{font-size:.72rem;color:var(--text-secondary)}
.account-amount{margin-left:auto;font-size:1rem;font-weight:700}
/* ACTION BUTTONS */
.btn-row{display:flex;gap:10px;margin-bottom:12px}
.btn-action{flex:1;padding:12px 6px;background:var(--surface-2);border:1px solid var(--border);border-radius:12px;color:var(--text-primary);font-size:.78rem;font-weight:600;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:5px;transition:all .2s}
.btn-action .btn-icon{font-size:1.3rem}
.btn-action:active{transform:scale(.96);background:var(--surface-3)}
.btn-action.primary-action{background:#dbeafe;border-color:rgba(37,99,235,.3);color:#1d4ed8}
/* MODAL */
.modal-overlay{position:fixed;inset:0;background:rgba(15,23,42,.5);z-index:500;display:none;flex-direction:column;justify-content:flex-end}
.modal-overlay.open{display:flex}
.modal{background:var(--navy-mid, #ffffff);border-radius:24px 24px 0 0;padding:20px 20px calc(20px + var(--safe-bottom));max-height:92vh;overflow-y:auto}
.modal-handle{width:36px;height:4px;background:var(--border-bright);border-radius:2px;margin:0 auto 16px}
.modal-title{font-size:1.1rem;font-weight:700;margin-bottom:16px}
.modal label{font-size:.82rem;color:var(--text-secondary);font-weight:500;margin-bottom:5px;display:block;margin-top:4px}
.modal input,.modal select{width:100%;padding:12px 14px;background:var(--surface);border:1px solid var(--border);border-radius:10px;color:var(--text-primary);font-size:.95rem;margin-bottom:4px;outline:none;-webkit-appearance:none;appearance:none}
.modal input:focus,.modal select:focus{border-color:var(--royal-glow)}
.modal select option{background:#ffffff;color:#0f172a}
.modal-row{display:flex;gap:10px;margin-top:14px}
.modal-row>*{flex:1}
.btn-cancel{padding:13px;background:var(--surface-2);border:1px solid var(--border);border-radius:12px;color:var(--text-secondary);font-size:.95rem;font-weight:600;cursor:pointer;transition:all .2s;width:100%}
/* DROPDOWN PANEL (bell & user) */
.dropdown-panel{position:fixed;z-index:400;background:var(--surface);border:1px solid var(--border-bright);border-radius:16px;padding:12px;min-width:260px;max-width:320px;max-height:70vh;overflow-y:auto;box-shadow:0 8px 32px rgba(15,23,42,.15);display:none}
.dropdown-panel.open{display:block}
.dropdown-item{padding:11px 12px;border-radius:10px;cursor:pointer;font-size:.875rem;font-weight:500;display:flex;align-items:center;gap:10px;transition:background .15s}
.dropdown-item:hover{background:var(--surface-2)}
.dropdown-item.danger{color:var(--red)}
.dropdown-divider{height:1px;background:var(--border);margin:6px 0}
/* PROGRESS BAR */
.progress-track{background:var(--surface-3);border-radius:99px;height:10px;overflow:hidden;margin:8px 0}
.progress-fill{height:100%;border-radius:99px;background:var(--royal);transition:width .5s ease}
.progress-fill.gold{background:var(--gold)}
.progress-fill.green{background:var(--green)}
/* TABS */
.tab-row{display:flex;background:var(--surface);border-radius:10px;padding:3px;margin-bottom:14px}
.tab{flex:1;padding:7px;text-align:center;border-radius:8px;font-size:.8rem;font-weight:600;cursor:pointer;transition:all .2s;color:var(--text-muted)}
.tab.active{background:var(--royal);color:#fff}
/* STATS NAV (weekly/monthly history browsing) */
.stat-nav{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:10px}
.stat-nav-btn{width:28px;height:28px;border-radius:50%;background:var(--surface-2);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:.85rem;color:var(--text-secondary);flex-shrink:0;transition:all .15s}
.stat-nav-btn:active{transform:scale(.88)}
.stat-nav-label{font-size:.78rem;font-weight:700;color:var(--text-secondary);text-transform:uppercase;letter-spacing:.5px;text-align:center;flex:1}
/* SETTINGS — scheme swatches */
.scheme-swatch{width:38px;height:38px;border-radius:50%;cursor:pointer;border:3px solid transparent;transition:all .15s;flex-shrink:0;box-shadow:0 1px 3px rgba(0,0,0,.15)}
.scheme-swatch.selected{border-color:var(--text-primary);transform:scale(1.1)}
/* REMINDERS */
.reminder-row{display:flex;align-items:flex-start;gap:12px;padding:12px 0;border-bottom:1px solid var(--border)}
.reminder-row:last-child{border-bottom:none}
.reminder-dot{width:10px;height:10px;border-radius:50%;flex-shrink:0;margin-top:5px}
.reminder-info{flex:1}
.reminder-name{font-size:.9rem;font-weight:500}
.reminder-date{font-size:.75rem;color:var(--text-secondary);margin-top:2px}
.reminder-amount{font-size:.95rem;font-weight:700;white-space:nowrap}
.due-soon{background:rgba(245,158,11,.12);border-radius:10px;padding:2px 8px;font-size:.68rem;color:var(--gold);font-weight:600;margin-left:6px}
/* ENVELOPES */
.envelope{background:var(--surface);border:1px solid var(--border);border-radius:16px;padding:14px;margin-bottom:10px}
.envelope-top{display:flex;align-items:center;gap:10px;margin-bottom:10px}
.envelope-icon{font-size:1.6rem}
.envelope-name{font-size:.95rem;font-weight:600}
.envelope-amounts{font-size:.78rem;color:var(--text-secondary)}
.envelope-pct{margin-left:auto;font-size:1rem;font-weight:700;color:var(--accent)}
/* AI Analysis styles */
.ai-section-title{font-size:.75rem;font-weight:700;color:var(--accent-light);text-transform:uppercase;letter-spacing:.6px;margin-bottom:8px}
.ai-insight-card{background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:12px;margin-bottom:8px}
.ai-insight-icon{font-size:1.2rem;flex-shrink:0}
.ai-trend-row{display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--border)}
.ai-trend-row:last-child{border-bottom:none}
.trend-up{color:#dc2626;font-weight:700}
.trend-down{color:#047857;font-weight:700}
.trend-flat{color:#b45309;font-weight:700}
.cat-bar-row{display:flex;align-items:center;gap:8px;margin-bottom:8px;cursor:pointer}
.cat-bar-label{font-size:.78rem;font-weight:600;color:var(--text-primary);width:90px;flex-shrink:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.cat-bar-track{flex:1;background:var(--surface-3);border-radius:99px;height:9px;overflow:hidden}
.cat-bar-fill{height:100%;border-radius:99px;transition:width .6s ease}
.cat-bar-val{font-size:.74rem;font-weight:700;color:var(--accent-light);width:60px;text-align:right;flex-shrink:0}
@keyframes spin{to{transform:rotate(360deg)}}
.ai-score-ring{position:relative;display:inline-flex;align-items:center;justify-content:center}
.ai-written{font-size:.84rem;color:#334155;line-height:1.65;white-space:pre-wrap}
.ai-text{font-size:.85rem;color:var(--text-secondary);line-height:1.55}
/* SECTION HEADER */
.section-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:10px}
.section-title{font-size:.95rem;font-weight:700}
.section-action{font-size:.8rem;color:var(--accent);font-weight:600;cursor:pointer}
/* TX ROWS */
.tx-row{display:flex;align-items:center;gap:10px;padding:9px 0;border-bottom:1px solid var(--border)}
.tx-row:last-child{border-bottom:none}
.tx-icon{width:34px;height:34px;border-radius:9px;display:flex;align-items:center;justify-content:center;font-size:1rem;flex-shrink:0}
.tx-name{font-size:.88rem;font-weight:500}
.tx-cat{font-size:.72rem;color:var(--text-secondary)}
.tx-amount{margin-left:auto;font-size:.9rem;font-weight:700;white-space:nowrap}
/* EMPTY */
.empty-state{text-align:center;padding:2rem 1rem;color:var(--text-muted)}
.empty-state .empty-icon{font-size:2.5rem;margin-bottom:10px;opacity:.6}
.empty-state p{font-size:.88rem}
/* STAT MINI CARDS */
.stat-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:12px}
.stat-mini{background:var(--surface-2);border-radius:10px;padding:10px;text-align:center}
.stat-mini-label{font-size:.68rem;color:var(--text-secondary);margin-bottom:4px}
.stat-mini-val{font-size:.95rem;font-weight:700}
/* CHART */
.chart-wrap{position:relative;width:100%}
/* UTILS */
.text-green{color:var(--green)}.text-red{color:var(--red)}.text-gold{color:var(--gold)}.text-accent{color:var(--accent)}
.mt-2{margin-top:.5rem}.mt-4{margin-top:1rem}.fw-700{font-weight:700}.fs-sm{font-size:.82rem;color:var(--text-secondary)}
/* MUTUAL */
.mutual-hero{background:linear-gradient(135deg,var(--surface-2) 0%,var(--surface-3) 100%);border-radius:20px;padding:18px;margin-bottom:12px}
.mutual-hero .hero-label{color:var(--accent-light)}
.mutual-hero .hero-amount{color:var(--text-primary)}
.mutual-user-row{display:flex;gap:12px;margin-top:12px}
.mutual-user-card{flex:1;background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:12px;text-align:center}
.mutual-user-name{font-size:.72rem;color:var(--accent-light);margin-bottom:4px;font-weight:600}
.mutual-user-bal{font-size:1.1rem;font-weight:700;color:var(--text-primary)}
/* CONNECT PANEL */
.connect-status{background:var(--surface-2);border:1px solid var(--border);border-radius:12px;padding:14px;margin-top:8px;font-size:.85rem;color:var(--text-secondary)}
.code-display{font-size:2rem;font-weight:700;letter-spacing:.5rem;color:var(--accent);text-align:center;padding:12px 0}
</style>
</head>
<body>

<!-- ██ AUTH SCREEN ██ -->
<div id="auth-screen">
  <div class="auth-logo">
    <img src="icon.png" alt="MyFinances Logo" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"/>
    <svg style="display:none" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="22" fill="#2563eb"/>
      <path d="M50 10L84 36V90H16V36L50 10Z" fill="#93c5fd" stroke="#1d4ed8" stroke-width="4"/>
      <text x="50" y="66" font-family="Arial,sans-serif" font-size="42" font-weight="900" fill="white" text-anchor="middle" dominant-baseline="middle">$</text>
    </svg>
  </div>
  <h1 class="auth-title">MyFinances</h1>
  <p class="auth-sub">Your personal finance companion</p>
  <div class="auth-tabs">
    <div class="auth-tab active" onclick="switchAuthTab('login')">Sign In</div>
    <div class="auth-tab" onclick="switchAuthTab('register')">Create Account</div>
  </div>
  <div class="auth-form">
    <div id="auth-name-wrap" style="display:none"><input type="text" id="auth-fullname" placeholder="Full Name"/></div>
    <input type="text" id="auth-username" placeholder="Username" autocomplete="username"/>
    <input type="password" id="auth-password" placeholder="Password" autocomplete="current-password"/>
    <div class="auth-error" id="auth-error"></div>
    <button class="btn-primary" id="auth-btn" onclick="handleAuth()">Sign In</button>
  </div>
</div>

<!-- ██ APP ██ -->
<div id="app">
  <div class="top-bar">
    <div style="display:flex;align-items:center;gap:8px">
      <svg width="28" height="28" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" rx="20" fill="#2563eb"/>
        <path d="M50 12L82 38V88H18V38L50 12Z" fill="#93c5fd" stroke="#1d4ed8" stroke-width="4"/>
        <rect x="43" y="62" width="14" height="26" fill="#1d4ed8"/>
        <text x="50" y="74" font-family="Arial,sans-serif" font-size="36" font-weight="900" fill="white" text-anchor="middle" dominant-baseline="middle">$</text>
        <rect x="38" y="28" width="8" height="8" fill="#1d4ed8" rx="1"/>
      </svg>
      <div class="top-bar-title" id="screen-title">My Finances</div>
    </div>
    <div class="top-bar-right">
      <div class="icon-btn" id="bell-btn" onclick="toggleBell()" title="Reminders">🔔<span class="notif-badge" id="notif-count" style="display:none">0</span></div>
      <div class="user-avatar" id="user-avatar" onclick="toggleUserMenu()">?</div>
    </div>
  </div>

  <!-- Bell Dropdown -->
  <div class="dropdown-panel" id="bell-dropdown" style="top:calc(var(--safe-top) + 60px);right:56px"></div>

  <!-- User Menu Dropdown -->
  <div class="dropdown-panel" id="user-dropdown" style="top:calc(var(--safe-top) + 60px);right:12px">
    <div style="padding:8px 12px 10px;border-bottom:1px solid var(--border);margin-bottom:6px">
      <div style="font-weight:700" id="um-name">User</div>
      <div style="font-size:.78rem;color:var(--text-secondary)" id="um-username">@username</div>
    </div>
    <div class="dropdown-item" onclick="openSettings();closeUserMenu()">⚙️ <span data-i18n="menu_settings">Settings</span></div>
    <div class="dropdown-item" onclick="openModal('change-password-modal');closeUserMenu()">🔑 <span data-i18n="menu_change_password">Change Password</span></div>
    <div id="um-connect-link" class="dropdown-item" onclick="openConnectFlow();closeUserMenu()">🔗 <span data-i18n="menu_connect">Connect with Another User</span></div>
    <div id="um-mutual-link" style="display:none" class="dropdown-item" onclick="switchToMutual();closeUserMenu()">👫 <span data-i18n="menu_view_mutual">View Mutual Finances</span></div>
    <div id="um-disconnect-link" style="display:none" class="dropdown-item" onclick="disconnectPartner();closeUserMenu()">🔌 <span data-i18n="menu_disconnect">Disconnect Partner</span></div>
    <div class="dropdown-divider"></div>
    <div class="dropdown-item danger" onclick="deleteAccount()">🗑️ <span data-i18n="menu_delete_account">Delete Account</span></div>
    <div class="dropdown-item danger" onclick="doLogout()">🚪 <span data-i18n="menu_sign_out">Sign Out</span></div>
  </div>

  <div class="screens">
    <!-- ═══ SCREEN 1: MY FINANCES ═══ -->
    <div class="screen active" id="screen-finances">
      <div class="hero-card">
        <div class="hero-label" data-i18n="hero_total_balance">Total Balance</div>
        <div class="hero-amount" id="hero-total">$0.00</div>
        <div class="hero-sub" id="hero-sub"></div>
      </div>
      <div class="btn-row">
        <button class="btn-action primary-action" onclick="openModal('add-income-modal')"><span class="btn-icon">💵</span><span data-i18n="btn_add_income">Add Income</span></button>
        <button class="btn-action" onclick="openModal('update-balance-modal')"><span class="btn-icon">✏️</span><span data-i18n="btn_update_balance">Update Balance</span></button>
        <button class="btn-action" onclick="openModal('add-account-modal')"><span class="btn-icon">➕</span><span data-i18n="btn_add_account">Add Account</span></button>
        <button class="btn-action primary-action" onclick="openModal('transfer-modal')"><span class="btn-icon">🔄</span><span data-i18n="btn_transfer">Transfer</span></button>
      </div>
      <div class="card">
        <div class="card-title" data-i18n="card_my_accounts">My Accounts</div>
        <div id="accounts-list"></div>
      </div>
      <div class="card">
        <div class="card-title" data-i18n="card_money_earned">Money Earned Over Time</div>
        <div class="chart-wrap" style="height:180px"><canvas id="income-chart"></canvas></div>
      </div>
      <div class="card">
        <div class="section-header">
          <div class="card-title" style="margin:0" data-i18n="card_recent_tx">Recent Transactions</div>
          <span class="section-action" onclick="addExpense()" data-i18n="btn_add_expense_action">+ Add Expense</span>
        </div>
        <div id="recent-transactions"></div>
        <div style="text-align:center;margin-top:10px">
          <span class="section-action" onclick="openAllTransactionsModal()" data-i18n="btn_view_all_tx">View All by Category →</span>
        </div>
      </div>
    </div>

    <!-- ═══ SCREEN 2: FINANCE STATS ═══ -->
    <div class="screen" id="screen-stats">
      <div class="tab-row" id="stats-tabs">
        <div class="tab active" onclick="setStatTab('week',this)" data-i18n="tab_weekly">Weekly</div>
        <div class="tab" onclick="setStatTab('month',this)" data-i18n="tab_monthly">Monthly</div>
        <div class="tab" onclick="setStatTab('year',this)" data-i18n="tab_yearly">Yearly</div>
      </div>
      <div class="card">
        <div class="card-title" data-i18n="card_spending_timeline">Spending Timeline</div>
        <div class="chart-wrap" style="height:200px"><canvas id="spending-chart"></canvas></div>
      </div>
      <div class="card">
        <div class="card-title" data-i18n="card_balance_by_account">Balance by Account</div>
        <div style="display:flex;align-items:center;gap:16px">
          <div class="chart-wrap" style="height:140px;width:140px;flex-shrink:0"><canvas id="pie-chart"></canvas></div>
          <div id="pie-legend" style="flex:1;font-size:.78rem;line-height:2"></div>
        </div>
      </div>
      <div class="card">
        <div class="stat-nav">
          <div class="stat-nav-btn" onclick="navWeek(1)" title="Previous week">◀</div>
          <div class="stat-nav-label" id="weekly-summary-label">Weekly Summary</div>
          <div class="stat-nav-btn" onclick="navWeek(-1)" title="Next week">▶</div>
        </div>
        <div id="weekly-summary-content"></div>
      </div>
      <div class="card">
        <div class="stat-nav">
          <div class="stat-nav-btn" onclick="navMonth(1)" title="Previous month">◀</div>
          <div class="stat-nav-label" id="monthly-summary-label">Monthly Summary</div>
          <div class="stat-nav-btn" onclick="navMonth(-1)" title="Next month">▶</div>
        </div>
        <div id="monthly-summary-content"></div>
      </div>

      <!-- BUDGET SECTION -->
      <div class="card" id="budget-card">
        <div class="section-header" style="margin-bottom:12px">
          <div class="card-title" style="margin:0" data-i18n="card_budget_tracker">💰 Budget Tracker</div>
          <span class="section-action" onclick="openBudgetModal()" data-i18n="btn_add_budget">+ Add Budget</span>
        </div>
        <div id="budget-list"></div>
      </div>
      <div id="ai-analysis-card" style="background:linear-gradient(135deg,var(--surface-2),var(--surface-3));border:1px solid var(--border-bright);border-radius:18px;padding:18px;margin-bottom:12px">
        <!-- Header -->
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">
          <div>
            <div style="font-size:.72rem;font-weight:700;color:var(--accent);text-transform:uppercase;letter-spacing:.7px;margin-bottom:3px" data-i18n="ai_title">✨ AI Spending Analysis</div>
            <div style="font-size:.82rem;color:var(--text-secondary)" data-i18n="ai_subtitle">Powered by Claude · updates with your data</div>
          </div>
          <button onclick="runSpendingAnalysis()" id="ai-analyze-btn"
            style="background:var(--royal);color:#fff;border:none;border-radius:12px;padding:9px 16px;font-size:.82rem;font-weight:700;cursor:pointer;white-space:nowrap;transition:all .2s" data-i18n="btn_analyze">
            Analyze 🔍
          </button>
        </div>

        <!-- SCORE GAUGE — hidden until analysis runs -->
        <div id="ai-score-section" style="display:none;margin-bottom:16px">
          <div style="background:var(--surface);border-radius:14px;padding:16px;display:flex;align-items:center;gap:16px;box-shadow:0 1px 4px rgba(37,99,235,.08)">
            <div style="position:relative;width:88px;height:88px;flex-shrink:0">
              <svg width="88" height="88" viewBox="0 0 88 88" style="transform:rotate(-90deg)">
                <circle cx="44" cy="44" r="36" fill="none" stroke="var(--surface-3)" stroke-width="8"/>
                <circle id="score-ring" cx="44" cy="44" r="36" fill="none" stroke="#22c55e" stroke-width="8"
                  stroke-linecap="round" stroke-dasharray="226" stroke-dashoffset="226"
                  style="transition:stroke-dashoffset 1.2s ease,stroke .6s ease"/>
              </svg>
              <div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center">
                <div id="score-number" style="font-size:1.6rem;font-weight:800;line-height:1;color:var(--text-primary)">--</div>
                <div style="font-size:.58rem;font-weight:600;color:var(--text-muted);text-transform:uppercase;letter-spacing:.4px">/ 100</div>
              </div>
            </div>
            <div style="flex:1;min-width:0">
              <div id="score-grade" style="font-size:1.1rem;font-weight:800;margin-bottom:3px">—</div>
              <div id="score-label" style="font-size:.8rem;color:var(--text-secondary);line-height:1.4" data-i18n="score_default_label">Run the analysis to get your spending score.</div>
              <div id="score-breakdown" style="margin-top:8px"></div>
            </div>
          </div>
        </div>

        <div style="margin-bottom:14px">
          <div style="font-size:.78rem;font-weight:600;color:var(--accent-light);margin-bottom:8px;text-transform:uppercase;letter-spacing:.5px" data-i18n="ai_cat_title">This Month by Category</div>
          <div id="ai-cat-bars"></div>
        </div>

        <div id="ai-trends" style="margin-bottom:14px"></div>

        <div id="ai-analysis-body">
          <div style="text-align:center;padding:10px 0">
            <div style="font-size:.85rem;color:var(--text-secondary);margin-bottom:10px" data-i18n="ai_run_prompt">Get a full AI-written analysis of your spending patterns, habits, and personalized suggestions.</div>
          </div>
        </div>

        <div id="ai-loading" style="display:none;text-align:center;padding:16px 0">
          <div style="display:inline-block;width:28px;height:28px;border:3px solid var(--surface-3);border-top-color:var(--royal);border-radius:50%;animation:spin .8s linear infinite"></div>
          <div style="font-size:.82rem;color:var(--text-secondary);margin-top:10px" id="ai-loading-msg">Analyzing your spending patterns...</div>
        </div>
      </div>
    </div>

    <!-- ═══ SCREEN 3: REMINDERS ═══ -->
    <div class="screen" id="screen-reminders">
      <div class="btn-row">
        <button class="btn-action primary-action" onclick="openBillModal()"><span class="btn-icon">📋</span><span data-i18n="btn_add_bill">Add Bill</span></button>
        <button class="btn-action primary-action" onclick="openPaydayModal()"><span class="btn-icon">📅</span><span data-i18n="btn_add_payday">Add Payday</span></button>
      </div>
      <div class="card">
        <div class="section-header">
          <div class="card-title" style="margin:0" data-i18n="card_bills_due">Bills Due</div>
          <span class="badge badge-red" id="bills-count">0</span>
        </div>
        <div id="bills-list"></div>
      </div>
      <div class="card">
        <div class="card-title" data-i18n="card_paydays">Paydays</div>
        <div id="paydays-list"></div>
      </div>
    </div>

    <!-- ═══ SCREEN 4: SAVINGS GOALS ═══ -->
    <div class="screen" id="screen-goals">
      <div class="btn-row">
        <button class="btn-action primary-action" onclick="openModal('add-goal-modal')"><span class="btn-icon">🎯</span><span data-i18n="btn_new_goal">New Goal</span></button>
        <button class="btn-action" onclick="openModal('contribute-modal')"><span class="btn-icon">💸</span><span data-i18n="btn_add_funds">Add Funds</span></button>
      </div>
      <div class="card" id="goals-overview" style="display:none">
        <div class="card-title" data-i18n="card_goals_overview">Goals Overview</div>
        <div class="chart-wrap" style="height:180px"><canvas id="goals-chart"></canvas></div>
      </div>
      <div class="card" id="acct-usage-card" style="display:none">
        <div class="card-title" data-i18n="card_acct_usage">Account Usage by Goals</div>
        <div id="acct-usage-list"></div>
      </div>
      <div id="goals-list"></div>
    </div>

    <!-- ═══ SCREEN 5: MUTUAL FINANCES ═══ -->
    <div class="screen" id="screen-mutual">
      <div class="empty-state" id="mutual-empty-state" style="display:none;padding:3rem 1rem">
        <div class="empty-icon">👫</div>
        <p><span data-i18n="empty_no_partner">No partner connected yet.</span><br/><span data-i18n="empty_tap_avatar">Tap your avatar → Connect with Another User.</span></p>
      </div>
      <div id="mutual-content">
      <div class="mutual-hero">
        <div class="hero-label" data-i18n="hero_combined_balance">Combined Balance</div>
        <div class="hero-amount" id="mutual-combined-total">$0.00</div>
        <div class="mutual-user-row">
          <div class="mutual-user-card">
            <div class="mutual-user-name" id="mutual-user1-name">You</div>
            <div class="mutual-user-bal" id="mutual-user1-bal">$0.00</div>
          </div>
          <div class="mutual-user-card">
            <div class="mutual-user-name" id="mutual-user2-name">Partner</div>
            <div class="mutual-user-bal" id="mutual-user2-bal">$0.00</div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-title" data-i18n="card_timeline_combined">Spending Timeline (Combined)</div>
        <div class="tab-row" id="mutual-tabs">
          <div class="tab active" onclick="setMutualTab('week',this)" data-i18n="tab_weekly">Weekly</div>
          <div class="tab" onclick="setMutualTab('month',this)" data-i18n="tab_monthly">Monthly</div>
          <div class="tab" onclick="setMutualTab('year',this)" data-i18n="tab_yearly">Yearly</div>
        </div>
        <div class="chart-wrap" style="height:200px"><canvas id="mutual-chart"></canvas></div>
      </div>
      <div class="card">
        <div class="card-title" id="mutual-summary-label">Combined Weekly Summary</div>
        <div id="mutual-summary-content"></div>
      </div>
      <div class="card">
        <div class="card-title" data-i18n="card_combined_monthly">Combined Monthly Summary</div>
        <div id="mutual-monthly-summary-content"></div>
      </div>
      <div class="card">
        <div class="section-header" style="margin-bottom:8px">
          <div class="card-title" style="margin:0" data-i18n="card_personal_budgets_both">Personal Budgets (Both)</div>
        </div>
        <div id="mutual-personal-budgets"></div>
      </div>
      <div class="card">
        <div class="section-header" style="margin-bottom:8px">
          <div class="card-title" style="margin:0" data-i18n="card_shared_budgets">Shared Budgets</div>
          <span class="section-action" onclick="openMutualBudgetModal()" data-i18n="btn_add_shared_budget">+ New Shared Budget</span>
        </div>
        <div id="mutual-shared-budgets"></div>
      </div>
      <div class="card">
        <div class="section-header"><div class="card-title" style="margin:0" data-i18n="card_recent_both">Recent Activity (Both)</div></div>
        <div id="mutual-transactions"></div>
      </div>
      <div class="card">
        <div class="card-title" data-i18n="card_combined_reminders">Combined Reminders</div>
        <div id="mutual-reminders"></div>
      </div>
      </div>
    </div>
  </div>

  <!-- BOTTOM NAV -->
  <nav class="bottom-nav" id="bottom-nav">
    <div class="nav-item active" onclick="switchScreen('finances',this)"><span class="nav-icon">🏠</span><span data-i18n="nav_finances">My Finances</span></div>
    <div class="nav-item" onclick="switchScreen('stats',this)"><span class="nav-icon">📊</span><span data-i18n="nav_stats">Stats</span></div>
    <div class="nav-item" onclick="switchScreen('reminders',this)"><span class="nav-icon">🔔</span><span data-i18n="nav_reminders">Reminders</span></div>
    <div class="nav-item" onclick="switchScreen('goals',this)"><span class="nav-icon">🎯</span><span data-i18n="nav_goals">Personal Goals</span></div>
    <div class="nav-item" id="mutual-nav-item" style="display:none" onclick="switchScreen('mutual',this)"><span class="nav-icon">👫</span><span data-i18n="nav_mutual">Mutual</span></div>
  </nav>
</div>

<!-- ████ MODALS ████ -->

<!-- Add Account -->
<div class="modal-overlay" id="add-account-modal">
  <div class="modal">
    <div class="modal-handle"></div>
    <div class="modal-title" data-i18n="modal_add_account">Add Account</div>
    <label data-i18n="lbl_account_name">Account Name</label>
    <input type="text" id="acct-name" data-i18n-placeholder="ph_account_name" placeholder="e.g. Chase Checking"/>
    <label data-i18n="lbl_account_type">Account Type</label>
    <select id="acct-type">
      <option value="checking" data-i18n="accttype_checking">Checking</option>
      <option value="savings" data-i18n="accttype_savings">Savings</option>
      <option value="investment" data-i18n="accttype_investment">Investment</option>
      <option value="credit" data-i18n="accttype_credit">Credit Card</option>
      <option value="cash" data-i18n="accttype_cash">Cash</option>
      <option value="other" data-i18n="accttype_other">Other</option>
    </select>
    <label data-i18n="lbl_current_balance">Current Balance ($)</label>
    <input type="number" id="acct-balance" placeholder="0.00" step="0.01" min="0"/>
    <div class="modal-row">
      <button class="btn-cancel" onclick="closeModal('add-account-modal')" data-i18n="btn_cancel">Cancel</button>
      <button class="btn-primary" onclick="addAccount()" data-i18n="btn_save_account">Save Account</button>
    </div>
  </div>
</div>

<!-- Update Balance -->
<div class="modal-overlay" id="update-balance-modal">
  <div class="modal">
    <div class="modal-handle"></div>
    <div class="modal-title" data-i18n="modal_update_balance">Update Account Balance</div>
    <label data-i18n="lbl_select_account">Select Account</label>
    <select id="upd-acct-select"></select>
    <label data-i18n="lbl_new_balance">New Balance ($)</label>
    <input type="number" id="upd-balance" placeholder="0.00" step="0.01"/>
    <div class="modal-row">
      <button class="btn-cancel" onclick="closeModal('update-balance-modal')" data-i18n="btn_cancel">Cancel</button>
      <button class="btn-primary" onclick="updateBalance()" data-i18n="btn_update_balance_submit">Update Balance</button>
    </div>
  </div>
</div>

<!-- Add Income -->
<div class="modal-overlay" id="add-income-modal">
  <div class="modal">
    <div class="modal-handle"></div>
    <div class="modal-title" data-i18n="modal_add_income">Add Income</div>
    <label data-i18n="lbl_amount_earned">Amount Earned ($)</label>
    <input type="number" id="income-amount" placeholder="0.00" step="0.01" min="0"/>
    <label data-i18n="lbl_description">Description</label>
    <input type="text" id="income-desc" data-i18n-placeholder="ph_income_desc" placeholder="e.g. Paycheck, Freelance"/>
    <label data-i18n="lbl_add_to_account">Add to Account</label>
    <select id="income-acct-select"></select>
    <label data-i18n="lbl_date">Date</label>
    <input type="date" id="income-date"/>
    <div class="modal-row">
      <button class="btn-cancel" onclick="closeModal('add-income-modal')" data-i18n="btn_cancel">Cancel</button>
      <button class="btn-primary" onclick="addIncome()" data-i18n="btn_add_income_submit">Add Income</button>
    </div>
  </div>
</div>

<!-- Add/Edit Expense -->
<div class="modal-overlay" id="add-expense-modal">
  <div class="modal">
    <div class="modal-handle"></div>
    <div class="modal-title" id="exp-modal-title" data-i18n="modal_add_expense">Add Expense</div>
    <input type="hidden" id="exp-edit-id"/>
    <label data-i18n="lbl_amount">Amount ($)</label>
    <input type="number" id="exp-amount" placeholder="0.00" step="0.01" min="0"/>
    <label data-i18n="lbl_description">Description</label>
    <input type="text" id="exp-desc" data-i18n-placeholder="ph_expense_desc" placeholder="e.g. Groceries, Rent"/>
    <label data-i18n="lbl_category">Category</label>
    <select id="exp-cat">
      <option value="🍔 Food">🍔 Food</option>
      <option value="🚗 Transport">🚗 Transport</option>
      <option value="⛽ Gas">⛽ Gas</option>
      <option value="🏠 Housing">🏠 Housing</option>
      <option value="🛒 Shopping">🛒 Shopping</option>
      <option value="💊 Health">💊 Health</option>
      <option value="🎬 Entertainment">🎬 Entertainment</option>
      <option value="📱 Utilities">📱 Utilities</option>
      <option value="📚 Education">📚 Education</option>
      <option value="✈️ Travel">✈️ Travel</option>
      <option value="⛪ Church">⛪ Church</option>
      <option value="💼 Other">💼 Other</option>
    </select>
    <label data-i18n="lbl_from_account">From Account</label>
    <select id="exp-acct-select"></select>
    <label data-i18n="lbl_date">Date</label>
    <input type="date" id="exp-date"/>
    <div class="modal-row">
      <button class="btn-cancel" onclick="closeModal('add-expense-modal')" data-i18n="btn_cancel">Cancel</button>
      <button class="btn-primary" id="exp-save-btn" onclick="saveExpense()" data-i18n="btn_save_expense">Add Expense</button>
    </div>
  </div>
</div>

<!-- Add/Edit Bill -->
<div class="modal-overlay" id="add-bill-modal">
  <div class="modal">
    <div class="modal-handle"></div>
    <div class="modal-title" id="bill-modal-title" data-i18n="modal_add_bill">Add Bill Reminder</div>
    <input type="hidden" id="bill-edit-id"/>
    <label data-i18n="lbl_bill_name">Bill Name</label>
    <input type="text" id="bill-name" data-i18n-placeholder="ph_bill_name" placeholder="e.g. Rent, Netflix, Electric"/>
    <label data-i18n="lbl_amount">Amount ($)</label>
    <input type="number" id="bill-amount" placeholder="0.00" step="0.01" min="0"/>
    <label data-i18n="lbl_first_due">First Due Date</label>
    <input type="date" id="bill-date"/>
    <label data-i18n="lbl_repeats">Repeats</label>
    <select id="bill-recur">
      <option value="once" data-i18n="recur_once">One-time only</option>
      <option value="weekly" data-i18n="recur_weekly">Every week</option>
      <option value="monthly" selected data-i18n="recur_monthly">Every month</option>
      <option value="yearly" data-i18n="recur_yearly">Every year</option>
    </select>
    <div id="bill-end-wrap">
      <label data-i18n="lbl_end_recur">End Recurrence (optional)</label>
      <input type="date" id="bill-end-date"/>
    </div>
    <label data-i18n="lbl_bill_account">Account (optional — auto-deducts when logged)</label>
    <select id="bill-acct-select"><option value="">—</option></select>
    <label data-i18n="lbl_bill_category">Category</label>
    <select id="bill-cat-select">
      <option value="🍔 Food">🍔 Food</option>
      <option value="🚗 Transport">🚗 Transport</option>
      <option value="⛽ Gas">⛽ Gas</option>
      <option value="🏠 Housing">🏠 Housing</option>
      <option value="🛒 Shopping">🛒 Shopping</option>
      <option value="💊 Health">💊 Health</option>
      <option value="🎬 Entertainment">🎬 Entertainment</option>
      <option value="📱 Utilities">📱 Utilities</option>
      <option value="📚 Education">📚 Education</option>
      <option value="✈️ Travel">✈️ Travel</option>
      <option value="⛪ Church">⛪ Church</option>
      <option value="💼 Other" selected>💼 Other</option>
    </select>
    <div class="modal-row">
      <button class="btn-cancel" onclick="closeModal('add-bill-modal')" data-i18n="btn_cancel">Cancel</button>
      <button class="btn-primary" id="bill-save-btn" onclick="saveBill()" data-i18n="btn_save_bill">Save Bill</button>
    </div>
  </div>
</div>

<!-- Add/Edit Payday -->
<div class="modal-overlay" id="add-payday-modal">
  <div class="modal">
    <div class="modal-handle"></div>
    <div class="modal-title" id="payday-modal-title" data-i18n="modal_add_payday">Add Payday Reminder</div>
    <input type="hidden" id="payday-edit-id"/>
    <label data-i18n="lbl_payday_label">Label</label>
    <input type="text" id="pay-label" data-i18n-placeholder="ph_payday_label" placeholder="e.g. Main Job, Side Gig"/>
    <label data-i18n="lbl_expected_amount">Expected Amount ($)</label>
    <input type="number" id="pay-amount" placeholder="0.00" step="0.01" min="0"/>
    <label data-i18n="lbl_first_payday">First Payday</label>
    <input type="date" id="pay-date"/>
    <label data-i18n="lbl_frequency">Frequency</label>
    <select id="pay-freq">
      <option value="weekly" data-i18n="freq_weekly">Weekly</option>
      <option value="biweekly" selected data-i18n="freq_biweekly">Bi-weekly (every 2 weeks)</option>
      <option value="semimonthly" data-i18n="freq_semimonthly">Semi-monthly (1st &amp; 15th)</option>
      <option value="monthly" data-i18n="freq_monthly">Monthly</option>
    </select>
    <label data-i18n="lbl_end_date_opt">End Date (optional)</label>
    <input type="date" id="pay-end-date"/>
    <label data-i18n="lbl_payday_account">Account (optional — auto-deposits when logged)</label>
    <select id="payday-acct-select"><option value="">—</option></select>
    <div class="modal-row">
      <button class="btn-cancel" onclick="closeModal('add-payday-modal')" data-i18n="btn_cancel">Cancel</button>
      <button class="btn-primary" id="payday-save-btn" onclick="savePayday()" data-i18n="btn_save_payday">Save Payday</button>
    </div>
  </div>
</div>

<!-- New Goal -->
<div class="modal-overlay" id="add-goal-modal">
  <div class="modal">
    <div class="modal-handle"></div>
    <div class="modal-title" data-i18n="modal_new_goal">New Savings Goal</div>
    <label data-i18n="lbl_goal_name">Goal Name</label>
    <input type="text" id="goal-name" data-i18n-placeholder="ph_goal_name" placeholder="e.g. Hawaii Vacation"/>
    <label data-i18n="lbl_goal_category">Category</label>
    <select id="goal-type">
      <option value="✈️ Vacation">✈️ Vacation</option>
      <option value="🚨 Emergency Fund">🚨 Emergency Fund</option>
      <option value="🏠 Home">🏠 Home</option>
      <option value="🚗 Car">🚗 Car</option>
      <option value="📚 Education">📚 Education</option>
      <option value="💍 Wedding/Event">💍 Wedding/Event</option>
      <option value="🎁 Gift">🎁 Gift</option>
      <option value="🎯 Custom">🎯 Custom</option>
    </select>
    <label data-i18n="lbl_target_amount">Target Amount ($)</label>
    <input type="number" id="goal-target" placeholder="0.00" step="0.01" min="0"/>
    <label data-i18n="lbl_initial_saved">Initial Amount Already Saved ($)</label>
    <input type="number" id="goal-start" placeholder="0.00" step="0.01" min="0" value="0"/>
    <label data-i18n="lbl_linked_account">Linked Account (funds taken from here)</label>
    <select id="goal-acct-select"></select>
    <label data-i18n="lbl_target_date_opt">Target Date (optional)</label>
    <input type="date" id="goal-date"/>
    <div class="modal-row">
      <button class="btn-cancel" onclick="closeModal('add-goal-modal')" data-i18n="btn_cancel">Cancel</button>
      <button class="btn-primary" onclick="addGoal()" data-i18n="btn_create_goal">Create Goal</button>
    </div>
  </div>
</div>

<!-- Add Funds to Goal -->
<div class="modal-overlay" id="contribute-modal">
  <div class="modal">
    <div class="modal-handle"></div>
    <div class="modal-title" data-i18n="modal_add_funds">Add Funds to Goal</div>
    <label data-i18n="lbl_select_goal">Select Goal</label>
    <select id="contrib-goal-select"></select>
    <label data-i18n="lbl_amount_to_add">Amount to Add ($)</label>
    <input type="number" id="contrib-amount" placeholder="0.00" step="0.01" min="0"/>
    <div class="modal-row">
      <button class="btn-cancel" onclick="closeModal('contribute-modal')" data-i18n="btn_cancel">Cancel</button>
      <button class="btn-primary" onclick="contributeToGoal()" data-i18n="btn_add_funds_submit">Add Funds</button>
    </div>
  </div>
</div>

<!-- Change Password -->
<div class="modal-overlay" id="change-password-modal">
  <div class="modal">
    <div class="modal-handle"></div>
    <div class="modal-title" data-i18n="modal_change_password">Change Password</div>
    <label data-i18n="lbl_current_password">Current Password</label>
    <input type="password" id="cp-current" placeholder="Current password"/>
    <label data-i18n="lbl_new_password">New Password</label>
    <input type="password" id="cp-new" placeholder="New password"/>
    <label data-i18n="lbl_confirm_new_password">Confirm New Password</label>
    <input type="password" id="cp-confirm" placeholder="Confirm new password"/>
    <div class="auth-error" id="cp-error"></div>
    <div class="modal-row">
      <button class="btn-cancel" onclick="closeModal('change-password-modal')" data-i18n="btn_cancel">Cancel</button>
      <button class="btn-primary" onclick="changePassword()" data-i18n="btn_save">Save</button>
    </div>
  </div>
</div>

<!-- Connect User -->
<div class="modal-overlay" id="connect-modal">
  <div class="modal">
    <div class="modal-handle"></div>
    <div class="modal-title" data-i18n="modal_connect_partner">Connect with Partner</div>

    <div id="conn-step1">
      <p style="font-size:.85rem;color:var(--text-secondary);margin-bottom:14px;line-height:1.5" data-i18n="connect_intro">
        Enter your partner's username. This sends a request to their account — they'll see it waiting on their own device, no matter where they are.
      </p>
      <label data-i18n="lbl_partner_username">Partner's Username</label>
      <input type="text" id="connect-username" data-i18n-placeholder="ph_partner_username" placeholder="Enter their username" autocapitalize="none" autocorrect="off"/>
      <div class="auth-error" id="connect-error"></div>
      <div class="modal-row" style="margin-top:14px">
        <button class="btn-cancel" onclick="closeModal('connect-modal')" data-i18n="btn_cancel">Cancel</button>
        <button class="btn-primary" onclick="sendConnectRequest()" data-i18n="btn_send_request">Send Request</button>
      </div>
    </div>

    <div id="conn-step2" style="display:none">
      <p style="font-size:.85rem;color:var(--text-secondary);margin-bottom:10px;line-height:1.5" data-i18n="connect_code_intro">
        Send your partner this 6-digit code (by text, call, or in person). They'll enter it on their own device to confirm the connection — it works across any device, anywhere.
      </p>
      <div style="text-align:center;padding:14px 0 8px">
        <div style="font-size:.72rem;font-weight:700;color:var(--text-secondary);text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px" data-i18n="lbl_6digit_code">6-Digit Code</div>
        <div id="conn-code-display" style="font-size:2.4rem;font-weight:800;letter-spacing:.5rem;color:var(--accent);font-variant-numeric:tabular-nums">------</div>
        <button class="btn-primary btn-sm" style="margin-top:8px" onclick="copyConnectCode()" data-i18n="btn_copy_code">Copy Code</button>
      </div>
      <p style="font-size:.78rem;color:var(--text-secondary);margin-top:10px;line-height:1.4" data-i18n="connect_how_it_works">
        📱 How it works: Your partner signs into their own account, taps the 🔔 bell (your request will be waiting there), and enters this code to approve.
      </p>
      <div class="modal-row" style="margin-top:14px">
        <button class="btn-cancel" onclick="closeModal('connect-modal')" data-i18n="btn_close">Close</button>
      </div>
    </div>
  </div>
</div>

<!-- Approve Connection -->
<div class="modal-overlay" id="approve-modal">
  <div class="modal">
    <div class="modal-handle"></div>
    <div class="modal-title" data-i18n="modal_connection_request">Connection Request</div>
    <p style="font-size:.85rem;color:var(--text-secondary);margin-bottom:8px">
      <span id="approve-requester" style="color:var(--accent);font-weight:700"></span> <span data-i18n="approve_wants_connect">wants to connect and share finances with you.</span>
    </p>
    <p style="font-size:.85rem;color:var(--text-secondary);margin-bottom:4px" data-i18n="approve_enter_code">Enter the 6-digit code they shared with you:</p>
    <input type="number" id="approve-code-input" placeholder="6-digit code" maxlength="6"
      style="width:100%;padding:14px;font-size:1.4rem;font-weight:700;text-align:center;letter-spacing:.3rem;background:var(--surface);border:1px solid var(--border);border-radius:12px;color:var(--text-primary);outline:none;margin:10px 0"/>
    <div class="modal-row">
      <button class="btn-cancel" onclick="denyConnection()" data-i18n="btn_deny">Deny</button>
      <button class="btn-primary" onclick="checkApprovalCode()" data-i18n="btn_approve">Approve &amp; Connect</button>
    </div>
  </div>
</div>

<!-- Transfer Funds -->
<div class="modal-overlay" id="transfer-modal">
  <div class="modal">
    <div class="modal-handle"></div>
    <div class="modal-title" data-i18n="modal_transfer">Transfer Between Accounts</div>
    <label data-i18n="lbl_from_account">From Account</label>
    <select id="transfer-from"></select>
    <label data-i18n="lbl_to_account">To Account</label>
    <select id="transfer-to"></select>
    <label data-i18n="lbl_amount">Amount ($)</label>
    <input type="number" id="transfer-amount" placeholder="0.00" step="0.01" min="0.01"/>
    <label data-i18n="lbl_note_opt">Note (optional)</label>
    <input type="text" id="transfer-note" data-i18n-placeholder="ph_transfer_note" placeholder="e.g. Moving to savings"/>
    <div style="margin-top:8px;padding:10px 12px;background:var(--surface-2);border-radius:10px;font-size:.8rem;color:var(--accent-light)" id="transfer-preview"></div>
    <div class="modal-row" style="margin-top:12px">
      <button class="btn-cancel" onclick="closeModal('transfer-modal')" data-i18n="btn_cancel">Cancel</button>
      <button class="btn-primary" onclick="doTransfer()" data-i18n="btn_transfer_submit">Transfer</button>
    </div>
  </div>
</div>

<!-- Set Budget -->
<div class="modal-overlay" id="budget-modal">
  <div class="modal">
    <div class="modal-handle"></div>
    <div class="modal-title" data-i18n="modal_set_budget">Set Budget</div>
    <input type="hidden" id="budget-edit-period"/>
    <input type="hidden" id="budget-is-mutual" value="0"/>
    <p id="budget-mutual-note" style="display:none;font-size:.8rem;color:var(--accent-light);background:var(--surface-2);border-radius:10px;padding:8px 10px;margin-bottom:8px" data-i18n="shared_budget_note">This budget will track combined spending from both of you and both of you can manage it.</p>
    <label data-i18n="lbl_budget_limit">Budget Limit ($)</label>
    <input type="number" id="budget-amount" placeholder="e.g. 500.00" step="0.01" min="0.01"/>
    <label data-i18n="lbl_period">Period</label>
    <select id="budget-period">
      <option value="weekly" data-i18n="period_weekly">Weekly</option>
      <option value="monthly" data-i18n="period_monthly">Monthly</option>
      <option value="yearly" data-i18n="period_yearly">Yearly</option>
    </select>
    <label data-i18n="lbl_budget_category">Category (optional — leave blank for total spending)</label>
    <select id="budget-cat">
      <option value="" data-i18n="opt_all_spending">All Spending</option>
      <option value="🍔 Food">🍔 Food</option>
      <option value="🚗 Transport">🚗 Transport</option>
      <option value="⛽ Gas">⛽ Gas</option>
      <option value="🏠 Housing">🏠 Housing</option>
      <option value="🛒 Shopping">🛒 Shopping</option>
      <option value="💊 Health">💊 Health</option>
      <option value="🎬 Entertainment">🎬 Entertainment</option>
      <option value="📱 Utilities">📱 Utilities</option>
      <option value="📚 Education">📚 Education</option>
      <option value="✈️ Travel">✈️ Travel</option>
      <option value="⛪ Church">⛪ Church</option>
      <option value="💼 Other">💼 Other</option>
    </select>
    <div class="modal-row" style="margin-top:14px">
      <button class="btn-cancel" onclick="closeModal('budget-modal')" data-i18n="btn_cancel">Cancel</button>
      <button class="btn-primary" onclick="saveBudget()" data-i18n="btn_save_budget">Save Budget</button>
    </div>
  </div>
</div>

<!-- Edit Goal -->
<div class="modal-overlay" id="edit-goal-modal">
  <div class="modal">
    <div class="modal-handle"></div>
    <div class="modal-title" data-i18n="modal_edit_goal">Edit Goal</div>
    <input type="hidden" id="eg-id"/>
    <label data-i18n="lbl_goal_name">Goal Name</label>
    <input type="text" id="eg-name" placeholder="Goal name"/>
    <label data-i18n="lbl_goal_category">Category</label>
    <select id="eg-type">
      <option value="✈️ Vacation">✈️ Vacation</option>
      <option value="🚨 Emergency Fund">🚨 Emergency Fund</option>
      <option value="🏠 Home">🏠 Home</option>
      <option value="🚗 Car">🚗 Car</option>
      <option value="📚 Education">📚 Education</option>
      <option value="💍 Wedding/Event">💍 Wedding/Event</option>
      <option value="🎁 Gift">🎁 Gift</option>
      <option value="🎯 Custom">🎯 Custom</option>
    </select>
    <label data-i18n="lbl_target_amount">Target Amount ($)</label>
    <input type="number" id="eg-target" placeholder="0.00" step="0.01" min="0"/>
    <label>Current Saved ($)</label>
    <input type="number" id="eg-saved" placeholder="0.00" step="0.01" min="0"/>
    <label data-i18n="lbl_target_date_opt">Target Date (optional)</label>
    <input type="date" id="eg-date"/>
    <div class="modal-row">
      <button class="btn-cancel" onclick="closeModal('edit-goal-modal')" data-i18n="btn_cancel">Cancel</button>
      <button class="btn-primary" onclick="saveGoalEdit()" data-i18n="btn_save_goal_changes">Save Changes</button>
    </div>
  </div>
</div>

<!-- NEW: Settings -->
<div class="modal-overlay" id="settings-modal">
  <div class="modal">
    <div class="modal-handle"></div>
    <div class="modal-title" data-i18n="settings_title">Settings</div>
    <label data-i18n="settings_color">Color Theme</label>
    <div id="scheme-swatches" style="display:flex;gap:10px;flex-wrap:wrap;margin:8px 0 18px"></div>
    <label data-i18n="settings_language">Language</label>
    <select id="settings-lang-select">
      <option value="en">English</option>
      <option value="ko">한국어 (Korean)</option>
      <option value="ja">日本語 (Japanese)</option>
      <option value="es">Español (Spanish)</option>
    </select>
    <div class="modal-row" style="margin-top:16px">
      <button class="btn-cancel" onclick="closeModal('settings-modal')" data-i18n="btn_close">Close</button>
      <button class="btn-primary" onclick="saveSettings()" data-i18n="btn_save_settings">Save</button>
    </div>
  </div>
</div>

<!-- NEW: Category Detail -->
<div class="modal-overlay" id="category-detail-modal">
  <div class="modal">
    <div class="modal-handle"></div>
    <div class="modal-title" id="cat-detail-title">Category</div>
    <div style="font-size:.85rem;color:var(--text-secondary);margin-bottom:12px" id="cat-detail-total"></div>
    <div id="cat-detail-list" style="max-height:52vh;overflow-y:auto"></div>
    <div class="modal-row" style="margin-top:14px">
      <button class="btn-cancel" onclick="closeModal('category-detail-modal')" data-i18n="btn_close">Close</button>
    </div>
  </div>
</div>

<!-- All Transactions, grouped by category -->
<div class="modal-overlay" id="all-transactions-modal">
  <div class="modal">
    <div class="modal-handle"></div>
    <div class="modal-title" data-i18n="modal_all_transactions">All Transactions by Category</div>
    <div id="all-tx-list" style="max-height:65vh;overflow-y:auto"></div>
    <div class="modal-row" style="margin-top:14px">
      <button class="btn-cancel" onclick="closeModal('all-transactions-modal')" data-i18n="btn_close">Close</button>
    </div>
  </div>
</div>

<!-- Create a custom category -->
<div class="modal-overlay" id="add-category-modal">
  <div class="modal">
    <div class="modal-handle"></div>
    <div class="modal-title" data-i18n="modal_add_category">New Category</div>
    <label data-i18n="lbl_cat_emoji">Emoji (optional)</label>
    <input type="text" id="new-cat-emoji" placeholder="🏷️" maxlength="4"/>
    <label data-i18n="lbl_cat_name">Category Name</label>
    <input type="text" id="new-cat-name" data-i18n-placeholder="ph_cat_name" placeholder="e.g. Gaming"/>
    <div class="modal-row">
      <button class="btn-cancel" onclick="closeModal('add-category-modal')" data-i18n="btn_cancel">Cancel</button>
      <button class="btn-primary" onclick="saveNewCategory()" data-i18n="btn_create_category">Create</button>
    </div>
  </div>
</div>

<!-- NEW: Log Bill / Payday Occurrence -->
<div class="modal-overlay" id="post-occurrence-modal">
  <div class="modal">
    <div class="modal-handle"></div>
    <div class="modal-title" id="occ-title">Log Payment</div>
    <input type="hidden" id="occ-type"/>
    <input type="hidden" id="occ-id"/>
    <label data-i18n="lbl_occ_amount">Amount ($)</label>
    <input type="number" id="occ-amount" step="0.01" min="0"/>
    <label data-i18n="lbl_occ_account">Account</label>
    <select id="occ-acct-select"></select>
    <label data-i18n="lbl_occ_date">Date</label>
    <input type="date" id="occ-date"/>
    <div class="modal-row">
      <button class="btn-cancel" onclick="closeModal('post-occurrence-modal')" data-i18n="btn_cancel">Cancel</button>
      <button class="btn-primary" onclick="confirmOccurrence()" data-i18n="btn_confirm">Confirm</button>
    </div>
  </div>
</div>

<script>
// ════════════════════════════════════════════════════
//  CONFIG & STATE
// ════════════════════════════════════════════════════
const API_BASE='';
let authToken=localStorage.getItem('mf_token')||null;
let currentUser=null, currentUserFullname='';
let mutualPartner=null, partnerFullname='';
let incomingPendingReq=null;
let pollTimer=null;
let currentLang='en';
let selectedScheme='royal';

let store={accounts:[],transactions:[],bills:[],paydays:[],goals:[],budgets:[],mutualBudgets:[]};
let partnerStore={accounts:[],transactions:[],bills:[],paydays:[],goals:[],budgets:[]};

function getData(k){ return store[k]||[]; }
function setData(k,v){ store[k]=v; }
function getDataFor(_user,k){ return partnerStore[k]||[]; }

// ════════════════════════════════════════════════════
//  API HELPER
// ════════════════════════════════════════════════════
async function api(method,path,body){
  const headers={'Content-Type':'application/json'};
  if(authToken) headers['Authorization']='Bearer '+authToken;
  let res;
  try{
    res=await fetch(API_BASE+path,{method,headers,body:body!==undefined?JSON.stringify(body):undefined});
  }catch(e){
    throw new Error('Could not reach the server. Check your connection and try again.');
  }
  let data={};
  try{ data=await res.json(); }catch{}
  if(!res.ok){
    if(res.status===401){ authToken=null; localStorage.removeItem('mf_token'); }
    throw new Error(data.error||('Request failed ('+res.status+')'));
  }
  return data;
}

function normalizeAccount(a){ return {id:a._id||a.id,name:a.name,type:a.type,balance:a.balance}; }
function normalizeTransaction(t){ return {id:t._id||t.id,type:t.type,amount:t.amount,desc:t.desc,acctId:t.accountId,toAcctId:t.toAccountId,date:t.date,cat:t.category}; }
function normalizeBill(b){ return {id:b._id||b.id,name:b.name,amount:b.amount,date:b.startDate,recur:b.recur,endDate:b.endDate,paid:b.paid,acctId:b.acctId,cat:b.category}; }
function normalizePayday(p){ return {id:p._id||p.id,label:p.label,amount:p.amount,date:p.startDate,freq:p.freq,endDate:p.endDate,acctId:p.acctId}; }
function normalizeGoal(g){ return {id:g._id||g.id,name:g.name,type:g.category,target:g.target,saved:g.saved,date:g.targetDate,met:g.met,acctId:g.acctId}; }
function normalizeBudget(b){ return {id:b._id||b.id,key:b.key,period:b.period,cat:b.cat,amount:b.amount}; }

async function refreshAccounts(){
  try{ store.accounts=(await api('GET','/api/accounts')).map(normalizeAccount); }catch(e){}
}

// ════════════════════════════════════════════════════
//  i18n
// ════════════════════════════════════════════════════
const TR={
en:{
nav_finances:'My Finances',nav_stats:'Stats',nav_reminders:'Reminders',nav_goals:'Personal Goals',nav_mutual:'Mutual',
menu_settings:'Settings',menu_change_password:'Change Password',menu_connect:'Connect with Another User',menu_view_mutual:'View Mutual Finances',menu_disconnect:'Disconnect Partner',menu_delete_account:'Delete Account',menu_sign_out:'Sign Out',
hero_total_balance:'Total Balance',hero_sub_template:'across {n} accounts',
btn_add_income:'Add Income',btn_update_balance:'Update Balance',btn_add_account:'Add Account',btn_transfer:'Transfer',
card_my_accounts:'My Accounts',card_money_earned:'Money Earned Over Time',card_recent_tx:'Recent Transactions',btn_add_expense_action:'+ Add Expense',
empty_no_accounts:'No accounts yet.',empty_add_account_hint:'Tap "Add Account" to get started.',
empty_no_tx:'No transactions yet.',empty_add_tx_hint:'Tap "+ Add Expense" to log one.',
btn_view_all_tx:'View All by Category →',modal_all_transactions:'All Transactions by Category',modal_add_category:'New Category',lbl_cat_emoji:'Emoji (optional)',lbl_cat_name:'Category Name',ph_cat_name:'e.g. Gaming',btn_create_category:'Create',toast_category_added:'Category added ✅',opt_add_new_category:'➕ Add New Category',
tab_weekly:'Weekly',tab_monthly:'Monthly',tab_yearly:'Yearly',
card_spending_timeline:'Spending Timeline',card_balance_by_account:'Balance by Account',
lbl_weekly_summary:'Weekly Summary',lbl_monthly_summary:'Monthly Summary',stat_income:'Income',stat_spent:'Spent',stat_net:'Net',
card_budget_tracker:'💰 Budget Tracker',btn_add_budget:'+ Add Budget',empty_no_budgets:'No budgets set yet. Tap "+ Add Budget" to set spending limits.',
ai_title:'✨ AI Spending Analysis',ai_subtitle:'Powered by Claude · updates with your data',btn_analyze:'Analyze 🔍',btn_analyzing:'Analyzing…',btn_reanalyze:'Re-analyze 🔍',
ai_run_prompt:'Get a full AI-written analysis of your spending patterns, habits, and personalized suggestions.',ai_cat_title:'This Month by Category',empty_no_expenses_month:'Add expenses to see your spending breakdown.',score_default_label:'Run the analysis to get your spending score.',
btn_add_bill:'Add Bill',btn_add_payday:'Add Payday',card_bills_due:'Bills Due',empty_no_bills:'No bills added yet.',card_paydays:'Paydays',empty_no_paydays:'No paydays set yet.',
badge_pending:' pending',due_today:'Today',due_tomorrow:'Tomorrow',tpl_in_days:'In {n} days',past_due:'Past due',overdue_label:'Overdue',due_soon_label:'Due soon',lbl_ends:' · Ends',
btn_log:'Log',btn_end:'End',btn_edit:'Edit',btn_undo:'Undo',btn_paid:'Paid',
btn_new_goal:'New Goal',btn_add_funds:'Add Funds',card_goals_overview:'Goals Overview',card_acct_usage:'Account Usage by Goals',
empty_no_goals:'No goals yet.',empty_create_envelope:'Create an envelope to start saving.',days_left:' days left',past_target:'Past target date',
hero_combined_balance:'Combined Balance',card_timeline_combined:'Spending Timeline (Combined)',card_combined_monthly:'Combined Monthly Summary',card_recent_both:'Recent Activity (Both)',card_combined_reminders:'Combined Reminders',
card_personal_budgets_both:'Personal Budgets (Both)',card_shared_budgets:'Shared Budgets',btn_add_shared_budget:'+ New Shared Budget',shared_budget_note:'This budget will track combined spending from both of you and both of you can manage it.',empty_no_personal_budgets:'Neither of you has set any personal budgets yet.',empty_no_shared_budgets:'No shared budgets yet. Tap "+ New Shared Budget" to create one together.',lbl_you:'You',
empty_no_partner:'No partner connected yet.',empty_tap_avatar:'Tap your avatar → Connect with Another User.',empty_no_tx_yet:'No transactions yet.',empty_no_reminders_yet:'No reminders yet.',
modal_add_account:'Add Account',lbl_account_name:'Account Name',ph_account_name:'e.g. Chase Checking',lbl_account_type:'Account Type',lbl_current_balance:'Current Balance ($)',btn_cancel:'Cancel',btn_save_account:'Save Account',
accttype_checking:'Checking',accttype_savings:'Savings',accttype_investment:'Investment',accttype_credit:'Credit Card',accttype_cash:'Cash',accttype_other:'Other',
modal_update_balance:'Update Account Balance',lbl_select_account:'Select Account',lbl_new_balance:'New Balance ($)',btn_update_balance_submit:'Update Balance',
modal_add_income:'Add Income',lbl_amount_earned:'Amount Earned ($)',lbl_description:'Description',ph_income_desc:'e.g. Paycheck, Freelance',lbl_add_to_account:'Add to Account',lbl_date:'Date',btn_add_income_submit:'Add Income',
modal_add_expense:'Add Expense',modal_edit_expense:'Edit Expense',lbl_amount:'Amount ($)',ph_expense_desc:'e.g. Groceries, Rent',lbl_category:'Category',lbl_from_account:'From Account',btn_save_expense:'Add Expense',btn_save_changes:'Save Changes',
modal_add_bill:'Add Bill Reminder',modal_edit_bill:'Edit Bill Reminder',lbl_bill_name:'Bill Name',ph_bill_name:'e.g. Rent, Netflix, Electric',lbl_first_due:'First Due Date',lbl_repeats:'Repeats',
recur_once:'One-time only',recur_weekly:'Every week',recur_monthly:'Every month',recur_yearly:'Every year',
lbl_end_recur:'End Recurrence (optional)',lbl_bill_account:'Account (optional — auto-deducts when logged)',lbl_bill_category:'Category',btn_save_bill:'Save Bill',
modal_add_payday:'Add Payday Reminder',modal_edit_payday:'Edit Payday Reminder',lbl_payday_label:'Label',ph_payday_label:'e.g. Main Job, Side Gig',lbl_expected_amount:'Expected Amount ($)',lbl_first_payday:'First Payday',lbl_frequency:'Frequency',
freq_weekly:'Weekly',freq_biweekly:'Bi-weekly (every 2 weeks)',freq_semimonthly:'Semi-monthly (1st & 15th)',freq_monthly:'Monthly',
lbl_end_date_opt:'End Date (optional)',lbl_payday_account:'Account (optional — auto-deposits when logged)',btn_save_payday:'Save Payday',
modal_new_goal:'New Savings Goal',modal_edit_goal:'Edit Goal',lbl_goal_name:'Goal Name',ph_goal_name:'e.g. Hawaii Vacation',lbl_goal_category:'Category',lbl_target_amount:'Target Amount ($)',lbl_initial_saved:'Initial Amount Already Saved ($)',
lbl_linked_account:'Linked Account (funds taken from here)',lbl_target_date_opt:'Target Date (optional)',btn_create_goal:'Create Goal',btn_save_goal_changes:'Save Changes',
modal_add_funds:'Add Funds to Goal',lbl_select_goal:'Select Goal',lbl_amount_to_add:'Amount to Add ($)',btn_add_funds_submit:'Add Funds',
modal_change_password:'Change Password',lbl_current_password:'Current Password',lbl_new_password:'New Password',lbl_confirm_new_password:'Confirm New Password',btn_save:'Save',
modal_connect_partner:'Connect with Partner',connect_intro:"Enter your partner's username. This sends a request to their account — they'll see it waiting on their own device, no matter where they are.",lbl_partner_username:"Partner's Username",ph_partner_username:'Enter their username',btn_send_request:'Send Request',
connect_code_intro:"Send your partner this 6-digit code (by text, call, or in person). They'll enter it on their own device to confirm the connection — it works across any device, anywhere.",lbl_6digit_code:'6-Digit Code',btn_copy_code:'Copy Code',
connect_how_it_works:'📱 How it works: Your partner signs into their own account, taps the 🔔 bell (your request will be waiting there), and enters this code to approve.',btn_close:'Close',
modal_connection_request:'Connection Request',approve_wants_connect:'wants to connect and share finances with you.',approve_enter_code:'Enter the 6-digit code they shared with you:',btn_deny:'Deny',btn_approve:'Approve & Connect',
modal_transfer:'Transfer Between Accounts',lbl_to_account:'To Account',lbl_note_opt:'Note (optional)',ph_transfer_note:'e.g. Moving to savings',btn_transfer_submit:'Transfer',
modal_set_budget:'Set Budget',lbl_budget_limit:'Budget Limit ($)',lbl_period:'Period',period_weekly:'Weekly',period_monthly:'Monthly',period_yearly:'Yearly',
lbl_budget_category:'Category (optional — leave blank for total spending)',opt_all_spending:'All Spending',btn_save_budget:'Save Budget',
settings_title:'Settings',settings_color:'Color Theme',settings_language:'Language',btn_save_settings:'Save',settings_saved:'Settings saved ✅',
cat_detail_no_expenses:'No expenses in this category yet.',expense_singular:' expense',expense_plural:' expenses',
modal_log_bill:'Log Payment',modal_log_payday:'Log Payday',lbl_occ_amount:'Amount ($)',lbl_occ_account:'Account',lbl_occ_date:'Date',btn_confirm:'Confirm',toast_logged:'Logged ✅',
},
es:{
nav_finances:'Mis Finanzas',nav_stats:'Estadísticas',nav_reminders:'Recordatorios',nav_goals:'Metas Personales',nav_mutual:'Mutuo',
menu_settings:'Configuración',menu_change_password:'Cambiar Contraseña',menu_connect:'Conectar con Otro Usuario',menu_view_mutual:'Ver Finanzas Mutuas',menu_disconnect:'Desconectar Pareja',menu_delete_account:'Eliminar Cuenta',menu_sign_out:'Cerrar Sesión',
hero_total_balance:'Saldo Total',hero_sub_template:'en {n} cuentas',
btn_add_income:'Agregar Ingreso',btn_update_balance:'Actualizar Saldo',btn_add_account:'Agregar Cuenta',btn_transfer:'Transferir',
card_my_accounts:'Mis Cuentas',card_money_earned:'Dinero Ganado con el Tiempo',card_recent_tx:'Transacciones Recientes',btn_add_expense_action:'+ Agregar Gasto',
empty_no_accounts:'Aún no hay cuentas.',empty_add_account_hint:'Toca "Agregar Cuenta" para comenzar.',
empty_no_tx:'Aún no hay transacciones.',empty_add_tx_hint:'Toca "+ Agregar Gasto" para registrar una.',
btn_view_all_tx:'Ver Todas por Categoría →',modal_all_transactions:'Todas las Transacciones por Categoría',modal_add_category:'Nueva Categoría',lbl_cat_emoji:'Emoji (opcional)',lbl_cat_name:'Nombre de la Categoría',ph_cat_name:'ej. Videojuegos',btn_create_category:'Crear',toast_category_added:'Categoría agregada ✅',opt_add_new_category:'➕ Agregar Nueva Categoría',
tab_weekly:'Semanal',tab_monthly:'Mensual',tab_yearly:'Anual',
card_spending_timeline:'Línea de Tiempo de Gastos',card_balance_by_account:'Saldo por Cuenta',
lbl_weekly_summary:'Resumen Semanal',lbl_monthly_summary:'Resumen Mensual',stat_income:'Ingresos',stat_spent:'Gastado',stat_net:'Neto',
card_budget_tracker:'💰 Seguimiento de Presupuesto',btn_add_budget:'+ Agregar Presupuesto',empty_no_budgets:'Aún no hay presupuestos. Toca "+ Agregar Presupuesto" para fijar límites de gasto.',
ai_title:'✨ Análisis de Gastos con IA',ai_subtitle:'Con tecnología de Claude · se actualiza con tus datos',btn_analyze:'Analizar 🔍',btn_analyzing:'Analizando…',btn_reanalyze:'Reanalizar 🔍',
ai_run_prompt:'Obtén un análisis completo escrito por IA de tus patrones de gasto, hábitos y sugerencias personalizadas.',ai_cat_title:'Este Mes por Categoría',empty_no_expenses_month:'Agrega gastos para ver tu desglose de gastos.',score_default_label:'Ejecuta el análisis para obtener tu puntaje financiero.',
btn_add_bill:'Agregar Factura',btn_add_payday:'Agregar Día de Pago',card_bills_due:'Facturas Pendientes',empty_no_bills:'Aún no hay facturas agregadas.',card_paydays:'Días de Pago',empty_no_paydays:'Aún no hay días de pago configurados.',
badge_pending:' pendientes',due_today:'Hoy',due_tomorrow:'Mañana',tpl_in_days:'En {n} días',past_due:'Vencido',overdue_label:'Vencida',due_soon_label:'Próxima a vencer',lbl_ends:' · Termina',
btn_log:'Registrar',btn_end:'Finalizar',btn_edit:'Editar',btn_undo:'Deshacer',btn_paid:'Pagada',
btn_new_goal:'Nueva Meta',btn_add_funds:'Agregar Fondos',card_goals_overview:'Resumen de Metas',card_acct_usage:'Uso de Cuentas por Metas',
empty_no_goals:'Aún no hay metas.',empty_create_envelope:'Crea un sobre para empezar a ahorrar.',days_left:' días restantes',past_target:'Fecha objetivo pasada',
hero_combined_balance:'Saldo Combinado',card_timeline_combined:'Línea de Tiempo de Gastos (Combinado)',card_combined_monthly:'Resumen Mensual Combinado',card_recent_both:'Actividad Reciente (Ambos)',card_combined_reminders:'Recordatorios Combinados',
card_personal_budgets_both:'Presupuestos Personales (Ambos)',card_shared_budgets:'Presupuestos Compartidos',btn_add_shared_budget:'+ Nuevo Presupuesto Compartido',shared_budget_note:'Este presupuesto seguirá el gasto combinado de ambos y los dos podrán administrarlo.',empty_no_personal_budgets:'Ninguno de los dos ha fijado presupuestos personales todavía.',empty_no_shared_budgets:'Aún no hay presupuestos compartidos. Toca "+ Nuevo Presupuesto Compartido" para crear uno juntos.',lbl_you:'Tú',
empty_no_partner:'Aún no hay pareja conectada.',empty_tap_avatar:'Toca tu avatar → Conectar con Otro Usuario.',empty_no_tx_yet:'Aún no hay transacciones.',empty_no_reminders_yet:'Aún no hay recordatorios.',
modal_add_account:'Agregar Cuenta',lbl_account_name:'Nombre de la Cuenta',ph_account_name:'ej. Cuenta Corriente',lbl_account_type:'Tipo de Cuenta',lbl_current_balance:'Saldo Actual ($)',btn_cancel:'Cancelar',btn_save_account:'Guardar Cuenta',
accttype_checking:'Corriente',accttype_savings:'Ahorros',accttype_investment:'Inversión',accttype_credit:'Tarjeta de Crédito',accttype_cash:'Efectivo',accttype_other:'Otro',
modal_update_balance:'Actualizar Saldo de Cuenta',lbl_select_account:'Seleccionar Cuenta',lbl_new_balance:'Nuevo Saldo ($)',btn_update_balance_submit:'Actualizar Saldo',
modal_add_income:'Agregar Ingreso',lbl_amount_earned:'Monto Ganado ($)',lbl_description:'Descripción',ph_income_desc:'ej. Salario, Freelance',lbl_add_to_account:'Agregar a la Cuenta',lbl_date:'Fecha',btn_add_income_submit:'Agregar Ingreso',
modal_add_expense:'Agregar Gasto',modal_edit_expense:'Editar Gasto',lbl_amount:'Monto ($)',ph_expense_desc:'ej. Supermercado, Alquiler',lbl_category:'Categoría',lbl_from_account:'Desde la Cuenta',btn_save_expense:'Agregar Gasto',btn_save_changes:'Guardar Cambios',
modal_add_bill:'Agregar Recordatorio de Factura',modal_edit_bill:'Editar Recordatorio de Factura',lbl_bill_name:'Nombre de la Factura',ph_bill_name:'ej. Alquiler, Netflix, Electricidad',lbl_first_due:'Primera Fecha de Vencimiento',lbl_repeats:'Se Repite',
recur_once:'Solo una vez',recur_weekly:'Cada semana',recur_monthly:'Cada mes',recur_yearly:'Cada año',
lbl_end_recur:'Fin de Recurrencia (opcional)',lbl_bill_account:'Cuenta (opcional — se descuenta automáticamente al registrar)',lbl_bill_category:'Categoría',btn_save_bill:'Guardar Factura',
modal_add_payday:'Agregar Día de Pago',modal_edit_payday:'Editar Día de Pago',lbl_payday_label:'Etiqueta',ph_payday_label:'ej. Trabajo Principal, Trabajo Extra',lbl_expected_amount:'Monto Esperado ($)',lbl_first_payday:'Primer Día de Pago',lbl_frequency:'Frecuencia',
freq_weekly:'Semanal',freq_biweekly:'Quincenal (cada 2 semanas)',freq_semimonthly:'Dos veces al mes (día 1 y 15)',freq_monthly:'Mensual',
lbl_end_date_opt:'Fecha de Fin (opcional)',lbl_payday_account:'Cuenta (opcional — se deposita automáticamente al registrar)',btn_save_payday:'Guardar Día de Pago',
modal_new_goal:'Nueva Meta de Ahorro',modal_edit_goal:'Editar Meta',lbl_goal_name:'Nombre de la Meta',ph_goal_name:'ej. Vacaciones en Hawái',lbl_goal_category:'Categoría',lbl_target_amount:'Monto Objetivo ($)',lbl_initial_saved:'Monto Inicial Ya Ahorrado ($)',
lbl_linked_account:'Cuenta Vinculada (los fondos se toman de aquí)',lbl_target_date_opt:'Fecha Objetivo (opcional)',btn_create_goal:'Crear Meta',btn_save_goal_changes:'Guardar Cambios',
modal_add_funds:'Agregar Fondos a la Meta',lbl_select_goal:'Seleccionar Meta',lbl_amount_to_add:'Monto a Agregar ($)',btn_add_funds_submit:'Agregar Fondos',
modal_change_password:'Cambiar Contraseña',lbl_current_password:'Contraseña Actual',lbl_new_password:'Nueva Contraseña',lbl_confirm_new_password:'Confirmar Nueva Contraseña',btn_save:'Guardar',
modal_connect_partner:'Conectar con Pareja',connect_intro:'Ingresa el nombre de usuario de tu pareja. Esto envía una solicitud a su cuenta — la verá esperando en su propio dispositivo, sin importar dónde esté.',lbl_partner_username:'Nombre de Usuario de tu Pareja',ph_partner_username:'Ingresa su nombre de usuario',btn_send_request:'Enviar Solicitud',
connect_code_intro:'Envía a tu pareja este código de 6 dígitos (por mensaje, llamada o en persona). Lo ingresará en su propio dispositivo para confirmar la conexión — funciona en cualquier dispositivo, en cualquier lugar.',lbl_6digit_code:'Código de 6 Dígitos',btn_copy_code:'Copiar Código',
connect_how_it_works:'📱 Cómo funciona: Tu pareja inicia sesión en su propia cuenta, toca la campana 🔔 (tu solicitud estará esperando ahí) e ingresa este código para aprobar.',btn_close:'Cerrar',
modal_connection_request:'Solicitud de Conexión',approve_wants_connect:'quiere conectarse y compartir finanzas contigo.',approve_enter_code:'Ingresa el código de 6 dígitos que te compartieron:',btn_deny:'Rechazar',btn_approve:'Aprobar y Conectar',
modal_transfer:'Transferir Entre Cuentas',lbl_to_account:'A la Cuenta',lbl_note_opt:'Nota (opcional)',ph_transfer_note:'ej. Moviendo a ahorros',btn_transfer_submit:'Transferir',
modal_set_budget:'Fijar Presupuesto',lbl_budget_limit:'Límite de Presupuesto ($)',lbl_period:'Período',period_weekly:'Semanal',period_monthly:'Mensual',period_yearly:'Anual',
lbl_budget_category:'Categoría (opcional — déjalo en blanco para el gasto total)',opt_all_spending:'Todo el Gasto',btn_save_budget:'Guardar Presupuesto',
settings_title:'Configuración',settings_color:'Tema de Color',settings_language:'Idioma',btn_save_settings:'Guardar',settings_saved:'Configuración guardada ✅',
cat_detail_no_expenses:'Aún no hay gastos en esta categoría.',expense_singular:' gasto',expense_plural:' gastos',
modal_log_bill:'Registrar Pago',modal_log_payday:'Registrar Día de Pago',lbl_occ_amount:'Monto ($)',lbl_occ_account:'Cuenta',lbl_occ_date:'Fecha',btn_confirm:'Confirmar',toast_logged:'Registrado ✅',
},
ko:{
nav_finances:'내 재정',nav_stats:'통계',nav_reminders:'알림',nav_goals:'개인 목표',nav_mutual:'공동 재정',
menu_settings:'설정',menu_change_password:'비밀번호 변경',menu_connect:'다른 사용자와 연결',menu_view_mutual:'공동 재정 보기',menu_disconnect:'파트너 연결 해제',menu_delete_account:'계정 삭제',menu_sign_out:'로그아웃',
hero_total_balance:'총 잔액',hero_sub_template:'{n}개 계좌',
btn_add_income:'수입 추가',btn_update_balance:'잔액 수정',btn_add_account:'계좌 추가',btn_transfer:'이체',
card_my_accounts:'내 계좌',card_money_earned:'기간별 수입',card_recent_tx:'최근 거래 내역',btn_add_expense_action:'+ 지출 추가',
empty_no_accounts:'아직 계좌가 없습니다.',empty_add_account_hint:'"계좌 추가"를 눌러 시작하세요.',
empty_no_tx:'아직 거래 내역이 없습니다.',empty_add_tx_hint:'"+ 지출 추가"를 눌러 기록하세요.',
btn_view_all_tx:'카테고리별 전체 보기 →',modal_all_transactions:'카테고리별 전체 거래 내역',modal_add_category:'새 카테고리',lbl_cat_emoji:'이모지 (선택)',lbl_cat_name:'카테고리 이름',ph_cat_name:'예: 게임',btn_create_category:'만들기',toast_category_added:'카테고리가 추가되었습니다 ✅',opt_add_new_category:'➕ 새 카테고리 추가',
tab_weekly:'주간',tab_monthly:'월간',tab_yearly:'연간',
card_spending_timeline:'지출 타임라인',card_balance_by_account:'계좌별 잔액',
lbl_weekly_summary:'주간 요약',lbl_monthly_summary:'월간 요약',stat_income:'수입',stat_spent:'지출',stat_net:'순액',
card_budget_tracker:'💰 예산 관리',btn_add_budget:'+ 예산 추가',empty_no_budgets:'아직 설정된 예산이 없습니다. "+ 예산 추가"를 눌러 지출 한도를 설정하세요.',
ai_title:'✨ AI 지출 분석',ai_subtitle:'Claude 기반 · 데이터에 따라 업데이트됨',btn_analyze:'분석하기 🔍',btn_analyzing:'분석 중…',btn_reanalyze:'다시 분석하기 🔍',
ai_run_prompt:'지출 패턴, 습관, 맞춤 제안에 대한 전체 AI 분석을 받아보세요.',ai_cat_title:'이번 달 카테고리별 지출',empty_no_expenses_month:'지출을 추가하면 내역이 표시됩니다.',score_default_label:'분석을 실행하여 재정 점수를 확인하세요.',
btn_add_bill:'청구서 추가',btn_add_payday:'급여일 추가',card_bills_due:'예정된 청구서',empty_no_bills:'아직 등록된 청구서가 없습니다.',card_paydays:'급여일',empty_no_paydays:'아직 설정된 급여일이 없습니다.',
badge_pending:'건 대기 중',due_today:'오늘',due_tomorrow:'내일',tpl_in_days:'{n}일 후',past_due:'기한 지남',overdue_label:'기한 초과',due_soon_label:'곧 마감',lbl_ends:' · 종료',
btn_log:'기록',btn_end:'종료',btn_edit:'수정',btn_undo:'취소',btn_paid:'완료',
btn_new_goal:'새 목표',btn_add_funds:'금액 추가',card_goals_overview:'목표 개요',card_acct_usage:'목표별 계좌 사용 현황',
empty_no_goals:'아직 목표가 없습니다.',empty_create_envelope:'저축을 시작하려면 봉투를 만드세요.',days_left:'일 남음',past_target:'목표 날짜 지남',
hero_combined_balance:'공동 잔액',card_timeline_combined:'지출 타임라인 (공동)',card_combined_monthly:'공동 월간 요약',card_recent_both:'최근 활동 (둘 다)',card_combined_reminders:'공동 알림',
card_personal_budgets_both:'개인 예산 (둘 다)',card_shared_budgets:'공동 예산',btn_add_shared_budget:'+ 공동 예산 추가',shared_budget_note:'이 예산은 두 사람의 지출을 합산하여 추적하며, 두 사람 모두 관리할 수 있습니다.',empty_no_personal_budgets:'아직 두 사람 모두 개인 예산을 설정하지 않았습니다.',empty_no_shared_budgets:'아직 공동 예산이 없습니다. "+ 공동 예산 추가"를 눌러 함께 만들어보세요.',lbl_you:'나',
empty_no_partner:'아직 연결된 파트너가 없습니다.',empty_tap_avatar:'아바타를 눌러 → 다른 사용자와 연결하세요.',empty_no_tx_yet:'아직 거래 내역이 없습니다.',empty_no_reminders_yet:'아직 알림이 없습니다.',
modal_add_account:'계좌 추가',lbl_account_name:'계좌 이름',ph_account_name:'예: 우리은행 입출금',lbl_account_type:'계좌 유형',lbl_current_balance:'현재 잔액 ($)',btn_cancel:'취소',btn_save_account:'계좌 저장',
accttype_checking:'입출금',accttype_savings:'저축',accttype_investment:'투자',accttype_credit:'신용카드',accttype_cash:'현금',accttype_other:'기타',
modal_update_balance:'계좌 잔액 수정',lbl_select_account:'계좌 선택',lbl_new_balance:'새 잔액 ($)',btn_update_balance_submit:'잔액 수정',
modal_add_income:'수입 추가',lbl_amount_earned:'수입 금액 ($)',lbl_description:'설명',ph_income_desc:'예: 급여, 프리랜서',lbl_add_to_account:'입금할 계좌',lbl_date:'날짜',btn_add_income_submit:'수입 추가',
modal_add_expense:'지출 추가',modal_edit_expense:'지출 수정',lbl_amount:'금액 ($)',ph_expense_desc:'예: 식료품, 월세',lbl_category:'카테고리',lbl_from_account:'출금 계좌',btn_save_expense:'지출 추가',btn_save_changes:'변경 사항 저장',
modal_add_bill:'청구서 알림 추가',modal_edit_bill:'청구서 알림 수정',lbl_bill_name:'청구서 이름',ph_bill_name:'예: 월세, 넷플릭스, 전기세',lbl_first_due:'첫 납부 예정일',lbl_repeats:'반복',
recur_once:'한 번만',recur_weekly:'매주',recur_monthly:'매월',recur_yearly:'매년',
lbl_end_recur:'반복 종료일 (선택)',lbl_bill_account:'계좌 (선택 — 기록 시 자동 출금)',lbl_bill_category:'카테고리',btn_save_bill:'청구서 저장',
modal_add_payday:'급여일 알림 추가',modal_edit_payday:'급여일 알림 수정',lbl_payday_label:'이름표',ph_payday_label:'예: 본업, 부업',lbl_expected_amount:'예상 금액 ($)',lbl_first_payday:'첫 급여일',lbl_frequency:'주기',
freq_weekly:'매주',freq_biweekly:'격주 (2주마다)',freq_semimonthly:'월 2회 (1일 & 15일)',freq_monthly:'매월',
lbl_end_date_opt:'종료일 (선택)',lbl_payday_account:'계좌 (선택 — 기록 시 자동 입금)',btn_save_payday:'급여일 저장',
modal_new_goal:'새 저축 목표',modal_edit_goal:'목표 수정',lbl_goal_name:'목표 이름',ph_goal_name:'예: 하와이 여행',lbl_goal_category:'카테고리',lbl_target_amount:'목표 금액 ($)',lbl_initial_saved:'이미 저축한 금액 ($)',
lbl_linked_account:'연결된 계좌 (여기서 자금이 차감됨)',lbl_target_date_opt:'목표 날짜 (선택)',btn_create_goal:'목표 만들기',btn_save_goal_changes:'변경 사항 저장',
modal_add_funds:'목표에 금액 추가',lbl_select_goal:'목표 선택',lbl_amount_to_add:'추가할 금액 ($)',btn_add_funds_submit:'금액 추가',
modal_change_password:'비밀번호 변경',lbl_current_password:'현재 비밀번호',lbl_new_password:'새 비밀번호',lbl_confirm_new_password:'새 비밀번호 확인',btn_save:'저장',
modal_connect_partner:'파트너와 연결',connect_intro:'파트너의 사용자 이름을 입력하세요. 요청이 상대방 계정으로 전송되며, 어느 기기에서든 확인할 수 있습니다.',lbl_partner_username:'파트너의 사용자 이름',ph_partner_username:'사용자 이름 입력',btn_send_request:'요청 보내기',
connect_code_intro:'이 6자리 코드를 문자, 전화 또는 직접 파트너에게 전달하세요. 상대방이 자신의 기기에서 이 코드를 입력하면 연결이 확정됩니다.',lbl_6digit_code:'6자리 코드',btn_copy_code:'코드 복사',
connect_how_it_works:'📱 작동 방식: 파트너가 자신의 계정으로 로그인한 후 🔔 알림을 누르면 요청이 표시됩니다. 이 코드를 입력하면 승인됩니다.',btn_close:'닫기',
modal_connection_request:'연결 요청',approve_wants_connect:'님이 재정 공유 연결을 요청했습니다.',approve_enter_code:'상대방이 알려준 6자리 코드를 입력하세요:',btn_deny:'거절',btn_approve:'승인 및 연결',
modal_transfer:'계좌 간 이체',lbl_to_account:'입금 계좌',lbl_note_opt:'메모 (선택)',ph_transfer_note:'예: 저축 계좌로 이동',btn_transfer_submit:'이체',
modal_set_budget:'예산 설정',lbl_budget_limit:'예산 한도 ($)',lbl_period:'기간',period_weekly:'주간',period_monthly:'월간',period_yearly:'연간',
lbl_budget_category:'카테고리 (선택 — 전체 지출은 비워두세요)',opt_all_spending:'전체 지출',btn_save_budget:'예산 저장',
settings_title:'설정',settings_color:'색상 테마',settings_language:'언어',btn_save_settings:'저장',settings_saved:'설정이 저장되었습니다 ✅',
cat_detail_no_expenses:'이 카테고리에 아직 지출이 없습니다.',expense_singular:'건',expense_plural:'건',
modal_log_bill:'납부 기록',modal_log_payday:'급여 기록',lbl_occ_amount:'금액 ($)',lbl_occ_account:'계좌',lbl_occ_date:'날짜',btn_confirm:'확인',toast_logged:'기록되었습니다 ✅',
},
ja:{
nav_finances:'マイ家計',nav_stats:'統計',nav_reminders:'リマインダー',nav_goals:'個人目標',nav_mutual:'共同家計',
menu_settings:'設定',menu_change_password:'パスワード変更',menu_connect:'他のユーザーと連携',menu_view_mutual:'共同家計を見る',menu_disconnect:'パートナー連携を解除',menu_delete_account:'アカウント削除',menu_sign_out:'ログアウト',
hero_total_balance:'合計残高',hero_sub_template:'{n}口座',
btn_add_income:'収入を追加',btn_update_balance:'残高を更新',btn_add_account:'口座を追加',btn_transfer:'振替',
card_my_accounts:'My口座',card_money_earned:'期間別収入',card_recent_tx:'最近の取引',btn_add_expense_action:'+ 支出を追加',
empty_no_accounts:'まだ口座がありません。',empty_add_account_hint:'「口座を追加」をタップして始めましょう。',
empty_no_tx:'まだ取引がありません。',empty_add_tx_hint:'「+ 支出を追加」で記録しましょう。',
btn_view_all_tx:'カテゴリ別にすべて見る →',modal_all_transactions:'カテゴリ別のすべての取引',modal_add_category:'新しいカテゴリ',lbl_cat_emoji:'絵文字（任意）',lbl_cat_name:'カテゴリ名',ph_cat_name:'例：ゲーム',btn_create_category:'作成',toast_category_added:'カテゴリを追加しました ✅',opt_add_new_category:'➕ 新しいカテゴリを追加',
tab_weekly:'週間',tab_monthly:'月間',tab_yearly:'年間',
card_spending_timeline:'支出タイムライン',card_balance_by_account:'口座別残高',
lbl_weekly_summary:'週間サマリー',lbl_monthly_summary:'月間サマリー',stat_income:'収入',stat_spent:'支出',stat_net:'差引',
card_budget_tracker:'💰 予算トラッカー',btn_add_budget:'+ 予算を追加',empty_no_budgets:'まだ予算が設定されていません。「+ 予算を追加」で支出上限を設定しましょう。',
ai_title:'✨ AI支出分析',ai_subtitle:'Claude搭載 · データに応じて更新',btn_analyze:'分析する 🔍',btn_analyzing:'分析中…',btn_reanalyze:'再分析する 🔍',
ai_run_prompt:'あなたの支出パターン・習慣・改善提案について、AIによる詳細な分析を確認できます。',ai_cat_title:'今月のカテゴリ別支出',empty_no_expenses_month:'支出を追加すると内訳が表示されます。',score_default_label:'分析を実行して家計スコアを確認しましょう。',
btn_add_bill:'請求書を追加',btn_add_payday:'給料日を追加',card_bills_due:'支払い予定の請求書',empty_no_bills:'まだ請求書が追加されていません。',card_paydays:'給料日',empty_no_paydays:'まだ給料日が設定されていません。',
badge_pending:'件未払い',due_today:'今日',due_tomorrow:'明日',tpl_in_days:'{n}日後',past_due:'期限切れ',overdue_label:'期限超過',due_soon_label:'まもなく期限',lbl_ends:' · 終了',
btn_log:'記録',btn_end:'終了',btn_edit:'編集',btn_undo:'元に戻す',btn_paid:'支払済み',
btn_new_goal:'新しい目標',btn_add_funds:'資金を追加',card_goals_overview:'目標の概要',card_acct_usage:'目標別の口座利用状況',
empty_no_goals:'まだ目標がありません。',empty_create_envelope:'封筒を作成して貯蓄を始めましょう。',days_left:'日残り',past_target:'目標日を過ぎています',
hero_combined_balance:'合算残高',card_timeline_combined:'支出タイムライン（共同）',card_combined_monthly:'共同月間サマリー',card_recent_both:'最近のアクティビティ（両方）',card_combined_reminders:'共同リマインダー',
card_personal_budgets_both:'個人予算（両方）',card_shared_budgets:'共同予算',btn_add_shared_budget:'+ 共同予算を追加',shared_budget_note:'この予算は二人の合計支出を追跡し、二人ともが管理できます。',empty_no_personal_budgets:'まだどちらも個人予算を設定していません。',empty_no_shared_budgets:'まだ共同予算がありません。「+ 共同予算を追加」で一緒に作成しましょう。',lbl_you:'自分',
empty_no_partner:'まだパートナーと連携していません。',empty_tap_avatar:'アバターをタップ →「他のユーザーと連携」',empty_no_tx_yet:'まだ取引がありません。',empty_no_reminders_yet:'まだリマインダーがありません。',
modal_add_account:'口座を追加',lbl_account_name:'口座名',ph_account_name:'例：普通預金',lbl_account_type:'口座の種類',lbl_current_balance:'現在の残高 ($)',btn_cancel:'キャンセル',btn_save_account:'口座を保存',
accttype_checking:'普通預金',accttype_savings:'貯蓄',accttype_investment:'投資',accttype_credit:'クレジットカード',accttype_cash:'現金',accttype_other:'その他',
modal_update_balance:'口座残高を更新',lbl_select_account:'口座を選択',lbl_new_balance:'新しい残高 ($)',btn_update_balance_submit:'残高を更新',
modal_add_income:'収入を追加',lbl_amount_earned:'収入額 ($)',lbl_description:'説明',ph_income_desc:'例：給料、フリーランス',lbl_add_to_account:'入金先口座',lbl_date:'日付',btn_add_income_submit:'収入を追加',
modal_add_expense:'支出を追加',modal_edit_expense:'支出を編集',lbl_amount:'金額 ($)',ph_expense_desc:'例：食料品、家賃',lbl_category:'カテゴリ',lbl_from_account:'出金元口座',btn_save_expense:'支出を追加',btn_save_changes:'変更を保存',
modal_add_bill:'請求書リマインダーを追加',modal_edit_bill:'請求書リマインダーを編集',lbl_bill_name:'請求書名',ph_bill_name:'例：家賃、Netflix、電気代',lbl_first_due:'初回支払期限',lbl_repeats:'繰り返し',
recur_once:'一回のみ',recur_weekly:'毎週',recur_monthly:'毎月',recur_yearly:'毎年',
lbl_end_recur:'繰り返し終了日（任意）',lbl_bill_account:'口座（任意 — 記録時に自動引き落とし）',lbl_bill_category:'カテゴリ',btn_save_bill:'請求書を保存',
modal_add_payday:'給料日リマインダーを追加',modal_edit_payday:'給料日リマインダーを編集',lbl_payday_label:'ラベル',ph_payday_label:'例：本業、副業',lbl_expected_amount:'予想金額 ($)',lbl_first_payday:'初回給料日',lbl_frequency:'頻度',
freq_weekly:'毎週',freq_biweekly:'隔週（2週間ごと）',freq_semimonthly:'月2回（1日と15日）',freq_monthly:'毎月',
lbl_end_date_opt:'終了日（任意）',lbl_payday_account:'口座（任意 — 記録時に自動入金）',btn_save_payday:'給料日を保存',
modal_new_goal:'新しい貯蓄目標',modal_edit_goal:'目標を編集',lbl_goal_name:'目標名',ph_goal_name:'例：ハワイ旅行',lbl_goal_category:'カテゴリ',lbl_target_amount:'目標金額 ($)',lbl_initial_saved:'すでに貯めた金額 ($)',
lbl_linked_account:'連携口座（ここから資金を取ります）',lbl_target_date_opt:'目標日（任意）',btn_create_goal:'目標を作成',btn_save_goal_changes:'変更を保存',
modal_add_funds:'目標に資金を追加',lbl_select_goal:'目標を選択',lbl_amount_to_add:'追加する金額 ($)',btn_add_funds_submit:'資金を追加',
modal_change_password:'パスワード変更',lbl_current_password:'現在のパスワード',lbl_new_password:'新しいパスワード',lbl_confirm_new_password:'新しいパスワード（確認）',btn_save:'保存',
modal_connect_partner:'パートナーと連携',connect_intro:'パートナーのユーザー名を入力してください。リクエストが相手のアカウントに送信され、どのデバイスからでも確認できます。',lbl_partner_username:'パートナーのユーザー名',ph_partner_username:'ユーザー名を入力',btn_send_request:'リクエストを送信',
connect_code_intro:'この6桁のコードをメッセージ、電話、または直接パートナーに伝えてください。相手が自分のデバイスでこのコードを入力すると連携が完了します。',lbl_6digit_code:'6桁のコード',btn_copy_code:'コードをコピー',
connect_how_it_works:'📱 仕組み：パートナーが自分のアカウントにログインし、🔔ベルをタップするとリクエストが表示されます。このコードを入力すると承認されます。',btn_close:'閉じる',
modal_connection_request:'連携リクエスト',approve_wants_connect:'さんが家計の共有連携をリクエストしています。',approve_enter_code:'相手から共有された6桁のコードを入力してください：',btn_deny:'拒否',btn_approve:'承認して連携',
modal_transfer:'口座間振替',lbl_to_account:'振替先口座',lbl_note_opt:'メモ（任意）',ph_transfer_note:'例：貯蓄口座へ移動',btn_transfer_submit:'振替',
modal_set_budget:'予算を設定',lbl_budget_limit:'予算上限 ($)',lbl_period:'期間',period_weekly:'週間',period_monthly:'月間',period_yearly:'年間',
lbl_budget_category:'カテゴリ（任意 — 空欄で総支出）',opt_all_spending:'総支出',btn_save_budget:'予算を保存',
settings_title:'設定',settings_color:'カラーテーマ',settings_language:'言語',btn_save_settings:'保存',settings_saved:'設定を保存しました ✅',
cat_detail_no_expenses:'このカテゴリにはまだ支出がありません。',expense_singular:'件',expense_plural:'件',
modal_log_bill:'支払いを記録',modal_log_payday:'給料を記録',lbl_occ_amount:'金額 ($)',lbl_occ_account:'口座',lbl_occ_date:'日付',btn_confirm:'確認',toast_logged:'記録しました ✅',
}
};
function t(key){ return (TR[currentLang]&&TR[currentLang][key]) || (TR.en&&TR.en[key]) || key; }
function localeForLang(){ return {en:'en-US',es:'es-ES',ko:'ko-KR',ja:'ja-JP'}[currentLang]||'en-US'; }

function applyI18n(){
  document.querySelectorAll('[data-i18n]').forEach(el=>{ el.textContent=t(el.getAttribute('data-i18n')); });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{ el.placeholder=t(el.getAttribute('data-i18n-placeholder')); });
  applyCategoryLabels();
  applyGoalTypeLabels();
  populateCategoryDropdowns();
}

const CATEGORY_I18N={
'🍔 Food':{en:'🍔 Food',es:'🍔 Comida',ko:'🍔 음식',ja:'🍔 食費'},
'🚗 Transport':{en:'🚗 Transport',es:'🚗 Transporte',ko:'🚗 교통',ja:'🚗 交通費'},
'⛽ Gas':{en:'⛽ Gas',es:'⛽ Gasolina',ko:'⛽ 주유',ja:'⛽ ガソリン'},
'🏠 Housing':{en:'🏠 Housing',es:'🏠 Vivienda',ko:'🏠 주거',ja:'🏠 住居費'},
'🛒 Shopping':{en:'🛒 Shopping',es:'🛒 Compras',ko:'🛒 쇼핑',ja:'🛒 買い物'},
'💊 Health':{en:'💊 Health',es:'💊 Salud',ko:'💊 건강',ja:'💊 医療費'},
'🎬 Entertainment':{en:'🎬 Entertainment',es:'🎬 Entretenimiento',ko:'🎬 여가',ja:'🎬 娯楽'},
'📱 Utilities':{en:'📱 Utilities',es:'📱 Servicios',ko:'📱 공과금',ja:'📱 光熱費'},
'📚 Education':{en:'📚 Education',es:'📚 Educación',ko:'📚 교육',ja:'📚 教育費'},
'✈️ Travel':{en:'✈️ Travel',es:'✈️ Viajes',ko:'✈️ 여행',ja:'✈️ 旅行'},
'⛪ Church':{en:'⛪ Church',es:'⛪ Iglesia',ko:'⛪ 종교',ja:'⛪ 宗教'},
'💼 Other':{en:'💼 Other',es:'💼 Otro',ko:'💼 기타',ja:'💼 その他'},
'💵 Income':{en:'💵 Income',es:'💵 Ingreso',ko:'💵 수입',ja:'💵 収入'},
'🔄 Transfer':{en:'🔄 Transfer',es:'🔄 Transferencia',ko:'🔄 이체',ja:'🔄 振替'}
};
function catLabel(cat){ return (CATEGORY_I18N[cat]&&CATEGORY_I18N[cat][currentLang])||cat; }
function applyCategoryLabels(){
  document.querySelectorAll('#exp-cat, #budget-cat, #bill-cat-select').forEach(sel=>{
    Array.from(sel.options).forEach(opt=>{ if(CATEGORY_I18N[opt.value]) opt.textContent=catLabel(opt.value); });
  });
}

// ── Custom categories (per-user, synced via API) ──────────────────────────
let customCategories=[];
let pendingCategorySelectId=null;
function populateCategoryDropdowns(){
  ['exp-cat','budget-cat','bill-cat-select'].forEach(id=>{
    const sel=document.getElementById(id);
    if(!sel)return;
    const currentVal=sel.value;
    Array.from(sel.querySelectorAll('option[data-custom],option[data-addnew]')).forEach(o=>o.remove());
    customCategories.forEach(cat=>{
      const opt=document.createElement('option');
      opt.value=cat; opt.textContent=cat; opt.setAttribute('data-custom','1');
      sel.appendChild(opt);
    });
    const addOpt=document.createElement('option');
    addOpt.value='__add_new__'; addOpt.textContent=t('opt_add_new_category'); addOpt.setAttribute('data-addnew','1');
    sel.appendChild(addOpt);
    if(currentVal && currentVal!=='__add_new__') sel.value=currentVal;
    if(!sel._addCatWired){
      sel._addCatWired=true;
      sel.addEventListener('change',function(){
        if(this.value==='__add_new__'){
          pendingCategorySelectId=id;
          this.selectedIndex=0;
          openAddCategoryModal();
        }
      });
    }
  });
}
function openAddCategoryModal(){
  document.getElementById('new-cat-emoji').value='';
  document.getElementById('new-cat-name').value='';
  document.getElementById('add-category-modal').classList.add('open');
}
async function saveNewCategory(){
  const emoji=document.getElementById('new-cat-emoji').value.trim()||'🏷️';
  const name=document.getElementById('new-cat-name').value.trim();
  if(!name){alert('Please enter a category name.');return;}
  const full=emoji+' '+name;
  try{
    const res=await api('POST','/api/auth/categories',{category:full});
    customCategories=res.customCategories||[...customCategories,full];
  }catch(e){ alert(e.message); return; }
  populateCategoryDropdowns();
  if(pendingCategorySelectId){
    const sel=document.getElementById(pendingCategorySelectId);
    if(sel) sel.value=full;
    pendingCategorySelectId=null;
  }
  closeModal('add-category-modal');
  showToast(t('toast_category_added'));
}

// ── "View All by Category" (home screen) ───────────────────────────────────
function openAllTransactionsModal(){
  const transactions=getData('transactions').slice().sort((a,b)=>b.date.localeCompare(a.date));
  const groups={};
  transactions.forEach(tx=>{
    const key=tx.cat||(tx.type==='income'?'💵 Income':tx.type==='transfer'?'🔄 Transfer':'💼 Other');
    (groups[key]=groups[key]||[]).push(tx);
  });
  const order=Object.keys(groups).sort((a,b)=>{
    const totalA=groups[a].reduce((s,tx)=>s+(tx.type==='expense'?tx.amount:0),0);
    const totalB=groups[b].reduce((s,tx)=>s+(tx.type==='expense'?tx.amount:0),0);
    return totalB-totalA;
  });
  const el=document.getElementById('all-tx-list');
  if(!order.length){
    el.innerHTML=`<div class="empty-state" style="padding:1rem 0"><p>${escHtml(t('empty_no_tx'))}</p></div>`;
  } else {
    el.innerHTML=order.map(cat=>{
      const items=groups[cat];
      const rows=items.map(tx=>{
        const isTransfer=tx.type==='transfer';
        const amtColor=isTransfer?'':tx.type==='income'?'text-green':'text-red';
        const prefix=isTransfer?'⇄':tx.type==='income'?'+':'-';
        return`<div class="tx-row">
          <div class="tx-icon" style="background:${isTransfer?'var(--surface-2)':tx.type==='income'?'#d1fae5':'#fee2e2'}">${cat.split(' ')[0]}</div>
          <div style="flex:1;min-width:0">
            <div class="tx-name">${escHtml(tx.desc)}</div>
            <div class="tx-cat">${fmtDate(tx.date)}</div>
          </div>
          <div class="tx-amount ${amtColor}">${isTransfer?'':prefix}$${fmtNum(tx.amount)}</div>
        </div>`;
      }).join('');
      const catTotal=items.reduce((s,tx)=>s+tx.amount,0);
      return`<div style="margin-bottom:16px">
        <div style="display:flex;justify-content:space-between;align-items:center;padding:6px 2px;border-bottom:2px solid var(--border);margin-bottom:4px">
          <span style="font-weight:700;font-size:.85rem">${escHtml(catLabel(cat))}</span>
          <span style="font-size:.78rem;font-weight:700;color:var(--text-secondary)">${items.length} · $${fmtNum(catTotal)}</span>
        </div>
        ${rows}
      </div>`;
    }).join('');
  }
  document.getElementById('all-transactions-modal').classList.add('open');
}
const GOAL_TYPE_I18N={
'✈️ Vacation':{en:'✈️ Vacation',es:'✈️ Vacaciones',ko:'✈️ 여행',ja:'✈️ 旅行'},
'🚨 Emergency Fund':{en:'🚨 Emergency Fund',es:'🚨 Fondo de Emergencia',ko:'🚨 비상금',ja:'🚨 緊急資金'},
'🏠 Home':{en:'🏠 Home',es:'🏠 Casa',ko:'🏠 주택',ja:'🏠 住宅'},
'🚗 Car':{en:'🚗 Car',es:'🚗 Auto',ko:'🚗 자동차',ja:'🚗 車'},
'📚 Education':{en:'📚 Education',es:'📚 Educación',ko:'📚 교육',ja:'📚 教育'},
'💍 Wedding/Event':{en:'💍 Wedding/Event',es:'💍 Boda/Evento',ko:'💍 결혼/행사',ja:'💍 結婚式・イベント'},
'🎁 Gift':{en:'🎁 Gift',es:'🎁 Regalo',ko:'🎁 선물',ja:'🎁 贈り物'},
'🎯 Custom':{en:'🎯 Custom',es:'🎯 Personalizado',ko:'🎯 기타',ja:'🎯 カスタム'}
};
function goalTypeLabel(v){ return (GOAL_TYPE_I18N[v]&&GOAL_TYPE_I18N[v][currentLang])||v; }
function applyGoalTypeLabels(){
  document.querySelectorAll('#goal-type, #eg-type').forEach(sel=>{
    Array.from(sel.options).forEach(opt=>{ if(GOAL_TYPE_I18N[opt.value]) opt.textContent=goalTypeLabel(opt.value); });
  });
}

function applyLanguage(lang){
  currentLang=TR[lang]?lang:'en';
  applyI18n();
  if(document.getElementById('app').style.display!=='none'){
    renderFinancesScreen();
    if(document.getElementById('screen-stats').classList.contains('active')) renderStats();
    if(document.getElementById('screen-reminders').classList.contains('active')) renderReminders();
    if(document.getElementById('screen-goals').classList.contains('active')) renderGoals();
    if(document.getElementById('screen-mutual').classList.contains('active')) renderMutualScreen();
  }
}

// ════════════════════════════════════════════════════
//  COLOR SCHEMES
// ════════════════════════════════════════════════════
const COLOR_SCHEMES={
royal:{navy:'#f0f4ff','navy-mid':'#ffffff',royal:'#2563eb','royal-bright':'#1d4ed8','royal-glow':'#3b82f6',accent:'#1d4ed8','accent-light':'#1e40af',surface:'#ffffff','surface-2':'#f1f5f9','surface-3':'#e2e8f0','text-primary':'#0f172a','text-secondary':'#475569','text-muted':'#94a3b8',border:'rgba(37,99,235,0.12)','border-bright':'rgba(37,99,235,0.28)',gold:'#b45309',green:'#047857',red:'#dc2626'},
emerald:{navy:'#f0fdf7','navy-mid':'#ffffff',royal:'#059669','royal-bright':'#047857','royal-glow':'#10b981',accent:'#047857','accent-light':'#065f46',surface:'#ffffff','surface-2':'#f0fdf4','surface-3':'#dcfce7','text-primary':'#0f172a','text-secondary':'#475569','text-muted':'#94a3b8',border:'rgba(5,150,105,0.12)','border-bright':'rgba(5,150,105,0.28)',gold:'#b45309',green:'#047857',red:'#dc2626'},
violet:{navy:'#f5f3ff','navy-mid':'#ffffff',royal:'#7c3aed','royal-bright':'#6d28d9','royal-glow':'#8b5cf6',accent:'#6d28d9','accent-light':'#5b21b6',surface:'#ffffff','surface-2':'#f5f3ff','surface-3':'#ede9fe','text-primary':'#0f172a','text-secondary':'#475569','text-muted':'#94a3b8',border:'rgba(124,58,237,0.12)','border-bright':'rgba(124,58,237,0.28)',gold:'#b45309',green:'#047857',red:'#dc2626'},
rose:{navy:'#fff1f2','navy-mid':'#ffffff',royal:'#e11d48','royal-bright':'#be123c','royal-glow':'#f43f5e',accent:'#be123c','accent-light':'#9f1239',surface:'#ffffff','surface-2':'#fff1f2','surface-3':'#ffe4e6','text-primary':'#0f172a','text-secondary':'#475569','text-muted':'#94a3b8',border:'rgba(225,29,72,0.12)','border-bright':'rgba(225,29,72,0.28)',gold:'#b45309',green:'#047857',red:'#dc2626'},
'slate-dark':{navy:'#0f172a','navy-mid':'#1e293b',royal:'#3b82f6','royal-bright':'#2563eb','royal-glow':'#60a5fa',accent:'#60a5fa','accent-light':'#93c5fd',surface:'#1e293b','surface-2':'#273449','surface-3':'#334155','text-primary':'#f1f5f9','text-secondary':'#cbd5e1','text-muted':'#64748b',border:'rgba(96,165,250,0.18)','border-bright':'rgba(96,165,250,0.32)',gold:'#fbbf24',green:'#34d399',red:'#f87171'}
};
const SCHEME_NAMES={royal:{en:'Royal Blue',es:'Azul Real',ko:'로열 블루',ja:'ロイヤルブルー'},emerald:{en:'Emerald',es:'Esmeralda',ko:'에메랄드',ja:'エメラルド'},violet:{en:'Violet',es:'Violeta',ko:'바이올렛',ja:'バイオレット'},rose:{en:'Rose',es:'Rosa',ko:'로즈',ja:'ローズ'},'slate-dark':{en:'Slate Dark',es:'Oscuro',ko:'다크 모드',ja:'ダークモード'}};

function applyColorScheme(name){
  const scheme=COLOR_SCHEMES[name]||COLOR_SCHEMES.royal;
  selectedScheme=COLOR_SCHEMES[name]?name:'royal';
  Object.entries(scheme).forEach(([k,v])=>document.documentElement.style.setProperty('--'+k,v));
}
function renderSchemeSwatches(){
  const el=document.getElementById('scheme-swatches');
  el.innerHTML=Object.keys(COLOR_SCHEMES).map(name=>{
    const c=COLOR_SCHEMES[name];
    const label=(SCHEME_NAMES[name]&&SCHEME_NAMES[name][currentLang])||name;
    return`<div class="scheme-swatch${name===selectedScheme?' selected':''}" style="background:linear-gradient(135deg,${c.royal},${c['royal-bright']})" title="${escHtml(label)}" onclick="chooseScheme('${name}')"></div>`;
  }).join('');
}
function chooseScheme(name){ applyColorScheme(name); renderSchemeSwatches(); }

function openSettings(){
  renderSchemeSwatches();
  document.getElementById('settings-lang-select').value=currentLang;
  document.getElementById('settings-modal').classList.add('open');
}
async function saveSettings(){
  const lang=document.getElementById('settings-lang-select').value;
  try{
    const res=await api('PATCH','/api/auth/preferences',{colorScheme:selectedScheme,language:lang});
    applyColorScheme(res.colorScheme||selectedScheme);
    applyLanguage(res.language||lang);
  }catch(e){ alert(e.message); return; }
  closeModal('settings-modal');
  showToast(t('settings_saved'));
}

// ════════════════════════════════════════════════════
//  AUTH
// ════════════════════════════════════════════════════
let authMode='login';
function switchAuthTab(mode){
  authMode=mode;
  document.querySelectorAll('.auth-tab').forEach((tb,i)=>tb.classList.toggle('active',(i===0&&mode==='login')||(i===1&&mode==='register')));
  document.getElementById('auth-name-wrap').style.display=mode==='register'?'block':'none';
  document.getElementById('auth-btn').textContent=mode==='register'?'Create Account':'Sign In';
  document.getElementById('auth-error').textContent='';
}

async function handleAuth(){
  const username=document.getElementById('auth-username').value.trim().toLowerCase().replace(/\s+/g,'');
  const password=document.getElementById('auth-password').value;
  const err=document.getElementById('auth-error');
  err.textContent='';
  if(!username||!password){err.textContent='Please fill in all fields.';return;}
  const btn=document.getElementById('auth-btn');
  btn.disabled=true;
  try{
    let data;
    if(authMode==='register'){
      const fullname=document.getElementById('auth-fullname').value.trim();
      if(!fullname){err.textContent='Please enter your full name.';btn.disabled=false;return;}
      if(password.length<4){err.textContent='Password must be at least 4 characters.';btn.disabled=false;return;}
      data=await api('POST','/api/auth/register',{username,password,fullname});
    } else {
      data=await api('POST','/api/auth/login',{username,password});
    }
    authToken=data.token;
    localStorage.setItem('mf_token',authToken);
    await loginUser(data.user);
  }catch(e){ err.textContent=e.message; }
  btn.disabled=false;
}

async function loginUser(user){
  currentUser=user.username;
  currentUserFullname=user.fullname||user.username;
  mutualPartner=user.partnerUsername||null;
  customCategories=user.customCategories||[];
  applyColorScheme(user.colorScheme||'royal');
  currentLang=TR[user.language]?user.language:'en';
  document.getElementById('auth-screen').style.display='none';
  document.getElementById('app').style.display='flex';
  const initials=(currentUserFullname||currentUser).split(' ').map(w=>w[0]).join('').toUpperCase().slice(0,2);
  document.getElementById('user-avatar').textContent=initials;
  document.getElementById('um-name').textContent=currentUserFullname;
  document.getElementById('um-username').textContent='@'+currentUser;
  applyI18n();
  checkMutualConnection();
  await initApp();
}

function doLogout(){
  if(pollTimer) clearInterval(pollTimer);
  authToken=null;
  localStorage.removeItem('mf_token');
  location.reload();
}

async function deleteAccount(){
  if(!confirm('Delete your account and ALL your data? This cannot be undone.'))return;
  if(!confirm('Are you absolutely sure? All balances, transactions, goals, and reminders will be permanently deleted.'))return;
  try{ await api('DELETE','/api/auth/account'); }catch(e){ alert(e.message); return; }
  if(pollTimer) clearInterval(pollTimer);
  authToken=null;
  localStorage.removeItem('mf_token');
  location.reload();
}

// ════════════════════════════════════════════════════
//  APP INIT
// ════════════════════════════════════════════════════
let incomeChart,spendingChart,pieChart,goalsChart,mutualChart;
let currentStatTab='week';
let currentMutualTab='week';
let statWeekOffset=0;
let statMonthOffset=0;

async function initApp(){
  setTodayDates();
  await loadAllData();
  renderFinancesScreen();
  requestNotificationPermission();
  startPolling();
  await checkIncomingConnectionRequest();
  updateNotifBadge();
}

async function loadAllData(){
  try{
    const[accounts,transactions,bills,paydays,goals,budgets,mutualBudgets]=await Promise.all([
      api('GET','/api/accounts'),api('GET','/api/transactions'),api('GET','/api/bills'),
      api('GET','/api/paydays'),api('GET','/api/goals'),api('GET','/api/budgets'),
      api('GET','/api/mutual-budgets').catch(()=>[]),
    ]);
    store.accounts=accounts.map(normalizeAccount);
    store.transactions=transactions.map(normalizeTransaction);
    store.bills=bills.map(normalizeBill);
    store.paydays=paydays.map(normalizePayday);
    store.goals=goals.map(normalizeGoal);
    store.budgets=budgets.map(normalizeBudget);
    store.mutualBudgets=(mutualBudgets||[]).map(normalizeBudget);
    if(mutualPartner) await loadPartnerData();
  }catch(e){ showToast('Could not load your data: '+e.message); }
}

async function loadPartnerData(){
  try{
    const data=await api('GET','/api/partner/data');
    partnerFullname=data.fullname||(data.partner&&data.partner.fullname)||mutualPartner;
    partnerStore.accounts=(data.accounts||[]).map(normalizeAccount);
    partnerStore.transactions=(data.transactions||[]).map(normalizeTransaction);
    partnerStore.bills=(data.bills||[]).map(normalizeBill);
    partnerStore.paydays=(data.paydays||[]).map(normalizePayday);
    partnerStore.goals=(data.goals||[]).map(normalizeGoal);
    partnerStore.budgets=(data.budgets||[]).map(normalizeBudget);
    try{ store.mutualBudgets=(await api('GET','/api/mutual-budgets')).map(normalizeBudget); }catch(e){}
  }catch(e){}
}

function startPolling(){
  if(pollTimer) clearInterval(pollTimer);
  pollTimer=setInterval(async()=>{
    if(!authToken) return;
    try{
      const me=await api('GET','/api/auth/me');
      if(me.partnerUsername&&me.partnerUsername!==mutualPartner){
        mutualPartner=me.partnerUsername; checkMutualConnection(); await loadPartnerData();
        showToast('Connected with @'+mutualPartner+' 🎉');
      } else if(!me.partnerUsername&&mutualPartner){
        mutualPartner=null; checkMutualConnection();
      }
      await checkIncomingConnectionRequest();
    }catch(e){}
  },20000);
}

function setTodayDates(){
  const today=new Date().toISOString().split('T')[0];
  ['income-date','exp-date','bill-date','pay-date','goal-date','bill-end-date','pay-end-date','occ-date'].forEach(id=>{
    const el=document.getElementById(id);
    if(el&&!el.value) el.value=today;
  });
}

// ════════════════════════════════════════════════════
//  NOTIFICATIONS
// ════════════════════════════════════════════════════
function requestNotificationPermission(){
  if('Notification' in window && Notification.permission==='default'){ Notification.requestPermission(); }
}
function sendNotification(title,body){
  if('Notification' in window && Notification.permission==='granted'){ new Notification(title,{body,icon:'icon.png'}); }
}
function showToast(msg){
  let tt=document.getElementById('mf-toast');
  if(!tt){
    tt=document.createElement('div');
    tt.id='mf-toast';
    tt.style.cssText='position:fixed;left:50%;bottom:calc(90px + var(--safe-bottom));transform:translateX(-50%);background:var(--text-primary);color:var(--surface);padding:10px 16px;border-radius:10px;font-size:.82rem;z-index:800;opacity:0;transition:opacity .2s;max-width:88vw;text-align:center';
    document.body.appendChild(tt);
  }
  tt.textContent=msg;
  tt.style.opacity='1';
  clearTimeout(tt._hideTimer);
  tt._hideTimer=setTimeout(()=>{tt.style.opacity='0';},2800);
}
function updateNotifBadge(){
  const bills=getData('bills');
  const today=new Date(); today.setHours(0,0,0,0);
  const pending=bills.filter(b=>{
    if(b.paid)return false;
    const diff=Math.ceil((new Date(b.date+'T00:00:00')-today)/86400000);
    return diff>=0&&diff<=7;
  });
  const total=pending.length+(incomingPendingReq?1:0);
  const badge=document.getElementById('notif-count');
  if(total>0){badge.textContent=total;badge.style.display='flex';}
  else{badge.style.display='none';}
}

// ════════════════════════════════════════════════════
//  DROPDOWN TOGGLES
// ════════════════════════════════════════════════════
function toggleBell(){
  closePanels('bell-dropdown');
  const panel=document.getElementById('bell-dropdown');
  if(panel.classList.contains('open')){panel.classList.remove('open');return;}
  renderBellPanel();
  panel.classList.add('open');
  checkIncomingConnectionRequest().then(renderBellPanel);
}
function toggleUserMenu(){
  closePanels('user-dropdown');
  const panel=document.getElementById('user-dropdown');
  if(panel.classList.contains('open')){panel.classList.remove('open');return;}
  panel.classList.add('open');
}
function closeUserMenu(){ document.getElementById('user-dropdown').classList.remove('open'); }
function closePanels(except){
  ['bell-dropdown','user-dropdown'].forEach(id=>{ if(id!==except) document.getElementById(id).classList.remove('open'); });
}
document.addEventListener('click',function(e){
  if(!e.target.closest('#bell-btn')&&!e.target.closest('#bell-dropdown')) document.getElementById('bell-dropdown').classList.remove('open');
  if(!e.target.closest('#user-avatar')&&!e.target.closest('#user-dropdown')) document.getElementById('user-dropdown').classList.remove('open');
});

function renderBellPanel(){
  const bills=getData('bills');
  const paydays=getData('paydays');
  const today=new Date();today.setHours(0,0,0,0);
  let html='<div style="font-weight:700;font-size:.9rem;padding:4px 4px 10px;border-bottom:1px solid var(--border);margin-bottom:8px">'+t('nav_reminders')+'</div>';
  let count=0;
  if(incomingPendingReq){
    count++;
    html+=`<div class="dropdown-item" style="background:var(--surface-2);border-radius:10px;margin-bottom:6px;cursor:pointer"
      onclick="closePanels('');setTimeout(()=>openApproveModal('${escHtml(incomingPendingReq.from)}'),50)">
      <span style="font-size:1.2rem">🔗</span>
      <div>
        <div style="font-weight:700;color:var(--accent)">${escHtml(t('modal_connection_request'))}</div>
        <div style="font-size:.75rem;color:var(--text-secondary)"><strong>@${escHtml(incomingPendingReq.from)}</strong> ${escHtml(t('approve_wants_connect'))}</div>
      </div>
    </div>`;
  }
  bills.filter(b=>!b.paid).forEach(b=>{
    const diff=Math.ceil((new Date(b.date+'T00:00:00')-today)/86400000);
    if(diff>=0&&diff<=14){
      count++;
      const dueWord=diff===0?t('due_today'):diff===1?t('due_tomorrow'):t('tpl_in_days').replace('{n}',diff);
      html+=`<div class="dropdown-item">
        <span>${diff<=3?'🔴':'🟡'}</span>
        <span><strong>${escHtml(b.name)}</strong><br/><span style="font-size:.72rem;color:var(--text-secondary)">${escHtml(dueWord)} — $${fmtNum(b.amount)}</span></span>
      </div>`;
    }
  });
  paydays.forEach(p=>{
    const diff=Math.ceil((new Date(p.date+'T00:00:00')-today)/86400000);
    if(diff>=0&&diff<=7){
      count++;
      const dueWord=diff===0?t('due_today'):t('tpl_in_days').replace('{n}',diff);
      html+=`<div class="dropdown-item">
        <span>💰</span>
        <span><strong>${escHtml(p.label)}</strong><br/><span style="font-size:.72rem;color:var(--text-secondary)">${escHtml(dueWord)} — +$${fmtNum(p.amount)}</span></span>
      </div>`;
    }
  });
  if(count===0) html+='<div style="text-align:center;padding:1rem;font-size:.85rem;color:var(--text-muted)">🎉</div>';
  document.getElementById('bell-dropdown').innerHTML=html;
}

// ════════════════════════════════════════════════════
//  MODAL SYSTEM
// ════════════════════════════════════════════════════
function openModal(id){
  populateSelects();
  document.getElementById(id).classList.add('open');
}
function closeModal(id){ document.getElementById(id).classList.remove('open'); }
document.querySelectorAll('.modal-overlay').forEach(m=>{
  m.addEventListener('click',function(e){ if(e.target===this) this.classList.remove('open'); });
});

function populateSelects(){
  const accounts=getData('accounts');
  const goals=getData('goals');
  const opts=accounts.length
    ? accounts.map(a=>`<option value="${a.id}">${escHtml(a.name)} ($${fmtNum(a.balance)})</option>`).join('')
    : '<option value="">— —</option>';
  ['income-acct-select','exp-acct-select','upd-acct-select','transfer-from','transfer-to','goal-acct-select','occ-acct-select'].forEach(id=>{
    const el=document.getElementById(id); if(el) el.innerHTML=opts;
  });
  const optsWithBlank='<option value="">—</option>'+opts;
  ['bill-acct-select','payday-acct-select'].forEach(id=>{
    const el=document.getElementById(id); if(el) el.innerHTML=optsWithBlank;
  });
  const goalOpts=goals.length
    ? goals.map(g=>`<option value="${g.id}">${escHtml(g.name)} ($${fmtNum(g.saved)} / $${fmtNum(g.target)})</option>`).join('')
    : '<option value="">—</option>';
  const cg=document.getElementById('contrib-goal-select'); if(cg) cg.innerHTML=goalOpts;
  ['transfer-from','transfer-to','transfer-amount'].forEach(id=>{
    const el=document.getElementById(id);
    if(el) el.oninput=el.onchange=updateTransferPreview;
  });
  applyCategoryLabels();
  applyGoalTypeLabels();
}

// ════════════════════════════════════════════════════
//  SCREEN NAVIGATION
// ════════════════════════════════════════════════════
const screenTitleKeys={finances:'nav_finances',stats:'nav_stats',reminders:'nav_reminders',goals:'nav_goals',mutual:'nav_mutual'};
function switchScreen(name,el){
  document.querySelectorAll('.screen').forEach(s=>{ s.classList.remove('active'); s.style.display='none'; });
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));
  const scr=document.getElementById('screen-'+name);
  if(scr){ scr.style.display='block'; scr.classList.add('active'); }
  if(el) el.classList.add('active');
  document.getElementById('screen-title').textContent=t(screenTitleKeys[name]||name);
  closePanels('');
  if(name==='stats'){ statWeekOffset=0; statMonthOffset=0; renderStats(); }
  if(name==='goals') renderGoals();
  if(name==='reminders') renderReminders();
  if(name==='mutual'){ if(mutualPartner) loadPartnerData().then(()=>renderMutualScreen()); else renderMutualScreen(); }
}
function switchToMutual(){ switchScreen('mutual',document.getElementById('mutual-nav-item')); }

// ════════════════════════════════════════════════════
//  ACCOUNTS
// ════════════════════════════════════════════════════
const acctColors={checking:'#2563eb',savings:'#10b981',investment:'#f59e0b',credit:'#ef4444',cash:'#8b5cf6',other:'#64748b'};
const acctEmojis={checking:'🏦',savings:'💰',investment:'📈',credit:'💳',cash:'💵',other:'🗂️'};

async function addAccount(){
  const name=document.getElementById('acct-name').value.trim();
  const type=document.getElementById('acct-type').value;
  const balance=parseFloat(document.getElementById('acct-balance').value)||0;
  if(!name){alert('Please enter an account name.');return;}
  try{
    const a=await api('POST','/api/accounts',{name,type,balance});
    store.accounts.push(normalizeAccount(a));
  }catch(e){ alert(e.message); return; }
  closeModal('add-account-modal');
  document.getElementById('acct-name').value='';
  document.getElementById('acct-balance').value='';
  renderFinancesScreen();
}

async function updateBalance(){
  const id=document.getElementById('upd-acct-select').value;
  const balance=parseFloat(document.getElementById('upd-balance').value);
  if(!id){alert('No accounts to update. Add an account first.');return;}
  if(isNaN(balance)){alert('Please enter a valid amount.');return;}
  try{
    const a=await api('PATCH','/api/accounts/'+id,{balance});
    const idx=store.accounts.findIndex(x=>x.id===id);
    if(idx>=0) store.accounts[idx]=normalizeAccount(a);
  }catch(e){ alert(e.message); return; }
  closeModal('update-balance-modal');
  document.getElementById('upd-balance').value='';
  renderFinancesScreen();
  renderStats();
}

function renderAccountsList(){
  const accounts=getData('accounts');
  const el=document.getElementById('accounts-list');
  if(!accounts.length){el.innerHTML=`<div class="empty-state"><div class="empty-icon">🏦</div><p>${escHtml(t('empty_no_accounts'))}<br/>${escHtml(t('empty_add_account_hint'))}</p></div>`;return;}
  el.innerHTML=accounts.map(a=>`
    <div class="account-row">
      <div class="account-icon" style="background:${acctColors[a.type]||'#2563eb'}18">${acctEmojis[a.type]||'🏦'}</div>
      <div>
        <div class="account-name">${escHtml(a.name)}</div>
        <div class="account-type">${escHtml(t('accttype_'+a.type)||capitalize(a.type))}</div>
      </div>
      <div class="account-amount ${a.balance<0?'text-red':''}">$${fmtNum(a.balance)}</div>
    </div>`).join('');
}

// ════════════════════════════════════════════════════
//  INCOME & EXPENSES
// ════════════════════════════════════════════════════
async function addIncome(){
  const amount=parseFloat(document.getElementById('income-amount').value);
  const desc=document.getElementById('income-desc').value.trim()||'Income';
  const acctId=document.getElementById('income-acct-select').value;
  const date=document.getElementById('income-date').value||today();
  if(!amount||amount<=0){alert('Please enter a valid amount.');return;}
  if(!acctId){alert('Please add an account first.');return;}
  try{
    const tx=await api('POST','/api/transactions',{accountId:acctId,type:'income',amount,desc,category:'💵 Income',date});
    store.transactions.push(normalizeTransaction(tx));
    await refreshAccounts();
  }catch(e){ alert(e.message); return; }
  closeModal('add-income-modal');
  document.getElementById('income-amount').value='';
  document.getElementById('income-desc').value='';
  renderFinancesScreen();
  sendNotification('Income Added','$'+fmtNum(amount)+' — '+desc);
}

function editExpense(id){
  const t2=getData('transactions').find(tx=>tx.id===id);
  if(!t2||t2.type!=='expense')return;
  populateSelects();
  document.getElementById('exp-modal-title').textContent=t('modal_edit_expense');
  document.getElementById('exp-edit-id').value=id;
  document.getElementById('exp-amount').value=t2.amount;
  document.getElementById('exp-desc').value=t2.desc;
  document.getElementById('exp-cat').value=t2.cat;
  document.getElementById('exp-acct-select').value=t2.acctId;
  document.getElementById('exp-date').value=t2.date;
  document.getElementById('exp-save-btn').textContent=t('btn_save_changes');
  document.getElementById('add-expense-modal').classList.add('open');
}

function addExpense(){
  document.getElementById('exp-modal-title').textContent=t('modal_add_expense');
  document.getElementById('exp-edit-id').value='';
  document.getElementById('exp-save-btn').textContent=t('btn_save_expense');
  openModal('add-expense-modal');
}

async function saveExpense(){
  const editId=document.getElementById('exp-edit-id').value;
  const amount=parseFloat(document.getElementById('exp-amount').value);
  const desc=document.getElementById('exp-desc').value.trim()||'Expense';
  const cat=document.getElementById('exp-cat').value;
  const acctId=document.getElementById('exp-acct-select').value;
  const date=document.getElementById('exp-date').value||today();
  if(!amount||amount<=0){alert('Please enter a valid amount.');return;}
  if(!acctId){alert('Please add an account first.');return;}
  try{
    if(editId){
      const tx=await api('PATCH','/api/transactions/'+editId,{accountId:acctId,type:'expense',amount,desc,category:cat,date});
      const idx=store.transactions.findIndex(x=>x.id===editId);
      if(idx>=0) store.transactions[idx]=normalizeTransaction(tx);
    } else {
      const tx=await api('POST','/api/transactions',{accountId:acctId,type:'expense',amount,desc,category:cat,date});
      store.transactions.push(normalizeTransaction(tx));
    }
    await refreshAccounts();
  }catch(e){ alert(e.message); return; }
  closeModal('add-expense-modal');
  document.getElementById('exp-amount').value='';
  document.getElementById('exp-desc').value='';
  document.getElementById('exp-edit-id').value='';
  document.getElementById('exp-modal-title').textContent=t('modal_add_expense');
  document.getElementById('exp-save-btn').textContent=t('btn_save_expense');
  renderFinancesScreen();
  renderStats();
}

// ════════════════════════════════════════════════════
//  TRANSFER FUNDS
// ════════════════════════════════════════════════════
function updateTransferPreview(){
  const accounts=getData('accounts');
  const fromId=document.getElementById('transfer-from')?.value;
  const toId=document.getElementById('transfer-to')?.value;
  const amt=parseFloat(document.getElementById('transfer-amount')?.value)||0;
  const el=document.getElementById('transfer-preview');
  if(!el)return;
  const fromA=accounts.find(a=>a.id===fromId);
  const toA=accounts.find(a=>a.id===toId);
  if(fromA&&toA&&fromA.id!==toA.id&&amt>0)
    el.textContent=`$${fmtNum(amt)}: ${fromA.name} ($${fmtNum(fromA.balance)}) → ${toA.name} ($${fmtNum(toA.balance)})`;
  else el.textContent='';
}
async function doTransfer(){
  const fromId=document.getElementById('transfer-from').value;
  const toId=document.getElementById('transfer-to').value;
  const amount=parseFloat(document.getElementById('transfer-amount').value);
  const note=document.getElementById('transfer-note').value.trim();
  if(!fromId||!toId){alert('Select both accounts.');return;}
  if(fromId===toId){alert('From and To accounts must be different.');return;}
  if(!amount||amount<=0){alert('Enter a valid transfer amount.');return;}
  const fromAcct=store.accounts.find(a=>a.id===fromId);
  const toAcct=store.accounts.find(a=>a.id===toId);
  if(fromAcct&&fromAcct.balance<amount&&!confirm(`This will overdraw ${fromAcct.name}. Continue?`))return;
  try{
    const res=await api('POST','/api/accounts/transfer',{fromId,toId,amount,note});
    store.transactions.push(normalizeTransaction(res.tx));
    await refreshAccounts();
  }catch(e){ alert(e.message); return; }
  closeModal('transfer-modal');
  document.getElementById('transfer-amount').value='';
  document.getElementById('transfer-note').value='';
  renderFinancesScreen();
  showToast(`$${fmtNum(amount)}: ${fromAcct?fromAcct.name:''} → ${toAcct?toAcct.name:''}`);
}
function renderFinancesScreen(){
  const accounts=getData('accounts');
  const total=accounts.reduce((s,a)=>s+a.balance,0);
  document.getElementById('hero-total').textContent='$'+fmtNum(total);
  document.getElementById('hero-sub').textContent=t('hero_sub_template').replace('{n}',accounts.length);
  renderAccountsList();
  renderRecentTransactions();
  renderIncomeChart();
  updateNotifBadge();
}

function renderRecentTransactions(){
  const transactions=getData('transactions').slice().reverse().slice(0,12);
  const el=document.getElementById('recent-transactions');
  if(!transactions.length){el.innerHTML=`<div class="empty-state" style="padding:1rem 0"><p>${escHtml(t('empty_no_tx'))}<br/>${escHtml(t('empty_add_tx_hint'))}</p></div>`;return;}
  el.innerHTML=transactions.map(tx=>{
    const isTransfer=tx.type==='transfer';
    const bgColor=isTransfer?'var(--surface-2)':tx.type==='income'?'#d1fae5':'#fee2e2';
    const amtColor=isTransfer?'':tx.type==='income'?'text-green':'text-red';
    const prefix=isTransfer?'⇄':tx.type==='income'?'+':'-';
    const catText = tx.cat ? catLabel(tx.cat) : '';
    return`<div class="tx-row">
      <div class="tx-icon" style="background:${bgColor}">
        ${tx.cat?tx.cat.split(' ')[0]:(isTransfer?'🔄':tx.type==='income'?'💵':'💸')}
      </div>
      <div style="flex:1;min-width:0">
        <div class="tx-name">${escHtml(tx.desc)}</div>
        <div class="tx-cat">${escHtml(catText)} · ${fmtDate(tx.date)}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px;flex-shrink:0">
        <div class="tx-amount ${amtColor}">${isTransfer?'':prefix}$${fmtNum(tx.amount)}</div>
        ${tx.type==='expense'?`<span style="font-size:.8rem;cursor:pointer;color:var(--accent)" onclick="editExpense('${tx.id}')" title="Edit">✏️</span>`:''}
      </div>
    </div>`;
  }).join('');
}

function renderIncomeChart(){
  const transactions=getData('transactions').filter(tx=>tx.type!=='transfer');
  const last6=getLast6Months();
  const incomeData=last6.map(m=>transactions.filter(tx=>tx.type==='income'&&tx.date&&tx.date.startsWith(m.key)).reduce((s,tx)=>s+tx.amount,0));
  const expData=last6.map(m=>transactions.filter(tx=>tx.type==='expense'&&tx.date&&tx.date.startsWith(m.key)).reduce((s,tx)=>s+tx.amount,0));
  const ctx=document.getElementById('income-chart').getContext('2d');
  if(incomeChart)incomeChart.destroy();
  incomeChart=new Chart(ctx,{
    type:'bar',
    data:{ labels:last6.map(m=>m.label), datasets:[
      {label:t('stat_income'),data:incomeData,backgroundColor:'rgba(37,99,235,.75)',borderRadius:6,borderSkipped:false},
      {label:t('stat_spent'),data:expData,backgroundColor:'rgba(239,68,68,.5)',borderRadius:6,borderSkipped:false}
    ]},
    options:{...chartDefaults(),plugins:{legend:{display:true,labels:{color:'#475569',boxWidth:10,font:{size:10}}}}}
  });
}

// ════════════════════════════════════════════════════
//  STATS SCREEN (with history navigation)
// ════════════════════════════════════════════════════
function setStatTab(tab,el){
  currentStatTab=tab;
  document.querySelectorAll('#stats-tabs .tab').forEach(tb=>tb.classList.remove('active'));
  if(el)el.classList.add('active');
  renderStats();
}
function renderStats(){
  renderSpendingChart();
  renderPieChart();
  renderWeeklySummary();
  renderMonthlySummary();
  renderBudgets();
  renderCategoryBars();
}
function navWeek(dir){ statWeekOffset=Math.max(0,statWeekOffset+dir); renderWeeklySummary(); }
function navMonth(dir){ statMonthOffset=Math.max(0,statMonthOffset+dir); renderMonthlySummary(); }

function getSpendData(user,tab){
  const allTx=user?getDataFor(user,'transactions'):getData('transactions');
  const transactions=allTx.filter(tx=>tx.type!=='transfer');
  const now=new Date();
  let labels,income,expense;
  if(tab==='week'){
    labels=['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
    const day=now.getDay();
    const monday=new Date(now);monday.setDate(now.getDate()-(day===0?6:day-1));monday.setHours(0,0,0,0);
    income=labels.map((_,i)=>{const d=new Date(monday);d.setDate(monday.getDate()+i);const key=d.toISOString().split('T')[0];return transactions.filter(tx=>tx.type==='income'&&tx.date===key).reduce((s,tx)=>s+tx.amount,0);});
    expense=labels.map((_,i)=>{const d=new Date(monday);d.setDate(monday.getDate()+i);const key=d.toISOString().split('T')[0];return transactions.filter(tx=>tx.type==='expense'&&tx.date===key).reduce((s,tx)=>s+tx.amount,0);});
  } else if(tab==='month'){
    const last6=getLast6Months();labels=last6.map(m=>m.label);
    income=last6.map(m=>transactions.filter(tx=>tx.type==='income'&&tx.date&&tx.date.startsWith(m.key)).reduce((s,tx)=>s+tx.amount,0));
    expense=last6.map(m=>transactions.filter(tx=>tx.type==='expense'&&tx.date&&tx.date.startsWith(m.key)).reduce((s,tx)=>s+tx.amount,0));
  } else {
    labels=Array.from({length:5},(_,i)=>String(now.getFullYear()-4+i));
    income=labels.map(y=>transactions.filter(tx=>tx.type==='income'&&tx.date&&tx.date.startsWith(y)).reduce((s,tx)=>s+tx.amount,0));
    expense=labels.map(y=>transactions.filter(tx=>tx.type==='expense'&&tx.date&&tx.date.startsWith(y)).reduce((s,tx)=>s+tx.amount,0));
  }
  return{labels,income,expense};
}

function renderSpendingChart(){
  const d=getSpendData(null,currentStatTab);
  const ctx=document.getElementById('spending-chart').getContext('2d');
  if(spendingChart)spendingChart.destroy();
  spendingChart=new Chart(ctx,{
    type:'line',
    data:{labels:d.labels,datasets:[
      {label:t('stat_income'),data:d.income,borderColor:'#10b981',backgroundColor:'rgba(16,185,129,.1)',tension:.4,fill:true,pointRadius:4,pointBackgroundColor:'#10b981'},
      {label:t('stat_spent'),data:d.expense,borderColor:'#ef4444',backgroundColor:'rgba(239,68,68,.1)',tension:.4,fill:true,pointRadius:4,pointBackgroundColor:'#ef4444'}
    ]},
    options:{...chartDefaults(),plugins:{legend:{display:true,labels:{color:'#475569',boxWidth:10,font:{size:11}}}}}
  });
}

function renderPieChart(){
  const accounts=getData('accounts');
  const ctx=document.getElementById('pie-chart').getContext('2d');
  if(pieChart)pieChart.destroy();
  const pos=accounts.filter(a=>a.balance>0);
  if(!pos.length){ctx.clearRect(0,0,200,200);document.getElementById('pie-legend').innerHTML='';return;}
  const colors=['#2563eb','#10b981','#f59e0b','#8b5cf6','#ef4444','#06b6d4','#84cc16'];
  const total=pos.reduce((s,a)=>s+a.balance,0);
  pieChart=new Chart(ctx,{
    type:'doughnut',
    data:{labels:pos.map(a=>a.name),datasets:[{data:pos.map(a=>a.balance),backgroundColor:colors.slice(0,pos.length),borderWidth:0,hoverOffset:6}]},
    options:{cutout:'65%',plugins:{legend:{display:false},tooltip:{callbacks:{label:c=>` $${fmtNum(c.parsed)}`}}},responsive:true,maintainAspectRatio:false}
  });
  document.getElementById('pie-legend').innerHTML=pos.map((a,i)=>`
    <div style="display:flex;align-items:center;gap:6px;margin-bottom:4px">
      <span style="width:10px;height:10px;border-radius:2px;background:${colors[i]};flex-shrink:0"></span>
      <span style="color:var(--text-secondary);flex:1">${escHtml(a.name)}</span>
      <span style="font-weight:600">${total>0?Math.round(a.balance/total*100):0}%</span>
    </div>`).join('');
}

function getSummaryFor(period,offset){
  offset=offset||0;
  const transactions=getData('transactions').filter(tx=>tx.type!=='transfer');
  const now=new Date();
  let filtered,rangeLabel;
  if(period==='week'){
    const day=now.getDay();
    const thisMonday=new Date(now); thisMonday.setDate(now.getDate()-(day===0?6:day-1)); thisMonday.setHours(0,0,0,0);
    const monday=new Date(thisMonday); monday.setDate(thisMonday.getDate()-7*offset);
    const sunday=new Date(monday); sunday.setDate(monday.getDate()+6); sunday.setHours(23,59,59,999);
    filtered=transactions.filter(tx=>{const d=new Date(tx.date+'T00:00:00'); return d>=monday&&d<=sunday;});
    rangeLabel=fmtDate(monday.toISOString().split('T')[0])+' – '+fmtDate(sunday.toISOString().split('T')[0]);
  } else {
    const target=new Date(now.getFullYear(),now.getMonth()-offset,1);
    const mk=target.getFullYear()+'-'+String(target.getMonth()+1).padStart(2,'0');
    filtered=transactions.filter(tx=>tx.date&&tx.date.startsWith(mk));
    rangeLabel=target.toLocaleDateString(localeForLang(),{month:'long',year:'numeric'});
  }
  const income=filtered.filter(tx=>tx.type==='income').reduce((s,tx)=>s+tx.amount,0);
  const expense=filtered.filter(tx=>tx.type==='expense').reduce((s,tx)=>s+tx.amount,0);
  return{income,expense,net:income-expense,rangeLabel};
}

function summaryHTML(s){
  return`<div class="stat-grid">
    <div class="stat-mini"><div class="stat-mini-label">${escHtml(t('stat_income'))}</div><div class="stat-mini-val text-green">$${fmtNum(s.income)}</div></div>
    <div class="stat-mini"><div class="stat-mini-label">${escHtml(t('stat_spent'))}</div><div class="stat-mini-val text-red">$${fmtNum(s.expense)}</div></div>
    <div class="stat-mini"><div class="stat-mini-label">${escHtml(t('stat_net'))}</div><div class="stat-mini-val ${s.net>=0?'text-green':'text-red'}">$${fmtNum(Math.abs(s.net))}</div></div>
  </div>`;
}

function renderWeeklySummary(){
  const s=getSummaryFor('week',statWeekOffset);
  document.getElementById('weekly-summary-label').textContent=statWeekOffset===0?t('lbl_weekly_summary'):s.rangeLabel;
  document.getElementById('weekly-summary-content').innerHTML=summaryHTML(s);
}
function renderMonthlySummary(){
  const s=getSummaryFor('month',statMonthOffset);
  document.getElementById('monthly-summary-label').textContent=statMonthOffset===0?t('lbl_monthly_summary'):s.rangeLabel;
  document.getElementById('monthly-summary-content').innerHTML=summaryHTML(s);
}

// ════════════════════════════════════════════════════
//  BUDGET TRACKER
// ════════════════════════════════════════════════════
function openBudgetModal(){
  document.getElementById('budget-is-mutual').value='0';
  document.getElementById('budget-mutual-note').style.display='none';
  document.getElementById('budget-amount').value='';
  openModal('budget-modal');
}
function openMutualBudgetModal(){
  if(!mutualPartner)return;
  document.getElementById('budget-is-mutual').value='1';
  document.getElementById('budget-mutual-note').style.display='block';
  document.getElementById('budget-amount').value='';
  openModal('budget-modal');
}
async function saveBudget(){
  const amount=parseFloat(document.getElementById('budget-amount').value);
  const period=document.getElementById('budget-period').value;
  const cat=document.getElementById('budget-cat').value;
  const isMutual=document.getElementById('budget-is-mutual').value==='1';
  if(!amount||amount<=0){alert('Please enter a valid budget amount.');return;}
  const key=period+'|'+(cat||'__all__');
  const list=isMutual?store.mutualBudgets:store.budgets;
  const existing=list.find(b=>b.key===key);
  const payload=isMutual?{key,period,cat,amount,isMutual:true,partnerUsername:mutualPartner}:{key,period,cat,amount};
  try{
    if(existing){
      const b=await api('PATCH','/api/budgets/'+existing.id,payload);
      const idx=list.findIndex(x=>x.id===existing.id); list[idx]=normalizeBudget(b);
    } else {
      const b=await api('POST','/api/budgets',payload);
      list.push(normalizeBudget(b));
    }
  }catch(e){ alert(e.message); return; }
  closeModal('budget-modal');
  document.getElementById('budget-amount').value='';
  renderBudgets();
  if(document.getElementById('screen-mutual').classList.contains('active')) renderMutualBudgetCards();
  showToast(isMutual?t('toast_budget_saved'):t('toast_budget_saved'));
}
async function deleteBudget(id){
  try{ await api('DELETE','/api/budgets/'+id); }catch(e){ alert(e.message); return; }
  store.budgets=store.budgets.filter(b=>b.id!==id);
  store.mutualBudgets=store.mutualBudgets.filter(b=>b.id!==id);
  renderBudgets();
  if(document.getElementById('screen-mutual').classList.contains('active')) renderMutualBudgetCards();
}

function computeBudgetSpend(b,transactions,now){
  now=now||new Date();
  let filtered=transactions.filter(tx=>tx.type==='expense');
  if(b.cat)filtered=filtered.filter(tx=>tx.cat===b.cat);
  if(b.period==='weekly'){
    const day=now.getDay();const mon=new Date(now);mon.setDate(now.getDate()-(day===0?6:day-1));mon.setHours(0,0,0,0);
    filtered=filtered.filter(tx=>{const d=new Date(tx.date+'T00:00:00');return d>=mon&&d<=now;});
  } else if(b.period==='monthly'){
    const mk=now.getFullYear()+'-'+String(now.getMonth()+1).padStart(2,'0');
    filtered=filtered.filter(tx=>(tx.date||'').startsWith(mk));
  } else {
    filtered=filtered.filter(tx=>(tx.date||'').startsWith(now.getFullYear().toString()));
  }
  return filtered.reduce((s,tx)=>s+tx.amount,0);
}

function budgetRowHTML(b,spent,opts){
  opts=opts||{};
  const pct=b.amount>0?Math.min(Math.round(spent/b.amount*100),100):0;
  const over=spent>b.amount;
  const barColor=pct>=90?'#dc2626':pct>=70?'#b45309':'#047857';
  const periodLabel={weekly:t('period_weekly'),monthly:t('period_monthly'),yearly:t('period_yearly')}[b.period]||b.period;
  const catSpanAttrs=b.cat?`style="font-size:.88rem;font-weight:600;cursor:pointer;text-decoration:underline dotted" onclick="openCategoryDetail('${escHtml(b.cat)}')"`:`style="font-size:.88rem;font-weight:600"`;
  const ownerTag=opts.owner?`<span style="font-size:.68rem;color:var(--accent-light);background:var(--surface-2);padding:1px 7px;border-radius:99px;margin-left:6px">${escHtml(opts.owner)}</span>`:'';
  const deleteBtn=opts.deletable?`<span style="font-size:.72rem;cursor:pointer;color:var(--red)" onclick="deleteBudget('${b.id}')">✕</span>`:'';
  return`<div style="margin-bottom:14px">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:5px">
        <div>
          <span ${catSpanAttrs}>${b.cat?escHtml(catLabel(b.cat)):escHtml(t('opt_all_spending'))}</span>
          <span style="font-size:.72rem;color:var(--text-secondary);margin-left:6px">${escHtml(periodLabel)}</span>
          ${ownerTag}
        </div>
        <div style="display:flex;align-items:center;gap:8px">
          <span style="font-size:.82rem;font-weight:700;color:${over?'var(--red)':'var(--text-primary)'}">$${fmtNum(spent)} / $${fmtNum(b.amount)}</span>
          ${deleteBtn}
        </div>
      </div>
      <div class="progress-track"><div class="progress-fill" style="width:${pct}%;background:${barColor}"></div></div>
      <div style="display:flex;justify-content:space-between;font-size:.72rem;margin-top:3px">
        <span style="color:${over?'var(--red)':'var(--text-secondary)'}">
          ${over?`⚠️ +$${fmtNum(spent-b.amount)}`:`$${fmtNum(Math.max(b.amount-spent,0))}`}
        </span>
        <span style="color:var(--text-secondary)">${pct}%</span>
      </div>
    </div>`;
}

function renderBudgets(){
  const budgets=getData('budgets');
  const transactions=getData('transactions');
  const el=document.getElementById('budget-list');
  if(!el)return;
  if(!budgets.length){ el.innerHTML=`<div style="font-size:.84rem;color:var(--text-muted);text-align:center;padding:12px 0">${escHtml(t('empty_no_budgets'))}</div>`; return; }
  const now=new Date();
  el.innerHTML=budgets.map(b=>budgetRowHTML(b,computeBudgetSpend(b,transactions,now),{deletable:true})).join('<div style="height:1px;background:var(--border);margin:4px 0"></div>');
}

// ── Mutual screen: view both partners' personal budgets, and manage shared budgets ──
function renderMutualBudgetCards(){
  renderMutualPersonalBudgets();
  renderMutualSharedBudgets();
}
function renderMutualPersonalBudgets(){
  const el=document.getElementById('mutual-personal-budgets');
  if(!el)return;
  if(!mutualPartner){ el.innerHTML=''; return; }
  const now=new Date();
  const myName=currentUserFullname||currentUser;
  const partnerName=partnerFullname||mutualPartner;
  const mine=getData('budgets').map(b=>({b,owner:myName,tx:getData('transactions')}));
  const theirs=getDataFor(mutualPartner,'budgets').map(b=>({b,owner:partnerName,tx:getDataFor(mutualPartner,'transactions')}));
  const all=[...mine,...theirs];
  if(!all.length){ el.innerHTML=`<div style="font-size:.84rem;color:var(--text-muted);text-align:center;padding:12px 0">${escHtml(t('empty_no_personal_budgets'))}</div>`; return; }
  el.innerHTML=all.map(({b,owner,tx})=>budgetRowHTML(b,computeBudgetSpend(b,tx,now),{owner,deletable:false})).join('<div style="height:1px;background:var(--border);margin:4px 0"></div>');
}
function renderMutualSharedBudgets(){
  const el=document.getElementById('mutual-shared-budgets');
  if(!el)return;
  if(!mutualPartner){ el.innerHTML=''; return; }
  const shared=store.mutualBudgets;
  if(!shared.length){ el.innerHTML=`<div style="font-size:.84rem;color:var(--text-muted);text-align:center;padding:12px 0">${escHtml(t('empty_no_shared_budgets'))}</div>`; return; }
  const now=new Date();
  const myTx=getData('transactions');
  const theirTx=getDataFor(mutualPartner,'transactions');
  el.innerHTML=shared.map(b=>{
    const spent=computeBudgetSpend(b,myTx,now)+computeBudgetSpend(b,theirTx,now);
    return budgetRowHTML(b,spent,{deletable:true});
  }).join('<div style="height:1px;background:var(--border);margin:4px 0"></div>');
}

// ════════════════════════════════════════════════════
//  BILLS & PAYDAYS (edit + recurring occurrence flow)
// ════════════════════════════════════════════════════
function advanceRecurDate(dateStr,recur){
  if(!dateStr) return null;
  const d=new Date(dateStr+'T00:00:00');
  if(recur==='weekly'){ d.setDate(d.getDate()+7); }
  else if(recur==='biweekly'){ d.setDate(d.getDate()+14); }
  else if(recur==='semimonthly'){ if(d.getDate()<=14){ d.setDate(15); } else { d.setMonth(d.getMonth()+1,1); } }
  else if(recur==='monthly'){ const day=d.getDate(); d.setMonth(d.getMonth()+1); if(d.getDate()!==day) d.setDate(0); }
  else if(recur==='yearly'){ d.setFullYear(d.getFullYear()+1); }
  else { return null; }
  return d.toISOString().split('T')[0];
}

function openBillModal(){
  document.getElementById('bill-edit-id').value='';
  document.getElementById('bill-modal-title').textContent=t('modal_add_bill');
  document.getElementById('bill-save-btn').textContent=t('btn_save_bill');
  document.getElementById('bill-name').value='';
  document.getElementById('bill-amount').value='';
  document.getElementById('bill-date').value=today();
  document.getElementById('bill-recur').value='monthly';
  document.getElementById('bill-end-date').value='';
  openModal('add-bill-modal');
  document.getElementById('bill-cat-select').value='💼 Other';
  const sel=document.getElementById('bill-acct-select'); if(sel) sel.value='';
}
function editBill(id){
  const b=store.bills.find(x=>x.id===id);
  if(!b)return;
  populateSelects();
  document.getElementById('bill-edit-id').value=id;
  document.getElementById('bill-modal-title').textContent=t('modal_edit_bill');
  document.getElementById('bill-save-btn').textContent=t('btn_save_changes');
  document.getElementById('bill-name').value=b.name;
  document.getElementById('bill-amount').value=b.amount;
  document.getElementById('bill-date').value=b.date;
  document.getElementById('bill-recur').value=b.recur;
  document.getElementById('bill-end-date').value=b.endDate||'';
  document.getElementById('bill-acct-select').value=b.acctId||'';
  document.getElementById('bill-cat-select').value=b.cat||'💼 Other';
  document.getElementById('add-bill-modal').classList.add('open');
}
async function saveBill(){
  const editId=document.getElementById('bill-edit-id').value;
  const name=document.getElementById('bill-name').value.trim();
  const amount=parseFloat(document.getElementById('bill-amount').value)||0;
  const date=document.getElementById('bill-date').value;
  const recur=document.getElementById('bill-recur').value;
  const endDate=document.getElementById('bill-end-date').value||null;
  const acctId=document.getElementById('bill-acct-select').value||null;
  const category=document.getElementById('bill-cat-select').value||'💼 Other';
  if(!name){alert('Please enter a bill name.');return;}
  if(!date){alert('Please select a due date.');return;}
  try{
    if(editId){
      const b=await api('PATCH','/api/bills/'+editId,{name,amount,startDate:date,recur,endDate,acctId,category});
      const idx=store.bills.findIndex(x=>x.id===editId); store.bills[idx]=normalizeBill(b);
    } else {
      const b=await api('POST','/api/bills',{name,amount,startDate:date,recur,endDate,paid:false,acctId,category});
      store.bills.push(normalizeBill(b));
    }
  }catch(e){ alert(e.message); return; }
  closeModal('add-bill-modal');
  renderReminders();
  updateNotifBadge();
}
async function undoBillPaid(id){
  try{
    const b=await api('PATCH','/api/bills/'+id,{paid:false});
    const idx=store.bills.findIndex(x=>x.id===id); if(idx>=0) store.bills[idx]=normalizeBill(b);
  }catch(e){ alert(e.message); return; }
  renderReminders(); updateNotifBadge();
}
async function deleteBill(id){
  try{ await api('DELETE','/api/bills/'+id); }catch(e){ alert(e.message); return; }
  store.bills=store.bills.filter(b=>b.id!==id);
  renderReminders();updateNotifBadge();
}

function openPaydayModal(){
  document.getElementById('payday-edit-id').value='';
  document.getElementById('payday-modal-title').textContent=t('modal_add_payday');
  document.getElementById('payday-save-btn').textContent=t('btn_save_payday');
  document.getElementById('pay-label').value='';
  document.getElementById('pay-amount').value='';
  document.getElementById('pay-date').value=today();
  document.getElementById('pay-freq').value='biweekly';
  document.getElementById('pay-end-date').value='';
  openModal('add-payday-modal');
  const sel=document.getElementById('payday-acct-select'); if(sel) sel.value='';
}
function editPayday(id){
  const p=store.paydays.find(x=>x.id===id);
  if(!p)return;
  populateSelects();
  document.getElementById('payday-edit-id').value=id;
  document.getElementById('payday-modal-title').textContent=t('modal_edit_payday');
  document.getElementById('payday-save-btn').textContent=t('btn_save_changes');
  document.getElementById('pay-label').value=p.label;
  document.getElementById('pay-amount').value=p.amount;
  document.getElementById('pay-date').value=p.date;
  document.getElementById('pay-freq').value=p.freq;
  document.getElementById('pay-end-date').value=p.endDate||'';
  document.getElementById('payday-acct-select').value=p.acctId||'';
  document.getElementById('add-payday-modal').classList.add('open');
}
async function savePayday(){
  const editId=document.getElementById('payday-edit-id').value;
  const label=document.getElementById('pay-label').value.trim()||'Payday';
  const amount=parseFloat(document.getElementById('pay-amount').value)||0;
  const date=document.getElementById('pay-date').value;
  const freq=document.getElementById('pay-freq').value;
  const endDate=document.getElementById('pay-end-date').value||null;
  const acctId=document.getElementById('payday-acct-select').value||null;
  if(!date){alert('Please select a date.');return;}
  try{
    if(editId){
      const p=await api('PATCH','/api/paydays/'+editId,{label,amount,startDate:date,freq,endDate,acctId});
      const idx=store.paydays.findIndex(x=>x.id===editId); store.paydays[idx]=normalizePayday(p);
    } else {
      const p=await api('POST','/api/paydays',{label,amount,startDate:date,freq,endDate,acctId});
      store.paydays.push(normalizePayday(p));
    }
  }catch(e){ alert(e.message); return; }
  closeModal('add-payday-modal');
  renderReminders();
}
async function deletePayday(id){
  try{ await api('DELETE','/api/paydays/'+id); }catch(e){ alert(e.message); return; }
  store.paydays=store.paydays.filter(p=>p.id!==id);
  renderReminders();
}

function openPostOccurrenceModal(type,id){
  populateSelects();
  const item = type==='bill' ? store.bills.find(b=>b.id===id) : store.paydays.find(p=>p.id===id);
  if(!item) return;
  document.getElementById('occ-type').value=type;
  document.getElementById('occ-id').value=id;
  document.getElementById('occ-title').textContent=(type==='bill'?t('modal_log_bill'):t('modal_log_payday'))+': '+(item.name||item.label);
  document.getElementById('occ-amount').value=item.amount;
  document.getElementById('occ-date').value=today();
  const sel=document.getElementById('occ-acct-select');
  if(sel&&sel.options.length){ sel.value=item.acctId||sel.options[0].value; }
  document.getElementById('post-occurrence-modal').classList.add('open');
}
async function confirmOccurrence(){
  const type=document.getElementById('occ-type').value;
  const id=document.getElementById('occ-id').value;
  const amount=parseFloat(document.getElementById('occ-amount').value);
  const acctId=document.getElementById('occ-acct-select').value;
  const date=document.getElementById('occ-date').value||today();
  if(!amount||amount<=0){alert('Please enter a valid amount.');return;}
  if(!acctId){alert('Please choose an account.');return;}
  const item = type==='bill' ? store.bills.find(b=>b.id===id) : store.paydays.find(p=>p.id===id);
  if(!item) return;
  try{
    if(type==='bill'){
      const tx=await api('POST','/api/transactions',{accountId:acctId,type:'expense',amount,desc:item.name,category:item.cat||'💼 Other',date});
      store.transactions.push(normalizeTransaction(tx));
      const next=advanceRecurDate(item.date,item.recur);
      const ended=!next||(item.endDate&&next>item.endDate);
      const patch=ended?{paid:true}:{startDate:next,paid:false};
      const b=await api('PATCH','/api/bills/'+id,patch);
      const idx=store.bills.findIndex(x=>x.id===id); if(idx>=0) store.bills[idx]=normalizeBill(b);
    } else {
      const tx=await api('POST','/api/transactions',{accountId:acctId,type:'income',amount,desc:item.label,category:'💵 Income',date});
      store.transactions.push(normalizeTransaction(tx));
      const next=advanceRecurDate(item.date,item.freq);
      const ended=next&&item.endDate&&next>item.endDate;
      if(next&&!ended){
        const p=await api('PATCH','/api/paydays/'+id,{startDate:next});
        const idx=store.paydays.findIndex(x=>x.id===id); if(idx>=0) store.paydays[idx]=normalizePayday(p);
      }
    }
    await refreshAccounts();
  }catch(e){ alert(e.message); return; }
  closeModal('post-occurrence-modal');
  renderReminders();
  renderFinancesScreen();
  updateNotifBadge();
  showToast(t('toast_logged'));
}

function renderReminders(){
  const bills=getData('bills');
  const paydays=getData('paydays');
  const today2=new Date();today2.setHours(0,0,0,0);
  const pending=bills.filter(b=>!b.paid);
  document.getElementById('bills-count').textContent=pending.length+t('badge_pending');
  const bEl=document.getElementById('bills-list');
  if(!bills.length){bEl.innerHTML=`<div class="empty-state"><div class="empty-icon">📋</div><p>${escHtml(t('empty_no_bills'))}</p></div>`;}
  else{
    bEl.innerHTML=bills.map(b=>{
      const due=new Date(b.date+'T00:00:00');
      const diff=Math.ceil((due-today2)/86400000);
      const dueSoon=diff>=0&&diff<=7&&!b.paid;
      const overdue=diff<0&&!b.paid;
      const recurLabel=b.recur==='once'?t('recur_once'):b.recur==='weekly'?t('recur_weekly'):b.recur==='monthly'?t('recur_monthly'):t('recur_yearly');
      const endLabel=b.endDate?t('lbl_ends')+' '+fmtDateLong(b.endDate):'';
      return`<div class="reminder-row" style="${b.paid?'opacity:.5':''}">
        <div class="reminder-dot" style="background:${b.paid?'var(--green)':overdue?'var(--red)':dueSoon?'var(--gold)':'var(--accent)'}"></div>
        <div class="reminder-info">
          <div class="reminder-name">${escHtml(b.name)}${dueSoon&&!b.paid?'<span class="due-soon">'+escHtml(t('due_soon_label'))+'</span>':''}${overdue?'<span class="due-soon" style="color:var(--red)">'+escHtml(t('overdue_label'))+'</span>':''}</div>
          <div class="reminder-date">${fmtDateLong(b.date)} · ${escHtml(recurLabel)}${escHtml(endLabel)}</div>
        </div>
        <div style="text-align:right;flex-shrink:0">
          <div class="reminder-amount">$${fmtNum(b.amount)}</div>
          <div style="display:flex;gap:8px;margin-top:4px;justify-content:flex-end">
            <span style="font-size:.72rem;cursor:pointer;color:var(--accent)" onclick="editBill('${b.id}')">✏️ ${escHtml(t('btn_edit'))}</span>
            <span style="font-size:.72rem;cursor:pointer;color:var(--green)" onclick="${b.paid?`undoBillPaid('${b.id}')`:`openPostOccurrenceModal('bill','${b.id}')`}">${b.paid?'↩️ '+escHtml(t('btn_undo')):'✅ '+escHtml(t('btn_paid'))}</span>
            <span style="font-size:.72rem;cursor:pointer;color:var(--red)" onclick="deleteBill('${b.id}')">🗑️ ${escHtml(t('btn_end'))}</span>
          </div>
        </div>
      </div>`;
    }).join('');
  }
  const pEl=document.getElementById('paydays-list');
  if(!paydays.length){pEl.innerHTML=`<div class="empty-state"><div class="empty-icon">💰</div><p>${escHtml(t('empty_no_paydays'))}</p></div>`;}
  else{
    const freqLabels={weekly:t('freq_weekly'),biweekly:t('freq_biweekly'),semimonthly:t('freq_semimonthly'),monthly:t('freq_monthly')};
    pEl.innerHTML=paydays.map(p=>{
      const diff=Math.ceil((new Date(p.date+'T00:00:00')-today2)/86400000);
      const endLabel=p.endDate?t('lbl_ends')+' '+fmtDateLong(p.endDate):'';
      const dayWord=diff>=0?(diff===0?t('due_today'):t('tpl_in_days').replace('{n}',diff)):t('past_due');
      return`<div class="reminder-row">
        <div class="reminder-dot" style="background:var(--green)"></div>
        <div class="reminder-info">
          <div class="reminder-name">💰 ${escHtml(p.label)}</div>
          <div class="reminder-date">${fmtDateLong(p.date)} · ${escHtml(freqLabels[p.freq]||p.freq)}${escHtml(endLabel)}</div>
          <div class="reminder-date">${escHtml(dayWord)}</div>
        </div>
        <div style="text-align:right;flex-shrink:0">
          <div class="reminder-amount text-green">+$${fmtNum(p.amount)}</div>
          <div style="display:flex;gap:8px;margin-top:4px;justify-content:flex-end">
            <span style="font-size:.72rem;cursor:pointer;color:var(--accent)" onclick="editPayday('${p.id}')">✏️ ${escHtml(t('btn_edit'))}</span>
            <span style="font-size:.72rem;cursor:pointer;color:var(--accent)" onclick="openPostOccurrenceModal('payday','${p.id}')">💵 ${escHtml(t('btn_log'))}</span>
            <span style="font-size:.72rem;cursor:pointer;color:var(--red)" onclick="deletePayday('${p.id}')">🗑️ ${escHtml(t('btn_end'))}</span>
          </div>
        </div>
      </div>`;
    }).join('');
  }
}

// ════════════════════════════════════════════════════
//  CATEGORY DRILL-DOWN
// ════════════════════════════════════════════════════
function openCategoryDetail(catKey){
  const transactions=getData('transactions').filter(tx=>tx.type==='expense'&&tx.cat===catKey).sort((a,b)=>b.date.localeCompare(a.date));
  const total=transactions.reduce((s,tx)=>s+tx.amount,0);
  document.getElementById('cat-detail-title').textContent=catLabel(catKey);
  document.getElementById('cat-detail-total').textContent='$'+fmtNum(total)+' · '+transactions.length+(transactions.length===1?t('expense_singular'):t('expense_plural'));
  const el=document.getElementById('cat-detail-list');
  if(!transactions.length){ el.innerHTML=`<div class="empty-state" style="padding:1rem 0"><p>${escHtml(t('cat_detail_no_expenses'))}</p></div>`; }
  else{
    el.innerHTML=transactions.map(tx=>`
      <div class="tx-row">
        <div class="tx-icon" style="background:#fee2e2">${catKey.split(' ')[0]}</div>
        <div style="flex:1;min-width:0">
          <div class="tx-name">${escHtml(tx.desc)}</div>
          <div class="tx-cat">${fmtDate(tx.date)}</div>
        </div>
        <div class="tx-amount text-red">-$${fmtNum(tx.amount)}</div>
      </div>`).join('');
  }
  document.getElementById('category-detail-modal').classList.add('open');
}

// ════════════════════════════════════════════════════
//  SAVINGS GOALS
// ════════════════════════════════════════════════════
async function addGoal(){
  const name=document.getElementById('goal-name').value.trim();
  const type=document.getElementById('goal-type').value;
  const target=parseFloat(document.getElementById('goal-target').value)||0;
  const start=parseFloat(document.getElementById('goal-start').value)||0;
  const acctId=document.getElementById('goal-acct-select').value||null;
  const date=document.getElementById('goal-date').value||null;
  if(!name){alert('Please enter a goal name.');return;}
  if(!target||target<=0){alert('Please enter a target amount.');return;}
  try{
    const g=await api('POST','/api/goals',{name,category:type,target,saved:start,targetDate:date,acctId});
    store.goals.push(normalizeGoal(g));
  }catch(e){ alert(e.message); return; }
  closeModal('add-goal-modal');
  document.getElementById('goal-name').value='';
  document.getElementById('goal-target').value='';
  document.getElementById('goal-start').value='0';
  document.getElementById('goal-date').value='';
  renderGoals();
}
function openEditGoal(id){
  const g=getData('goals').find(x=>x.id===id);
  if(!g)return;
  populateSelects();
  document.getElementById('eg-id').value=id;
  document.getElementById('eg-name').value=g.name;
  document.getElementById('eg-type').value=g.type;
  document.getElementById('eg-target').value=g.target;
  document.getElementById('eg-saved').value=g.saved;
  document.getElementById('eg-date').value=g.date||'';
  openModal('edit-goal-modal');
}
async function saveGoalEdit(){
  const id=document.getElementById('eg-id').value;
  const name=document.getElementById('eg-name').value.trim();
  const type=document.getElementById('eg-type').value;
  const target=parseFloat(document.getElementById('eg-target').value)||0;
  const saved=parseFloat(document.getElementById('eg-saved').value)||0;
  const date=document.getElementById('eg-date').value||null;
  if(!name||!target){alert('Please fill in all required fields.');return;}
  try{
    const g=await api('PATCH','/api/goals/'+id,{name,category:type,target,saved:Math.min(saved,target),targetDate:date});
    const idx=store.goals.findIndex(x=>x.id===id); if(idx>=0) store.goals[idx]=normalizeGoal(g);
  }catch(e){ alert(e.message); return; }
  closeModal('edit-goal-modal');
  renderGoals();
  showToast(t('toast_logged'));
}
async function contributeToGoal(){
  const id=document.getElementById('contrib-goal-select').value;
  const amount=parseFloat(document.getElementById('contrib-amount').value)||0;
  if(!id){alert('Please create a goal first.');return;}
  if(!amount||amount<=0){alert('Please enter a valid amount.');return;}
  const goal=store.goals.find(g=>g.id===id);
  if(!goal)return;
  const newSaved=Math.min(goal.saved+amount,goal.target);
  try{
    const g=await api('PATCH','/api/goals/'+id,{saved:newSaved});
    const idx=store.goals.findIndex(x=>x.id===id); store.goals[idx]=normalizeGoal(g);
  }catch(e){ alert(e.message); return; }
  closeModal('contribute-modal');
  document.getElementById('contrib-amount').value='';
  renderGoals();
  const g=store.goals.find(x=>x.id===id);
  if(g&&g.saved>=g.target) sendNotification('Goal Reached! 🎉',g.name);
}
async function deleteGoal(id){
  if(!confirm('Delete this savings goal?'))return;
  try{ await api('DELETE','/api/goals/'+id); }catch(e){ alert(e.message); return; }
  store.goals=store.goals.filter(g=>g.id!==id);
  renderGoals();
}

function renderGoals(){
  const goals=getData('goals');
  const accounts=getData('accounts');
  const el=document.getElementById('goals-list');
  const overview=document.getElementById('goals-overview');
  const usageCard=document.getElementById('acct-usage-card');
  if(!goals.length){
    el.innerHTML=`<div class="empty-state"><div class="empty-icon">🎯</div><p>${escHtml(t('empty_no_goals'))}<br/>${escHtml(t('empty_create_envelope'))}</p></div>`;
    overview.style.display='none'; usageCard.style.display='none'; return;
  }
  overview.style.display='block';
  renderGoalsChart(goals);
  renderAccountUsageChart(goals,accounts);
  el.innerHTML=goals.map(g=>{
    const pct=g.target>0?Math.min(Math.round(g.saved/g.target*100),100):0;
    const remaining=Math.max(g.target-g.saved,0);
    const pClass=pct>=100?'green':pct>=60?'':'gold';
    const emoji=(g.type||'').split(' ')[0];
    const daysLeft=g.date?Math.ceil((new Date(g.date+'T00:00:00')-new Date())/86400000):null;
    const linkedAcct=g.acctId?accounts.find(a=>a.id===g.acctId):null;
    return`<div class="envelope">
      <div class="envelope-top">
        <span class="envelope-icon">${emoji}</span>
        <div style="flex:1;min-width:0">
          <div class="envelope-name">${escHtml(g.name)}</div>
          <div class="envelope-amounts">$${fmtNum(g.saved)} / $${fmtNum(g.target)}${g.date?' · '+(daysLeft>0?daysLeft+escHtml(t('days_left')):escHtml(t('past_target'))):''}</div>
          ${linkedAcct?`<div style="font-size:.72rem;color:var(--accent);margin-top:2px">🏦 ${escHtml(linkedAcct.name)}</div>`:''}
        </div>
        <div style="text-align:right;flex-shrink:0"><div class="envelope-pct">${pct}%</div></div>
      </div>
      <div class="progress-track"><div class="progress-fill ${pClass}" style="width:${pct}%"></div></div>
      <div style="display:flex;justify-content:space-between;font-size:.72rem;color:var(--text-secondary);margin-top:4px">
        <span>$${fmtNum(g.saved)}</span><span>$${fmtNum(g.target)}</span>
      </div>
      <div style="display:flex;gap:8px;margin-top:8px">
        <span style="font-size:.72rem;cursor:pointer;color:var(--accent);background:var(--surface-2);padding:3px 8px;border-radius:6px" onclick="openEditGoal('${g.id}')">✏️ ${escHtml(t('btn_edit'))}</span>
        <span style="font-size:.72rem;cursor:pointer;color:var(--red);background:#fee2e2;padding:3px 8px;border-radius:6px" onclick="deleteGoal('${g.id}')">🗑️</span>
      </div>
    </div>`;
  }).join('');
}

function renderAccountUsageChart(goals,accounts){
  const usageCard=document.getElementById('acct-usage-card');
  const usageList=document.getElementById('acct-usage-list');
  const byAcct={};
  goals.forEach(g=>{ if(g.acctId&&g.saved>0){ byAcct[g.acctId]=(byAcct[g.acctId]||0)+g.saved; } });
  if(!Object.keys(byAcct).length){usageCard.style.display='none';return;}
  usageCard.style.display='block';
  const COLORS=['#2563eb','#10b981','#f59e0b','#8b5cf6','#ef4444','#06b6d4'];
  usageList.innerHTML=Object.entries(byAcct).map(([acctId,totalSaved],i)=>{
    const acct=accounts.find(a=>a.id===acctId);
    if(!acct)return'';
    const pct=acct.balance+totalSaved>0?Math.min(Math.round(totalSaved/(acct.balance+totalSaved)*100),100):0;
    const color=COLORS[i%COLORS.length];
    const linked=goals.filter(g=>g.acctId===acctId&&g.saved>0);
    return`<div style="margin-bottom:14px">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
        <div style="font-size:.88rem;font-weight:600">🏦 ${escHtml(acct.name)}</div>
        <div style="font-size:.82rem;font-weight:700;color:${color}">$${fmtNum(totalSaved)} (${pct}%)</div>
      </div>
      <div class="progress-track"><div class="progress-fill" style="width:${pct}%;background:${color}"></div></div>
      <div style="margin-top:6px;padding:6px 10px;background:var(--surface-2);border-radius:8px">
        ${linked.map(g=>`<div style="display:flex;justify-content:space-between;font-size:.75rem;padding:2px 0">
          <span>${(g.type||'').split(' ')[0]} ${escHtml(g.name)}</span>
          <span style="font-weight:600;color:${color}">$${fmtNum(g.saved)} / $${fmtNum(g.target)}</span>
        </div>`).join('')}
      </div>
    </div>`;
  }).join('<div style="height:1px;background:var(--border);margin:4px 0"></div>');
}

function renderGoalsChart(goals){
  const ctx=document.getElementById('goals-chart').getContext('2d');
  if(goalsChart)goalsChart.destroy();
  const colors=['#2563eb','#10b981','#f59e0b','#8b5cf6','#ef4444','#06b6d4'];
  goalsChart=new Chart(ctx,{
    type:'bar',
    data:{
      labels:goals.map(g=>g.name.length>12?g.name.slice(0,12)+'…':g.name),
      datasets:[
        {label:t('stat_income'),data:goals.map(g=>g.saved),backgroundColor:colors,borderRadius:6,borderSkipped:false},
        {label:t('lbl_target_amount'),data:goals.map(g=>Math.max(g.target-g.saved,0)),backgroundColor:'rgba(0,0,0,.07)',borderRadius:6,borderSkipped:false}
      ]
    },
    options:{...chartDefaults(),scales:{x:{stacked:true,ticks:{color:'#64748b',font:{size:10}},grid:{display:false}},y:{stacked:true,ticks:{color:'#64748b',font:{size:10},callback:v=>'$'+fmtNum(v)},grid:{color:'rgba(0,0,0,.06)'}}},plugins:{legend:{display:false}}}
  });
}

// ════════════════════════════════════════════════════
//  USER ACCOUNT MANAGEMENT
// ════════════════════════════════════════════════════
async function changePassword(){
  const cur=document.getElementById('cp-current').value;
  const nw=document.getElementById('cp-new').value;
  const conf=document.getElementById('cp-confirm').value;
  const err=document.getElementById('cp-error');
  err.textContent='';
  if(nw.length<4){err.textContent='New password must be at least 4 characters.';return;}
  if(nw!==conf){err.textContent='New passwords do not match.';return;}
  try{ await api('POST','/api/auth/change-password',{currentPassword:cur,newPassword:nw}); }
  catch(e){ err.textContent=e.message; return; }
  closeModal('change-password-modal');
  ['cp-current','cp-new','cp-confirm'].forEach(id=>document.getElementById(id).value='');
  alert('Password changed successfully!');
}

// ════════════════════════════════════════════════════
//  MUTUAL FINANCES — CONNECTION
// ════════════════════════════════════════════════════
function checkMutualConnection(){
  const connected=!!mutualPartner;
  document.getElementById('mutual-nav-item').style.display=connected?'flex':'none';
  document.getElementById('um-mutual-link').style.display=connected?'flex':'none';
  document.getElementById('um-disconnect-link').style.display=connected?'flex':'none';
  document.getElementById('um-connect-link').style.display=connected?'none':'flex';
}
function openConnectFlow(){
  document.getElementById('connect-error').textContent='';
  document.getElementById('connect-username').value='';
  document.getElementById('conn-step1').style.display='block';
  document.getElementById('conn-step2').style.display='none';
  openModal('connect-modal');
}
async function sendConnectRequest(){
  const target=document.getElementById('connect-username').value.trim().toLowerCase().replace(/[^a-z0-9_]/g,'');
  const err=document.getElementById('connect-error');
  err.textContent='';
  if(!target){err.textContent='Please enter a username.';return;}
  if(target===currentUser){err.textContent='You cannot connect with yourself.';return;}
  try{
    const res=await api('POST','/api/partner/request',{targetUsername:target});
    document.getElementById('conn-code-display').textContent=res.code;
    document.getElementById('conn-step1').style.display='none';
    document.getElementById('conn-step2').style.display='block';
  }catch(e){ err.textContent=e.message; }
}
function copyConnectCode(){
  const code=document.getElementById('conn-code-display').textContent;
  if(navigator.clipboard&&navigator.clipboard.writeText){
    navigator.clipboard.writeText(code).then(()=>showToast(t('toast_logged'))).catch(()=>{});
  }
}
async function checkIncomingConnectionRequest(){
  try{ const res=await api('GET','/api/partner/incoming'); incomingPendingReq=res.pending||null; }
  catch(e){ incomingPendingReq=null; }
  updateNotifBadge();
}
function openApproveModal(fromUsername){
  document.getElementById('approve-requester').textContent='@'+escHtml(fromUsername);
  document.getElementById('approve-code-input').value='';
  document.getElementById('approve-modal').classList.add('open');
}
async function checkApprovalCode(){
  if(!incomingPendingReq){alert('No pending request found.');closeModal('approve-modal');return;}
  const entered=document.getElementById('approve-code-input').value.trim();
  if(!entered||entered.length<4){alert('Please enter the 6-digit code shared by your partner.');return;}
  try{
    const res=await api('POST','/api/partner/approve',{fromUsername:incomingPendingReq.from,code:entered});
    mutualPartner=res.partnerUsername;
    incomingPendingReq=null;
    checkMutualConnection();
    closeModal('approve-modal');
    updateNotifBadge();
    showToast('Connected with @'+mutualPartner+' 🎉');
    await loadPartnerData();
  }catch(e){ alert(e.message); }
}
async function denyConnection(){
  if(incomingPendingReq){ try{ await api('POST','/api/partner/deny',{fromUsername:incomingPendingReq.from}); }catch(e){} }
  incomingPendingReq=null;
  closeModal('approve-modal');
  updateNotifBadge();
}
async function disconnectPartner(){
  if(!mutualPartner)return;
  if(!confirm('Disconnect from @'+mutualPartner+'?'))return;
  try{ await api('POST','/api/partner/disconnect'); }catch(e){ alert(e.message); return; }
  mutualPartner=null;
  partnerStore={accounts:[],transactions:[],bills:[],paydays:[],goals:[]};
  checkMutualConnection();
  showToast(t('toast_logged'));
}

// ════════════════════════════════════════════════════
//  MUTUAL FINANCES SCREEN
// ════════════════════════════════════════════════════
function setMutualTab(tab,el){
  currentMutualTab=tab;
  document.querySelectorAll('#mutual-tabs .tab').forEach(tb=>tb.classList.remove('active'));
  if(el)el.classList.add('active');
  renderMutualChart();
  renderMutualSummary();
}
function renderMutualScreen(){
  if(!mutualPartner){
    document.getElementById('mutual-empty-state').style.display='block';
    document.getElementById('mutual-content').style.display='none';
    return;
  }
  document.getElementById('mutual-empty-state').style.display='none';
  document.getElementById('mutual-content').style.display='block';
  const myAccounts=getData('accounts');
  const partnerAccounts=getDataFor(mutualPartner,'accounts');
  const myTotal=myAccounts.reduce((s,a)=>s+a.balance,0);
  const partnerTotal=partnerAccounts.reduce((s,a)=>s+a.balance,0);
  const myName=currentUserFullname||currentUser;
  const partnerName=partnerFullname||mutualPartner;
  document.getElementById('mutual-combined-total').textContent='$'+fmtNum(myTotal+partnerTotal);
  document.getElementById('mutual-user1-name').textContent=myName;
  document.getElementById('mutual-user1-bal').textContent='$'+fmtNum(myTotal);
  document.getElementById('mutual-user2-name').textContent=partnerName;
  document.getElementById('mutual-user2-bal').textContent='$'+fmtNum(partnerTotal);
  renderMutualChart();
  renderMutualSummary();
  renderMutualBudgetCards();
  renderMutualTransactions(myName,partnerName);
  renderMutualReminders(myName,partnerName);
}
function renderMutualChart(){
  if(!mutualPartner)return;
  const myD=getSpendData(null,currentMutualTab);
  const partD=getSpendData(mutualPartner,currentMutualTab);
  const combined={ labels:myD.labels, income:myD.income.map((v,i)=>v+partD.income[i]), expense:myD.expense.map((v,i)=>v+partD.expense[i]) };
  const tabLabels={week:t('tab_weekly'),month:t('tab_monthly'),year:t('tab_yearly')};
  document.getElementById('mutual-summary-label').textContent=tabLabels[currentMutualTab]+' · '+t('card_combined_monthly').split(' ')[0];
  const ctx=document.getElementById('mutual-chart').getContext('2d');
  if(mutualChart)mutualChart.destroy();
  mutualChart=new Chart(ctx,{
    type:'line',
    data:{labels:combined.labels,datasets:[
      {label:t('stat_income'),data:combined.income,borderColor:'#10b981',backgroundColor:'rgba(16,185,129,.1)',tension:.4,fill:true,pointRadius:4,pointBackgroundColor:'#10b981'},
      {label:t('stat_spent'),data:combined.expense,borderColor:'#ef4444',backgroundColor:'rgba(239,68,68,.1)',tension:.4,fill:true,pointRadius:4,pointBackgroundColor:'#ef4444'}
    ]},
    options:{...chartDefaults(),plugins:{legend:{display:true,labels:{color:'#475569',boxWidth:10,font:{size:11}}}}}
  });
}
function renderMutualSummary(){
  if(!mutualPartner)return;
  const myS=getSummaryFor(currentMutualTab==='year'?'month':'week',0);
  const partTx=getDataFor(mutualPartner,'transactions');
  const now=new Date();
  let pFiltered;
  if(currentMutualTab==='week'){
    const day=now.getDay();const monday=new Date(now);monday.setDate(now.getDate()-(day===0?6:day-1));monday.setHours(0,0,0,0);
    pFiltered=partTx.filter(tx=>{const d=new Date(tx.date+'T00:00:00');return d>=monday&&d<=now;});
  } else {
    pFiltered=partTx.filter(tx=>tx.date&&tx.date.startsWith(now.getFullYear()+'-'+String(now.getMonth()+1).padStart(2,'0')));
  }
  const pIncome=pFiltered.filter(tx=>tx.type==='income').reduce((s,tx)=>s+tx.amount,0);
  const pExpense=pFiltered.filter(tx=>tx.type==='expense').reduce((s,tx)=>s+tx.amount,0);
  const combined={income:myS.income+pIncome,expense:myS.expense+pExpense,net:myS.net+(pIncome-pExpense)};
  document.getElementById('mutual-summary-content').innerHTML=summaryHTML(combined);
}
function renderMutualTransactions(myName,partnerName){
  const myTx=getData('transactions').map(tx=>({...tx,who:myName}));
  const partTx=getDataFor(mutualPartner,'transactions').map(tx=>({...tx,who:partnerName}));
  const all=[...myTx,...partTx].sort((a,b)=>b.date.localeCompare(a.date)).slice(0,12);
  const el=document.getElementById('mutual-transactions');
  if(!all.length){el.innerHTML=`<div class="empty-state" style="padding:1rem 0"><p>${escHtml(t('empty_no_tx_yet'))}</p></div>`;return;}
  el.innerHTML=all.map(tx=>`
    <div class="tx-row">
      <div class="tx-icon" style="background:${tx.type==='income'?'#d1fae5':'#fee2e2'}">${tx.cat?tx.cat.split(' ')[0]:(tx.type==='income'?'💵':'💸')}</div>
      <div style="flex:1;min-width:0">
        <div class="tx-name">${escHtml(tx.desc)}</div>
        <div class="tx-cat">${escHtml(tx.who)} · ${fmtDate(tx.date)}</div>
      </div>
      <div class="tx-amount ${tx.type==='income'?'text-green':'text-red'}">${tx.type==='income'?'+':'-'}$${fmtNum(tx.amount)}</div>
    </div>`).join('');
}
function renderMutualReminders(myName,partnerName){
  const today2=new Date();today2.setHours(0,0,0,0);
  const myBills=getData('bills').filter(b=>!b.paid).map(b=>({...b,who:myName}));
  const partBills=getDataFor(mutualPartner,'bills').filter(b=>!b.paid).map(b=>({...b,who:partnerName}));
  const myPaydays=getData('paydays').map(p=>({...p,who:myName}));
  const partPaydays=getDataFor(mutualPartner,'paydays').map(p=>({...p,who:partnerName}));
  const all=[...myBills,...partBills,...myPaydays,...partPaydays].sort((a,b)=>a.date.localeCompare(b.date));
  const el=document.getElementById('mutual-reminders');
  if(!all.length){el.innerHTML=`<div class="empty-state" style="padding:1rem 0"><p>${escHtml(t('empty_no_reminders_yet'))}</p></div>`;return;}
  el.innerHTML=all.slice(0,10).map(item=>{
    const isBill=item.hasOwnProperty('paid');
    const diff=Math.ceil((new Date(item.date+'T00:00:00')-today2)/86400000);
    const color=isBill?(diff<=3&&diff>=0?'var(--gold)':'var(--accent)'):'var(--green)';
    return`<div class="reminder-row">
      <div class="reminder-dot" style="background:${color}"></div>
      <div class="reminder-info">
        <div class="reminder-name">${isBill?'📋':'💰'} ${escHtml(item.name||item.label)}</div>
        <div class="reminder-date">${escHtml(item.who)} · ${fmtDateLong(item.date)}</div>
      </div>
      <div class="reminder-amount ${isBill?'':'text-green'}">${isBill?'$':'+$'}${fmtNum(item.amount)}</div>
    </div>`;
  }).join('');
}

// ════════════════════════════════════════════════════
//  AI SPENDING ANALYSIS ENGINE
// ════════════════════════════════════════════════════
function renderCategoryBars(){
  const transactions=getData('transactions');
  const now=new Date();
  const mk=now.getFullYear()+'-'+String(now.getMonth()+1).padStart(2,'0');
  const monthExp=transactions.filter(tx=>tx.type==='expense'&&tx.date&&tx.date.startsWith(mk));
  const cats={};
  monthExp.forEach(tx=>{cats[tx.cat||'💼 Other']=(cats[tx.cat||'💼 Other']||0)+tx.amount;});
  const sorted=Object.entries(cats).sort((a,b)=>b[1]-a[1]);
  const total=sorted.reduce((s,[,v])=>s+v,0);
  const BAR_COLORS=['#2563eb','#7c3aed','#db2777','#ea580c','#ca8a04','#16a34a','#0891b2','#4f46e5'];
  const el=document.getElementById('ai-cat-bars');
  if(!sorted.length){ el.innerHTML=`<div style="font-size:.82rem;color:var(--text-muted);text-align:center;padding:12px 0">${escHtml(t('empty_no_expenses_month'))}</div>`; return; }
  el.innerHTML=sorted.slice(0,7).map(([cat,amt],i)=>{
    const pct=total>0?Math.round(amt/total*100):0;
    const label=catLabel(cat);
    const shortLabel=label.length>14?label.slice(0,14)+'…':label;
    return`<div class="cat-bar-row" onclick="openCategoryDetail('${escHtml(cat)}')">
      <div class="cat-bar-label" title="${escHtml(label)}">${escHtml(shortLabel)}</div>
      <div class="cat-bar-track"><div class="cat-bar-fill" style="width:${pct}%;background:${BAR_COLORS[i%BAR_COLORS.length]}"></div></div>
      <div class="cat-bar-val">$${fmtNum(amt)}</div>
    </div>`;
  }).join('');
  renderTrendIndicators(transactions,now,mk);
}

function renderTrendIndicators(transactions,now,mk){
  const lastMonth=new Date(now.getFullYear(),now.getMonth()-1,1);
  const lmk=lastMonth.getFullYear()+'-'+String(lastMonth.getMonth()+1).padStart(2,'0');
  const thisExp=transactions.filter(tx=>tx.type==='expense'&&tx.date&&tx.date.startsWith(mk)).reduce((s,tx)=>s+tx.amount,0);
  const lastExp=transactions.filter(tx=>tx.type==='expense'&&tx.date&&tx.date.startsWith(lmk)).reduce((s,tx)=>s+tx.amount,0);
  const thisInc=transactions.filter(tx=>tx.type==='income'&&tx.date&&tx.date.startsWith(mk)).reduce((s,tx)=>s+tx.amount,0);
  const lastInc=transactions.filter(tx=>tx.type==='income'&&tx.date&&tx.date.startsWith(lmk)).reduce((s,tx)=>s+tx.amount,0);
  const savRate=thisInc>0?Math.round((thisInc-thisExp)/thisInc*100):null;
  const el=document.getElementById('ai-trends');
  if(!thisExp&&!thisInc){el.innerHTML='';return;}
  const expDiff=lastExp>0?Math.round((thisExp-lastExp)/lastExp*100):null;
  const incDiff=lastInc>0?Math.round((thisInc-lastInc)/lastInc*100):null;
  let rows='';
  if(expDiff!==null){
    const dir=expDiff>5?'up':expDiff<-5?'down':'flat';
    const icon=dir==='up'?'📈':'📉';
    const cls=dir==='up'?'trend-up':dir==='down'?'trend-down':'trend-flat';
    rows+=`<div class="ai-trend-row"><span style="font-size:1.1rem">${icon}</span><span style="font-size:.82rem;flex:1">${escHtml(t('stat_spent'))}</span><span class="${cls}">${expDiff>0?'+':''}${expDiff}%</span></div>`;
  }
  if(incDiff!==null){
    const dir=incDiff>5?'up':incDiff<-5?'down':'flat';
    const icon=dir==='up'?'💹':'📊';
    const cls=dir==='up'?'trend-down':dir==='down'?'trend-up':'trend-flat';
    rows+=`<div class="ai-trend-row"><span style="font-size:1.1rem">${icon}</span><span style="font-size:.82rem;flex:1">${escHtml(t('stat_income'))}</span><span class="${cls}">${incDiff>0?'+':''}${incDiff}%</span></div>`;
  }
  if(savRate!==null){
    const icon=savRate>=20?'🟢':savRate>=10?'🟡':'🔴';
    rows+=`<div class="ai-trend-row"><span style="font-size:1.1rem">${icon}</span><span style="font-size:.82rem;flex:1">${escHtml(t('stat_net'))}</span><span style="font-weight:700;color:${savRate>=20?'var(--green)':savRate>=10?'var(--gold)':'var(--red)'}">${savRate}%</span></div>`;
  }
  el.innerHTML=rows?`<div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:10px 12px;margin-bottom:4px">${rows}</div>`:'';
}

async function runSpendingAnalysis(){
  const btn=document.getElementById('ai-analyze-btn');
  const bodyEl=document.getElementById('ai-analysis-body');
  const loadEl=document.getElementById('ai-loading');
  const loadMsg=document.getElementById('ai-loading-msg');
  btn.disabled=true; btn.textContent=t('btn_analyzing');
  loadEl.style.display='block'; bodyEl.style.display='none';

  const transactions=getData('transactions');
  const accounts=getData('accounts');
  const goals=getData('goals');
  const bills=getData('bills');
  const now=new Date();

  const months=[];
  for(let i=2;i>=0;i--){
    const d=new Date(now.getFullYear(),now.getMonth()-i,1);
    const key=d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0');
    const label=d.toLocaleDateString('en-US',{month:'long',year:'numeric'});
    const mInc=transactions.filter(tx=>tx.type==='income'&&(tx.date||'').startsWith(key)).reduce((s,tx)=>s+tx.amount,0);
    const mExp=transactions.filter(tx=>tx.type==='expense'&&(tx.date||'').startsWith(key)).reduce((s,tx)=>s+tx.amount,0);
    const mCats={};
    transactions.filter(tx=>tx.type==='expense'&&(tx.date||'').startsWith(key)).forEach(tx=>{mCats[tx.cat||'Other']=(mCats[tx.cat||'Other']||0)+tx.amount;});
    months.push({label,income:mInc,expense:mExp,cats:mCats,saved:mInc-mExp});
  }
  const allCats={};
  transactions.filter(tx=>tx.type==='expense').forEach(tx=>{allCats[tx.cat||'Other']=(allCats[tx.cat||'Other']||0)+tx.amount;});
  const topCats=Object.entries(allCats).sort((a,b)=>b[1]-a[1]).slice(0,5);
  const totalBalance=accounts.reduce((s,a)=>s+a.balance,0);
  const upcomingBills=bills.filter(b=>!b.paid).reduce((s,b)=>s+b.amount,0);
  const activeGoals=goals.filter(g=>!g.met);

  loadMsg.textContent='Building your financial picture…';

  const langNames={en:'English',es:'Spanish',ko:'Korean',ja:'Japanese'};
  const langInstruction=currentLang!=='en'?`\n\nIMPORTANT: Write all prose sentences and explanations in ${langNames[currentLang]}. However, keep the exact field labels (OVERALL:, Savings Rate:, Spending Control:, Goal Progress:, GRADE:, SUMMARY:) and the exact bolded section header markers (**⭐ SCORE**, **🔍 ...**, **📊 ...**, **📈 ...**, **💡 ...**, **🎯 ...**) exactly as given below, unchanged, so the app can parse them — translate only the words that come after them.`:'';

  const prompt=`You are an expert personal finance analyst. Analyze this user's real spending data and produce a detailed, insightful report. Be specific, use their actual numbers, and give concrete actionable advice. Use a warm but professional tone.

=== FINANCIAL SNAPSHOT ===
Current total balance: $${fmtNum(totalBalance)}
Upcoming bills (unpaid): $${fmtNum(upcomingBills)}
Active savings goals: ${activeGoals.length} goals, total saved $${fmtNum(activeGoals.reduce((s,g)=>s+g.saved,0))} of $${fmtNum(activeGoals.reduce((s,g)=>s+g.target,0))} target

=== LAST 3 MONTHS ===
${months.map(m=>`${m.label}: Income $${fmtNum(m.income)}, Spent $${fmtNum(m.expense)}, Net $${fmtNum(m.saved)}`).join('\n')}

=== TOP SPENDING CATEGORIES (all time) ===
${topCats.map(([cat,amt])=>`${cat}: $${fmtNum(amt)}`).join('\n')}

=== THIS MONTH CATEGORY DETAIL ===
${Object.entries(months[2]?.cats||{}).sort((a,b)=>b[1]-a[1]).map(([c,v])=>`${c}: $${fmtNum(v)}`).join('\n')||'No expenses this month yet'}

Please write a structured analysis with these EXACT section headers. Start with the score block:

**⭐ SCORE**
OVERALL: [number 1-100]
Savings Rate: [number 1-100]
Spending Control: [number 1-100]
Goal Progress: [number 1-100]
GRADE: [one of: Excellent / Good / Fair / Needs Work / Critical]
SUMMARY: [one sentence explaining the score]

Then continue with:

**🔍 Spending Pattern Summary**
(2-3 sentences on overall habits and what the data reveals)

**📊 Category Deep Dive**
(Identify the top 2-3 spending categories. For each, note whether it seems high, low, or appropriate and why)

**📈 Month-over-Month Trends**
(What's improving? What's concerning? Be specific with the numbers)

**💡 Top 3 Recommendations**
(Numbered list. Specific, actionable steps the user can take THIS week based on their actual data)

**🎯 Goal Progress Check**
(Brief note on whether their current saving rate will help them reach their goals, or if they need to adjust)

Keep everything under 400 words total. Use the actual dollar figures throughout. The score MUST be a plain integer between 1 and 100.${langInstruction}`;

  try{
    loadMsg.textContent='Claude is analyzing your habits…';
    const data=await api('POST','/api/ai/analyze',{prompt});
    if(data.content&&data.content[0]){
      const text=data.content[0].text;
      loadEl.style.display='none'; bodyEl.style.display='block';
      const scoreData=extractScore(text);
      animateScore(scoreData);
      bodyEl.innerHTML=renderAnalysisHTML(text);
    } else { throw new Error('No response'); }
  }catch(e){
    loadEl.style.display='none'; bodyEl.style.display='block';
    const fallbackScore=computeFallbackScore(months,topCats,activeGoals);
    animateScore(fallbackScore);
    bodyEl.innerHTML=renderFallbackAnalysis(months,topCats,totalBalance,upcomingBills,activeGoals);
  }
  btn.disabled=false; btn.textContent=t('btn_reanalyze');
}

function extractScore(text){
  const overall=text.match(/OVERALL:\s*(\d+)/i);
  const savRate=text.match(/Savings Rate:\s*(\d+)/i);
  const spendCtrl=text.match(/Spending Control:\s*(\d+)/i);
  const goalProg=text.match(/Goal Progress:\s*(\d+)/i);
  const grade=text.match(/GRADE:\s*([A-Za-z ]+)/i);
  const summary=text.match(/SUMMARY:\s*(.+)/i);
  return{
    overall:overall?Math.min(100,Math.max(1,parseInt(overall[1]))):50,
    subScores:[
      {label:'Savings Rate',val:savRate?parseInt(savRate[1]):50},
      {label:'Spending Control',val:spendCtrl?parseInt(spendCtrl[1]):50},
      {label:'Goal Progress',val:goalProg?parseInt(goalProg[1]):50}
    ],
    grade:grade?grade[1].trim():'Fair',
    summary:summary?summary[1].trim():''
  };
}
function computeFallbackScore(months,topCats,activeGoals){
  const curr=months[2]||{income:0,expense:0,saved:0};
  const prev=months[1]||{income:0,expense:0,saved:0};
  const savRate=curr.income>0?(curr.income-curr.expense)/curr.income*100:0;
  const savScore=Math.min(100,Math.round(savRate*4));
  const expTrend=prev.expense>0?(curr.expense-prev.expense)/prev.expense*100:0;
  const ctrlScore=Math.max(0,Math.min(100,70-Math.round(expTrend*1.5)));
  const goalScore=activeGoals.length>0?Math.min(100,Math.round((activeGoals.reduce((s,g)=>s+(g.target>0?g.saved/g.target:0),0)/activeGoals.length)*100)):40;
  const overall=Math.round(savScore*0.4+ctrlScore*0.35+goalScore*0.25);
  const g=overall>=80?'Excellent':overall>=65?'Good':overall>=50?'Fair':overall>=35?'Needs Work':'Critical';
  const summaries={'Excellent':'Your spending habits are excellent — keep it up!','Good':'You have solid financial habits with room to grow.','Fair':'A few adjustments could significantly improve your finances.','Needs Work':'Focus on reducing expenses and increasing your savings rate.','Critical':'Immediate changes are needed to stabilize your finances.'};
  return{overall,subScores:[{label:'Savings Rate',val:savScore},{label:'Spending Control',val:ctrlScore},{label:'Goal Progress',val:goalScore}],grade:g,summary:summaries[g]};
}
function scoreColor(n){
  if(n>=80)return{stroke:'#16a34a',text:'#14532d',bg:'#dcfce7'};
  if(n>=65)return{stroke:'#65a30d',text:'#3f6212',bg:'#ecfccb'};
  if(n>=50)return{stroke:'#ca8a04',text:'#713f12',bg:'#fef9c3'};
  if(n>=35)return{stroke:'#ea580c',text:'#7c2d12',bg:'#ffedd5'};
  return{stroke:'#dc2626',text:'#7f1d1d',bg:'#fee2e2'};
}
function animateScore(scoreData){
  const section=document.getElementById('ai-score-section');
  section.style.display='block';
  const{overall,subScores,grade,summary}=scoreData;
  const c=scoreColor(overall);
  const circ=226.2;
  const offset=circ-(circ*(overall/100));
  const ring=document.getElementById('score-ring');
  const numEl=document.getElementById('score-number');
  const gradeEl=document.getElementById('score-grade');
  const labelEl=document.getElementById('score-label');
  const bkEl=document.getElementById('score-breakdown');
  ring.style.stroke=c.stroke;
  setTimeout(()=>{ring.style.strokeDashoffset=offset;},100);
  let current=0;
  const step=Math.ceil(overall/40);
  const counter=setInterval(()=>{ current=Math.min(current+step,overall); numEl.textContent=current; if(current>=overall)clearInterval(counter); },30);
  numEl.style.color=c.text;
  gradeEl.textContent=grade;
  gradeEl.style.color=c.text;
  if(summary)labelEl.textContent=summary;
  bkEl.innerHTML=subScores.map(s=>{
    const sc=scoreColor(s.val);
    return`<div style="display:flex;align-items:center;gap:6px;margin-bottom:4px">
      <span style="font-size:.68rem;color:#475569;width:100px;flex-shrink:0">${s.label}</span>
      <div style="flex:1;background:#e2e8f0;border-radius:99px;height:5px;overflow:hidden"><div style="width:0%;height:100%;background:${sc.stroke};border-radius:99px;transition:width 1s ease"></div></div>
      <span style="font-size:.68rem;font-weight:700;color:${sc.text};width:26px;text-align:right">${s.val}</span>
    </div>`;
  }).join('');
  setTimeout(()=>{
    bkEl.querySelectorAll('div>div').forEach((bar,i)=>{ const target=subScores[i]?.val||0; setTimeout(()=>{bar.style.width=target+'%';},i*100); });
  },300);
}
function renderAnalysisHTML(rawText){
  const withoutScore=rawText.replace(/\*\*⭐ SCORE\*\*[\s\S]*?(?=\*\*🔍|\*\*📊|\*\*📈|\*\*💡|\*\*🎯|$)/,'');
  const sections=withoutScore.split(/\n(?=\*\*[^*]+\*\*)/);
  const sectionColors={'🔍':'#dbeafe','📊':'#ede9fe','📈':'#dcfce7','💡':'#fef9c3','🎯':'#fce7f3'};
  let html='<div style="margin-top:4px">';
  sections.forEach(section=>{
    const match=section.match(/^\*\*([^*]+)\*\*\n?([\s\S]*)/);
    if(!match){ if(section.trim())html+=`<p style="font-size:.84rem;color:#334155;line-height:1.6;margin-bottom:8px">${escHtml(section.trim())}</p>`; return; }
    const[,title,body]=match;
    const emoji=title.trim().charAt(0);
    const bg=sectionColors[emoji]||'#f1f5f9';
    const formatted=body.trim().replace(/\n(\d+)\. /g,'<br><span style="font-weight:700;color:#1e40af">$1.</span> ').replace(/\n- /g,'<br>• ').replace(/\n/g,'<br>');
    if(!formatted.trim())return;
    html+=`<div style="background:${bg};border-radius:12px;padding:12px 14px;margin-bottom:8px">
      <div style="font-size:.78rem;font-weight:700;color:#1e3a8a;margin-bottom:6px;text-transform:uppercase;letter-spacing:.4px">${escHtml(title.trim())}</div>
      <div style="font-size:.84rem;color:#1e293b;line-height:1.6">${formatted}</div>
    </div>`;
  });
  html+='<div style="font-size:.72rem;color:#94a3b8;text-align:center;margin-top:8px">Analysis by Claude AI</div></div>';
  return html;
}
function renderFallbackAnalysis(months,topCats,totalBalance,upcomingBills,activeGoals){
  const curr=months[2]||{income:0,expense:0,saved:0};
  const prev=months[1]||{income:0,expense:0,saved:0};
  const rate=curr.income>0?Math.round((curr.income-curr.expense)/curr.income*100):0;
  const expTrend=prev.expense>0?Math.round((curr.expense-prev.expense)/prev.expense*100):0;
  return`<div style="margin-top:4px">
    <div style="background:#dbeafe;border-radius:12px;padding:12px 14px;margin-bottom:8px">
      <div style="font-size:.78rem;font-weight:700;color:#1e3a8a;margin-bottom:6px;text-transform:uppercase;letter-spacing:.4px">🔍 Spending Pattern Summary</div>
      <div style="font-size:.84rem;color:#1e293b;line-height:1.6">
        ${curr.income>0?`This month you earned $${fmtNum(curr.income)} and spent $${fmtNum(curr.expense)}, leaving a net of $${fmtNum(curr.saved)}.`:'No transactions recorded this month yet.'}
        ${rate>=20?` Your ${rate}% savings rate is excellent.`:rate>0?` Your current savings rate is ${rate}%.`:' Start logging income and expenses to unlock your full analysis.'}
      </div>
    </div>
    ${topCats.length?`<div style="background:#ede9fe;border-radius:12px;padding:12px 14px;margin-bottom:8px">
      <div style="font-size:.78rem;font-weight:700;color:#1e3a8a;margin-bottom:6px;text-transform:uppercase;letter-spacing:.4px">📊 Category Deep Dive</div>
      <div style="font-size:.84rem;color:#1e293b;line-height:1.6">Top categories: ${topCats.slice(0,3).map(([c,v])=>`<strong>${escHtml(c)}</strong> ($${fmtNum(v)})`).join(', ')}.</div>
    </div>`:''}
    ${prev.expense>0?`<div style="background:#dcfce7;border-radius:12px;padding:12px 14px;margin-bottom:8px">
      <div style="font-size:.78rem;font-weight:700;color:#1e3a8a;margin-bottom:6px;text-transform:uppercase;letter-spacing:.4px">📈 Month-over-Month Trends</div>
      <div style="font-size:.84rem;color:#1e293b;line-height:1.6">Spending ${expTrend>0?'increased':'decreased'} by ${Math.abs(expTrend)}% vs last month ($${fmtNum(prev.expense)} → $${fmtNum(curr.expense)}).</div>
    </div>`:''}
    <div style="background:#fef9c3;border-radius:12px;padding:12px 14px;margin-bottom:8px">
      <div style="font-size:.78rem;font-weight:700;color:#1e3a8a;margin-bottom:6px;text-transform:uppercase;letter-spacing:.4px">💡 Top Recommendations</div>
      <div style="font-size:.84rem;color:#1e293b;line-height:1.6">
        <span style="font-weight:700;color:#1e40af">1.</span> ${topCats[0]?`Set a monthly cap for ${escHtml(topCats[0][0])}.`:'Log every transaction for one week.'}<br>
        <span style="font-weight:700;color:#1e40af">2.</span> ${upcomingBills>0?`Reserve $${fmtNum(upcomingBills)} for upcoming bills.`:'Use Reminders to track bills.'}<br>
        <span style="font-weight:700;color:#1e40af">3.</span> ${rate<20&&curr.income>0?`Aim to save $${fmtNum(curr.income*0.2)} of your $${fmtNum(curr.income)} income.`:'Review spending weekly.'}
      </div>
    </div>
    ${activeGoals.length?`<div style="background:#fce7f3;border-radius:12px;padding:12px 14px;margin-bottom:8px">
      <div style="font-size:.78rem;font-weight:700;color:#1e3a8a;margin-bottom:6px;text-transform:uppercase;letter-spacing:.4px">🎯 Goal Progress Check</div>
      <div style="font-size:.84rem;color:#1e293b;line-height:1.6">${activeGoals.length} active goal(s), $${fmtNum(activeGoals.reduce((s,g)=>s+g.saved,0))} of $${fmtNum(activeGoals.reduce((s,g)=>s+g.target,0))} saved.</div>
    </div>`:''}
  </div>`;
}

// ════════════════════════════════════════════════════
//  CHART DEFAULTS
// ════════════════════════════════════════════════════
function chartDefaults(){
  return{
    responsive:true,maintainAspectRatio:false,
    scales:{ x:{ticks:{color:'#64748b',font:{size:10}},grid:{display:false}}, y:{ticks:{color:'#64748b',font:{size:10},callback:v=>'$'+fmtNum(v)},grid:{color:'rgba(0,0,0,.06)'}} },
    plugins:{tooltip:{backgroundColor:'#1e3a8a',titleColor:'#ffffff',bodyColor:'#bfdbfe',callbacks:{label:ctx=>` $${fmtNum(ctx.parsed.y??ctx.parsed)}`}}}
  };
}

// ════════════════════════════════════════════════════
//  HELPERS
// ════════════════════════════════════════════════════
function fmtNum(n){if(isNaN(n)||n===null)return'0.00';return Number(n).toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});}
function fmtDate(d){if(!d)return'';return new Date(d+'T00:00:00').toLocaleDateString(localeForLang(),{month:'short',day:'numeric'});}
function fmtDateLong(d){if(!d)return'';return new Date(d+'T00:00:00').toLocaleDateString(localeForLang(),{month:'short',day:'numeric',year:'numeric'});}
function capitalize(s){return s?s.charAt(0).toUpperCase()+s.slice(1):'';}
function escHtml(s){return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
function today(){return new Date().toISOString().split('T')[0];}
function getLast6Months(){
  const months=[];const now=new Date();
  for(let i=5;i>=0;i--){const d=new Date(now.getFullYear(),now.getMonth()-i,1);months.push({key:d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0'),label:d.toLocaleDateString(localeForLang(),{month:'short'})});}
  return months;
}

// ════════════════════════════════════════════════════
//  SERVICE WORKER
// ════════════════════════════════════════════════════
if('serviceWorker' in navigator){
  window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));
}

// ════════════════════════════════════════════════════
//  AUTO-LOGIN
// ════════════════════════════════════════════════════
(async function(){
  if(authToken){
    try{ const user=await api('GET','/api/auth/me'); await loginUser(user); }
    catch(e){ authToken=null; localStorage.removeItem('mf_token'); }
  }
})();
</script>
</body>
</html>
