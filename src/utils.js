import * as THREE from 'three';

export const clamp = (v, min, max) => Math.max(min, Math.min(max, v));
export const lerp = (a, b, t) => a + (b - a) * t;
export const rand = (min, max) => min + Math.random() * (max - min);
export const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

export function seededRandom(seed) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

export function canvasTexture(width, height, draw) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  draw(ctx, width, height);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  return texture;
}

export function makeFacadeTexture({ base = '#b9b2a6', accent = '#ffc46b', cols = 5, rows = 8, seed = 1, lit = 0.35, style = 'grid' }) {
  const rnd = seededRandom(seed);
  const diffuse = canvasTexture(256, 512, (ctx, w, h) => {
    const grad = ctx.createLinearGradient(0, 0, w, h);
    grad.addColorStop(0, base);
    grad.addColorStop(0.55, shade(base, -8));
    grad.addColorStop(1, shade(base, -18));
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    // vertical structure
    ctx.globalAlpha = 0.22;
    ctx.fillStyle = shade(base, 16);
    for (let x = 0; x < w; x += w / (cols + 1)) ctx.fillRect(x, 0, 3, h);
    ctx.globalAlpha = 1;

    const top = h * 0.08;
    const usable = h * 0.84;
    const cellW = w / cols;
    const cellH = usable / rows;
    for (let r = 0; r < rows; r++) {
      ctx.fillStyle = shade(base, r % 2 === 0 ? -3 : -7);
      ctx.fillRect(0, top + r * cellH, w, 2);
      for (let c = 0; c < cols; c++) {
        const x = c * cellW + cellW * 0.18;
        const y = top + r * cellH + cellH * 0.2;
        const ww = cellW * 0.64;
        const hh = cellH * 0.56;
        const litWindow = rnd() < lit;
        const g = ctx.createLinearGradient(x, y, x + ww, y + hh);
        if (litWindow) {
          g.addColorStop(0, '#ffe9b0');
          g.addColorStop(1, '#e8a75f');
        } else {
          g.addColorStop(0, '#2d4250');
          g.addColorStop(1, '#16222c');
        }
        ctx.fillStyle = g;
        ctx.fillRect(x, y, ww, hh);
        ctx.strokeStyle = 'rgba(12,18,24,.45)';
        ctx.lineWidth = 2;
        ctx.strokeRect(x, y, ww, hh);
        if (style === 'lux' && c % 2 === 0) {
          ctx.fillStyle = 'rgba(255,255,255,.1)';
          ctx.fillRect(x + ww * 0.12, y, 2, hh);
        }
      }
    }

    // subtle grime / texture
    ctx.globalAlpha = 0.1;
    for (let i = 0; i < 80; i++) {
      ctx.fillStyle = i % 2 ? '#000' : '#fff';
      ctx.fillRect(rnd() * w, rnd() * h, rnd() * 18 + 2, 1);
    }
    ctx.globalAlpha = 1;

    // accent edge
    ctx.fillStyle = accent;
    ctx.globalAlpha = 0.8;
    ctx.fillRect(0, 0, w, 4);
    ctx.globalAlpha = 1;
  });

  const emissive = canvasTexture(256, 512, (ctx, w, h) => {
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, w, h);
    const rnd2 = seededRandom(seed + 99);
    const top = h * 0.08;
    const usable = h * 0.84;
    const cellW = w / cols;
    const cellH = usable / rows;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (rnd2() < lit) {
          const x = c * cellW + cellW * 0.18;
          const y = top + r * cellH + cellH * 0.2;
          const ww = cellW * 0.64;
          const hh = cellH * 0.56;
          const g = ctx.createLinearGradient(x, y, x + ww, y + hh);
          g.addColorStop(0, '#fff4d2');
          g.addColorStop(1, '#ffbb68');
          ctx.fillStyle = g;
          ctx.fillRect(x, y, ww, hh);
        }
      }
    }
  });

  diffuse.wrapS = diffuse.wrapT = THREE.RepeatWrapping;
  emissive.wrapS = emissive.wrapT = THREE.RepeatWrapping;
  return { diffuse, emissive };
}

export function shade(hex, amount) {
  const c = new THREE.Color(hex);
  c.offsetHSL(0, 0, amount / 255);
  return `#${c.getHexString()}`;
}

export function makeSignTexture(text, { color = '#ffd7a2', bg = '#11141d', accent = '#ff8a5b', sub = '', width = 1024, height = 256 } = {}) {
  return canvasTexture(width, height, (ctx, w, h) => {
    ctx.clearRect(0, 0, w, h);
    const r = 30;
    ctx.fillStyle = bg;
    roundRect(ctx, 6, 6, w - 12, h - 12, r);
    ctx.fill();
    ctx.strokeStyle = accent;
    ctx.lineWidth = 8;
    roundRect(ctx, 12, 12, w - 24, h - 24, r - 6);
    ctx.stroke();

    ctx.shadowColor = color;
    ctx.shadowBlur = 28;
    ctx.fillStyle = color;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = `900 ${sub ? 112 : 128}px "Arial Black", Impact, sans-serif`;
    ctx.fillText(text.toUpperCase(), w / 2, sub ? h * 0.44 : h * 0.52);
    ctx.shadowBlur = 0;

    if (sub) {
      ctx.fillStyle = 'rgba(255,255,255,.72)';
      ctx.font = '600 34px "Segoe UI", Arial, sans-serif';
      ctx.letterSpacing = '8px';
      ctx.fillText(sub.toUpperCase(), w / 2, h * 0.79);
    }

    // accent ticks
    ctx.fillStyle = accent;
    ctx.fillRect(w * 0.08, h - 22, w * 0.12, 5);
    ctx.fillRect(w * 0.8, h - 22, w * 0.12, 5);
  });
}

export function makeTextTexture(text, { color = '#ffffff', bg = 'rgba(10,14,20,.86)', accent = '#58e6d2', width = 512, height = 128, font = 56 } = {}) {
  return canvasTexture(width, height, (ctx, w, h) => {
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = bg;
    roundRect(ctx, 4, 4, w - 8, h - 8, 26);
    ctx.fill();
    ctx.strokeStyle = accent;
    ctx.lineWidth = 4;
    roundRect(ctx, 8, 8, w - 16, h - 16, 22);
    ctx.stroke();
    ctx.fillStyle = color;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = `800 ${font}px "Segoe UI", Arial, sans-serif`;
    ctx.fillText(text, w / 2, h / 2 + 2);
  });
}

export function roundRect(ctx, x, y, w, h, r) {
  const radius = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + w, y, x + w, y + h, radius);
  ctx.arcTo(x + w, y + h, x, y + h, radius);
  ctx.arcTo(x, y + h, x, y, radius);
  ctx.arcTo(x, y, x + w, y, radius);
  ctx.closePath();
}

let glowTexture = null;
export function getGlowTexture() {
  if (glowTexture) return glowTexture;
  glowTexture = canvasTexture(128, 128, (ctx, w, h) => {
    const g = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w / 2);
    g.addColorStop(0, 'rgba(255,255,255,1)');
    g.addColorStop(0.2, 'rgba(255,255,255,.8)');
    g.addColorStop(0.5, 'rgba(255,255,255,.2)');
    g.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
  });
  return glowTexture;
}

export function makeGlow(color = 0xffc46b, size = 2, opacity = 0.8) {
  const mat = new THREE.SpriteMaterial({
    map: getGlowTexture(),
    color,
    transparent: true,
    opacity,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  const sprite = new THREE.Sprite(mat);
  sprite.scale.set(size, size, 1);
  return sprite;
}

export function disposeObject(obj) {
  obj.traverse((child) => {
    if (child.geometry) child.geometry.dispose?.();
    if (child.material) {
      const mats = Array.isArray(child.material) ? child.material : [child.material];
      mats.forEach((m) => m.dispose?.());
    }
  });
}

export function formatMoney(value) {
  return `$${Math.round(value).toLocaleString('en-US')}`;
}

export function formatTime(minutes) {
  const m = ((minutes % 1440) + 1440) % 1440;
  const h24 = Math.floor(m / 60);
  const min = Math.floor(m % 60);
  const suffix = h24 >= 12 ? 'PM' : 'AM';
  const h = h24 % 12 || 12;
  return `${h}:${String(min).padStart(2, '0')} ${suffix}`;
}

export function worldPos(col, row) {
  return { x: col * 60 - 120, z: row * 60 - 120 };
}
