export class AudioEngine {
  constructor() {
    this.enabled = true;
    this.ctx = null;
    this.master = null;
    this.ambient = null;
    this.engine = null;
  }

  init() {
    if (this.ctx) {
      this.ctx.resume?.();
      return;
    }
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return;
    this.ctx = new Ctx();
    this.master = this.ctx.createGain();
    this.master.gain.value = this.enabled ? 0.22 : 0;
    this.master.connect(this.ctx.destination);
    this.startAmbient();
  }

  startAmbient() {
    if (!this.ctx || this.ambient) return;
    const ctx = this.ctx;
    const gain = ctx.createGain();
    gain.gain.value = 0.05;
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 480;
    filter.Q.value = 0.8;
    gain.connect(filter).connect(this.master);

    const notes = [55, 82.5, 110, 164.8];
    const oscillators = notes.map((freq, i) => {
      const osc = ctx.createOscillator();
      osc.type = i % 2 ? 'sine' : 'triangle';
      osc.frequency.value = freq;
      const g = ctx.createGain();
      g.gain.value = 0.08 / (i + 1);
      osc.connect(g).connect(gain);
      osc.start();
      return osc;
    });

    // A quiet city-hum layer.
    const buffer = ctx.createBuffer(1, ctx.sampleRate * 3, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let last = 0;
    for (let i = 0; i < data.length; i++) {
      last = (last + (Math.random() * 2 - 1) * 0.02) * 0.995;
      data[i] = last;
    }
    const noise = ctx.createBufferSource();
    noise.buffer = buffer;
    noise.loop = true;
    const noiseFilter = ctx.createBiquadFilter();
    noiseFilter.type = 'lowpass';
    noiseFilter.frequency.value = 240;
    const noiseGain = ctx.createGain();
    noiseGain.gain.value = 0.22;
    noise.connect(noiseFilter).connect(noiseGain).connect(this.master);
    noise.start();

    this.ambient = { gain, oscillators, noise };
  }

  setEnabled(value) {
    this.enabled = value;
    if (this.master) this.master.gain.setTargetAtTime(value ? 0.22 : 0, this.ctx.currentTime, 0.05);
  }

  tone(freq, duration = 0.12, type = 'sine', volume = 0.25, slide = 0) {
    if (!this.ctx || !this.enabled) return;
    const ctx = this.ctx;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    if (slide) osc.frequency.exponentialRampToValueAtTime(Math.max(30, freq + slide), ctx.currentTime + duration);
    gain.gain.setValueAtTime(0.0001, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(volume, ctx.currentTime + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
    osc.connect(gain).connect(this.master);
    osc.start();
    osc.stop(ctx.currentTime + duration + 0.02);
  }

  click() { this.tone(520, 0.055, 'triangle', 0.12); }
  cash() {
    this.tone(880, 0.08, 'triangle', 0.16);
    setTimeout(() => this.tone(1320, 0.14, 'triangle', 0.12), 70);
  }
  door() {
    this.tone(180, 0.16, 'sine', 0.12, -60);
    setTimeout(() => this.tone(90, 0.2, 'sine', 0.08), 40);
  }
  success() {
    [523, 659, 784].forEach((f, i) => setTimeout(() => this.tone(f, 0.18, 'triangle', 0.12), i * 85));
  }
  error() { this.tone(180, 0.18, 'sawtooth', 0.09, -50); }
  enterCar() {
    this.tone(120, 0.2, 'sine', 0.16);
    setTimeout(() => this.tone(90, 0.35, 'sawtooth', 0.04), 100);
  }
  setEngine(speed = 0) {
    if (!this.ctx || !this.enabled) return;
    if (!this.engine) {
      const ctx = this.ctx;
      const osc = ctx.createOscillator();
      osc.type = 'sawtooth';
      osc.frequency.value = 60;
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 220;
      const gain = ctx.createGain();
      gain.gain.value = 0;
      osc.connect(filter).connect(gain).connect(this.master);
      osc.start();
      this.engine = { osc, filter, gain };
    }
    const target = Math.min(0.1, Math.abs(speed) * 0.003);
    this.engine.gain.gain.setTargetAtTime(target, this.ctx.currentTime, 0.08);
    this.engine.osc.frequency.setTargetAtTime(45 + Math.abs(speed) * 3.2, this.ctx.currentTime, 0.08);
    this.engine.filter.frequency.setTargetAtTime(180 + Math.abs(speed) * 14, this.ctx.currentTime, 0.08);
  }
}
