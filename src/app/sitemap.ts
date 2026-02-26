import type { MetadataRoute } from 'next';
import { gameStats, games } from '@/data/games';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com';
  const fallbackDate = new Date('2026-02-26T00:00:00.000Z');

  const gameUrls = games.map((game) => ({
    url: `${baseUrl}/games/${game.slug}`,
    lastModified: gameStats[game.slug]?.uploadedAt
      ? new Date(`${gameStats[game.slug].uploadedAt}T00:00:00.000Z`)
      : fallbackDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8
  }));

  return [
    {
      url: `${baseUrl}/`,
      lastModified: fallbackDate,
      changeFrequency: 'daily',
      priority: 1
    },
    {
      url: `${baseUrl}/games`,
      lastModified: fallbackDate,
      changeFrequency: 'daily',
      priority: 0.9
    },
    ...gameUrls
  ];
}