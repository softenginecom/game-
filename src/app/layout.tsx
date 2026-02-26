import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Script from 'next/script';
import './globals.css';

const siteUrl = 'https://2playerunblocked.netlify.app';
const adsenseClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

export const metadata: Metadata = {
  title: {
    default: '2 Player Unblocked Games - Free Online 2 Player Browser Games',
    template: '%s | 2Player Unblocked'
  },
  description: 'Play free 2 player unblocked games online. Challenge your friends in browser with no download. Best unblocked games for school and home.',
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/'
  },
  keywords: ['2 player unblocked games', 'unblocked games', '2 player browser game', 'play online', 'free browser games'],
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: '2Player Unblocked',
    title: '2 Player Unblocked Games - Free Online 2 Player Browser Games',
    description: 'Play free 2 player unblocked games online. Challenge your friends in browser with no download. Best unblocked games for school and home.'
  },
  twitter: {
    card: 'summary_large_image',
    title: '2 Player Unblocked Games - Free Online 2 Player Browser Games',
    description: 'Play free 2 player unblocked games online. Challenge your friends in browser with no download. Best unblocked games for school and home.'
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