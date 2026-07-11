# Henri & Frères — Corporate Website

A premium, production-ready corporate website for **Henri & Frères SARL**, one of Cameroon's leading FMCG distribution and importation companies.

Built to communicate trust, scale and logistics capability to multinational partners, retailers, suppliers and investors — with the polish of a Fortune 500 corporate presence.

## Tech stack

- **Next.js 15** (App Router) + **React 18**
- **TypeScript**
- **Tailwind CSS** (custom design system: deep navy / gold / ivory)
- **Framer Motion** (scroll reveals, counters, parallax, page micro-interactions)
- **Lucide** icons
- `next/font` (Fraunces display serif + Inter)

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Build for production:

```bash
npm run build
npm run start
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, animated stats, coverage map, categories, timeline, testimonials, news |
| `/about` | Mission, vision, values, leadership, milestones |
| `/our-story` | Editorial narrative from 1993 to today |
| `/products` | Filterable product explorer across 7 categories |
| `/brands` | Owned brands (Henri, Two Cows) + principal partners |
| `/distribution` | Logistics: hubs, interactive Cameroon map, supply chain, fleet |
| `/services` | End-to-end distribution services |
| `/partners` | Partnership types & commitments |
| `/news` | Filterable newsroom |
| `/careers` | Culture, open roles, application form |
| `/csr` | Sustainability & impact |
| `/contact` | Contact form + interactive map + branch directory |
| `/company-profile` | Printable / save-as-PDF corporate profile |

## Features

- 🌍 **EN / FR language switcher** (chrome + hero, extendable via `src/lib/i18n.ts`)
- 🌗 **Dark mode** with system preference + persistence
- 🔎 Client-side **search** overlay
- 🗺️ **Interactive Cameroon map** with regional hubs
- 📈 Animated statistics counters
- 💬 Floating **WhatsApp** button + **live-chat placeholder**
- 🍪 Cookie consent banner · ⬆️ back-to-top · newsletter signup
- ♿ Accessibility: skip link, focus states, reduced-motion support
- 🔍 SEO: metadata, Open Graph, JSON-LD Organization schema, `sitemap.xml`, `robots.txt`

## Content

All copy and data live in [`src/lib/data.ts`](src/lib/data.ts) — the client's communications team can update figures, brands, branches, news and jobs in one place. Imagery uses Unsplash placeholders (see `next.config.mjs`) intended to be swapped for professional photography.

## Structure

```
src/
├── app/                 # routes (App Router) + globals, sitemap, robots, icon
├── components/
│   ├── layout/          # Header, Footer, FloatingActions, CookieBanner, Search
│   ├── home/            # homepage sections
│   ├── products/ news/ careers/ contact/   # page-specific client components
│   ├── ui/              # design-system primitives (Button, Reveal, Counter, Map…)
│   └── providers.tsx    # theme + i18n context
└── lib/                 # data + i18n dictionary
```
