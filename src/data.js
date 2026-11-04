export const GRID = {
  roads: [-150, -90, -30, 30, 90, 150],
  centers: [-120, -60, 0, 60, 120],
  block: 44,
  roadWidth: 16,
  cityHalf: 172,
};

export const PALETTE = {
  asphalt: 0x242936,
  asphaltLight: 0x2d3340,
  sidewalk: 0x8a909b,
  sidewalkDark: 0x707784,
  curb: 0xb4b8bd,
  grass: 0x4d7856,
  glass: 0x7fc4cf,
  warm: 0xffc46b,
  cyan: 0x58e6d2,
  coral: 0xff7c6b,
  violet: 0x9a7cff,
};

export const BUSINESSES = [
  {
    id: 'mall', name: 'Harbor Mall', short: 'MALL', type: 'mall', category: 'Shopping',
    col: 2, row: 2, front: 'south', size: [42, 30], height: 22, floors: 3,
    color: '#d8c6ad', accent: '#ff8a5b', signColor: '#ffd7a2',
    tagline: 'Three floors. One hundred ways to treat yourself.',
    interior: 'mall', landmark: true,
  },
  {
    id: 'supermarket', name: 'FreshMart', short: 'MART', type: 'supermarket', category: 'Food & Groceries',
    col: 3, row: 2, front: 'west', size: [34, 26], height: 9, floors: 2,
    color: '#d6e0d4', accent: '#57c785', signColor: '#b8ffcd',
    tagline: 'Fresh food, cold drinks, and late-night snacks.',
    interior: 'supermarket',
  },
  {
    id: 'clothing', name: 'Threadline', short: 'WEAR', type: 'clothing', category: 'Fashion',
    col: 1, row: 2, front: 'east', size: [30, 24], height: 12, floors: 3,
    color: '#e5c8c0', accent: '#ff6f91', signColor: '#ffc2d4',
    tagline: 'Streetwear with a little downtown polish.',
    interior: 'clothing',
  },
  {
    id: 'salon', name: 'Glow Salon', short: 'GLOW', type: 'salon', category: 'Self Care',
    col: 0, row: 2, front: 'east', size: [24, 20], height: 8, floors: 2,
    color: '#cfc3e8', accent: '#b78bff', signColor: '#e5d4ff',
    tagline: 'A fresh cut, a hot towel, a better day.',
    interior: 'salon',
  },
  {
    id: 'restaurant', name: 'The Copper Spoon', short: 'EAT', type: 'restaurant', category: 'Dining',
    col: 4, row: 2, front: 'west', size: [30, 24], height: 10, floors: 2,
    color: '#d9aa7f', accent: '#ff9e58', signColor: '#ffe1b3',
    tagline: 'Comfort food and a window seat on Harbor Street.',
    interior: 'restaurant',
  },
  {
    id: 'bar', name: 'The Velvet Room', short: 'BAR', type: 'bar', category: 'Nightlife',
    col: 2, row: 3, front: 'north', size: [28, 22], height: 11, floors: 2,
    color: '#4c4665', accent: '#d46bff', signColor: '#eab6ff',
    tagline: 'Low lights, good music, and a very long cocktail list.',
    interior: 'bar',
  },
  {
    id: 'gym', name: 'Iron Harbor', short: 'GYM', type: 'gym', category: 'Fitness',
    col: 1, row: 3, front: 'north', size: [34, 26], height: 13, floors: 2,
    color: '#5b6676', accent: '#ffd34d', signColor: '#fff1a8',
    tagline: 'Train hard. The skyline does not lift itself.',
    interior: 'gym',
  },
  {
    id: 'hotel', name: 'Harborview Hotel', short: 'HOTEL', type: 'hotel', category: 'Stay',
    col: 4, row: 1, front: 'west', size: [30, 28], height: 31, floors: 9,
    color: '#c2b59e', accent: '#ffc46b', signColor: '#ffe7ba',
    tagline: 'Rooms above the city lights.',
    interior: 'hotel', landmark: true,
  },
  {
    id: 'dealership', name: 'Volt Motors', short: 'AUTO', type: 'dealership', category: 'Vehicles',
    col: 3, row: 3, front: 'north', size: [36, 26], height: 10, floors: 2,
    color: '#b9c6d4', accent: '#4fd8ff', signColor: '#bdefff',
    tagline: 'Electric, classic, and everything between.',
    interior: 'dealership',
  },
  {
    id: 'realestate', name: 'Key & Stone', short: 'HOME', type: 'realestate', category: 'Homes',
    col: 4, row: 3, front: 'north', size: [26, 22], height: 9, floors: 2,
    color: '#c9d0b9', accent: '#8fd46a', signColor: '#dcffbc',
    tagline: 'Find your corner of Harbor City.',
    interior: 'realestate',
  },
  {
    id: 'petstore', name: 'Paws & Co.', short: 'PETS', type: 'petstore', category: 'Pets',
    col: 0, row: 1, front: 'east', size: [26, 22], height: 8, floors: 2,
    color: '#ead6b7', accent: '#ffad5c', signColor: '#ffe1b0',
    tagline: 'Adopt a friend. Buy the good treats.',
    interior: 'petstore',
  },
  {
    id: 'jobcenter', name: 'CityWorks', short: 'JOBS', type: 'jobcenter', category: 'Work',
    col: 3, row: 1, front: 'west', size: [30, 24], height: 12, floors: 3,
    color: '#b7c9d4', accent: '#59b8ff', signColor: '#c3e8ff',
    tagline: 'A city runs on people who show up.',
    interior: 'jobcenter',
  },
  {
    id: 'hospital', name: 'Harbor General', short: 'HOSP', type: 'hospital', category: 'Health',
    col: 1, row: 0, front: 'south', size: [36, 28], height: 24, floors: 6,
    color: '#d8e2e5', accent: '#ff6b78', signColor: '#ffc4ca',
    tagline: 'Open twenty-four hours.',
    interior: 'hospital', landmark: true,
  },
  {
    id: 'police', name: '9th Precinct', short: 'POLICE', type: 'police', category: 'Civic',
    col: 2, row: 0, front: 'south', size: [32, 26], height: 17, floors: 4,
    color: '#8a98a8', accent: '#4b8dff', signColor: '#bfd6ff',
    tagline: 'Keeping Harbor City moving.',
    interior: 'police',
  },
  {
    id: 'cafe', name: 'Byte Café', short: 'CAFÉ', type: 'cafe', category: 'Coffee',
    col: 0, row: 3, front: 'north', size: [24, 20], height: 8, floors: 2,
    color: '#b9a58f', accent: '#ffb45c', signColor: '#ffe0b0',
    tagline: 'Strong coffee. Fast Wi-Fi. Soft jazz.',
    interior: 'cafe',
  },
  {
    id: 'house', name: 'Maple House', short: 'HOME', type: 'house', category: 'Residence',
    col: 3, row: 4, front: 'south', size: [30, 20], height: 8, floors: 2,
    color: '#d4b48d', accent: '#8fd46a', signColor: '#fff0cf',
    tagline: 'A little porch, a little yard, a lot of quiet.',
    interior: 'house', residential: true,
  },
  {
    id: 'apartments', name: 'Bayview Apartments', short: 'APT', type: 'residential', category: 'Residence',
    col: 1, row: 4, front: 'south', size: [30, 24], height: 25, floors: 7,
    color: '#c7b7a6', accent: '#ffb46b', signColor: '#ffe4c4',
    tagline: 'Home is a view of the water.',
  },
  {
    id: 'arcade', name: 'Seaside Arcade', short: 'PLAY', type: 'arcade', category: 'Fun',
    col: 0, row: 4, front: 'north', size: [24, 20], height: 8, floors: 2,
    color: '#7b6bb0', accent: '#ff5cb8', signColor: '#ffb8ed',
    tagline: 'Tokens, neon, and one more round.',
  },
  {
    id: 'library', name: 'Harbor Library', short: 'LIB', type: 'library', category: 'Civic',
    col: 0, row: 0, front: 'south', size: [28, 24], height: 12, floors: 3,
    color: '#c9c2ad', accent: '#7fd4c4', signColor: '#d4fff7',
    tagline: 'Quietly open to everyone.',
  },
  {
    id: 'techhub', name: 'Meridian Tower', short: 'TECH', type: 'office', category: 'Business',
    col: 2, row: 1, front: 'south', size: [32, 26], height: 39, floors: 12,
    color: '#aab6c5', accent: '#54d7ff', signColor: '#c8f4ff',
    tagline: 'Ideas at altitude.',
  },
  {
    id: 'tower1', name: 'Northline', short: 'N', type: 'office', category: 'Business',
    col: 3, row: 0, front: 'south', size: [30, 24], height: 34, floors: 10,
    color: '#9ca9ba', accent: '#ffca72', signColor: '#ffe1ae',
    tagline: 'The north side, rising.',
  },
  {
    id: 'tower2', name: 'Marina Tower', short: 'M', type: 'office', category: 'Business',
    col: 4, row: 4, front: 'north', size: [30, 26], height: 43, floors: 13,
    color: '#b3bdc9', accent: '#69e3cb', signColor: '#c8fff3',
    tagline: 'Harbor City at your feet.',
  },
  {
    id: 'tower3', name: 'Civic Hall', short: 'CIVIC', type: 'office', category: 'Civic',
    col: 4, row: 0, front: 'west', size: [28, 24], height: 29, floors: 8,
    color: '#c2c7c9', accent: '#ffb36b', signColor: '#ffe3bf',
    tagline: 'A city with a long memory.',
  },
];

export const SHOP_ITEMS = {
  supermarket: [
    { id: 'burger', name: 'Harbor Burger', icon: '🍔', price: 9, desc: 'Hot, messy, perfect.', effect: { hunger: 42, mood: 5 } },
    { id: 'salad', name: 'Green Bowl', icon: '🥗', price: 8, desc: 'Crisp greens and lemon dressing.', effect: { hunger: 30, health: 5 } },
    { id: 'energy', name: 'Volt Energy', icon: '⚡', price: 5, desc: 'Tastes like a lightning storm.', effect: { energy: 35, health: -2 } },
    { id: 'water', name: 'Spring Water', icon: '💧', price: 2, desc: 'Cold, clean, reliable.', effect: { hunger: 6, hygiene: 3 } },
    { id: 'petfood', name: 'Pet Food', icon: '🦴', price: 7, desc: 'For the four-legged roommate.', effect: { pet: 25 } },
    { id: 'flowers', name: 'Wildflowers', icon: '💐', price: 12, desc: 'A small bright thing for your place.', effect: { mood: 12 }, item: 'flowers' },
  ],
  clothing: [
    { id: 'jacket', name: 'Harbor Bomber', icon: '🧥', price: 85, desc: 'Water-resistant, city-approved.', style: { shirt: '#e86b4f', pants: '#293241', accessory: 'none' } },
    { id: 'tee', name: 'Neon Tee', icon: '👕', price: 32, desc: 'A little loud. On purpose.', style: { shirt: '#38c9b0', pants: '#2d3340', accessory: 'none' } },
    { id: 'jeans', name: 'Relaxed Jeans', icon: '👖', price: 48, desc: 'Soft denim with room to move.', style: { shirt: '#f2c14e', pants: '#3a4d72', accessory: 'none' } },
    { id: 'sneakers', name: 'Cloudstep Sneakers', icon: '👟', price: 65, desc: 'You will feel the difference.', style: { shirt: '#f3f1ea', pants: '#2a2d36', accessory: 'sneakers' } },
    { id: 'shades', name: 'Sunset Shades', icon: '🕶️', price: 42, desc: 'For looking effortlessly unbothered.', style: { shirt: '#8f7cf6', pants: '#23252c', accessory: 'shades' } },
    { id: 'dress', name: 'After Hours Dress', icon: '👗', price: 120, desc: 'Made for a night on Harbor Street.', style: { shirt: '#c45a86', pants: '#1e2028', accessory: 'none' } },
  ],
  salon: [
    { id: 'cut', name: 'Fresh Cut', icon: '✂️', price: 35, desc: 'A clean shape and a hot towel.', effect: { hygiene: 35, mood: 12 }, style: { hair: '#3a2a24' } },
    { id: 'color', name: 'Color Pop', icon: '🎨', price: 70, desc: 'Copper, teal, or something bolder.', effect: { hygiene: 30, mood: 20 }, style: { hair: '#d87a4b' } },
    { id: 'spa', name: 'Glow Spa', icon: '🧖', price: 95, desc: 'Steam, scrub, and silence.', effect: { hygiene: 65, mood: 25, energy: 15 } },
    { id: 'shave', name: 'Hot Towel Shave', icon: '🪒', price: 28, desc: 'A proper reset.', effect: { hygiene: 25, mood: 10 } },
  ],
  restaurant: [
    { id: 'spoonburger', name: 'Copper Burger', icon: '🍔', price: 16, desc: 'House sauce, crispy onions.', effect: { hunger: 55, mood: 8 } },
    { id: 'pasta', name: 'Midnight Pasta', icon: '🍝', price: 19, desc: 'Rich, slow-cooked, worth it.', effect: { hunger: 65, mood: 10 } },
    { id: 'coffee', name: 'Pour Over', icon: '☕', price: 5, desc: 'A little clarity in a cup.', effect: { energy: 22 } },
    { id: 'cake', name: 'Lemon Cake', icon: '🍰', price: 9, desc: 'Sharp, sweet, gone too fast.', effect: { hunger: 20, mood: 14 } },
  ],
  bar: [
    { id: 'cocktail', name: 'Velvet Hour', icon: '🍸', price: 14, desc: 'The house cocktail. Ask no questions.', effect: { mood: 22, energy: -8 } },
    { id: 'beer', name: 'Harbor Lager', icon: '🍺', price: 8, desc: 'Cold local lager.', effect: { mood: 12, energy: -4 } },
    { id: 'mocktail', name: 'Zero Tide', icon: '🍹', price: 7, desc: 'All the ceremony, none of the proof.', effect: { mood: 10, hunger: 5 } },
    { id: 'wings', name: 'Late Wings', icon: '🍗', price: 13, desc: 'Sticky, spicy, shared.', effect: { hunger: 38, mood: 7 } },
  ],
  gym: [
    { id: 'daypass', name: 'Day Pass', icon: '🎟️', price: 18, desc: 'One session, all equipment.', effect: { energy: -15, mood: 15, health: 8 } },
    { id: 'membership', name: 'Monthly Membership', icon: '🏋️', price: 85, desc: 'Train whenever you like.', unlock: 'gym', effect: { mood: 12 } },
    { id: 'shake', name: 'Protein Shake', icon: '🥤', price: 9, desc: 'Banana, cocoa, ambition.', effect: { hunger: 20, health: 5 } },
    { id: 'trainer', name: 'Personal Training', icon: '💪', price: 60, desc: 'Someone to count the last three.', effect: { energy: -20, health: 12, mood: 20 } },
  ],
  hotel: [
    { id: 'nap', name: 'Power Nap', icon: '🛌', price: 45, desc: 'Two hours. Fresh sheets.', effect: { energy: 35, hygiene: 10 }, hours: 2 },
    { id: 'room', name: 'City View Room', icon: '🏨', price: 120, desc: 'Sleep until morning.', effect: { energy: 100, hygiene: 25, mood: 20 }, sleep: true },
    { id: 'suite', name: 'Harbor Suite', icon: '🌃', price: 240, desc: 'Top floor, breakfast included.', effect: { energy: 100, hygiene: 40, mood: 35 }, sleep: true },
  ],
  mall: [
    { id: 'hoodie', name: 'Midnight Hoodie', icon: '🧥', price: 58, desc: 'Soft fleece for late walks.', style: { shirt: '#34304a', pants: '#22242c', accessory: 'none' } },
    { id: 'headphones', name: 'Wave Headphones', icon: '🎧', price: 95, desc: 'The city, with your own soundtrack.', item: 'headphones', effect: { mood: 8 } },
    { id: 'watch', name: 'Chrono Watch', icon: '⌚', price: 140, desc: 'You will be on time. Probably.', item: 'watch', effect: { mood: 10 } },
    { id: 'lamp', name: 'Glow Lamp', icon: '🛋️', price: 45, desc: 'A warm corner for your place.', item: 'lamp', effect: { mood: 6 } },
    { id: 'gift', name: 'Little Gift', icon: '🎁', price: 20, desc: 'For someone, or for later.', item: 'gift', effect: { mood: 10 } },
    { id: 'phonecase', name: 'Harbor Case', icon: '📱', price: 25, desc: 'A tiny piece of the city.', item: 'phonecase' },
  ],
  dealership: [
    { id: 'car_scooter', name: 'Mint Scooter', icon: '🛵', price: 650, desc: 'Cheap, nimble, slightly embarrassing.', vehicle: { id: 'scooter', name: 'Mint Scooter', color: 0x74e3b3, speed: 15, type: 'scooter' } },
    { id: 'car_compact', name: 'Pebble Compact', icon: '🚗', price: 1800, desc: 'Small car, big city energy.', vehicle: { id: 'compact', name: 'Pebble Compact', color: 0x66b7e8, speed: 24, type: 'car' } },
    { id: 'car_sport', name: 'Kite GT', icon: '🏎️', price: 5200, desc: 'Low, loud, and extremely fun.', vehicle: { id: 'sport', name: 'Kite GT', color: 0xf05b55, speed: 36, type: 'car' } },
    { id: 'car_suv', name: 'Ridge SUV', icon: '🚙', price: 3900, desc: 'Room for friends and groceries.', vehicle: { id: 'suv', name: 'Ridge SUV', color: 0xe4d7bd, speed: 27, type: 'car' } },
    { id: 'car_taxi', name: 'Harbor Cab', icon: '🚕', price: 2600, desc: 'The city will assume you are working.', vehicle: { id: 'taxi', name: 'Harbor Cab', color: 0xffcf4a, speed: 26, type: 'taxi' } },
  ],
  realestate: [
    { id: 'house_maple', name: 'Maple House', icon: '🏡', price: 8500, desc: 'Two bedrooms, a porch, and a yard in the south district.', house: true },
  ],
  petstore: [
    { id: 'dog', name: 'Adopt a Dog', icon: '🐕', price: 140, desc: 'A scruffy little best friend.', pet: { type: 'dog', name: 'Biscuit', color: 0xc28b5a } },
    { id: 'cat', name: 'Adopt a Cat', icon: '🐈', price: 110, desc: 'Independent, warm, secretly affectionate.', pet: { type: 'cat', name: 'Miso', color: 0xd9c1a3 } },
    { id: 'petfood', name: 'Good Pet Food', icon: '🦴', price: 7, desc: 'Tail-wagging quality.', effect: { pet: 30 } },
    { id: 'toy', name: 'Squeaky Toy', icon: '🧸', price: 9, desc: 'Instant chaos. Worth it.', effect: { pet: 15, mood: 5 } },
  ],
  cafe: [
    { id: 'latte', name: 'Oat Latte', icon: '☕', price: 5, desc: 'Silky, warm, dependable.', effect: { energy: 24, mood: 4 } },
    { id: 'coldbrew', name: 'Cold Brew', icon: '🧊', price: 6, desc: 'A cool, focused kind of awake.', effect: { energy: 32 } },
    { id: 'croissant', name: 'Butter Croissant', icon: '🥐', price: 4, desc: 'Flaky layers, no regrets.', effect: { hunger: 22, mood: 6 } },
    { id: 'sandwich', name: 'Breakfast Sandwich', icon: '🥪', price: 8, desc: 'Egg, cheese, green chile.', effect: { hunger: 38 } },
  ],
  hospital: [
    { id: 'checkup', name: 'Quick Checkup', icon: '🩺', price: 45, desc: 'A doctor will patch you up.', effect: { health: 60 } },
    { id: 'full', name: 'Full Treatment', icon: '💉', price: 110, desc: 'Everything, checked and fixed.', effect: { health: 100, energy: 20 } },
    { id: 'flu', name: 'Flu Shot', icon: '🩹', price: 20, desc: 'A tiny pinch, a safer season.', effect: { health: 12 } },
  ],
  police: [],
  jobcenter: [],
  arcade: [],
  library: [],
  office: [],
  residential: [],
  house: [],
};

export const JOBS = {
  courier: {
    id: 'courier', name: 'Courier Rush', icon: '📦', color: '#ffb45c',
    pay: 185, timer: 240,
    desc: 'Pick up a package at Byte Café and run it to Maple House. The city rewards speed.',
    steps: [
      { label: 'Collect package from Byte Café', x: -118, z: 45, place: 'Byte Café' },
      { label: 'Deliver package to Maple House', x: 60, z: 136, place: 'Maple House' },
    ],
  },
  taxi: {
    id: 'taxi', name: 'Night Cab', icon: '🚕', color: '#ffd34d',
    pay: 240, timer: 260, needsCar: true,
    desc: 'Pick up a fare outside the mall and drive them across town. Smooth driving pays better.',
    steps: [
      { label: 'Pick up fare at Harbor Mall', x: 0, z: 19, place: 'Harbor Mall' },
      { label: 'Drop off at Harborview Hotel', x: 104, z: -60, place: 'Harborview Hotel' },
    ],
  },
  barista: {
    id: 'barista', name: 'Café Shift', icon: '☕', color: '#8fd46a',
    pay: 130, timer: 180,
    desc: 'Take the counter at Byte Café. Match five orders before the rush ends.',
    steps: [
      { label: 'Report to the counter at Byte Café', x: -118, z: 45, place: 'Byte Café' },
    ],
  },
};

export const DIALOGUE = {
  police: [
    'Keep your wheels on the road and your feet on the pavement.',
    'Nothing to report tonight. That is exactly how I like it.',
    'Harbor City is quiet. Enjoy it while it lasts.',
  ],
  doctor: [
    'You look tired. Water, food, sleep. In that order.',
    'The clinic is open all night if you need us.',
    'Take care of yourself out there.',
  ],
  worker: [
    'Welcome in. Take your time.',
    'Everything on the shelves is fresh today.',
    'Let me know if you need a hand.',
  ],
  pedestrian: [
    'Beautiful evening, huh?',
    'Have you been to the new mall yet?',
    'I am just out for a walk.',
    'The café on the corner makes the best cold brew.',
    'Traffic gets wild around five. Watch yourself.',
    'I heard Maple House is for sale.',
  ],
  driver: [
    'Hop in if you need a ride.',
    'Keep the city moving.',
  ],
};

export const NAMES = [
  'Mara', 'Jonah', 'Iris', 'Theo', 'Nia', 'Felix', 'Sana', 'Owen', 'Rae', 'Miles',
  'Lena', 'Kai', 'June', 'Ellis', 'Tara', 'Noah', 'Vera', 'Sam', 'Ada', 'Leo',
  'Priya', 'Dante', 'Mina', 'Rory', 'Cleo', 'Ash', 'Nora', 'Eli', 'Zuri', 'Finn',
];

export const SHIRTS = [0xe86b4f, 0x4fa3e8, 0x9a7cff, 0xf2c14e, 0x38c9b0, 0xf3f1ea, 0xd45a86, 0x5f6b7a, 0x7acb6a, 0xff9e58];
export const PANTS = [0x293241, 0x3a4d72, 0x2d3340, 0x555b66, 0x6b4c3b, 0x1f2430];
export const SKINS = [0xf0c6a3, 0xd9a273, 0xb97b4f, 0x8b5a3c, 0x5f3d2b, 0xe8b98f];
export const HAIRS = [0x2a211d, 0x4a3426, 0x7a5232, 0xc89a5a, 0x161616, 0xd87a4b, 0x6d6d6d];

export const TIME = {
  dayNames: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
  startMinutes: 16 * 60 + 20,
};
