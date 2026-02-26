'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import type { CSSProperties } from 'react';
import type { Game } from '@/data/games';

type GamesCatalogProps = {
  games: Game[];
};

export function GamesCatalog({ games }: GamesCatalogProps) {
  const categories = useMemo(
    () => ['All', ...Array.from(new Set(games.map((game) => game.category)))],
    [games]
  );

  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');

  const filtered = useMemo(() => {
    return games.filter((game) => {
      const byQuery =
        game.title.toLowerCase().includes(query.toLowerCase()) ||
        game.description.toLowerCase().includes(query.toLowerCase()) ||
        game.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase()));

      const byCategory = category === 'All' || game.category === category;
      return byQuery && byCategory;
    });
  }, [games, query, category]);

  return (
    <>
      <div style={filtersWrapStyle}>
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search games..."
          style={inputStyle}
          aria-label="Search games"
        />
        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          style={inputStyle}
          aria-label="Filter by category"
        >
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div style={gridStyle}>
        {filtered.map((game) => (
          <article key={game.slug} style={cardStyle}>
            <img src={game.image} alt={game.title} style={thumbStyle} loading="lazy" />
            <div style={badgeStyle}>{game.category}</div>
            <h2 style={{ marginTop: 8, fontSize: 22 }}>{game.title}</h2>
            <p>{game.description}</p>
            <Link href={`/games/${game.slug}`} style={cardLinkStyle}>
              Play Now
            </Link>
          </article>
        ))}
      </div>

      {filtered.length === 0 && <p>No games found for your filter.</p>}
    </>
  );
}

const filtersWrapStyle: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '2fr 1fr',
  gap: 10,
  marginBottom: 20
};

const inputStyle: CSSProperties = {
  width: '100%',
  padding: '10px 12px',
  borderRadius: 8,
  border: '1px solid #cbd5e1',
  fontSize: 16
};

const gridStyle: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
  gap: 16
};

const cardStyle: CSSProperties = {
  background: '#ffffff',
  borderRadius: 10,
  border: '1px solid #e2e8f0',
  padding: 16
};

const thumbStyle: CSSProperties = {
  width: '100%',
  aspectRatio: '4 / 3',
  objectFit: 'cover',
  borderRadius: 8,
  display: 'block',
  marginBottom: 10
};

const badgeStyle: CSSProperties = {
  display: 'inline-block',
  fontSize: 12,
  fontWeight: 700,
  padding: '4px 8px',
  borderRadius: 999,
  background: '#ecfeff',
  color: '#0f766e'
};

const cardLinkStyle: CSSProperties = {
  color: '#0f766e',
  fontWeight: 700,
  textDecoration: 'none'
};