# Shiva Kumar — Personal Portfolio

The personal portfolio of Shiva Kumar, Software Developer & AI Automation
Engineer. It presents full-stack applications, AI agents and workflow
automations, each with a written case study, and supports both software
development roles and freelance AI automation enquiries.

**Repository:** [shivakumarkatla/shiva-personal-portfolio](https://github.com/shivakumarkatla/shiva-personal-portfolio)
**Live site:** <https://shivas-personal-portfolio.netlify.app>

---

## Contents

- [Pages](#pages)
- [Technology](#technology)
- [Getting started](#getting-started)
- [Scripts](#scripts)
- [Project structure](#project-structure)
- [Updating content](#updating-content)
- [Design system](#design-system)
- [Contact behaviour](#contact-behaviour)
- [Images, icons and the social preview](#images-icons-and-the-social-preview)
- [Performance](#performance)
- [Accessibility](#accessibility)
- [Deployment (Netlify)](#deployment-netlify)
- [Projects](#projects)
- [Contact](#contact)

## Pages

| Route | Page |
| --- | --- |
| `/` | Homepage: hero with the Smart Schedule workflow diagram, featured work, capabilities, automation examples, process and contact |
| `/about` | Background, journey, toolkit, approach and current direction |
| `/skills` | Skills grouped by area, each linked to the projects that use it |
| `/projects` | All 12 projects, with category filters kept in `?category=` |
| `/projects/:slug` | Case study for one project |
| anything else | Not-found page (`noindex`) |

## Technology

- **React 19**, **Vite 6**, **React Router 7**
- **Motion** (`motion/react`) through `LazyMotion` with the `domAnimation` feature set
- **Lucide React** icons
- Self-hosted **Inter** and **JetBrains Mono** variable fonts (`public/fonts/`, SIL OFL 1.1)
- Plain CSS with design tokens; each component imports its own stylesheet
- **sharp** (dev only) for image and icon generation
- **ESLint** for linting

There is no backend, no external API and no contact-form service.

## Getting started

Requires Node.js 18 or later and npm.

```bash
git clone https://github.com/shivakumarkatla/shiva-personal-portfolio.git
cd shiva-personal-portfolio
npm install
npm run dev
```

Before committing, run `npm run lint` and `npm run build`. Use
`npm run preview` to check the production build locally.

## Scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Development server with hot reload |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serves the production build locally |
| `npm run lint` | ESLint over the project |
| `npm run optimize:images` | Regenerates AVIF/WebP variants of `public/images/**` into `public/images/optimized/` and rewrites `src/data/imageManifest.json` (originals are never modified) |
| `npm run generate:icons` | Regenerates `favicon.ico` and `apple-touch-icon.png` from `public/favicon.svg` |

## Project structure

```text
public/
  _redirects            Netlify routing (real 404s for unknown URLs)
  favicon.svg / .ico    Site icon (SVG is the source)
  apple-touch-icon.png
  og-image.png          1200x630 social preview image
  sitemap.xml, robots.txt
  fonts/                Self-hosted WOFF2 fonts and licences
  images/               Original screenshots and portrait
  images/optimized/     Generated AVIF/WebP variants
scripts/
  optimize-images.mjs   Image pipeline (sharp)
  generate-icons.mjs    Icon pipeline (sharp)
src/
  App.jsx               Routes, lazy loading, prefetch on link intent
  main.jsx
  components/
    about/              About page sections
    case-study/         Case-study template parts (gallery, architecture, facts, pager)
    diagrams/           Smart Schedule workflow diagram
    home/               Homepage sections
    layout/             Header, footer, page shell, hero, loading/error states
    projects/           ProjectCard and filter chips
    seo/                PageMetadata (title, description, canonical, robots)
    skills/             Skill group
    ui/                 Shared primitives (Button, Card, Section, Tag, Reveal, ...)
  data/                 All site content (see below)
  lib/                  Route loaders, theme handling, skill-to-project matching
  pages/                One component per route
  styles/               tokens.css, fonts.css, base.css
vite.config.js          React plugin + build step that preloads the current route's chunk
```

## Updating content

All content lives in `src/data/`; components only render it.

| File | Contains |
| --- | --- |
| `profile.js` | Name, roles, email, email subject, site URL, GitHub/LinkedIn, availability |
| `projects.js` | Project summaries, stacks, links, cover images, featured flag, filter groups |
| `caseStudies.js` | Long-form case studies (problem, solution, features, implementation, lessons, screenshots) |
| `architecture.js` | Architecture/workflow outlines, only for projects checked against their source |
| `skills.js` | Skill groups, learning priorities, homepage capability areas |
| `automation.js` | Homepage automation examples, benefits and process steps |
| `about.js`, `journey.js` | About page copy and journey stages |
| `imageManifest.json` | Generated by `npm run optimize:images`; do not edit by hand |

**When adding or renaming a project**, also update `public/_redirects` and
`public/sitemap.xml`, which list every project URL.

**When adding an image**, put it under `public/images/` and run
`npm run optimize:images`.

Keep claims verifiable: technologies listed for a project should be
confirmed in that project's source code.

## Design system

- **Tokens** in `src/styles/tokens.css`: colours for both themes, type
  scale, spacing, radii, layout and motion. Contrast ratios are recorded
  in the file.
- **Themes:** dark on first visit. A manual toggle is saved in
  `localStorage` and always wins; the OS setting is not used. The inline
  script in `index.html` applies the theme before first paint and must
  stay in sync with `src/lib/theme.js`.
- **Accent colours:** indigo is the primary accent; teal is reserved for
  automation-related elements.
- **Motion:** `Reveal` fades content in once; everything is static when
  the visitor prefers reduced motion.

## Contact behaviour

- **Email me** buttons and the footer icon use a `mailto:` link with the
  subject "Portfolio enquiry". A mailto link does not send email; it opens
  the email app configured on the visitor's device, and nothing opens if
  none is configured.
- A note next to the button offers **Gmail web compose** (recipient and
  subject prefilled) as a fallback.
- **Copy** copies the address using the Clipboard API, falling back to
  the legacy copy command, and announces the result to screen readers.

See `EMAIL_SETUP.txt` for where to change the address.

## Images, icons and the social preview

- Screenshots are served as responsive AVIF/WebP `<picture>` elements
  with fixed dimensions (`src/components/ui/ResponsiveImage.jsx`).
  Images below the fold are lazy-loaded.
- Card covers for the two n8n screenshots are documented crops defined in
  `scripts/optimize-images.mjs`.
- `public/favicon.svg` contains vector outlines of the "SK" mark
  (JetBrains Mono, weight 600), so icons render without web fonts.
- `public/og-image.png` is a 1200x630 screenshot of the dark homepage hero.
  If the hero changes, capture it again at a 1200x630 viewport.

## Performance

- The homepage ships in the main bundle; About, Skills, Projects, case
  studies and the not-found page are separate chunks.
- Chunks are prefetched when a visitor hovers, focuses or touches an
  internal link.
- On a direct visit to an inner page, a build step in `vite.config.js`
  preloads that page's chunk in parallel with the main bundle.
- A loading state keeps the header and footer visible, and a reload option
  appears if a chunk fails to download.

## Accessibility

Targets WCAG 2.2 AA: skip link, landmark structure, one `h1` per page,
visible focus states, keyboard-operable filters, gallery and mobile menu
(with focus trapping), accessible names that match visible text, reduced
motion support, and contrast checked in both themes.

## Deployment (Netlify)

- Build command: `npm run build`
- Publish directory: `dist`
- `public/_redirects` is copied into `dist/`. Known routes return 200,
  and any other path returns the app with status 404, so the not-found
  page renders and search engines see a real 404. Existing files are
  served before these rules.
- `public/google70112027f174e589.html` is the Google Search Console
  verification file.

After deploying, check a direct visit to a nested route
(e.g. `/projects/smart-schedule`) and an unknown URL.

## Projects

Featured projects (details in each case study and repository):

1. **Full-Stack Expense Tracker:** React, Tailwind CSS, Recharts, Axios,
   Node.js, Express, MongoDB, JWT.
   [Frontend](https://github.com/shivakumarkatla/expense-tracker-frontend) ·
   [API](https://github.com/shivakumarkatla/expense-tracker-api) ·
   [Live demo](https://expense-tracker-frontend-rho-lake.vercel.app)
2. **Full-Stack Task Manager:** React, Tailwind CSS, Axios, Node.js,
   Express, MongoDB, JWT.
   [Frontend](https://github.com/shivakumarkatla/task-manager-frontend) ·
   [API](https://github.com/shivakumarkatla/task-manager-api) ·
   [Live demo](https://task-manager-frontend-rouge-omega.vercel.app)
3. **NGO Audit Verification:** n8n, Gemini, Google Sheets, Telegram, with
   a grant-officer approval step.
   [Repository](https://github.com/shivakumarkatla/ngo-audit-verification-automation)
4. **Smart Schedule AI Agent:** n8n AI Agent with an OpenAI chat model and
   memory, Telegram, Google Calendar and Gmail.
   [Repository](https://github.com/shivakumarkatla/smart-schedule-ai-agent)

Other projects: Restaurant Reservation Voice Agent (V1), Excel LMS (V1),
LLM Learning System (V1), Power BI Analytics Dashboard, E-commerce
Dashboard, YouTube Scraper (V1), Slack Private Bot Channel (V1) and
Airtable → Make → Slack (V1).

`src/data/projects.js` is the source of truth for status, stack and links.

## Contact

- **GitHub:** [github.com/shivakumarkatla](https://github.com/shivakumarkatla)
- **LinkedIn:** [linkedin.com/in/shivakumarkatla](https://www.linkedin.com/in/shivakumarkatla/)
- **Email:** <katlashivakumar2003@gmail.com>

---

Built and maintained by **Shiva Kumar Katla**.
