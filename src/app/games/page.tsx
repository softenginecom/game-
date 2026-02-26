import type { Metadata } from 'next';
import { GameGrid } from '@/components/GameGrid';
import { games } from '@/data/games';
import { buildCollectionSeoText } from '@/lib/seoTemplate';

export const metadata: Metadata = {
  title: '2Player Unblocked - Games',
  description: 'Browse multiplayer HTML5 games in a dark portal grid.',
  alternates: { canonical: '/games' }
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