# Autopilot Test

## Overview
A simple Next.js test project used to validate the project-autopilot skill workflow.

## Tech Stack
- Next.js 14 (App Router)
- React 18
- TypeScript

## Project Structure
```
app/
  layout.tsx    — Root layout
  page.tsx      — Home page
  globals.css   — Global styles
```

## Development Guidelines
- Use TypeScript for all new files
- Use the App Router (files go in `app/`)
- Keep components simple and functional
- Use inline styles or globals.css (no CSS modules needed for this test)

## How to Run
```bash
npm install
npm run dev    # Start dev server on port 3000
npm run build  # Production build
npm run start  # Start production server
```
