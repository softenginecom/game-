import type { MetadataRoute } from 'next';
import { blogPosts } from '@/data/blogPosts';
import { gameStats, games } from '@/data/games';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://2playerunblocked.netlify.app';
  const fallbackDate = new Date('2026-02-26T00:00:00.000Z');

  const gameUrls = games.map((game) => ({
    url: `${baseUrl}/games/${game.slug}`,
    lastModified: gameStats[game.slug]?.uploadedAt
      ? new Date(`${gameStats[game.slug].uploadedAt}T00:00:00.000Z`)
      : fallbackDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8
  }));

  const blogUrls = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: fallbackDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7
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
    {
      url: `${baseUrl}/blog`,
      lastModified: fallbackDate,
      changeFrequency: 'weekly',
      priority: 0.8
    },
    ...blogUrls,
    ...gameUrls
  ];
}
