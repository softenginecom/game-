import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Script from 'next/script';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com';
const adsenseClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

export const metadata: Metadata = {
  title: {
    default: '2Player Unblocked',
    template: '%s | 2Player Unblocked'
  },
  description: 'Play unblocked HTML5 multiplayer games instantly. Fast loading, no install, browser-ready.',
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/'
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: '2Player Unblocked',
    title: '2Player Unblocked',
    description: 'Play unblocked HTML5 multiplayer games instantly. Fast loading, no install, browser-ready.'
  },
  twitter: {
    card: 'summary_large_image',
    title: '2Player Unblocked',
    description: 'Play unblocked HTML5 multiplayer games instantly. Fast loading, no install, browser-ready.'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1
    }
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="theme-dark">
      <head>
        <style>{`html,body{background:#0d0e11 !important;color:#e9e9ea !important;margin:0 !important;padding:0 !important;}`}</style>
        {adsenseClient ? (
          <Script
            id="adsense-script"
            async
            strategy="afterInteractive"
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClient}`}
            crossOrigin="anonymous"
          />
        ) : null}
      </head>
      <body className="app-root" style={{ backgroundColor: '#0d0e11', color: '#e9e9ea', margin: 0 }}>
        {children}
      </body>
    </html>
  );
}