'use client';

import { useMemo } from 'react';
import { getGamePlays } from '@/data/games';
import type { Game } from '@/data/games';

type GameModalProps = {
  game: Game | null;
  games: Game[];
  topFavoriteSlugs: Set<string>;
  onSelectGame: (game: Game) => void;
  onClose: () => void;
};

export function GameModal({ game, games, topFavoriteSlugs, onSelectGame, onClose }: GameModalProps) {
  if (!game) {
    return null;
  }
  const iframeSrc = (() => {
    try {
      const url = new URL(game.embedUrl);
      url.searchParams.set('gd_sdk_referrer_url', window.location.href);
      return url.toString();
    } catch {
      return game.embedUrl;
    }
  })();

  const similarGames = useMemo(() => {
    const currentTags = new Set(game.tags);

    return games
      .filter((item) => item.slug !== game.slug)
      .map((item) => {
        const tagScore = item.tags.filter((tag) => currentTags.has(tag)).length;
        const categoryScore = item.category === game.category ? 2 : 0;
        const score = tagScore + categoryScore;
        return { item, score };
      })
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score || getGamePlays(b.item.slug) - getGamePlays(a.item.slug))
      .slice(0, 10)
      .map(({ item }) => item);
  }, [game, games]);

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-label={game.title} onClick={onClose}>
      <div className="modal-panel" onClick={(event) => event.stopPropagation()}>
        <button type="button" aria-label="Close" onClick={onClose} className="close-btn">
          X
        </button>

        <img src={game.image} alt={game.title} className="modal-image" loading="lazy" />
        <h2 className="modal-title">{game.title}</h2>
        <div className="modal-meta">
          <span className="modal-chip">{game.category}</span>
          <span className="modal-chip">{topFavoriteSlugs.has(game.slug) ? 'Favorite' : 'Standard'}</span>
        </div>
        <p className="modal-desc">{game.description}</p>

        <section className="modal-section">
          <h3 className="modal-subtitle">Instruction</h3>
          <ul className="modal-list">
            {game.controls.map((control) => (
              <li key={control}>{control}</li>
            ))}
          </ul>
        </section>

        <section className="modal-section">
          <h3 className="modal-subtitle">Similar Games</h3>
          <div className="similar-grid">
            {similarGames.map((item) => (
              <button
                key={item.slug}
                type="button"
                className="similar-card"
                onClick={() => onSelectGame(item)}
              >
                <img src={item.image} alt={item.title} loading="lazy" className="similar-thumb" />
                <span className="similar-title">{item.title}</span>
              </button>
            ))}
          </div>
        </section>

        <div className="modal-embed">
          <iframe
            src={iframeSrc}
            title={game.title}
            loading="lazy"
            allow="autoplay; fullscreen; gamepad"
            className="frame"
          />
        </div>
      </div>
    </div>
  );
}
