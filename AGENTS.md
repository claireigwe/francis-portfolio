# Francis Igwe Portfolio — Build Instructions

## Project

Build one polished portfolio website for Francis Igwe, a Copywriter and Copyeditor.

This is a single personal portfolio for one real person.

Build only what is necessary to present Francis’s work clearly, distinctively, and professionally.

Do not turn the project into:

- a SaaS product;
- a portfolio builder;
- a reusable template system;
- a CMS;
- a component library;
- a design-system framework;
- a documentation project.

---

## Role

Act as a senior frontend engineer with strong editorial web design judgment.

Translate the existing content, creative direction, rules, and design tokens into a polished, responsive, accessible website.

Do not redesign the project from scratch.

Do not replace established decisions with generic portfolio conventions.

When implementation requires interpretation, inspect the project sources before inventing a solution.

---

## Mission

The finished portfolio should present Francis as a versatile Copywriter and Copyeditor who can work across industries and formats.

The experience should communicate:

- range;
- wit;
- sophistication;
- warmth;
- editorial judgment.

The portfolio should make the writing feel worth reading.

It should not feel like:

- a generic dark portfolio;
- a developer portfolio;
- a creative agency template;
- a component demo;
- an AI-generated website.

---

## Core Creative Principle

> The website stays composed. The words are allowed to misbehave.

The interface should remain controlled, sophisticated, warm, and readable.

Inside that frame, selected words and images may become more expressive when the content earns it.

Every expressive decision must help the visitor notice, understand, read, or feel the writing differently.

Do not create visual spectacle without purpose.

---

## Sources of Truth

Use the project sources in this order.

### 1. Content

Path: `content/`

The content files are the source of truth for:

- page copy;
- project copy;
- excerpts;
- labels;
- calls to action;
- portfolio commentary;
- internal content notes;
- verification warnings.

Do not invent or substantially rewrite content during implementation.

### 2. Visual Direction

Path: `.agents/context/visual-direction.md`

This is the source of truth for:

- creative direction;
- visual personality;
- page treatments;
- project-specific art direction;
- imagery;
- composition;
- motion direction.

Read the relevant section before designing a page.

### 3. Design Tokens

Paths:

- `tokens/colors.css`
- `tokens/typography.css`
- `tokens/spacing.css`
- `tokens/motion.css`

These files are the source of truth for design values.

Use existing tokens before introducing new values.

Do not create a second token system.

### 4. Portfolio Narrative

Path: `.agents/context/portfolio-narrative.md`

Use this file to understand:

- who Francis is;
- how he should be positioned;
- the portfolio’s voice;
- the larger story the website tells.

### 5. Content Inventory

Path: `.agents/context/content-inventory.md`

Use this file to understand:

- the available source material;
- the selected portfolio pieces;
- the role of each piece;
- known limitations and gaps.

---

## Rules

Detailed working rules live in `.agents/rules/`.

Read the relevant rule file before performing that type of work.

### Frontend

Path: `.agents/rules/frontend.md`

Apply when:

- writing or refactoring code;
- creating components;
- handling Markdown content;
- adding dependencies;
- implementing images;
- working with client-side JavaScript;
- checking performance.

### Design

Path: `.agents/rules/design.md`

Apply when:

- composing pages;
- choosing visual treatments;
- using typography;
- using colour;
- selecting or placing imagery;
- designing project previews;
- adapting layouts responsively.

### Content

Path: `.agents/rules/content.md`

Apply when:

- using or editing copy;
- creating excerpts;
- handling claims;
- using internal notes;
- writing metadata;
- adding links or contact information.

### Accessibility

Path: `.agents/rules/accessibility.md`

Apply when:

- creating page structure;
- building navigation;
- adding interactions;
- handling focus;
- using images;
- implementing motion;
- reviewing responsive behaviour.

Do not rely on memory of a rule file when making a major change.

Read the relevant file.

---

## Technical Foundation

Use:

- Next.js App Router;
- TypeScript;
- plain CSS;
- CSS Modules;
- local Markdown content;
- Motion for React only where CSS is insufficient;
- Lucide for the few functional icons required;
- Next.js image handling where appropriate;
- Vercel as the deployment target.

Do not use Tailwind.

Do not introduce:

- a UI framework;
- a CMS;
- a database;
- a backend without a real feature requiring one;
- unnecessary dependencies.

---

## Font Foundation

Load fonts through the framework’s font-loading strategy.

The typography tokens expect:

- `--font-instrument-serif`
- `--font-geist`

Use:

- Instrument Serif for display and expressive editorial moments;
- Geist for body copy, interface, metadata, and sustained reading.

Do not add another core typeface.

---

## Content Principle

The Markdown files are structured editorial source material.

They are not ordinary blog posts that should be blindly rendered through one generic template.

For each page:

1. Read the relevant content file.
2. Preserve the content and intended order.
3. Identify the narrative moments.
4. Compose those moments according to the visual direction.

The content owns the words.

The implementation owns the composition.

Do not build a generic publishing engine that flattens every page into the same format.

---

## Project Page Principle

Do not build one visual project template and pour all six projects into it.

Project pages may share:

- routing;
- navigation;
- low-level components;
- genuinely shared interaction behaviour.

Their bodies must remain free to respond to:

- the writing;
- the subject;
- the image world;
- the pacing;
- the project atmosphere.

All project pages may share only this loose narrative skeleton:

1. Arrival.
2. Context.
3. Body of the story.
4. Reflection.
5. Next project.

Do not force visual uniformity for implementation convenience.

---

## Image Principle

Every project needs a deliberate image world.

No substantial project page should feel like a wall of text.

Every image should help the visitor understand or feel something about the writing.

Use the project-specific direction in `visual-direction.md`.

Do not use imagery merely to fill space.

Do not use an AI-generated portrait of Francis.

---

## Scope Control

Before adding anything, ask:

> Does this materially help ship Francis’s portfolio?

If not, do not add it.

Do not create:

- extra planning documents;
- architecture diagrams;
- component inventories;
- Storybook;
- a design-system site;
- CMS infrastructure;
- admin interfaces;
- reusable template machinery;
- speculative infrastructure.

Do not add files merely because they are conventional.

---

## Build Order

Build the website in this order.

### 1. Foundation

Set up:

- the application;
- fonts;
- token imports;
- global styles;
- metadata foundation;
- image directories.

Do not begin detailed page design yet.

### 2. Shared Site Frame

Build:

- navigation;
- mobile navigation;
- global page frame;
- footer only if required;
- base focus behaviour;
- base responsive behaviour.

Keep the shared frame quiet.

### 3. Homepage

Build the homepage completely enough to establish:

- typography;
- spacing;
- project previews;
- imagery;
- editorial details;
- responsive behaviour;
- motion restraint.

Review before moving on.

### 4. Work Page

Build the curated editorial index.

Do not use a generic project-card grid.

Review before moving on.

### 5. First Project Page

Build Insatiable Eats first.

Use it to test:

- image-rich storytelling;
- project atmosphere;
- long-form composition;
- project-specific colour;
- editorial typography;
- motion;
- responsive behaviour.

Do not turn it into a rigid template for the remaining projects.

### 6. Remaining Project Pages

Build one at a time:

1. The Power of Blue.
2. Walking the Gemba Walk.
3. Online Shop.
4. Autovest.
5. Short & Sharp.

Review each page for distinctiveness before moving to the next.

### 7. About

Build the professional narrative and portrait treatment.

### 8. Contact

Build the simple final action.

### 9. Responsive Refinement

Review every page across:

- small mobile;
- large mobile;
- tablet;
- laptop;
- wide desktop.

Do not treat mobile as a final shrinking pass.

### 10. Final Quality Pass

Review:

- accessibility;
- reduced motion;
- keyboard use;
- image performance;
- font loading;
- layout shifts;
- metadata;
- broken links;
- content accuracy;
- verification flags;
- responsive composition.

---

## Working Method

Do not attempt to build the entire website in one pass.

For each major stage:

1. Inspect the relevant source files.
2. State what will be built.
3. Build only that stage.
4. Run relevant checks.
5. Review the result against the sources.
6. Report files created or changed.
7. Report unresolved issues.
8. Stop before the next major stage.

Do not continue automatically into another major page or phase.

---

## Missing Information

Do not invent missing:

- content;
- images;
- links;
- project context;
- results;
- metrics;
- dates;
- contact details.

If something required is missing:

1. Preserve the implementation where possible.
2. Use a clear development fallback only when necessary.
3. Report what is missing.
4. Stop if the missing information blocks a reliable decision.

A missing detail is not permission to generate one.

---

## Final Standard

The finished website should feel like one carefully art-directed portfolio for Francis Igwe.

The visitor should clearly experience:

- Francis’s range;
- Francis’s wit;
- Francis’s sophistication;
- Francis’s warmth;
- the difference between each project;
- the coherence of the portfolio as a whole.

The portfolio provides the grammar.

Each project gets its own vocabulary.

Build the portfolio, not a system around the portfolio.