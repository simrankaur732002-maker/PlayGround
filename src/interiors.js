import * as THREE from 'three';
import { BUSINESSES, SHOP_ITEMS, DIALOGUE, NAMES, SKINS, HAIRS } from './data.js';
import { makeSignTexture, makeGlow, pick } from './utils.js';
import { createHuman, animateHuman, addShadow } from './entities.js';

const roomSizes = {
  mall: [28, 20],
  gym: [25, 18],
  dealership: [26, 18],
  hotel: [23, 17],
  hospital: [24, 17],
  house: [23, 17],
  restaurant: [23, 17],
  bar: [23, 16],
};

export function buildInteriors(scene, { onShop, onExit, onSleep, onJobBoard, onTalk }) {
  const root = new THREE.Group();
  root.name = 'Interiors';
  scene.add(root);
  const interiors = new Map();
  const accentMats = [];
  let index = 0;

  for (const business of BUSINESSES) {
    if (!business.interior) continue;
    const size = roomSizes[business.type] || [20, 15];
    const group = new THREE.Group();
    const baseX = index * 72;
    const baseY = -900;
    group.position.set(baseX, baseY, 0);
    root.add(group);

    const accent = new THREE.Color(business.accent);
    const room = createRoom(group, size, accent, business);
    const fixtures = createFixtures(business, group, size, accent, accentMats);
    const entry = new THREE.Vector3(baseX, baseY + 0.1, size[1] / 2 - 5.6);
    const exitPos = new THREE.Vector3(baseX, baseY + 0.1, size[1] / 2 - 0.4);
    const bounds = {
      minX: baseX - size[0] / 2 + 0.8,
      maxX: baseX + size[0] / 2 - 0.8,
      minZ: -size[1] / 2 + 0.8,
      maxZ: size[1] / 2 - 0.8,
      baseY,
    };

    const interactables = [];

    const worker = createHuman({
      shirt: new THREE.Color(business.accent).getHex(),
      pants: 0x293241,
      skin: pick(SKINS),
      hair: pick(HAIRS),
      role: business.type === 'cafe' ? 'barista' : business.type === 'restaurant' ? 'chef' : business.type === 'hospital' ? 'doctor' : business.type === 'police' ? 'police' : 'worker',
      height: 1,
    });
    const workerLocal = new THREE.Vector3(fixtures.workerOffset?.x ?? 3.1, 0, fixtures.workerOffset?.z ?? -size[1] / 2 + 2.4);
    worker.position.copy(workerLocal).add(new THREE.Vector3(baseX, baseY + 0.1, 0));
    worker.rotation.y = Math.PI + (fixtures.workerFacing ?? 0);
    group.add(worker);

    const counterLocal = new THREE.Vector3(0, 0, fixtures.counterZ ?? -size[1] / 2 + 3.2);
    if (!business.residential && business.type !== 'house') {
      interactables.push({
        id: `counter-${business.id}`,
        type: 'counter',
        position: new THREE.Vector3(counterLocal.x + baseX, baseY + 0.1, counterLocal.z + 1.55),
        radius: 2.6,
        label: business.type === 'jobcenter' ? 'Browse city jobs' : business.type === 'cafe' ? 'Order at the counter' : `Browse ${business.name}`,
        icon: business.type === 'jobcenter' ? '💼' : '🛍️',
        data: { businessId: business.id },
        handler: () => {
          if (business.type === 'jobcenter') onJobBoard();
          else if (business.type === 'police') onTalk({ role: 'police', name: 'Officer Reed' });
          else if (SHOP_ITEMS[business.type]?.length) onShop(business.id);
          else onTalk({ role: 'worker', name: pick(NAMES), businessId: business.id });
        },
      });
    }

    if (business.type === 'house') {
      interactables.push({
        id: 'bed-house',
        type: 'bed',
        position: new THREE.Vector3(baseX - 6.5, baseY + 0.1, -1.5),
        radius: 3.1,
        label: 'Sleep until morning',
        icon: '🛌',
        data: {},
        handler: onSleep,
      });
    }

    if (business.type === 'hotel') {
      interactables.push({
        id: 'bed-hotel',
        type: 'bed',
        position: new THREE.Vector3(baseX + 7.2, baseY + 0.1, -3.0),
        radius: 2.8,
        label: 'Book a room at the front desk',
        icon: '🛌',
        data: {},
        handler: () => onShop('hotel'),
      });
    }

    interactables.push({
      id: `exit-${business.id}`,
      type: 'exit',
      position: exitPos,
      radius: 2.1,
      label: `Leave ${business.name}`,
      icon: '↩️',
      data: { businessId: business.id },
      handler: onExit,
    });

    interactables.push({
      id: `inside-staff-${business.id}`,
      type: 'npc',
      position: worker.position.clone().add(new THREE.Vector3(0, 0, 1.4)),
      radius: 2.2,
      label: `Talk to ${business.type === 'police' ? 'Officer Reed' : business.type === 'hospital' ? 'Dr. Chen' : pick(NAMES)}`,
      icon: '💬',
      data: { role: business.type === 'police' ? 'police' : business.type === 'hospital' ? 'doctor' : 'worker', name: pick(NAMES), businessId: business.id },
      handler: () => onTalk({ role: business.type === 'police' ? 'police' : business.type === 'hospital' ? 'doctor' : 'worker', name: pick(NAMES), businessId: business.id }),
    });

    interiors.set(business.id, {
      business,
      group,
      size,
      entry,
      exitPos,
      bounds,
      interactables,
      worker,
      counterPos: new THREE.Vector3(counterLocal.x + baseX, baseY + 0.1, counterLocal.z + 1.55),
      light: room.light,
    });
    index++;
  }

  function update(dt, playerInside) {
    for (const interior of interiors.values()) {
      animateHuman(interior.worker, dt, 0);
      if (playerInside === interior.business.id) {
        // Keep the room's practical light gently alive.
        interior.light.intensity = 22 + Math.sin(performance.now() * 0.0012 + interior.entry.x) * 1.5;
      }
    }
  }

  return { root, interiors, update, accentMats };
}

function createRoom(group, [w, d], accent, business) {
  const floorMat = new THREE.MeshStandardMaterial({ color: 0x555a60, roughness: 0.88 });
  const wallMat = new THREE.MeshStandardMaterial({ color: new THREE.Color(business.color).offsetHSL(0, -0.05, -0.14), roughness: 0.9 });
  const darkMat = new THREE.MeshStandardMaterial({ color: 0x22262c, roughness: 0.8 });
  const trimMat = new THREE.MeshStandardMaterial({ color: 0xc8bda8, roughness: 0.85 });

  const floor = new THREE.Mesh(new THREE.PlaneGeometry(w, d), floorMat);
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = 0;
  floor.receiveShadow = true;
  group.add(floor);

  // A patterned rug / accent in the center.
  const rugMat = new THREE.MeshStandardMaterial({ color: accent.clone().multiplyScalar(0.38), roughness: 1 });
  const rug = new THREE.Mesh(new THREE.PlaneGeometry(w * 0.42, d * 0.28), rugMat);
  rug.rotation.x = -Math.PI / 2;
  rug.position.set(0, 0.012, 1.2);
  group.add(rug);

  const back = new THREE.Mesh(new THREE.BoxGeometry(w, 4.3, 0.26), wallMat);
  back.position.set(0, 2.15, -d / 2);
  back.receiveShadow = true;
  group.add(back);
  for (const side of [-1, 1]) {
    const wall = new THREE.Mesh(new THREE.BoxGeometry(0.26, 4.3, d), wallMat);
    wall.position.set(side * w / 2, 2.15, 0);
    wall.receiveShadow = true;
    group.add(wall);
  }

  // Front wall with a wide doorway.
  const doorW = 3.4;
  const segmentW = (w - doorW) / 2;
  for (const side of [-1, 1]) {
    const wall = new THREE.Mesh(new THREE.BoxGeometry(segmentW, 4.3, 0.26), wallMat);
    wall.position.set(side * (doorW / 2 + segmentW / 2), 2.15, d / 2);
    group.add(wall);
  }
  const lintel = new THREE.Mesh(new THREE.BoxGeometry(doorW + 0.4, 0.8, 0.3), wallMat);
  lintel.position.set(0, 3.9, d / 2);
  group.add(lintel);

  // Door frame, welcome mat, and exit glow.
  const frameMat = new THREE.MeshStandardMaterial({ color: 0x242a31, metalness: 0.4, roughness: 0.5 });
  for (const side of [-1, 1]) {
    const post = new THREE.Mesh(new THREE.BoxGeometry(0.15, 3.2, 0.18), frameMat);
    post.position.set(side * doorW / 2, 1.6, d / 2 - 0.08);
    group.add(post);
  }
  const topFrame = new THREE.Mesh(new THREE.BoxGeometry(doorW + 0.2, 0.14, 0.2), frameMat);
  topFrame.position.set(0, 3.22, d / 2 - 0.08);
  group.add(topFrame);
  const exitMat = new THREE.MeshStandardMaterial({ color: 0x86c8b8, emissive: 0x58e6d2, emissiveIntensity: 0.9 });
  const exitGlow = new THREE.Mesh(new THREE.BoxGeometry(doorW - 0.2, 0.06, 0.08), exitMat);
  exitGlow.position.set(0, 0.03, d / 2 - 0.2);
  group.add(exitGlow);
  const mat = new THREE.Mesh(new THREE.PlaneGeometry(doorW - 0.3, 1.2), new THREE.MeshStandardMaterial({ color: 0x6b5e50, roughness: 1 }));
  mat.rotation.x = -Math.PI / 2;
  mat.position.set(0, 0.014, d / 2 - 0.7);
  group.add(mat);

  // Ceiling and light panels.
  const ceiling = new THREE.Mesh(new THREE.BoxGeometry(w, 0.22, d), new THREE.MeshStandardMaterial({ color: 0x24282e, roughness: 0.9 }));
  ceiling.position.set(0, 4.42, 0);
  group.add(ceiling);
  const panelMat = new THREE.MeshBasicMaterial({ color: 0xffe8c4 });
  for (const x of [-w * 0.24, w * 0.24]) {
    for (const z of [-d * 0.22, d * 0.18]) {
      const panel = new THREE.Mesh(new THREE.PlaneGeometry(2.8, 1.0), panelMat);
      panel.rotation.x = Math.PI / 2;
      panel.position.set(x, 4.29, z);
      group.add(panel);
    }
  }

  const light = new THREE.PointLight(0xffd6a0, 34, 30, 2);
  light.position.set(0, 3.6, 1.2);
  group.add(light);

  // Baseboards and wall art.
  for (const side of [-1, 1]) {
    const base = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.16, d - 0.4), trimMat);
    base.position.set(side * (w / 2 - 0.16), 0.1, 0);
    group.add(base);
  }
  const backBase = new THREE.Mesh(new THREE.BoxGeometry(w - 0.4, 0.16, 0.08), trimMat);
  backBase.position.set(0, 0.1, -d / 2 + 0.18);
  group.add(backBase);

  const artMat = new THREE.MeshBasicMaterial({
    map: makeSignTexture(business.name, { color: business.signColor, bg: '#161b22', accent: business.accent, sub: business.category, width: 1024, height: 240 }),
    transparent: true,
  });
  const art = new THREE.Mesh(new THREE.PlaneGeometry(6.2, 1.55), artMat);
  art.position.set(0, 3.5, -d / 2 + 0.15);
  group.add(art);

  return { light, doorW };
}

function createFixtures(business, group, [w, d], accent, accentMats) {
  const dark = new THREE.MeshStandardMaterial({ color: 0x252a31, roughness: 0.75 });
  const wood = new THREE.MeshStandardMaterial({ color: 0x8c6244, roughness: 0.8 });
  const white = new THREE.MeshStandardMaterial({ color: 0xe7e3d8, roughness: 0.65 });
  const metal = new THREE.MeshStandardMaterial({ color: 0x9ca3ab, metalness: 0.6, roughness: 0.3 });
  const accentMat = new THREE.MeshStandardMaterial({ color: accent, roughness: 0.6 });
  const counterZ = -d / 2 + 3.4;
  let workerOffset = { x: 3.1, z: counterZ - 0.8 };
  let workerFacing = 0;

  const addCounter = (x = 0, z = counterZ, width = 5.2) => {
    const counter = new THREE.Mesh(new THREE.BoxGeometry(width, 1.05, 1.15), wood);
    counter.position.set(x, 0.55, z);
    counter.castShadow = true;
    group.add(counter);
    const top = new THREE.Mesh(new THREE.BoxGeometry(width + 0.2, 0.09, 1.3), accentMat);
    top.position.set(x, 1.1, z);
    group.add(top);
    const front = new THREE.Mesh(new THREE.BoxGeometry(width, 0.35, 0.06), accentMat);
    front.position.set(x, 0.55, z + 0.6);
    group.add(front);
    const register = new THREE.Mesh(new THREE.BoxGeometry(0.65, 0.35, 0.45), dark);
    register.position.set(x + width * 0.27, 1.32, z);
    group.add(register);
    const screen = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.4, 0.04), new THREE.MeshStandardMaterial({ color: 0x18272d, emissive: 0x58e6d2, emissiveIntensity: 0.6 }));
    screen.position.set(x + width * 0.27, 1.62, z + 0.08);
    screen.rotation.x = -0.18;
    group.add(screen);
  };

  const addShelf = (x, z, width = 3.2, height = 2.1, rotation = 0, products = true) => {
    const shelf = new THREE.Group();
    shelf.position.set(x, 0, z);
    shelf.rotation.y = rotation;
    for (let i = 0; i < 3; i++) {
      const board = new THREE.Mesh(new THREE.BoxGeometry(width, 0.08, 0.55), metal);
      board.position.y = 0.45 + i * 0.55;
      shelf.add(board);
    }
    for (const side of [-1, 1]) {
      const leg = new THREE.Mesh(new THREE.BoxGeometry(0.07, height, 0.55), metal);
      leg.position.set(side * width / 2, height / 2, 0);
      shelf.add(leg);
    }
    if (products) {
      const colors = [0xff7c6b, 0x58e6d2, 0xf2c14e, 0x9a7cff, 0x7acb6a, 0xffb45c];
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 4; j++) {
          const box = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.3, 0.3), new THREE.MeshStandardMaterial({ color: colors[(i * 4 + j) % colors.length], roughness: 0.7 }));
          box.position.set(-width / 2 + 0.45 + j * (width - 0.9) / 3, 0.65 + i * 0.55, 0);
          shelf.add(box);
        }
      }
    }
    group.add(shelf);
  };

  const addTable = (x, z, round = false) => {
    const table = round
      ? new THREE.Mesh(new THREE.CylinderGeometry(0.75, 0.75, 0.1, 12), wood)
      : new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.1, 1.1), wood);
    table.position.set(x, 0.78, z);
    group.add(table);
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.12, 0.75, 8), metal);
    pole.position.set(x, 0.38, z);
    group.add(pole);
    for (const side of [-1, 1]) {
      const chair = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.45, 0.5), dark);
      chair.position.set(x + side * 1.15, 0.34, z);
      group.add(chair);
      const back = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.6, 0.08), dark);
      back.position.set(x + side * 1.15, 0.7, z - 0.21);
      group.add(back);
    }
  };

  const addPlant = (x, z, scale = 1) => {
    const pot = new THREE.Mesh(new THREE.CylinderGeometry(0.32 * scale, 0.26 * scale, 0.5 * scale, 8), white);
    pot.position.set(x, 0.25 * scale, z);
    group.add(pot);
    const leaves = new THREE.Mesh(new THREE.IcosahedronGeometry(0.55 * scale, 1), new THREE.MeshStandardMaterial({ color: 0x5d9b64, roughness: 0.95 }));
    leaves.position.set(x, 0.9 * scale, z);
    leaves.scale.y = 1.2;
    group.add(leaves);
  };

  const addNeon = (text, x, z, rotation = 0, width = 4.2, color = business.accent) => {
    const mat = new THREE.MeshBasicMaterial({
      map: makeSignTexture(text, { color: '#fff0d2', bg: '#121820', accent: color, width: 1024, height: 220 }),
      transparent: true,
    });
    accentMats.push(mat);
    const sign = new THREE.Mesh(new THREE.PlaneGeometry(width, width * 0.22), mat);
    sign.position.set(x, 2.9, z);
    sign.rotation.y = rotation;
    group.add(sign);
    const glow = makeGlow(color, width * 0.8, 0.18);
    glow.position.set(x, 2.9, z + (rotation === 0 ? 0.15 : 0));
    group.add(glow);
  };

  const type = business.type;
  if (type === 'supermarket') {
    addCounter(2.8, counterZ, 5.0);
    addShelf(-5.2, -2.5, 3.4, 2.2, Math.PI / 2);
    addShelf(-1.5, -2.5, 3.4, 2.2, Math.PI / 2);
    addShelf(2.2, -2.5, 3.4, 2.2, Math.PI / 2);
    addShelf(5.7, -2.5, 3.4, 2.2, Math.PI / 2);
    addShelf(-4.2, 2.5, 3.0, 2.0, Math.PI / 2);
    addShelf(4.2, 2.5, 3.0, 2.0, Math.PI / 2);
    addPlant(-8.2, 5.7, 0.9);
    addNeon('FRESH DAILY', -w * 0.24, -d / 2 + 0.3, 0, 4.8, '#7acb6a');
    workerOffset = { x: 2.8, z: counterZ - 0.9 };
    workerFacing = 0;
  } else if (type === 'clothing') {
    addCounter(-6.7, counterZ, 4.3);
    addShelf(-2.4, -3.8, 3.2, 2.0, 0, false);
    addShelf(2.4, -3.8, 3.2, 2.0, 0, false);
    const colors = [0xff7c6b, 0x58e6d2, 0xf2c14e, 0x9a7cff, 0xf3f1ea, 0x38c9b0];
    for (let i = 0; i < 6; i++) {
      const mannequin = new THREE.Group();
      const torso = new THREE.Mesh(new THREE.CapsuleGeometry(0.22, 0.55, 4, 8), new THREE.MeshStandardMaterial({ color: colors[i], roughness: 0.8 }));
      torso.position.y = 1.15;
      mannequin.add(torso);
      const head = new THREE.Mesh(new THREE.SphereGeometry(0.16, 10, 8), new THREE.MeshStandardMaterial({ color: 0xd6b38d }));
      head.position.y = 1.72;
      mannequin.add(head);
      const stand = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.3, 0.8, 8), metal);
      stand.position.y = 0.4;
      mannequin.add(stand);
      mannequin.position.set(-6.8 + i * 2.7, 0, 2.7);
      mannequin.rotation.y = Math.random() * 0.6 - 0.3;
      group.add(mannequin);
    }
    addPlant(7.8, 5.4, 1);
    addNeon('NEW SEASON', 2, -d / 2 + 0.3, 0, 4.8, '#ff6f91');
    workerOffset = { x: -6.7, z: counterZ - 0.9 };
  } else if (type === 'salon') {
    addCounter(-6.8, counterZ, 4.0);
    for (let i = 0; i < 3; i++) {
      const chair = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.35, 1.0), new THREE.MeshStandardMaterial({ color: 0x4a3e5c }));
      chair.position.set(-3.8 + i * 3.5, 0.55, -0.7);
      group.add(chair);
      const back = new THREE.Mesh(new THREE.BoxGeometry(1.0, 1.2, 0.18), new THREE.MeshStandardMaterial({ color: 0x4a3e5c }));
      back.position.set(-3.8 + i * 3.5, 1.2, -1.15);
      group.add(back);
      const mirror = new THREE.Mesh(new THREE.BoxGeometry(1.2, 1.7, 0.06), new THREE.MeshStandardMaterial({ color: 0x9fb7c0, metalness: 0.8, roughness: 0.1 }));
      mirror.position.set(-3.8 + i * 3.5, 2.2, -d / 2 + 0.25);
      group.add(mirror);
      const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.09, 8, 6), new THREE.MeshBasicMaterial({ color: 0xffe2b0 }));
      bulb.position.set(-3.8 + i * 3.5, 3.1, -d / 2 + 0.2);
      group.add(bulb);
    }
    addPlant(8.2, 5.2, 0.9);
    addNeon('GLOW', 0, -d / 2 + 0.3, 0, 3.4, '#b78bff');
    workerOffset = { x: -6.8, z: counterZ - 0.9 };
  } else if (type === 'restaurant') {
    addCounter(0, counterZ, 6.2);
    addTable(-5.7, 1.8, true);
    addTable(5.7, 1.8, true);
    addTable(-5.7, 4.8, true);
    addTable(5.7, 4.8, true);
    addPlant(-8.3, 5.6, 1);
    addNeon('COPPER SPOON', 0, -d / 2 + 0.3, 0, 6.5, '#ff9e58');
    workerOffset = { x: 0, z: counterZ - 0.9 };
  } else if (type === 'bar') {
    const bar = new THREE.Mesh(new THREE.BoxGeometry(8, 1.1, 1.5), new THREE.MeshStandardMaterial({ color: 0x3b2432, roughness: 0.5 }));
    bar.position.set(0, 0.55, counterZ);
    group.add(bar);
    const barTop = new THREE.Mesh(new THREE.BoxGeometry(8.2, 0.1, 1.65), new THREE.MeshStandardMaterial({ color: 0xcf9c62, metalness: 0.25, roughness: 0.35 }));
    barTop.position.set(0, 1.13, counterZ);
    group.add(barTop);
    for (let i = 0; i < 5; i++) {
      const stool = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.14, 10), accentMat);
      stool.position.set(-2.8 + i * 1.4, 0.78, counterZ + 1.55);
      group.add(stool);
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.12, 0.78, 8), metal);
      pole.position.set(-2.8 + i * 1.4, 0.4, counterZ + 1.55);
      group.add(pole);
    }
    for (let i = 0; i < 4; i++) {
      const bottle = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.09, 0.45, 7), new THREE.MeshStandardMaterial({ color: [0xffb45c, 0x8fd46a, 0xff7c6b, 0x58e6d2][i], emissive: [0xffb45c, 0x8fd46a, 0xff7c6b, 0x58e6d2][i], emissiveIntensity: 0.2 }));
      bottle.position.set(-2.5 + i * 1.6, 1.65, -d / 2 + 0.65);
      group.add(bottle);
    }
    addTable(-6, 4.6, true);
    addTable(6, 4.6, true);
    addNeon('VELVET ROOM', 0, -d / 2 + 0.3, 0, 6, '#d46bff');
    workerOffset = { x: 0, z: counterZ - 0.9 };
  } else if (type === 'gym') {
    addCounter(-8, counterZ, 4.0);
    const mat = new THREE.Mesh(new THREE.PlaneGeometry(6, 4), new THREE.MeshStandardMaterial({ color: 0x2d3a44, roughness: 1 }));
    mat.rotation.x = -Math.PI / 2;
    mat.position.set(0, 0.02, 2.5);
    group.add(mat);
    for (let i = 0; i < 3; i++) {
      const treadmill = new THREE.Group();
      const deck = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.18, 2.3), dark);
      deck.position.y = 0.25;
      treadmill.add(deck);
      const belt = new THREE.Mesh(new THREE.BoxGeometry(0.86, 0.04, 1.8), new THREE.MeshStandardMaterial({ color: 0x15191e }));
      belt.position.y = 0.35;
      treadmill.add(belt);
      const post = new THREE.Mesh(new THREE.BoxGeometry(0.08, 1.2, 0.08), metal);
      post.position.set(0, 0.9, 0.9);
      treadmill.add(post);
      const console = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.3, 0.12), dark);
      console.position.set(0, 1.45, 0.9);
      treadmill.add(console);
      treadmill.position.set(-3.5 + i * 3.4, 0, 2.4);
      group.add(treadmill);
    }
    const rack = new THREE.Mesh(new THREE.BoxGeometry(4.4, 0.15, 0.8), metal);
    rack.position.set(4.8, 1.7, -3.2);
    group.add(rack);
    for (let i = 0; i < 6; i++) {
      const plate = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.16, 10), dark);
      plate.rotation.z = Math.PI / 2;
      plate.position.set(3.2 + i * 0.62, 1.15, -3.2);
      group.add(plate);
    }
    addPlant(-10, 5.4, 0.9);
    addNeon('IRON HARBOR', 2, -d / 2 + 0.3, 0, 6, '#ffd34d');
    workerOffset = { x: -8, z: counterZ - 0.9 };
  } else if (type === 'hotel') {
    addCounter(-5.5, counterZ, 5.2);
    const sofa = new THREE.Mesh(new THREE.BoxGeometry(4.4, 0.7, 1.4), new THREE.MeshStandardMaterial({ color: 0x5b4a60, roughness: 0.8 }));
    sofa.position.set(5.8, 0.45, 1.8);
    group.add(sofa);
    const sofaBack = new THREE.Mesh(new THREE.BoxGeometry(4.4, 0.9, 0.3), new THREE.MeshStandardMaterial({ color: 0x5b4a60, roughness: 0.8 }));
    sofaBack.position.set(5.8, 0.95, 1.2);
    group.add(sofaBack);
    const bed = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.55, 5.0), new THREE.MeshStandardMaterial({ color: 0xe8dfcf, roughness: 0.9 }));
    bed.position.set(7.4, 0.45, -3.2);
    group.add(bed);
    const headboard = new THREE.Mesh(new THREE.BoxGeometry(3.4, 1.6, 0.18), wood);
    headboard.position.set(7.4, 1.0, -5.6);
    group.add(headboard);
    addPlant(-9.2, 5.3, 1);
    addNeon('HARBORVIEW', -5.5, -d / 2 + 0.3, 0, 5.6, '#ffc46b');
    workerOffset = { x: -5.5, z: counterZ - 0.9 };
  } else if (type === 'mall') {
    addCounter(0, counterZ, 7.2);
    addShelf(-7.5, 1.2, 3.6, 2.0, Math.PI / 2);
    addShelf(-7.5, 5.2, 3.6, 2.0, Math.PI / 2);
    addShelf(7.5, 1.2, 3.6, 2.0, Math.PI / 2);
    addShelf(7.5, 5.2, 3.6, 2.0, Math.PI / 2);
    for (let i = 0; i < 4; i++) {
      const mannequin = new THREE.Group();
      const torso = new THREE.Mesh(new THREE.CapsuleGeometry(0.24, 0.6, 4, 8), new THREE.MeshStandardMaterial({ color: [0xff7c6b, 0x58e6d2, 0xf2c14e, 0x9a7cff][i] }));
      torso.position.y = 1.2;
      mannequin.add(torso);
      const head = new THREE.Mesh(new THREE.SphereGeometry(0.16, 10, 8), new THREE.MeshStandardMaterial({ color: 0xd6b38d }));
      head.position.y = 1.8;
      mannequin.add(head);
      mannequin.position.set(-4.5 + i * 3, 0, -1.8);
      group.add(mannequin);
    }
    addPlant(-12, 7, 1.2);
    addPlant(12, 7, 1.2);
    addNeon('EVERYTHING', 0, -d / 2 + 0.3, 0, 7, '#ff8a5b');
    workerOffset = { x: 0, z: counterZ - 0.9 };
  } else if (type === 'dealership') {
    addCounter(-8.5, counterZ, 4.2);
    const car = new THREE.Group();
    const body = new THREE.Mesh(new THREE.BoxGeometry(2.0, 0.65, 4.2), new THREE.MeshStandardMaterial({ color: 0x4fd8ff, metalness: 0.6, roughness: 0.2 }));
    body.position.y = 0.7;
    car.add(body);
    const cabin = new THREE.Mesh(new THREE.BoxGeometry(1.7, 0.5, 2.0), new THREE.MeshStandardMaterial({ color: 0x182a38, metalness: 0.5, roughness: 0.15 }));
    cabin.position.set(0, 1.22, -0.1);
    car.add(cabin);
    for (const x of [-0.95, 0.95]) for (const z of [-1.35, 1.35]) {
      const wheel = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.34, 0.2, 12), dark);
      wheel.rotation.z = Math.PI / 2;
      wheel.position.set(x, 0.35, z);
      car.add(wheel);
    }
    car.position.set(4.2, 0, 2.3);
    car.rotation.y = -0.3;
    group.add(car);
    const ring = new THREE.Mesh(new THREE.RingGeometry(3.1, 3.25, 40), new THREE.MeshBasicMaterial({ color: 0x4fd8ff, transparent: true, opacity: 0.55, side: THREE.DoubleSide }));
    ring.rotation.x = -Math.PI / 2;
    ring.position.set(4.2, 0.03, 2.3);
    group.add(ring);
    addNeon('VOLT MOTORS', 3.8, -d / 2 + 0.3, 0, 7, '#4fd8ff');
    workerOffset = { x: -8.5, z: counterZ - 0.9 };
  } else if (type === 'realestate') {
    addCounter(-5.8, counterZ, 4.4);
    const board = new THREE.Mesh(new THREE.BoxGeometry(5.2, 2.4, 0.12), dark);
    board.position.set(5.7, 2.2, -d / 2 + 0.3);
    group.add(board);
    const mapMat = new THREE.MeshBasicMaterial({ color: 0x98b9a2 });
    const map = new THREE.Mesh(new THREE.PlaneGeometry(4.6, 1.9), mapMat);
    map.position.set(5.7, 2.2, -d / 2 + 0.38);
    group.add(map);
    for (let i = 0; i < 7; i++) {
      const dot = new THREE.Mesh(new THREE.CircleGeometry(0.08, 8), new THREE.MeshBasicMaterial({ color: i === 3 ? 0xffc46b : 0x5d8c72 }));
      dot.position.set(4.0 + (i % 4) * 1.1, 1.65 + Math.floor(i / 4) * 0.7, -d / 2 + 0.4);
      group.add(dot);
    }
    const sofa = new THREE.Mesh(new THREE.BoxGeometry(3.8, 0.65, 1.3), new THREE.MeshStandardMaterial({ color: 0x5d6b5a }));
    sofa.position.set(5.6, 0.4, 3.3);
    group.add(sofa);
    addPlant(-9, 5.2, 1);
    addNeon('KEY & STONE', 3.8, -d / 2 + 0.3, 0, 5.2, '#8fd46a');
    workerOffset = { x: -5.8, z: counterZ - 0.9 };
  } else if (type === 'petstore') {
    addCounter(-6.5, counterZ, 4.2);
    for (let i = 0; i < 3; i++) {
      const cage = new THREE.Group();
      const base = new THREE.Mesh(new THREE.BoxGeometry(2.0, 0.5, 1.7), white);
      base.position.y = 0.25;
      cage.add(base);
      for (let j = 0; j < 4; j++) {
        const bar = new THREE.Mesh(new THREE.BoxGeometry(0.04, 1.3, 0.04), metal);
        bar.position.set(-0.9 + j * 0.6, 1.15, 0.82);
        cage.add(bar);
      }
      const roof = new THREE.Mesh(new THREE.BoxGeometry(2.0, 0.08, 1.7), white);
      roof.position.y = 1.82;
      cage.add(roof);
      cage.position.set(-1.5 + i * 3.2, 0, -1.5);
      group.add(cage);
    }
    addShelf(6.8, 2.0, 2.6, 2.0, Math.PI / 2);
    addPlant(9, 5.2, 0.9);
    addNeon('PAWS & CO.', 3.8, -d / 2 + 0.3, 0, 5.2, '#ffad5c');
    workerOffset = { x: -6.5, z: counterZ - 0.9 };
  } else if (type === 'jobcenter') {
    addCounter(-6.2, counterZ, 4.6);
    for (let i = 0; i < 3; i++) {
      const desk = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.9, 1.2), wood);
      desk.position.set(-1.8 + i * 3.5, 0.5, 2.2);
      group.add(desk);
      const screen = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.45, 0.06), new THREE.MeshStandardMaterial({ color: 0x1a272e, emissive: 0x59b8ff, emissiveIntensity: 0.5 }));
      screen.position.set(-1.8 + i * 3.5, 1.2, 2.3);
      group.add(screen);
    }
    const board = new THREE.Mesh(new THREE.BoxGeometry(5.0, 2.2, 0.12), dark);
    board.position.set(5.6, 2.2, -d / 2 + 0.3);
    group.add(board);
    const jobMat = new THREE.MeshBasicMaterial({ color: 0xd7e7ef });
    const jobSheet = new THREE.Mesh(new THREE.PlaneGeometry(4.4, 1.8), jobMat);
    jobSheet.position.set(5.6, 2.2, -d / 2 + 0.38);
    group.add(jobSheet);
    addNeon('CITYWORKS', 3.8, -d / 2 + 0.3, 0, 5.8, '#59b8ff');
    workerOffset = { x: -6.2, z: counterZ - 0.9 };
  } else if (type === 'hospital') {
    addCounter(-6.2, counterZ, 5.0);
    const bed = new THREE.Mesh(new THREE.BoxGeometry(3.0, 0.55, 5.2), white);
    bed.position.set(6.8, 0.45, -2.4);
    group.add(bed);
    const pillow = new THREE.Mesh(new THREE.BoxGeometry(1.7, 0.25, 0.9), new THREE.MeshStandardMaterial({ color: 0xf7f3ea }));
    pillow.position.set(6.8, 0.82, -4.4);
    group.add(pillow);
    const cabinet = new THREE.Mesh(new THREE.BoxGeometry(2.2, 1.8, 0.8), white);
    cabinet.position.set(6.8, 0.9, 1.0);
    group.add(cabinet);
    const crossMat = new THREE.MeshBasicMaterial({ color: 0xff6b78 });
    const cross1 = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.16, 0.05), crossMat);
    cross1.position.set(6.8, 2.2, -d / 2 + 0.2);
    group.add(cross1);
    const cross2 = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.5, 0.05), crossMat);
    cross2.position.set(6.8, 2.2, -d / 2 + 0.2);
    group.add(cross2);
    addNeon('HARBOR GENERAL', 3.8, -d / 2 + 0.3, 0, 6.4, '#ff6b78');
    workerOffset = { x: -6.2, z: counterZ - 0.9 };
  } else if (type === 'police') {
    addCounter(-6.2, counterZ, 4.6);
    for (let i = 0; i < 3; i++) {
      const desk = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.9, 1.2), dark);
      desk.position.set(-1.8 + i * 3.4, 0.5, 2.2);
      group.add(desk);
    }
    const board = new THREE.Mesh(new THREE.BoxGeometry(5.2, 2.2, 0.12), dark);
    board.position.set(5.7, 2.2, -d / 2 + 0.3);
    group.add(board);
    const mapMat = new THREE.MeshBasicMaterial({ color: 0x8aa7b5 });
    const map = new THREE.Mesh(new THREE.PlaneGeometry(4.6, 1.8), mapMat);
    map.position.set(5.7, 2.2, -d / 2 + 0.38);
    group.add(map);
    addNeon('9TH PRECINCT', 3.8, -d / 2 + 0.3, 0, 6.2, '#4b8dff');
    workerOffset = { x: -6.2, z: counterZ - 0.9 };
  } else if (type === 'cafe') {
    addCounter(0, counterZ, 7.0);
    addTable(-6.2, 2.0, true);
    addTable(6.2, 2.0, true);
    addTable(-6.2, 5.0, true);
    addTable(6.2, 5.0, true);
    const pastry = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.35, 0.8), new THREE.MeshStandardMaterial({ color: 0x6e4b35 }));
    pastry.position.set(-2.5, 1.35, counterZ);
    group.add(pastry);
    for (let i = 0; i < 4; i++) {
      const croissant = new THREE.Mesh(new THREE.SphereGeometry(0.13, 8, 6), new THREE.MeshStandardMaterial({ color: 0xd99b55 }));
      croissant.scale.set(1.5, 0.7, 1);
      croissant.position.set(-3.3 + i * 0.55, 1.58, counterZ);
      group.add(croissant);
    }
    addPlant(-9.2, 5.6, 0.9);
    addNeon('BYTE CAFÉ', 3.8, -d / 2 + 0.3, 0, 4.8, '#ffb45c');
    workerOffset = { x: 0, z: counterZ - 0.9 };
  } else if (type === 'house') {
    const bed = new THREE.Mesh(new THREE.BoxGeometry(3.4, 0.55, 5.2), new THREE.MeshStandardMaterial({ color: 0x8b6f56 }));
    bed.position.set(-6.4, 0.45, -2.0);
    group.add(bed);
    const blanket = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.2, 3.7), new THREE.MeshStandardMaterial({ color: 0x597a78 }));
    blanket.position.set(-6.4, 0.78, -1.5);
    group.add(blanket);
    const headboard = new THREE.Mesh(new THREE.BoxGeometry(3.5, 1.7, 0.18), wood);
    headboard.position.set(-6.4, 1.0, -4.6);
    group.add(headboard);
    const sofa = new THREE.Mesh(new THREE.BoxGeometry(4.0, 0.7, 1.4), new THREE.MeshStandardMaterial({ color: 0x7b5a4b }));
    sofa.position.set(4.7, 0.45, 1.8);
    group.add(sofa);
    const tv = new THREE.Mesh(new THREE.BoxGeometry(3.2, 1.8, 0.1), dark);
    tv.position.set(4.7, 2.1, -d / 2 + 0.3);
    group.add(tv);
    const tvScreen = new THREE.Mesh(new THREE.PlaneGeometry(2.9, 1.55), new THREE.MeshBasicMaterial({ color: 0x2b4c55 }));
    tvScreen.position.set(4.7, 2.1, -d / 2 + 0.37);
    group.add(tvScreen);
    const kitchen = new THREE.Mesh(new THREE.BoxGeometry(4.0, 0.9, 1.0), white);
    kitchen.position.set(4.0, 0.5, -d / 2 + 1.5);
    group.add(kitchen);
    addPlant(-9.4, 5.0, 1);
    addNeon('MAPLE HOUSE', 3.8, -d / 2 + 0.3, 0, 5.6, '#8fd46a');
    workerOffset = { x: 0, z: counterZ - 0.9 };
  } else if (type === 'arcade') {
    for (let i = 0; i < 6; i++) {
      const cabinet = new THREE.Group();
      const body = new THREE.Mesh(new THREE.BoxGeometry(1.1, 2.1, 0.8), dark);
      body.position.y = 1.05;
      cabinet.add(body);
      const screen = new THREE.Mesh(new THREE.PlaneGeometry(0.8, 0.6), new THREE.MeshBasicMaterial({ color: [0xff5cb8, 0x58e6d2, 0xffb45c][i % 3] }));
      screen.position.set(0, 1.55, 0.41);
      cabinet.add(screen);
      const controls = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.12, 0.5), accentMat);
      controls.position.set(0, 1.08, 0.5);
      cabinet.add(controls);
      cabinet.position.set(-7 + (i % 3) * 3.5, 0, -2 + Math.floor(i / 3) * 4.5);
      cabinet.rotation.y = Math.PI;
      group.add(cabinet);
    }
    addNeon('SEASIDE ARCADE', 0, -d / 2 + 0.3, 0, 6.2, '#ff5cb8');
    workerOffset = { x: 7, z: 5 };
  } else if (type === 'library') {
    for (let i = 0; i < 4; i++) {
      const shelf = new THREE.Mesh(new THREE.BoxGeometry(1.4, 3.0, 5.0), wood);
      shelf.position.set(-7 + i * 4.7, 1.5, -3.4);
      group.add(shelf);
      const books = new THREE.Mesh(new THREE.BoxGeometry(1.1, 2.4, 4.6), new THREE.MeshStandardMaterial({ color: 0x6d7f6f }));
      books.position.set(-7 + i * 4.7, 1.5, -3.4);
      group.add(books);
    }
    addTable(-4, 3.4);
    addTable(4, 3.4);
    addNeon('HARBOR LIBRARY', 0, -d / 2 + 0.3, 0, 6.4, '#7fd4c4');
    workerOffset = { x: 7.5, z: 5 };
  } else {
    addCounter(-6.0, counterZ, 4.4);
    const sofa = new THREE.Mesh(new THREE.BoxGeometry(4.0, 0.7, 1.4), new THREE.MeshStandardMaterial({ color: 0x5f6b7a }));
    sofa.position.set(5.8, 0.45, 2.2);
    group.add(sofa);
    addPlant(-9, 5.2, 1);
    addNeon(business.short, 3.8, -d / 2 + 0.3, 0, 5, business.accent);
    workerOffset = { x: -6.0, z: counterZ - 0.9 };
  }

  addShadow(group, 0, 0, Math.min(w, d) * 0.3, true);
  return { counterZ, workerOffset, workerFacing };
}
