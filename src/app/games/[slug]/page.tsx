import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { AdSlot } from '@/components/AdSlot';
import { BackButton } from '@/components/BackButton';
import { GamePlayerSection } from '@/components/GamePlayerSection';
import { games, getGameBySlug, getGamePlays, getPopularGames } from '@/data/games';
import { buildGameSeoContent } from '@/lib/gameSeoContent';
import { buildGameSeoText } from '@/lib/seoTemplate';

type GameDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  return games.map((game) => ({ slug: game.slug }));
}

export async function generateMetadata({ params }: GameDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const game = getGameBySlug(slug);

  if (!game) {
    return {
      title: 'Game Not Found',
      description: 'This game page does not exist.'
    };
  }

  return {
    title: `${game.title} - Play Unblocked 2 Player Game Online`,
    description: game.description,
    keywords: ['unblocked', '2 player', 'browser game', 'play online', game.title, game.category],
    alternates: {
      canonical: `/games/${game.slug}`
    },
    openGraph: {
      title: `${game.title} - Play Unblocked 2 Player Game Online`,
      description: game.description,
      url: `/games/${game.slug}`,
      type: 'article'
    },
    twitter: {
      card: 'summary_large_image',
      title: `${game.title} - Play Unblocked 2 Player Game Online`,
      description: game.description
    }
  };
}

export default async function GameDetailPage({ params }: GameDetailPageProps) {
  const { slug } = await params;
  const game = getGameBySlug(slug);

  if (!game) {
    notFound();
  }

  const topFavoriteSlugs = new Set(getPopularGames(games, 5).map((item) => item.slug));
  const currentTags = new Set(game.tags);
  const seoBody = buildGameSeoText(game);
  const siteUrl = 'https://2playerunblocked.netlify.app';
  const gamePageUrl = `${siteUrl}/games/${game.slug}/`;

  const similarGames = games
    .filter((item) => item.slug !== game.slug)
    .map((item) => {
      const tagScore = item.tags.filter((tag) => currentTags.has(tag)).length;
      const categoryScore = item.category === game.category ? 2 : 0;
      return { item, score: tagScore + categoryScore };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score || getGamePlays(b.item.slug) - getGamePlays(a.item.slug))
    .slice(0, 10)
    .map(({ item }) => item);

  const moreGames = similarGames.slice(0, 6);
  const seoContent = buildGameSeoContent(game, moreGames.map((item) => item.title));

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'VideoGame',
    name: game.title,
    description: game.description,
    genre: game.category,
    image: game.image,
    url: `/games/${game.slug}`,
    applicationCategory: 'Game',
    operatingSystem: 'Any',
    playMode: 'MultiPlayer'
  };

  return (
    <main className="detail-page">
      <div className="detail-wrap">
        <BackButton fallbackHref="/games" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

        <GamePlayerSection title={game.title} embedUrl={game.embedUrl} referrerUrl={gamePageUrl} />
        <AdSlot slot="1000000011" label="In-Game Banner Ad" className="ad-slot--banner" />

        <section className="detail-section detail-head-row">
          <img src={game.image} alt={game.title} className="detail-image detail-image-small" loading="lazy" />

          <div className="detail-head-content">
            <h1 className="detail-title">{game.title}</h1>
            <div className="detail-meta">
              <span className="modal-chip">{game.category}</span>
              <span className="modal-chip">{topFavoriteSlugs.has(game.slug) ? 'Favorite' : 'Standard'}</span>
            </div>
            <p className="detail-description">{game.description}</p>
            <p className="seo-copy">{seoBody}</p>

            <h2 className="detail-subtitle">Instruction</h2>
            <ul className="modal-list">
              {game.controls.map((control, index) => (
                <li key={`instruction-${index}-${control}`}>{control}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="detail-section">
          <h2 className="detail-subtitle">Similar Games</h2>
          <div className="similar-grid">
            {similarGames.map((item) => (
              <Link key={item.slug} href={`/games/${item.slug}`} className="similar-card">
                <img src={item.image} alt={item.title} loading="lazy" className="similar-thumb" />
                <span className="similar-title">{item.title}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="detail-section">
          <h2 className="detail-subtitle">More 2 Player Games</h2>
          <div className="similar-grid">
            {moreGames.map((item) => (
              <Link key={`more-${item.slug}`} href={`/games/${item.slug}`} className="similar-card">
                <img src={item.image} alt={item.title} loading="lazy" className="similar-thumb" />
                <span className="similar-title">{item.title}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="detail-section seo-content">
          <h1>{game.title} Unblocked - Free 2 Player Game</h1>
          <p>{seoContent.intro}</p>

          <h2>How to Play</h2>
          <p>{seoContent.howToPlay}</p>

          <h2>Game Controls</h2>
          <ul className="modal-list">
            {game.controls.map((control, index) => (
              <li key={`seo-${index}-${control}`}>{control}</li>
            ))}
          </ul>

          <h2>Why This Game Is Fun</h2>
          <p>{seoContent.whyFun}</p>

          <h2>Tips and Strategy</h2>
          <p>{seoContent.tips}</p>

          <h2>FAQ</h2>
          <div className="seo-faq">
            {seoContent.faqs.map((faq) => (
              <article key={faq.question} className="seo-faq-item">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <AdSlot slot="1000000012" label="Detail Bottom Ad" className="ad-slot--banner" />
      </div>
    </main>
  );
}
