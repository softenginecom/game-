'use client';

type TopbarProps = {
  value: string;
  onChange: (value: string) => void;
};

export function Topbar({ value, onChange }: TopbarProps) {
  return (
    <header className="topbar">
      <div className="topbar-inner">
        <div className="logo">2Player Unblocked</div>
        <div className="search-wrap">
          <span className="search-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="16" height="16">
              <circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M20 20l-3.5-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </span>
          <input
            aria-label="Search games"
            value={value}
            onChange={(event) => onChange(event.target.value)}
            className="search"
            placeholder="find game"
          />
          {value ? (
            <button
              type="button"
              className="search-clear"
              aria-label="Clear search"
              onClick={() => onChange('')}
            >
              <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          ) : null}
        </div>
        <div className="topbar-actions">
          <button type="button" aria-label="Profile" className="user-btn">
            U
          </button>
        </div>
      </div>
    </header>
  );
}
