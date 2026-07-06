---
trigger: always_on
---

# Accessibility Rules

## Purpose

These rules govern accessibility across Francis Igwe’s portfolio.

Apply them while building and reviewing:

- pages;
- navigation;
- links;
- interactive elements;
- imagery;
- typography;
- motion;
- responsive behaviour.

Accessibility is part of the implementation from the beginning.

Do not postpone it to a final cleanup pass.

---

## Core Principle

The portfolio may be visually expressive, but expression must not block access to the writing.

When experimentation conflicts with:

- readability;
- navigation;
- understanding;
- interaction;

access wins.

Do not remove visual character unnecessarily.

Find an accessible version of the intended idea.

---

## Semantic HTML

Use semantic HTML according to meaning.

Prefer:

- `header`;
- `nav`;
- `main`;
- `section`;
- `article`;
- `aside`;
- `footer`;
- `figure`;
- `figcaption`.

Do not use generic `div` elements when a semantic element clearly fits.

Use buttons for actions.

Use links for navigation.

Do not make a `div` or `span` behave like a button.

---

## Page Structure

Every page must have:

- one clear primary `h1`;
- a logical heading hierarchy;
- a `main` landmark;
- a descriptive page title.

Do not choose heading levels for visual size.

Style headings according to the design system.

Keep document structure logical for people navigating by headings.

---

## Keyboard Access

All interactive elements must be usable with a keyboard.

A keyboard user must be able to:

- reach navigation;
- open and close mobile navigation;
- follow links;
- activate controls;
- move through the page in a logical order.

Do not create keyboard traps.

Do not require a mouse for essential functionality.

Do not use positive `tabindex` values to force focus order.

DOM order should support the intended reading and interaction order.

---

## Focus

All interactive elements must have a visible focus state.

Do not remove outlines without providing a clear replacement.

Focus indicators must remain visible against:

- Ink;
- Warm Paper;
- project-specific surfaces.

Do not rely on colour change alone when the change is too subtle to locate focus.

Use `:focus-visible` where appropriate.

---

## Skip Navigation

Provide a skip link that allows keyboard users to move directly to the main content.

The skip link may remain visually hidden until focused.

It must:

- become clearly visible on focus;
- move focus to the main content;
- work on every page.

---

## Links

Link text should make sense in context.

Avoid repeated vague labels such as:

- Click here;
- Learn more;
- Read more;

when a clearer label is possible.

Project links should identify the destination.

External links should behave consistently.

Do not use colour alone to distinguish important links from surrounding text when another cue is needed.

---

## Buttons

Buttons must have an accessible name.

Icon-only buttons require a clear accessible label.

Examples include:

- menu open;
- menu close;
- carousel controls if any are introduced.

Do not rely on an icon’s appearance alone to communicate the action.

Touch targets should meet the minimum interactive size defined in the spacing tokens.

---

## Navigation

The site navigation must remain understandable without animation.

The current page should be identifiable where appropriate.

Mobile navigation must:

- open from a real button;
- expose its state;
- close predictably;
- remain keyboard accessible.

When the mobile menu is open, focus behaviour must remain logical.

Do not allow hidden navigation links to remain accidentally focusable.

---

## Colour and Contrast

Maintain sufficient contrast for:

- body text;
- headings;
- links;
- metadata;
- controls;
- focus indicators.

Pay particular attention to:

- Ash text on Ink;
- text over images;
- project accent colours;
- text on Warm Paper.

Do not assume a token combination is accessible in every context.

Test the actual foreground and background combination.

Do not use colour alone to communicate meaning or state.

---

## Typography

Prioritise readability.

Do not use:

- very small body text;
- extremely tight line height;
- long all-caps passages;
- low-contrast text for important information.

All-caps styling is acceptable for short labels and metadata.

Long-form content must preserve comfortable:

- size;
- line length;
- line height;
- paragraph spacing.

Do not justify body text.

---

## Text Scaling

The layout must remain usable when text is enlarged.

Do not depend on fixed-height text containers.

Avoid clipping caused by:

- fixed heights;
- hidden overflow;
- rigid line counts.

Expressive text cropping must never affect essential content.

When enlarged text breaks an experimental composition, simplify the composition.

---

## Images

Every meaningful image needs useful alternative text.

Alt text should communicate the image’s purpose in context.

Do not:

- repeat nearby captions unnecessarily;
- begin every description with “Image of”;
- stuff alt text with keywords.

Decorative images should use empty alt text.

Do not place essential information only inside an image.

---

## Complex Visuals

If a diagram, figure, or visual comparison communicates important information, provide an accessible text equivalent.

Do not rely on:

- position alone;
- colour alone;
- visual lines alone;

to communicate a relationship.

Keep important figures available as real text.

---

## Text Over Images

Avoid placing sustained reading text over busy images.

When text overlays an image:

- maintain strong contrast;
- protect legibility across responsive crops;
- keep the text concise.

Do not rely on a fragile image area remaining empty at every screen size.

---

## Motion

Respect `prefers-reduced-motion`.

The existing motion tokens define the reduced-motion foundation.

When reduced motion is requested:

- remove non-essential movement;
- keep content visible;
- preserve functionality;
- avoid replacing one animation with another.

Do not require animation to understand:

- content order;
- relationships;
- navigation;
- project meaning.

---

## Scroll Behaviour

Do not use:

- scroll-jacking;
- forced horizontal scrolling for ordinary content;
- long pinned sections that trap reading;
- effects that require precise scrolling.

The visitor must be able to move through the work normally.

Smooth scrolling must not override reduced-motion preferences.

---

## Hover

Essential information must not depend on hover.

Anything revealed on hover should have an appropriate equivalent for:

- keyboard users;
- touch users.

Do not create interactions that become meaningless without a pointer.

Hover may enhance an experience.

It must not unlock required content.

---

## Responsive Accessibility

Mobile layouts must preserve:

- reading order;
- clear headings;
- usable touch targets;
- adequate spacing;
- access to all content.

Do not preserve desktop asymmetry when it creates a confusing mobile order.

The visual order should not contradict the DOM reading order.

Do not hide meaningful content merely because the screen is smaller.

---

## Forms

Do not add a form unless the approved design requires one.

If a form is later introduced:

- every field needs a visible label;
- errors must be clear;
- instructions must not rely on placeholder text;
- validation messages must be understandable;
- keyboard use must remain complete.

Do not create a decorative contact form.

---

## Hidden Content

Use visually hidden content only when it improves accessibility.

Do not hide large amounts of duplicate text from sighted users while exposing it to assistive technology.

Elements hidden visually should not remain interactive unless intentionally designed that way.

Use the correct hiding method for the intended behaviour.

---

## Dynamic Content

If content changes without navigation, ensure the change is understandable.

Do not add live regions unnecessarily.

Use announcements only for changes a screen-reader user genuinely needs to know about.

Avoid excessive accessibility attributes when native HTML already provides the correct behaviour.

---

## ARIA

Prefer native HTML before ARIA.

Do not add ARIA roles to elements that already have the correct native semantics.

Use ARIA only when necessary to communicate:

- names;
- states;
- relationships;
- expanded or collapsed behaviour.

Incorrect ARIA is worse than no ARIA.

---

## Testing

Before considering a page complete, test:

1. Keyboard navigation.
2. Visible focus states.
3. Heading structure.
4. Landmark structure.
5. Link and button names.
6. Image alt text.
7. Colour contrast.
8. Reduced motion.
9. Mobile reading order.
10. Text enlargement and reflow.

Use automated checks where helpful.

Do not rely on automated checks alone.

---

## Review Questions

Before completing a page, ask:

1. Can the page be understood without animation?
2. Can every action be completed with a keyboard?
3. Is focus always visible?
4. Does the heading structure match the content?
5. Is important information available as text?
6. Does every meaningful image have useful alt text?
7. Is any content available only on hover?
8. Does the mobile reading order make sense?
9. Does reduced motion preserve the full experience?
10. Has visual experimentation harmed clarity?

Fix accessibility issues before adding more visual complexity.

---

## Final Rule

Accessibility is not a separate visual style.

The portfolio should remain:

- expressive;
- editorial;
- distinctive.

But every visitor must still be able to:

- navigate it;
- read it;
- understand it;
- interact with it.

When a visual idea creates a barrier, adapt the idea.