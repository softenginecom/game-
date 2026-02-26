import type { Metadata } from 'next';
import { GameGrid } from '@/components/GameGrid';
import { games, getPopularGames } from '@/data/games';
import { buildCollectionSeoText } from '@/lib/seoTemplate';

export const metadata: Metadata = {
  title: 'Unblocked 2 Player Games to Play Online',
  description: 'Play free unblocked 2 player games online in your browser. Fast loading multiplayer browser game collection for school and home.',
  alternates: { canonical: '/' },
  keywords: ['unblocked 2 player games', 'play online', 'browser game', 'free multiplayer games'],
  openGraph: {
    title: 'Unblocked 2 Player Games to Play Online',
    description: 'Play free unblocked 2 player games online in your browser. Fast loading multiplayer browser game collection for school and home.',
    url: '/',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Unblocked 2 Player Games to Play Online',
    description: 'Play free unblocked 2 player games online in your browser. Fast loading multiplayer browser game collection for school and home.'
  }
};

export default function HomePage() {
  const topFavorites = getPopularGames(games, 5);
  const topFavoriteSet = new Set(topFavorites.map((game) => game.slug));
  const rest = games.filter((game) => !topFavoriteSet.has(game.slug));
  const homeGames = [...topFavorites, ...rest];

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: '2Player Unblocked',
    url: 'https://2playerunblocked.netlify.app',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://2playerunblocked.netlify.app/games?search={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <GameGrid
        games={homeGames}
        seoHeading="Unblocked 2 Player Games"
        seoText={buildCollectionSeoText('2 player unblocked', homeGames.length)}
      />
    </>
  );
}
