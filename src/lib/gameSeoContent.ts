import type { Game } from '@/data/games';

type FaqItem = {
  question: string;
  answer: string;
};

export type GameSeoContent = {
  intro: string;
  howToPlay: string;
  whyFun: string;
  tips: string;
  faqs: FaqItem[];
};

const openerVariants = [
  'If you are looking for an unblocked 2 player browser game that starts fast and stays fun,',
  'For players who want a reliable unblocked browser game experience with real competition,',
  'When you need a quick play online session with a friend,',
  'As a competitive 2 player unblocked title that works directly in your browser,'
];

const styleVariants = [
  'the pacing is quick, rounds stay intense, and each restart feels fresh.',
  'the controls are simple to learn, but the skill ceiling keeps matches interesting.',
  'it rewards timing, positioning, and smart decision making in every short session.',
  'it delivers smooth play online action without downloads, installs, or setup friction.'
];

function hashSeed(value: string): number {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash * 33 + value.charCodeAt(i)) >>> 0;
  }
  return hash;
}

function pick<T>(list: T[], seed: number, offset: number): T {
  return list[(seed + offset) % list.length];
}

function toNaturalTags(tags: string[]): string {
  if (tags.length === 0) return 'multiplayer gameplay';
  const cleaned = tags.slice(0, 5).map((tag) => tag.replace(/-/g, ' '));
  if (cleaned.length === 1) return cleaned[0];
  return `${cleaned.slice(0, -1).join(', ')} and ${cleaned[cleaned.length - 1]}`;
}

export function buildGameSeoContent(game: Game, relatedTitles: string[]): GameSeoContent {
  const seed = hashSeed(game.slug);
  const opener = pick(openerVariants, seed, 1);
  const style = pick(styleVariants, seed, 2);
  const tagText = toNaturalTags(game.tags);
  const controlPreview = game.controls
    .filter((line) => line.trim().length > 0)
    .slice(0, 5)
    .join(' ')
    .replace(/\s+/g, ' ');
  const relatedText = relatedTitles.slice(0, 3).join(', ');

  const intro = `${opener} ${game.title} is a strong choice in the ${game.category} category. This unblocked title is built for players who want to play online instantly from school, home, or any shared computer where installation is not possible. Because it runs as a browser game, you can open it quickly, invite a friend, and begin a 2 player match in seconds. The core loop focuses on readable mechanics, responsive movement, and repeatable rounds, so every session has clear progress. If you enjoy ${tagText}, this game gives you enough variety to stay engaged across multiple matches. ${style} In short, ${game.title} works as a dependable pick when you want a competitive unblocked game with low friction and high replay value.`;

  const howToPlay = `${game.title} is easiest to learn when you focus on movement first, then add advanced actions. Start with a few calm rounds to understand map flow, timing windows, and how each input changes momentum. The basic controls are straightforward, so most players can begin immediately, but consistent wins come from spacing and patience. As a 2 player browser game, the match rhythm changes quickly when both players adapt, so avoid repeating one predictable pattern. Use short test rounds to compare safe plays versus aggressive pushes, then keep the options that create stable pressure. If you are playing online with a friend, communicate between rounds and discuss what worked. This simple feedback loop improves reaction speed and helps both players enjoy deeper, more tactical games.`;

  const whyFun = `${game.title} stays fun because it balances accessibility with competition. New players can jump in fast, while experienced players keep finding better routes, cleaner timing, and smarter defensive decisions. The unblocked format also matters: you can play online without setup delays, which makes it ideal for short breaks and repeat sessions. In a 2 player environment, every round feels personal because both players influence pace, risk level, and momentum. The category blend of ${game.category} supports different play styles, so the same browser game can feel fresh even after many matches. Another strength is how readable the action is under pressure. You can usually see why a round was won or lost, which encourages improvement instead of frustration. That clarity is a major reason this title keeps players coming back.`;

  const tips = `To perform better in ${game.title}, begin each session with a clear plan: control space, avoid panic inputs, and trade safely when the round is close. Do not rush every engagement. In most unblocked 2 player games, consistent positioning beats random aggression over a full set. Track your opponent patterns for at least two rounds before committing to hard counters. When you notice repeated movement habits, punish them with simple, low risk plays. Keep your mechanics efficient: fewer wasted actions means better control in late round moments. The practical controls you should drill include ${controlPreview}. Even ten focused minutes of warm up can improve your outcomes. If you want more variety after a long session, rotate into related browser game picks such as ${relatedText || 'other games in this category'} to sharpen different skills and return stronger.`;

  const faqs: FaqItem[] = [
    {
      question: `Is ${game.title} really unblocked and free to play online?`,
      answer: `${game.title} is designed as a browser game, so you can play online without downloads. Access can still depend on local network rules at school or work, but the game itself is free to open and play in supported browsers.`
    },
    {
      question: `Can two people play ${game.title} on one device?`,
      answer: `Yes. The controls are set up for 2 player sessions, and each player can use separate key bindings. This makes it practical for local matches on one keyboard when both players are comfortable with the layout.`
    },
    {
      question: `What is the fastest way to improve in this browser game?`,
      answer: `Focus on three habits: clean movement, fewer risky mistakes, and pattern reading. Short review breaks between rounds help you spot repeated errors quickly, which improves results faster than pure grinding.`
    },
    {
      question: `Which games should I try after ${game.title}?`,
      answer: `Try other unblocked 2 player titles in the same category or with similar tags. Related games expose you to new pacing and strategies, and those lessons usually transfer back into better performance here.`
    }
  ];

  return {
    intro,
    howToPlay,
    whyFun,
    tips,
    faqs
  };
}
