# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server at http://localhost:5173
npm run build     # Production build → dist/
npm run preview   # Preview production build locally
npm run lint      # ESLint (js, jsx files)
```

No test runner is configured.

## Architecture

Single-page portfolio site for a marketing professional. React 19 + Vite, no router — all navigation is anchor-scroll within one page.

**Render order** (top → bottom): `Navbar → Hero → About → Philosophy → Projects → Contact → Footer`

**CSS approach:** co-located per component (`Navbar.css`, `Hero.css`, etc.). Global design tokens (colors, spacing utilities) live in `src/index.css` as CSS custom properties. Use those variables instead of hardcoding colors.

Key design tokens in `src/index.css`:
- `--accent` / `--accent-light` — primary red (`#e94560` / `#ff6b81`)
- `--card-bg` / `--section-bg` — dark surface colors
- `--text-light` — secondary text
- `--border` — subtle border (`rgba(255,255,255,0.08)`)
- `.section` / `.section-alt` / `.container` — layout primitives shared across all sections

**Content is hardcoded** inside each component as plain JS arrays/objects (e.g., `projects` array in `Projects.jsx`, `skills` array in `About.jsx`). To update portfolio content, edit those arrays directly — there is no CMS or data layer.

**Active nav highlighting** in `Navbar.jsx` uses `IntersectionObserver` watching each section's `id`. Section IDs must match the `href` in the `navItems` array (`#about`, `#philosophy`, `#projects`, `#contact`).

**Contact form** (`Contact.jsx`) is frontend-only — submission sets `sent = true` and shows a success screen. Wiring to a real backend requires adding a `fetch`/`axios` call inside `handleSubmit` before `setSent(true)`.
