# Shiva Kumar --- Personal Portfolio

A personal portfolio website showcasing my background, technical skills,
completed projects, and learning journey across software development, AI
automation, and data analytics.

**GitHub:**
[shivakumarkatla/shiva-personal-portfolio](https://github.com/shivakumarkatla/shiva-personal-portfolio)

------------------------------------------------------------------------

## Table of Contents

-   [Overview](#overview)
-   [Features](#features)
-   [Pages and Routes](#pages-and-routes)
-   [Technology Stack](#technology-stack)
-   [Portfolio Sections](#portfolio-sections)
-   [Featured Projects](#featured-projects)
-   [Project Structure](#project-structure)
-   [Getting Started](#getting-started)
-   [Available Scripts](#available-scripts)
-   [Customization](#customization)
-   [Accessibility and Responsive
    Design](#accessibility-and-responsive-design)
-   [Deployment](#deployment)
-   [Future Improvements](#future-improvements)
-   [Contact](#contact)

------------------------------------------------------------------------

## Overview

This portfolio is designed to give recruiters, collaborators, and
visitors a clear picture of my technical interests and completed work.

It brings together: - Full-stack web development - AI-assisted
automation and workflow integration - Data analysis and visualization -
Selected project case studies - A detailed professional introduction -
Contact and professional profile links

The site emphasizes practical work and a straightforward presentation of
experience. Project descriptions should reflect implemented
functionality, while the learning roadmap identifies skills I am
continuing to develop.

## Features

-   **Responsive layout:** Adapts to desktop, tablet, and mobile
    screens.
-   **Dark and light themes:** Theme selection is available through the
    navigation and saved in browser local storage.
-   **Multi-page navigation:** Dedicated About, Skills, Projects, and
    project-detail pages.
-   **Project catalogue:** Project information is maintained in a
    central data file.
-   **Project case studies:** Dedicated routes provide project
    descriptions, technologies, screenshots, and relevant repository or
    demo links where configured.
-   **Screenshot carousels:** Selected project detail pages include
    screenshot galleries.
-   **Motion effects:** Subtle entrance and scroll-triggered animations
    use Motion.
-   **Responsive mobile navigation:** Includes a mobile menu with
    interaction handling.
-   **SEO metadata:** Page metadata is managed through a reusable
    `PageMetadata` component.
-   **Semantic structure:** Uses page sections, descriptive image text,
    and labels for important regions.
-   **Contact links:** Visitors can reach out through the contact call
    to action and configured professional links.

> The exact availability of screenshots, source links, and live demos
> depends on each project's configuration.

## Pages and Routes

  -----------------------------------------------------------------------
  Route                               Purpose
  ----------------------------------- -----------------------------------
  `/`                                 Homepage with introduction, skills,
                                      featured projects, journey, and
                                      contact sections

  `/about`                            Detailed background, development
                                      journey, problem-solving approach,
                                      selected projects, and current
                                      direction

  `/skills`                           Skills grouped by technical area

  `/projects`                         Project catalogue

  `/projects/:slug`                   Individual project detail or
                                      case-study page
  -----------------------------------------------------------------------

The project-detail route uses the project's slug. Confirm that each slug
in `src/data/projects.js` matches the route and links used by the
application.

## Technology Stack

### Frontend

-   **React** --- component-based user interface
-   **Vite** --- development server and production build tooling
-   **React Router** --- client-side page and project-detail routing
-   **Tailwind CSS and project CSS** --- styling utilities and custom
    responsive design
-   **Motion** (`motion/react`) --- animations and scroll-triggered
    transitions
-   **Lucide React** --- interface icons

### Development and Quality

-   **JavaScript / JSX**
-   **ESLint** --- code linting
-   **Git and GitHub** --- version control and source hosting
-   **npm** --- package management and scripts

The portfolio is a frontend application. Individual showcased projects
may use separate stacks and repositories; those backend services are not
part of this portfolio application's runtime unless explicitly
integrated.

## Portfolio Sections

### Homepage

The homepage provides a concise introduction and a quick path to the
most relevant parts of the portfolio: - Hero and professional
introduction - About summary and capability cards - Skills grouped by
domain - Featured projects - Journey or development timeline - Contact
section

### Detailed About Page

The `/about` page expands on the homepage summary: 1. About Me ---
introduction and portrait 2. My Journey --- Data Science, software
development, and AI automation 3. My Approach --- understanding
problems, implementing solutions, and improving through testing 4.
Selected Projects --- links to four featured project case studies 5.
Current Direction --- current learning priorities and software
development career goals

The portrait is expected at `public/images/profile-photo.png`,
referenced in the app as `/images/profile-photo.png`.

### Skills

The skills content is grouped into four areas.

**Development** - HTML - CSS - JavaScript - React - Node.js -
Express.js - REST APIs

**Data and Analytics** - Python - SQL - MySQL - Excel - Power BI - Data
analysis - Data visualization

**AI and Automation** - Generative AI - Gemini - n8n - Make - Voice AI -
API integrations - Workflow automation

**Tools** - Git - GitHub - VS Code - Vite - Tailwind CSS - Postman

Current learning priorities include TypeScript, advanced React, backend
architecture, system design, AI application development, and Docker.
These are learning goals rather than claims of advanced professional
expertise.

## Featured Projects

The portfolio's featured project set is configured in the central
project data and currently includes the following four projects.

### 1. Full-Stack Expense Tracker

A personal finance application focused on expense management, user
authentication, transaction records, and spending visualizations.

**Technologies:** React, Node.js, Express, MongoDB, Recharts.

-   Frontend repository:
    [expense-tracker-frontend](https://github.com/shivakumarkatla/expense-tracker-frontend)
-   Backend repository:
    [expense-tracker-api](https://github.com/shivakumarkatla/expense-tracker-api)
-   Live demo: [Expense
    Tracker](https://expense-tracker-frontend-rho-lake.vercel.app)

### 2. Full-Stack Task Manager

A task management application connecting a frontend interface with
authentication, backend services, and database-backed task management.

-   Frontend repository:
    [task-manager-frontend](https://github.com/shivakumarkatla/task-manager-frontend)
-   Backend repository:
    [task-manager-api](https://github.com/shivakumarkatla/task-manager-api)
-   Live demo: [Task
    Manager](https://task-manager-frontend-rouge-omega.vercel.app)

Check each repository for precise implementation details and environment
requirements.

### 3. NGO Audit Verification Automation

An AI-assisted workflow for processing field-audit submissions,
analyzing submitted images, organizing verification results, and routing
cases for grant-officer approval.

The workflow combines AI-assisted image analysis, automation, connected
services, and a human approval step.

-   Repository:
    [ngo-audit-verification-automation](https://github.com/shivakumarkatla/ngo-audit-verification-automation)

### 4. Smart Schedule AI Agent

A conversational scheduling workflow built with n8n, Telegram, Google
Calendar, Gmail, and an AI agent. It interprets scheduling requests and
coordinates connected tools to support calendar and email tasks.

-   Repository:
    [smart-schedule-ai-agent](https://github.com/shivakumarkatla/smart-schedule-ai-agent)

### Other Projects

Additional work represented in the portfolio includes: - Restaurant
Reservation Voice Agent - Excel LMS - LLM Learning System - Power BI
Analytics Dashboard - E-commerce Dashboard - YouTube Scraper - Slack ---
Private Bot Channel - Airtable → Make → Slack automation

Project links, screenshots, technologies, and descriptions are
maintained in `src/data/projects.js` and the corresponding
project-detail components. Use the current source as the authority for
the latest project status and functionality.

## Project Structure

The main application is organized by page, reusable components, project
data, and styling. The structure below describes the key areas;
individual files may vary as the application evolves.

``` text
shiva-personal-portfolio/
├── public/
│   └── images/
│       └── profile-photo.png
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── PageNavigation.jsx
│   │   ├── sections/
│   │   │   └── About.jsx
│   │   └── seo/
│   │       └── PageMetadata.jsx
│   ├── data/
│   │   └── projects.js
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   └── ProjectDetails.jsx
│   ├── styles/
│   │   └── index.css
│   └── [application entry and routing files]
├── index.html
├── package.json
├── package-lock.json
├── eslint.config.js
├── vite.config.js
└── README.md
```

This is a guide to the main areas, not a guarantee that every filename
or directory matches the current local checkout. Keep the README
synchronized with the repository when files are renamed or moved.

## Getting Started

### Prerequisites

Install: - Node.js compatible with the project's Vite version - npm -
Git, if cloning the repository

Check installed versions:

``` bash
node --version
npm --version
git --version
```

### 1. Clone the repository

``` bash
git clone https://github.com/shivakumarkatla/shiva-personal-portfolio.git
cd shiva-personal-portfolio
```

### 2. Install dependencies

``` bash
npm install
```

### 3. Start the development server

``` bash
npm run dev
```

Open the local URL printed by Vite. The default is commonly
`http://localhost:5173`, unless the configuration selects another port.

### 4. Run linting

``` bash
npm run lint
```

### 5. Create a production build

``` bash
npm run build
```

Vite normally writes the production output to `dist/`. Check the
terminal output for build errors.

### 6. Preview the production build locally

If the project defines Vite's preview script, run:

``` bash
npm run preview
```

Check `package.json` for the exact scripts available in the current
checkout.

## Available Scripts

The project has used the following npm scripts:

  -----------------------------------------------------------------------
  Command                             Purpose
  ----------------------------------- -----------------------------------
  `npm run dev`                       Starts the local development server

  `npm run lint`                      Runs ESLint

  `npm run build`                     Creates a production build

  `npm run preview`                   Serves the production build
                                      locally, if configured
  -----------------------------------------------------------------------

The `scripts` section in `package.json` is the definitive list. If a
command is not defined there, add or update the script before using it.

## Customization

### Update project information

Edit `src/data/projects.js` to update project titles, slugs,
descriptions, technologies, screenshots, repository links, and live demo
links.

When adding a project: 1. Give it a unique slug. 2. Add a concise and
accurate description. 3. Include only technologies and features actually
implemented. 4. Add valid repository or demo URLs where available. 5.
Ensure the project-detail route can resolve the slug. 6. Confirm that
screenshot paths point to existing files.

### Update skills

Edit the relevant skills data or component. Keep current skills separate
from technologies that are still being learned.

### Update the About page

Edit `src/pages/About.jsx`. The homepage About summary is a separate
component under `src/components/sections/About.jsx`; update each
independently when appropriate.

### Update the portrait

Replace `public/images/profile-photo.png` with the intended portrait,
preserving that filename, or update the image path in the component.
Files inside `public/` are referenced from the site root, so the example
path is `/images/profile-photo.png`.

### Update theme and responsive styling

Shared design tokens, theme colors, layout rules, and responsive styles
are maintained in `src/styles/index.css`. Check both light and dark
themes and test at mobile, tablet, and desktop widths after changing
shared CSS.

### Update contact and social links

Check the relevant components---particularly the hero, navigation,
contact section, and footer---when changing email addresses or
professional profile URLs. Verify links in the browser rather than
relying only on their displayed labels.

## Accessibility and Responsive Design

When modifying the portfolio, preserve the following practices: - Use
semantic headings in a logical order. - Provide descriptive `alt` text
for meaningful images. - Mark decorative icons as hidden from assistive
technology when appropriate. - Ensure buttons and links have clear
labels. - Keep keyboard navigation functional in the mobile menu and
theme control. - Respect reduced-motion preferences where practical. -
Check for horizontal overflow on narrow screens. - Verify readable
contrast in both themes. - Test responsive layouts at small phone widths
as well as desktop sizes.

## Deployment

This is a Vite frontend application and can be deployed to a static
hosting service that supports Vite builds.

General deployment steps: 1. Push the latest code to the GitHub
repository. 2. Connect the repository to your chosen hosting provider.
3. Set the build command to `npm run build`. 4. Set the output directory
to `dist`. 5. Configure the host to serve the app's `index.html` for
client-side routes such as `/about` and `/projects/:slug`. 6. Test
direct navigation to nested routes after deployment.

Set environment variables only if the current application requires them.
Never commit API keys, tokens, passwords, or other secrets to the
repository.

## Future Improvements

Potential areas for continued improvement include: - More detailed
project case studies with problem, solution, and outcome sections -
Consistent screenshots and verified live demos for projects where
available - Accessibility and keyboard-navigation testing - Performance
and image optimization - Stronger automated checks in the development
workflow - Continued improvements to TypeScript, backend architecture,
system design, and AI application development

These are potential improvements, not claims that they are already
implemented.

## Contact

-   **GitHub:**
    [github.com/shivakumarkatla](https://github.com/shivakumarkatla)
-   **LinkedIn:**
    [linkedin.com/in/shivakumarkatla](https://www.linkedin.com/in/shivakumarkatla/)
-   **Email:** <katlashivakumar2003@gmail.com>

------------------------------------------------------------------------

Built and maintained by **Shiva Kumar Katla**.
