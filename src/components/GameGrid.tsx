'use client';

import { useEffect, useMemo, useState } from 'react';
import { AdSlot } from '@/components/AdSlot';
import { GameCard } from '@/components/GameCard';
import { Sidebar } from '@/components/Sidebar';
import type { SidebarFilter } from '@/components/Sidebar';
import { Topbar } from '@/components/Topbar';
import { getGamePlays, getPopularGames, isNewGame } from '@/data/games';
import type { Game } from '@/data/games';

type GameGridProps = {
  games: Game[];
  seoHeading?: string;
  seoText?: string;
};

export function GameGrid({ games, seoHeading, seoText }: GameGridProps) {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<SidebarFilter>('all');
  const [page, setPage] = useState(1);
  const pageSize = 100;

  const topFavoriteSlugs = useMemo(() => {
    return new Set(getPopularGames(games, 5).map((game) => game.slug));
  }, [games]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    const searched = games.filter((game) => {
      if (!q) return true;

      return (
        game.title.toLowerCase().includes(q) ||
        game.category.toLowerCase().includes(q) ||
        game.tags.some((tag) => tag.toLowerCase().includes(q))
      );
    });

    if (filter === 'new') {
      return searched.filter((game) => isNewGame(game));
    }

    if (filter === 'favorite') {
      return [...searched]
        .filter((game) => getGamePlays(game.slug) >= 200000)
        .sort((a, b) => getGamePlays(b.slug) - getGamePlays(a.slug));
    }

    return searched;
  }, [games, query, filter]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));

  useEffect(() => {
    setPage(1);
  }, [query, filter]);

  useEffect(() => {
    if (page > totalPages) {
      setPage(totalPages);
    }
  }, [page, totalPages]);

  const paginated = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, page]);

  return (
    <div className="shell">
      <Sidebar active={filter} onSelect={setFilter} />
      <Topbar value={query} onChange={setQuery} />

      <main className="main">
        {seoHeading && seoText ? (
          <section className="seo-block">
            <h1 className="seo-heading">{seoHeading}</h1>
            <p className="seo-copy">{seoText}</p>
          </section>
        ) : null}

        <AdSlot slot="1000000001" label="Top Banner Ad" className="ad-slot--banner" />

        <div className="game-grid">
          {paginated.map((game) => (
            <GameCard key={game.slug} game={game} isTopFavorite={topFavoriteSlugs.has(game.slug)} />
          ))}
        </div>

        {filtered.length > pageSize ? (
          <div className="pagination">
            <button
              type="button"
              className="page-btn"
              onClick={() => setPage((prev) => Math.max(1, prev - 1))}
              disabled={page === 1}
            >
              Prev
            </button>
            <span className="page-info">
              {page} / {totalPages}
            </span>
            <button
              type="button"
              className="page-btn"
              onClick={() => setPage((prev) => Math.min(totalPages, prev + 1))}
              disabled={page === totalPages}
            >
              Next
            </button>
          </div>
        ) : null}

        <AdSlot slot="1000000002" label="Bottom Banner Ad" className="ad-slot--banner" />
      </main>
    </div>
  );
}