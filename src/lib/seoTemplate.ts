import type { Game } from '@/data/games';

const intros = [
  'Jump into',
  'Challenge your friend in',
  'Play instantly on browser with',
  'Compete online without downloads in',
  'Start a fast 2 player match with'
];

const angles = [
  'quick rounds and responsive controls',
  'school-friendly unblocked access',
  'local multiplayer sessions on one keyboard',
  'short competitive matches for breaks',
  'easy onboarding for casual and returning players'
];

const endings = [
  'No install needed, just open and play.',
  'Works smoothly on desktop and modern mobile browsers.',
  'Great for fast sessions with friends at school or home.',
  'Use the controls below to improve your win rate quickly.',
  'Try related titles after this match to keep momentum going.'
];

function hashSeed(input: string): number {
  let hash = 0;
  for (let index = 0; index < input.length; index += 1) {
    hash = (hash * 31 + input.charCodeAt(index)) >>> 0;
  }
  return hash;
}

function pick<T>(list: T[], seed: number, offset: number): T {
  return list[(seed + offset) % list.length];
}

export function buildGameSeoText(game: Game): string {
  const seed = hashSeed(game.slug);
  const intro = pick(intros, seed, 0);
  const angle = pick(angles, seed, 2);
  const ending = pick(endings, seed, 4);

  return `${intro} ${game.title}, a ${game.category.toLowerCase()} game focused on ${angle}. ${ending}`;
}

export function buildCollectionSeoText(category: string, totalGames: number): string {
  const seed = hashSeed(`${category}-${totalGames}`);
  const intro = pick(intros, seed, 1);
  const angle = pick(angles, seed, 3);
  const ending = pick(endings, seed, 0);

  return `${intro} our ${category.toLowerCase()} collection with ${totalGames} playable games, tuned for ${angle}. ${ending}`;
}