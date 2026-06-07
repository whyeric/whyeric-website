# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev     # start dev server on http://localhost:3000 (Turbopack)
npm run build   # production build
npm start       # serve the production build
```

There is **no linter and no test framework** configured. `npm run build` (which runs `tsc` type-checking) is the only automated correctness gate — run it to validate changes.

If edits to `app/globals.css` don't show up in the browser, the dev server may be serving a stale compiled CSS chunk; restart `npm run dev` to force a clean recompile.

## Stack

- **Next.js 16** (App Router, Turbopack) + **React 19** + **TypeScript**
- **Tailwind CSS v4** — configured entirely in `app/globals.css` via `@import "tailwindcss"` and an `@theme {}` block. There is **no `tailwind.config.js`**; the PostCSS plugin lives in `postcss.config.mjs`. Add design tokens to the `@theme` block, not a config file.
- Import alias `@/*` maps to the project root.

## Deployment

Push to `main` on GitHub → Vercel auto-builds and deploys to **whyeric.vercel.app**. No manual deploy step needed. Run `npm run build` locally before pushing to catch type errors first.

## Architecture

This is a single-author personal portfolio site with two routes: `/` (`app/page.tsx`) and `/experience` (`app/experience/page.tsx`). `app/layout.tsx` wraps both with the shared `Navbar` and footer. (A `/contact` route previously existed and was intentionally removed — contact links now live in the `socials` array on the home page.)

**Content is data-driven.** Each page defines plain arrays of objects at the top of the file (`highlights` and `socials` in `page.tsx`; `experiences` and `projects` in `experience/page.tsx`) and `.map()`s over them. The nav links in `components/Navbar.tsx` are likewise driven by a `links` array. To add or edit content, modify the array entry — do not hand-write repeated JSX blocks.

**Org logos** live in `public/logos/` with snake_case filenames (e.g. `cutc_logo.jpg`, `yale_logo.png`, `hack404_logo.jpg`). Two components render logos, both in `components/`:
- `InlineLogo` — small (~24px) logo set inline within prose (home page).
- `OrgLogo` — `size`-prop logo used in the experience list.

Both wrap an `<img>` with an `onError` handler that hides the image and reveals an `initials` fallback span. A missing or renamed logo file therefore degrades gracefully to initials rather than breaking the layout — so logo `src` and `initials` are always supplied together in the data arrays.

**Favicon** is `app/icon.png` — a circular 512×512 PNG (Next.js App Router picks it up automatically via the `app/icon.*` convention). Do not add a `favicon.ico`; it would take precedence.

Components that use hooks or event handlers (`Navbar` → `usePathname`; the logo components → `onError`) are marked `'use client'`. Pages themselves are server components.

## Design constraints

- **Light blue + white palette**: white backgrounds, `blue-100` borders/dividers, `blue-500` accents and links, `slate` text (`slate-800` headings, `slate-500`/`slate-400` body).
- **No icon libraries** (Lucide, Heroicons, Font Awesome, etc.) — this is intentional. Use text, org logos, or plain characters (e.g. `→`) instead.
- Links that sit inside body prose use a subtle dotted underline (`underline decoration-dotted underline-offset-2`) rather than bold/colored text, so they blend in while staying discoverable.
