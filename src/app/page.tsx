import type { Metadata } from 'next';
import { GameGrid } from '@/components/GameGrid';
import { games, getPopularGames } from '@/data/games';
import { buildCollectionSeoText } from '@/lib/seoTemplate';

export const metadata: Metadata = {
  title: '2Player Unblocked - Home',
  description: 'Dark themed HTML5 games portal for unblocked 2 player games.',
  alternates: { canonical: '/' }
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
    url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com'}/games?search={search_term_string}`,
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