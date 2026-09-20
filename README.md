# Nathan Fang — portfolio

Next.js (App Router) port of the portfolio design. Deployed on Vercel at `nathanfang.com`.

## Run locally

```bash
npm install
npm run dev
```

## Routes

| Path | Page |
|---|---|
| `/` | Home — hero, selected work, the four-level ladder, diagnosis CTA |
| `/befreed` | BeFreed case study |
| `/turbo` | Turbo AI case study |
| `/iru` | Iru case study |
| `/comedy` | My own accounts |
| `/about` | About + timeline |
| `/contact` | Contact cards |

## Structure

- `app/` — one folder per route, plus `layout.jsx` (fonts, nav, footer) and `globals.css` (resets, `fadeUp` keyframes, hover states).
- `components/Nav.jsx`, `components/Footer.jsx` — shared chrome.
- `components/A.jsx` — anchor that routes internal links through `next/link`.
- `lib/site.js` — email, cal.com URL, and `RESUME_URL`.
- Styling is inline on the elements, matching the original design. Hover states live in `globals.css` as `.hv*` classes.

## Still to add

1. Square headshot for the about page (`public/about.jpg` is the current placeholder crop).
2. Reel screenshots for every striped placeholder in the case studies.
3. Video links / embeds — Iru reels, Christmas v1 and v2, the 8M video.
4. Résumé PDF: drop it in `public/` and set `RESUME_URL` in `lib/site.js`; the download buttons appear automatically.

## Deploy

```bash
git remote add origin https://github.com/nathan-fang1/Nathan-Fang-portfolio-sep-2026.git
git push -u origin main
```

Then import the repo in Vercel (project `project-rfad5`) — framework preset Next.js, no env vars needed — and point `nathanfang.com` at it under Settings → Domains.
