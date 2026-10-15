# Neo-Brutalism (Neubrutalism)

> **Scope:** The colorful, orderly, product-friendly descendant of web brutalism: thick black outlines, hard offset shadows, flat saturated fills, and bold type. Popular in startup, creator-economy, and design-tool marketing in the 2020s.
> **Last verified:** 2026-10
> **Used by:** creative-director, ui-designer, art-director, design-system-architect

## Origin & context

- **Definition:** NN/g calls neobrutalism a "visual-design trend defined by high contrast, blocky layouts, bold colors, thick borders." It adapts brutalist architecture's name for digital design and blends in nostalgic 1990s graphic elements. Results are usually "more colorful and orderly than true brutalist web design" [1].
- **Lineage:** Grew out of web brutalism (see `brutalism-web.md`) but keeps usability conventions intact. It is brutalism's rawness without antidesign's chaos.
- **Key adopters cited by NN/g (2025):** Gumroad, whose "raw, high-contrast homepage suits its focus on independent creators," and Figma, whose brand refresh "uses bold contrasts and unconventional typography." Also Look Beyond Limits (Halo Lab), 99percentoffsale.com, Tony's Chocolonely, and Dodonut [1].
- **Gumroad:** founded in 2011 by Sahil Lavingia [2]. Its current design system (observed 2026-10) uses pink `#ff90e8`, hard `4px 4px 0` black shadows, and the ABC Favorit typeface [3]. The year of the redesign that introduced this look is commonly given as 2021 [unverified]. No primary source was found in this pass.
- **Cultural reason:** Startups wanted to stand out from the homogeneous flat/Material/"corporate Memphis" SaaS look while staying usable. The style is cheap to build (no imagery or gradients required), reads well at thumbnail size on social media, and signals independence and playfulness.

## Visual DNA

- **Thick black borders** (2–4px) on cards, buttons, inputs, and images [1].
- **Hard offset shadows:** solid, single-color, no blur (e.g., `4px 4px 0 #000`) [1][3].
- **Flat, saturated fills:** pinks, yellows, mint, lilac, often in pastel-bright tones, two or three per layout [1].
- **Bold, expressive type** as a focal point, balanced by generous whitespace [1].
- **Retro touches:** Windows 98-style buttons, monospace fonts [1].
- Blocky, card-based layouts with visible structure.
- Buttons that "press" (the shadow collapses on click).

## Token recipe

| Token | Starting value | Notes |
|-------|----------------|-------|
| Typography: families | A characterful grotesque for display and UI (Gumroad uses ABC Favorit [3]; alternatives: Space Grotesk, Archivo, Lexend Mega, Clash Display). Mono for metadata (`ui-monospace`). | NN/g: pair decorative headlines with clean, neutral body fonts [1]. |
| Typography: scale | Display ratio 1.333–1.5; body 16–18px; headlines 48–96px. | |
| Typography: weights | 500–800 display; 400–500 body. | |
| Typography: letter-spacing | Display −0.02em; uppercase labels +0.04em. | |
| Color: structure | Black ink + off-white base + 2–3 flat brights (NN/g: limit to two or three bold colors) [1]. | |
| Color: example values (Gumroad tokens, observed) | Pink `#ff90e8` oklch(79.9% 0.170 335.2); yellow `#f1f333` oklch(93.3% 0.193 110.3); orange `#ffc900` oklch(85.9% 0.176 89.0); green `#23a094` oklch(63.8% 0.105 185.1); purple `#90a8ed` oklch(74.0% 0.104 269.1); gray `#f4f4f0`; red `#dc341e`; black `#000` [3]. | Black text passes on all of these (6.53–19.05:1). **White** text on green `#23a094` = 3.22:1 (large text only). Pink as text on white = 2.02:1 (**fails**). |
| Radius | 0–4px (Gumroad `--radius: 0.25rem`) [3], or fully rounded pills. Don't mix. | |
| Borders | `--border-width: 0.0625rem` (1px) up to 2–3px in `#000` [3]. | Black borders help non-text contrast (≥3:1) [4]. |
| Shadows / elevation | `box-shadow: 4px 4px 0 0 #000` (cards, buttons); `0.25rem 0.25rem 0` and `0.5rem 0.5rem 0` variants [3]. Hover: shift `translate(-2px,-2px)` + larger shadow; active: `translate(4px,4px)` + shadow 0. | No blur, ever. |
| Spacing / grid | 8px base; generous padding (24–32px in cards); 16–24px gaps so shadows don't collide. NN/g: whitespace prevents clutter [1]. | |
| Imagery & iconography | Flat illustrations with black outlines, stickers, cut-out photos with borders, chunky 2px-stroke icons, emoji. | |
| Motion | 80–150ms, `steps()` or linear for the button press; 200ms ease-out for hovers. | Snappy, not floaty. |
| Texture / effects | None, or flat dot or grid patterns in the background. | |

## Signature examples

| Example | Year | Why |
|---------|------|-----|
| Gumroad (homepage and product UI) | Current design observed 2026-10; redesign year [unverified] | NN/g's flagship example [1]; tokens above [3]. |
| Figma brand refresh | Cited by NN/g 2025 (refresh year not verified here) | Bold contrasts, unconventional type [1]. |
| Tony's Chocolonely; Look Beyond Limits (Halo Lab); 99percentoffsale.com; Dodonut | Cited 2025 | Further examples [1]. |

## Fits / Avoid

**Fits:** creator tools, indie SaaS, design and dev tools, education for younger audiences, fintech challengers, event and campaign microsites, newsletters, playful consumer apps.

**Avoid / adapt:** luxury, healthcare, legal, and enterprise procurement contexts where gravitas matters; dense data tools (thick borders on every cell add noise); audiences that read "playful" as "unserious."

**Evidence on people:**
- NN/g: success "hinges on balancing boldness with usability." Keep buttons clear and type readable, signal hover and click states, and use size and color so calls to action still stand out [1]. **[E2]**
- "Bold colors must meet text-contrast standards." Some vibrant pairings fail readability tests [1]. **[E2]**
- No controlled studies of neo-brutalism's effect on conversion or trust were found in this pass. Claims that it "converts better" are **[E3]**.

**Accessibility risks:** white text on mid-saturation fills (green 3.22:1); colored text on white (pink 2.02:1); color-only state changes; motion on press without reduced-motion handling. Strengths: black borders and solid shadows make component boundaries very clear (good for 1.4.11) [4].

**When it ages badly:** it is now widely templated (UI kits, Tailwind themes), so unmodified versions read as "2022–2024 startup." Over-stickered pages feel juvenile.

**Limit:** Novelty must not override hierarchy. Primary actions need the strongest contrast, not just another bright box among many.

## Across media

| Medium | How it translates |
|--------|-------------------|
| App UI | Bordered cards and buttons with hard shadows; flat brights for categories; keep forms conventional with clear labels. |
| Website | Bright section bands, oversized headlines, bordered feature cards, sticker-like badges, and a pressable CTA. |
| Social post | Very strong at thumbnail size: one bright field, black-outlined card, bold headline, a sticker. |
| Print / editorial | Risograph-like flat inks, thick rules, zine layouts. |
| Billboard | Flat bright background, black type, one outlined object. High legibility. |

## Common mistakes

- Using five or more brights at once. Keep to two or three [1].
- Mixing blurred and hard shadows.
- Thick borders on every element, including inline text and table cells.
- White text on pastel brights.
- Inconsistent shadow direction or offset across components.
- Copying a UI kit without a brand-specific typeface or color.

## Pairs well with / Related styles

- **Parent:** `brutalism-web.md`.
- **Cousins:** `flat-design.md` (flat fills), `maximalism.md` (when pushed), `bento-grid.md` (bordered tiles).
- **Opposites:** `glassmorphism.md`, `neumorphism.md` (soft, low-contrast).

## Sources

[1] Sheikh, H. (2025, April 11). *Neobrutalism: Definition and Best Practices*. Nielsen Norman Group. https://www.nngroup.com/articles/neobrutalism/
[2] Wikipedia contributors. (n.d.). *Gumroad*. Wikipedia. https://en.wikipedia.org/wiki/Gumroad (secondary source; accessed 2026-10)
[3] Gumroad. (2026). gumroad.com homepage and design stylesheet `design-*.css` (CSS custom properties observed by inspection, 2026-10). https://gumroad.com/
[4] W3C. (2023). *Understanding SC 1.4.11 Non-text Contrast* (WCAG 2.2). https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html
