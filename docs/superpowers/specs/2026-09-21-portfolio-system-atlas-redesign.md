# Portfolio System Atlas redesign

## Goal

Replace the post-hero visual architecture with a distinctive, mobile-first System Atlas. Preserve the existing hero unchanged. The rest of the page should make Matheus Cristian’s projects feel like a connected body of technical exploration: algorithms, applications, Linux tooling, containers, hardware, automation, and applied AI.

The redesign takes inspiration from ryo-style editorial pacing, oversized type, visual chapters, and deliberate motion without copying another site. It remains a static Astro site with lightweight client-side enhancement only.

## Design principles

- Each major section is a visual chapter with a specific technical metaphor, not a repeated card grid.
- Prefer spatial composition, line art, typography, and locally generated SVG/UI visuals over generic decoration.
- Make Brazilian identity noticeable through an original modernist technical pattern system: Brazil green, achievement gold, cyan signal color, modular geometry, and soft contour lines. Do not use flags, stereotypes, or stock imagery.
- Keep terminal language to labels, metadata, and system states. Main reading remains editorial and human.
- Movement gives context to real content. It never gates comprehension or makes mobile depend on a desktop interaction.

## Page composition

### Hero

The current hero remains visually and structurally unchanged.

### Atlas entry / manifesto

Immediately after the hero, introduce a short oversized editorial transition using existing translated messaging about learning by building and understanding systems beneath abstractions. It includes an animated, decorative constellation of project nodes and a modular Brazil-inspired technical pattern.

### Selected work as project chapters

Replace the uniform two-by-two card grid with four independently composed chapters, keeping this order:

1. `spawnbx` — an environment topology: project directory, isolated container, host boundary, and persistent state.
2. `openrouter_mcp` — a media constellation: agent, MCP server, asynchronous API job, and reusable media resource.
3. `ReviewDB` — a protected catalog: identity, authorization boundary, relational data, and product interface.
4. `Metodiza` — a study blueprint: planning cells, study rhythm, and product organization.

Each chapter contains:

- A large serial number and short technical label.
- The existing translated problem/result/stack/repository content.
- A unique bespoke visual made with SVG or semantic interface fragments.
- An asymmetric desktop composition that alternates visual weight and reading side.
- A single-column mobile composition with visual first or text first according to its reading order; no absolute layout dependency.
- A local pointer spotlight/depth effect on desktop and a visible static composition everywhere else.

### About and capability atlas

Keep the existing About content but turn it into an editorial workstation sheet with a larger pull quote, line-number gutter, signal stamp, and the provided portrait only where already used in the unchanged hero.

Replace the capability boxes with an Atlas Grid: four varied but aligned technical zones. Each zone has a distinct diagram language—API routes, system layers, agent pipeline, and interface/product modules—while preserving the translated capability groups and avoiding logo clouds.

### Evolution stations

Remove the global sticky trace rail and its global dots entirely.

Render the four existing trajectory phases as sequential Evolution Stations. Every station owns its own number, marker, and connecting line within its layout, so it cannot detach from the corresponding content. The connecting line is a normal-flow pseudo-element or SVG line that grows only within that station.

Desktop may add a nonessential sticky chapter counter that does not own markers or positioning. Mobile renders a single local left rail beside the stations, with each marker physically inside its station. No fixed-height or viewport-positioned rail is used on mobile.

### Achievements and experiments

Present OBI, SENAI, and UNA as Achievement Signals: oversized date/value, medal-inspired signal rings, supporting text, and restrained gold emphasis.

Replace the Lab Registry with an Artifact Shelf: eight compact but expressive modules in a responsive masonry-like editorial grid. Modules use fixed internal rhythm—serial, title, one-line purpose, technology strip, source link—while allowing deliberately varied external size. The source action is anchored in each module and never depends on a shared row height.

### Contact

Retain GitHub, LinkedIn, and the authorized email. Rebuild the section as a clear closing transmission: an editorial invitation, a three-channel contact console, and decorative, slow-moving linework.

## Motion system

Use a single isolated client module, independent from translation data. It progressively enhances static markup with:

- Viewport-aware chapter reveal and section status changes via `IntersectionObserver`.
- Per-chapter SVG signal-path animation only while a chapter is visible.
- Fine-pointer-only spotlight/depth feedback on selected project chapters.
- Section-local line growth and signal activation for Evolution Stations.
- Slow decorative drift on static background linework.

Do not use globally positioned scroll dots, scroll-jacking, carousels, automatic media, canvas rendering, remote data, or heavy animation libraries.

When `prefers-reduced-motion: reduce` is set, do not initialise the enhancement module. Static visuals remain complete and intentional.

## Responsive rules

- Build every section as a single-column layout first.
- Apply asymmetric columns, sticky nonessential counters, and layered decorative elements only from tablet/desktop breakpoints upward.
- Decorative SVGs may scale or move into normal document flow on small screens; never clip content or cover actions.
- Use fixed, touch-friendly source links and preserve focus outlines.
- Validate narrow widths around 320px, 375px, and 768px plus a wide desktop width.

## Architecture

- Keep all visible copy in `src/content/portfolio/en-intl.ts` and `src/content/portfolio/pt-br.ts`; add matching translation fields for new editorial labels or messages.
- Refactor presentation into deep focused Astro components: `AtlasIntro`, `ProjectChapter`, `ProjectAtlasVisual`, `CapabilityAtlas`, `EvolutionStations`, `AchievementSignals`, and `ArtifactShelf`.
- Retire the current generic `ProjectCard`, `Trajectory`, and `ExperimentRegistry` paths where they no longer fit the System Atlas.
- Keep reusable domain types in the existing content schema; visuals consume a small visual key rather than copy strings.
- Keep `portfolio-motion.ts` as the only client enhancement entry. Refactor it around local components/data hooks instead of global coordinate coupling.

## Accessibility and factual guardrails

- Retain semantic sections, heading order, skip navigation, keyboard-visible focus, translated alt/accessible labels, and high contrast.
- Decorative visual layers are hidden from assistive technology. Essential project content remains textual.
- Preserve selected-project order, correct Metodiza repository, only confirmed claims, and the public GitHub/LinkedIn/authorized email contacts.
- Do not add private data, demos that have not been verified, invented scale, or excluded projects.

## Verification

1. Run Prettier and `astro build`.
2. Check both locale pages with JavaScript and with the motion module absent/reduced.
3. Inspect desktop and 320px, 375px, 768px responsive layouts for overflow, clipping, collisions, and tap target issues.
4. Verify Evolution Station markers and local line growth stay attached to each phase at every viewport size.
5. Verify every selected project, experiment, achievement, and public contact link against the original brief.
6. Verify keyboard navigation, focus visibility, and reduced-motion presentation.
