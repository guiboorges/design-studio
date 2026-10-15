# Web Brutalism

> **Scope:** The raw, unpolished web aesthetic (default HTML styles, system and monospace fonts, visible structure, deliberate "ugliness") that emerged in the mid-2010s, plus its distinction from antidesign.
> **Last verified:** 2026-10
> **Used by:** creative-director, ui-designer, art-director, design-system-architect

## Origin & context

- **Architectural term:** Swedish architect Hans Asplund coined *nybrutalism* ("new brutalism") for Villa Göth in Uppsala (designed January 1950). Alison and Peter Smithson took up "new brutalism," Alison Smithson first used it in print in 1953, and Reyner Banham's 1955 essay "The New Brutalism" (*Architectural Review*) popularized it. Banham linked it to *béton brut* ("raw concrete," Le Corbusier) and *art brut*. His book *The New Brutalism: Ethic or Aesthetic?* followed in 1966 [1].
- **On the web:** Barebones sites like Craigslist (largely unchanged since the 1990s) were "brutalist" by function before the label existed [2]. NN/g cites Craigslist and the Drudge Report as early-1990s-style references [3].
- **The label:** "Since around 2014, brutalist websites have flourished." The digital use of "brutalism" "appears to have originated with Pascal Deville," co-founder of the agency Freundliche Grüsse, who started **brutalistwebsites.com** to catalog the phenomenon [2]. (Secondary source; the site's exact launch date is [unverified].) The site's tagline reads: "In its ruggedness and lack of concern to look comfortable or easy, Brutalism can be seen as a reaction by a younger generation to the lightness, optimism, and frivolity of today's web design." [4]
- **Cultural reason:** A reaction against polished, template-driven, "crowd-pleasing" flat and Material sites. It was youthful rebellion and a claim to honesty [2][3]. NN/g: brutalism rejects polished template design and aims for honesty, a goal it shares with flat design but pursues differently [3].
- **Two strands (NN/g):** **Brutalism** is stripped-down, bare-bones design: plain HTML, blue links, monochrome monospace text. **Antidesign**, often also called brutalism, means "intentionally creating ugly, disorienting, or complex interfaces," with harsh colors, weak hierarchy, odd cursors, and distracting animation [3].

## Visual DNA

- Default or near-default HTML: Times/serif or system fonts, browser-blue underlined links, gray form controls.
- Monospace type used for body text or metadata.
- Visible structure: tables, borders, raw grids, unstyled lists, exposed `<hr>`.
- Black and white, or a single loud default color (pure red, pure blue, `#00FF00`).
- No or minimal imagery; images shown raw (no rounding, no shadow).
- Asymmetric or collage-like layouts, overlapping elements (antidesign).
- Text as the main material, sometimes huge and cropped off-canvas.
- Honesty about the medium: what it is, not what it's pretending to be [3].

## Token recipe

| Token | Starting value | Notes |
|-------|----------------|-------|
| Typography: families | `Times New Roman, Times, serif` and/or `ui-monospace, Menlo, Consolas, monospace`, or system UI sans. | Default fonts are the point. Load zero webfonts or one grotesque. |
| Typography: scale | Either browser defaults (16px body, h1 2em) or extreme jumps (16px → 160px). | |
| Typography: weights | 400 and 700 only. | |
| Typography: letter-spacing | 0. Display can go tight (−0.04em) when oversized. | |
| Color: structure | 2–3 colors total. White/black + one default-like hue. | |
| Color: example values | Link `#0000EE` oklch(42.9% 0.297 264.1) (9.40:1 on white); visited `#551A8B` oklch(37.8% 0.172 302.2) (11.01:1); black on yellow `#FFFF00` (19.56:1); terminal green `#00FF00` on black (15.30:1). Pure red `#FF0000` on white is only 4.00:1 (**fails** body text). | Raw palettes still need contrast checks [5]. |
| Radius | 0. | |
| Borders | 1–3px solid black; double borders; table borders visible. | |
| Shadows / elevation | None (or a crude hard 1990s bevel in antidesign). | |
| Spacing / grid | Browser default margins (8px body margin) or rigid table-like grid. Tight spacing is acceptable. | |
| Imagery & iconography | Unprocessed photos, screenshots, GIFs, ASCII, emoji or Unicode symbols instead of icon sets. | |
| Motion | None, or abrupt: instant state changes, `marquee`-like scrolling text in antidesign. | Distracting motion must be pausable and respect reduced motion [6]. |
| Texture / effects | None, or deliberate glitches (antidesign). | |

## Signature examples

| Example | Year | Why |
|---------|------|-----|
| Craigslist | 1990s → present | Functional brutalism [2][3]. |
| Drudge Report | 1990s → present | Cited by NN/g as raw, unadorned [3]. |
| brutalistwebsites.com (curated by Pascal Deville) | c. 2014 → | The catalog that named the movement [2][4]. |
| Sites listed on brutalistwebsites.com (e.g., RAW Magazine, 37signals) | 2014 → | Listed examples on the site's index (observed 2026-10) [4]. |

## Fits / Avoid

**Fits:** artists, musicians, designers, galleries, independent publications, portfolios, fashion and youth-culture brands, and developer or personal sites where honesty and speed are the message. Usually aimed at younger, artsier audiences [2].

**Avoid:** e-commerce checkouts, banking, healthcare, government services, onboarding for non-technical users, anything where trust and task completion dominate.

**Evidence on people:**
- NN/g: brutalism works best when limited to *visual* design, keeping hierarchy, navigation, and interaction intact. Antidesign suits only an audience of designers or artists, or an entertainment product. Otherwise "an antidesign UI will backfire," because "people don't want to solve a puzzle when they use a product" [3]. **[E2]**
- High visual complexity sharply reduces first-impression appeal (242 participants, 450 sites) [7]. **[E1]** Antidesign's clutter works against broad audiences. Bare-bones brutalism (low complexity) does not have this problem.

**Accessibility risks:** default link colors are fine, but antidesign's harsh color pairs, overlapping text, custom cursors, autoplay animation, and low hierarchy cause real barriers [3][5][6]. Oversized text cropped off-canvas can hide content from screen-magnifier users.

**When it ages badly:** antidesign gimmicks (custom cursors, marquee text) date fast. Bare-bones brutalism (fast, semantic HTML) ages very well.

**Limit:** Rawness must not break semantics. Keep real headings, labels, focus states, and alt text. "Brutal" is a visual stance, not permission to ship inaccessible markup.

## Across media

| Medium | How it translates |
|--------|-------------------|
| App UI | Rare. Use monospace data tables, visible borders, and system controls for utility or dev tools. |
| Website | Semantic HTML with minimal CSS; giant type; visible grid; default link styling; fast load. |
| Social post | Screenshot-like text posts, raw photos, Times or mono type, harsh crops. |
| Print / editorial | Photocopy, zine, and xerox aesthetics; Courier; tabular layouts. |
| Billboard | One raw sentence in Times or mono on white. The "unbranded" look stands out among polished ads. |

## Common mistakes

- Confusing brutalism (bare, honest) with antidesign (chaotic) and shipping chaos to a mainstream audience [3].
- Breaking navigation or hierarchy to look "edgy" [3].
- Heavy JavaScript and webfonts on a style whose promise is rawness and speed.
- Pure red or saturated hues on white below 4.5:1 [5].
- Using the label for any ugly page without intent.

## Pairs well with / Related styles

- **Descendant:** `neo-brutalism.md` (colorful, orderly, product-friendly).
- **Shares goals with:** `flat-design.md` (honesty to the medium) [3], `swiss-international.md` (raw grid).
- **Opposite:** `apple-style.md`, `glassmorphism.md` (polish and illusion).
- **Overlaps with:** `maximalism.md` and `anti-design-ugly.md` (antidesign strand).

## Sources

[1] Wikipedia contributors. (n.d.). *Brutalist architecture*. Wikipedia. https://en.wikipedia.org/wiki/Brutalist_architecture (secondary source; accessed 2026-10)
[2] Levanier, J. (2021, June 30). *Brutalism in design: its history and evolution in modern websites*. 99designs blog. https://99designs.com/blog/design-history-movements/brutalism/ (secondary source)
[3] Moran, K. (2017, November 5). *Brutalism and Antidesign*. Nielsen Norman Group. https://www.nngroup.com/articles/brutalism-antidesign/
[4] Brutalist Websites. (n.d.). *Brutalist Websites* [index page and tagline]. https://brutalistwebsites.com/ (accessed 2026-10)
[5] W3C. (2023). *Understanding SC 1.4.3 Contrast (Minimum)* (WCAG 2.2). https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html
[6] W3C. (2023). *Understanding SC 2.3.3 Animation from Interactions* (WCAG 2.2). https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html
[7] Reinecke, K., Yeh, T., Miratrix, L., Mardiko, R., Zhao, Y., Liu, J., & Gajos, K. Z. (2013). *Predicting users' first impressions of website aesthetics with a quantification of perceived visual complexity and colorfulness*. Proceedings of CHI 2013, ACM. https://doi.org/10.1145/2470654.2481281
