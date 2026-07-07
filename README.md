# Mga Nanguna: Filipino Pioneers Who Shaped the Digital World

📚 Topic Theme: **Historical Computing**

## 📖 About This Exhibit

**Mga Nanguna** (*"Those Who Led"*) is a virtual museum exhibit that tells the untold story of Filipino pioneers who shaped the digital world — often against all odds and despite being overlooked in global computing history.

This exhibit explores how Filipino engineers, educators, and innovators contributed to computing from the early days of silicon chips to the modern tech era, tracing their journey from local institutions to the global stage and back home again.

## 🗂️ Content Outline

- **Introduction -  Against All Odds:** Filipinos Overcoming Adversities
- **Chapter 1 — The Pioneers:** First Filipinos in Tech
- **Chapter 2 — The Institutions:** Philippine Educational Institutions who Shaped Pioneers
- **Chapter 3 — The Overseas:** Filipinos who contributed globally
- **Chapter 4 — Coming Home:** Filipino talent returning and building locally
- **Chapter 5 — Modern Pioneers:** Filipinos who have contributed to tech in the modern era

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| Astro 6 | Site framework |
| MDX | Exhibit content |
| React + TypeScript (.tsx) | Interactive components |
| Tailwind CSS | Styling |

## ✨ Interactive Element

A **Scrollable & Clickable Timeline** built in React + TypeScript featuring:

- **Era Nodes** (decades) and **Person Nodes** (specific pioneers)
- Clicking a node **expands a detail card** with photo, name, invention/contribution, year, and impact
- **Filter feature** — filter by era or by type (person vs institution vs event)
- **Horizontal scrolling** on desktop, **vertical stacked** layout on mobile (if possible)
- Smooth **Framer Motion** animations for expand/collapse transitions

## 🎨 Style Guide

| Element | Choice |
|---------|--------|
| **Primary Color** | Navy Blue `#0038A8` |
| **Accent Color** | Scarlet Red `#CE1126` |
| **Highlight Color** | Golden Yellow `#FCD116` |
| **Background** | Dark museum-style background |
| **Cards** | Light popup cards on dark background |
| **Heading Font** | Playfair Display (serif) |
| **Body Font** | Inter (sans-serif) |

*Color palette inspired by the colors of the Philippine flag.*

## Mid-Milestone Progress Log

### Status
- Website is live and running with the Astro + React + Tailwind layout described in the proposal.
- Deployment link: **[ADD YOUR LIVE URL HERE ONCE DEPLOYED]**
- Interactive timeline component implemented with era filtering and expand/collapse detail cards, covering all five chapters from the proposal plus the introduction.

### What We Learned
- **CSS imported from any component is global, not scoped.** Tailwind's default styling includes something called a "reset" (Tailwind calls it Preflight). Its job is to strip out browsers' built-in default styling — for example, browsers normally make <h1>, <h2>, etc. big and bold automatically, but Tailwind's reset turns that off so you can control every style yourself with utility classes. That's normally desirable if your whole site is built with Tailwind. But your project's global.css was already handling heading styles the old-fashioned way, without Tailwind. So the moment we imported Tailwind (with its reset included), it silently cancelled out those existing heading styles — on every page, not just ours — which is why your chapter titles suddenly looked like plain unstyled paragraphs.
- **MDX build errors can be misleading.** We hit a cryptic `e.setLocation is not a function` error that had nothing to do with the actual bug — it turned out to be Astro's own error-reporting code failing while trying to describe an unrelated issue (a broken image import path). We learned to isolate problems by testing a minimal stub file first, then reintroducing pieces one at a time, rather than trying to debug the misleading error message directly.

### Challenges
- Sourcing consistent, verifiable biographical details for modern (post-2010) tech figures was harder than for historical ones — most available material is blog/listicle-style rather than academic, so we prioritized cross-checking names, dates, and company facts across multiple sources before writing copy. 
- Getting the timeline's layout to center correctly took several iterations — an early version used a horizontal-scroll-on-desktop layout controlled by a separate stylesheet with media queries, which kept producing inconsistent centering depending on the active era filter. We simplified to a single centered column layout at all screen widths, trading some visual flair for reliability.

### Creative Development
- Chose a dark navy background with gold and scarlet accents to visually tie the timeline to the group's Filipino-historical theme without leaning on cliché flag-color combinations.
- Era markers (decade nodes) are visually distinct from person/institution cards — smaller, centered, label-only — so the timeline reads as a narrative arc through time rather than a flat list of profiles.
- Expanded cards get a gold border highlight and more generous line spacing on the impact text, so clicking to "reveal more" feels like a deliberate, readable action rather than a cramped tooltip.
- Make the site more appealing in general terms of aesthetics by expanding it further (formatting, layout, color scheme)

### Next Steps
- Consider re-adding a horizontal, scroll-driven desktop layout if time allows for the final submission — the current version prioritizes a working, centered layout over the proposal's original "horizontal on desktop" vision.
- Add the planned Inter/Playfair Display typography and smooth expand/collapse transition animations, both listed in the original proposal but not yet implemented.
- Make the Javascript convert it to typescript. (Javascript was temporarily used as some members were still unfamiliar with it)
- Expand institution coverage in Chapter 2 beyond UP Diliman if time allows (e.g., Ateneo, DLSU, PUP).
- Consider upgrading a few modern-entrepreneur references from blog/listicle sources to more authoritative ones (company About pages, mainstream business outlets) — see the sourcing note in `REFERENCES.md`.
