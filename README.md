# Emotional Clarity — Next.js

A minimal, emotionally intelligent web experience built with Next.js App Router, Tailwind CSS, and Framer Motion.

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stack

- **Next.js 14** — App Router
- **Tailwind CSS** — Utility styling
- **Framer Motion** — Scroll-triggered animations
- **Google Fonts** — Cormorant Garamond (display) + DM Sans (body)
- **Web Audio API** — Ambient sound generation (no external files needed)

## Structure

```
app/
  layout.tsx       — Font imports, metadata, root layout
  page.tsx         — Main page assembling all sections
  globals.css      — Base styles + Tailwind directives

components/
  ParticleCanvas   — Canvas-based floating particles
  HeroSection      — Full-screen landing with animated headline
  StorySection     — Scroll-triggered 3-step story
  IntentSection    — Frosted glass intent card
  ChoiceSection    — Interactive choice buttons with responses
  ClosingSection   — Soft closing line
  MusicToggle      — Ambient tone generator (Web Audio API)
```

## Customization

- Edit copy inside each component
- Colors live in `tailwind.config.js` and inline styles
- Swap the `contact` response in `ChoiceSection.tsx` for your actual contact details
- The ambient music uses pure sine waves — adjust frequencies in `MusicToggle.tsx`
