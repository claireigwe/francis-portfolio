---
trigger: always_on
---

# Frontend Rules

## Purpose

These rules govern frontend implementation for Francis Igwe’s portfolio.

For project-wide instructions, sources of truth, technical foundation, build order, and scope, follow `AGENTS.md`.

Do not duplicate those instructions here.

---

## Before Writing Code

Before implementing or changing a page:

1. Read `AGENTS.md`.
2. Read the relevant content file.
3. Read the relevant visual-direction section.
4. Inspect the existing implementation.
5. Reuse established tokens and patterns where appropriate.

Do not code from the task prompt alone.

Do not guess when the project files already contain the answer.

---

## Next.js

Use the App Router.

Use Server Components by default.

Add `"use client"` only when code genuinely requires:

- browser APIs;
- local interactive state;
- event-driven client behaviour;
- Motion for React;
- another client-only capability.

Keep client boundaries as small as reasonably possible.

Do not make an entire page a Client Component because one interaction requires client-side code.

Keep route files focused on:

- route concerns;
- metadata where appropriate;
- page composition.

Do not place unrelated application logic inside route files.

---

## TypeScript

Use TypeScript throughout.

Do not use `any` unless there is a documented, unavoidable reason.

Prefer:

- explicit prop types;
- narrow types;
- data structures that match the real content;
- types close to the code they describe.

Avoid:

- speculative generic systems;
- unnecessary shared type files;
- complex abstractions for simple static content.

Create shared types only when they are genuinely shared.

---

## Styling

Use plain CSS and CSS Modules.

Use `app/globals.css` only for:

- token imports;
- reset styles;
- document defaults;
- body behaviour;
- default links;
- focus foundations;
- genuinely global surface behaviour.

Use CSS Modules for:

- page composition;
- component styling;
- project-specific treatments;
- local responsive behaviour.

Do not place page-specific styles in `globals.css`.

Do not use inline styles for ordinary styling.

Do not recreate a utility framework.

---

## Token Usage

The files in `tokens/` are the source of truth for design values.

Use existing tokens before hard-coding:

- colours;
- typography;
- spacing;
- widths;
- motion durations;
- easing curves.

Do not create a second token system.

Do not repeatedly duplicate token values in CSS Modules.

A local value is acceptable when a specific composition genuinely requires something the token system does not express.

Do not add a global token for every one-off value.

---

## CSS Quality

Write CSS that is:

- readable;
- local;
- intentional;
- responsive;
- easy to trace to the composition.

Use semantic names based on purpose.

Prefer names such as:

- `.projectIntro`;
- `.headlineSequence`;
- `.imageField`;
- `.marginNote`.

Avoid names such as:

- `.box`;
- `.thing`;
- `.wrapper2`;
- `.leftSide`.

Do not use `transition: all`.

Do not use `!important` to solve ordinary cascade problems.

Avoid unnecessary selector nesting.

Prefer a clear class over a fragile selector chain.

---

## Component Strategy

Create a component when it:

- is reused;
- contains meaningful interaction logic;
- isolates a clear responsibility;
- materially improves readability or maintenance.

Do not create a component merely because a section exists.

Do not create:

- a universal section component;
- a universal content block;
- a universal project-page renderer;
- a large component library before the pages exist.

Start with the page.

Extract shared components after genuine repetition becomes clear.

> Prefer clear duplication over premature abstraction.

Two sections that look similar are not automatically the same component.

Reuse should follow proven sameness.

Do not force sameness to achieve reuse.

---

## Project Pages

A shared route does not require a shared visual template.

Shared low-level components and functional behaviour are acceptable.

Each project body must remain free to use its own:

- composition;
- image rhythm;
- pacing;
- text scale;
- project accent;
- editorial moments.

Do not flatten project differences for implementation convenience.

Do not create a configuration-heavy system that attempts to generate all six project compositions from one schema.

---

## Content Implementation

The Markdown files are structured editorial source material.

Do not build a generic blog renderer.

Do not blindly render every heading, paragraph, and list through one universal page component.

For each page:

1. read the source;
2. preserve the content and order;
3. identify the narrative moments;
4. map them into the intended composition.

The source file owns the content.

The implementation owns the composition.

If content parsing is required, use the smallest approach that solves the actual need.

Do not add a CMS or publishing system for hypothetical future content.

---

## Static Architecture

This is primarily a static editorial website.

Prefer static data and server-rendered content.

Do not introduce:

- a database;
- API routes;
- server actions;
- global state;
- complex data fetching;

unless an actual feature requires them.

Do not build infrastructure for features the portfolio does not have.

---

## Images

Use the established directories under `public/images/`.

For meaningful images:

- provide useful alt text;
- preserve intentional crops;
- reserve dimensions where possible;
- use appropriate responsive sizes;
- avoid unnecessarily large files.

For decorative images:

- use empty alt text;
- keep them out of the assistive reading experience.

Use Next.js image handling where it provides a real benefit.

Do not force every image through the same wrapper or aspect ratio.

Do not let optimisation flatten intentional editorial compositions.

---

## Image Performance

Prioritise only images important to initial page arrival.

Do not mark every image as high priority.

Use responsive `sizes` deliberately.

Avoid shipping oversized source files when smaller assets are sufficient.

Do not preload media the visitor may never reach.

Prevent avoidable layout shifts.

---

## Motion

Use CSS for:

- hover feedback;
- colour transitions;
- arrow movement;
- editorial underlines;
- straightforward reveals.

Use Motion for React only when CSS is insufficient, such as:

- coordinated sequences;
- scroll-aware editorial moments;
- project-specific timing requiring JavaScript.

Do not:

- wrap every section in a motion component;
- animate every paragraph;
- animate every word;
- delay access to content.

Keep motion components isolated from static page composition where possible.

Respect the existing reduced-motion behaviour.

---

## Client-Side JavaScript

Use as little client-side JavaScript as the experience requires.

Do not add JavaScript for:

- static layout;
- typography;
- ordinary responsive behaviour;
- simple hover states;
- static content rendering.

Prefer CSS and Server Components when they solve the problem well.

Do not ship a large client bundle for a mostly static portfolio.

---

## Dependencies

Before adding a dependency, ask:

> Does this solve a real problem better than the existing stack can?

Do not add a package:

- for one trivial utility;
- because it is conventional;
- for hypothetical future use;
- to avoid writing a small amount of clear code.

Use approved dependencies before introducing alternatives.

Report any new dependency added and why it was necessary.

---

## Responsive Implementation

Build responsive behaviour with each page.

For every major composition, consider:

- small mobile;
- large mobile;
- tablet;
- laptop;
- wide desktop.

Do not treat mobile as a final shrinking pass.

Simplify compositions where necessary.

Do not preserve desktop asymmetry when it damages reading clarity.

Do not rely on hover for essential information.

---

## Performance

Prioritise meaningful performance concerns:

- image weight;
- font loading;
- client JavaScript;
- unnecessary dependencies;
- layout shifts;
- expensive animation.

Avoid premature micro-optimisation.

Do not trade away the intended editorial experience for meaningless benchmark gains.

---

## Metadata

Use Next.js metadata capabilities.

Each public page should have an appropriate:

- title;
- description.

Project pages should have project-specific metadata.

Use only information supported by the content.

Do not invent promotional claims for metadata.

Add social imagery only when real assets are available.

---

## Missing Content and Assets

Do not silently invent replacements.

If required content or an asset is missing:

- preserve the page structure where possible;
- use a clear development fallback if necessary;
- report what is missing.

Missing optional imagery should not crash an entire page.

Do not use unrelated placeholder imagery in a production-ready result.

---

## Code Organisation

Keep:

- files focused;
- naming clear;
- logic close to where it is used;
- component styles beside components;
- page-specific code near the page.

Do not create deep folder structures without a real need.

Do not create empty folders for hypothetical features.

Remove:

- dead code;
- unused imports;
- abandoned experiments;
- commented-out implementation fragments.

Do not leave competing approaches in the codebase.

---

## Verification

Before reporting frontend work as complete, check:

- the application builds;
- TypeScript passes;
- routes work;
- there are no obvious console errors;
- content is preserved;
- tokens are used correctly;
- responsive behaviour works;
- keyboard interaction still works;
- reduced motion is respected;
- images do not create avoidable layout shifts.

Do not claim completion without running the relevant checks.

---

## Working Discipline

For each implementation stage:

1. Inspect the relevant sources.
2. Build only the requested stage.
3. Run relevant checks.
4. Review against the source material.
5. Report files created or changed.
6. Report unresolved issues.
7. Stop before the next major stage.

Do not automatically continue into another major page or phase.