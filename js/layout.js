/**
 * Market Association Fee Tracking System
 * layout.js - High-Visibility, Clean Layout Shell (Sidebar + Topbar + Mobile Navigation)
 */

document.addEventListener("DOMContentLoaded", () => {
  renderAppShell();
});

function getBasePath() {
  const path = window.location.pathname;
  if (path.includes("/association/") || path.includes("/agent/") || path.includes("/trader/")) {
    return "../";
  }
  return "./";
}

function renderAppShell() {
  const shellContainer = document.getElementById("app-layout");
  if (!shellContainer) return;

  const base = getBasePath();
  const currentRole = AppState.getCurrentRole();
  const currentUser = AppState.getCurrentUser();
  const currentPath = window.location.pathname;

  const pendingCount = AppState.getAgents().filter(a => a.status === "Pending").length +
    AppState.getTraders().filter(t => t.status === "Pending").length;
  const mismatchCount = AppState.getBills().filter(b => b.status === "Mismatch").length;

  // Clear 18px SVG Icons
  const icons = {
    dashboard: '<svg class="w-4 h-4 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>',
    approvals: '<svg class="w-4 h-4 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
    directory: '<svg class="w-4 h-4 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>',
    bills: '<svg class="w-4 h-4 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>',
    rates: '<svg class="w-4 h-4 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
    lock: '<svg class="w-4 h-4 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>',
    payments: '<svg class="w-4 h-4 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/></svg>',
    receipt: '<svg class="w-4 h-4 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>',
    notifications: '<svg class="w-4 h-4 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>',
    addBill: '<svg class="w-4 h-4 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>',
    sync: '<svg class="w-4 h-4 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>',
    profile: '<svg class="w-4 h-4 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>'
  };

  const navMenus = {
    association: [
      { label: "Dashboard", href: `${base}association/dashboard.html`, icon: icons.dashboard },
      { label: "User Approvals", href: `${base}association/approvals.html`, icon: icons.approvals },
      { label: "Market Directory", href: `${base}association/users.html`, icon: icons.directory },
      { label: "Bills & Mismatches", href: `${base}association/bills.html`, icon: icons.bills },
      { label: "Rate Settings", href: `${base}association/rate-settings.html`, icon: icons.rates },
      { label: "Monthly Processing", href: `${base}association/monthly-processing.html`, icon: icons.lock },
      { label: "Payments", href: `${base}association/payments.html`, icon: icons.payments }
    ],
    agent: [
      { label: "Dashboard", href: `${base}agent/dashboard.html`, icon: icons.dashboard },
      { label: "Add Bill", href: `${base}agent/add-bill.html`, icon: icons.addBill },
      { label: "My Bills", href: `${base}agent/my-bills.html`, icon: icons.bills },
      { label: "Fee Statements", href: `${base}agent/fees.html`, icon: icons.payments }
    ],
    trader: [
      { label: "Dashboard", href: `${base}trader/dashboard.html`, icon: icons.dashboard },
      { label: "Add Bill", href: `${base}trader/add-bill.html`, icon: icons.addBill },
      { label: "My Bills", href: `${base}trader/my-bills.html`, icon: icons.bills },
      { label: "Ledger & Receipts", href: `${base}trader/fees-and-receipts.html`, icon: icons.payments }
    ]
  };

  const currentNav = navMenus[currentRole] || navMenus.association;
  const pageContentHtml = shellContainer.innerHTML;

  shellContainer.innerHTML = `
    <!-- Top Mandi Header (Crisp, High Visibility) -->
    <header id="topbar" class="bg-white border-b border-slate-200 sticky top-0 z-40 h-14 flex items-center px-4 sm:px-6 justify-between select-none shadow-sm">
      
      <!-- Left: Brand Logo & Title -->
      <div class="flex items-center space-x-3">
        <button id="mobile-menu-btn" class="md:hidden p-1.5 text-slate-600 hover:text-slate-900 border border-slate-300 rounded-md">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>

        <a href="${base}index.html" class="flex items-center space-x-2.5">
         
          <span class="font-bold text-base sm:text-lg text-slate-900 tracking-tight">Association Fee Tracking</span>
        </a>

      </div>

      <!-- Right: Role Switcher & User Profile -->
      <div class="flex items-center space-x-3 text-sm">
        
        <!-- Live Role Switcher Dropdown -->
        <div class="flex items-center bg-slate-100 border border-slate-200 rounded-md px-2.5 py-1">
          <label for="role-switcher-select" class="text-xs font-semibold text-slate-500 mr-2 hidden sm:inline">Role:</label>
          <select id="role-switcher-select" class="bg-transparent text-xs sm:text-sm font-semibold text-slate-800 border-none p-0 focus:outline-none cursor-pointer">
            <option value="association" ${currentRole === "association" ? "selected" : ""}>Association Staff</option>
            <option value="agent" ${currentRole === "agent" ? "selected" : ""}>Commission Agent</option>
            <option value="trader" ${currentRole === "trader" ? "selected" : ""}>Trader</option>
          </select>
        </div>

        <!-- Reset Demo Data Button -->
        <button id="reset-demo-btn" title="Reset all data back to factory defaults" class="hidden sm:inline-flex items-center text-xs font-medium text-slate-600 hover:text-slate-900 px-2.5 py-1.5 border border-slate-300 bg-white hover:bg-slate-50 rounded-md">
          Reset Data
        </button>

        <!-- Current User Signout -->
        <div class="border-l border-slate-200 pl-3 ml-1 text-right hidden sm:block">
          <span class="block text-xs font-bold text-slate-900 truncate max-w-[140px]">${currentUser ? currentUser.firmName : "User"}</span>
          <a href="${base}login.html" class="text-xs text-slate-500 hover:text-red-600">Sign Out</a>
        </div>

      </div>

    </header>

    <!-- Main Workspace Flex Layout -->
    <div class="flex-1 flex overflow-hidden min-h-[calc(100vh-56px)]">
      
      <!-- Fixed Dark Navy Sidebar (High Contrast & Clear Typography) -->
      <aside id="sidebar" class="w-64 bg-[#0F172A] text-slate-200 flex-shrink-0 hidden md:flex flex-col justify-between border-r border-slate-800 z-30 select-none">
        
        <div class="p-3.5">
          
          <!-- User Standing Pill -->
          

          <!-- Navigation Menu List -->
          <nav class="space-y-1">
            ${currentNav.map(item => {
    const isActive = currentPath.endsWith(item.href.replace(/^(\.\.\/|\.\/)/, "")) ||
      (currentPath.endsWith("/") && item.href.includes("dashboard.html"));
    return `
                <a href="${item.href}" class="flex items-center justify-between px-3 py-2.5 rounded-md text-sm transition-colors ${isActive
        ? "bg-[#1D4ED8] text-white font-semibold shadow-sm"
        : "text-slate-300 hover:bg-[#1E293B] hover:text-white"
      }">
                  <div class="flex items-center min-w-0">
                    ${item.icon}
                    <span class="truncate">${item.label}</span>
                  </div>
                </a>
              `;
  }).join("")}
          </nav>

        </div>

      

      </aside>

      <!-- Mobile Slideout Menu -->
      <div id="mobile-sidebar-drawer" class="fixed inset-0 z-50 bg-black/50 hidden md:hidden">
        <div class="fixed inset-y-0 left-0 w-64 bg-[#0F172A] text-slate-200 p-4 flex flex-col justify-between overflow-y-auto">
          <div>
            <div class="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
              <span class="font-bold text-base text-white">Navigation</span>
              <button id="close-mobile-menu" class="p-1 text-slate-400 hover:text-white text-xl leading-none">&times;</button>
            </div>
            <nav class="space-y-1 text-sm">
              ${currentNav.map(item => `
                <a href="${item.href}" class="flex items-center justify-between px-3 py-2.5 rounded-md text-slate-200 hover:bg-[#1E293B]">
                  <span>${item.label}</span>
                </a>
              `).join("")}
            </nav>
          </div>
          <div class="pt-4 border-t border-slate-800 text-sm">
            <button onclick="AppState.reset(); location.reload();" class="w-full py-2 bg-[#1D4ED8] text-white rounded-md mb-2 font-semibold">Reset Demo Data</button>
            <a href="${base}login.html" class="block text-center text-slate-400 hover:text-white py-1">Sign Out</a>
          </div>
        </div>
      </div>

      <!-- Main Content Area -->
      <main class="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 pb-24 md:pb-8 bg-[#F8FAFC]">
        ${pageContentHtml}
      </main>

    </div>

    <!-- Mobile Bottom Tab Navigation for Agent & Trader -->
    ${(currentRole === "agent" || currentRole === "trader") ? `
      <nav class="bottom-mobile-nav md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 z-40 flex items-center justify-around h-16 select-none px-2 shadow-lg">
        <a href="${base}${currentRole}/dashboard.html" class="flex flex-col items-center justify-center flex-1 h-full text-xs ${currentPath.includes('dashboard') ? 'text-[#1D4ED8] font-bold' : 'text-slate-600'}">
          <svg class="w-5 h-5 mb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
          Home
        </a>
        <a href="${base}${currentRole}/add-bill.html" class="flex flex-col items-center justify-center flex-1 h-full text-xs ${currentPath.includes('add-bill') ? 'text-[#1D4ED8] font-bold' : 'text-slate-600'}">
          <svg class="w-5 h-5 mb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
          Add Bill
        </a>
        <a href="${base}${currentRole}/my-bills.html" class="flex flex-col items-center justify-center flex-1 h-full text-xs ${currentPath.includes('my-bills') ? 'text-[#1D4ED8] font-bold' : 'text-slate-600'}">
          <svg class="w-5 h-5 mb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
          My Bills
        </a>
        <a href="${base}${currentRole}/${currentRole === 'agent' ? 'fees.html' : 'fees-and-receipts.html'}" class="flex flex-col items-center justify-center flex-1 h-full text-xs ${(currentPath.includes('fees') || currentPath.includes('receipts')) ? 'text-[#1D4ED8] font-bold' : 'text-slate-600'}">
          <svg class="w-5 h-5 mb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
          ${currentRole === 'agent' ? 'Fees' : 'Ledger'}
        </a>
      </nav>
    ` : ''}

    <div id="erp-top-loader"></div>
    <div id="erp-action-loader">
      <div class="erp-loader-box">
        <div class="erp-spinner"></div>
        <span id="erp-action-loader-text" class="text-sm font-semibold text-slate-800 tracking-tight">Processing...</span>
      </div>
    </div>
    <div id="toast-container"></div>
  `;

  initLayoutEvents(base);
}

function initLayoutEvents(base) {
  const roleSelect = document.getElementById("role-switcher-select");
  if (roleSelect) {
    roleSelect.addEventListener("change", (e) => {
      const selected = e.target.value;
      AppState.setCurrentRole(selected);
      if (selected === "association") {
        window.location.href = `${base}association/dashboard.html`;
      } else if (selected === "agent") {
        window.location.href = `${base}agent/dashboard.html`;
      } else if (selected === "trader") {
        window.location.href = `${base}trader/dashboard.html`;
      }
    });
  }

  const resetBtn = document.getElementById("reset-demo-btn");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (confirm("Reset all data and ledgers back to default records?")) {
        AppState.reset();
        showToast("System data restored to default records.", "success");
        setTimeout(() => location.reload(), 400);
      }
    });
  }

  const mobileBtn = document.getElementById("mobile-menu-btn");
  const mobileDrawer = document.getElementById("mobile-sidebar-drawer");
  const closeMobile = document.getElementById("close-mobile-menu");

  if (mobileBtn && mobileDrawer) {
    mobileBtn.addEventListener("click", () => mobileDrawer.classList.remove("hidden"));
  }
  if (closeMobile && mobileDrawer) {
    closeMobile.addEventListener("click", () => mobileDrawer.classList.add("hidden"));
  }
  if (mobileDrawer) {
    mobileDrawer.addEventListener("click", (e) => {
      if (e.target === mobileDrawer) mobileDrawer.classList.add("hidden");
    });
  }

  // Page Load Progress Bar Feedback
  startPageLoader();
  setTimeout(stopPageLoader, 220);

  // Link Click Navigation Loader
  document.querySelectorAll("a[href]").forEach(link => {
    const href = link.getAttribute("href");
    if (href && !href.startsWith("#") && !href.startsWith("javascript") && !href.startsWith("mailto") && !href.startsWith("tel") && !link.target) {
      link.addEventListener("click", () => {
        startPageLoader();
      });
    }
  });
}

/**
 * Global Simple Loader Helpers (Top Bar & Action Spinner)
 */
function startPageLoader() {
  let loader = document.getElementById("erp-top-loader");
  if (!loader) {
    loader = document.createElement("div");
    loader.id = "erp-top-loader";
    document.body.appendChild(loader);
  }
  loader.style.opacity = "1";
  loader.style.width = "25%";
  setTimeout(() => { if (loader) loader.style.width = "75%"; }, 80);
}

function stopPageLoader() {
  const loader = document.getElementById("erp-top-loader");
  if (!loader) return;
  loader.style.width = "100%";
  setTimeout(() => {
    loader.style.opacity = "0";
    setTimeout(() => { if (loader) loader.style.width = "0%"; }, 250);
  }, 120);
}

function showActionLoader(text = "Processing...", minDuration = 350, onDone = null) {
  let overlay = document.getElementById("erp-action-loader");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "erp-action-loader";
    overlay.innerHTML = `
      <div class="erp-loader-box">
        <div class="erp-spinner"></div>
        <span id="erp-action-loader-text" class="text-sm font-semibold text-slate-800 tracking-tight">Processing...</span>
      </div>
    `;
    document.body.appendChild(overlay);
  }
  const textEl = document.getElementById("erp-action-loader-text");
  if (textEl) textEl.textContent = text;
  overlay.classList.add("active");

  if (minDuration > 0) {
    setTimeout(() => {
      hideActionLoader();
      if (typeof onDone === "function") onDone();
    }, minDuration);
  }
}

function hideActionLoader() {
  const overlay = document.getElementById("erp-action-loader");
  if (overlay) overlay.classList.remove("active");
}

window.startPageLoader = startPageLoader;
window.stopPageLoader = stopPageLoader;
window.showActionLoader = showActionLoader;
window.hideActionLoader = hideActionLoader;

/**
 * Toast Notification (Clear, Legible)
 */
function showToast(message, type = "info", duration = 3800) {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `erp-toast toast-${type}`;

  const typeLabels = {
    success: "Success",
    error: "Error",
    warning: "Notice",
    info: "System Info",
    whatsapp: "WhatsApp Sent"
  };

  toast.innerHTML = `
    <div class="flex-1">
      <div class="text-xs uppercase font-bold tracking-wider text-slate-500 mb-0.5">${typeLabels[type] || 'Notice'}</div>
      <div class="text-sm text-slate-900 leading-snug font-medium">${message}</div>
    </div>
    <button class="text-slate-400 hover:text-slate-700 text-base ml-1" onclick="this.parentElement.remove()">&times;</button>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transition = "opacity 0.2s ease";
    setTimeout(() => toast.remove(), 250);
  }, duration);
}

/**
 * Clear Charts
 */
function renderSimpleBarChart(containerId, data, title) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const maxVal = Math.max(...data.map(d => d.value), 1);
  const barsHtml = data.map(item => {
    const heightPct = Math.round((item.value / maxVal) * 100);
    return `
      <div class="flex-1 flex flex-col items-center group">
        <div class="w-full flex items-end justify-center h-32">
          <div style="height: ${heightPct}%;" class="w-5 sm:w-6 bg-[#2563EB] group-hover:bg-[#1D4ED8] transition-colors rounded-t-sm"></div>
        </div>
        <div class="mt-2 text-xs font-mono font-medium text-slate-600 truncate w-full text-center">
          ${item.label}
        </div>
      </div>
    `;
  }).join("");

  container.innerHTML = `
    <div class="bg-white border border-slate-200 rounded-md p-4 shadow-sm">
      <div class="flex items-center justify-between mb-3">
        <span class="text-sm font-bold text-slate-900 uppercase tracking-wide">${title}</span>
        <span class="text-xs text-slate-500 font-mono">Bags / Trading Day</span>
      </div>
      <div class="flex items-end gap-2 pt-2 border-b border-slate-200 pb-1">
        ${barsHtml}
      </div>
      <div class="flex justify-between text-xs text-slate-500 mt-2 font-mono">
        <span>01 Oct</span>
        <span>Daily Trading Volume</span>
        <span>30 Oct</span>
      </div>
    </div>
  `;
}

function renderSimpleTrendLine(containerId, title) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="bg-white border border-slate-200 rounded-md p-4 shadow-sm">
      <div class="flex items-center justify-between mb-3">
        <span class="text-sm font-bold text-slate-900 uppercase tracking-wide">${title}</span>
        <span class="text-xs text-slate-500 font-mono">₹ in Lakhs</span>
      </div>
      <div class="h-32 relative flex items-center justify-center border-b border-slate-200">
        <svg class="w-full h-full text-[#2563EB]" viewBox="0 0 300 90" preserveAspectRatio="none">
          <line x1="0" y1="20" x2="300" y2="20" stroke="#E2E8F0" stroke-width="1" />
          <line x1="0" y1="50" x2="300" y2="50" stroke="#E2E8F0" stroke-width="1" />
          <line x1="0" y1="75" x2="300" y2="75" stroke="#E2E8F0" stroke-width="1" />
          <polyline fill="none" stroke="#2563EB" stroke-width="2.5" points="0,75 50,65 100,68 150,50 200,40 250,28 300,18" />
          <circle cx="50" cy="65" r="3" fill="#2563EB" />
          <circle cx="100" cy="68" r="3" fill="#2563EB" />
          <circle cx="150" cy="50" r="3" fill="#2563EB" />
          <circle cx="200" cy="40" r="3" fill="#2563EB" />
          <circle cx="250" cy="28" r="3" fill="#2563EB" />
          <circle cx="300" cy="18" r="3.5" fill="#2563EB" stroke="#FFFFFF" stroke-width="2" />
        </svg>
      </div>
      <div class="flex justify-between text-xs text-slate-500 mt-2 font-mono">
        <span>May (1.8L)</span>
        <span>Jun (2.1L)</span>
        <span>Jul (2.0L)</span>
        <span>Aug (2.4L)</span>
        <span>Sep (2.7L)</span>
        <span class="font-bold text-slate-900">Oct (3.2L)</span>
      </div>
    </div>
  `;
}

/**
 * Global Standard Pagination Renderer
 * Standardizes the pagination UI across all tables
 */
function renderStandardPagination(containerId, { currentPage = 1, totalItems = 0, pageSize = 10, onPageClick = null } = {}) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
  const start = totalItems === 0 ? 0 : (currentPage - 1) * pageSize + 1;
  const end = Math.min(totalItems, currentPage * pageSize);

  let pageButtons = "";
  const maxButtons = Math.min(totalPages, 5);
  for (let p = 1; p <= maxButtons; p++) {
    pageButtons += `
      <button type="button" class="erp-pagination-btn ${p === currentPage ? 'active' : ''}" 
        ${onPageClick ? `onclick="${onPageClick}(${p})"` : ''}>
        ${p}
      </button>
    `;
  }

  container.className = "erp-table-pagination";
  container.innerHTML = `
    <div class="text-xs sm:text-sm text-slate-600">
      Showing <strong class="text-slate-900 font-semibold">${start}</strong> to <strong class="text-slate-900 font-semibold">${end}</strong> of <strong class="text-slate-900 font-semibold">${totalItems}</strong> entries
    </div>
    <div class="erp-pagination-controls">
      <button type="button" class="erp-pagination-btn" ${currentPage <= 1 ? 'disabled' : ''} 
        ${onPageClick && currentPage > 1 ? `onclick="${onPageClick}(${currentPage - 1})"` : ''}>
        &larr; Prev
      </button>
      ${pageButtons}
      <button type="button" class="erp-pagination-btn" ${currentPage >= totalPages ? 'disabled' : ''} 
        ${onPageClick && currentPage < totalPages ? `onclick="${onPageClick}(${currentPage + 1})"` : ''}>
        Next &rarr;
      </button>
    </div>
  `;
}
