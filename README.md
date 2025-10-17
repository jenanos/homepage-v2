# Jens Osberg – Personal Homepage

A single-page portfolio built with Next.js 15 and Tailwind CSS. The site highlights
Jens Osberg’s work across law, technology, speaking engagements, and music. It
features a parallax hero, animated testimonials, embedded media, and responsive
layouts tailored for mobile and desktop visitors.

## Features

- **Animated hero** with parallax layers that respect `prefers-reduced-motion`.
- **Section-based navigation** that tracks the user’s scroll position and updates
  the active menu item in real time.
- **Accessible typewriter effect** that provides screen reader friendly fallbacks.
- **Speaking carousel** with swipe/keyboard controls and deterministic animation
  values to avoid layout jumps.
- **Rich media embeds** for Spotify and past projects.

## Getting started

### Prerequisites

- Node.js 18 or newer (Next.js 15 requirement)
- npm (ships with Node.js)

### Installation

Install dependencies:

```bash
npm install
```

Start the development server on [http://localhost:3000](http://localhost:3000):

```bash
npm run dev
```

### Useful scripts

| Command        | Description                                |
| -------------- | ------------------------------------------ |
| `npm run dev`  | Start the app in development mode.         |
| `npm run build`| Create an optimized production build.      |
| `npm start`    | Serve the production build locally.        |
| `npm run lint` | Run ESLint using the Next.js configuration.|

## Project structure

```
app/                 # Next.js App Router entry points
components/          # UI building blocks (hero, sections, navigation)
components/ui/       # Reusable animation and UI primitives
lib/                 # Shared utilities and React hooks
public/              # Static assets (images, SVGs, etc.)
```

Key sections are defined in `components/` and rendered from `app/page.tsx`. The
navigation observes these sections to keep the menu in sync with the viewport.

## Accessibility & performance

- Motion-heavy components check `prefers-reduced-motion` to avoid overwhelming animations.
- The mobile menu is fully keyboard accessible with appropriate ARIA labels.
- Typewriter animations provide screen-reader friendly text equivalents.
- Media queries use a lightweight custom hook to stay compatible with server-side rendering.

## Deployment

The site is optimized for platforms such as [Vercel](https://vercel.com). Build
with `npm run build` and deploy the generated output according to your hosting
provider’s instructions.
