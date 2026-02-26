import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://2playerunblocked.netlify.app';

  return {
    rules: {
      userAgent: '*',
      allow: '/'
    },
    host: baseUrl,
    sitemap: `${baseUrl}/sitemap.xml`
  };
}
