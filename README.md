# Bridges Solicitors — Website

Production-grade marketing site for Bridges Solicitors (London).

## Stack
- Next.js 14 (App Router)
- Tailwind CSS 3
- Typography: Fraunces (display) / Inter Tight (sans) / JetBrains Mono (meta)

## Scripts
```bash
npm install
npm run dev     # local dev at http://localhost:3000
npm run build   # production build
npm start       # start production server
```

## Structure
- `app/` — App Router routes (home, practice/[slug], about, fees, contact, external-links)
- `components/layout/` — Header, TopBar, Footer, Section
- `components/sections/` — Homepage sections
- `components/ui/` — Reveal (IntersectionObserver), PageHero
- `lib/content.ts` — Single source of truth: practices, fees, firm contact, external links
- `public/` — logo + regulator badges

## Design tokens
See `tailwind.config.ts` and `app/globals.css`.
- Ink `#0B1B2B`, Paper `#F6F1E8`, Brass `#B08855`
- Display scale clamps between mobile and desktop for responsive typography
