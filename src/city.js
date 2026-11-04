import * as THREE from 'three';
import {
  GRID, PALETTE, BUSINESSES, SHIRTS, PANTS, SKINS, HAIRS, DIALOGUE, NAMES,
} from './data.js';
import {
  makeFacadeTexture, makeSignTexture, makeGlow, canvasTexture, seededRandom, clamp, pick,
} from './utils.js';
import {
  createHuman, animateHuman, createCar, animateCar, createTree, createStreetlight,
  createBench, createPlanter, createTrafficLight, createBin, addShadow, createPet, animatePet,
} from './entities.js';

const up = new THREE.Vector3(0, 1, 0);
const frontRotations = { south: 0, north: Math.PI, east: Math.PI / 2, west: -Math.PI / 2 };

export function buildCity(scene, { onShop, onTalk, onCar, onHome, onJobBoard }) {
  const world = new THREE.Group();
  world.name = 'Harbor City';
  scene.add(world);

  const colliders = [];
  const interactables = [];
  const buildings = [];
  const businessMap = new Map();
  const windowMaterials = [];
  const streetlightMats = [];
  const streetlightGlows = [];
  const neonMats = [];
  const traffic = [];
  const pedestrians = [];
  const workers = [];
  const strayPets = [];
  const parkedCars = [];
  const trafficLights = [];
  let ownedCarSpawns = [];

  const sun = new THREE.DirectionalLight(0xffd7a1, 2.2);
  sun.position.set(70, 110, 50);
  sun.castShadow = true;
  sun.shadow.mapSize.set(1536, 1536);
  sun.shadow.camera.near = 1;
  sun.shadow.camera.far = 320;
  sun.shadow.camera.left = -105;
  sun.shadow.camera.right = 105;
  sun.shadow.camera.top = 105;
  sun.shadow.camera.bottom = -105;
  sun.shadow.bias = -0.00025;
  sun.shadow.normalBias = 0.035;
  scene.add(sun);
  scene.add(sun.target);

  const hemi = new THREE.HemisphereLight(0xbcd8ef, 0x4a3f38, 1.1);
  scene.add(hemi);

  const sky = createSky(scene);
  const stars = createStars(scene);
  const fog = new THREE.FogExp2(0x9fb5c2, 0.0038);
  scene.fog = fog;
  scene.background = new THREE.Color(0x9fb5c2);

  buildGround(world);
  buildRoads(world, windowMaterials);
  buildSkyline(world, windowMaterials);

  BUSINESSES.forEach((business, index) => {
    const x = business.col * 60 - 120;
    const z = business.row * 60 - 120;
    const rot = frontRotations[business.front];
    const building = createBusinessBuilding(business, index, windowMaterials, neonMats);
    building.group.position.set(x, 0.18, z);
    building.group.rotation.y = rot;
    world.add(building.group);

    const footprint = business.front === 'east' || business.front === 'west'
      ? { w: business.size[1], d: business.size[0] }
      : { w: business.size[0], d: business.size[1] };
    const collider = {
      id: business.id,
      name: business.name,
      minX: x - footprint.w / 2,
      maxX: x + footprint.w / 2,
      minZ: z - footprint.d / 2,
      maxZ: z + footprint.d / 2,
    };
    colliders.push(collider);
    buildings.push({ ...business, x, z, rot, group: building.group, collider });
    businessMap.set(business.id, buildings[buildings.length - 1]);

    const doorLocal = new THREE.Vector3(0, 0, business.size[1] / 2 + 2.3);
    const doorWorld = doorLocal.clone().applyAxisAngle(up, rot).add(new THREE.Vector3(x, 0, z));
    const door = {
      id: `door-${business.id}`,
      type: 'shop',
      position: new THREE.Vector3(doorWorld.x, 0.2, doorWorld.z),
      radius: 3.1,
      label: business.interior ? `Enter ${business.name}` : `Knock on ${business.name}`,
      icon: business.interior ? '🚪' : '🔒',
      data: { businessId: business.id },
      handler: () => onShop(business.id),
    };
    interactables.push(door);

    // Outdoor staff gives the street a little life.
    if (['supermarket', 'cafe', 'clothing', 'salon', 'restaurant', 'bar', 'gym', 'hotel', 'petstore'].includes(business.type)) {
      const role = business.type === 'cafe' ? 'barista' : 'worker';
      const side = new THREE.Vector3(business.size[0] * 0.28, 0, business.size[1] / 2 + 1.4)
        .applyAxisAngle(up, rot).add(new THREE.Vector3(x, 0, z));
      const worker = createHuman({
        shirt: new THREE.Color(business.accent).getHex(),
        pants: 0x293241,
        skin: pick(SKINS),
        hair: pick(HAIRS),
        role,
        height: 0.98,
      });
      worker.position.set(side.x, 0.2, side.z);
      worker.rotation.y = rot + Math.PI + (Math.random() - 0.5) * 0.5;
      world.add(worker);
      workers.push(worker);
      interactables.push({
        id: `staff-${business.id}`,
        type: 'npc',
        position: new THREE.Vector3(side.x, 0.2, side.z),
        radius: 2.2,
        label: `Talk to ${pick(NAMES)}`,
        icon: '💬',
        data: { role: 'worker', businessId: business.id },
        handler: () => onTalk({ role: 'worker', businessId: business.id, name: pick(NAMES) }),
      });
    }

    if (business.type === 'police' || business.type === 'hospital') {
      const role = business.type === 'police' ? 'police' : 'doctor';
      const side = new THREE.Vector3(-business.size[0] * 0.31, 0, business.size[1] / 2 + 1.7)
        .applyAxisAngle(up, rot).add(new THREE.Vector3(x, 0, z));
      const officer = createHuman({
        shirt: role === 'police' ? 0x2b3b55 : 0xf2f3ef,
        pants: role === 'police' ? 0x1c2534 : 0x354b62,
        skin: pick(SKINS),
        hair: pick(HAIRS),
        role,
        height: 1,
      });
      officer.position.set(side.x, 0.2, side.z);
      officer.rotation.y = rot + Math.PI + (Math.random() - 0.5) * 0.4;
      world.add(officer);
      workers.push(officer);
      interactables.push({
        id: `staff-${business.id}`,
        type: 'npc',
        position: new THREE.Vector3(side.x, 0.2, side.z),
        radius: 2.2,
        label: role === 'police' ? 'Talk to Officer Reed' : 'Talk to Dr. Chen',
        icon: '💬',
        data: { role, name: role === 'police' ? 'Officer Reed' : 'Dr. Chen' },
        handler: () => onTalk({ role, name: role === 'police' ? 'Officer Reed' : 'Dr. Chen' }),
      });
    }

    if (business.id === 'jobcenter') {
      const boardPos = new THREE.Vector3(0, 0, business.size[1] / 2 + 2.4)
        .applyAxisAngle(up, rot).add(new THREE.Vector3(x, 0, z));
      interactables.push({
        id: 'job-board',
        type: 'jobboard',
        position: new THREE.Vector3(boardPos.x, 0.2, boardPos.z),
        radius: 3.2,
        label: 'Browse city jobs',
        icon: '💼',
        data: {},
        handler: onJobBoard,
      });
    }

    if (business.id === 'house') {
      // A special, more residential front garden.
      const yard = new THREE.Group();
      yard.position.copy(building.group.position);
      yard.rotation.y = rot;
      const lawn = new THREE.Mesh(new THREE.PlaneGeometry(39, 29), new THREE.MeshStandardMaterial({ color: 0x527f57, roughness: 1 }));
      lawn.rotation.x = -Math.PI / 2;
      lawn.position.y = -0.02;
      yard.add(lawn);
      const path = new THREE.Mesh(new THREE.PlaneGeometry(3.2, 9), new THREE.MeshStandardMaterial({ color: 0xbab1a2, roughness: 1 }));
      path.rotation.x = -Math.PI / 2;
      path.position.set(0, 0.01, 15.5);
      yard.add(path);
      world.add(yard);
    }
  });

  // The central park replaces the south-central block.
  buildPark(world);

  // Sidewalk trees and street furniture.
  buildStreetDetails(world, windowMaterials, streetlightMats, streetlightGlows, trafficLights);

  // Pedestrians on block-edge loops.
  const pedestrianBlocks = [
    [1, 2], [2, 2], [3, 2], [2, 3], [1, 3], [0, 2], [4, 2],
    [1, 1], [3, 1], [4, 1], [0, 3], [3, 3], [4, 3], [2, 4],
  ];
  pedestrianBlocks.forEach(([col, row], i) => {
    const count = i % 3 === 0 ? 2 : 1;
    for (let n = 0; n < count; n++) {
      const human = createHuman({
        shirt: pick(SHIRTS),
        pants: pick(PANTS),
        skin: pick(SKINS),
        hair: pick(HAIRS),
        role: 'pedestrian',
        height: 0.92 + Math.random() * 0.13,
      });
      const walker = {
        group: human,
        blockX: col * 60 - 120,
        blockZ: row * 60 - 120,
        segment: Math.floor(Math.random() * 4),
        t: Math.random(),
        speed: 1.1 + Math.random() * 0.75,
        offset: 19.2 + Math.random() * 1.4,
        phase: Math.random() * 10,
      };
      placePedestrian(walker);
      world.add(human);
      pedestrians.push(walker);
      if (Math.random() < 0.2) {
        const pet = createPet(Math.random() < 0.75 ? 'dog' : 'cat', Math.random() < 0.5 ? 0xc28b5a : 0xd9c1a3);
        pet.position.copy(human.position);
        world.add(pet);
        walker.pet = pet;
      }
    }
  });

  // Strays by the park.
  for (let i = 0; i < 4; i++) {
    const pet = createPet(i % 2 ? 'cat' : 'dog', i % 2 ? 0xd9c1a3 : 0x8a6649);
    const angle = Math.random() * Math.PI * 2;
    const radius = 7 + Math.random() * 12;
    pet.position.set(Math.cos(angle) * radius, 0.2, 120 + Math.sin(angle) * radius);
    pet.rotation.y = Math.random() * Math.PI * 2;
    world.add(pet);
    strayPets.push({ group: pet, phase: Math.random() * 10, center: pet.position.clone() });
  }

  // Traffic.
  for (let i = 0; i < 22; i++) {
    const isPolice = i === 2 || i === 15;
    const car = createCar({
      color: isPolice ? 0xf2f2ec : [0xd85b52, 0x4f95d9, 0xe8d6a4, 0x5b5f6d, 0x58b18b, 0xd38b4b, 0x8b6cb5][i % 7],
      type: i % 6 === 0 ? 'suv' : 'car',
      police: isPolice,
      taxi: !isPolice && i % 5 === 0,
    });
    const entry = makeTrafficEntry();
    car.position.copy(entry.position);
    car.rotation.y = entry.rotation;
    world.add(car);
    traffic.push({ group: car, ...entry });
  }

  // A couple of parked cars near the action, plus dealership display cars.
  addParkedCar(world, interactables, parkedCars, onCar, {
    x: 13, z: 21, rotation: Math.PI * 0.5, color: 0x3f8fca, type: 'car', label: 'Drive the blue hatchback',
  });
  addParkedCar(world, interactables, parkedCars, onCar, {
    x: -13, z: 20, rotation: -Math.PI * 0.5, color: 0xe7d7b3, type: 'suv', label: 'Drive the cream SUV',
  });
  addParkedCar(world, interactables, parkedCars, onCar, {
    x: 48, z: 44, rotation: Math.PI, color: 0xef5b55, type: 'car', label: 'Drive the red coupe',
  });
  addParkedCar(world, interactables, parkedCars, onCar, {
    x: 55, z: 44, rotation: Math.PI, color: 0x66b7e8, type: 'car', label: 'Drive the blue compact',
  });

  // A welcome arch / street sign at the start.
  createWelcomeSign(world);

  function makeTrafficEntry(seed = Math.random()) {
    const rnd = seededRandom(Math.floor(seed * 1e9));
    const axis = rnd() < 0.5 ? 'x' : 'z';
    const dir = rnd() < 0.5 ? 1 : -1;
    const roadIndex = Math.floor(rnd() * 6);
    const laneOffset = 3.3;
    let from;
    let to;
    if (axis === 'x') {
      const z = GRID.roads[roadIndex] + (dir > 0 ? laneOffset : -laneOffset);
      const startX = dir > 0 ? -165 : 165;
      const endX = dir > 0 ? 165 : -165;
      from = new THREE.Vector3(startX, 0, z);
      to = new THREE.Vector3(endX, 0, z);
    } else {
      const x = GRID.roads[roadIndex] + (dir > 0 ? -laneOffset : laneOffset);
      const startZ = dir > 0 ? -165 : 165;
      const endZ = dir > 0 ? 165 : -165;
      from = new THREE.Vector3(x, 0, startZ);
      to = new THREE.Vector3(x, 0, endZ);
    }
    return {
      from,
      to,
      position: from.clone(),
      rotation: Math.atan2(to.x - from.x, to.z - from.z),
      speed: 7.5 + rnd() * 4.5,
      progress: rnd() * 0.8,
      axis,
      dir,
      laneOffset,
    };
  }

  function updateTraffic(dt) {
    for (const car of traffic) {
      car.progress += (car.speed * dt) / Math.max(1, car.from.distanceTo(car.to));
      if (car.progress >= 1) {
        car.progress = 0;
        // Turn onto a crossing street at the edge of the loop.
        car.from.copy(car.to);
        const atEdgeX = Math.abs(car.to.x) > 160;
        const atEdgeZ = Math.abs(car.to.z) > 160;
        if (atEdgeX || atEdgeZ || Math.random() < 0.22) {
          if (car.axis === 'x') {
            car.axis = 'z';
            const dir = Math.random() < 0.5 ? 1 : -1;
            const lane = car.from.x + (dir > 0 ? -car.laneOffset : car.laneOffset);
            car.from.x = lane;
            car.to.set(lane, 0, dir > 0 ? 165 : -165);
            car.dir = dir;
          } else {
            car.axis = 'x';
            const dir = Math.random() < 0.5 ? 1 : -1;
            const lane = car.from.z + (dir > 0 ? car.laneOffset : -car.laneOffset);
            car.from.z = lane;
            car.to.set(dir > 0 ? 165 : -165, 0, lane);
            car.dir = dir;
          }
        }
      }
      car.position.lerpVectors(car.from, car.to, car.progress);
      car.rotation = Math.atan2(car.to.x - car.from.x, car.to.z - car.from.z);
      car.group.position.copy(car.position);
      car.group.rotation.y = car.rotation;
      animateCar(car.group, car.speed, dt);
    }
  }

  function updatePedestrians(dt) {
    for (const walker of pedestrians) {
      walker.t += (walker.speed * dt) / 38;
      if (walker.t >= 1) {
        walker.t = 0;
        walker.segment = (walker.segment + 1) % 4;
        if (Math.random() < 0.18) walker.segment = (walker.segment + 3) % 4;
      }
      placePedestrian(walker);
      animateHuman(walker.group, dt, walker.speed);
      if (walker.pet) {
        const px = walker.group.position.x - Math.sin(walker.group.rotation.y) * 0.9;
        const pz = walker.group.position.z - Math.cos(walker.group.rotation.y) * 0.9;
        walker.pet.position.lerp(new THREE.Vector3(px, 0.2, pz), 1 - Math.pow(0.001, dt));
        walker.pet.rotation.y = walker.group.rotation.y;
        animatePet(walker.pet, dt, walker.speed);
      }
    }
    for (const stray of strayPets) {
      stray.phase += dt;
      animatePet(stray.group, dt, 0.4);
      stray.group.position.y = 0.2 + Math.sin(stray.phase * 1.5) * 0.015;
    }
    for (const worker of workers) animateHuman(worker, dt, 0);
  }

  function updateEnvironment(timeMinutes, playerPos) {
    const t = ((timeMinutes % 1440) + 1440) % 1440;
    const sunAngle = ((t - 360) / 1440) * Math.PI * 2;
    const sunHeight = Math.sin(sunAngle);
    const daylight = clamp(sunHeight * 1.5 + 0.12, 0, 1);
    const night = 1 - daylight;
    const sunset = Math.max(0, 1 - Math.abs(sunHeight) * 3.4) * (t > 300 && t < 1020 ? 1 : 0.4);

    const sunDir = new THREE.Vector3(Math.cos(sunAngle) * 0.85, Math.max(0.05, sunHeight), 0.5).normalize();
    sun.position.copy(sunDir).multiplyScalar(150).add(new THREE.Vector3(playerPos.x, 0, playerPos.z));
    sun.target.position.set(playerPos.x, 0, playerPos.z);
    sun.intensity = 0.15 + daylight * 2.5;
    sun.color.setHSL(0.09 + sunset * 0.02, 0.55, 0.62 + daylight * 0.18);
    hemi.intensity = 0.18 + daylight * 0.95;
    hemi.color.setHSL(0.55, 0.35, 0.5 + daylight * 0.3);
    hemi.groundColor.setHSL(0.07, 0.2, 0.1 + daylight * 0.16);

    sky.update({ daylight, sunset, sunDir });
    stars.material.opacity = night * 0.75;
    stars.visible = night > 0.04;
    stars.position.copy(playerPos);

    const fogColor = new THREE.Color().setHSL(0.56, 0.22, 0.12 + daylight * 0.55);
    fog.color.copy(fogColor);
    scene.background.copy(fogColor);
    fog.density = 0.0038 + night * 0.0015;

    const glow = 0.12 + night * 1.15;
    for (const mat of windowMaterials) mat.emissiveIntensity = glow;
    for (const mat of neonMats) mat.emissiveIntensity = 0.7 + night * 1.5;
    for (const mat of streetlightMats) mat.emissiveIntensity = 0.35 + night * 2.2;
    for (const sprite of streetlightGlows) sprite.material.opacity = 0.12 + night * 0.55;
    for (const light of trafficLights) {
      light.lights.forEach((mat, i) => {
        const active = Math.floor(t / 0.35) % 3 === i;
        mat.emissiveIntensity = active ? 2.3 : 0.08;
      });
    }
    return { daylight, night, sunHeight };
  }

  function update(dt, timeMinutes, playerPos) {
    updateTraffic(dt);
    updatePedestrians(dt);
    return updateEnvironment(timeMinutes, playerPos);
  }

  return {
    world, buildings, businessMap, colliders, interactables, traffic, pedestrians, parkedCars,
    trafficLights, streetlightMats, windowMaterials, sun, hemi, sky,
    update,
    getBuilding: (id) => businessMap.get(id),
    spawnOwnedCar(vehicle) {
      const car = createCar({ color: vehicle.color, type: vehicle.type === 'scooter' ? 'scooter' : 'car', taxi: vehicle.type === 'taxi' });
      const spot = new THREE.Vector3(43 + ownedCarSpawns.length * 6.5, 0.2, 41.5 + (ownedCarSpawns.length % 2) * 2.6);
      car.position.copy(spot);
      car.rotation.y = Math.PI;
      world.add(car);
      ownedCarSpawns.push(car);
      const entry = {
        id: `owned-${vehicle.id}-${ownedCarSpawns.length}`,
        type: 'car',
        position: spot.clone(),
        radius: 2.8,
        label: `Drive ${vehicle.name}`,
        icon: '🚗',
        data: { carGroup: car, vehicle },
        handler: () => onCar(car, vehicle),
      };
      interactables.push(entry);
      return { car, entry };
    },
  };
}

function placePedestrian(walker) {
  const o = walker.offset;
  const corners = [
    new THREE.Vector2(-o, -o),
    new THREE.Vector2(o, -o),
    new THREE.Vector2(o, o),
    new THREE.Vector2(-o, o),
  ];
  const a = corners[walker.segment];
  const b = corners[(walker.segment + 1) % 4];
  const x = walker.blockX + a.x + (b.x - a.x) * walker.t;
  const z = walker.blockZ + a.y + (b.y - a.y) * walker.t;
  walker.group.position.set(x, 0.2, z);
  walker.group.rotation.y = Math.atan2(b.x - a.x, b.y - a.y);
}

function addParkedCar(world, interactables, parkedCars, onCar, { x, z, rotation, color, type, label }) {
  const car = createCar({ color, type });
  car.position.set(x, 0.2, z);
  car.rotation.y = rotation;
  world.add(car);
  parkedCars.push(car);
  const entry = {
    id: `parked-${x}-${z}`,
    type: 'car',
    position: new THREE.Vector3(x, 0.2, z),
    radius: 3.0,
    label,
    icon: '🚗',
    data: { carGroup: car, vehicle: null },
    handler: () => onCar(car, null),
  };
  interactables.push(entry);
  return car;
}

function createSky(scene) {
  const uniforms = {
    topColor: { value: new THREE.Color(0x345f9c) },
    bottomColor: { value: new THREE.Color(0xffc98b) },
    sunColor: { value: new THREE.Color(0xffd7a1) },
    sunDir: { value: new THREE.Vector3(0.4, 0.6, 0.2) },
    offset: { value: 12 },
  };
  const material = new THREE.ShaderMaterial({
    uniforms,
    side: THREE.BackSide,
    depthWrite: false,
    fog: false,
    vertexShader: `
      varying vec3 vWorld;
      void main() {
        vWorld = (modelMatrix * vec4(position, 1.0)).xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 topColor;
      uniform vec3 bottomColor;
      uniform vec3 sunColor;
      uniform vec3 sunDir;
      varying vec3 vWorld;
      void main() {
        vec3 dir = normalize(vWorld);
        float h = smoothstep(-0.15, 0.7, dir.y);
        vec3 col = mix(bottomColor, topColor, h);
        float horizon = pow(1.0 - abs(dir.y), 8.0);
        col += sunColor * horizon * 0.2;
        float sun = pow(max(dot(dir, normalize(sunDir)), 0.0), 180.0);
        col += sunColor * sun * 1.4;
        gl_FragColor = vec4(col, 1.0);
      }
    `,
  });
  const sky = new THREE.Mesh(new THREE.SphereGeometry(750, 32, 20), material);
  sky.frustumCulled = false;
  scene.add(sky);
  sky.update = ({ daylight, sunset, sunDir }) => {
    uniforms.sunDir.value.copy(sunDir);
    const dayTop = new THREE.Color(0x2e5c95);
    const dayBottom = new THREE.Color(0xb8d5df);
    const duskTop = new THREE.Color(0x2b2d5e);
    const duskBottom = new THREE.Color(0xff9d62);
    const nightTop = new THREE.Color(0x050914);
    const nightBottom = new THREE.Color(0x172439);
    const top = new THREE.Color().copy(nightTop).lerp(dayTop, daylight);
    const bottom = new THREE.Color().copy(nightBottom).lerp(dayBottom, daylight);
    if (sunset > 0.05) {
      top.lerp(duskTop, sunset * 0.5);
      bottom.lerp(duskBottom, sunset * 0.8);
    }
    uniforms.topColor.value.copy(top);
    uniforms.bottomColor.value.copy(bottom);
    uniforms.sunColor.value.setHSL(0.07 + daylight * 0.03, 0.8, 0.65);
  };
  return sky;
}

function createStars(scene) {
  const count = 650;
  const geo = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);
  const rnd = seededRandom(321);
  for (let i = 0; i < count; i++) {
    const theta = rnd() * Math.PI * 2;
    const phi = Math.acos(rnd() * 0.85);
    const r = 580;
    positions[i * 3] = Math.sin(phi) * Math.cos(theta) * r;
    positions[i * 3 + 1] = Math.cos(phi) * r + 30;
    positions[i * 3 + 2] = Math.sin(phi) * Math.sin(theta) * r;
  }
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const mat = new THREE.PointsMaterial({
    color: 0xfff3d0, size: 1.8, transparent: true, opacity: 0, depthWrite: false, sizeAttenuation: true,
  });
  const points = new THREE.Points(geo, mat);
  points.frustumCulled = false;
  scene.add(points);
  return points;
}

function buildGround(world) {
  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(900, 900),
    new THREE.MeshStandardMaterial({ color: 0x303b3b, roughness: 1 })
  );
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = -0.12;
  ground.receiveShadow = true;
  world.add(ground);

  const cityBase = new THREE.Mesh(
    new THREE.PlaneGeometry(360, 360),
    new THREE.MeshStandardMaterial({ color: 0x2c3038, roughness: 1 })
  );
  cityBase.rotation.x = -Math.PI / 2;
  cityBase.position.y = -0.07;
  cityBase.receiveShadow = true;
  world.add(cityBase);
}

function buildRoads(world, windowMaterials) {
  const roadMat = new THREE.MeshStandardMaterial({ color: PALETTE.asphalt, roughness: 0.96 });
  const sidewalkMat = new THREE.MeshStandardMaterial({ color: PALETTE.sidewalk, roughness: 0.95 });
  const curbMat = new THREE.MeshStandardMaterial({ color: PALETTE.curb, roughness: 0.9 });

  for (const x of GRID.roads) {
    const road = new THREE.Mesh(new THREE.PlaneGeometry(GRID.roadWidth, 360), roadMat);
    road.rotation.x = -Math.PI / 2;
    road.position.set(x, 0, 0);
    road.receiveShadow = true;
    world.add(road);
  }
  for (const z of GRID.roads) {
    const road = new THREE.Mesh(new THREE.PlaneGeometry(360, GRID.roadWidth), roadMat);
    road.rotation.x = -Math.PI / 2;
    road.position.set(0, 0, z);
    road.receiveShadow = true;
    world.add(road);
  }

  // Blocks and sidewalks.
  for (const cx of GRID.centers) {
    for (const cz of GRID.centers) {
      if (cx === 0 && cz === 120) continue; // park handles this block
      const sidewalk = new THREE.Mesh(new THREE.BoxGeometry(GRID.block, 0.18, GRID.block), sidewalkMat);
      sidewalk.position.set(cx, 0.09, cz);
      sidewalk.receiveShadow = true;
      world.add(sidewalk);

      const curb = new THREE.Mesh(new THREE.BoxGeometry(GRID.block + 0.6, 0.08, GRID.block + 0.6), curbMat);
      curb.position.set(cx, 0.04, cz);
      world.add(curb);

      // expansion lines on the sidewalk
      const lineMat = new THREE.MeshBasicMaterial({ color: 0x656c76, transparent: true, opacity: 0.55 });
      for (let i = -1; i <= 1; i += 2) {
        const line = new THREE.Mesh(new THREE.PlaneGeometry(0.08, GRID.block - 2), lineMat);
        line.rotation.x = -Math.PI / 2;
        line.position.set(cx + i * 14, 0.185, cz);
        world.add(line);
      }
    }
  }

  // Lane markings.
  const dashGeo = new THREE.BoxGeometry(0.13, 0.02, 3.1);
  const yellowGeo = new THREE.BoxGeometry(0.11, 0.02, 4.6);
  const dashMat = new THREE.MeshBasicMaterial({ color: 0xf1eee3, transparent: true, opacity: 0.7 });
  const yellowMat = new THREE.MeshBasicMaterial({ color: 0xf0c95a, transparent: true, opacity: 0.8 });
  for (const x of GRID.roads) {
    for (let z = -170; z < 170; z += 8) {
      for (const side of [-1, 1]) {
        const dash = new THREE.Mesh(dashGeo, dashMat);
        dash.position.set(x + side * 4.1, 0.015, z);
        world.add(dash);
      }
      const y1 = new THREE.Mesh(yellowGeo, yellowMat);
      y1.position.set(x - 0.16, 0.016, z);
      world.add(y1);
      const y2 = new THREE.Mesh(yellowGeo, yellowMat);
      y2.position.set(x + 0.16, 0.016, z);
      world.add(y2);
    }
  }
  for (const z of GRID.roads) {
    for (let x = -170; x < 170; x += 8) {
      for (const side of [-1, 1]) {
        const dash = new THREE.Mesh(new THREE.BoxGeometry(3.1, 0.02, 0.13), dashMat);
        dash.position.set(x, 0.015, z + side * 4.1);
        world.add(dash);
      }
      const y1 = new THREE.Mesh(new THREE.BoxGeometry(4.6, 0.02, 0.11), yellowMat);
      y1.position.set(x, 0.016, z - 0.16);
      world.add(y1);
      const y2 = new THREE.Mesh(new THREE.BoxGeometry(4.6, 0.02, 0.11), yellowMat);
      y2.position.set(x, 0.016, z + 0.16);
      world.add(y2);
    }
  }

  // Crosswalks at every intersection.
  const stripeMat = new THREE.MeshBasicMaterial({ color: 0xf2efe6, transparent: true, opacity: 0.82 });
  const stripeGeoV = new THREE.BoxGeometry(0.75, 0.025, 4.2);
  const stripeGeoH = new THREE.BoxGeometry(4.2, 0.025, 0.75);
  for (const x of GRID.roads) {
    for (const z of GRID.roads) {
      for (const side of [-1, 1]) {
        for (let i = -3; i <= 3; i++) {
          const v = new THREE.Mesh(stripeGeoV, stripeMat);
          v.position.set(x + i * 1.1, 0.03, z + side * (GRID.roadWidth / 2 + 3.0));
          world.add(v);
          const h = new THREE.Mesh(stripeGeoH, stripeMat);
          h.position.set(x + side * (GRID.roadWidth / 2 + 3.0), 0.03, z + i * 1.1);
          world.add(h);
        }
      }
    }
  }
}

function buildSkyline(world, windowMaterials) {
  const rnd = seededRandom(8855);
  const baseMat = new THREE.MeshStandardMaterial({ color: 0x586674, roughness: 0.9 });
  for (let i = 0; i < 34; i++) {
    const angle = (i / 34) * Math.PI * 2 + rnd() * 0.1;
    const radius = 210 + rnd() * 130;
    const w = 14 + rnd() * 26;
    const d = 14 + rnd() * 26;
    const h = 20 + rnd() * 80;
    const { diffuse, emissive } = makeFacadeTexture({
      base: '#67717c', accent: '#ffc46b', cols: 4, rows: Math.max(5, Math.floor(h / 7)), seed: i + 400, lit: 0.22,
    });
    const mat = new THREE.MeshStandardMaterial({
      map: diffuse, emissiveMap: emissive, emissive: 0xffffff, emissiveIntensity: 0.2, roughness: 0.9,
    });
    windowMaterials.push(mat);
    const tower = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
    tower.position.set(Math.cos(angle) * radius, h / 2 - 2, Math.sin(angle) * radius);
    tower.rotation.y = rnd() * Math.PI;
    world.add(tower);
    if (rnd() < 0.35) {
      const top = new THREE.Mesh(new THREE.BoxGeometry(w * 0.5, 6 + rnd() * 8, d * 0.5), baseMat);
      top.position.set(tower.position.x, h + 3, tower.position.z);
      top.rotation.y = tower.rotation.y;
      world.add(top);
    }
  }
}

function createBusinessBuilding(business, index, windowMaterials, neonMats) {
  const group = new THREE.Group();
  const [w, d] = business.size;
  const h = business.height;
  const color = new THREE.Color(business.color);
  const accent = new THREE.Color(business.accent);
  const isHouse = business.type === 'house';
  const isMall = business.type === 'mall';
  const isTower = h > 18;

  const facade = makeFacadeTexture({
    base: business.color,
    accent: business.accent,
    cols: isTower ? 6 : 5,
    rows: Math.max(3, business.floors * 2),
    seed: index + 12,
    lit: 0.28 + (business.floors % 3) * 0.06,
    style: isTower ? 'lux' : 'grid',
  });
  const facadeMat = new THREE.MeshStandardMaterial({
    map: facade.diffuse,
    emissiveMap: facade.emissive,
    emissive: 0xffffff,
    emissiveIntensity: 0.2,
    roughness: 0.82,
    metalness: 0.06,
  });
  windowMaterials.push(facadeMat);
  const roofMat = new THREE.MeshStandardMaterial({ color: color.clone().offsetHSL(0, 0, -0.08), roughness: 0.9 });
  const mats = [facadeMat, facadeMat, roofMat, roofMat, facadeMat, facadeMat];

  const baseHeight = isHouse ? h : 4.3;
  const massHeight = Math.max(1, h - baseHeight);
  if (!isHouse) {
    const mass = new THREE.Mesh(new THREE.BoxGeometry(w, massHeight, d), mats);
    mass.position.y = baseHeight + massHeight / 2;
    mass.castShadow = true;
    mass.receiveShadow = true;
    group.add(mass);

    if (isMall) {
      // Horizontal glass bands and a glass atrium.
      const bandMat = new THREE.MeshStandardMaterial({ color: 0x2b3b44, emissive: 0x5d8b91, emissiveIntensity: 0.5, metalness: 0.5, roughness: 0.18 });
      for (let i = 1; i <= 3; i++) {
        const band = new THREE.Mesh(new THREE.BoxGeometry(w + 0.2, 0.22, d + 0.2), bandMat);
        band.position.y = 4.3 + i * 5.1;
        group.add(band);
      }
      const glassMat = new THREE.MeshStandardMaterial({
        color: 0x9ad3d8, transparent: true, opacity: 0.55, metalness: 0.5, roughness: 0.1,
        emissive: 0x5a8e93, emissiveIntensity: 0.35,
      });
      const glass = new THREE.Mesh(new THREE.BoxGeometry(w * 0.62, 13.5, 0.35), glassMat);
      glass.position.set(0, 11.4, d / 2 + 0.14);
      group.add(glass);
      for (let i = -3; i <= 3; i++) {
        const fin = new THREE.Mesh(new THREE.BoxGeometry(0.13, 13.5, 0.5), new THREE.MeshStandardMaterial({ color: 0x8f9ba2, metalness: 0.6, roughness: 0.3 }));
        fin.position.set(i * (w * 0.62 / 7), 11.4, d / 2 + 0.34);
        group.add(fin);
      }
      const canopy = new THREE.Mesh(new THREE.BoxGeometry(w * 0.55, 0.18, 4.3), new THREE.MeshStandardMaterial({ color: 0x333c47, metalness: 0.5, roughness: 0.3 }));
      canopy.position.set(0, 4.35, d / 2 + 2.1);
      group.add(canopy);
      const canopyGlow = new THREE.Mesh(new THREE.BoxGeometry(w * 0.53, 0.04, 4.1), new THREE.MeshBasicMaterial({ color: 0xffc98c, transparent: true, opacity: 0.55 }));
      canopyGlow.position.set(0, 4.24, d / 2 + 2.1);
      group.add(canopyGlow);
      // Big rooftop sign.
      const roofSignMat = new THREE.MeshBasicMaterial({
        map: makeSignTexture('HARBOR MALL', { color: '#ffe6b9', bg: '#17202c', accent: '#ff8a5b', sub: 'SHOP  ·  EAT  ·  STAY', width: 1024, height: 220 }),
        transparent: true, depthWrite: false,
      });
      neonMats.push(roofSignMat);
      const roofSign = new THREE.Mesh(new THREE.PlaneGeometry(22, 4.6), roofSignMat);
      roofSign.position.set(0, 21.3, d / 2 + 0.18);
      group.add(roofSign);
      const signFrame = new THREE.Mesh(new THREE.BoxGeometry(22.6, 5.1, 0.2), new THREE.MeshStandardMaterial({ color: 0x1c242f, metalness: 0.4, roughness: 0.4 }));
      signFrame.position.set(0, 21.3, d / 2 + 0.08);
      group.add(signFrame);
    }

    if (isTower) {
      const topW = w * 0.58;
      const topD = d * 0.6;
      const top = new THREE.Mesh(new THREE.BoxGeometry(topW, 5.5, topD), roofMat);
      top.position.y = h + 2.75;
      top.castShadow = true;
      group.add(top);
      const antenna = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.13, 7, 6), new THREE.MeshStandardMaterial({ color: 0x2e3540, metalness: 0.7, roughness: 0.4 }));
      antenna.position.y = h + 9;
      group.add(antenna);
      const beacon = new THREE.Mesh(new THREE.SphereGeometry(0.22, 8, 6), new THREE.MeshStandardMaterial({ color: 0xff4e4e, emissive: 0xff2222, emissiveIntensity: 2.5 }));
      beacon.position.y = h + 12.5;
      group.add(beacon);
    } else {
      const parapet = new THREE.Mesh(new THREE.BoxGeometry(w + 0.4, 0.6, d + 0.4), roofMat);
      parapet.position.y = h + 0.25;
      group.add(parapet);
      for (let i = 0; i < 2; i++) {
        const ac = new THREE.Mesh(new THREE.BoxGeometry(2.2, 1, 2.2), new THREE.MeshStandardMaterial({ color: 0x707a82, metalness: 0.4, roughness: 0.6 }));
        ac.position.set((i - 0.5) * 5, h + 1.1, -d * 0.18);
        group.add(ac);
      }
    }
  }

  // Street-level storefront.
  const glassMat = new THREE.MeshStandardMaterial({
    color: 0x5b8790,
    emissive: accent,
    emissiveIntensity: 0.38,
    metalness: 0.25,
    roughness: 0.18,
    transparent: true,
    opacity: 0.82,
  });
  neonMats.push(glassMat);

  if (isHouse) {
    const walls = new THREE.Mesh(new THREE.BoxGeometry(w * 0.82, 6.2, d * 0.8), mats);
    walls.position.y = 3.2;
    walls.castShadow = true;
    walls.receiveShadow = true;
    group.add(walls);
    const roofMat2 = new THREE.MeshStandardMaterial({ color: 0x6c4d3c, roughness: 0.95 });
    for (const side of [-1, 1]) {
      const roof = new THREE.Mesh(new THREE.BoxGeometry(w * 0.88, 0.24, d * 0.52), roofMat2);
      roof.position.set(0, 7.1, side * d * 0.2);
      roof.rotation.x = side * -0.55;
      roof.castShadow = true;
      group.add(roof);
    }
    const chimney = new THREE.Mesh(new THREE.BoxGeometry(0.8, 2.2, 0.8), new THREE.MeshStandardMaterial({ color: 0x8b6a54 }));
    chimney.position.set(w * 0.28, 8.1, -d * 0.18);
    group.add(chimney);
    const porch = new THREE.Mesh(new THREE.BoxGeometry(w * 0.55, 0.16, 3.2), new THREE.MeshStandardMaterial({ color: 0x8a6a4c }));
    porch.position.set(0, 0.45, d * 0.58);
    group.add(porch);
    for (const side of [-1, 1]) {
      const post = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.13, 2.8, 7), new THREE.MeshStandardMaterial({ color: 0xe6ddcc }));
      post.position.set(side * w * 0.22, 1.75, d * 0.68);
      group.add(post);
    }
    const door = new THREE.Mesh(new THREE.BoxGeometry(1.7, 2.7, 0.14), new THREE.MeshStandardMaterial({ color: 0x3d6a66, roughness: 0.55 }));
    door.position.set(0, 1.55, d * 0.41);
    group.add(door);
    for (const side of [-1, 1]) {
      const windowMat = new THREE.MeshStandardMaterial({ color: 0x38545c, emissive: 0xffc46b, emissiveIntensity: 0.45, roughness: 0.2 });
      const window = new THREE.Mesh(new THREE.BoxGeometry(2.5, 1.9, 0.1), windowMat);
      window.position.set(side * w * 0.26, 3.4, d * 0.41);
      group.add(window);
    }
    addShadow(group, 0, 0, 2.2, true);
    addStoreSign(group, business, w, d, 6.5, neonMats);
    return { group };
  }

  // Glass panels and mullions for the ground floor.
  const glassW = Math.min(w * 0.72, 17);
  const storeGlass = new THREE.Mesh(new THREE.BoxGeometry(glassW, 2.9, 0.12), glassMat);
  storeGlass.position.set(0, 2.15, d / 2 + 0.06);
  group.add(storeGlass);
  const mullionMat = new THREE.MeshStandardMaterial({ color: 0x2b323b, metalness: 0.5, roughness: 0.45 });
  for (let i = -2; i <= 2; i++) {
    const mullion = new THREE.Mesh(new THREE.BoxGeometry(0.1, 3.1, 0.16), mullionMat);
    mullion.position.set(i * glassW / 4.6, 2.15, d / 2 + 0.14);
    group.add(mullion);
  }
  const sill = new THREE.Mesh(new THREE.BoxGeometry(glassW + 0.5, 0.22, 0.3), new THREE.MeshStandardMaterial({ color: 0x9a9389, roughness: 0.8 }));
  sill.position.set(0, 0.55, d / 2 + 0.1);
  group.add(sill);

  const door = new THREE.Mesh(new THREE.BoxGeometry(2.1, 2.9, 0.14), new THREE.MeshStandardMaterial({
    color: 0x2c4650, metalness: 0.3, roughness: 0.2, emissive: 0x27444b, emissiveIntensity: 0.4,
  }));
  door.position.set(0, 1.9, d / 2 + 0.17);
  group.add(door);
  const handle = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.5, 0.06), new THREE.MeshStandardMaterial({ color: 0xe9c875, metalness: 0.8, roughness: 0.2 }));
  handle.position.set(0.55, 1.9, d / 2 + 0.25);
  group.add(handle);

  const canopy = new THREE.Mesh(new THREE.BoxGeometry(glassW + 1.1, 0.14, 1.6), new THREE.MeshStandardMaterial({ color: 0x2b323b, metalness: 0.5, roughness: 0.35 }));
  canopy.position.set(0, 3.8, d / 2 + 0.75);
  group.add(canopy);
  const canopyStrip = new THREE.Mesh(new THREE.BoxGeometry(glassW + 0.8, 0.04, 1.4), new THREE.MeshBasicMaterial({ color: accent, transparent: true, opacity: 0.65 }));
  canopyStrip.position.set(0, 3.72, d / 2 + 0.75);
  group.add(canopyStrip);
  const canopyGlow = makeGlow(accent, 4.2, 0.25);
  canopyGlow.position.set(0, 3.0, d / 2 + 1.2);
  group.add(canopyGlow);

  addStoreSign(group, business, w, d, 5.25, neonMats);
  addShadow(group, 0, 0, Math.max(w, d) * 0.42, true);

  // Extra facade trim, giving the boxes more of a designed silhouette.
  const trimMat = new THREE.MeshStandardMaterial({ color: 0x3d454e, metalness: 0.4, roughness: 0.5 });
  const ledge = new THREE.Mesh(new THREE.BoxGeometry(w + 0.6, 0.18, d + 0.6), trimMat);
  ledge.position.y = 4.35;
  group.add(ledge);

  return { group };
}

function addStoreSign(group, business, w, d, y, neonMats) {
  const signW = Math.min(w * 0.62, 10.5);
  const signH = signW * 0.2;
  const signMat = new THREE.MeshBasicMaterial({
    map: makeSignTexture(business.name, {
      color: business.signColor, bg: '#131923', accent: business.accent,
      sub: business.category, width: 1024, height: 220,
    }),
    transparent: true, depthWrite: false,
  });
  neonMats.push(signMat);
  const sign = new THREE.Mesh(new THREE.PlaneGeometry(signW, signH), signMat);
  sign.position.set(0, y, d / 2 + 0.22);
  group.add(sign);

  const back = new THREE.Mesh(new THREE.BoxGeometry(signW + 0.35, signH + 0.35, 0.18), new THREE.MeshStandardMaterial({ color: 0x171c24, roughness: 0.6 }));
  back.position.set(0, y, d / 2 + 0.12);
  group.add(back);

  const glow = makeGlow(business.accent, signW * 0.75, 0.25);
  glow.position.set(0, y, d / 2 + 0.4);
  group.add(glow);

  if (business.height > 17) {
    const vertText = business.name.toUpperCase().replace(/\s+/g, '\n');
    const vertMat = new THREE.MeshBasicMaterial({
      map: makeSignTexture(business.short, { color: business.signColor, bg: '#121822', accent: business.accent, width: 256, height: 640 }),
      transparent: true, depthWrite: false,
    });
    neonMats.push(vertMat);
    const vert = new THREE.Mesh(new THREE.PlaneGeometry(2.1, 5.2), vertMat);
    vert.position.set(w / 2 + 0.02, y + 6.5, d / 2 - 1.8);
    vert.rotation.y = Math.PI / 2;
    group.add(vert);
  }
}

function buildStreetDetails(world, windowMaterials, streetlightMats, streetlightGlows, trafficLights) {
  const rnd = seededRandom(5521);
  const blockCenters = GRID.centers;
  for (const cx of blockCenters) {
    for (const cz of blockCenters) {
      if (cx === 0 && cz === 120) continue;
      // corner trees, alternating.
      if ((cx + cz) % 120 !== 0 || rnd() < 0.55) {
        const tree = createTree(0.85 + rnd() * 0.45, rnd() < 0.2);
        tree.position.set(cx + (rnd() < 0.5 ? -19 : 19), 0.2, cz + (rnd() < 0.5 ? -19 : 19));
        world.add(tree);
      }
      // streetlight at one corner
      const light = createStreetlight();
      light.position.set(cx + 20.5, 0.2, cz - 20.5);
      light.rotation.y = Math.PI * 0.75;
      world.add(light);
      streetlightMats.push(light.userData.lampMat);
      streetlightGlows.push(light.userData.glow);
      const bin = createBin();
      bin.position.set(cx - 18.5, 0.2, cz + 19.5);
      world.add(bin);
    }
  }

  // Planters and benches around the mall and along the main street.
  for (const [x, z] of [[-14, 17], [14, 17], [-14, 43], [14, 43], [-4, 17], [4, 17]]) {
    const planter = createPlanter();
    planter.position.set(x, 0.2, z);
    world.add(planter);
  }
  for (const [x, z, rot] of [[-20, 12, 0], [20, 12, 0], [-20, 42, Math.PI], [20, 42, Math.PI], [0, 100, Math.PI / 2], [-12, 128, 0], [12, 128, Math.PI]]) {
    const bench = createBench();
    bench.position.set(x, 0.2, z);
    bench.rotation.y = rot;
    world.add(bench);
  }

  // Traffic lights around the central intersections.
  for (const x of [-90, -30, 30, 90]) {
    for (const z of [-90, -30, 30, 90]) {
      const light = createTrafficLight();
      light.position.set(x + 8.5, 0.2, z + 8.5);
      world.add(light);
      trafficLights.push(light.userData);
    }
  }

  // Rooftop billboards on a few towers.
  const billboards = [
    { x: -60, z: -120, rot: 0, text: 'HARBOR CITY', sub: 'OPEN ALL NIGHT', accent: '#58e6d2' },
    { x: 60, z: -120, rot: 0, text: 'VOLT', sub: 'DRIVE THE CURRENT', accent: '#4fd8ff' },
    { x: 120, z: 120, rot: Math.PI, text: 'GLOW', sub: 'SELF CARE CLUB', accent: '#b78bff' },
  ];
  billboards.forEach((b, i) => {
    const mat = new THREE.MeshBasicMaterial({
      map: makeSignTexture(b.text, { color: '#fff2d7', bg: '#111722', accent: b.accent, sub: b.sub, width: 1024, height: 280 }),
      transparent: true, depthWrite: false,
    });
    windowMaterials.push(mat);
    const sign = new THREE.Mesh(new THREE.PlaneGeometry(16, 4.4), mat);
    sign.position.set(b.x, 26 + i * 2, b.z);
    sign.rotation.y = b.rot;
    world.add(sign);
    const frame = new THREE.Mesh(new THREE.BoxGeometry(16.5, 4.9, 0.2), new THREE.MeshStandardMaterial({ color: 0x1b222c }));
    frame.position.set(b.x, 26 + i * 2, b.z + (b.rot ? 0.1 : -0.1));
    frame.rotation.y = b.rot;
    world.add(frame);
  });
}

function buildPark(world) {
  const cx = 0;
  const cz = 120;
  const base = new THREE.Mesh(new THREE.BoxGeometry(44, 0.2, 44), new THREE.MeshStandardMaterial({ color: PALETTE.grass, roughness: 1 }));
  base.position.set(cx, 0.1, cz);
  base.receiveShadow = true;
  world.add(base);

  const pathMat = new THREE.MeshStandardMaterial({ color: 0xc5b79e, roughness: 1 });
  const path1 = new THREE.Mesh(new THREE.PlaneGeometry(4, 42), pathMat);
  path1.rotation.x = -Math.PI / 2;
  path1.position.set(cx, 0.22, cz);
  world.add(path1);
  const path2 = new THREE.Mesh(new THREE.PlaneGeometry(42, 4), pathMat);
  path2.rotation.x = -Math.PI / 2;
  path2.position.set(cx, 0.22, cz);
  world.add(path2);

  const fountainBase = new THREE.Mesh(new THREE.CylinderGeometry(4.2, 4.6, 0.7, 20), new THREE.MeshStandardMaterial({ color: 0xb6ada0, roughness: 0.85 }));
  fountainBase.position.set(cx, 0.55, cz);
  world.add(fountainBase);
  const water = new THREE.Mesh(new THREE.CylinderGeometry(3.6, 3.6, 0.18, 20), new THREE.MeshStandardMaterial({ color: 0x58b8c9, metalness: 0.2, roughness: 0.12, transparent: true, opacity: 0.85 }));
  water.position.set(cx, 0.95, cz);
  world.add(water);
  const column = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.5, 2.6, 10), new THREE.MeshStandardMaterial({ color: 0xb6ada0 }));
  column.position.set(cx, 2.1, cz);
  world.add(column);
  const top = new THREE.Mesh(new THREE.SphereGeometry(0.55, 12, 9), new THREE.MeshStandardMaterial({ color: 0x58b8c9, metalness: 0.3, roughness: 0.15 }));
  top.position.set(cx, 3.5, cz);
  world.add(top);

  const rnd = seededRandom(919);
  for (let i = 0; i < 13; i++) {
    const angle = rnd() * Math.PI * 2;
    const radius = 8 + rnd() * 12;
    const x = cx + Math.cos(angle) * radius;
    const z = cz + Math.sin(angle) * radius;
    if (Math.abs(x - cx) < 3.5 || Math.abs(z - cz) < 3.5) continue;
    const tree = createTree(0.8 + rnd() * 0.55, rnd() < 0.25);
    tree.position.set(x, 0.22, z);
    world.add(tree);
  }

  for (const [x, z, rot] of [[-7, 111, 0], [7, 111, 0], [-7, 129, Math.PI], [7, 129, Math.PI], [-13, 120, Math.PI / 2], [13, 120, -Math.PI / 2]]) {
    const bench = createBench();
    bench.position.set(x, 0.22, z);
    bench.rotation.y = rot;
    world.add(bench);
  }

  // Picnic blanket detail.
  const blanket = new THREE.Mesh(new THREE.PlaneGeometry(4, 3), new THREE.MeshStandardMaterial({ color: 0xd35b55, roughness: 1 }));
  blanket.rotation.x = -Math.PI / 2;
  blanket.rotation.z = 0.3;
  blanket.position.set(-10, 0.23, 112);
  world.add(blanket);
}

function createWelcomeSign(world) {
  const mat = new THREE.MeshBasicMaterial({
    map: makeSignTexture('HARBOR CITY', { color: '#fff0cc', bg: '#111722', accent: '#58e6d2', sub: 'A CITY THAT NEVER SITS STILL', width: 1024, height: 260 }),
    transparent: true, depthWrite: false,
  });
  const sign = new THREE.Mesh(new THREE.PlaneGeometry(11, 2.8), mat);
  sign.position.set(-21, 7.2, 21.8);
  sign.rotation.y = 0.25;
  world.add(sign);
  const frame = new THREE.Mesh(new THREE.BoxGeometry(11.5, 3.3, 0.2), new THREE.MeshStandardMaterial({ color: 0x151b24 }));
  frame.position.set(-21, 7.2, 21.6);
  frame.rotation.y = 0.25;
  world.add(frame);
  const glow = makeGlow(0x58e6d2, 7, 0.25);
  glow.position.set(-21, 7.2, 22);
  world.add(glow);
}
