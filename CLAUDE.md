# Autopilot Test — Social Value Portal

## Overview
A landing page for Social Value Portal — helping UK organisations measure, report, and maximise social value to win public sector contracts.

## Tech Stack
- Next.js 14 (App Router)
- React 18
- TypeScript (strict mode)
- Tailwind CSS for all styling (no inline styles)
- Lucide React for icons (no emoji as icons)

## Project Structure
```
app/
  layout.tsx    — Root layout with Inter font
  page.tsx      — Home page
  globals.css   — Tailwind import
```

## Development Commands
```bash
npm install          # Install dependencies
npm run dev          # Start dev server (port 3000)
npm run build        # Production build
npm run start        # Start production server
```

## Coding Standards
- Use TypeScript for all new files (no `any` types)
- Use functional components with hooks (no class components)
- Place new pages in `app/` using the App Router conventions
- **Use Tailwind CSS classes for ALL styling — never use inline styles**
- Use Lucide React for icons — never use emoji as icons in the UI
- Server Components by default, `"use client"` only when needed

## Design Standards
Follow these design principles for all UI work. The goal is production-quality visual design, not wireframes.

### Visual Depth
- Every card/panel must have `shadow-md` or better plus `ring-1 ring-gray-100` — no flat boxes
- Buttons need shadows (`shadow-lg shadow-blue-500/30`) and hover effects (`hover:shadow-xl hover:-translate-y-0.5`)
- Use `transition-all` on all interactive elements

### Hero Sections
- Use gradient backgrounds (`bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800`), never plain solid colors
- Add decorative elements: blurred gradient blobs (`blur-3xl`), grid overlays, accent shapes
- Large, bold typography: `text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight`

### Spacing & Layout
- Section padding: `py-20 md:py-28` minimum
- Content max-width: `max-w-7xl mx-auto px-6`
- Section headings: `mb-12` to `mb-16` gap before content grid
- Alternate section backgrounds: white → `bg-gray-50` → white

### Typography Hierarchy
- Hero heading: `text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight`
- Section heading: `text-3xl md:text-4xl font-bold text-gray-900`
- Card heading: `text-xl font-semibold`
- Body text: `text-lg text-gray-600 leading-relaxed`

### Buttons
- Primary: `rounded-full bg-blue-600 px-8 py-4 text-sm font-semibold text-white shadow-lg`
- Always include hover states and transitions
- Use `rounded-full` or `rounded-xl`, never plain `rounded`

### Cards
```html
<!-- Good: depth + hover -->
<div class="rounded-2xl bg-white p-8 shadow-md ring-1 ring-gray-100 transition-all hover:shadow-xl hover:-translate-y-1">

<!-- Bad: flat box -->
<div class="border border-gray-200 p-4 rounded">
```

### Anti-Patterns (Never Do)
- Inline styles (`style={{ }}`) — always use Tailwind classes
- Flat boxes with only a border and no shadow
- Emoji as icons — use Lucide React icons instead
- All sections with the same background color
- Buttons without hover/focus states
- Missing responsive breakpoints
