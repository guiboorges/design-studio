# Bento Grid

> **Scope:** Modular layouts of rounded, differently sized tiles packed into a rectangle, like compartments in a Japanese bento box. Used for feature summaries, dashboards, portfolios, and link-in-bio pages. Lineage from Windows Phone Live Tiles to Apple's product pages.
> **Last verified:** 2026-10
> **Used by:** creative-director, ui-designer, art-director, design-system-architect

## Origin & context

- **Name:** From the Japanese bento lunch box, where differently sized compartments hold different foods in one tray. Each tile holds one idea.
- **Ancestors:**
  - Swiss modular grids (see `swiss-international.md`).
  - **Windows Phone 7 Live Tiles (2010):** the Start screen is made of tiles that link to apps and content, can be added, rearranged, or removed, and update in real time [1]. Metro carried tiles to the Windows 8 Start screen (2012) [2].
  - Card UIs from Material Design (2014 →) [3].
- **Apple:** Apple's product pages use the pattern, and Apple's own markup names it. The MacBook Pro page (observed 2026-10) contains `bento-grid` and `bento-item` elements with a 20px gap and 18px rounded tiles [4]. Apple keynote "feature recap" slides are widely cited as the popularizer of the look [unverified: no primary source located in this pass].
- **Link-in-bio:** bento.me, a grid-style personal-page product, now redirects to linktr.ee (observed 2026-10) [5]. Acquisition details are [unverified].
- **Popularity:** Designers commonly date the bento trend's peak in web and SaaS marketing to 2023 onward [unverified: no dated primary source located in this pass].
- **Cultural reason:** Feature-rich products need to summarize many capabilities at once. Tiles give each feature its own frame, and different sizes encode priority. The format also crops cleanly into social images and responsive layouts.

## Visual DNA

- A rectangular overall frame filled with tiles of 2–4 different sizes (1×1, 2×1, 1×2, 2×2).
- Uniform gaps (gutters) and uniform corner radius across all tiles.
- One idea per tile: a stat, an icon plus a line, a product shot, a mini UI, a quote.
- One "hero" tile larger than the rest, establishing hierarchy.
- Tiles distinguished by fill (light/dark, brand color, image) rather than borders.
- Short copy; headline numerals; generous inner padding.
- Optional micro-interactions inside tiles (hover reveal, looping mini-animation).

## Token recipe

| Token | Starting value | Notes |
|-------|----------------|-------|
| Typography: families | Clean sans (SF Pro, Inter, Geist) or the brand's UI face. | |
| Typography: scale | Tile title 20–28px; hero-tile title 40–56px; stat numerals 48–80px; body 15–17px. Ratio ~1.25 within tiles. | Tiles are small: keep at most 2–3 text styles per tile. |
| Typography: weights | 600 titles, 400 body, 700 numerals. | |
| Typography: letter-spacing | Display −0.02em; body 0. | |
| Color: structure | Neutral page + tile fills in 2–3 neutrals (light, mid, dark) + 1–2 brand accents + image tiles. | |
| Color: example values | Light tile `#f5f5f7` with text `#1d1d1f` (15.46:1); dark tile `#424245` oklch(38.0% 0.005 286.2) with white text (10.01:1) [4]. Gray `#86868b` on `#424245` = 2.76:1 (**fails**; use `#f5f5f7` 9.20:1). | Apple's dark bento tile fill is `#424245` [4]. |
| Radius | 18px for tiles (Apple) [4]; 12–28px range. Inner elements: radius − padding. | Same radius on every tile. |
| Borders | None (fill-separated), or 1px `rgb(0 0 0 / 0.08)` on light tiles over light pages. | |
| Shadows / elevation | None, or very soft for hover lift: `0 12px 32px rgb(0 0 0 / 0.10)`. | |
| Spacing / grid | Gap 20px desktop (Apple `.ric-bento-gap { gap: 20px }`) [4], 12–16px mobile; tile padding 24–32px; CSS grid with 4–6 columns. | `grid-template-columns: repeat(4, 1fr); grid-auto-rows: minmax(180px, auto); gap: 20px;` |
| Responsive | Desktop 4–6 columns → tablet 2–4 → mobile 1–2. Hero tile spans full width on mobile. | Reflow by priority, not by visual puzzle-fit. |
| Imagery & iconography | Product crops bleeding off tile edges; 32–48px icons; mini UI screenshots. | |
| Motion | Staggered fade/scale-in, 40–60ms stagger, 300–400ms each, `cubic-bezier(0.2, 0, 0, 1)`; hover lift 150ms. | Respect reduced motion [6]. |
| Texture / effects | Optional glass or gradient tiles (see `glassmorphism.md`). | |

## Signature examples

| Example | Year | Why |
|---------|------|-----|
| Windows Phone 7 Start screen (Live Tiles) | 2010 | Tile-grid ancestor [1][2]. |
| Windows 8 Start screen | 2012 | Tiles on desktop [2]. |
| apple.com MacBook Pro "bento-grid" section | Observed 2026-10 | Apple's markup names the pattern [4]. |
| bento.me link-in-bio grids | Now redirects to Linktree (observed 2026-10) | Consumer use of the pattern [5]. |

## Fits / Avoid

**Fits:** product feature overviews, launch pages, pricing "what's included," personal portfolios, dashboards summarizing heterogeneous metrics, social carousels, keynote recap slides.

**Avoid:** sequential content (steps, narratives), comparison tasks (use tables), long-form text, and content without real hierarchy (a grid of equal tiles is just a card grid).

**Evidence on people:**
- Aligned items are perceived as related, and grouping with negative space or container shapes signals relationships. Bento tiles exploit both [7]. **[E2]**
- Very busy grids raise visual complexity, which lowers first-impression appeal [8]. **[E1]** Keep the tile count moderate (6–9 per viewport).
- No studies specific to bento layouts were found in this pass.

**Accessibility risks:** CSS grid placement can make visual order differ from DOM order. Where sequence affects meaning, keep DOM order matching visual order (WCAG 1.3.2) [9]. Other risks: text on image tiles; low-contrast secondary text on dark tiles; whole-tile links without clear focus states; autoplaying tile animations.

**When it ages badly:** when every section of a site is a bento, or tiles contain decoration instead of information. Overuse in SaaS templates already makes generic bentos read as trend-following.

**Limit:** Tile size must reflect real importance. Don't inflate minor features into hero tiles to fill the puzzle.

## Across media

| Medium | How it translates |
|--------|-------------------|
| App UI | Home dashboards and widget grids (iOS/Android widgets follow the same logic); ensure each tile has one tap target. |
| Website | Feature summary section after the hero; 6–9 tiles; one hero tile; reflow to 1–2 columns on mobile. |
| Social post | Single-image recap (launch features, year-in-review). Crops well to 1:1 and 4:5. |
| Print / editorial | Modular magazine pages, contents spreads, annual-report highlights. |
| Billboard | Use 3–4 tiles at most; one dominant tile. Small tiles become illegible at distance. |

## Common mistakes

- All tiles the same size (loses the bento hierarchy).
- Inconsistent gaps or radii.
- Too much copy per tile.
- Puzzle-fitting tiles so the layout looks full, regardless of importance.
- Mobile reflow that scrambles reading order [9].
- Every tile animated at once.

## Pairs well with / Related styles

- **Ancestors:** `swiss-international.md` (modular grid), `flat-design.md` (Metro tiles), `material-design.md` (cards).
- **Common skins:** `apple-style.md` (neutral tiles plus product shots), `glassmorphism.md` (glass tiles), `neo-brutalism.md` (bordered bright tiles), `minimalism.md`.

## Sources

[1] Wikipedia contributors. (n.d.). *Windows Phone 7*. Wikipedia. https://en.wikipedia.org/wiki/Windows_Phone_7 (secondary source; accessed 2026-10)
[2] Wikipedia contributors. (n.d.). *Metro (design language)*. Wikipedia. https://en.wikipedia.org/wiki/Metro_(design_language) (secondary source; accessed 2026-10)
[3] Wikipedia contributors. (n.d.). *Flat design*. Wikipedia. https://en.wikipedia.org/wiki/Flat_design (secondary source; accessed 2026-10)
[4] Apple. (2026). *MacBook Pro* product page and stylesheets (`bento-grid`, `bento-item` with `background-color:#424245`, `.ric-bento-gap{gap:20px}`, `.tile-rounded` 18px; observed by inspection 2026-10). https://www.apple.com/macbook-pro/
[5] bento.me (observed 2026-10: HTTP 301 redirect to https://linktr.ee). https://bento.me/
[6] W3C. (2023). *Understanding SC 2.3.3 Animation from Interactions* (WCAG 2.2). https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html
[7] Apple. (n.d.). *Layout*. Human Interface Guidelines. https://developer.apple.com/design/human-interface-guidelines/layout
[8] Reinecke, K., Yeh, T., Miratrix, L., Mardiko, R., Zhao, Y., Liu, J., & Gajos, K. Z. (2013). *Predicting users' first impressions of website aesthetics with a quantification of perceived visual complexity and colorfulness*. Proceedings of CHI 2013, ACM. https://doi.org/10.1145/2470654.2481281
[9] W3C. (2023). *Understanding SC 1.3.2 Meaningful Sequence* (WCAG 2.2). https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence.html
