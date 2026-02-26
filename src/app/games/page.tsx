import type { Metadata } from 'next';
import { GameGrid } from '@/components/GameGrid';
import { games } from '@/data/games';
import { buildCollectionSeoText } from '@/lib/seoTemplate';

export const metadata: Metadata = {
  title: 'All Unblocked 2 Player Browser Games',
  description: 'Browse all unblocked 2 player browser game titles and play online instantly. Find racing, battle, sports, and casual multiplayer games.',
  alternates: { canonical: '/games' },
  keywords: ['2 player browser game', 'unblocked games list', 'play online with friends', 'free unblocked games'],
  openGraph: {
    title: 'All Unblocked 2 Player Browser Games',
    description: 'Browse all unblocked 2 player browser game titles and play online instantly. Find racing, battle, sports, and casual multiplayer games.',
    url: '/games',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'All Unblocked 2 Player Browser Games',
    description: 'Browse all unblocked 2 player browser game titles and play online instantly. Find racing, battle, sports, and casual multiplayer games.'
  }
};

export default function GamesPage() {
  return (
    <GameGrid
      games={games}
      seoHeading="All 2 Player Games"
      seoText={buildCollectionSeoText('games catalog', games.length)}
    />
  );
}
