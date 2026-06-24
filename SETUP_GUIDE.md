# MyFinances — Setup & Deployment Guide

## What You Have
A complete Progressive Web App (PWA) — one HTML file that IS the full app.

**5 Screens:**
- My Finances — accounts, balances, income, expense tracking, earnings chart
- Finance Stats — weekly/monthly/yearly charts, pie chart by account, AI savings coach
- Financial Reminders — bill reminders with recurrence, payday tracking with notifications
- Savings Goals — envelope-style goal tracker with progress bars
- Mutual Finances — shared view with a connected partner (couples feature)

---

## WHERE TO PUT THE CODE
All the code below goes in ONE file: **index.html**
You do not need to edit any other file. Open index.html in VS Code and replace the entire contents.

---

## Step 1 — Open in VS Code (Windows)
1. Download the myfinances folder to your desktop
2. Open VS Code → File → Open Folder → select `myfinances`
3. Install the "Live Server" extension by Ritwick Dey
4. Right-click `index.html` → "Open with Live Server"
5. Your browser opens at http://127.0.0.1:5500/index.html
6. Create an account and test all features

---

## Step 2 — Publish (Free, 2 minutes)
### Netlify Drop (Easiest)
1. Go to https://app.netlify.com/drop
2. Drag the entire `myfinances` folder onto the page
3. You get a live URL like https://happy-fox-12345.netlify.app

### GitHub Pages
1. Create account at github.com
2. New repository → name it `myfinances` → Public
3. Upload all files
4. Settings → Pages → Source: main branch → Save
5. Your URL: https://yourusername.github.io/myfinances

---

## Step 3 — Install on iPhone
1. Open Safari on your iPhone (must be Safari)
2. Go to your published URL
3. Tap the Share button (box with arrow)
4. Tap "Add to Home Screen"
5. Tap Add

The app appears on your home screen and runs fullscreen like a native app.

---

## Data & Privacy
- All data is stored locally on each device using localStorage
- Each username has completely private, separate data
- The Mutual Finances feature reads partner data client-side only — no server involved
- Passwords are stored locally — this is a personal household app, not a bank

---

## File Structure
```
myfinances/
├── index.html    ← THE ENTIRE APP (edit this file)
├── manifest.json ← Makes it installable on iPhone
├── sw.js         ← Enables offline use
├── icon.png      ← Add your 192x192 icon here
└── icon-512.png  ← Add your 512x512 icon here
```

---

## Customization (in VS Code)
- **Colors**: Find `:root {` at the top of index.html, change `--royal: #1e4db7`
- **App name**: Search for "MyFinances" and replace
- **Categories**: Find `<select id="exp-cat">` and add options
