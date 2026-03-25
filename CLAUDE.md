# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Site institucional da **LAR Arquitetura**, escritório de arquitetura autoral e contextual.

## Commands

```bash
npm run dev      # dev server (localhost:3000)
npm run build    # production build — run before any deploy
npm run lint     # ESLint
npm run start    # serve production build
```

No test suite configured. Validate changes with `npm run build` to catch TypeScript and import errors.

## Tech Stack

- **Next.js 16** — App Router, server components by default; add `'use client'` only for interactivity
- **Tailwind CSS v4** — tokens defined via `@theme inline` in `src/app/globals.css` (no `tailwind.config.ts`)
- **Framer Motion 12** — all animations must use `useReducedMotion()` with a fallback
- **TypeScript** — no `any`; all data shapes typed in `src/data/projects.ts`
- **React 19**

## Architecture

### Routing
- `/` — `src/app/page.tsx` assembles all homepage sections in order
- `/projetos` — `src/app/projetos/page.tsx` full project grid
- `/projetos/[slug]` — `src/app/projetos/[slug]/page.tsx` individual project detail

### Data Layer
`src/data/projects.ts` is the single source of truth for all project data. It exports:
- `PROJECTS` — full array of all `ProjectData` objects
- `ProjectCategory` type — `'Casas' | 'Comércios' | 'Interiores' | 'Edifícios'`
- `PROJECT_CATEGORIES` — ordered tuple of categories
- `getFeaturedProjects()` — curated subset shown on the homepage
- `getProjectImagePath(slug, filename)` — resolves `/images/projects/{slug}/{filename}`

Project images live in `public/images/projects/{slug}/`.

### Component Structure
```
src/components/
  layout/     Navigation, Footer
  sections/   One file per page section (Hero, Projetos, Diferenciadores, etc.)
  ui/         Reusable primitives (Button, AnimatedText, SectionLabel, SplashScreen, ProjectGridCard)
```

`AnimatedText` is a scroll-reveal wrapper (Framer Motion `whileInView`). Use it to wrap headings and paragraphs in section components. It accepts `delay` and `direction` props.

### Styling
All design tokens are CSS custom properties defined in `globals.css` under `@theme inline`:
- Colors: `--color-bg`, `--color-bg-warm`, `--color-bg-dark`, `--color-ink`, `--color-ink-secondary`, `--color-ink-muted`, `--color-accent`, `--color-border`
- Fonts: `--font-heading` (Playfair Display → replace with Editorial New), `--font-body` (Inter → replace with Neue Haas Grotesk)

**Critical:** `--color-accent` (#A18461) is only for hover/focus/active micro-interactions — never as a background or dominant color.

`border-radius: 0` is applied globally in `globals.css`. Never add rounded corners.

### Motion constants
`src/lib/motion.ts` exports shared easing curves (`EASE_REVEAL`, `EASE_UI`), stagger delay, and preset animation objects (`scrollReveal`, `clipPathReveal`, `kenBurns`).

## Homepage Section Order

`src/app/page.tsx` renders sections in this order:
1. Hero
2. Reconhecimento (stats strip — dark bg)
3. Projetos (filtered grid with sidebar — warm bg)
4. Diferenciadores (S-curve alternating layout)
5. Depoimentos (carousel — dark bg)
6. ParaQuem
7. CTAFinal (dark bg)
8. FAQ (accordion)

## Key Content Files

- `copy.md` — approved copy for all sections; authoritative text source
- `visual-references.md` — visual direction and reference sites
- `design-specs.md` — full design system specification
- `Posicionamento.pdf` — original client briefing

## Conventions

- Mobile-first; breakpoints `sm:640 md:768 lg:1024 xl:1280`
- Placeholder/invented content marked with `[SUGESTÃO]`
- No decorative icons — typography-only ornaments
- Container: `max-w-[1280px] mx-auto px-6 md:px-12 xl:px-20`
- Section padding: `py-[80px] lg:py-[120px]` (light sections), `py-[60px] lg:py-[100px]` (dark/compact sections)
