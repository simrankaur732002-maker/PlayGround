import { BUSINESSES, JOBS, SHOP_ITEMS, TIME } from './data.js';
import { formatMoney, formatTime, clamp, pick } from './utils.js';

const $ = (id) => document.getElementById(id);

export class GameUI {
  constructor(game) {
    this.game = game;
    this.phoneOpen = false;
    this.activeTab = 'map';
    this.shopOpen = false;
    this.jobOpen = false;
    this.howOpen = false;
    this.pauseOpen = false;
    this.baristaOpen = false;
    this.deathOpen = false;
    this.currentShop = null;
    this.barista = null;
    this.dialogueTimer = null;
    this.toastId = 0;
    this.resetArmed = false;
    this.cache();
    this.bind();
    this.updateSound(game.state.sound !== false);
  }

  cache() {
    this.startScreen = $('startScreen');
    this.hud = $('hud');
    this.cashLabel = $('cashLabel');
    this.dayLabel = $('dayLabel');
    this.weatherLabel = $('weatherLabel');
    this.locationLabel = $('locationLabel');
    this.districtLabel = $('districtLabel');
    this.interiorTag = $('interiorTag');
    this.barHealth = $('barHealth');
    this.barEnergy = $('barEnergy');
    this.barHunger = $('barHunger');
    this.barMood = $('barMood');
    this.valHealth = $('valHealth');
    this.valEnergy = $('valEnergy');
    this.valHunger = $('valHunger');
    this.valMood = $('valMood');
    this.prompt = $('interactPrompt');
    this.promptKey = $('promptKey');
    this.promptLabel = $('promptLabel');
    this.promptSub = $('promptSub');
    this.objectivePanel = $('objectivePanel');
    this.objIcon = $('objIcon');
    this.objTag = $('objTag');
    this.objText = $('objText');
    this.objSub = $('objSub');
    this.objTimer = $('objTimer');
    this.phonePanel = $('phonePanel');
    this.shopModal = $('shopModal');
    this.jobModal = $('jobModal');
    this.howModal = $('howModal');
    this.pauseModal = $('pauseModal');
    this.deathModal = $('deathModal');
    this.baristaModal = $('baristaModal');
    this.toastStack = $('toastStack');
    this.dialoguePanel = $('dialoguePanel');
    this.dialogueAvatar = $('dialogueAvatar');
    this.dialogueName = $('dialogueName');
    this.dialogueText = $('dialogueText');
    this.minimap = $('minimap');
    this.bigMap = $('bigMap');
    this.phoneDay = $('phoneDay');
    this.phoneCash = $('phoneCash');
    this.inventoryList = $('inventoryList');
    this.wardrobeList = $('wardrobeList');
    this.homeStatus = $('homeStatus');
    this.jobList = $('jobList');
    this.jobModalList = $('jobModalList');
    this.shopItems = $('shopItems');
    this.shopCash = $('shopCash');
    this.fadeEl = $('fade');
    this.soundState = $('soundState');
    this.saveHint = $('saveHint');
    this.hintLine = $('hintLine');
    this.bagCount = $('bagCount');
  }

  bind() {
    $('startBtn')?.addEventListener('click', () => {
      this.game.audio.init();
      this.game.start();
    });
    $('howBtn')?.addEventListener('click', () => this.openHow());
    $('helpBtn')?.addEventListener('click', () => this.openHow());
    $('helpBtn2')?.addEventListener('click', () => this.openHow());
    $('soundToggleStart')?.addEventListener('click', () => this.game.toggleSound());
    $('soundToggle')?.addEventListener('click', () => this.game.toggleSound());
    $('phoneBtn')?.addEventListener('click', () => this.game.togglePhone());
    $('phoneClose')?.addEventListener('click', () => this.closePhone());
    $('dialogueNext')?.addEventListener('click', () => this.hideDialogue());
    $('sleepHomeBtn')?.addEventListener('click', () => this.game.sleepAtHome());
    $('goHomeBtn')?.addEventListener('click', () => this.game.goHome());
    $('respawnBtn')?.addEventListener('click', () => this.game.respawn());
    $('resumeBtn')?.addEventListener('click', () => this.togglePause());
    $('pausePhoneBtn')?.addEventListener('click', () => {
      this.togglePause(false);
      this.openPhone();
    });
    $('pauseHelpBtn')?.addEventListener('click', () => {
      this.togglePause(false);
      this.openHow();
    });

    document.querySelectorAll('.phone-tab').forEach((tab) => {
      tab.addEventListener('click', () => this.switchTab(tab.dataset.tab));
    });

    document.querySelectorAll('[data-close]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const type = btn.dataset.close;
        if (type === 'shop') this.closeShop();
        if (type === 'jobs') this.closeJobBoard();
        if (type === 'how') this.closeHow();
      });
    });

    $('resetSaveBtn')?.addEventListener('click', () => {
      if (!this.resetArmed) {
        this.resetArmed = true;
        const btn = $('resetSaveBtn');
        if (btn) btn.querySelector('b').textContent = 'TAP AGAIN';
        setTimeout(() => {
          this.resetArmed = false;
          if (btn) btn.querySelector('b').textContent = 'RESET';
        }, 2600);
        this.toast('Tap reset once more to erase your Harbor City progress.', '⚠️', 'bad');
        return;
      }
      this.game.resetSave();
    });

    this.bigMap?.addEventListener('click', (event) => {
      const rect = this.bigMap.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width;
      const py = (event.clientY - rect.top) / rect.height;
      const x = px * 340 - 170;
      const z = py * 340 - 170;
      this.game.waypoint = { x, z };
      this.game.audio.click();
      this.toast('Waypoint set on the city map.', '📍', 'good');
      this.drawBigMap();
      this.drawMinimap();
    });
  }

  refreshSaveHint(hasSave) {
    if (this.saveHint) this.saveHint.textContent = hasSave ? 'Save found — continue your life' : 'New life — start fresh';
    const note = $('startNote');
    if (note) note.textContent = hasSave
      ? 'Your cash, home, wardrobe, cars, and pet are saved in this browser.'
      : 'A full day and night cycle. Your progress saves automatically.';
  }

  hideStart() {
    this.startScreen?.classList.add('leaving');
    setTimeout(() => this.startScreen?.classList.add('hidden'), 700);
    const bar = $('loadingBar');
    if (bar) bar.style.opacity = '0';
  }

  showHUD() {
    this.hud?.classList.remove('hidden');
    this.tick(true);
  }

  tick(force = false) {
    this.updateHUD();
    this.drawMinimap();
    if (this.phoneOpen) {
      this.drawBigMap();
      if (force) this.updatePhone();
    }
    if (force) this.updatePhone();
  }

  updateHUD() {
    const state = this.game.state;
    const s = state.stats;
    this.cashLabel.textContent = formatMoney(state.cash);
    this.dayLabel.textContent = this.game.getDayLabel();
    this.weatherLabel.textContent = this.game.getWeatherName();
    this.locationLabel.textContent = this.game.getLocationName();
    this.districtLabel.textContent = this.game.getDistrictName();
    this.interiorTag.classList.toggle('hidden', !this.game.insideId);
    this.setBar(this.barHealth, this.valHealth, s.health);
    this.setBar(this.barEnergy, this.valEnergy, s.energy);
    this.setBar(this.barHunger, this.valHunger, s.hunger);
    this.setBar(this.barMood, this.valMood, s.mood);
    this.phoneDay.textContent = `${TIME.dayNames[state.day]} · ${formatTime(state.minutes)}`;
    this.phoneCash.textContent = formatMoney(state.cash);
    this.shopCash.textContent = formatMoney(state.cash);
    this.updateObjective();

    if (this.hintLine) {
      this.hintLine.innerHTML = this.game.insideId
        ? '<span class="pulse-dot"></span> Walk to the counter and press <kbd>E</kbd> to shop'
        : '<span class="pulse-dot"></span> Walk into a glowing door and press <kbd>E</kbd>';
    }
  }

  setBar(bar, valueEl, value) {
    const v = clamp(Math.round(value), 0, 100);
    bar.style.width = `${v}%`;
    valueEl.textContent = v;
  }

  updateObjective() {
    const mission = this.game.getMissionInfo();
    if (!mission) {
      this.objectivePanel.classList.add('hidden');
      return;
    }
    this.objectivePanel.classList.remove('hidden');
    const step = mission.step;
    this.objIcon.textContent = mission.job.icon;
    this.objTag.textContent = `ACTIVE GIG · ${mission.stage + 1}/${mission.total}`;
    this.objText.textContent = step?.label || mission.job.name;
    this.objSub.textContent = step ? `${step.place} · ${Math.round(mission.distance)} m` : mission.job.desc;
    const total = Math.max(0, Math.ceil(mission.timeLeft));
    this.objTimer.textContent = `${String(Math.floor(total / 60)).padStart(2, '0')}:${String(total % 60).padStart(2, '0')}`;
    this.objTimer.style.color = mission.timeLeft < 30 ? '#ff7c6b' : '#ffd7a2';
  }

  setPrompt(item) {
    if (!item) {
      this.prompt.classList.add('hidden');
      return;
    }
    this.prompt.classList.remove('hidden');
    this.promptLabel.textContent = item.label || 'Interact';
    this.promptSub.textContent = item.sub || (this.game.driving ? 'Press E to get out' : 'Press E');
    this.promptKey.textContent = 'E';
    const action = $('mobileAction');
    if (action) {
      const label = action.querySelector('small');
      if (label) label.textContent = item.type === 'car' ? 'DRIVE' : item.type === 'exitcar' ? 'EXIT' : 'USE';
    }
  }

  toast(message, icon = '•', type = '') {
    if (!this.toastStack) return;
    const el = document.createElement('div');
    el.className = `toast ${type}`;
    el.innerHTML = `<span>${icon}</span><div>${message}</div>`;
    this.toastStack.appendChild(el);
    const id = ++this.toastId;
    setTimeout(() => {
      if (el.parentElement) {
        el.classList.add('out');
        setTimeout(() => el.remove(), 320);
      }
    }, 3600);
    while (this.toastStack.children.length > 4) this.toastStack.firstElementChild.remove();
    return id;
  }

  showDialogue(name, text, icon = '💬') {
    this.dialogueName.textContent = name;
    this.dialogueText.textContent = text;
    this.dialogueAvatar.textContent = icon;
    this.dialoguePanel.classList.remove('hidden');
    clearTimeout(this.dialogueTimer);
    this.dialogueTimer = setTimeout(() => this.hideDialogue(), 9000);
  }

  hideDialogue() {
    this.dialoguePanel.classList.add('hidden');
    clearTimeout(this.dialogueTimer);
  }

  setInside(business) {
    this.interiorTag.classList.remove('hidden');
    this.locationLabel.textContent = business?.name || 'Inside';
    this.districtLabel.textContent = business?.category?.toUpperCase() || 'INTERIOR';
  }

  setOutside() {
    this.interiorTag.classList.add('hidden');
  }

  openPhone(tab = null) {
    if (tab) this.activeTab = tab;
    this.phoneOpen = true;
    this.phonePanel.classList.remove('hidden');
    this.syncBlocking();
    this.switchTab(this.activeTab);
    this.updatePhone();
    this.drawBigMap();
    this.game.audio.click();
  }

  closePhone() {
    if (!this.phoneOpen) return;
    this.phoneOpen = false;
    this.phonePanel.classList.add('hidden');
    this.syncBlocking();
    this.game.audio.click();
  }

  switchTab(tab) {
    if (!tab) return;
    this.activeTab = tab;
    document.querySelectorAll('.phone-tab').forEach((el) => el.classList.toggle('active', el.dataset.tab === tab));
    document.querySelectorAll('.phone-tab-page').forEach((el) => el.classList.toggle('active', el.dataset.page === tab));
    if (tab === 'map') this.drawBigMap();
    if (tab === 'inventory') this.renderInventory();
    if (tab === 'wardrobe') this.renderWardrobe();
    if (tab === 'home') this.renderHome();
    if (tab === 'jobs') this.renderJobs();
    this.game.audio.click();
  }

  updatePhone() {
    this.phoneDay.textContent = `${TIME.dayNames[this.game.state.day]} · ${formatTime(this.game.state.minutes)}`;
    this.phoneCash.textContent = formatMoney(this.game.state.cash);
    this.renderInventory();
    this.renderWardrobe();
    this.renderHome();
    this.renderJobs();
  }

  renderInventory() {
    const inv = Object.values(this.game.state.inventory || {});
    this.bagCount.textContent = `${inv.reduce((sum, item) => sum + item.count, 0)} items`;
    if (!inv.length) {
      this.inventoryList.innerHTML = '<div class="empty-state"><b>👜</b>Your bag is empty.<br>Grab a coffee, a snack, or some new clothes.</div>';
      return;
    }
    this.inventoryList.innerHTML = inv.map((item) => `
      <div class="inv-item">
        <div class="inv-icon">${item.icon || '📦'}</div>
        <div class="inv-copy"><strong>${item.name}</strong><span>${item.desc || 'A little piece of the city.'}</span></div>
        <div class="inv-qty">×${item.count}</div>
      </div>
    `).join('');
  }

  renderWardrobe() {
    const state = this.game.state;
    const current = state.outfitName || 'Harbor Casual';
    $('outfitName').textContent = current;
    $('outfitShirt').style.background = state.style.shirt || '#e86b4f';
    $('outfitPants').style.background = state.style.pants || '#293241';
    $('outfitHead').style.background = state.style.hair || '#2a211d';
    $('outfitBonus').textContent = `${state.wardrobe.length} pieces owned`;
    this.wardrobeList.innerHTML = state.wardrobe.map((item) => `
      <button class="wear-item ${item.name === current ? 'active' : ''}" data-wear="${item.id}">
        <span class="inv-icon">${item.icon || '👕'}</span>
        <strong>${item.name}</strong>
        <span>${item.name === current ? 'WEARING' : 'WEAR'}</span>
      </button>
    `).join('');
    this.wardrobeList.querySelectorAll('[data-wear]').forEach((btn) => {
      btn.addEventListener('click', () => {
        this.game.equipWardrobe(btn.dataset.wear);
        this.renderWardrobe();
      });
    });
  }

  renderHome() {
    const state = this.game.state;
    if (!state.house) {
      this.homeStatus.className = 'home-status locked';
      this.homeStatus.innerHTML = '<h3>No home yet</h3><p>Maple House in the south district is listed for <strong>$8,500</strong>. Visit Key &amp; Stone on Harbor Street to buy it.</p>';
      $('sleepHomeBtn').disabled = true;
      $('goHomeBtn').disabled = true;
      return;
    }
    $('sleepHomeBtn').disabled = false;
    $('goHomeBtn').disabled = false;
    const petLine = state.pet ? `${state.pet.name} the ${state.pet.type} is waiting. Pet happiness ${Math.round(state.petHappiness)}%.` : 'No pet yet. Paws & Co. has a few friends looking for a home.';
    this.homeStatus.className = 'home-status';
    this.homeStatus.innerHTML = `<h3>Maple House</h3><p>South district · two bedrooms · yours.<br>${petLine}<br>${state.ownedCars.length} vehicle${state.ownedCars.length === 1 ? '' : 's'} in the garage · ${state.jobsDone} gigs completed.</p>`;
  }

  renderJobs() {
    const active = this.game.state.job;
    this.jobList.innerHTML = Object.values(JOBS).map((job) => {
      const disabled = active || (job.needsCar && !this.game.driving);
      let hint = '';
      if (active) hint = active.id === job.id ? 'IN PROGRESS' : 'FINISH CURRENT GIG';
      else if (job.needsCar && !this.game.driving) hint = 'GET IN A CAR FIRST';
      else hint = `START · ${formatMoney(job.pay)}`;
      return `
        <div class="job-card">
          <div class="job-card-top"><div class="job-icon">${job.icon}</div><div><h3>${job.name}</h3><div class="job-meta"><span>PAY <b>${formatMoney(job.pay)}</b></span><span>${Math.round(job.timer / 60)} MIN</span></div></div></div>
          <p>${job.desc}</p>
          <button class="job-btn" data-start-job="${job.id}" ${disabled ? 'disabled' : ''}>${hint}</button>
        </div>
      `;
    }).join('');
    this.jobList.querySelectorAll('[data-start-job]').forEach((btn) => {
      btn.addEventListener('click', () => {
        this.game.startJob(btn.dataset.startJob);
        this.renderJobs();
      });
    });
  }

  openShop(business) {
    if (!business) return;
    this.currentShop = business;
    this.shopOpen = true;
    const items = SHOP_ITEMS[business.type] || [];
    $('shopBadge').textContent = business.type === 'hospital' ? '🏥' : business.type === 'dealership' ? '🚗' : business.type === 'realestate' ? '🏡' : business.type === 'petstore' ? '🐾' : business.type === 'restaurant' ? '🍽️' : business.type === 'cafe' ? '☕' : business.type === 'bar' ? '🍸' : business.type === 'gym' ? '🏋️' : business.type === 'hotel' ? '🏨' : '🛍️';
    $('shopCategory').textContent = business.category.toUpperCase();
    $('shopName').textContent = business.name;
    $('shopTagline').textContent = business.tagline;
    $('shopFootNote').textContent = items.some((i) => i.sleep) ? 'Room purchases include a full night of sleep.' : 'Purchases are instant. Food and services apply immediately.';
    this.renderShopItems(items);
    this.shopModal.classList.remove('hidden');
    this.syncBlocking();
    this.game.audio.click();
  }

  renderShopItems(items) {
    const state = this.game.state;
    this.shopCash.textContent = formatMoney(state.cash);
    if (!items.length) {
      this.shopItems.innerHTML = '<div class="empty-state" style="grid-column:1/-1"><b>🗝️</b>This counter is not selling anything right now.</div>';
      return;
    }
    this.shopItems.innerHTML = items.map((item) => {
      const owned = (item.vehicle && state.ownedCars.some((v) => v.id === item.vehicle.id))
        || (item.house && state.house)
        || (item.pet && state.pet)
        || (item.style && state.wardrobe.some((w) => w.id === item.id));
      const canEquip = item.style && owned;
      const affordable = state.cash >= item.price;
      const button = canEquip
        ? `<button class="buy-btn" data-wear-shop="${item.id}">WEAR</button>`
        : owned
          ? '<button class="buy-btn" disabled>OWNED</button>'
          : `<button class="buy-btn" data-buy="${item.id}" ${affordable ? '' : 'disabled'}>${item.sleep ? 'BOOK' : 'BUY'} · ${formatMoney(item.price)}</button>`;
      return `
        <div class="shop-item ${owned ? 'owned' : ''}">
          <div class="shop-item-top"><div class="item-icon">${item.icon}</div><div><h3>${item.name}</h3><p>${item.desc}</p></div></div>
          <div class="item-price">${formatMoney(item.price)}</div>
          ${button}
        </div>
      `;
    }).join('');
    this.shopItems.querySelectorAll('[data-buy]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const item = items.find((i) => i.id === btn.dataset.buy);
        if (this.game.purchase(item, this.currentShop)) this.renderShopItems(items);
      });
    });
    this.shopItems.querySelectorAll('[data-wear-shop]').forEach((btn) => {
      btn.addEventListener('click', () => {
        this.game.equipWardrobe(btn.dataset.wearShop);
        this.renderShopItems(items);
      });
    });
  }

  refreshShop() {
    if (this.shopOpen && this.currentShop) {
      this.renderShopItems(SHOP_ITEMS[this.currentShop.type] || []);
    }
  }

  closeShop() {
    this.shopOpen = false;
    this.shopModal.classList.add('hidden');
    this.currentShop = null;
    this.syncBlocking();
  }

  openJobBoard() {
    this.jobOpen = true;
    const active = this.game.state.job;
    $('jobModalList').innerHTML = Object.values(JOBS).map((job) => {
      const disabled = active || (job.needsCar && !this.game.driving);
      let label = `START · ${formatMoney(job.pay)}`;
      if (active) label = active.id === job.id ? 'IN PROGRESS' : 'FINISH CURRENT GIG';
      else if (job.needsCar && !this.game.driving) label = 'GET IN A CAR FIRST';
      return `
        <div class="job-pick">
          <div class="job-icon">${job.icon}</div>
          <h3>${job.name}</h3>
          <p>${job.desc}</p>
          <div class="job-meta"><span>PAY <b>${formatMoney(job.pay)}</b></span><span>${Math.round(job.timer / 60)} MIN</span></div>
          <button class="job-btn" data-pick-job="${job.id}" ${disabled ? 'disabled' : ''}>${label}</button>
        </div>
      `;
    }).join('');
    this.jobModalList.querySelectorAll('[data-pick-job]').forEach((btn) => {
      btn.addEventListener('click', () => this.game.startJob(btn.dataset.pickJob));
    });
    this.jobModal.classList.remove('hidden');
    this.syncBlocking();
    this.game.audio.click();
  }

  closeJobBoard() {
    this.jobOpen = false;
    this.jobModal.classList.add('hidden');
    this.syncBlocking();
  }

  openHow() {
    this.howOpen = true;
    this.howModal.classList.remove('hidden');
    this.syncBlocking();
    this.game.audio.click();
  }

  closeHow() {
    this.howOpen = false;
    this.howModal.classList.add('hidden');
    this.syncBlocking();
  }

  togglePause(force) {
    const next = typeof force === 'boolean' ? force : !this.pauseOpen;
    if (next && (this.phoneOpen || this.shopOpen || this.jobOpen || this.baristaOpen || this.deathOpen)) return;
    this.pauseOpen = next;
    this.pauseModal.classList.toggle('hidden', !next);
    this.syncBlocking();
    if (next) this.game.audio.click();
  }

  showDeath(fee) {
    this.deathOpen = true;
    const p = this.deathModal.querySelector('p');
    if (p) p.textContent = `Harbor General patched you up. A ${formatMoney(fee)} fee was charged.`;
    this.deathModal.classList.remove('hidden');
    this.phonePanel.classList.add('hidden');
    this.phoneOpen = false;
    this.shopModal.classList.add('hidden');
    this.shopOpen = false;
    this.syncBlocking();
  }

  hideDeath() {
    this.deathOpen = false;
    this.deathModal.classList.add('hidden');
    this.syncBlocking();
  }

  syncBlocking() {
    const blocking = this.phoneOpen || this.shopOpen || this.jobOpen || this.howOpen || this.pauseOpen || this.baristaOpen || this.deathOpen;
    this.game.setBlocking(blocking);
  }

  closeTop() {
    if (this.deathOpen) return true;
    if (this.baristaOpen) return true;
    if (this.shopOpen) { this.closeShop(); return true; }
    if (this.jobOpen) { this.closeJobBoard(); return true; }
    if (this.howOpen) { this.closeHow(); return true; }
    if (this.pauseOpen) { this.togglePause(false); return true; }
    if (this.phoneOpen) { this.closePhone(); return true; }
    if (!this.dialoguePanel.classList.contains('hidden')) { this.hideDialogue(); return true; }
    return false;
  }

  fade() {
    this.fadeEl.classList.add('on');
    setTimeout(() => this.fadeEl.classList.remove('on'), 520);
  }

  updateSound(enabled) {
    if (this.soundState) this.soundState.textContent = enabled ? 'ON' : 'OFF';
    const btn = $('soundToggleStart');
    if (btn) btn.textContent = enabled ? '♪' : '×';
  }

  drawMinimap() {
    if (!this.minimap) return;
    const ctx = this.minimap.getContext('2d');
    const w = this.minimap.width;
    const h = this.minimap.height;
    const scale = w / 180;
    const px = this.game.player.position.x;
    const pz = this.game.player.position.z;
    const cx = w / 2;
    const cy = h / 2;
    const toX = (x) => cx + (x - px) * scale;
    const toY = (z) => cy + (z - pz) * scale;

    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = '#171e27';
    ctx.fillRect(0, 0, w, h);

    // City blocks.
    ctx.fillStyle = '#232c37';
    for (const x of [-120, -60, 0, 60, 120]) {
      for (const z of [-120, -60, 0, 60, 120]) {
        if (x === 0 && z === 120) {
          ctx.fillStyle = '#2b4735';
        } else {
          ctx.fillStyle = '#232c37';
        }
        ctx.fillRect(toX(x - 22), toY(z - 22), 44 * scale, 44 * scale);
      }
    }

    // Roads.
    ctx.strokeStyle = '#3d4855';
    ctx.lineWidth = 15 * scale;
    for (const x of [-150, -90, -30, 30, 90, 150]) {
      ctx.beginPath();
      ctx.moveTo(toX(x), 0);
      ctx.lineTo(toX(x), h);
      ctx.stroke();
    }
    for (const z of [-150, -90, -30, 30, 90, 150]) {
      ctx.beginPath();
      ctx.moveTo(0, toY(z));
      ctx.lineTo(w, toY(z));
      ctx.stroke();
    }

    // Buildings.
    for (const b of this.game.city.buildings) {
      if (Math.abs(b.x - px) > 100 || Math.abs(b.z - pz) > 100) continue;
      ctx.fillStyle = b.id === 'house' && !this.game.state.house ? '#66594a' : '#354251';
      ctx.fillRect(toX(b.collider.minX), toY(b.collider.minZ), (b.collider.maxX - b.collider.minX) * scale, (b.collider.maxZ - b.collider.minZ) * scale);
      if (b.landmark || ['mall', 'supermarket', 'clothing', 'restaurant', 'bar', 'gym', 'hotel', 'dealership', 'jobcenter', 'petstore', 'cafe', 'house'].includes(b.id)) {
        ctx.fillStyle = b.id === 'jobcenter' ? '#59b8ff' : b.id === 'house' ? '#8fd46a' : '#ffb45c';
        ctx.fillRect(toX(b.x) - 2, toY(b.z) - 2, 4, 4);
      }
    }

    // Traffic dots.
    ctx.fillStyle = 'rgba(210,220,230,.45)';
    for (const car of this.game.city.traffic) {
      if (Math.abs(car.position.x - px) > 90 || Math.abs(car.position.z - pz) > 90) continue;
      ctx.fillRect(toX(car.position.x) - 1, toY(car.position.z) - 1, 2, 2);
    }

    // Mission and waypoint.
    const mission = this.game.getMissionInfo();
    if (mission?.step) this.drawMarker(ctx, toX(mission.step.x), toY(mission.step.z), '#ff7c6b', '#fff0d0');
    if (this.game.waypoint) this.drawMarker(ctx, toX(this.game.waypoint.x), toY(this.game.waypoint.z), '#58e6d2', '#0c1716');

    // Player arrow.
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(Math.PI - this.game.player.rotation.y);
    ctx.fillStyle = '#58e6d2';
    ctx.shadowColor = '#58e6d2';
    ctx.shadowBlur = 12;
    ctx.beginPath();
    ctx.moveTo(0, -10);
    ctx.lineTo(7, 7);
    ctx.lineTo(0, 3);
    ctx.lineTo(-7, 7);
    ctx.closePath();
    ctx.fill();
    ctx.restore();

    // North and border.
    ctx.strokeStyle = 'rgba(255,255,255,.12)';
    ctx.lineWidth = 2;
    ctx.strokeRect(1, 1, w - 2, h - 2);
    ctx.fillStyle = 'rgba(255,255,255,.55)';
    ctx.font = '700 18px system-ui';
    ctx.textAlign = 'center';
    ctx.fillText('N', w / 2, 24);
  }

  drawMarker(ctx, x, y, color, core) {
    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(x, y, 9, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = core;
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  drawBigMap() {
    if (!this.bigMap) return;
    const ctx = this.bigMap.getContext('2d');
    const w = this.bigMap.width;
    const h = this.bigMap.height;
    const scale = w / 340;
    const toX = (x) => (x + 170) * scale;
    const toY = (z) => (z + 170) * scale;

    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = '#10161e';
    ctx.fillRect(0, 0, w, h);

    // Outer ground.
    ctx.fillStyle = '#151c25';
    ctx.fillRect(toX(-170), toY(-170), 340 * scale, 340 * scale);

    // Blocks.
    for (const x of [-120, -60, 0, 60, 120]) {
      for (const z of [-120, -60, 0, 60, 120]) {
        ctx.fillStyle = x === 0 && z === 120 ? '#254334' : '#202832';
        ctx.fillRect(toX(x - 22), toY(z - 22), 44 * scale, 44 * scale);
      }
    }

    // Roads.
    ctx.strokeStyle = '#3d4856';
    ctx.lineWidth = 15 * scale;
    for (const x of [-150, -90, -30, 30, 90, 150]) {
      ctx.beginPath(); ctx.moveTo(toX(x), toY(-170)); ctx.lineTo(toX(x), toY(170)); ctx.stroke();
    }
    for (const z of [-150, -90, -30, 30, 90, 150]) {
      ctx.beginPath(); ctx.moveTo(toX(-170), toY(z)); ctx.lineTo(toX(170), toY(z)); ctx.stroke();
    }

    // Park.
    ctx.fillStyle = '#2d5039';
    ctx.fillRect(toX(-22), toY(98), 44 * scale, 44 * scale);
    ctx.fillStyle = '#58b8c9';
    ctx.beginPath(); ctx.arc(toX(0), toY(120), 4 * scale, 0, Math.PI * 2); ctx.fill();

    // Buildings.
    for (const b of this.game.city.buildings) {
      const color = b.id === 'house' ? (this.game.state.house ? '#8fd46a' : '#7b6651') : b.landmark ? '#c98d56' : '#364553';
      ctx.fillStyle = color;
      ctx.fillRect(toX(b.collider.minX), toY(b.collider.minZ), (b.collider.maxX - b.collider.minX) * scale, (b.collider.maxZ - b.collider.minZ) * scale);
      ctx.strokeStyle = 'rgba(0,0,0,.25)';
      ctx.lineWidth = 1;
      ctx.strokeRect(toX(b.collider.minX), toY(b.collider.minZ), (b.collider.maxX - b.collider.minX) * scale, (b.collider.maxZ - b.collider.minZ) * scale);
      if (['mall', 'supermarket', 'clothing', 'salon', 'restaurant', 'bar', 'gym', 'hotel', 'dealership', 'realestate', 'petstore', 'jobcenter', 'hospital', 'police', 'cafe', 'house'].includes(b.id)) {
        ctx.fillStyle = 'rgba(6,10,15,.75)';
        ctx.font = `800 ${Math.max(9, 9 * scale)}px system-ui`;
        ctx.textAlign = 'center';
        ctx.fillText(b.short, toX(b.x), toY(b.z) + 3);
      }
    }

    // Mission / waypoint.
    const mission = this.game.getMissionInfo();
    if (mission?.step) this.drawMarker(ctx, toX(mission.step.x), toY(mission.step.z), '#ff7c6b', '#fff0d0');
    if (this.game.waypoint) this.drawMarker(ctx, toX(this.game.waypoint.x), toY(this.game.waypoint.z), '#58e6d2', '#0b1816');

    // Player.
    const px = toX(this.game.player.position.x);
    const pz = toY(this.game.player.position.z);
    ctx.save();
    ctx.translate(px, pz);
    ctx.rotate(Math.PI - this.game.player.rotation.y);
    ctx.fillStyle = '#58e6d2';
    ctx.shadowColor = '#58e6d2';
    ctx.shadowBlur = 12;
    ctx.beginPath(); ctx.moveTo(0, -10); ctx.lineTo(7, 7); ctx.lineTo(0, 3); ctx.lineTo(-7, 7); ctx.closePath(); ctx.fill();
    ctx.restore();

    // Frame and compass.
    ctx.strokeStyle = 'rgba(255,255,255,.12)';
    ctx.lineWidth = 2;
    ctx.strokeRect(1, 1, w - 2, h - 2);
    ctx.fillStyle = 'rgba(255,255,255,.7)';
    ctx.font = '800 18px system-ui';
    ctx.textAlign = 'center';
    ctx.fillText('N', w / 2, 24);
  }

  startBarista(onComplete) {
    if (this.baristaOpen) return;
    this.baristaOpen = true;
    this.syncBlocking();
    const orders = [
      { icon: '☕', name: 'Oat Latte', line: 'An oat latte, please.' },
      { icon: '🧊', name: 'Cold Brew', line: 'One cold brew, no sugar.' },
      { icon: '🥐', name: 'Butter Croissant', line: 'Just a warm croissant.' },
      { icon: '🥪', name: 'Breakfast Sandwich', line: 'The breakfast sandwich, please.' },
      { icon: '☕🥐', name: 'Latte + Croissant', line: 'A latte and a croissant.' },
      { icon: '🧊🥐', name: 'Cold Brew + Croissant', line: 'Cold brew and a croissant.' },
      { icon: '🥪☕', name: 'Sandwich + Latte', line: 'Sandwich and a latte, thanks.' },
    ];
    this.barista = {
      orders,
      score: 0,
      needed: 5,
      time: 45,
      maxTime: 50,
      round: 0,
      locked: false,
      onComplete,
      interval: null,
    };
    $('baristaScore').textContent = `0 / 5`;
    $('baristaTimer').style.width = '100%';
    $('baristaFeedback').textContent = 'Make five orders before the timer runs out.';
    this.baristaModal.classList.remove('hidden');
    this.nextBaristaOrder();
    this.barista.interval = setInterval(() => {
      if (!this.barista || this.barista.locked) return;
      this.barista.time -= 0.1;
      $('baristaTimer').style.width = `${clamp((this.barista.time / this.barista.maxTime) * 100, 0, 100)}%`;
      if (this.barista.time <= 0) this.finishBarista(false);
    }, 100);
    this.game.audio.click();
  }

  nextBaristaOrder() {
    const b = this.barista;
    if (!b) return;
    if (b.score >= b.needed) {
      this.finishBarista(true);
      return;
    }
    b.locked = false;
    const correct = pick(b.orders);
    const options = [correct];
    while (options.length < 3) {
      const candidate = pick(b.orders);
      if (!options.some((o) => o.name === candidate.name)) options.push(candidate);
    }
    options.sort(() => Math.random() - 0.5);
    const customerIndex = Math.floor(Math.random() * 4);
    $('customerAvatar').textContent = ['🧑', '👩', '🧔', '👱', '🧓'][customerIndex];
    $('customerOrder').textContent = correct.line;
    $('customerHint').textContent = 'Pick the matching order.';
    $('baristaOptions').innerHTML = options.map((order) => `
      <button class="order-option" data-order="${order.name}">
        <span>${order.icon}</span>
        <strong>${order.name}</strong>
      </button>
    `).join('');
    $('baristaOptions').querySelectorAll('[data-order]').forEach((btn) => {
      btn.addEventListener('click', () => {
        if (!this.barista || this.barista.locked) return;
        this.barista.locked = true;
        if (btn.dataset.order === correct.name) {
          btn.classList.add('correct');
          this.barista.score += 1;
          this.barista.time = Math.min(this.barista.maxTime, this.barista.time + 3);
          $('baristaScore').textContent = `${this.barista.score} / ${this.barista.needed}`;
          $('baristaFeedback').textContent = 'Perfect. +3 seconds.';
          this.game.audio.success();
          setTimeout(() => this.nextBaristaOrder(), 340);
        } else {
          btn.classList.add('wrong');
          this.barista.time = Math.max(0, this.barista.time - 5);
          $('baristaFeedback').textContent = 'That is not it. −5 seconds.';
          this.game.audio.error();
          setTimeout(() => { if (this.barista) this.barista.locked = false; }, 280);
        }
      });
    });
  }

  finishBarista(won) {
    const b = this.barista;
    if (!b) return;
    clearInterval(b.interval);
    this.barista = null;
    this.baristaOpen = false;
    this.baristaModal.classList.add('hidden');
    this.syncBlocking();
    const score = won ? b.score : b.score;
    if (b.onComplete) b.onComplete(score, won);
  }
}
