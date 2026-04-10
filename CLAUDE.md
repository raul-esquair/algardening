# AL Gardening — Project Context

## What This Is
A high-converting website for AL Gardening, a local landscaping business serving Contra Costa County and Alameda County (East Bay, California). Residential and commercial clients. The site must feel warm, professional, and aspirational — standing out from the sea of small local crews with no web presence.

## Tech Stack
- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS 4
- **Blog:** MDX files in `/content/blog/`
- **Forms:** Email delivery via Resend + push notifications via Ntfy
- **Deployment:** Vercel
- **Design:** Pencil (.pen) mockups created before coding each page group

## Design System

### Colors
| Token | Hex | Role |
|-------|-----|------|
| `primary` | #2D5A3D | Forest green — headers, nav, primary buttons |
| `primary-light` | #7BA88C | Sage — hover states, secondary elements |
| `accent` | #C8973E | Warm gold — CTAs, highlights, badges |
| `neutral-dark` | #2C2C2C | Charcoal — body text |
| `neutral-light` | #FAFAF7 | Warm white — page backgrounds |
| `neutral-mid` | #E8E4DF | Stone — borders, card backgrounds, dividers |
| `success` | #4CAF50 | Form success states |
| `error` | #C75B39 | Terracotta — form errors |

### Typography
- **Headings:** Playfair Display (serif)
- **Body:** Inter or DM Sans (sans-serif)
- **Labels/Badges:** Body font, uppercase, tracked

### Design Principles
- Mobile-first responsive (375px → 768px → 1280px → 1440px+)
- Full-width hero imagery with text overlays
- Generous white space between sections
- Rounded corners (8-12px) on cards and buttons
- Subtle box shadows for depth
- Real photography over illustrations (placeholders until real photos are ready)
- Single focused CTA per section

## Brand Voice
- **Tone:** Warm and neighborly — like a trusted neighbor, not a corporation
- **Differentiator:** Relationship-first customer service
- **Guarantee:** Satisfaction guaranteed
- **Credentials:** Licensed & Insured
- **Example copy:** "Welcome to AL Gardening — your neighborhood landscaping team."

## Services
### Core Services (4) — in `services-data.ts`, drive nav/footer/cards/related services
1. Lawn Maintenance — mowing, edging, trimming, blowing, seasonal cleanup, fertilization
2. Landscape Design & Installation — consultation, custom design, planting, sod, mulch, flower beds, irrigation
3. Tree & Shrub Care — pruning, trimming, shaping, removal, stump grinding, health assessments
4. Yard Cleanup — seasonal cleanup, storm damage, overgrown yard restoration, full haul-away

### Specialty Service (standalone page, NOT in services array)
5. Fire-Safe Landscaping — Lamorinda-focused (Lafayette, Orinda, Moraga). MOFD compliance, defensible space zones 0/1/2, weed abatement, AB 3074 Zone 0 installation, fire-resistant planting.

## Service Areas (14 cities)
**Contra Costa County (12):** Walnut Creek, Concord, Pleasant Hill, Martinez, Lafayette, Orinda, Moraga, Danville, San Ramon, Oakley, Brentwood, Clayton
**Alameda County (2):** Dublin, Pleasanton

Each city has its own SEO-optimized page at `/service-areas/[slug]` with hyper-local content (unique descriptions, neighborhoods, soil types, water districts, FAQs, testimonials). Data centralized in `src/lib/cities-data.ts`.

## Site Architecture
```
/ ............................ Home
/services .................... Services overview (4 cards)
/services/lawn-maintenance ... Individual service page
/services/landscape-design ... Individual service page
/services/tree-shrub-care .... Individual service page
/services/yard-cleanup ....... Individual service page
/services/fire-safe-landscaping  Specialty: Lamorinda fire-safe (standalone)
/about ....................... Company story, values, stats
/gallery ..................... Filterable photo grid + before/after
/blog ........................ Blog listing (MDX-powered)
/blog/[slug] ................. Individual blog post
/faq ......................... Accordion FAQ by category
/service-areas ............... Hub page — links to all 14 city pages
/service-areas/[slug] ........ Individual city pages (14 total, dynamic route)
/contact ..................... Form (Resend) + info column
/lp/yard-cleanup ............. Google Ads landing page (hidden, noindex)
/lp/lawn-care ................ Google Ads landing page (hidden, noindex)
/lp/fire-safe ................ Google Ads landing page (hidden, noindex)
```

## Global Components
- **Sticky Header:** Logo, nav (Services dropdown, About, Gallery, Blog, Service Areas), phone number (click-to-call), "Get Free Estimate" button. Hamburger on mobile.
- **Footer:** 5-column (Company Info, Services links, Quick Links, Service Areas by county, Contact info). Bottom bar with copyright + legal links.
- **Mobile Floating CTA:** Fixed bottom bar with "Call Now" + "Free Estimate" split buttons. Appears after scrolling past hero.

## Build Phases
The project follows a phased build tracked in `.phase-tracker.md`. Run `/phase` to see current progress and pick up where you left off.

## Conventions
- Components go in `/src/components/` organized by scope (`/ui`, `/layout`, `/sections`)
- Page routes use the Next.js App Router in `/src/app/`
- Blog content lives in `/content/blog/` as `.mdx` files
- Images go in `/public/images/` organized by page (`/hero`, `/services`, `/gallery`, `/team`)
- All components use TypeScript
- Use Tailwind utility classes; avoid custom CSS unless absolutely necessary
- Placeholder images should use a consistent aspect ratio and neutral tone
- Every page must have: meta title, meta description, Open Graph tags
- Form validation on both client and server side

## Key Architecture Decisions
- **Service data is centralized** in `src/lib/services-data.ts`. Header, Footer, ServicesSection, and ServicePageTemplate all import from it. Adding a new core service = add entry to data file + create one route page. Everything else auto-updates.
- **City data is centralized** in `src/lib/cities-data.ts`. Service areas hub, homepage section, footer, sitemap, and city pages all import from it. Adding a new city = add entry to data file. The dynamic route `service-areas/[slug]` auto-generates the page.
- **City pages use a dynamic route** at `src/app/service-areas/[slug]/page.tsx` with `generateStaticParams` and `generateMetadata`. Template: `CityPageTemplate.tsx`. Each city has unique content — not swapped templates.
- **Fire-safe landscaping** is a standalone specialty page at `/services/fire-safe-landscaping`, NOT in the `services` array. It has its own custom layout (`FireSafeContent.tsx`) with zone breakdowns, plant lists, MOFD timeline, and Lamorinda-specific content. Lamorinda city pages link to it via a conditional fire-safe callout banner.
- **Landing pages** live at `/lp/*` and use a full-viewport overlay (`LandingPageShell.tsx`) that hides the main site's header/footer. They are `noindex`, excluded from sitemap, and blocked in `robots.ts`. They use a 3-field form (`LandingPageForm.tsx`) that submits to the existing `/api/contact` endpoint.
- **Animations** use Framer Motion. Reusable primitives in `src/components/ui/animations.tsx` (FadeIn, StaggerChildren, StaggerItem, SlideIn, ScaleOnHover). CSS classes `btn-lift` and `card-lift` in globals.css for hover effects.
- **Header** uses `fixed` positioning (not `sticky` — sticky breaks in flex containers). Main content has `pt-24` to compensate. Header compresses from h-24 to h-16 on scroll.
- **Contact form** and **hero form** both send emails via Resend to alex@algardening.com + push notifications via Ntfy (channel: `algardening-leads`). API route: `src/app/api/contact/route.ts`. Requires `RESEND_API_KEY` env var (set in Netlify + `.env.local`).
- **Phone:** (925) 664-3281 | **Email:** hello@algardening.com
- **GitHub:** raul-esquair/algardening | **Hosting:** Netlify

## Important Files
- `CLAUDE.md` — this file (project context, read every session)
- `.phase-tracker.md` — current build progress (read before any work)
- `.claude/commands/phase.md` — the /phase skill definition
- `src/lib/services-data.ts` — single source of truth for all core service data (4 services)
- `src/lib/cities-data.ts` — single source of truth for all city/service-area data (14 cities)
- `src/app/api/contact/route.ts` — form submission handler (Resend email + Ntfy push)
- `src/lib/blog.ts` — blog utility (reads MDX files, parses frontmatter)
- `src/components/ui/animations.tsx` — reusable Framer Motion animation components
- `src/components/sections/CityPageTemplate.tsx` — shared template for all 14 city pages
- `src/components/sections/FireSafeContent.tsx` — fire-safe specialty page content
- `src/components/landing/LandingPageShell.tsx` — overlay wrapper for Google Ads landing pages
- `src/components/landing/LandingPageForm.tsx` — 3-field form for landing pages
