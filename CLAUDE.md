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

Single-page app with a persistent `Header` + `Footer` wrapping all routes via `App.jsx`.

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
    Contact.jsx        # Contact form via Formspree + contact details card
    Coverage.jsx       # Google Maps embed + coverage areas list
  index.css            # Tailwind directives + custom component classes (btn-accent, section-title, etc.)
```

## Custom Tailwind Classes (defined in `index.css`)

| Class | Use |
|---|---|
| `btn-accent` | Filled coral-red button |
| `btn-outline` | White outline button |
| `section-title` | Large heading (Playfair Display) |
| `section-divider` | Short red underline accent bar |

## Colour Palette (defined in `tailwind.config.js`)

| Token | Hex | Use |
|---|---|---|
| `navy` | `#1A1A2E` | Page background |
| `navy-mid` | `#16213E` | Header, footer, cards |
| `navy-light` | `#0F3460` | Secondary sections |
| `accent` | `#E94560` | Buttons, highlights, dividers |

## Adding the Logo

Replace the `<div>` placeholder in `src/components/Header.jsx` with:
```jsx
<img src="/logo.png" alt="B.Joseph Decorators" className="h-12 w-auto" />
```
Place the logo file at `public/logo.png`.

## Adding Gallery Images

1. Place image files in `public/gallery/`
2. Update the `images` array at the top of `src/pages/Gallery.jsx`:
```js
{ src: '/gallery/living-room.jpg', caption: 'Living Room Repaint' }
```

## Activating the Contact Form

The form uses [Web3Forms](https://web3forms.com) — no account needed:
1. Go to web3forms.com
2. Enter the email address you want submissions delivered to
3. Check your inbox and copy the access key from the confirmation email
4. Replace `YOUR_WEB3FORMS_ACCESS_KEY` in `src/pages/Contact.jsx`

## Updating the Coverage Map

1. Go to Google Maps → navigate to the coverage area → Share → Embed a map → Copy HTML
2. Replace the `src` value of the `<iframe>` in `src/pages/Coverage.jsx`
