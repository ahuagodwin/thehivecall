# TheHiveCall Technologies — Website

A fully animated, multi-page marketing site for TheHiveCall Technologies Ltd — a technology
company delivering cybersecurity, blockchain, software development, products, IT consultancy,
financial services & investment, and training. Built with Vite, React, TypeScript, Tailwind
CSS v4, Framer Motion, Zustand, and Redux Toolkit.

## Stack

- **Vite + React 19 + TypeScript** — build tooling and app shell
- **Tailwind CSS v4** (`@tailwindcss/vite`) — utility styling, theme tokens in `src/index.css`
- **Framer Motion** — scroll reveals, hover micro-interactions, page-load hero animation, carousel transitions
- **Recharts** — animated radar chart in the Industries section
- **Zustand** — lightweight, transient UI state (mobile menu, nav dropdowns, header scroll state, testimonial carousel index)
- **Redux Toolkit + React Redux** — async form submission state (contact form, newsletter signup) via `createAsyncThunk`
- **oxlint** — fast linting

## Folder structure

```
src/
├── api/            # low-level fetch wrapper (httpClient)
├── common/         # small reusable UI atoms (Button, Container, Icon, Logo, Reveal, ...)
├── components/
│   ├── layout/     # Header, Footer
│   └── home/       # Hero, Services, Philosophy, Industries, Testimonials, ContactSection, ...
├── config/         # site-wide config (site.config.ts)
├── constants/      # navigation links, motion/animation variants
├── data/           # static content mirrored from the source design (home.data.ts)
├── lib/            # generic utility functions (cn, isValidEmail, scrollToId, ...)
├── services/       # contact.service.ts / newsletter.service.ts — call the API, gracefully
│                     fall back to a simulated response if no backend is wired up
├── store/
│   ├── index.ts        # RTK store
│   ├── hooks.ts         # typed useAppDispatch / useAppSelector
│   ├── uiStore.ts       # Zustand store for transient UI state
│   └── slices/          # contactSlice, newsletterSlice (RTK async thunks)
└── types/          # shared TypeScript interfaces
```

Path aliases (`@components`, `@common`, `@store`, `@app-types`, etc.) are configured in
both `vite.config.ts` and `tsconfig.app.json`.

## Pages / Routing

Client-side routing via `react-router-dom`:

- `/` — Home page (`src/components/home/HomePage.tsx`)
- `/contact-us` — Contact page (`src/components/contact/ContactPage.tsx`) — hero with contact
  info, "Get in Touch" form, office locations, and a schedule-consultation CTA
- `/testimonials` — Testimonials page (`src/components/testimonials/TestimonialsPage.tsx`) —
  hero with Google rating badge + client logos, a 2×2 reviews grid, and a closing CTA
- `/insights` — Insights page (`src/components/insights/InsightsPage.tsx`) — hero heading and a
  3-card article grid (a "REPORT" card renders a stylized stacked report-cover graphic instead
  of a photo, built in `components/insights/ReportCoverArt.tsx`)
- `/about` — About / Who We Are page (`src/components/about/AboutPage.tsx`) — hero, a stats +
  values section, an interactive "Our History" timeline (click a year to crossfade the era card
  and description), a "Why Us" section with service pill links, and a closing 3-card CTA row
- `/about/team` — Team page (`src/components/team/TeamPage.tsx`) — hero, an "Our People" intro,
  a Leadership grid and an Advisors grid (`components/team/TeamGrid.tsx` is shared between both),
  and a closing full-bleed photo with a pull-quote card and a Careers link

The header's in-page links (Services, Industries, About, Insights, Testimonial) use `/#section-id`
hrefs; `ScrollToHash` (`src/components/layout/ScrollToHash.tsx`) handles scrolling to the right
section whether you're already on the home page or navigating there from `/contact-us`.

The contact form itself (`src/components/shared/ContactFormPanel.tsx`) is shared between the Home
page's inline "Let's Connect" section and the dedicated Contact page's "Get in Touch" section —
same Redux-backed submit logic, different copy/labels per usage. Similarly,
`src/components/shared/SplitImageCta.tsx` (photo left / lime card right, asterisk mark) is shared
between the Contact page's "Schedule a Free Consultation" CTA and the Testimonials page's
"Building a Strong Financial Foundation" CTA.

**Deploying to a static host:** since this is a client-side-routed SPA, the host needs to rewrite
all paths to `index.html` so a deep link like `/contact-us` doesn't 404. `public/_redirects`
(Netlify) and `vercel.json` (Vercel) are included for that; other hosts (S3/CloudFront, Nginx,
Apache) will need an equivalent rewrite rule.

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build     # type-check + production build
npm run preview   # preview the production build
npm run lint       # oxlint
```

## Notes

- The contact form and newsletter signup dispatch Redux Toolkit thunks that call
  `VITE_API_BASE_URL` (see `.env.example`). If no backend is configured, the services
  simulate a network round trip so the loading/success UI still works end to end.
- Motion respects `prefers-reduced-motion`.
- All images are sourced from Unsplash as placeholders — swap the URLs in
  `src/data/home.data.ts` for production assets.
