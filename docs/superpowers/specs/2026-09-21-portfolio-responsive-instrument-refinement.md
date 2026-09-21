# Portfolio responsive-instrument refinement

## Goal

Keep the existing hero unchanged and evolve the remaining portfolio into an interactive, responsive workbench. The page should feel alive while scrolling, visually coherent with the terminal/editor visual language, and more deliberate in its treatment of projects, capability groups, the technical trajectory, achievements, experiments, and contact.

Motion must draw attention to real content, never replace it. The static Astro output remains complete, readable, and usable without JavaScript.

## Interaction model

### Progressive enhancement

Add one small client-side motion module loaded by the portfolio page. It uses:

- `IntersectionObserver` to reveal observed elements, identify the active page section, and activate the current trajectory phase.
- Pointer events only on fine-pointer, hover-capable devices to add restrained tilt/depth to selected project modules.
- CSS custom properties set by the script for bounded pointer translation and trajectory progress.

The module must be independent of page copy. It selects semantic `data-*` hooks owned by presentation components. No state is persisted, no data is fetched, and no server logic is introduced.

### Motion rules

- Reveal transitions use a small upward settle, opacity change, and border/signal illumination. Elements are visible before JavaScript runs.
- A section becomes active only when a meaningful portion is in view; header navigation reflects this with a nonessential visual state.
- Project diagram paths animate only while the owning project card is visible.
- Pointer depth remains subtle, is disabled on touch/coarse-pointer devices, and does not alter document flow.
- All script-driven enhancements are disabled when `prefers-reduced-motion: reduce` is active. CSS maintains the same rule for transitions and decorative animation.
- Effects must not create horizontal overflow, obscure focus outlines, or change the expected action of links.

## Section refinements

### Selected work

- Retain the four selected projects and their order.
- Convert the section into a staggered set of workbench modules rather than uniformly passive cards.
- Give each module a visible state system: compact system marker, animated diagram connection paths, consistent content alignment, anchored stack/action area, and a restrained pointer response on desktop.
- Preserve the real project descriptions, stack, and repository links supplied through the translation data.

### About and capabilities

- Retain the editor-style About composition, but give it reveal staging and an active editor/status indicator.
- Replace the plain capability matrix with four system panels. Each panel has a structural corner marker, faint grid/line treatment, and staged tag entrance. Content groups and copy remain unchanged.

### Technical trajectory

- Replace the plain ordered list with a trace interface.
- On desktop, use a persistent vertical rail beside four larger phase modules. The rail has a bounded, scroll-activated signal/progress line and the currently active phase receives a visible state.
- Keep the four existing phases and their sequence. Do not turn the timeline into a horizontal carousel or hide phases behind interactions.
- On mobile, simplify to a readable vertical sequence without a sticky rail; preserve the active line and phase markers.

### Achievements and contact

- Retain all confirmed achievement content and contact links.
- Give achievements medal/signal-disk treatments, with gold reserved for OBI emphasis and no inflated claims.
- Enhance contact with an operational status panel, animated decorative linework, and the existing GitHub, LinkedIn, and authorized email links.

### More experiments

- Replace the current four-column card layout with a Lab Registry.
- Desktop displays a two-column grid of equally structured rows; mobile uses one column.
- Each row has a stable order marker/status glyph, project name and eyebrow, a compact stack line, and an anchored source link. Variable description length must not misalign source actions across entries.
- The smaller work remains visually secondary to selected projects but is presented as purposeful exploration rather than leftover cards.

## Visual system

- Preserve the existing near-black, off-white, cyan, Brazil-green, and achievement-gold palette.
- Add depth through bounded gradients, instrument-grid patterns, subtle scan/connection lines, and active-state illumination; do not add particle fields, code rain, heavy glassmorphism, autoplay media, or decorative noise that impairs reading.
- Keep the terminal language concentrated in metadata, system states, rails, and compact labels. Use editor-like space for prose.
- Keep the portrait and hero untouched.

## Accessibility and fallbacks

- The static document includes every item and link before the enhancement script runs.
- Use semantic sections, headings, lists, and links; motion markers are decorative or have suitable accessible labels.
- Preserve skip navigation, focus-visible styles, readable contrast, and tap-target sizes.
- The active header state cannot be the sole way to understand location on the page.
- Test keyboard navigation and reduced-motion behavior after enhancement.

## Verification

1. Run Prettier and `astro build`.
2. Verify both `/en-intl/` and `/pt-br/` render every section before client enhancement.
3. Verify IntersectionObserver-driven reveal, active navigation state, project-diagram activation, timeline activation, and pointer behavior in a desktop browser.
4. Verify mobile layout: one-column registry, non-sticky trace, no clipping, no horizontal overflow, and usable links.
5. Verify `prefers-reduced-motion` disables decorative motion while preserving content and visual hierarchy.
6. Recheck the original portfolio brief guardrails: no unverified claims, private data beyond the authorized email, unverified demos, or excluded repositories.
