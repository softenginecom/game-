'use client';

import { useMemo, useRef } from 'react';

type GamePlayerSectionProps = {
  title: string;
  embedUrl: string;
  referrerUrl: string;
};

function withSdkReferrerUrl(embedUrl: string, referrerUrl: string): string {
  try {
    const url = new URL(embedUrl);
    const wrapped = new URL('https://embed.gamedistribution.com/');
    wrapped.searchParams.set('url', url.toString());
    wrapped.searchParams.set('gd_sdk_referrer_url', referrerUrl);
    return wrapped.toString();
  } catch {
    const separator = embedUrl.includes('?') ? '&' : '?';
    return `${embedUrl}${separator}gd_sdk_referrer_url=${encodeURIComponent(referrerUrl)}`;
  }
}

export function GamePlayerSection({ title, embedUrl, referrerUrl }: GamePlayerSectionProps) {
  const shellRef = useRef<HTMLDivElement | null>(null);
  const iframeSrc = useMemo(() => withSdkReferrerUrl(embedUrl, referrerUrl), [embedUrl, referrerUrl]);

  const toggleFullscreen = async () => {
    const node = shellRef.current;
    if (!node) return;

    if (!document.fullscreenElement) {
      await node.requestFullscreen();
      return;
    }

    await document.exitFullscreen();
  };

  return (
    <section id="game-player" className="detail-section">
      <h2 className="detail-subtitle">Game</h2>

      <div className="player-shell" ref={shellRef}>
        <div className="player-topbar">
          <span className="player-logo">2Player Unblocked</span>
          <button type="button" className="player-full-btn" aria-label="Fullscreen" onClick={toggleFullscreen}>
            <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
              <path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="player-frame-wrap">
          <iframe
            src={iframeSrc}
            title={title}
            loading="lazy"
            allow="autoplay; fullscreen; gamepad"
            className="frame"
          />
        </div>
      </div>
    </section>
  );
}
