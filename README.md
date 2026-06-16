# Tran Gia Phu — Data Engineer Portfolio

A premium, production-ready portfolio website built to communicate value to Data Engineering and Cloud Data Engineering recruiters within 30 seconds.

## Tech stack

- **Next.js 14** (App Router) + **TypeScript**
- **TailwindCSS** for styling (dark, Linear/Vercel-inspired)
- **Framer Motion** for animation
- **Lucide Icons**

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint (next/core-web-vitals) |
| `npm run type-check` | TypeScript type-checking |

## Content

All CV-derived content lives in [`src/data/portfolio.ts`](src/data/portfolio.ts) — a single source of truth for profile, experience, projects, skills, and certifications.

## Deployment

Optimized for **Vercel**. Push to a Git repo and import into Vercel, or run `vercel`.
