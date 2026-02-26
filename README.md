# 2Player Unblocked (Next.js Static Export)

Unblocked 2 player HTML5 games portal built with Next.js App Router + TypeScript.

## Stack

- Next.js App Router (`src/`)
- TypeScript
- Static export (`output: 'export'`)
- Netlify publish from `out/`

## Local Run (VS Code)

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build (Static Export)

```bash
npm run build
```

Output is generated in `out/`.

## Environment Variables

Create `.env.local` for local development:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-xxxxxxxxxxxxxxxx
```

- `NEXT_PUBLIC_SITE_URL` is used in canonical, sitemap, robots, and schema URLs.
- `NEXT_PUBLIC_ADSENSE_CLIENT` enables real AdSense script/slots.

## AdSense Placement Map

Configured slots:

- Home/Games top banner: slot `1000000001`
- Home/Games bottom banner: slot `1000000002`
- Game detail after player: slot `1000000011`
- Game detail bottom: slot `1000000012`

Update slot IDs in:

- `src/components/GameGrid.tsx`
- `src/app/games/[slug]/page.tsx`

## SEO Setup Included

- Per-page metadata for Home, Games, Game Detail
- Dynamic game metadata (`generateMetadata`) + canonical
- `sitemap.xml` from `src/app/sitemap.ts`
- `robots.txt` from `src/app/robots.ts`
- JSON-LD:
  - `WebSite` schema on Home
  - `VideoGame` schema on each game page
- SEO unique text generator:
  - `src/lib/seoTemplate.ts`

## Security Headers (Netlify)

Headers are configured via:

- `public/_headers`

Includes:

- `Content-Security-Policy`
- `Strict-Transport-Security`
- `X-Frame-Options`
- `X-Content-Type-Options`
- `Referrer-Policy`
- `Permissions-Policy`
- Static asset cache headers

## Ads.txt

Template file added:

- `public/ads.txt`

Replace publisher ID with your real AdSense publisher ID.

## GitHub Push

```bash
git init
git add .
git commit -m "Setup static games portal with SEO, ads, and security headers"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

## Netlify Deploy

1. Connect repository in Netlify.
2. Build settings are already set in `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `out`
3. Add Netlify environment variables:
   - `NEXT_PUBLIC_SITE_URL`
   - `NEXT_PUBLIC_ADSENSE_CLIENT`
4. Deploy.