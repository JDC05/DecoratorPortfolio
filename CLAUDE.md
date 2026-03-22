# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install        # Install dependencies (run once after cloning)
npm run dev        # Start dev server at http://localhost:5173
npm run build      # Production build → /dist
npm run preview    # Preview the production build locally
```

## Tech Stack

- **React 18** with React Router v6 (client-side routing, no SSR)
- **Vite** as the build tool
- **Tailwind CSS v3** for all styling — no separate CSS modules or styled-components

## Architecture

Single-page app with a persistent `Header` + `Footer` wrapping all routes via `App.jsx`. `App.jsx` also contains `ScrollToTop` (smooth-scrolls to top on route change) and `BackToTop` (floating button, appears after 400px scroll).

```
src/
  App.jsx              # Route definitions (/, /about, /gallery, /coverage, /contact)
  components/
    Header.jsx         # Sticky header: logo, phone number, nav links, mobile hamburger
    Footer.jsx         # Copyright, quick links, contact details
  pages/
    Home.jsx           # Hero, stats bar, services grid, CTA banner
    About.jsx          # Story section, values grid
    Gallery.jsx        # Image grid with lightbox; images array at the top of the file
    Contact.jsx        # Contact form via Web3Forms + contact details card
    Coverage.jsx       # Google Maps embed + coverage areas list
  index.css            # Tailwind directives + custom component classes + animations
```

## Colour Palette (defined in `tailwind.config.js`)

| Token | Hex | Use |
|---|---|---|
| `parchment` | `#F4EFE6` | Page background |
| `parchment-dark` | `#EAE3D7` | Hover states |
| `parchment-border` | `#D6CCBA` | Borders |
| `ink` | `#1E1B16` | Primary text |
| `ink-mid` | `#4A4438` | Secondary text |
| `slate` | `#8B7D6B` | Muted text |
| `copper` | `#C4622D` | Buttons, highlights, accents |
| `copper-hover` | `#A84F22` | Button hover state |
| `copper-pale` | `#FAE8DC` | Light copper backgrounds |

## Fonts (loaded via Google Fonts in `index.html`)

| Token | Family | Use |
|---|---|---|
| `font-sans` | Jost | Body text, buttons, labels |
| `font-heading` | Cormorant Garamond | All headings (h1–h4 via base layer) |

## Custom Classes (defined in `index.css`)

| Class | Use |
|---|---|
| `btn-primary` | Filled copper button (uppercased, tracked) |
| `btn-ghost` | Ink-bordered outline button |
| `btn-accent` | Legacy alias → `btn-primary` |
| `btn-outline` | Legacy alias → `btn-ghost` |
| `section-title` | Large heading (Cormorant Garamond, 4xl–5xl) |
| `section-label` | Small copper uppercase label above headings |
| `copper-rule` / `section-divider` | Short `w-12 h-px` copper horizontal rule |
| `link-copper` | Ink text with copper underline-slide hover |
| `animate-fade-up` | fadeUp entry animation (0.65s) |
| `animate-fade-in` | fadeIn entry animation (0.5s) |
| `.anim-d1` – `.anim-d5` | Staggered delay helpers (0.08s–0.48s steps) for fade animations |
