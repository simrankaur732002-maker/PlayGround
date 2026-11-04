import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { makeGlow } from './utils.js';

const shadowGeo = new THREE.CircleGeometry(1, 20);
const shadowMat = new THREE.MeshBasicMaterial({
  color: 0x000000,
  transparent: true,
  opacity: 0.2,
  depthWrite: false,
});
const shadowMatSoft = new THREE.MeshBasicMaterial({
  color: 0x000000,
  transparent: true,
  opacity: 0.12,
  depthWrite: false,
});

export function addShadow(parent, x, z, scale = 1, soft = false) {
  const s = new THREE.Mesh(shadowGeo, soft ? shadowMatSoft : shadowMat);
  s.rotation.x = -Math.PI / 2;
  s.position.set(x, 0.025, z);
  s.scale.set(scale, scale, scale);
  s.renderOrder = 1;
  parent.add(s);
  return s;
}

export function createHuman({
  shirt = 0xe86b4f,
  pants = 0x293241,
  skin = 0xf0c6a3,
  hair = 0x2a211d,
  role = 'pedestrian',
  height = 1,
  shoes = 0x191b22,
} = {}) {
  const group = new THREE.Group();
  const body = new THREE.Group();
  group.add(body);

  const skinMat = new THREE.MeshStandardMaterial({ color: skin, roughness: 0.72 });
  const shirtMat = new THREE.MeshStandardMaterial({ color: shirt, roughness: 0.8 });
  const pantsMat = new THREE.MeshStandardMaterial({ color: pants, roughness: 0.86 });
  const hairMat = new THREE.MeshStandardMaterial({ color: hair, roughness: 0.9 });
  const shoeMat = new THREE.MeshStandardMaterial({ color: shoes, roughness: 0.7 });

  const legL = new THREE.Group();
  const legR = new THREE.Group();
  const legGeo = new THREE.CapsuleGeometry(0.105, 0.52, 4, 8);
  const shoeGeo = new RoundedBoxGeometry(0.19, 0.13, 0.34, 2, 0.05);
  for (const [leg, side] of [[legL, -1], [legR, 1]]) {
    leg.position.set(side * 0.145, 0.82, 0);
    const mesh = new THREE.Mesh(legGeo, pantsMat);
    mesh.position.y = -0.34;
    leg.add(mesh);
    const shoe = new THREE.Mesh(shoeGeo, shoeMat);
    shoe.position.set(0, -0.72, 0.07);
    leg.add(shoe);
    body.add(leg);
  }

  const torso = new THREE.Mesh(new THREE.CapsuleGeometry(0.27, 0.42, 4, 10), shirtMat);
  torso.position.y = 1.08;
  torso.scale.z = 0.82;
  body.add(torso);

  const hips = new THREE.Mesh(new RoundedBoxGeometry(0.5, 0.22, 0.34, 2, 0.08), pantsMat);
  hips.position.y = 0.77;
  body.add(hips);

  const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.1, 0.12, 8), skinMat);
  neck.position.y = 1.49;
  body.add(neck);

  const head = new THREE.Mesh(new THREE.SphereGeometry(0.225, 16, 12), skinMat);
  head.position.y = 1.69;
  head.scale.set(0.93, 1.05, 0.94);
  body.add(head);

  const hairCap = new THREE.Mesh(new THREE.SphereGeometry(0.235, 14, 10, 0, Math.PI * 2, 0, Math.PI * 0.62), hairMat);
  hairCap.position.y = 1.73;
  hairCap.scale.set(0.96, 0.92, 0.98);
  body.add(hairCap);

  const eyeMat = new THREE.MeshBasicMaterial({ color: 0x1b1b20 });
  for (const side of [-1, 1]) {
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.022, 6, 5), eyeMat);
    eye.position.set(side * 0.078, 1.7, 0.205);
    body.add(eye);
  }

  const armGeo = new THREE.CapsuleGeometry(0.09, 0.44, 4, 7);
  const handGeo = new THREE.SphereGeometry(0.095, 8, 6);
  const armL = new THREE.Group();
  const armR = new THREE.Group();
  for (const [arm, side] of [[armL, -1], [armR, 1]]) {
    arm.position.set(side * 0.345, 1.3, 0);
    arm.rotation.z = side * 0.08;
    const mesh = new THREE.Mesh(armGeo, shirtMat);
    mesh.position.y = -0.28;
    arm.add(mesh);
    const hand = new THREE.Mesh(handGeo, skinMat);
    hand.position.y = -0.55;
    arm.add(hand);
    body.add(arm);
  }

  let accessory = null;

  if (role === 'police') {
    shirtMat.color.set(0x2b3b55);
    pantsMat.color.set(0x1c2534);
    const vest = new THREE.Mesh(new RoundedBoxGeometry(0.56, 0.52, 0.36, 2, 0.06), new THREE.MeshStandardMaterial({ color: 0x3e5474, roughness: 0.6 }));
    vest.position.y = 1.13;
    body.add(vest);
    const badge = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.12, 0.02), new THREE.MeshStandardMaterial({ color: 0xffd15c, metalness: 0.7, roughness: 0.3 }));
    badge.position.set(-0.13, 1.23, 0.19);
    body.add(badge);
    const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.235, 0.245, 0.16, 12), new THREE.MeshStandardMaterial({ color: 0x1a2740, roughness: 0.7 }));
    cap.position.y = 1.9;
    body.add(cap);
    const brim = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.04, 0.2), new THREE.MeshStandardMaterial({ color: 0x0f1728 }));
    brim.position.set(0, 1.84, 0.16);
    body.add(brim);
  } else if (role === 'doctor') {
    const coat = new THREE.Mesh(new RoundedBoxGeometry(0.6, 0.92, 0.42, 2, 0.08), new THREE.MeshStandardMaterial({ color: 0xf2f3ef, roughness: 0.85 }));
    coat.position.y = 1.03;
    body.add(coat);
    const steth = new THREE.Mesh(new THREE.TorusGeometry(0.15, 0.012, 6, 16, Math.PI * 1.4), new THREE.MeshStandardMaterial({ color: 0x3a4c5c, metalness: 0.4 }));
    steth.position.set(0, 1.27, 0.22);
    steth.rotation.z = Math.PI;
    body.add(steth);
  } else if (role === 'worker') {
    const apron = new THREE.Mesh(new RoundedBoxGeometry(0.5, 0.72, 0.04, 2, 0.02), new THREE.MeshStandardMaterial({ color: 0x2f8f68, roughness: 0.9 }));
    apron.position.set(0, 0.92, 0.245);
    body.add(apron);
    const cap = new THREE.Mesh(new THREE.SphereGeometry(0.225, 12, 6, 0, Math.PI * 2, 0, Math.PI * 0.5), new THREE.MeshStandardMaterial({ color: 0x2f8f68 }));
    cap.position.y = 1.78;
    body.add(cap);
  } else if (role === 'barista') {
    const apron = new THREE.Mesh(new RoundedBoxGeometry(0.5, 0.76, 0.04, 2, 0.02), new THREE.MeshStandardMaterial({ color: 0x6d4c3d, roughness: 0.9 }));
    apron.position.set(0, 0.9, 0.245);
    body.add(apron);
    const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.24, 0.12, 12), new THREE.MeshStandardMaterial({ color: 0x3a2d26 }));
    cap.position.y = 1.88;
    body.add(cap);
  } else if (role === 'chef') {
    const hat = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.22, 0.3, 12), new THREE.MeshStandardMaterial({ color: 0xf4f2eb }));
    hat.position.y = 1.95;
    body.add(hat);
    const apron = new THREE.Mesh(new RoundedBoxGeometry(0.52, 0.8, 0.04, 2, 0.02), new THREE.MeshStandardMaterial({ color: 0xeee9dd }));
    apron.position.set(0, 0.9, 0.245);
    body.add(apron);
  } else if (role === 'player') {
    const backpack = new THREE.Mesh(new RoundedBoxGeometry(0.4, 0.52, 0.22, 3, 0.08), new THREE.MeshStandardMaterial({ color: 0x1f2933, roughness: 0.8 }));
    backpack.position.set(0, 1.12, -0.32);
    body.add(backpack);
    const strapMat = new THREE.MeshStandardMaterial({ color: 0x111820 });
    for (const side of [-1, 1]) {
      const strap = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.56, 0.04), strapMat);
      strap.position.set(side * 0.22, 1.16, 0.18);
      body.add(strap);
    }
    accessory = 'backpack';
  }

  if (role === 'pedestrian') {
    // A few pedestrians get a shoulder bag or beanie.
    if (Math.random() < 0.25) {
      const bag = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.3, 0.34), new THREE.MeshStandardMaterial({ color: 0x5b4636, roughness: 0.9 }));
      bag.position.set(0.35, 0.95, 0.02);
      body.add(bag);
    }
  }

  group.scale.setScalar(height);
  addShadow(group, 0, 0, 0.62, true);

  group.userData = {
    kind: 'human',
    role,
    parts: { body, legL, legR, armL, armR, head, torso, hairCap },
    phase: Math.random() * Math.PI * 2,
    speed: 0,
    baseY: 0,
    accessory,
    shirtMat,
    pantsMat,
    hairMat,
    skinMat,
    shoeMat,
  };
  return group;
}

export function animateHuman(human, dt, speed = 0) {
  const data = human.userData;
  if (!data || data.kind !== 'human') return;
  const parts = data.parts;
  data.phase += dt * (2.8 + speed * 1.25);
  const moving = speed > 0.12;
  const swing = moving ? Math.sin(data.phase) * 0.55 : Math.sin(data.phase * 0.45) * 0.035;
  parts.legL.rotation.x = swing;
  parts.legR.rotation.x = -swing;
  parts.armL.rotation.x = -swing * 0.8;
  parts.armR.rotation.x = swing * 0.8;
  parts.body.position.y = moving ? Math.abs(Math.sin(data.phase * 2)) * 0.035 : Math.sin(data.phase * 0.5) * 0.008;
  parts.head.rotation.y = moving ? 0 : Math.sin(data.phase * 0.18) * 0.08;
}

export function applyStyle(human, style = {}) {
  const data = human.userData;
  if (!data?.parts) return;
  if (style.shirt) data.shirtMat.color.set(style.shirt);
  if (style.pants) data.pantsMat.color.set(style.pants);
  if (style.hair) data.hairMat.color.set(style.hair);
  if (data.shoeMat) data.shoeMat.color.set(style.accessory === 'sneakers' ? '#eef4f7' : '#191b22');
  if (style.accessory === 'shades') {
    if (!data.shades) {
      const shades = new THREE.Mesh(
        new THREE.BoxGeometry(0.3, 0.08, 0.06),
        new THREE.MeshStandardMaterial({ color: 0x111218, metalness: 0.6, roughness: 0.25 })
      );
      shades.position.set(0, 1.73, 0.21);
      data.parts.body.add(shades);
      data.shades = shades;
    }
    data.shades.visible = true;
  } else if (data.shades) {
    data.shades.visible = false;
  }
}

export function createCar({
  color = 0xe05a55,
  type = 'car',
  police = false,
  taxi = false,
  headlights = true,
} = {}) {
  const group = new THREE.Group();
  const paint = new THREE.MeshStandardMaterial({ color, metalness: 0.45, roughness: 0.28 });
  const glass = new THREE.MeshStandardMaterial({ color: 0x182a38, metalness: 0.6, roughness: 0.12 });
  const trim = new THREE.MeshStandardMaterial({ color: 0x12161d, roughness: 0.55 });
  const chrome = new THREE.MeshStandardMaterial({ color: 0xd8dde3, metalness: 0.85, roughness: 0.2 });
  const headMat = new THREE.MeshStandardMaterial({ color: 0xfff5cc, emissive: 0xffd88a, emissiveIntensity: 2.2 });
  const tailMat = new THREE.MeshStandardMaterial({ color: 0xff3c3c, emissive: 0xff1a1a, emissiveIntensity: 1.6 });

  let length = 4.2;
  let width = 1.86;
  if (type === 'scooter') {
    length = 1.7;
    width = 0.7;
    const base = new THREE.Mesh(new RoundedBoxGeometry(width, 0.35, length, 3, 0.1), paint);
    base.position.y = 0.55;
    group.add(base);
    const column = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.06, 0.8, 8), chrome);
    column.position.set(0, 0.85, 0.5);
    column.rotation.x = -0.18;
    group.add(column);
    const bar = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.05, 0.05), trim);
    bar.position.set(0, 1.18, 0.57);
    group.add(bar);
    for (const z of [-0.52, 0.58]) {
      const wheel = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 0.13, 12), trim);
      wheel.rotation.z = Math.PI / 2;
      wheel.position.set(0, 0.23, z);
      group.add(wheel);
    }
    const light = new THREE.Mesh(new THREE.SphereGeometry(0.08, 8, 6), headMat);
    light.position.set(0, 0.85, 0.85);
    group.add(light);
    addShadow(group, 0, 0, 0.7);
    group.userData = { kind: 'car', type, wheels: [], headMat, tailMat, paint, width, length };
    return group;
  }

  if (type === 'suv') {
    length = 4.8;
    width = 2.05;
  }

  const body = new THREE.Mesh(new RoundedBoxGeometry(width, 0.58, length, 4, 0.2), paint);
  body.position.y = 0.66;
  group.add(body);

  const hood = new THREE.Mesh(new RoundedBoxGeometry(width * 0.92, 0.18, length * 0.32, 3, 0.08), paint);
  hood.position.set(0, 0.98, length * 0.3);
  group.add(hood);

  const cabinLength = type === 'suv' ? 2.65 : 2.1;
  const cabinHeight = type === 'suv' ? 0.72 : 0.56;
  const cabin = new THREE.Mesh(new RoundedBoxGeometry(width * 0.84, cabinHeight, cabinLength, 4, 0.18), glass);
  cabin.position.set(0, 1.18, -0.18);
  group.add(cabin);

  const roof = new THREE.Mesh(new RoundedBoxGeometry(width * 0.8, 0.08, cabinLength * 0.88, 3, 0.03), paint);
  roof.position.set(0, 1.18 + cabinHeight / 2 + 0.02, -0.18);
  group.add(roof);

  const bumpF = new THREE.Mesh(new RoundedBoxGeometry(width * 0.98, 0.22, 0.22, 3, 0.06), trim);
  bumpF.position.set(0, 0.48, length / 2 - 0.05);
  group.add(bumpF);
  const bumpR = bumpF.clone();
  bumpR.position.z = -length / 2 + 0.05;
  group.add(bumpR);

  const wheels = [];
  for (const side of [-1, 1]) {
    for (const z of [-length * 0.31, length * 0.31]) {
      const wheel = new THREE.Group();
      const tire = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 0.25, 14), trim);
      tire.rotation.z = Math.PI / 2;
      wheel.add(tire);
      const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.19, 0.19, 0.26, 10), chrome);
      hub.rotation.z = Math.PI / 2;
      wheel.add(hub);
      wheel.position.set(side * (width / 2 - 0.03), 0.36, z);
      group.add(wheel);
      wheels.push(wheel);
    }
  }

  for (const side of [-1, 1]) {
    const head = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.16, 0.06), headMat);
    head.position.set(side * 0.58, 0.76, length / 2 + 0.01);
    group.add(head);
    const tail = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.14, 0.06), tailMat);
    tail.position.set(side * 0.62, 0.76, -length / 2 - 0.01);
    group.add(tail);
  }

  const plate = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.15, 0.03), new THREE.MeshStandardMaterial({ color: 0xf0f0e5 }));
  plate.position.set(0, 0.48, length / 2 + 0.12);
  group.add(plate);

  if (taxi) {
    const sign = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.22, 0.32), new THREE.MeshStandardMaterial({ color: 0xffcf4a, emissive: 0xffb300, emissiveIntensity: 1.2 }));
    sign.position.set(0, 1.64, -0.2);
    group.add(sign);
  }

  if (police) {
    const bar = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.12, 0.3), trim);
    bar.position.set(0, 1.62, -0.2);
    group.add(bar);
    const red = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.13, 0.26), new THREE.MeshStandardMaterial({ color: 0xff2b2b, emissive: 0xff0000, emissiveIntensity: 3 }));
    red.position.set(-0.3, 1.71, -0.2);
    group.add(red);
    const blue = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.13, 0.26), new THREE.MeshStandardMaterial({ color: 0x2b8bff, emissive: 0x0066ff, emissiveIntensity: 3 }));
    blue.position.set(0.3, 1.71, -0.2);
    group.add(blue);
    group.userData.policeLights = [red, blue];
  }

  // small glow under headlights at night
  if (headlights) {
    for (const side of [-1, 1]) {
      const glow = makeGlow(0xffd27a, 1.6, 0.4);
      glow.position.set(side * 0.58, 0.8, length / 2 + 0.12);
      group.add(glow);
    }
  }

  addShadow(group, 0, 0, type === 'suv' ? 1.65 : 1.35);

  group.userData = {
    kind: 'car',
    type,
    wheels,
    headMat,
    tailMat,
    paint,
    width,
    length,
    baseY: 0,
    police,
    taxi,
  };
  return group;
}

export function animateCar(car, speed = 0, dt = 0) {
  const data = car.userData;
  if (!data || data.kind !== 'car') return;
  for (const wheel of data.wheels || []) wheel.rotation.x += speed * dt * 1.7;
  if (data.policeLights) {
    const t = performance.now() * 0.006;
    data.policeLights[0].material.emissiveIntensity = 1.5 + Math.max(0, Math.sin(t)) * 3;
    data.policeLights[1].material.emissiveIntensity = 1.5 + Math.max(0, -Math.sin(t)) * 3;
  }
}

export function createPet(type = 'dog', color = 0xc28b5a) {
  const group = new THREE.Group();
  const fur = new THREE.MeshStandardMaterial({ color, roughness: 0.95 });
  const dark = new THREE.MeshStandardMaterial({ color: 0x2a211d, roughness: 0.8 });
  const small = type === 'cat' ? 0.62 : 1;
  const body = new THREE.Mesh(new THREE.SphereGeometry(0.3, 12, 9), fur);
  body.scale.set(0.75, 0.7, 1.25);
  body.position.y = 0.48 * small;
  group.add(body);

  const head = new THREE.Mesh(new THREE.SphereGeometry(0.22, 12, 9), fur);
  head.position.set(0, 0.63 * small, 0.4 * small);
  group.add(head);

  const snout = new THREE.Mesh(new THREE.SphereGeometry(0.13, 9, 7), fur);
  snout.position.set(0, 0.58 * small, 0.58 * small);
  snout.scale.set(1, 0.7, 1.2);
  group.add(snout);
  const nose = new THREE.Mesh(new THREE.SphereGeometry(0.04, 6, 5), dark);
  nose.position.set(0, 0.6 * small, 0.7 * small);
  group.add(nose);

  for (const side of [-1, 1]) {
    const ear = new THREE.Mesh(new THREE.ConeGeometry(0.1, 0.2, 5), fur);
    ear.position.set(side * 0.12, 0.79 * small, 0.38 * small);
    ear.rotation.z = side * 0.18;
    group.add(ear);
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.028, 5, 4), dark);
    eye.position.set(side * 0.08, 0.67 * small, 0.6 * small);
    group.add(eye);
  }

  const legs = [];
  for (const side of [-1, 1]) {
    for (const z of [-0.18, 0.18]) {
      const leg = new THREE.Group();
      leg.position.set(side * 0.16, 0.34 * small, z * small);
      const mesh = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.045, 0.33, 6), fur);
      mesh.position.y = -0.16;
      leg.add(mesh);
      group.add(leg);
      legs.push(leg);
    }
  }

  const tail = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.02, 0.42, 6), fur);
  tail.position.set(0, 0.6 * small, -0.4 * small);
  tail.rotation.x = type === 'cat' ? 1.1 : 0.6;
  group.add(tail);
  group.userData = { kind: 'pet', type, body, head, tail, legs, phase: Math.random() * 6 };
  group.scale.setScalar(small);
  addShadow(group, 0, 0, 0.42, true);
  return group;
}

export function animatePet(pet, dt, speed = 0) {
  const d = pet.userData;
  if (!d || d.kind !== 'pet') return;
  d.phase += dt * (4 + speed);
  const s = speed > 0.1 ? Math.sin(d.phase) * 0.5 : 0;
  d.legs[0].rotation.x = s;
  d.legs[1].rotation.x = -s;
  d.legs[2].rotation.x = -s;
  d.legs[3].rotation.x = s;
  d.tail.rotation.z = Math.sin(d.phase * 1.6) * 0.22;
  d.head.position.y += Math.sin(d.phase * 0.5) * 0.0005;
}

export function createTree(scale = 1, autumn = false) {
  const group = new THREE.Group();
  const trunkMat = new THREE.MeshStandardMaterial({ color: 0x5b4533, roughness: 1 });
  const leafMat = new THREE.MeshStandardMaterial({ color: autumn ? 0xc9793e : 0x4f8c57, roughness: 0.95 });
  const leafMat2 = new THREE.MeshStandardMaterial({ color: autumn ? 0xd99b55 : 0x6aa768, roughness: 0.95 });
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.16 * scale, 0.25 * scale, 2.2 * scale, 7), trunkMat);
  trunk.position.y = 1.1 * scale;
  group.add(trunk);
  const blobs = [
    [0, 2.7, 0, 1.15], [-0.55, 2.45, 0.2, 0.75], [0.55, 2.5, -0.15, 0.8], [0.1, 3.15, 0.2, 0.7],
  ];
  blobs.forEach(([x, y, z, s], i) => {
    const leaf = new THREE.Mesh(new THREE.IcosahedronGeometry(s * scale, 1), i % 2 ? leafMat2 : leafMat);
    leaf.position.set(x * scale, y * scale, z * scale);
    leaf.scale.y = 0.86;
    group.add(leaf);
  });
  addShadow(group, 0, 0, 1.1 * scale, true);
  return group;
}

export function createStreetlight() {
  const group = new THREE.Group();
  const poleMat = new THREE.MeshStandardMaterial({ color: 0x2a3038, metalness: 0.5, roughness: 0.5 });
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.1, 5.6, 7), poleMat);
  pole.position.y = 2.8;
  group.add(pole);
  const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 1.1, 6), poleMat);
  arm.rotation.z = Math.PI / 2;
  arm.position.set(0.5, 5.5, 0);
  group.add(arm);
  const lampMat = new THREE.MeshStandardMaterial({ color: 0xffe2a8, emissive: 0xffc46b, emissiveIntensity: 1.5 });
  const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.17, 8, 6), lampMat);
  lamp.position.set(1.02, 5.43, 0);
  group.add(lamp);
  const glow = makeGlow(0xffc46b, 2.4, 0.5);
  glow.position.copy(lamp.position);
  group.add(glow);
  group.userData = { kind: 'streetlight', lampMat, glow };
  return group;
}

export function createBench() {
  const group = new THREE.Group();
  const wood = new THREE.MeshStandardMaterial({ color: 0x8b6744, roughness: 0.9 });
  const metal = new THREE.MeshStandardMaterial({ color: 0x2a3038, metalness: 0.5, roughness: 0.5 });
  const seat = new THREE.Mesh(new THREE.BoxGeometry(1.9, 0.12, 0.55), wood);
  seat.position.y = 0.55;
  group.add(seat);
  const back = new THREE.Mesh(new THREE.BoxGeometry(1.9, 0.5, 0.1), wood);
  back.position.set(0, 0.86, -0.24);
  back.rotation.x = -0.12;
  group.add(back);
  for (const side of [-1, 1]) {
    const leg = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.55, 0.5), metal);
    leg.position.set(side * 0.78, 0.27, 0);
    group.add(leg);
  }
  return group;
}

export function createPlanter() {
  const group = new THREE.Group();
  const pot = new THREE.Mesh(new THREE.CylinderGeometry(0.48, 0.38, 0.55, 8), new THREE.MeshStandardMaterial({ color: 0x5f5a54, roughness: 0.95 }));
  pot.position.y = 0.27;
  group.add(pot);
  const bush = new THREE.Mesh(new THREE.IcosahedronGeometry(0.5, 1), new THREE.MeshStandardMaterial({ color: 0x5b965e, roughness: 0.95 }));
  bush.position.y = 0.8;
  bush.scale.y = 0.8;
  group.add(bush);
  return group;
}

export function createTrafficLight() {
  const group = new THREE.Group();
  const poleMat = new THREE.MeshStandardMaterial({ color: 0x252c34, metalness: 0.5, roughness: 0.5 });
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.09, 3.4, 7), poleMat);
  pole.position.y = 1.7;
  group.add(pole);
  const box = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.76, 0.24), new THREE.MeshStandardMaterial({ color: 0x181d23 }));
  box.position.y = 3.5;
  group.add(box);
  const lights = [];
  const colors = [0xff3d3d, 0xffc843, 0x4ee081];
  colors.forEach((c, i) => {
    const mat = new THREE.MeshStandardMaterial({ color: c, emissive: c, emissiveIntensity: i === 2 ? 1.5 : 0.1 });
    const light = new THREE.Mesh(new THREE.SphereGeometry(0.075, 7, 6), mat);
    light.position.set(0, 3.74 - i * 0.22, 0.14);
    box.add(light);
    lights.push(mat);
  });
  group.userData = { kind: 'trafficlight', lights };
  return group;
}

export function createBin() {
  const group = new THREE.Group();
  const body = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.24, 0.8, 8), new THREE.MeshStandardMaterial({ color: 0x3f5b50, roughness: 0.85 }));
  body.position.y = 0.4;
  group.add(body);
  const rim = new THREE.Mesh(new THREE.TorusGeometry(0.28, 0.035, 5, 10), new THREE.MeshStandardMaterial({ color: 0x232d2a }));
  rim.rotation.x = Math.PI / 2;
  rim.position.y = 0.81;
  group.add(rim);
  return group;
}
