import * as THREE from 'three';
import { buildCity } from './city.js';
import { buildInteriors } from './interiors.js';
import {
  createHuman, animateHuman, applyStyle, createPet, animatePet, createCar, animateCar,
} from './entities.js';
import { BUSINESSES, JOBS, SHOP_ITEMS, TIME, DIALOGUE, NAMES } from './data.js';
import { clamp, lerp, makeGlow, makeTextTexture, formatMoney, formatTime, pick } from './utils.js';
import { AudioEngine } from './audio.js';

const SAVE_KEY = 'harbor-city-save-v1';
const START_POSITION = new THREE.Vector3(0, 0.2, 20.5);
const START_ROTATION = -Math.PI / 2;
const START_CAMERA_YAW = Math.PI / 2;

function defaultState() {
  return {
    version: 1,
    cash: 250,
    day: 0,
    minutes: TIME.startMinutes,
    stats: { health: 100, energy: 100, hunger: 84, hygiene: 79, mood: 86 },
    inventory: {},
    wardrobe: [{
      id: 'starter', name: 'Harbor Casual', icon: '👕',
      style: { shirt: '#e86b4f', pants: '#293241', hair: '#2a211d', accessory: 'none' },
    }],
    style: { shirt: '#e86b4f', pants: '#293241', hair: '#2a211d', accessory: 'none' },
    outfitName: 'Harbor Casual',
    ownedCars: [],
    house: false,
    pet: null,
    petHappiness: 80,
    gymMember: false,
    jobsDone: 0,
    sound: true,
    job: null,
  };
}

export class Game {
  constructor(container) {
    this.container = container;
    this.state = this.loadState();
    this.audio = new AudioEngine();
    this.audio.enabled = this.state.sound !== false;
    this.started = false;
    this.blocking = false;
    this.insideId = null;
    this.currentInterior = null;
    this.driving = null;
    this.currentInteractable = null;
    this.returnPosition = new THREE.Vector3();
    this.returnRotation = 0;
    this.returnYaw = 0;
    this.cameraYaw = START_CAMERA_YAW;
    this.cameraPitch = 0.17;
    this.cameraDistance = 6.4;
    this.cameraTarget = new THREE.Vector3();
    this.attractAngle = 0.4;
    this.lastHud = 0;
    this.lastSave = 0;
    this.jobMarker = null;
    this.collisionCooldown = 0;
    this.dead = false;
    this.keys = new Set();
    this.touchMove = { x: 0, y: 0 };
    this.touchSprint = false;
    this.lookPointer = null;
    this.joystickPointer = null;
    this.petFollower = null;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(58, window.innerWidth / window.innerHeight, 0.08, 1700);
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance',
      alpha: false,
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.08;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.domElement.setAttribute('aria-label', 'Harbor City 3D world');
    container.appendChild(this.renderer.domElement);

    this.clock = new THREE.Clock();
    this.city = buildCity(this.scene, {
      onShop: (id) => this.enterBusiness(id),
      onTalk: (data) => this.talkTo(data),
      onCar: (car, vehicle) => this.enterCar(car, vehicle),
      onHome: () => this.goHome(),
      onJobBoard: () => this.ui?.openJobBoard(),
    });
    this.interiors = buildInteriors(this.scene, {
      onShop: (id) => this.openShopCounter(id),
      onExit: () => this.exitInterior(),
      onSleep: () => this.sleepAtHome(),
      onJobBoard: () => this.ui?.openJobBoard(),
      onTalk: (data) => this.talkTo(data),
    });

    this.player = createHuman({
      shirt: new THREE.Color(this.state.style.shirt).getHex(),
      pants: new THREE.Color(this.state.style.pants).getHex(),
      skin: 0xe4b58b,
      hair: new THREE.Color(this.state.style.hair).getHex(),
      role: 'player',
      height: 1,
    });
    this.player.position.copy(START_POSITION);
    this.player.rotation.y = START_ROTATION;
    this.scene.add(this.player);
    applyStyle(this.player, this.state.style);

    this.createMissionMarker();
    this.restorePet();
    this.bindEvents();
    this.snapCamera();
    this.animate();
  }

  setUI(ui) {
    this.ui = ui;
    this.ui.refreshSaveHint?.(this.hasSave());
    this.ui.updateSound?.(this.state.sound !== false);
  }

  hasSave() {
    try { return Boolean(localStorage.getItem(SAVE_KEY)); } catch { return false; }
  }

  loadState() {
    const base = defaultState();
    try {
      const raw = localStorage.getItem(SAVE_KEY);
      if (!raw) return base;
      const saved = JSON.parse(raw);
      if (!saved || typeof saved !== 'object') return base;
      const state = {
        ...base,
        ...saved,
        stats: { ...base.stats, ...(saved.stats || {}) },
        style: { ...base.style, ...(saved.style || {}) },
        inventory: { ...(saved.inventory || {}) },
        wardrobe: Array.isArray(saved.wardrobe) && saved.wardrobe.length ? saved.wardrobe : base.wardrobe,
        ownedCars: Array.isArray(saved.ownedCars) ? saved.ownedCars : [],
        job: null,
      };
      state.cash = Number.isFinite(state.cash) ? state.cash : base.cash;
      state.minutes = Number.isFinite(state.minutes) ? state.minutes : base.minutes;
      state.day = Number.isFinite(state.day) ? state.day : base.day;
      return state;
    } catch {
      return base;
    }
  }

  save() {
    try {
      const save = { ...this.state, job: null };
      localStorage.setItem(SAVE_KEY, JSON.stringify(save));
      this.lastSave = performance.now();
      this.ui?.refreshSaveHint?.(true);
    } catch {}
  }

  resetSave() {
    try { localStorage.removeItem(SAVE_KEY); } catch {}
    window.location.reload();
  }

  start() {
    if (this.started) return;
    this.started = true;
    this.audio.init();
    this.audio.setEnabled(this.state.sound !== false);
    this.ui?.hideStart();
    this.ui?.showHUD();
    this.ui?.updateSound?.(this.state.sound !== false);
    this.ui?.toast('Welcome to Harbor City. The city is yours.', '🌆', 'good');
    this.cameraYaw = START_CAMERA_YAW;
    this.cameraPitch = 0.17;
    this.cameraDistance = 6.4;
    this.snapCamera();
    this.ui?.tick?.(true);
  }

  bindEvents() {
    window.addEventListener('resize', () => this.resize());
    window.addEventListener('beforeunload', () => this.save());
    setInterval(() => { if (this.started) this.save(); }, 9000);

    window.addEventListener('keydown', (event) => {
      if (event.code === 'Tab') {
        event.preventDefault();
        if (!this.started) return;
        this.togglePhone();
        return;
      }
      if (event.code === 'Escape') {
        if (!this.started) return;
        if (this.ui?.closeTop?.()) return;
        this.ui?.togglePause?.();
        return;
      }
      if (!this.started) return;
      if (this.blocking) return;
      if (event.code === 'KeyE') {
        event.preventDefault();
        this.interact();
        return;
      }
      if (event.code === 'KeyM') {
        event.preventDefault();
        this.togglePhone('map');
        return;
      }
      if (['KeyW', 'KeyA', 'KeyS', 'KeyD', 'ShiftLeft', 'ShiftRight', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.code)) {
        event.preventDefault();
        this.keys.add(event.code);
      }
    });
    window.addEventListener('keyup', (event) => this.keys.delete(event.code));
    window.addEventListener('blur', () => { this.keys.clear(); this.touchMove = { x: 0, y: 0 }; });

    const canvas = this.renderer.domElement;
    canvas.addEventListener('mousedown', (event) => {
      if (!this.started || this.blocking || event.button !== 0) return;
      if (window.matchMedia('(pointer: fine)').matches) {
        if (document.pointerLockElement !== canvas) canvas.requestPointerLock?.();
        this.dragging = true;
      }
    });
    window.addEventListener('mouseup', () => { this.dragging = false; });
    window.addEventListener('mousemove', (event) => {
      if (!this.started || this.blocking) return;
      const locked = document.pointerLockElement === canvas;
      if (!locked && !this.dragging) return;
      this.cameraYaw -= event.movementX * 0.0026;
      this.cameraPitch = clamp(this.cameraPitch + event.movementY * 0.0019, -0.06, 0.8);
    });
    document.addEventListener('pointerlockchange', () => {
      if (document.pointerLockElement !== canvas) this.dragging = false;
    });

    // Mobile look-drag on the canvas.
    canvas.addEventListener('pointerdown', (event) => {
      if (!this.started || this.blocking || event.pointerType === 'mouse') return;
      if (this.lookPointer !== null) return;
      this.lookPointer = { id: event.pointerId, x: event.clientX, y: event.clientY };
      canvas.setPointerCapture?.(event.pointerId);
    });
    canvas.addEventListener('pointermove', (event) => {
      if (!this.lookPointer || event.pointerId !== this.lookPointer.id) return;
      const dx = event.clientX - this.lookPointer.x;
      const dy = event.clientY - this.lookPointer.y;
      this.lookPointer.x = event.clientX;
      this.lookPointer.y = event.clientY;
      this.cameraYaw -= dx * 0.005;
      this.cameraPitch = clamp(this.cameraPitch + dy * 0.004, -0.06, 0.8);
    });
    const endLook = (event) => {
      if (this.lookPointer && event.pointerId === this.lookPointer.id) this.lookPointer = null;
    };
    canvas.addEventListener('pointerup', endLook);
    canvas.addEventListener('pointercancel', endLook);

    // Virtual joystick.
    const joystick = document.getElementById('joystick');
    const knob = joystick?.querySelector('.joystick-knob');
    if (joystick && knob) {
      const updateJoystick = (event) => {
        const rect = joystick.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        let dx = event.clientX - cx;
        let dy = event.clientY - cy;
        const max = rect.width * 0.32;
        const len = Math.hypot(dx, dy);
        if (len > max) { dx = dx / len * max; dy = dy / len * max; }
        knob.style.transform = `translate(${dx}px, ${dy}px)`;
        this.touchMove.x = dx / max;
        this.touchMove.y = dy / max;
      };
      joystick.addEventListener('pointerdown', (event) => {
        this.joystickPointer = event.pointerId;
        joystick.setPointerCapture(event.pointerId);
        updateJoystick(event);
      });
      joystick.addEventListener('pointermove', (event) => {
        if (event.pointerId === this.joystickPointer) updateJoystick(event);
      });
      const end = (event) => {
        if (event.pointerId !== this.joystickPointer) return;
        this.joystickPointer = null;
        this.touchMove = { x: 0, y: 0 };
        knob.style.transform = 'translate(0px, 0px)';
      };
      joystick.addEventListener('pointerup', end);
      joystick.addEventListener('pointercancel', end);
    }
    document.getElementById('mobileAction')?.addEventListener('pointerdown', (event) => {
      event.preventDefault();
      this.interact();
    });
    const sprint = document.getElementById('mobileSprint');
    sprint?.addEventListener('pointerdown', (event) => {
      event.preventDefault();
      this.touchSprint = true;
    });
    sprint?.addEventListener('pointerup', () => { this.touchSprint = false; });
    sprint?.addEventListener('pointercancel', () => { this.touchSprint = false; });
  }

  resize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  togglePhone(tab) {
    if (!this.started) return;
    this.audio.click();
    if (this.ui?.phoneOpen) this.ui.closePhone();
    else this.ui?.openPhone(tab);
  }

  setBlocking(value) {
    this.blocking = value;
    if (value) {
      this.keys.clear();
      this.touchMove = { x: 0, y: 0 };
      this.currentInteractable = null;
      this.ui?.setPrompt?.(null);
    }
  }

  animate = () => {
    requestAnimationFrame(this.animate);
    const dt = Math.min(this.clock.getDelta(), 0.055);
    if (!this.started) {
      this.attractAngle += dt * 0.055;
      this.city.update(dt * 0.35, this.state.minutes, this.player.position);
      this.interiors.update(dt * 0.2, null);
      this.updateAttractCamera(dt);
      this.renderer.render(this.scene, this.camera);
      return;
    }

    if (!this.blocking) {
      this.updateTime(dt);
      this.updateStats(dt);
      this.updatePlayer(dt);
      this.updateDriving(dt);
      this.updatePet(dt);
      this.updateJob(dt);
      this.city.update(dt, this.state.minutes, this.player.position);
      this.interiors.update(dt, this.insideId);
      this.updateCamera(dt);
      this.updateInteractions();
      this.syncCarEntries();
      if (performance.now() - this.lastHud > 180) {
        this.lastHud = performance.now();
        this.ui?.tick?.();
      }
    }
    this.renderer.render(this.scene, this.camera);
  };

  updateAttractCamera(dt) {
    const radius = 54;
    const x = Math.cos(this.attractAngle) * radius + 10;
    const z = Math.sin(this.attractAngle) * radius + 20;
    const y = 24 + Math.sin(this.attractAngle * 0.6) * 4;
    this.camera.position.lerp(new THREE.Vector3(x, y, z), 1 - Math.exp(-2 * dt));
    this.camera.lookAt(0, 7, 0);
  }

  updateTime(dt) {
    this.state.minutes += dt;
    if (this.state.minutes >= 1440) {
      this.state.minutes -= 1440;
      this.state.day = (this.state.day + 1) % 7;
    }
  }

  updateStats(dt) {
    const s = this.state.stats;
    const m = dt;
    s.hunger = clamp(s.hunger - 0.045 * m, 0, 100);
    s.energy = clamp(s.energy - 0.028 * m, 0, 100);
    s.hygiene = clamp(s.hygiene - 0.018 * m, 0, 100);
    s.mood = clamp(s.mood - 0.012 * m, 0, 100);
    if (s.hunger < 15) s.mood = clamp(s.mood - 0.03 * m, 0, 100);
    if (s.energy < 12) s.mood = clamp(s.mood - 0.02 * m, 0, 100);
    if (s.hunger <= 0) s.health = clamp(s.health - 0.055 * m, 0, 100);
    if (s.energy <= 0) s.health = clamp(s.health - 0.02 * m, 0, 100);
    if (s.hunger > 55 && s.energy > 45 && s.health < 100) s.health = clamp(s.health + 0.007 * m, 0, 100);
    if (s.health <= 0 && !this.dead) this.collapse();
  }

  updatePlayer(dt) {
    if (this.driving || this.blocking) return;
    let inputX = 0;
    let inputY = 0;
    if (this.keys.has('KeyA') || this.keys.has('ArrowLeft')) inputX -= 1;
    if (this.keys.has('KeyD') || this.keys.has('ArrowRight')) inputX += 1;
    if (this.keys.has('KeyW') || this.keys.has('ArrowUp')) inputY += 1;
    if (this.keys.has('KeyS') || this.keys.has('ArrowDown')) inputY -= 1;
    inputX += this.touchMove.x;
    inputY -= this.touchMove.y;
    const len = Math.hypot(inputX, inputY);
    if (len < 0.08) {
      animateHuman(this.player, dt, 0);
      return;
    }
    inputX /= Math.max(1, len);
    inputY /= Math.max(1, len);

    const forward = new THREE.Vector3(-Math.sin(this.cameraYaw), 0, -Math.cos(this.cameraYaw));
    const right = new THREE.Vector3(Math.cos(this.cameraYaw), 0, -Math.sin(this.cameraYaw));
    const dir = forward.multiplyScalar(inputY).add(right.multiplyScalar(inputX)).normalize();
    const sprinting = (this.keys.has('ShiftLeft') || this.keys.has('ShiftRight') || this.touchSprint) && this.state.stats.energy > 5;
    let speed = sprinting ? 7.1 : 4.25;
    if (this.state.stats.energy < 12) speed *= 0.7;
    if (this.insideId) speed *= 0.82;
    const step = speed * dt;
    const nextX = this.player.position.x + dir.x * step;
    const nextZ = this.player.position.z + dir.z * step;
    const moved = this.tryMove(nextX, nextZ);
    if (moved) {
      this.player.rotation.y = Math.atan2(dir.x, dir.z);
    }
    if (sprinting && moved) this.state.stats.energy = clamp(this.state.stats.energy - dt * 0.15, 0, 100);
    animateHuman(this.player, dt, moved ? speed : 0);
    this.player.position.y = this.insideId
      ? this.currentInterior.bounds.baseY + 0.1
      : 0.2;
  }

  tryMove(x, z) {
    if (this.insideId) {
      const b = this.currentInterior.bounds;
      this.player.position.x = clamp(x, b.minX, b.maxX);
      this.player.position.z = clamp(z, b.minZ, b.maxZ);
      return true;
    }
    const r = 0.45;
    const nx = clamp(x, -166, 166);
    const nz = clamp(z, -166, 166);
    let blocked = false;
    for (const c of this.city.colliders) {
      if (nx + r > c.minX && nx - r < c.maxX && nz + r > c.minZ && nz - r < c.maxZ) {
        blocked = true;
        break;
      }
    }
    if (blocked) return false;
    this.player.position.x = nx;
    this.player.position.z = nz;
    return true;
  }

  updateDriving(dt) {
    if (!this.driving) return;
    const car = this.driving;
    let throttle = 0;
    let steer = 0;
    if (this.keys.has('KeyW') || this.keys.has('ArrowUp')) throttle += 1;
    if (this.keys.has('KeyS') || this.keys.has('ArrowDown')) throttle -= 1;
    if (this.keys.has('KeyA') || this.keys.has('ArrowLeft')) steer += 1;
    if (this.keys.has('KeyD') || this.keys.has('ArrowRight')) steer -= 1;
    throttle += -this.touchMove.y;
    steer += -this.touchMove.x;
    throttle = clamp(throttle, -1, 1);
    steer = clamp(steer, -1, 1);
    const maxSpeed = car.vehicle?.speed || 24;
    if (Math.abs(throttle) > 0.05) {
      car.speed += throttle * 11 * dt;
    } else {
      car.speed *= Math.exp(-1.05 * dt);
    }
    car.speed = clamp(car.speed, -maxSpeed * 0.32, maxSpeed);
    if (Math.abs(car.speed) < 0.08) car.speed = 0;
    const steerStrength = 0.75 + Math.abs(car.speed) * 0.022;
    car.heading += steer * steerStrength * dt * Math.sign(car.speed || 1) * clamp(Math.abs(car.speed) / 5, 0, 1);
    const forward = new THREE.Vector3(Math.sin(car.heading), 0, Math.cos(car.heading));
    const next = car.group.position.clone().add(forward.multiplyScalar(car.speed * dt));
    const canDrive = this.canDriveTo(next.x, next.z);
    if (canDrive) {
      car.group.position.x = clamp(next.x, -165, 165);
      car.group.position.z = clamp(next.z, -165, 165);
    } else {
      car.speed *= -0.18;
      if (this.collisionCooldown <= 0) {
        this.audio.tone(70, 0.18, 'sawtooth', 0.12);
        this.collisionCooldown = 1.1;
      }
    }
    this.collisionCooldown = Math.max(0, this.collisionCooldown - dt);
    car.group.rotation.y = car.heading;
    car.group.position.y = 0.2;
    animateCar(car.group, car.speed, dt);
    this.audio.setEngine(car.speed);
    this.player.position.copy(car.group.position);
    this.player.rotation.y = car.heading;

    if (!this.lookPointer && !this.dragging && Math.abs(car.speed) > 1.5) {
      this.cameraYaw = this.lerpAngle(this.cameraYaw, car.heading + Math.PI, 1 - Math.exp(-2.5 * dt));
    }
  }

  canDriveTo(x, z) {
    if (Math.abs(x) > 165 || Math.abs(z) > 165) return false;
    const r = 1.3;
    for (const c of this.city.colliders) {
      if (x + r > c.minX && x - r < c.maxX && z + r > c.minZ && z - r < c.maxZ) return false;
    }
    return true;
  }

  updatePet(dt) {
    if (!this.petFollower) return;
    const visible = !this.insideId && !this.driving;
    this.petFollower.visible = visible;
    if (!visible) return;
    const target = new THREE.Vector3(
      this.player.position.x - Math.sin(this.player.rotation.y) * 1.3 + Math.cos(this.player.rotation.y) * 0.9,
      0.2,
      this.player.position.z - Math.cos(this.player.rotation.y) * 1.3 - Math.sin(this.player.rotation.y) * 0.9
    );
    const dist = this.petFollower.position.distanceTo(target);
    this.petFollower.position.lerp(target, 1 - Math.exp(-4.5 * dt));
    if (dist > 0.3) {
      this.petFollower.rotation.y = Math.atan2(target.x - this.petFollower.position.x, target.z - this.petFollower.position.z);
    }
    animatePet(this.petFollower, dt, dist > 1 ? 2 : 0);
  }

  updateCamera(dt) {
    const target = new THREE.Vector3();
    let distance = this.cameraDistance;
    if (this.driving) {
      target.copy(this.driving.group.position);
      target.y = 1.25;
      distance = 8.2;
    } else {
      target.copy(this.player.position);
      target.y += 1.35;
      if (this.insideId) distance = 4.2;
    }
    const pitch = clamp(this.cameraPitch, -0.06, 0.8);
    const horizontal = Math.cos(pitch) * distance;
    const desired = new THREE.Vector3(
      target.x + Math.sin(this.cameraYaw) * horizontal,
      target.y + Math.sin(pitch) * distance + 0.55,
      target.z + Math.cos(this.cameraYaw) * horizontal
    );

    if (this.insideId) {
      const b = this.currentInterior.bounds;
      desired.x = clamp(desired.x, b.minX + 0.4, b.maxX - 0.4);
      desired.z = clamp(desired.z, b.minZ + 0.4, b.maxZ - 0.4);
      desired.y = clamp(desired.y, b.baseY + 0.8, b.baseY + 4.1);
    } else {
      desired.y = Math.max(0.55, desired.y);
      const blocked = this.cameraObstruction(target, desired);
      if (blocked < 1) {
        desired.lerpVectors(target, desired, Math.max(0.16, blocked * 0.88));
        desired.y = Math.max(0.6, desired.y);
      }
    }
    const smooth = this.driving ? 5.5 : 8;
    this.camera.position.lerp(desired, 1 - Math.exp(-smooth * dt));
    this.camera.lookAt(target);
  }

  cameraObstruction(from, to) {
    const steps = 12;
    for (let i = 2; i <= steps; i++) {
      const t = i / steps;
      const x = lerp(from.x, to.x, t);
      const z = lerp(from.z, to.z, t);
      for (const c of this.city.colliders) {
        if (x > c.minX - 0.25 && x < c.maxX + 0.25 && z > c.minZ - 0.25 && z < c.maxZ + 0.25) {
          return Math.max(0.12, t - 0.08);
        }
      }
    }
    return 1;
  }

  snapCamera() {
    const target = new THREE.Vector3();
    let distance = this.insideId ? 4.2 : 6.4;
    if (this.driving) {
      target.copy(this.driving.group.position);
      target.y = 1.25;
      distance = 8.2;
    } else {
      target.copy(this.player.position);
      target.y += 1.35;
    }
    const pitch = clamp(this.cameraPitch, -0.06, 0.8);
    const horizontal = Math.cos(pitch) * distance;
    this.camera.position.set(
      target.x + Math.sin(this.cameraYaw) * horizontal,
      target.y + Math.sin(pitch) * distance + 0.55,
      target.z + Math.cos(this.cameraYaw) * horizontal
    );
    if (this.insideId) {
      const b = this.currentInterior.bounds;
      this.camera.position.x = clamp(this.camera.position.x, b.minX + 0.4, b.maxX - 0.4);
      this.camera.position.z = clamp(this.camera.position.z, b.minZ + 0.4, b.maxZ - 0.4);
      this.camera.position.y = clamp(this.camera.position.y, b.baseY + 0.8, b.baseY + 4.1);
    }
    this.camera.lookAt(target);
  }

  lerpAngle(a, b, t) {
    let diff = ((b - a + Math.PI) % (Math.PI * 2)) - Math.PI;
    if (diff < -Math.PI) diff += Math.PI * 2;
    return a + diff * t;
  }

  updateInteractions() {
    if (this.blocking) {
      if (this.currentInteractable) {
        this.currentInteractable = null;
        this.ui?.setPrompt?.(null);
      }
      return;
    }
    let best = null;
    let bestDist = Infinity;
    if (this.driving) {
      const mission = this.getMissionPrompt();
      if (mission) {
        const d = Math.hypot(mission.position.x - this.player.position.x, mission.position.z - this.player.position.z);
        if (d < 4.2) {
          best = mission;
          bestDist = d;
        }
      }
      if (!best) {
        best = {
          type: 'exitcar',
          label: `Exit ${this.driving.vehicle?.name || 'vehicle'}`,
          sub: 'Leave the driver seat',
          icon: '🚪',
          handler: () => this.exitCar(),
        };
        bestDist = 0;
      }
    } else {
      const source = this.insideId
        ? this.currentInterior.interactables
        : this.city.interactables;
      const px = this.player.position.x;
      const pz = this.player.position.z;
      for (const item of source) {
        const d = Math.hypot(item.position.x - px, item.position.z - pz);
        if (d < item.radius && d < bestDist) {
          best = item;
          bestDist = d;
        }
      }
      const mission = this.getMissionPrompt();
      if (mission) {
        const d = Math.hypot(mission.position.x - px, mission.position.z - pz);
        if (d < 3.1 && d < bestDist) {
          best = mission;
          bestDist = d;
        }
      }
    }
    if (best !== this.currentInteractable) {
      this.currentInteractable = best;
      this.ui?.setPrompt?.(best);
    }
  }

  getMissionPrompt() {
    const job = this.state.job;
    if (!job || job.id === 'barista') return null;
    const definition = JOBS[job.id];
    const step = definition?.steps?.[job.stage];
    if (!step) return null;
    return {
      type: 'mission',
      position: new THREE.Vector3(step.x, 0.2, step.z),
      label: job.stage === definition.steps.length - 1
        ? (job.id === 'taxi' ? 'Drop off your fare' : 'Deliver the package')
        : (job.id === 'taxi' ? 'Pick up your fare' : 'Collect the package'),
      sub: step.place,
      icon: job.id === 'taxi' ? '🚕' : '📦',
      handler: () => this.advanceJob(),
    };
  }

  interact() {
    if (!this.started || this.blocking) return;
    if (!this.currentInteractable) {
      this.ui?.toast?.('Nothing close enough to interact with.', '•');
      return;
    }
    const action = this.currentInteractable;
    this.currentInteractable = null;
    this.ui?.setPrompt?.(null);
    action.handler?.();
    this.updateInteractions();
  }

  talkTo(data) {
    const role = data?.role || 'pedestrian';
    const lines = DIALOGUE[role] || DIALOGUE.pedestrian;
    let text = pick(lines);
    if (role === 'worker' && data?.businessId) {
      const business = BUSINESSES.find((b) => b.id === data.businessId);
      if (business) text = pick([
        `Welcome to ${business.name}. Take a look around.`,
        `${business.name} is open. Let me know if you need anything.`,
        `Busy day. ${business.tagline}`,
      ]);
    }
    const name = data?.name || (role === 'police' ? 'Officer Reed' : role === 'doctor' ? 'Dr. Chen' : pick(NAMES));
    this.ui?.showDialogue?.(name, text, role === 'police' ? '👮' : role === 'doctor' ? '🩺' : role === 'worker' ? '🧑‍🍳' : '💬');
    this.audio.click();
  }

  enterBusiness(id) {
    const business = BUSINESSES.find((b) => b.id === id);
    if (!business) return;
    if (id === 'house' && !this.state.house) {
      this.ui?.toast?.('Maple House is for sale at Key & Stone. The listing is $8,500.', '🏡', 'bad');
      return;
    }
    if (!business.interior || !this.interiors.interiors.has(id)) {
      this.ui?.toast?.(`${business.name} is closed right now.`, '🔒', 'bad');
      return;
    }
    if (this.driving) this.exitCar();
    const interior = this.interiors.interiors.get(id);
    this.returnPosition.copy(this.player.position);
    this.returnRotation = this.player.rotation.y;
    this.returnYaw = this.cameraYaw;
    this.insideId = id;
    this.currentInterior = interior;
    this.player.position.copy(interior.entry);
    this.player.position.y = interior.bounds.baseY + 0.1;
    this.player.rotation.y = Math.PI;
    this.cameraYaw = 0;
    this.cameraPitch = 0.16;
    this.cameraDistance = 4.2;
    this.audio.door();
    this.ui?.setInside?.(business);
    this.ui?.toast?.(`Welcome to ${business.name}.`, business.type === 'cafe' ? '☕' : business.type === 'hospital' ? '🏥' : '🚪', 'good');
    this.snapCamera();
    this.ui?.tick?.(true);
  }

  exitInterior() {
    if (!this.insideId) return;
    const business = this.currentInterior?.business;
    this.insideId = null;
    this.currentInterior = null;
    this.player.position.copy(this.returnPosition);
    this.player.position.y = 0.2;
    this.player.rotation.y = this.returnRotation;
    this.cameraYaw = this.returnYaw;
    this.cameraPitch = 0.17;
    this.cameraDistance = 6.4;
    this.audio.door();
    this.ui?.setOutside?.(business);
    this.ui?.toast?.(`Back out on ${business?.name || 'the street'}.`, '🌆');
    this.snapCamera();
    this.ui?.tick?.(true);
  }

  openShopCounter(id) {
    if (this.state.job?.id === 'barista' && this.state.job.stage === 0 && id === 'cafe') {
      this.startBaristaShift();
      return;
    }
    const business = BUSINESSES.find((b) => b.id === id);
    if (!business) return;
    if (id === 'jobcenter') {
      this.ui?.openJobBoard?.();
      return;
    }
    if (SHOP_ITEMS[business.type]?.length) {
      this.audio.click();
      this.ui?.openShop?.(business);
    } else {
      this.talkTo({ role: 'worker', name: pick(NAMES), businessId: id });
    }
  }

  purchase(item, business) {
    if (!item) return false;
    if (this.state.cash < item.price) {
      this.ui?.toast?.('Not enough cash for that yet.', '💸', 'bad');
      this.audio.error();
      return false;
    }
    if (item.vehicle && this.state.ownedCars.some((v) => v.id === item.vehicle.id)) {
      this.ui?.toast?.('You already own that one. Check the dealership lot.', '🚗');
      return false;
    }
    if (item.house && this.state.house) {
      this.ui?.toast?.('Maple House is already yours.', '🏡', 'good');
      return false;
    }
    if (item.pet && this.state.pet) {
      this.ui?.toast?.(`You already have ${this.state.pet.name} waiting at home.`, '🐾');
      return false;
    }

    this.state.cash -= item.price;
    let message = `${item.name} purchased.`;

    if (item.vehicle) {
      this.state.ownedCars.push(item.vehicle);
      this.city.spawnOwnedCar(item.vehicle);
      message = `${item.name} is waiting in the Volt Motors lot.`;
    } else if (item.house) {
      this.state.house = true;
      message = 'Maple House is yours. Fast travel home from your phone.';
    } else if (item.pet) {
      this.adoptPet(item.pet);
      message = `${item.pet.name} adopted. They will follow you outside.`;
    } else if (item.style) {
      if (!this.state.wardrobe.some((w) => w.id === item.id)) {
        this.state.wardrobe.push({ id: item.id, name: item.name, icon: item.icon, style: item.style });
      }
      this.state.style = { ...this.state.style, ...item.style };
      this.state.outfitName = item.name;
      applyStyle(this.player, this.state.style);
      message = `${item.name} added to your wardrobe and equipped.`;
    } else if (item.item) {
      this.addInventory(item, 1);
    }

    if (item.effect) this.applyEffects(item.effect);
    if (item.hours) this.advanceHours(item.hours);
    if (item.sleep) {
      this.sleep(8, true);
      this.ui?.closeShop?.();
    }
    if (item.unlock === 'gym') this.state.gymMember = true;
    if (item.id === 'petfood' || item.id === 'toy') {
      this.state.petHappiness = clamp(this.state.petHappiness + (item.effect?.pet || 10), 0, 100);
    }
    if (['burger', 'salad', 'energy', 'water', 'spoonburger', 'pasta', 'coffee', 'cake', 'cocktail', 'beer', 'mocktail', 'wings', 'shake', 'latte', 'coldbrew', 'croissant', 'sandwich', 'petfood'].includes(item.id)) {
      this.addInventory(item, 1);
    }

    this.audio.cash();
    this.ui?.toast?.(message, item.icon || '✓', 'money');
    this.ui?.refreshShop?.(business);
    this.ui?.tick?.(true);
    this.save();
    return true;
  }

  addInventory(item, count = 1) {
    const existing = this.state.inventory[item.id];
    if (existing) existing.count += count;
    else this.state.inventory[item.id] = { id: item.id, name: item.name, icon: item.icon, count, desc: item.desc };
  }

  applyEffects(effect) {
    const s = this.state.stats;
    if (effect.health) s.health = clamp(s.health + effect.health, 0, 100);
    if (effect.energy) s.energy = clamp(s.energy + effect.energy, 0, 100);
    if (effect.hunger) s.hunger = clamp(s.hunger + effect.hunger, 0, 100);
    if (effect.hygiene) s.hygiene = clamp(s.hygiene + effect.hygiene, 0, 100);
    if (effect.mood) s.mood = clamp(s.mood + effect.mood, 0, 100);
    if (effect.pet) this.state.petHappiness = clamp(this.state.petHappiness + effect.pet, 0, 100);
  }

  equipWardrobe(id) {
    const item = this.state.wardrobe.find((w) => w.id === id);
    if (!item) return;
    this.state.style = { ...this.state.style, ...item.style };
    this.state.outfitName = item.name;
    applyStyle(this.player, this.state.style);
    this.audio.click();
    this.ui?.toast?.(`Now wearing ${item.name}.`, item.icon || '👕', 'good');
    this.ui?.tick?.(true);
    this.save();
  }

  adoptPet(pet) {
    if (this.petFollower) {
      this.scene.remove(this.petFollower);
      this.petFollower = null;
    }
    this.state.pet = pet;
    this.state.petHappiness = 85;
    const model = createPet(pet.type, pet.color);
    model.position.copy(this.player.position);
    model.visible = !this.insideId;
    this.scene.add(model);
    this.petFollower = model;
  }

  restorePet() {
    if (!this.state.pet) return;
    const model = createPet(this.state.pet.type, this.state.pet.color);
    model.position.copy(this.player.position).add(new THREE.Vector3(1, 0, 1));
    model.visible = !this.insideId;
    this.scene.add(model);
    this.petFollower = model;
  }

  enterCar(carGroup, vehicle) {
    if (this.driving || this.insideId) return;
    const fallback = {
      id: 'citycar', name: 'City Car', speed: 24, type: 'car',
    };
    this.driving = {
      group: carGroup,
      vehicle: vehicle || fallback,
      speed: 0,
      heading: carGroup.rotation.y,
    };
    this.player.visible = false;
    if (this.petFollower) this.petFollower.visible = false;
    this.cameraDistance = 8.2;
    this.cameraYaw = carGroup.rotation.y + Math.PI;
    this.audio.enterCar();
    this.ui?.toast?.(`You are driving the ${this.driving.vehicle.name}.`, '🚗', 'good');
    this.ui?.setPrompt?.(null);
  }

  exitCar() {
    if (!this.driving) return;
    const car = this.driving;
    const forward = new THREE.Vector3(Math.sin(car.heading), 0, Math.cos(car.heading));
    const right = new THREE.Vector3(Math.cos(car.heading), 0, -Math.sin(car.heading));
    const spots = [
      car.group.position.clone().add(right.clone().multiplyScalar(2.4)),
      car.group.position.clone().add(right.clone().multiplyScalar(-2.4)),
      car.group.position.clone().add(forward.clone().multiplyScalar(-3.4)),
    ];
    let spot = spots[0];
    for (const candidate of spots) {
      if (this.canDriveTo(candidate.x, candidate.z)) { spot = candidate; break; }
    }
    this.player.position.set(spot.x, 0.2, spot.z);
    this.player.rotation.y = car.heading;
    this.player.visible = true;
    this.driving = null;
    this.cameraYaw = car.heading + Math.PI;
    this.cameraDistance = 6.4;
    this.audio.setEngine(0);
    this.audio.door();
    this.ui?.toast?.('Back on your feet.', '🚶');
    this.syncCarEntries();
  }

  syncCarEntries() {
    for (const item of this.city.interactables) {
      if (item.type === 'car' && item.data?.carGroup) {
        item.position.copy(item.data.carGroup.position);
        item.position.y = 0.2;
      }
    }
  }

  createMissionMarker() {
    const group = new THREE.Group();
    const ringMat = new THREE.MeshBasicMaterial({ color: 0xffb45c, transparent: true, opacity: 0.75, side: THREE.DoubleSide });
    const ring = new THREE.Mesh(new THREE.RingGeometry(1.15, 1.36, 36), ringMat);
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = 0.06;
    group.add(ring);
    const ring2 = new THREE.Mesh(new THREE.RingGeometry(1.65, 1.72, 36), new THREE.MeshBasicMaterial({ color: 0xffd7a2, transparent: true, opacity: 0.35, side: THREE.DoubleSide }));
    ring2.rotation.x = -Math.PI / 2;
    ring2.position.y = 0.05;
    group.add(ring2);
    const beamMat = new THREE.MeshBasicMaterial({ color: 0xffb45c, transparent: true, opacity: 0.16, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending });
    const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 1.2, 11, 18, 1, true), beamMat);
    beam.position.y = 5.5;
    group.add(beam);
    const iconMat = new THREE.MeshBasicMaterial({
      map: makeTextTexture('!', { color: '#1b140b', bg: '#ffb45c', accent: '#fff0cf', width: 256, height: 256, font: 160 }),
      transparent: true,
      depthWrite: false,
    });
    const icon = new THREE.Sprite(new THREE.SpriteMaterial({ map: iconMat.map, transparent: true, depthWrite: false }));
    icon.scale.set(1.4, 1.4, 1);
    icon.position.y = 2.4;
    group.add(icon);
    group.visible = false;
    this.scene.add(group);
    this.jobMarker = { group, ring, ring2, beam, icon, time: 0 };
  }

  setJobTarget(step) {
    if (!this.jobMarker || !step) return;
    this.jobMarker.group.position.set(step.x, 0.2, step.z);
    this.jobMarker.group.visible = true;
  }

  hideJobMarker() {
    if (this.jobMarker) this.jobMarker.group.visible = false;
  }

  startJob(id) {
    if (this.state.job) {
      this.ui?.toast?.('Finish your current gig first.', '⏱️', 'bad');
      return;
    }
    const job = JOBS[id];
    if (!job) return;
    if (job.needsCar && !this.driving) {
      this.ui?.toast?.('Get behind the wheel of a car first, then start Night Cab.', '🚕', 'bad');
      return;
    }
    this.state.job = { id, stage: 0, timeLeft: job.timer };
    const step = job.steps[0];
    this.setJobTarget(step);
    this.ui?.closeJobBoard?.();
    this.ui?.closePhone?.();
    this.ui?.toast?.(`${job.name} started. ${job.steps[0].label}.`, job.icon, 'good');
    this.audio.success();
    this.ui?.tick?.(true);
  }

  advanceJob() {
    const active = this.state.job;
    if (!active) return;
    const job = JOBS[active.id];
    if (!job) return;
    if (active.stage >= job.steps.length - 1) {
      const tip = Math.round(Math.max(0, active.timeLeft) * 0.45);
      const pay = job.pay + tip;
      this.state.cash += pay;
      this.state.jobsDone += 1;
      this.state.job = null;
      this.hideJobMarker();
      this.audio.cash();
      this.ui?.toast?.(`Gig complete. +${formatMoney(pay)}${tip ? ` (incl. ${formatMoney(tip)} tip)` : ''}.`, '💵', 'money');
      this.ui?.clearObjective?.();
      this.save();
      return;
    }
    active.stage += 1;
    active.timeLeft += 35;
    const step = job.steps[active.stage];
    this.setJobTarget(step);
    this.audio.success();
    this.ui?.toast?.(step.label, '📍', 'good');
    this.ui?.tick?.(true);
  }

  updateJob(dt) {
    const active = this.state.job;
    if (!active) {
      this.hideJobMarker();
      return;
    }
    active.timeLeft -= dt;
    const job = JOBS[active.id];
    if (!job) { this.state.job = null; return; }
    if (active.timeLeft <= 0) {
      this.state.job = null;
      this.hideJobMarker();
      this.audio.error();
      this.ui?.toast?.(`${job.name} failed. The timer ran out.`, '⌛', 'bad');
      this.ui?.clearObjective?.();
      return;
    }
    const step = job.steps[active.stage];
    if (step) this.setJobTarget(step);
    if (this.jobMarker) {
      this.jobMarker.time += dt;
      this.jobMarker.ring.rotation.z += dt * 0.9;
      this.jobMarker.ring2.rotation.z -= dt * 0.5;
      this.jobMarker.icon.position.y = 2.35 + Math.sin(this.jobMarker.time * 2.2) * 0.12;
      this.jobMarker.beam.material.opacity = 0.1 + Math.sin(this.jobMarker.time * 2) * 0.035;
    }
  }

  startBaristaShift() {
    if (!this.state.job || this.state.job.id !== 'barista') return;
    this.audio.click();
    this.ui?.startBarista?.((score, won) => {
      if (!this.state.job || this.state.job.id !== 'barista') return;
      if (won) {
        const pay = JOBS.barista.pay + score * 12;
        this.state.cash += pay;
        this.state.jobsDone += 1;
        this.ui?.toast?.(`Café shift complete. +${formatMoney(pay)}.`, '☕', 'money');
        this.audio.cash();
      } else {
        this.ui?.toast?.('The rush got away from you. No pay this time.', '☕', 'bad');
        this.audio.error();
      }
      this.state.job = null;
      this.hideJobMarker();
      this.ui?.clearObjective?.();
      this.save();
      this.ui?.tick?.(true);
    });
  }

  sleepAtHome() {
    if (!this.state.house) {
      this.ui?.toast?.('You do not have a home yet. Maple House is listed at Key & Stone.', '🏡', 'bad');
      return;
    }
    const house = this.city.getBuilding('house');
    const near = house && Math.hypot(this.player.position.x - house.x, this.player.position.z - house.z) < 24;
    if (!near && this.insideId !== 'house') {
      this.ui?.toast?.('Go home first — your bed is in the south district.', '🛏️', 'bad');
      return;
    }
    this.sleep(8, true);
  }

  sleep(hours = 8, advanceToMorning = true) {
    if (advanceToMorning) {
      const morning = 7 * 60;
      let delta = morning - this.state.minutes;
      if (delta <= 0) delta += 1440;
      let total = this.state.minutes + delta;
      if (total >= 1440) {
        total -= 1440;
        this.state.day = (this.state.day + 1) % 7;
      }
      this.state.minutes = total;
    } else {
      let target = this.state.minutes + hours * 60;
      while (target >= 1440) {
        target -= 1440;
        this.state.day = (this.state.day + 1) % 7;
      }
      this.state.minutes = target;
    }
    const s = this.state.stats;
    s.energy = clamp(s.energy + 70, 0, 100);
    s.health = clamp(s.health + 16, 0, 100);
    s.hunger = clamp(s.hunger - 10, 0, 100);
    s.hygiene = clamp(s.hygiene + 10, 0, 100);
    s.mood = clamp(s.mood + 12, 0, 100);
    this.ui?.fade?.();
    this.audio.success();
    this.ui?.toast?.('You slept until morning. Energy restored.', '🌅', 'good');
    this.ui?.closePhone?.();
    this.save();
    this.ui?.tick?.(true);
  }

  advanceHours(hours) {
    this.state.minutes += hours * 60;
    while (this.state.minutes >= 1440) {
      this.state.minutes -= 1440;
      this.state.day = (this.state.day + 1) % 7;
    }
  }

  goHome() {
    if (!this.state.house) {
      this.ui?.toast?.('No home yet. Visit Key & Stone to buy Maple House.', '🏡', 'bad');
      return;
    }
    if (this.driving) this.exitCar();
    if (this.insideId) {
      this.insideId = null;
      this.currentInterior = null;
      this.ui?.setOutside?.(null);
    }
    this.player.position.set(60, 0.2, 136);
    this.player.rotation.y = Math.PI;
    this.cameraYaw = 0;
    this.cameraPitch = 0.17;
    this.player.visible = true;
    this.ui?.closePhone?.();
    this.audio.door();
    this.ui?.toast?.('Fast travelled to Maple House.', '🏡', 'good');
    this.snapCamera();
    this.ui?.tick?.(true);
  }

  collapse() {
    this.dead = true;
    this.blocking = true;
    const fee = Math.min(120, this.state.cash);
    this.state.cash -= fee;
    this.state.stats.health = 60;
    this.state.stats.energy = 55;
    this.state.stats.hunger = Math.max(25, this.state.stats.hunger);
    this.state.stats.hygiene = Math.max(50, this.state.stats.hygiene);
    this.state.stats.mood = Math.max(35, this.state.stats.mood);
    this.ui?.showDeath?.(fee);
    this.save();
  }

  respawn() {
    this.dead = false;
    this.blocking = false;
    this.insideId = null;
    this.currentInterior = null;
    if (this.driving) { this.driving = null; this.audio.setEngine(0); }
    this.player.visible = true;
    this.player.position.set(-60, 0.2, -103);
    this.player.rotation.y = 0;
    this.cameraYaw = Math.PI;
    this.cameraPitch = 0.17;
    this.ui?.hideDeath?.();
    this.ui?.setOutside?.(null);
    this.ui?.toast?.('Discharged from Harbor General. Take better care of yourself.', '🏥', 'good');
    this.snapCamera();
    this.ui?.tick?.(true);
  }

  toggleSound() {
    this.state.sound = !this.state.sound;
    this.audio.setEnabled(this.state.sound);
    this.ui?.updateSound?.(this.state.sound);
    this.ui?.toast?.(this.state.sound ? 'Sound on.' : 'Sound muted.', this.state.sound ? '🔊' : '🔇');
    this.save();
  }

  getLocationName() {
    if (this.insideId) {
      return this.currentInterior?.business.name || 'Inside';
    }
    let nearest = null;
    let nearestDist = Infinity;
    for (const b of this.city.buildings) {
      const d = Math.hypot(this.player.position.x - b.x, this.player.position.z - b.z);
      if (d < nearestDist) { nearest = b; nearestDist = d; }
    }
    if (nearest && nearestDist < 33) return nearest.name;
    if (this.player.position.z < -80) return 'North Harbor';
    if (this.player.position.z > 80) return 'South Harbor';
    if (this.player.position.x < -80) return 'West End';
    if (this.player.position.x > 80) return 'East Dock';
    return 'Central District';
  }

  getDistrictName() {
    if (this.insideId) return this.currentInterior?.business.category || 'INTERIOR';
    const { x, z } = this.player.position;
    if (Math.abs(x) < 45 && Math.abs(z) < 45) return 'CENTER CITY';
    if (z < -60) return 'NORTH HARBOR';
    if (z > 60) return 'SOUTH HARBOR';
    if (x < -60) return 'WEST END';
    if (x > 60) return 'EAST DOCK';
    return 'CENTER CITY';
  }

  getWeatherName() {
    const m = this.state.minutes;
    if (m < 330) return 'Late night';
    if (m < 430) return 'First light';
    if (m < 720) return 'Clear morning';
    if (m < 960) return 'Bright afternoon';
    if (m < 1110) return 'Golden hour';
    if (m < 1260) return 'Blue hour';
    return 'Neon night';
  }

  getDayLabel() {
    return `${TIME.dayNames[this.state.day]} ${formatTime(this.state.minutes)}`;
  }

  getMissionInfo() {
    const active = this.state.job;
    if (!active) return null;
    const job = JOBS[active.id];
    if (!job) return null;
    const step = job.steps[active.stage];
    return {
      job,
      step,
      timeLeft: active.timeLeft,
      distance: step ? Math.hypot(this.player.position.x - step.x, this.player.position.z - step.z) : 0,
      stage: active.stage,
      total: job.steps.length,
    };
  }
}
