# Apni Library

A modern, premium website for **Apni Library** — a competitive-exam reading room in Ballia, Uttar Pradesh, owned and run by **Amit Nishad**. Built to showcase the library's facilities, a full photo gallery, membership plans, and to attract students preparing for UPSC, SSC, Banking, Railway, NEET, JEE, CUET, and university exams.

## Tech Stack

- [Next.js 15](https://nextjs.org) (App Router)
- React 19 + TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React Icons
- next-themes (dark/light mode)
- `next/image` for optimized images

## Getting Started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it locally.

Build for production:

```bash
npm run build
npm start
```

## Project Structure

```
app/                  Routes, layout, metadata, sitemap/robots
components/
  layout/             Navbar, Footer
  home/               Hero, Stats, About, Facilities, Membership, Testimonials
  gallery/             Gallery (filters + lightbox)
  contact/             Contact form, map, FAQ
  shared/             Reveal animation, section heading, theme toggle, social icons
data/site.ts          Single source of truth for all site content (name, address,
                       phone, pricing, gallery images, testimonials, FAQs, etc.)
hooks/                 Custom hooks (animated counters)
lib/utils.ts           Tailwind class-merging helper
types/                 Shared TypeScript types
```

## Editing Content

Almost everything you'd want to change day-to-day — phone number, WhatsApp
number, address, membership prices, gallery images, testimonials, FAQs — lives
in **`data/site.ts`**. Edit that one file rather than hunting through
components.

Things to update before going live:

- [ ] Real phone number, WhatsApp number, and email in `data/site.ts`
- [ ] Real Google Maps embed URL (`mapsEmbedSrc`) for the exact location
- [ ] Real photos in `public/images/` in place of the `picsum.photos`
      placeholders used throughout `data/site.ts`
- [ ] Confirm seat counts, shift timings, and membership pricing are accurate
- [ ] Wire the contact form (`components/contact/contact.tsx`) to a real
      backend — e.g. [Formspree](https://formspree.io), a Next.js API route,
      or an email service — it currently only simulates a submission
- [ ] Set the production domain in `app/layout.tsx` (`metadataBase`) and
      `app/sitemap.ts` / `app/robots.ts` (currently `apnilibrary.in`)

## Deployment

This project deploys cleanly on [Vercel](https://vercel.com):

1. Push this repo to GitHub
2. Go to Vercel → **Add New Project** → import the repo
3. Vercel auto-detects Next.js — no extra config needed
4. Every push to `main` redeploys automatically; other branches get preview URLs

## License

Private project for Apni Library, Ballia, Uttar Pradesh.