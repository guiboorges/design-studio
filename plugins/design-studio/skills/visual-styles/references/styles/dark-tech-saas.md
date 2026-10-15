# Dark Tech SaaS ("Linear style")

> **Scope:** The dark-first developer/productivity-tool aesthetic: near-black surfaces, neutral grays, one restrained accent, subtle gradients and glows, hairline borders and grid lines, dense precise UI, and product screenshots as hero art.
> **Last verified:** 2026-10
> **Used by:** creative-director, ui-designer, art-director, design-system-architect

## Origin & context

- **Linear (founded 2019).** Linear is an issue tracker founded in 2019 by Karri Saarinen (CEO), Jori Lallo and Tuomas Artman [1]. Saarinen frames tools as professional equipment: "If I'm building a house, I don't want my tools to be fun" [2]. That stance explains the restrained, serious tone of the style.
- **Naming the trend (2023).** In January 2023 designer Daryl Ginn described "the Linear effect": websites that are dark, have subtle blurred background gradients (especially behind product visuals), and use animated glowing artefacts [3]. He traced the wave to Linear ("it's all Linear's fault") and noted that Stripe held the trendsetter role around 2020 with diagonal colored shapes, gradients and duotone icons [3]. He also cautioned that many look-alike sites probably did not copy Linear directly; the shared dark look makes them seem alike [3].
- **Linear's own system evolution.**
  - March 2024 redesign: theme generation moved from HSL to LCH so equal-lightness colors look equally light. Themes went from 98 hand-set variables to three inputs (base color, accent color, contrast), and the contrast input generates high-contrast accessible themes [4]. Headings use Inter Display, other text regular Inter [4]. The team limited the blue "chrome" for a more neutral, timeless look [4]. The changelog says the default dark and light themes gained contrast [5].
  - March 2026 refresh: the default themes moved from a cool, blue-leaning gray toward a warmer, less saturated gray. The sidebar is dimmed so content leads, borders are softer, and icons are fewer and smaller [6]. Stated principles: "Don't compete for attention you haven't earned" and "Structure should be felt not seen" [6].
- **Evolution of the web look (2024–2025).** LogRocket's 2025 update reports that Linear's marketing site cut color further, toward monochrome black and white. It also reports that Raycast dropped its 2024 gradient for bold red and noisy abstract visuals [7]. The style is moving from "glow and gradient" toward "monochrome precision". Gradients are now optional.
- **Adjacent systems.** Vercel's Geist design system defines 10 color scales of 10 steps each, with documented roles per step (100 = default background ... 1000 = primary text). It uses P3 color on supported displays [8]. Vercel's Geist typeface was made with Basement Studio after a late-2022 brief, cites Swiss design, Univers, SF Pro and Inter among its influences, and ships Sans and Mono [9]. Raycast, a macOS/Windows launcher, uses glass-effect backdrops, keyboard graphics and product mockups on its homepage [10].

## Visual DNA

- Near-black background tinted slightly toward a hue (not pure `#000`), or a neutral warm gray. LogRocket suggests 1–10% lightness with a brand tint [7].
- Layered surfaces distinguished by small lightness steps, not shadows.
- 1 px low-contrast borders and dividers. Optional faint background grid or dot lines that fade at the edges.
- One accent color, often desaturated indigo, violet or blue, used sparingly. Many neutrals.
- Soft radial or conic gradient "light" behind the product screenshot. Glow on key edges (top border highlights, focus rings).
- Tight, neutral sans (Inter, Geist and similar) with slightly negative tracking on headlines. Monospace for code, IDs and shortcuts.
- Product UI screenshots as the hero image. Keyboard shortcuts and command palette (⌘K) as visual motifs.
- Dense, precise app UI: small type (12–14 px), compact rows, keyboard-first interactions.
- Micro-motion: fast hover transitions, subtle reveal-on-scroll, animated beams or borders.

## Token recipe

| Token group | Starting values |
|---|---|
| **Typography: families** | Sans: Inter / Inter Display (headings) [4], Geist Sans [9], or another neutral grotesque. Mono: Geist Mono, JetBrains Mono, SF Mono. |
| **Typography: scale** | App UI: 12 / 13 / 14 / 16 / 20 / 24 px (ratio ≈ 1.125–1.2). Marketing: 16 / 20 / 24 / 32 / 48 / 64–80 px (ratio ≈ 1.25–1.333). |
| **Typography: weights** | 400 body, 500 UI labels and buttons, 500–600 headings. Avoid 700+; large headings at 500–600 with tight tracking look more "engineered". |
| **Typography: letter-spacing** | Display 48 px+: −0.02em to −0.03em. Headings 20–32 px: −0.01em. Body: 0. Small caps labels: +0.04em. Line-height: body 1.5; UI rows 1.3–1.4; display 1.05–1.1. |
| **Color: structure** | Neutral ramp of 10–12 steps (bg → surface → elevated → border → muted text → text) + 1 accent ramp + semantic (success/warning/danger). Generate in OKLCH/LCH so steps are perceptually even [4]. |
| **Color: dark example** | bg `#08090A`; surface `#101113`; elevated `#17181B`; border-subtle `#2A2C31` (1.43:1, decorative dividers only); border-control `#62666D` (3.45:1 on bg, meets 3:1 for input boundaries [12]); text-primary `#F7F8F8` (18.7:1); text-secondary `#8A8F98` (6.1:1 on bg, 5.5:1 on elevated); text-tertiary `#6B7079` (4.0:1, large text/placeholder only); accent `#7C85E8` for text/icons on bg (6.05:1); accent fill `#4F5BC4` with white label (5.79:1). |
| **Color: OKLCH starting points** | bg ≈ `oklch(0.15 0.004 260)`; surface ≈ `oklch(0.19 0.005 260)`; text ≈ `oklch(0.98 0.002 260)`; accent ≈ `oklch(0.62 0.15 275)`. Warm-gray variant per Linear 2026: shift hue to ~60–80 and chroma to ≤ 0.004 [6]. |
| **Color: light theme** | Ship one. Most users read better in light mode [11]. Invert the ramp; keep the same accent hue with lightness adjusted for 4.5:1. |
| **Radius** | 6 px controls, 8 px cards/menus, 12 px dialogs and marketing cards, 999 px pills for tags. |
| **Borders** | 1 px. Decorative dividers ~6–10% white alpha (`rgba(255,255,255,0.08)`). Control boundaries ≥ 3:1 [12]. Optional "inner highlight": `inset 0 1px 0 rgba(255,255,255,0.06)` on top edge. |
| **Shadows / elevation** | Elevation by lighter surface, not shadow. Menus/dialogs: `0 8px 24px rgba(0,0,0,0.5)` plus 1 px border. Glow: `0 0 0 1px rgba(124,133,232,0.4), 0 0 24px rgba(124,133,232,0.25)` on focus or hero accents only. |
| **Spacing / grid** | 4 px base. App: 8 / 12 / 16 / 24 px; row height 32–36 px. Marketing: 12-column, max width 1200–1280 px, section padding 96–160 px. Optional background grid of 1 px lines every 64–80 px at 4–6% alpha, masked with a radial fade. |
| **Imagery & iconography** | Real product screenshots (crisp, 2x), framed with a 1 px border and a gradient glow behind. Icons: 16 px, 1.5 px stroke, rounded joins, neutral gray. Code snippets and keyboard keycaps as illustration. No stock photos of people. |
| **Motion** | Hover 100–150 ms `ease-out`; menus/popovers 150–200 ms `cubic-bezier(0.16, 1, 0.3, 1)`; marketing reveals 400–700 ms with 8–16 px upward translate; looping beams/gradients 4–12 s. All non-essential motion off under `prefers-reduced-motion` [13]. Auto-playing loops > 5 s next to content need a pause control [14]. |
| **Texture / effects** | Radial gradient spotlight (`radial-gradient(600px circle at 50% 0%, rgba(124,133,232,0.18), transparent 70%)`), optional 2–4% noise overlay to prevent banding, `backdrop-filter: blur(12–20px)` on sticky nav over a 70–80% opaque surface. |

## Signature examples

| Example | Year | Notes |
|---|---|---|
| Linear (app and marketing site) | 2019–present; UI redesign Mar 2024; refresh Mar 2026 | Origin of the trend; LCH theme generation; Inter Display headings; later warmer, calmer neutrals [1][3][4][6]. |
| Stripe marketing site | c. 2020 | The previous trendsetter: gradients, diagonal colored shapes, duotone icons [3]. |
| Vercel / Geist design system | Geist typeface 2023; system ongoing | Documented 10-step scales with role per step; P3 color; Swiss-influenced type [8][9]. |
| Raycast | 2024 gradient era; 2025 shift to bold red and noisy abstract visuals | Glass-effect backdrops, keyboard graphics [7][10]. |

## Fits / Avoid

**Fits:** developer tools, infrastructure, AI/ML products, productivity and project tools, fintech for professionals, security, analytics. It fits audiences who spend hours in the tool and value speed and density.

**Avoid:** consumer health, children, older-adult audiences, long-form reading products without a light mode, brands needing warmth or approachability (food, hospitality, community). Also avoid it when differentiation is the main brand goal: oversaturation makes these sites hard to tell apart [7].

**Effects on people:**
- Light mode (dark text on light background) gives better reading and proofreading performance for people with normal vision, and the advantage grows as text gets smaller. Users often do not notice the difference [11]. **[E1]** Implication: a dark default with 12–13 px UI text carries a real legibility cost. Offer a light theme and size small text carefully.
- Dobres et al. (2017) found no polarity effect under simulated daytime light. At night, light mode performed better, and small text was much harder to read in dark mode [11]. **[E1]** Dark mode is not automatically the "night-friendly" choice for reading.
- Some low-vision users (cloudy ocular media such as cataracts) read better with light-on-dark [11]. **[E1]**, but based on old CRT-era studies. Offer a dark mode as an option, not the only mode.
- "Dark looks professional/technical to engineers" is an aesthetic convention, not a measured effect. LogRocket notes dark mode is chosen mainly for aesthetics and is not proven better [7]. **[E3]**

**Accessibility risks (medium):**
- Tertiary gray text and placeholder text routinely fall under 4.5:1 [12].
- Low-alpha borders on inputs and checkboxes fail the 3:1 non-text contrast requirement when the border is the only boundary [12].
- Glow and animated gradient loops can trigger vestibular discomfort. Gate them behind `prefers-reduced-motion` [13].
- Dense 12 px UI type compounds the dark-mode legibility penalty [11].

**Ages badly when:** it relies on the trend markers (purple glow, blurred blobs, beams, glass nav) instead of product substance. Linear itself has moved toward fewer colors and calmer neutrals [6][7].

## Across media

| Medium | Translation |
|---|---|
| **App UI** | The native home. Dense lists, command palette, keyboard shortcuts in menus, sidebar dimmed relative to content [6]. Ship light and dark themes from one generated token set [4]. |
| **Website** | Dark hero with product screenshot over a radial glow; headline 56–80 px, −0.02em; feature grid of bordered cards; background line grid fading at edges; changelog as social proof. |
| **Social post** | Dark card with a single product crop or a code snippet and one accent glow. Keep text ≥ 32 px at 1080 px width. A short screen recording of the product beats a static mock. |
| **Print / editorial** | Rarely native. Large dark solids on uncoated stock look muddy; reverse to a light layout with the accent color and mono details, or use coated stock with rich black (e.g. C60 M40 Y40 K100). |
| **Billboard / OOH** | One line of type plus a product glimpse on near-black. Glow and fine borders vanish at distance; rely on scale and contrast. |

## Common mistakes

- Pure `#000000` backgrounds with pure `#FFFFFF` text everywhere: harsh, and it removes room for elevation steps. Use a tinted near-black and an off-white.
- Using shadows for elevation on dark surfaces (invisible). Use lighter surfaces and borders instead.
- Purple-to-blue gradient blobs on every section. The look reads as a template.
- Tertiary text and disabled-looking active controls under contrast minimums.
- No light theme.
- Animating everything (beams, borders, counters) with no reduced-motion fallback.
- Screenshots of a product that does not actually look like the marketing site.

## Pairs well with / Related styles

- **Pairs with:** data-dense-functional.md (dashboards inside the app), gradient-aurora-mesh.md (hero backgrounds, in moderation), immersive-3d-webgl.md (launch pages), kinetic-typography.md (launch videos).
- **Related:** glassmorphism (blurred nav and panels), minimalism, Swiss/International style (grid and neutral grotesques), cyberpunk-futuristic.md (the high-saturation, neon cousin).

## Sources

[1] Linear. (n.d.). *About*. https://linear.app/about
[2] Sequoia Capital. (n.d.). *Karri Saarinen, founder profile*. https://sequoiacap.com/founder/karri-saarinen
[3] Ginn, D. (2023, January 10). *The Linear effect*. Rectangle (Substack). https://rectangle.substack.com/p/the-linear-effect
[4] Saarinen, K., Gillet, Y.-E., Eldh, A., & Cascino, R. (2024, March 28). *How we redesigned the Linear UI (part II)*. Linear. https://linear.app/blog/how-we-redesigned-the-linear-ui
[5] Linear. (2024, March). *New Linear UI* (changelog). https://linear.app/changelog/2024-03-20-new-linear-ui
[6] Aufmann, C., & Heckel, M. (2026, March 12). *Behind the latest design refresh*. Linear. https://linear.app/blog/behind-the-latest-design-refresh
[7] Schwarz, D. (2025, June 7). *Linear design: The SaaS design trend that's boring and bettering UI*. LogRocket Blog. https://blog.logrocket.com/ux-design/linear-design
[8] Vercel. (n.d.). *Geist: Colors*. https://vercel.com/geist/colors
[9] Zaragoza, M., & Briganti, A. (2024, November 14). *The birth of Geist: A typeface crafted for the web*. basement.studio. https://basement.studio/post/the-birth-of-geist-a-typeface-crafted-for-the-web
[10] Raycast. (n.d.). *Raycast* (homepage). https://www.raycast.com/
[11] Budiu, R. (2020, February 2). *Dark Mode vs. Light Mode: Which Is Better?* Nielsen Norman Group. https://www.nngroup.com/articles/dark-mode/ (summarizes Piepenbrock et al. 2013; Dobres et al. 2017; Legge et al. 1985)
[12] W3C. (2023). *Understanding SC 1.4.3 Contrast (Minimum)* and *SC 1.4.11 Non-text Contrast*. WCAG 2.2. https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html ; https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html
[13] W3C. (2023). *Understanding SC 2.3.3 Animation from Interactions*. WCAG 2.2. https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html
[14] W3C. (2023). *Understanding SC 2.2.2 Pause, Stop, Hide*. WCAG 2.2. https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html
