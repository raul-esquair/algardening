# AL Gardening — Project Context

## What This Is
A high-converting website for AL Gardening, a local landscaping business serving Contra Costa County and Alameda County (East Bay, California). Residential and commercial clients. The site must feel warm, professional, and aspirational — standing out from the sea of small local crews with no web presence.

## Tech Stack
- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS 4
- **Blog:** MDX files in `/content/blog/`
- **Forms:** Email delivery via Resend
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

## Services (3)
1. Lawn Maintenance — mowing, edging, trimming, blowing, seasonal cleanup, fertilization
2. Landscape Design & Installation — consultation, custom design, planting, sod, mulch, flower beds, irrigation
3. Tree & Shrub Care — pruning, trimming, shaping, removal, stump grinding, health assessments

## Site Architecture
```
/ .......................... Home
/services .................. Services overview (3 cards)
/services/lawn-maintenance . Individual service page
/services/landscape-design . Individual service page
/services/tree-shrub-care .. Individual service page
/about ..................... Company story, values, stats
/gallery ................... Filterable photo grid + before/after
/blog ...................... Blog listing (MDX-powered)
/blog/[slug] ............... Individual blog post
/faq ....................... Accordion FAQ by category
/service-areas ............. Counties + city lists for local SEO
/contact ................... Form (Resend) + info column
```

## Global Components
- **Sticky Header:** Logo, nav (Services dropdown, About, Gallery, Blog, Service Areas), phone number (click-to-call), "Get Free Estimate" button. Hamburger on mobile.
- **Footer:** 4-column (Company Info + badges, Services links, Quick Links, Contact info). Bottom bar with copyright + legal links.
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

## Important Files
- `CLAUDE.md` — this file (project context, read every session)
- `.phase-tracker.md` — current build progress (read before any work)
- `.claude/commands/phase.md` — the /phase skill definition
