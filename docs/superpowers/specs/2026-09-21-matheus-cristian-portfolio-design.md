# Matheus Cristian portfolio design

## Goal

Build a static, bilingual personal portfolio for Matheus Cristian that presents him as a software developer in training focused on backend, systems, Linux tooling, automation, and applied AI. It must communicate real technical work and curiosity without inflated seniority, invented scale, or generic developer-marketing language.

The site targets desktop first while remaining fully usable on narrow mobile screens. It will deploy to GitHub Pages and require no server-side logic.

## Constraints

- Use Astro and Tailwind CSS as the default implementation tools. React is installed but is not needed for the planned static page.
- Render two static pages: `/en-intl/` and `/pt-br/`.
- The root route (`/`) performs client-side browser-language detection: Portuguese preferences go to `/pt-br/`; all others go to `/en-intl/`.
- Do not show a language switcher, locale picker, or locale indicator. Locale routes remain directly shareable.
- Keep all user-facing copy outside components. Translation files contain page copy, SEO values, labels, project descriptions, link labels, and accessible text.
- Do not use a backend, external API, analytics dependency, contact form, runtime data fetch, external image, or remote font.
- The provided `public/selfie.png` is the only raster asset. Other artwork is built from UI compositions and inline SVG.
- GitHub Pages deployment must respect Astro’s configured base path when producing internal links and redirect targets.

## Content and factual guardrails

Use the confirmed information in `.agents/matheus-cristian-portfolio-brief.md`.

### Public identity

- Public name: Matheus Cristian.
- Positioning: software developer in training focused on backend, systems, and practical/applied AI tooling.
- Confirmed academic context: Software Engineering student at UNA; Technical Degree in Systems Development from SENAI.
- Achievements: OBI silver medal (2022) and bronze medal (2023).
- Public contact links: GitHub `https://github.com/nthcristian`, LinkedIn `https://www.linkedin.com/in/matheus-cristian/`, and explicitly authorized email `matheuscristianrg@gmail.com`.

### Project selection

The selected-work section, in order, contains:

1. `spawnbx` — Rust developer-container CLI.
2. `openrouter_mcp` — Rust MCP server for media generation.
3. `ReviewDB` — TypeScript/Bun/Elysia/Prisma/PostgreSQL/Next.js full-stack review catalog.
4. `Metodiza` — SENAI capstone study and personal organization tool. Its repository link must target `github.com/matheuscristian/metodiza`.

The experiments section contains `zplrdr`, `marketplace_agent`, `daily_news_ai`, `upscale_pipeline`, `url_shortener`, `zpl_converter`, `mini_engine`, and `tcp_chat`.

Do not include `discord_spammer`. Do not link to unverified demos. Use repository links only unless a demo is explicitly verified during implementation.

### Claims to avoid

- No private phone number, documents, credentials, address, health details, military internals, or unconfirmed service status.
- No precise location or graduation date, because neither is confirmed for publication.
- No unverified claims of production scale, user count, performance, commercial impact, client work, professional fluency, seniority, or workflow/package health.
- Do not present administrative experience as software-development employment.

## Information architecture

Each locale page has these sections:

1. **Command header** — compact navigation to in-page sections and identity mark.
2. **Hero** — terminal-influenced identity panel, positioning, concise learning-by-building statement, GitHub/LinkedIn/email actions, an OBI signal, and the portrait.
3. **Selected work** — four primary projects. Every card states a real problem/context, what was built, brief stack tags, a GitHub link, and a bespoke project visual.
4. **About / working model** — editor-like long-form area about the learning approach and the path from algorithms to tools and systems.
5. **Capabilities** — grouped as Backend & APIs; Systems & Developer Tools; AI & Automation; Web & Product. The groups indicate experience, not equal expertise.
6. **Technical trajectory** — a readable terminal-log-inspired sequence: fundamentals and curiosity, applications, concrete tooling, and applied AI/automation.
7. **Achievements** — compact OBI, SENAI, UNA, and Metodiza TCC presentation.
8. **More experiments** — smaller project links and stacks without competing with selected work.
9. **Contact footer** — GitHub, LinkedIn, and the authorized email only.

## Visual direction

### Terminal journal

The lead style blends ryouku/Pi/Hermes terminal character with Zed-like editorial clarity and a restrained OpenCode operations feel:

- A dark near-black base, off-white text, and generous readable spacing.
- Cool cyan for interactive/navigation states, Brazil green for structural and cultural accents, and warm gold limited to OBI/achievement details.
- Brazil is noticeable but not stereotyped: use the green accent and a faint modular, modernist-inspired grid/topographic texture. Cultural identity is also stated through Portuguese content and confirmed Brazilian education/OBI context—not flags, stock imagery, or caricature.
- System sans serif for prose. System monospace is reserved for labels, paths, stack tags, small commands, and status metadata.
- Terminal expressions frame the hero, short labels, navigation, and trajectory. They never replace readable prose and do not become a command-line wallpaper.
- Longer reading areas and project detail use clean editor-style composition.
- The portrait appears once in the hero, with a deliberate crop and quiet framed treatment rather than an avatar-card effect.
- Project visuals are bespoke interface/SVG diagrams: a development-container shell for spawnbx; agent → MCP → API → media resource flow for openrouter_mcp; protected API/catalog signals for ReviewDB; and a study-planning interface for Metodiza.
- Avoid neon excess, particles, rain-of-code effects, generic AI avatars, heavy glassmorphism, giant technology logo clouds, and excessive animation.

## Static architecture

### Routing

- `src/pages/index.astro` renders a minimal redirect document. A tiny inline client script obtains browser language preferences and calls `location.replace()` with a base-aware target. A semantic no-JavaScript fallback links to the English page.
- `src/pages/en-intl/index.astro` and `src/pages/pt-br/index.astro` render the shared page with their content data.
- Route links are generated with Astro’s base URL, not hard-coded root paths.

### Content modules

- `src/content/portfolio/schema.ts` exports the type used by all translations.
- `src/content/portfolio/en-intl.ts` exports the complete English copy object.
- `src/content/portfolio/pt-br.ts` exports the complete Brazilian Portuguese copy object.
- No component holds user-facing text. Identifiers and code-level configuration are permitted outside translation modules.

### Layout and components

- `src/layouts/Layout.astro` accepts title, description, locale, canonical path, and page-specific social metadata.
- A `PortfolioPage.astro` orchestrates focused presentation components.
- Components include `SiteHeader`, `Hero`, `ProjectCard`, `ProjectVisual`, `AboutSection`, `CapabilityGroup`, `Trajectory`, `AchievementStrip`, `ExperimentGrid`, and `SiteFooter`.
- `ProjectVisual` takes a project visual key and renders a small semantic SVG/UI composition. It does not own translated descriptive copy.
- Global CSS holds design tokens, patterns, accessibility styles, responsive rules, and reduced-motion behavior. Tailwind utilities manage local layout and spacing.

## Accessibility and responsiveness

- Use semantic landmarks, ordered heading levels, a skip link, keyboard-accessible in-page navigation, visible focus states, and accessible labels for icon-like links.
- Give the portrait a translated, meaningful alt text. SVG visuals have translated labels or are marked decorative where they convey no independent information.
- Maintain high text contrast. Do not encode essential information only in color or terminal styling.
- Honor `prefers-reduced-motion`; transitions stay limited to subtle hover and focus feedback.
- Desktop uses a broad content grid with a stable navigation rhythm. Tablet and mobile collapse progressively to one reading column, preserve tap-target sizes, and keep code labels from causing horizontal overflow.

## Error and fallback behavior

- The redirect page is useful with JavaScript disabled: it includes a visible English link; browser JavaScript only enhances it.
- No visual feature requires remote content to load.
- Broken local images retain an informative alt description and non-image framing.
- External project/contact links open predictably with safe `rel` attributes when opened in new tabs.

## Verification

1. Run Prettier against Astro, TypeScript, and CSS files.
2. Run `pnpm build` to ensure static production output succeeds.
3. Inspect generated routes for `/`, `/en-intl/`, and `/pt-br/`; test language redirection for a Portuguese preference, another preference, and no-JavaScript fallback.
4. Test GitHub Pages base-path-safe internal navigation.
5. Test keyboard navigation, focus visibility, link labels, landmarks, image/SVG alternatives, and reduced-motion behavior.
6. Check desktop and narrow mobile layouts in both locales.
7. Open every included GitHub, LinkedIn, and email link.
8. Reconcile final content against the brief checklist: correct name and focus; the four selected projects first; correct Metodiza profile; no `discord_spammer`; no invented metrics/claims; no unapproved private data; no unverified demos; responsive readable layout.

## Out of scope

- A visible language switcher.
- Contact forms, mailing-list systems, analytics, CMS, server-side localization, dynamic GitHub data, or a blog.
- New photos, stock photography, generated portraits, and project screenshots sourced externally.
