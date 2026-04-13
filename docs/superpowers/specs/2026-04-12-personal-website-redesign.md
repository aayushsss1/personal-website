# Personal Website Redesign — Design Spec
**Date:** 2026-04-12  
**Project:** aayushsubramaniam.com  
**Status:** Approved by user

---

## Overview

Rebuild the personal website from the existing Notion-based site into a custom-coded, self-hosted site. The goal is to preserve the minimalist dark aesthetic of the current site while making it feel handcrafted, personal, and genuinely reflective of who Aayush is — not just a portfolio template. The site should lead with personality and photography before professional credentials.

---

## Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Content:** JSON/Markdown data files (no CMS, no database)
- **Deployment:** Vercel (free Hobby tier, auto-deploy on git push)
- **Domain:** Existing Squarespace domain pointed to Vercel via DNS

**Rationale:** Easy content updates (edit a JSON file to add a project), zero ongoing cost, one-click deploys, custom domain support out of the box.

---

## Design Principles

- Dark background, clean typography, generous whitespace
- No stock images — only Aayush's own photography
- No decorative badges, icon grids, or colored tag clouds
- Tone: warm and genuine, not performative or overly casual
- Single scrolling page with smooth anchor navigation

---

## Visual Style

- **Background:** `#0d0d0d`
- **Surface (cards/subtle sections):** `#141414`
- **Primary text:** `#f0ede8` (warm off-white, not pure white)
- **Secondary text:** `#888880` (muted warm grey)
- **Accent:** `#C9783A` (warm amber — echoes the current site's orange, used sparingly on section headings and hover states only)
- **Typography:**
  - Headings: **DM Serif Display** (Google Font, serif — personal and distinctive without being decorative)
  - Body: **Inter** (system-friendly sans-serif, readable at small sizes)
- **Spacing:** Generous — sections breathe, nothing cramped
- **Photos:** Full-bleed where used, no borders or drop shadows
- **Animations:** CSS `opacity` + `translateY(20px)` → `translateY(0)` via Intersection Observer for scroll reveal on section entry. Duration: `500ms`, easing: `ease-out`, threshold: `0.1`. No libraries. Applied to: section headings, About photos, project list items, photography grid items. Hover states on links and project items only.

---

## Page Structure

### 1. Hero
- Full viewport height (`100dvh`)
- Background: one of Aayush's best landscape photos, referenced as `/public/images/hero.jpg` (swap by replacing this file)
- Dark overlay: `rgba(0,0,0,0.55)` to ensure text legibility
- Centered content:
  - Name: `Aayush Subramaniam` (DM Serif Display, large)
  - Tagline: `photographer · builder · traveler` (Inter, small, letter-spaced, muted)
- Subtle animated scroll-down chevron at bottom center
- **Nav:** Fixed, hidden by default. Fades in as a slim dark bar (`rgba(13,13,13,0.85)` + `backdrop-filter: blur`) once the user scrolls past the hero. Links: About · Work · Photography · Contact. No logo, no hamburger on desktop.
- **Mobile nav (below 768px):** hamburger icon (3 lines) in top-right corner, always visible. Tapping opens a full-screen overlay (`#0d0d0d`, full opacity) with the 4 nav links centered vertically. Icon changes to X to close. No scroll-trigger on mobile — hamburger is always shown.

**Responsive:** Full-bleed at all widths. Text scales down at mobile (`clamp` for font sizes).

### 2. About
- Two "landscape with figure" photos side by side. Left photo taller (`h-[420px]`) than right (`h-[340px]`) for visual rhythm — not a rigid grid. Both photos have scroll-reveal animation on section entry.
- Bio text to the right of or below the photos depending on viewport:
  - Opening line: warm, human, first-person. E.g.: *"I'm Aayush — a software engineer who builds across ML and infrastructure, shoots landscapes on a Fujifilm XT4, and enjoys travel and sports when I'm not at a keyboard."*
  - Second paragraph: professional layer (CS grad, University at Buffalo, what I work on)
- Tone: sincere, not trying-hard casual, not LinkedIn formal
- Photos referenced as `/public/images/about-1.jpg` and `/public/images/about-2.jpg`

**Responsive:** Photos stack vertically below 768px. Bio text flows full-width beneath.

### 3. Work
Two subsections, same minimal list treatment. No cover images.

**Personal Projects**
- Each item: project name (linked) + one-sentence description + tech tags (plain comma-separated text in muted grey, not colored badges)
- Subtle divider line between items
- All projects displayed. Projects with `featured: true` appear first; others follow in array order.
- Data source: `src/data/projects.json`

**Written Material**
- Same list format: title (linked) + one-liner
- Data source: `src/data/writing.json`

**Responsive:** Single column at all widths. Tags wrap naturally.

### 4. Frameworks & Skills
- Two-column layout: left column "Frameworks", right column "Soft Skills"
- Plain text list items, no icons, no cards
- Data source: `src/data/skills.json`

**Responsive:** Stacks to single column below 640px.

### 5. Open Source Contributions
- Brief intro: *"I contribute to MLOps, DevOps, and Platform repositories — always open to collaborations."*
- PRs grouped by repository name (repository as a subtle heading)
- Each PR: `#number` + title + status badge (`Merged` in accent color, `Open` in muted grey)
- Links to actual PR URLs
- Data source: `src/data/oss.json`

**Responsive:** Single column at all widths.

### 6. Photography (home page section)
- Section heading: Photography
- Subtitle: *Shot on a Fujifilm XT4*
- **Grid layout (1+2):** One landscape photo spans full width on top row. Two photos sit side by side on the bottom row.
  - `photos.json` must have exactly 3 entries with `featured: true`
  - First featured entry: `orientation: "landscape"` — used for the top full-width slot
  - Second and third featured entries: any orientation — used for the two side-by-side bottom slots
  - The engineer should validate this ordering at build time (or add a comment noting the convention)
- Two links below the grid:
  - "View full gallery →" → links to `/photography` (internal sub-page)
  - "Also on Unsplash →" → `https://unsplash.com/@aayushsubramaniam` (placeholder — update before launch, opens in new tab)
- Data source: `src/data/photos.json` (field: `featured: true`)

**Responsive:** Top photo full-width at all sizes. Bottom two stack to single column below 768px.

### 7. Contact
- Clean, no heading needed — just a short line and the links
- Optional soft line: *"Find me here."*
- Four items in a 2×2 grid:
  - Location: Buffalo, New York (plain text, no link)
  - Email: `aayushsubramaniam@gmail.com` (`mailto:` link)
  - GitHub: `github.com/aayushsss1` (external link)
  - LinkedIn: `Aayush Subramaniam` (external link)
- No icons required — plain text links are fine

**Responsive:** 2×2 → 1×4 stack below 640px.

---

## /photography Sub-Page

- Route: `app/photography/page.tsx`
- Uniform grid of all photos: 3 columns on desktop, 2 on tablet (below 768px), 1 on mobile (below 640px). Equal-width tiles, `aspect-ratio: 4/3`, `object-fit: cover`. CSS-only, no JS library.
- Each photo: full-bleed, no captions unless specified in `photos.json`
- Link back to home (`← Back`) in top-left
- Unsplash profile link (`https://unsplash.com/@aayushsubramaniam` — placeholder) in footer of this page
- Data source: `src/data/photos.json` (all entries, not just featured)
- Photos stored in `/public/images/photography/` — filenames referenced in `photos.json`

**`photos.json` schema:**
```json
[
  {
    "filename": "lake-pukaki.jpg",
    "alt": "Lake Pukaki with mountains in background",
    "orientation": "landscape",
    "featured": true
  }
]
```

---

## Content Data Structure

All dynamic content stored in `src/data/`:

```
projects.json    — { name, description, tags[], url, featured }
writing.json     — { title, description, url }
oss.json         — { repo, prs: [{ number, title, url, status }] }
skills.json      — { frameworks: [], softSkills: [] }
photos.json      — { filename, alt, orientation, featured }
```

Content updates require only editing these JSON files — no layout code changes needed.

---

## SEO & Metadata

- `app/layout.tsx` sets global: `<title>Aayush Subramaniam</title>`, description meta tag, Open Graph image (use hero photo), Twitter card
- `/photography` page sets its own title: `Photography — Aayush Subramaniam`
- Favicon: monogram "A" in DM Serif Display, dark background — generated as SVG and saved as `/public/favicon.ico` (no external icon asset needed)

---

## Deployment & Domain

1. Code lives in a public or private GitHub repository
2. Vercel connected to the repo — auto-deploys on every push to `main`
3. Squarespace domain pointed to Vercel: add Vercel's A records and CNAME in Squarespace DNS settings (Vercel provides these on domain setup)
4. HTTPS handled automatically by Vercel

---

## Out of Scope

- Blog with CMS (content is static JSON)
- Dark/light mode toggle
- Animation libraries (Framer Motion, GSAP, AOS) — native CSS only
- Backend / API routes
- Comments, forms beyond a mailto link
