export type Game = {
  slug: string;
  title: string;
  description: string;
  controls: string[];
  category: string;
  embedUrl: string;
  image: string;
  tags: string[];
};

export const games: Game[] = [
  {
    slug: 'two-stunt-supercars',
    title: 'Two Stunt Supercars',
    description: 'Skid the wheel of a stunning supercar through 3 awesome game modes and showcase your driving skills. Customize your car according to your taste and drive in style with the roaring engines. Feel the heat in 2 player mode where you go head to head with your friend in 2 amazing game modes! Are you ready to conquer the stunt city? Prove yourself with Two Stunt Racers!',
    controls: [
      'Player 1:',
      'W,A,S,D: Drive/Steer/Brake',
      'Player 2:',
      'Arrow Keys: Drive/Steer/Brake'
    ],
    category: 'Racing & Driving',
    embedUrl: 'https://html5.gamedistribution.com/b57c15d037024b798c2e80efbca087cc/',
    image: 'https://img.gamedistribution.com/b57c15d037024b798c2e80efbca087cc-512x384.jpg',
    tags: ['racing-driving', 'two', 'stunt', 'supercars']
  },
  {
    slug: 'scala-40',
    title: 'Scala 40',
    description: 'Scala 40 is an Italian card game played with two French decks and jokers. Players form sets and runs to reach at least 40 points and lay down their first combinations. Each turn, players draw and discard, trying to optimize their hand and use their own or opponents\' combinations. The first player to run out of cards wins, while the others add up the points of their remaining cards.',
    controls: [
      'Your task is to be the first to get rid of all the cards, making combinations of them before your opponents.'
    ],
    category: 'Boardgames, Cards',
    embedUrl: 'https://html5.gamedistribution.com/81dc902b25bb48589f7018b00fe5d68d/',
    image: 'https://img.gamedistribution.com/81dc902b25bb48589f7018b00fe5d68d-512x384.jpg',
    tags: ['boardgames', 'cards', 'scala']
  },
  {
    slug: 'escape-school-duel',
    title: 'Escape School Duel',
    description: 'Escape School Duel is a fast, funny, and tense escape challenge set inside a school that does not want to let you leave. Play solo to chase your best time, or go 2 player and turn every hallway into a race for freedom. One moment you are dodging traps, the next you are trying to slip past the principal in a long corridor or outsmart a teacher waiting near the classroom. Every section has its own danger, so learning the school layout is part of the strategy.',
    controls: [
      'Player 1',
      'Move: W, A, S, D',
      'Jump: Space (Press twice for double jump)',
      'Run: Left Shift',
      'Player 2',
      'Move: Arrow Keys',
      'Jump: L (Press twice for double jump)',
      'Run: K'
    ],
    category: 'Adventure, Simulation',
    embedUrl: 'https://html5.gamedistribution.com/29de0276f9474d58a609a813e9a81cdd/',
    image: 'https://img.gamedistribution.com/29de0276f9474d58a609a813e9a81cdd-512x384.jpg',
    tags: ['adventure', 'simulation', 'escape', 'school', 'duel']
  },
  {
    slug: 'nubik-create-your-place',
    title: 'Nubik: Create Your Place',
    description: 'Nubik: Create Your Place - a game about Nubiks. In this game, you can create your own \'place\' - meaning your own game. Choose the game type, build a level from blocks, set Nubik spawn points, and play. You can play the game solo or with a friend. However, you can also create a \'place\' (game) and simply watch how Nubiks (bots) play it. The game features many skins for Nubiks, achievements, a leaderboard, and chat.',
    controls: [
      'Game controls: WASD or ←, →, ↑, ↓, where S or ↓ is used to shoot. In single-player mode, you can choose any of these options.',
      'When you get bored, be sure to click "Delete the Game" to get the in-game currency you earned while playing.'
    ],
    category: 'Agility, Casual',
    embedUrl: 'https://html5.gamedistribution.com/c946bbe80d5247fdb1f87ad49abbe3b1/',
    image: 'https://img.gamedistribution.com/c946bbe80d5247fdb1f87ad49abbe3b1-512x512.jpg',
    tags: ['agility', 'casual', 'nubik', 'create', 'your', 'place']
  },
  {
    slug: 'snow-rider-obby-parkour',
    title: 'Snow Rider Obby Parkour',
    description: 'Snow Rider Obby Parkour is a fast-paced snowboard adventure where reflexes, timing, and control matter. Play solo or with a friend in split-screen mode and experience different snow challenges across multiple game modes. Whether you want to beat distance records, explore a massive open world, or race down dangerous mountains, this game offers a complete snowboarding experience. Master your snowboard, perform double jumps, and unlock amazing gear to customize your character!',
    controls: [
      'Player 1',
      'Movement: W, A, S, D',
      'Jump: Space (Double Jump available)',
      'Change Camera: C',
      'Respawn: R',
      'Player 2',
      'Movement: Arrow Keys',
      'Jump: K (Double Jump available)',
      'Change Camera: L',
      'Respawn: U',
      'On mobile devices, the game supports single-player mode with intuitive touch controls designed for smooth snowboarding.'
    ],
    category: 'Adventure, Racing & Driving',
    embedUrl: 'https://html5.gamedistribution.com/1d74e75b8da74767938d3310255b4bd3/',
    image: 'https://img.gamedistribution.com/1d74e75b8da74767938d3310255b4bd3-512x384.jpg',
    tags: ['adventure', 'racing-driving', 'snow', 'rider', 'obby', 'parkour']
  },
  {
    slug: 'bouncy-bomb-buddies',
    title: 'Bouncy Bomb Buddies',
    description: 'Bouncy Bomb Buddies is a high-energy, sugary-sweet 1v1 artillery platformer where cute characters battle it out in vibrant, candy-colored arenas. Your goal? Bounce around platforms, grab falling bombs, and launch them at your opponent to be the last buddy standing! It combines fast-paced movement with tactical throwing physics and a best-of-5 rounds system to crown the supreme champion.',
    controls: [
      '[Player 1 / Pinky]',
      '- Move: [A] [D] keys',
      '- Jump: [W] key',
      '- Pick Up / Throw: [Spacebar] or [E]',
      '[Player 2 / Sky]',
      '- Move: [Left Arrow] [Right Arrow]',
      '- Jump: [Up Arrow]',
      '- Pick Up / Throw: [Enter] or [L]',
      '[General]',
      '- Pause/Menu: [ESC] or [P]'
    ],
    category: 'Agility, Battle',
    embedUrl: 'https://html5.gamedistribution.com/38380fc2f11e45a48c9b3809293438a5/',
    image: 'https://img.gamedistribution.com/38380fc2f11e45a48c9b3809293438a5-512x384.jpg',
    tags: ['agility', 'battle', 'bouncy', 'bomb', 'buddies']
  },
  {
    slug: 'obby-toilet-line',
    title: 'Obby Toilet Line',
    description: 'Obby Toilet Line starts in the most chaotic place imaginable: a gas station restroom line. Around 30 different characters are already waiting, and the queue stretches all the way past the store entrance. Your goal is simple, but the situation is not: earn money while you wait, move up the line, and reach the mysterious toilet at the end. This is not just a "stand still" queue. The game uses an idle-style progression system: the position you\'re standing in determines how much you earn.',
    controls: [
      'Player 1',
      'WASD: Move',
      'Space: Jump and line skip',
      'E: Interact',
      'F: Hit bugs',
      'Shift: Sprint',
      'Player 2',
      'Arrow Keys: Move',
      'K: Line skip and interact',
      'L: Jump and hit bugs',
      'J: Sprint'
    ],
    category: 'Adventure, Simulation',
    embedUrl: 'https://html5.gamedistribution.com/27214a866f174c7ebdf0089d6b383d9f/',
    image: 'https://img.gamedistribution.com/27214a866f174c7ebdf0089d6b383d9f-512x384.jpg',
    tags: ['adventure', 'simulation', 'obby', 'toilet', 'line']
  },
  {
    slug: 'steal-brainrot-eggs',
    title: 'Steal Brainrot Eggs',
    description: 'Steal Brainrot Eggs is a competitive action game playable in both 1 Player and 2 Player modes. Players buy eggs from a central conveyor, carry them to their Base, and hatch random Brainrot characters based on egg rarity. Characters generate coins over time, allowing access to higher-tier eggs. Defend your Base from thieves or steal eggs and characters from rivals, customize your character, raise evolving pets, and take part in timed events across the map.',
    controls: [
      'PLAYER 1:',
      'Move: W, A, S, D',
      'Jump: Space',
      'Buy or Steal: E',
      'Hit: F or Left Mouse',
      'Sprint: Left Shift',
      'PLAYER 2:',
      'Move: Arrow Keys',
      'Jump: L',
      'Buy or Steal: O',
      'Hit: K',
      'Sprint: J'
    ],
    category: 'Casual, Simulation',
    embedUrl: 'https://html5.gamedistribution.com/e07da43b39e443738d6a84a4a6255c32/',
    image: 'https://img.gamedistribution.com/e07da43b39e443738d6a84a4a6255c32-512x384.jpg',
    tags: ['casual', 'simulation', 'steal', 'brainrot', 'eggs']
  },
  {
    slug: 'steal-brainrot-arena',
    title: 'Steal Brainrot Arena',
    description: 'Steal Brainrot Arena is a fast-paced collection and heist game where every match turns into a battle of wallets, wits, and sneaky steals. Play solo in 1 Player mode or team up and compete in 2 Player mode as you build the ultimate Brainrot lineup. With over 45+ brainrot characters to discover, your goal is simple: buy better Brainrots, earn more, and create the most stacked collection in the arena.',
    controls: [
      'Player 1',
      'Move: W,A,S,D or ARROW KEYS (In 1 Player mode only)',
      'Jump: SPACE',
      'Sprint: L-SHIFT',
      'Hammer hit: F or LEFT-CLICK',
      'Buy/Steal/Sell: E',
      'Market: R',
      'Teleport to base: T',
      'Rebirt: Y',
      'Gift screens: G,H,J (In 1 Player mode only)',
      'Player 2',
      'Move: ARROW KEYS',
      'Jump: L',
      'Sprint: K',
      'Buy/Steal/Sell: M',
      'Market: I',
      'Teleport to base: O',
      'Rebirth: P'
    ],
    category: 'Casual, Simulation',
    embedUrl: 'https://html5.gamedistribution.com/4592e84523ad49a8b80986c3aa503429/',
    image: 'https://img.gamedistribution.com/4592e84523ad49a8b80986c3aa503429-512x384.jpg',
    tags: ['casual', 'simulation', 'steal', 'brainrot', 'arena']
  },
  {
    slug: 'catch-a-fish-obby',
    title: 'Catch a Fish Obby',
    description: 'Catch a Fish Obby is a chaotic collector raider set in a bright obby world full of Fish and Brainrot Fish characters. Build a money making base with your favorite sea creatures, sneak into rival bases to steal their fish, and protect your own tank from greedy bots and other players.',
    controls: [
      'Player 1',
      'Move: W,A,S,D',
      'Jump: Space',
      'Buy or Steal: E',
      'Hit: F or Left Mouse',
      'Sprint: Left Shift',
      'Player 2',
      'Move: Arrow Keys',
      'Jump: L',
      'Buy or Steal: O',
      'Hit: K',
      'Sprint: J',
      'On mobile devices, all actions are mapped to touch buttons. Move with the virtual joystick, tap the action buttons to jump, steal and attack.'
    ],
    category: 'Battle, Strategy',
    embedUrl: 'https://html5.gamedistribution.com/ac47a3b950d74509922e2c1724a4ed20/',
    image: 'https://img.gamedistribution.com/ac47a3b950d74509922e2c1724a4ed20-512x384.jpg',
    tags: ['battle', 'strategy', 'catch', 'fish', 'obby']
  },
  {
    slug: 'crazy-bike-stunts-pvp',
    title: 'Crazy Bike Stunts PvP',
    description: 'Skid the wheel of a stunning muscle car through 2 awesome game modes and showcase your driving skills. Customize your car according to your taste and drive in style with the roaring engines. Feel the heat in 2 player mode where you go head to head with your friend in 2 amazing game modes! Are you ready to conquer the stunt city? Prove yourself with Crazy Bike Stunts PvP!',
    controls: [
      'Player 1:',
      'W,A,S,D: Drive/Steer/Brake',
      'Player 2:',
      'Arrow Keys: Drive/Steer/Brake'
    ],
    category: 'Racing & Driving',
    embedUrl: 'https://html5.gamedistribution.com/0c89181b9cfe4897afa41b0f94385da9/',
    image: 'https://img.gamedistribution.com/0c89181b9cfe4897afa41b0f94385da9-512x384.jpg',
    tags: ['racing-driving', 'crazy', 'bike', 'stunts', 'pvp']
  },
  {
    slug: 'obby-rainbow-tower',
    title: 'Obby Rainbow Tower',
    description: 'Obby Rainbow Tower is a fast, winter-themed tower race where every second and every jump matters. Each floor is packed with moving platforms, icy tiles, spinning lava bars, surprise snowstorms and snowball portals that try to knock you into the void. You can replay the tower as many times as you like, trying to beat your own best time or racing a friend side by side in 2 player mode.',
    controls: [
      'Player 1: Move W A S D, Sprint Shift, Jump Space, Double Jump Space+Space',
      'Player 2: Move Arrows, Sprint K, Jump L, Double Jump L+L',
      'Mobile: On-screen buttons.'
    ],
    category: 'Casual, Simulation',
    embedUrl: 'https://html5.gamedistribution.com/57de0fa8b9fb4df783e7eb8248ac5e5a/',
    image: 'https://img.gamedistribution.com/57de0fa8b9fb4df783e7eb8248ac5e5a-512x384.jpg',
    tags: ['casual', 'simulation', 'obby', 'rainbow', 'tower']
  },
  {
    slug: 'paper-wars-battles-and-upgrades',
    title: 'Paper Wars: Battles and Upgrades',
    description: 'Real battle on a sheet of paper! Choose your troops, aim, and destroy the enemy. Play with a friend or against AI. Unlock new fighters and upgrade your attacks!',
    controls: [
      'Preparing for Battle:',
      'At the beginning of the game, select soldiers from those available in your arsenal. The number and types of soldiers depend on your squad\'s upgrades.',
      'Combat System:',
      'When your attack is charged, select a firing point on your half of the field. The system will automatically determine the mirrored point on the enemy\'s side - that\'s where the projectile will land. Some soldiers accelerate the recharge of specific attacks - use this advantage.'
    ],
    category: 'Battle',
    embedUrl: 'https://html5.gamedistribution.com/49994d4fd8aa4a218b8d3ed8837a4700/',
    image: 'https://img.gamedistribution.com/49994d4fd8aa4a218b8d3ed8837a4700-1280x720.jpg',
    tags: ['battle', 'paper', 'wars', 'battles', 'and', 'upgrades']
  },
  {
    slug: '2-player-battle',
    title: '2 Player Battle',
    description: 'Seeking an exciting way to spend time with friends and family is most significant. Look no further than Party Battle, the ultimate 2-4 player game! With 30 different games, this exciting collection has something for everyone.',
    controls: [
      'if you want to play with your friends on the same device, this game is a great choice!If you don\'t have friends to play multiplayer on a single device, play against the AI alone!'
    ],
    category: 'Battle, Boardgames',
    embedUrl: 'https://html5.gamedistribution.com/4625c660923c42b8a5c8e4d2fbdc98ee/',
    image: 'https://img.gamedistribution.com/4625c660923c42b8a5c8e4d2fbdc98ee-512x384.jpg',
    tags: ['battle', 'boardgames', 'player']
  },
  {
    slug: 'geometry-vibes-x-arrow',
    title: 'Geometry Vibes X-Arrow',
    description: 'Geometry Vibes X Arrow is the newest evolution of the Geometry Vibes series, offering the most refined, competitive and customizable arrow experience so far. The goal is simple but demanding: guide your arrow through dangerous geometric paths, survive increasingly difficult patterns and reach the portal at the end of each route without touching anything.',
    controls: [
      'Click MOUSE Left Click or press SPACE to accelerate upward.',
      'Release the button to move downward.',
      'In multiplayer, the additional players use H, L and the Up Arrow.',
      'Touch controls are supported on phones and tablets.'
    ],
    category: 'Agility, Casual',
    embedUrl: 'https://html5.gamedistribution.com/99423a2819a14804a12f30557091d567/',
    image: 'https://img.gamedistribution.com/99423a2819a14804a12f30557091d567-512x384.jpg',
    tags: ['agility', 'casual', 'geometry', 'vibes', 'arrow']
  },
  {
    slug: 'epic-stunts-pvp-3d',
    title: 'Epic Stunts PvP 3D',
    description: 'Skid the wheel of a stunning muscle car through 3 awesome game modes and showcase your driving skills. Customize your car according to your taste and drive in style with the roaring engines. Feel the heat in 2 player mode where you go head to head with your friend in 2 amazing game modes! Are you ready to conquer the stunt city? Prove yourself with Two Stunt Racers!',
    controls: [
      'Player 1:',
      'W,A,S,D: Drive/Steer/Brake',
      'Player 2:',
      'Arrow Keys: Drive/Steer/Brake'
    ],
    category: 'Racing & Driving',
    embedUrl: 'https://html5.gamedistribution.com/a75b82d28b4b4083bbc8ad4394570d97/',
    image: 'https://img.gamedistribution.com/a75b82d28b4b4083bbc8ad4394570d97-200x120.jpg',
    tags: ['racing-driving', 'epic', 'stunts', 'pvp']
  },
  {
    slug: 'bubble-trouble-2-rebubbled',
    title: 'Bubble Trouble 2: Rebubbled',
    description: 'A classic arcade bubble shooter where you play as a devil in a trench coat, armed with a harpoon gun to tackle dangerous bouncing bubbles. Each bubble you shoot splits into smaller ones until they\'re completely destroyed. Navigate through levels with platforms and power-ups while avoiding contact with any bubble. How to play: - Clear all bubbles from each level to progress - Avoid getting touched by bubbles - or lose a life - Features single-player and cooperative multiplayer modes',
    controls: [
      'Avoid and pop the bubbles.',
      'SPACE to shoot, ARROW KEYS to move.'
    ],
    category: 'Casual, Puzzle',
    embedUrl: 'https://html5.gamedistribution.com/675852fa01924aa2bc4f2723c1349d05/',
    image: 'https://img.gamedistribution.com/675852fa01924aa2bc4f2723c1349d05-512x384.jpg',
    tags: ['casual', 'puzzle', 'bubble', 'trouble', 'rebubbled']
  },
  {
    slug: 'duo-family-santa',
    title: 'Duo Family Santa',
    description: 'Steve and Alex need to race against each other. The one who holds the Lucky Block wins the game. Hold onto the Lucky Block until the time runs out to win the game. You can earn money by collecting socks and you can also earn money by defeating your friend. You must be very careful; steal the Lucky Block from your friend and keep it until the time is up.',
    controls: [
      '*Use the WASD and Arrow keys to move.',
      '*The player holding the Lucky Block when the time runs out wins the game.',
      '*Playable on both mobile and PC.'
    ],
    category: 'Battle, Casual',
    embedUrl: 'https://html5.gamedistribution.com/fc03dd1d102445f682db4f25284ac990/',
    image: 'https://img.gamedistribution.com/fc03dd1d102445f682db4f25284ac990-512x384.jpg',
    tags: ['battle', 'casual', 'duo', 'family', 'santa']
  },
  {
    slug: 'basketball-stars-2026',
    title: 'Basketball Stars 2026',
    description: 'Basketball Stars is a cool 2 player basketball game by MadPuffers. Prepared for the 2025 basketball season. Choose your team and enter a challenging tournament. Control your player to perform awesome dunks and 3-pointers to win the game. Feel free to block and slap your opponent to knock him out and get the ball, and pay attention to the supershot bar on the top of the screen. Once fully loaded, you can use the hot special dunk from wherever you stand; it never fails. Be the best player!',
    controls: [
      '1 player controls',
      'WASD or arrow keys to move',
      'X/L to shoot/steal',
      'S to pump/block',
      'A+A or D+D or left/right arrow twice to dash',
      'K/Z to super shot',
      '2 player controls',
      'To move, player 1 use the WASD keys and player 2 use arrow keys',
      'To shoot/steal, player 1 use B and player 2 use L',
      'To pump, player 1 use S and player 2 use down arrow',
      'To dash, player 1 use A/D twice and player 2 use left/right arrow twice',
      'K to super shot'
    ],
    category: 'Basketball',
    embedUrl: 'https://html5.gamedistribution.com/516d6908fbc848bdb89e65a58a43a7dc/',
    image: 'https://img.gamedistribution.com/516d6908fbc848bdb89e65a58a43a7dc-512x384.jpg',
    tags: ['basketball', 'stars', '2026']
  },
  {
    slug: 'steal-car-duel',
    title: 'Steal Car Duel',
    description: 'Step into a high-energy world of engines, rivalry, and fast reflexes. Steal Car Duel is a competitive action game that evolves the idea of Steal a Brainrot into a car-based experience filled with duels, rare collectibles, and endless upgrades! Race, collide, and steal your way to the top. Build your own garage, earn coins and tickets, and outsmart rivals to prove who rules the arena. Each match combines skill, timing, and strategy as you fight for dominance in Solo or 2 Player mode.',
    controls: [
      'Player 1',
      'Move: W A S D',
      'Jump: Space',
      'Steal / Buy: E',
      'Hit: F or Left Mouse',
      'Sprint: Left Shift',
      'Player 2',
      'Move: Arrow Keys',
      'Jump: L',
      'Steal / Buy: O',
      'Hit: K',
      'Sprint: J'
    ],
    category: 'Battle, Casual',
    embedUrl: 'https://html5.gamedistribution.com/e3f4448cc0514fbaa84f157982da157d/',
    image: 'https://img.gamedistribution.com/e3f4448cc0514fbaa84f157982da157d-512x384.jpg',
    tags: ['battle', 'casual', 'steal', 'car', 'duel']
  }
];

type GameStats = {
  plays: number;
  uploadedAt: string;
};

export const gameStats: Record<string, GameStats> = {
  'two-stunt-supercars': { plays: 1285000, uploadedAt: '2026-01-11' },
  'scala-40': { plays: 312400, uploadedAt: '2026-02-19' },
  'escape-school-duel': { plays: 889200, uploadedAt: '2026-02-24' },
  'nubik-create-your-place': { plays: 267800, uploadedAt: '2026-02-20' },
  'snow-rider-obby-parkour': { plays: 1042300, uploadedAt: '2026-01-28' },
  'bouncy-bomb-buddies': { plays: 645700, uploadedAt: '2026-02-10' },
  'obby-toilet-line': { plays: 406300, uploadedAt: '2026-02-14' },
  'steal-brainrot-eggs': { plays: 1198600, uploadedAt: '2026-02-23' },
  'steal-brainrot-arena': { plays: 1332700, uploadedAt: '2026-02-22' },
  'catch-a-fish-obby': { plays: 721500, uploadedAt: '2026-02-25' },
  'crazy-bike-stunts-pvp': { plays: 579100, uploadedAt: '2026-01-30' },
  'obby-rainbow-tower': { plays: 382400, uploadedAt: '2026-02-21' },
  'paper-wars-battles-and-upgrades': { plays: 295600, uploadedAt: '2026-02-03' },
  '2-player-battle': { plays: 1105700, uploadedAt: '2026-01-17' },
  'geometry-vibes-x-arrow': { plays: 934500, uploadedAt: '2026-02-16' },
  'epic-stunts-pvp-3d': { plays: 812700, uploadedAt: '2026-01-21' },
  'bubble-trouble-2-rebubbled': { plays: 556900, uploadedAt: '2026-02-08' },
  'duo-family-santa': { plays: 468200, uploadedAt: '2026-02-12' },
  'basketball-stars-2026': { plays: 1413900, uploadedAt: '2026-02-15' },
  'steal-car-duel': { plays: 997300, uploadedAt: '2026-02-26' }
};

const NEW_GAME_WINDOW_DAYS = 14;

export function getGamePlays(slug: string): number {
  return gameStats[slug]?.plays ?? 0;
}

export function isNewGame(game: Game): boolean {
  const uploadedAt = gameStats[game.slug]?.uploadedAt;
  if (!uploadedAt) return false;

  const uploadedDate = new Date(`${uploadedAt}T00:00:00Z`);
  const now = new Date();
  const diff = now.getTime() - uploadedDate.getTime();
  const ageInDays = diff / (1000 * 60 * 60 * 24);

  return ageInDays <= NEW_GAME_WINDOW_DAYS;
}

export function getPopularGames(list: Game[], limit = 5): Game[] {
  return [...list].sort((a, b) => getGamePlays(b.slug) - getGamePlays(a.slug)).slice(0, limit);
}

export function getGameBySlug(slug: string): Game | undefined {
  return games.find((game) => game.slug === slug);
}
