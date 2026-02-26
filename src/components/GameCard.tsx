'use client';

import Link from 'next/link';
import type { Game } from '@/data/games';

type GameCardProps = {
  game: Game;
  isTopFavorite?: boolean;
};

export function GameCard({ game, isTopFavorite = false }: GameCardProps) {
  return (
    <Link href={`/games/${game.slug}`} className="game-card-btn">
      <article className="game-card">
        <div className="thumb-wrap">
          <img src={game.image} alt={game.title} loading="lazy" className="thumb" />
          {isTopFavorite ? (
            <span className="heart-badge" aria-label="Top favorite">
              <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
                <path d="M12 21l-1.3-1.2C6 15.4 3 12.7 3 9.4 3 6.8 5 5 7.6 5c1.5 0 2.9.7 3.9 1.8C12.5 5.7 13.9 5 15.4 5 18 5 20 6.8 20 9.4c0 3.3-3 6-7.7 10.4L12 21z" fill="currentColor" />
              </svg>
            </span>
          ) : null}
          <div className="card-overlay">
            <h3 className="game-title">{game.title}</h3>
          </div>
        </div>
      </article>
    </Link>
  );
}