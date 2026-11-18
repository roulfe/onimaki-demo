# Onimaki Homepage (React + Vite + Tailwind CSS v4)

This is a **homepage-only**, unofficial website design concept, converted from the previous CSS version to **Tailwind utility classes**. The generated product imagery is concept art, not official Onimaki photography.

## Start the app

Requires Node.js 20.19+ (or Node.js 22.12+).

```bash
npm install
npm run dev
```

Open the URL printed by Vite (typically http://localhost:5173).

To make a production build:

```bash
npm run build
npm run preview
```

## Files

- `src/App.jsx`: all of the homepage components and responsive Tailwind utility classes.
- `src/index.css`: **only** Tailwind's import, design tokens, and two custom entrance animations. No traditional layout/style rules.
- `vite.config.js`: enables the official `@tailwindcss/vite` plugin.
- `public/images/onimaki-logo-header-transparent.png`: transparent logo used in the navbar and footer.
- `public/images/`: concept images for the hero, product showcase, and storefront.

## Notes

- Header and footer include Home, Menu, Gallery, Our Story. The latter three are intentional, non-clickable labels until those pages are built.
- Order Online, Instagram and Get Directions point to external websites. Verify any external links, hours, and business information with Onimaki before publishing.
- Replace generated imagery and the recreated logo with official assets if Onimaki approves the project.
- The custom animations respect reduced-motion settings (`motion-safe:`).
