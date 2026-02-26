import Link from 'next/link';
import type { CSSProperties } from 'react';

export function Header() {
  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        <Link href="/" style={logoStyle}>
          Unblocked 2 Player Games
        </Link>
        <nav>
          <Link href="/games" style={linkStyle}>
            Games
          </Link>
        </nav>
      </div>
    </header>
  );
}

const headerStyle: CSSProperties = {
  borderBottom: '1px solid #dcdcdc',
  background: '#ffffff'
};

const containerStyle: CSSProperties = {
  maxWidth: 1100,
  margin: '0 auto',
  padding: '14px 20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
};

const logoStyle: CSSProperties = {
  fontSize: 20,
  fontWeight: 700,
  textDecoration: 'none',
  color: '#111827'
};

const linkStyle: CSSProperties = {
  textDecoration: 'none',
  color: '#0f766e',
  fontWeight: 600
};