# Claymorphism and Soft 3D ("Clay") Illustration

> **Scope:** The puffy, inflated, pastel UI style called claymorphism and the soft 3D "clay" illustration language that travels with it: history, traits, token recipe, and when to use it.
> **Last verified:** 2026-10
> **Used by:** creative-director, ui-designer, art-director, design-system-architect

## Origin & context

- **Name and coiner.** The term "claymorphism" is credited to Polish designer Michał Malewicz (studio Hype4), who was also central to the earlier neumorphism trend [1]. His article "Claymorphism in User Interfaces" on UX Collective was already being cited by the German tech press in February 2022 [3]. The original article could not be opened during this research pass (HTTP 403), so its exact publication date is [unverified].
- **Lineage: neumorphism, 2019-2020.** Neumorphism ("new skeuomorphism") had soft, extruded shapes that shared the background color and were separated from it only by paired light and dark shadows. That produced well-known contrast and affordance problems [1][2]. Claymorphism keeps the soft depth but drops the same-color-as-background rule. Each element gets its own saturated fill, an outer drop shadow that lifts it off the page, and two inner shadows that make it look inflated [1].
- **Cultural reference.** Commentators link the look to stop-motion clay animation (Wallace & Gromit, Pingu, Shaun the Sheep), stuffed toys, balloons, and Play-Doh [2][3].
- **Why it emerged, 2021-2022.** Browser-friendly 3D tools such as Spline, and 3D asset packs such as Icons8 "Handy" 3D hands, put soft 3D within reach of UI designers [3]. Big platforms also normalized friendly 3D: Microsoft's Fluent Emoji shipped a 3D style in Windows 11 and Teams, and Microsoft open-sourced 1,538 of them under the MIT license on Aug 10, 2022 [4][5].
- **Status (2026-10).** Claymorphism is now mostly an illustration, icon, and marketing language. Full clay UIs are uncommon in production. The 2022 Smashing Magazine headline already asked "Will it stick around?" [1].

## Visual DNA

- Large, generous corner radii (24-48 px on cards). Pills and circles everywhere.
- Each surface has its own fill, usually a light pastel or candy color, set on a pale, tinted page background.
- A three-layer shadow stack: one soft outer drop shadow plus two inset shadows (dark at the bottom-right, light at the top-left). Together they make the surface look inflated [1].
- Soft 3D illustrations (characters, hands, objects, emoji) with matte, slightly glossy, subsurface "plasticine" shading and rounded, simplified forms [2][3].
- Interfaces that float. Elements hover above the background and press down when tapped.
- Simple, rounded, or geometric sans type that stays restrained so the shapes can carry the personality [1][3].
- A few strong accent colors used for actions.

## Token recipe

| Token group | Starting values |
|---|---|
| **Typography** | Families: rounded or geometric sans such as Nunito, Quicksand (display only), DM Sans, Plus Jakarta Sans, or Manrope. Scale ratio 1.25 (major third). Body 16 px/1.5. H1 40-48 px. Weights: 400 body, 600 labels, 700-800 display. Letter-spacing: -0.01em on display, 0 on body. Keep type minimal, as Malewicz advises [1]. |
| **Color** | Page `#F3EEFF` `oklch(95.8% 0.023 299)`. Clay fills: pink `#FFB8D9` `oklch(85.8% 0.092 350)`, sky `#A6E3FF` `oklch(88.4% 0.073 228)`, butter `#FFD66B` `oklch(89.1% 0.133 89)`, mint `#B9F2C8` `oklch(91.1% 0.081 153)`. Action `#5B3FE0` `oklch(50.5% 0.229 282)` (white text 6.50:1). Ink `#2B2140` (13.26:1 on page, 9.40:1 on pink). Secondary ink `#5E5470` (6.21:1 on page). Avoid `#7B5CFF` as a button fill with white text: it measures only 4.36:1, which fails AA for body text. |
| **Radius** | sm 16 px, md 24 px, lg 32 px (cards; the clay.css default) [1], xl 48 px (hero tiles), full 9999 px (buttons, chips, avatars). |
| **Borders** | None by default; depth separates the surfaces. Add a 1.5-2 px border at ≥ 3:1 for inputs and for any control that has no text or icon to identify it (WCAG 1.4.11) [6]. |
| **Shadows/elevation** | Base clay (from [1]): `8px 8px 16px 0 rgba(0,0,0,.25), inset -8px -8px 12px 0 rgba(0,0,0,.25), inset 8px 8px 12px 0 rgba(255,255,255,.4)`. Softer production variant: `0 12px 24px -6px rgba(43,33,64,.18), inset -6px -6px 12px rgba(43,33,64,.12), inset 6px 6px 12px rgba(255,255,255,.7)`. Pressed: shrink the outer shadow to `0 4px 8px -2px`, deepen the dark inset, and scale to 0.97. |
| **Spacing/grid** | 8 px base with a 4 px half-step. Card padding 24-32 px. Gap between floating cards ≥ 24 px so the shadows don't collide. Mobile: 4-column grid with 16 px gutters. Desktop: 12-column grid with 24 px gutters. |
| **Imagery & iconography** | Soft 3D renders (Blender, Spline, Cinema 4D), or 3D emoji such as Microsoft Fluent Emoji 3D (MIT) [4][5]. One light source from the top-left to match the inset highlight. Matte material, roughness about 0.5-0.7. Icons: rounded line icons at 2 px stroke, or filled duotone. |
| **Motion** | Hover: lift by translateY(-2 px) over 160 ms with `cubic-bezier(.34,1.56,.64,1)` (slight overshoot). Press: scale 0.97 over 100 ms ease-out. Enter: 240-320 ms spring. Gate bounce and float loops behind `prefers-reduced-motion` [1][7]. |
| **Texture/effects** | Optional 2-4% noise on illustrations. No glassmorphism blur under clay surfaces, because the two depth metaphors compete. |

**Apply:** Put the shadow stack in a single `--clay-shadow` custom property, as clay.css does [1], and derive the pressed and hover states from it. Never hand-tune shadows per component.

## Signature examples

| Example | Year | What to notice |
|---|---|---|
| Michał Malewicz, "Claymorphism in User Interfaces" (UX Collective) | ≤ 2022 (exact date [unverified]) | The naming article. It frames clay as a successor to neumorphism [1][3]. |
| clay.css by Adrian Bece | 2022 | A CSS utility that turns the recipe into custom properties [1]. |
| Meta Horizon Worlds app and site illustrations | cited 2022 | Soft, colorful 3D used across app and web [1]. |
| Matter app, Aimchess | cited 2022 | Soft 3D illustration and charts set alongside otherwise flat UI [1]. |
| Toy Faces avatars by Amrit Pal Singh | cited 2024 | The canonical clay-character avatar set [2]. |
| Microsoft Fluent Emoji (3D style), open-sourced | 2022 | 1,538 emoji in 3D, flat, and monochrome styles under the MIT license [4][5]. |
| Meng To, "Claymorphism UI" Figma Community file | cited 2022 | A reference UI kit [1][2]. |

## Fits / Avoid

**Fits:** consumer apps aimed at casual or young-adult audiences, onboarding, empty states, gamified learning, kids' and family products, fintech marketing for beginners, creator tools, NFT/Web3-era landing pages, and mascots or avatars.

**Avoid:** enterprise dashboards, dense data, legal and medical content, luxury, and anything that has to signal gravity or precision. Malewicz warns that the rounded 3D forms "can look childish" [1] [E3: practitioner opinion; no controlled study].

**Accessibility risks (medium):**
- Pastel fills invite low-contrast text and pale icons. Check every label against its own fill, not the page (WCAG 1.4.3: 4.5:1 for body text, 3:1 for large text) [8] [E2].
- Depth made only of shadows can fail to identify a control. Text, an icon, or a 3:1 boundary has to do that job (WCAG 1.4.11) [6] [E2].
- Bouncy press and float animations need a reduced-motion fallback [7] [E2].
- Some commentary claims simulated depth is "easier for the brain to process" [3]. **[E3]** This is asserted without evidence. Do not use it as a rationale.

**Ages badly when:** every surface is inflated and the 3D illustration is generic stock. The look reads as "2022 Dribbble" quickly. It lasts longer when clay is kept to illustration and a few hero controls.

## Across media

| Medium | How to translate |
|---|---|
| **App UI** | Clay for primary cards, a few hero buttons, and empty-state art. Use flat, high-contrast lists, forms, and tables. Keep the shadow stack to 1-2 elevation levels. |
| **Website** | A hero with one large 3D render plus clay feature tiles. Elsewhere, ordinary sections with a pale tinted background. Lazy-load the renders and serve AVIF/WebP. |
| **Social post** | A 3D character or object on a flat pastel background, with one bold headline in a rounded sans. Loop motion at 2-4 s. |
| **Print/editorial** | 3D renders reproduce well. CSS-style inset shadows do not, so use the renders, not UI chrome. Watch CMYK gamut on saturated pastels. |
| **Billboard** | One large clay object, three to five words, and high-contrast ink. Pastel-on-pastel disappears at distance. |

## Common mistakes

- Using the same shadow at every size. A 32 px inset on a 40 px chip looks like a dent. Scale the shadow offsets to about 1/4 of the radius.
- Mixing light directions: the illustration lit from the right while the UI highlight sits top-left.
- White text on mid-saturation violets and pinks (`#FFFFFF` on `#FF61AB` = 2.78:1).
- Inflating inputs and tables, which hurts scanning and makes their boundaries ambiguous.
- Stacking glass blur, gradients, and clay on one surface.
- Heavy WebGL or Spline embeds on mobile just for decoration.

## Pairs well with / Related styles

- **Playful-friendly** (`playful-friendly.md`): shares the rounded type and bold color. Clay adds dimensional illustration.
- **Gradient / aurora / mesh** (`gradient-aurora-mesh.md`): a soft gradient backdrop behind clay objects. Keep the gradient on the background only.
- **Corporate flat illustration** (`corporate-flat-illustration.md`): the 2D predecessor. Clay is often its 3D successor in the same brand.
- **Related:** neumorphism (its ancestor; avoid for core UI), glassmorphism (a competing depth metaphor), and immersive 3D/WebGL (`immersive-3d-webgl.md`) for real-time versions.

## Sources

[1] Bece, A. (2022, March 16). *Claymorphism: Will It Stick Around?* Smashing Magazine. https://smashingmagazine.com/2022/03/claymorphism-css-ui-design-trend/
[2] Fabunan, A. (2024, May 22). *What is claymorphism web design?* LogRocket Blog. https://blog.logrocket.com/ux-design/what-is-claymorphism-web-design/
[3] Stoll, K. (2022, February 3). *Designtrend 2022: Was ist eigentlich Claymorphism?* t3n. https://t3n.de/news/?p=1448451 (German; secondary source citing Malewicz's UX Collective article.)
[4] Carrasqueira, J. (2022, August 10). *Microsoft open sources its Windows 11 emoji for everyone to use.* XDA Developers. https://www.xda-developers.com/microsoft-open-source-fluent-emoji/
[5] Microsoft. (n.d.). *fluentui-emoji* (repository, MIT license). GitHub. https://github.com/microsoft/fluentui-emoji
[6] W3C. (2023). *Understanding Success Criterion 1.4.11: Non-text Contrast* (WCAG 2.2). https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html
[7] MDN contributors. (n.d.). *prefers-reduced-motion.* MDN Web Docs. https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion
[8] W3C. (2023). *Understanding Success Criterion 1.4.3: Contrast (Minimum)* (WCAG 2.2). https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html
