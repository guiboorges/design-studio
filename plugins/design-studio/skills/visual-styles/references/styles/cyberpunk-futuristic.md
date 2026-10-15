# Cyberpunk / Futuristic

> **Scope:** The "high tech, low life" visual language of neon-on-dark, dense signage, HUD overlays, and glitch, from 1980s science fiction to contemporary games and tech marketing, with tokens to build it.
> **Last verified:** 2026-10
> **Used by:** creative-director, ui-designer, art-director, design-system-architect

## Origin & context

- **The word.** Bruce Bethke wrote a short story titled "Cyberpunk" in early spring 1980; in his own foreword he says the title existed "from the very first draft" and that he built the word by combining roots such as *cyber* and *techno* with terms for socially misdirected youth until one "sounded right" [1]. The story was published in *Amazing Science Fiction Stories* in November 1983 [2]. Gardner Dozois, editor of *Isaac Asimov's Science Fiction Magazine*, then used the term for the emerging subgenre, including in a 1984 *Washington Post* article [2].
- **The literature.** William Gibson's debut novel *Neuromancer* (1984) consolidated the genre. The genre's shorthand is a combination of "lowlife and high tech" [2].
- **The look came from film.** Ridley Scott's *Blade Runner* (1982) set the visual template; Gibson said the film's look matched his vision for *Neuromancer* [2]. Industrial designer Syd Mead was hired as "visual futurist" to design vehicles (the Spinner) and then sketched the streets around them; production designer Lawrence G. Paull supplied photos of existing New York Street facades that Mead overlaid with pipes, ductwork and signs [3]. Scott's premise was "retrofitting": it would be cheaper to bolt new systems onto old buildings than rebuild, so buildings "wear your guts on the outside" [3]. That retrofitted, layered, worn quality is the core of the style, not neon alone.
- **Japanese lineage.** Katsuhiro Otomo's *Akira* (manga 1982, anime 1988) and *Ghost in the Shell* (1995 film, streetscapes based on Hong Kong) carried the aesthetic globally; *Ghost in the Shell*'s opening credits influenced the green "digital rain" of *The Matrix* (1999) [2][4]. The digital rain uses mirrored half-width kana plus Latin letters and numerals falling in green, echoing monochrome phosphor terminals; its typeface was designed by Simon Whiteley [4].
- **Contemporary references.** *Deus Ex: Human Revolution* (Eidos-Montréal, 2011; art director Jonathan Jacques-Belletête) built a "cyber-renaissance" palette mainly of black and gold, drawing on Vermeer and Rembrandt [5]. *Blade Runner 2049* (Denis Villeneuve, 2017) won Roger Deakins the Oscar for Best Cinematography; its look is described as hostile and brutalist [6]. *Cyberpunk 2077* (CD Projekt Red, December 10, 2020) [2] deliberately moved away from the expected red-and-blue palette toward a signature yellow; lead environment artist Michał Janiszewski said "we wanted to have something new, something fresh; that's why we picked the yellow color" [7].
- **Why it persists.** It visualizes anxieties about corporations, surveillance and technology outpacing society. In branding it now signals gaming, crypto/Web3, hacker culture, nightlife and "edgy tech". "Futuristic" as a broader umbrella also includes the clean, utopian sci-fi Scott was reacting against ("rather bleak, pristine, austere, clean") [3]; decide which future you mean before designing.

## Visual DNA

- Near-black base (blue-black or violet-black), never pure flat gray.
- One or two saturated emissive accents: cyan, magenta/hot pink, acid yellow, toxic green; or a single brand color used like a light source (2077's yellow, Deus Ex's gold).
- Glow: text and lines that appear to emit light (outer blur in the same hue).
- Layered, retrofitted density: signage on top of structure, overlapping UI panels, cables, labels, warnings.
- HUD vocabulary: corner brackets, chamfered/clipped corners (45-degree cuts) instead of rounded radii, thin rule lines, tick marks, coordinate readouts, serial numbers, barcodes.
- Typography: wide/squared grotesks (Eurostile lineage), monospace and OCR-style faces, condensed uppercase labels, CJK characters as texture (handle with cultural care).
- Glitch: RGB channel split (chromatic aberration), scanlines, block displacement, flicker.
- Atmosphere in imagery: rain, wet reflections, haze/smoke, night, vertical cities.

## Token recipe

Starting values; adjust per brand. Contrast ratios computed against `--bg` with the WCAG formula.

| Category | Token / value |
|---|---|
| **Typography: display** | Squared wide sans in the Eurostile lineage (Eurostile, 1962, Aldo Novarese for Nebiolo, long used in sci-fi such as *2001* and *Star Trek* [8]); alternates: Orbitron, Michroma, Rajdhani, Chakra Petch (all on Google Fonts). Uppercase, weight 600-800, letter-spacing +0.04em to +0.12em. |
| **Typography: body** | Neutral grotesk (Inter, IBM Plex Sans) 400-500, letter-spacing 0. Do not set body copy in a display "tech" face. |
| **Typography: data/labels** | Monospace (JetBrains Mono, IBM Plex Mono, Share Tech Mono) or OCR-A as an accent only (OCR-A: issued 1966, standardized as ANSI X3.17-1981 [9]). Labels 11-12px uppercase, +0.08em. |
| **Type scale** | 1.333 (perfect fourth) for marketing; 1.2 for dense app UI. Base 16px. |
| **Color: base** | `--bg` #0A0A12 = oklch(14.9% 0.017 284); `--surface` #12121C = oklch(18.7% 0.020 284); `--surface-2` #1C1C2A = oklch(23.3% 0.027 284). |
| **Color: text** | `--text` #E6E6F0 (15.9:1 on bg); `--text-muted` #8A8AA3 (5.9:1 on bg, passes AA body). |
| **Color: accents (pick 1-2)** | `--neon-cyan` #00F0FF = oklch(87.0% 0.148 203) (14.0:1 on bg); `--neon-magenta` #FF2A6D = oklch(65.3% 0.242 10) (5.5:1 on bg; only 3.6:1 with white text on top, so use dark text on magenta fills); `--acid-yellow` #FCEE0A = oklch(93.1% 0.197 105) (16.3:1 on bg); `--toxic-green` #39FF14 = oklch(87.1% 0.286 142); `--violet` #B967FF = oklch(67.4% 0.221 306). |
| **Color: structure** | 70-85% dark base, 10-25% mid surfaces, under 5% accent area. Reserve red/magenta for danger only if it is not already the brand accent. |
| **Radius** | 0-2px. Signature shape is a chamfered corner: `clip-path: polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)`. |
| **Borders** | 1px solid accent at 40-60% alpha (`oklch(87% 0.148 203 / 0.5)`); corner-bracket ornaments 8-16px long, 1-2px thick. |
| **Shadows / elevation** | Replace drop shadows with glow: `0 0 4px currentColor, 0 0 16px oklch(87% 0.148 203 / 0.45)`. Elevation = brighter border + stronger glow, not offset shadow. Text glow: `text-shadow: 0 0 8px currentColor` on display text only (24px+). |
| **Spacing / grid** | 4px base unit; 8/12/16/24/32/48. Visible 12-column grid or 24-48px background grid lines at 4-8% opacity. Dense app UI tolerates 8px gutters. |
| **Imagery & iconography** | Night photography, rain, reflections, signage, macro electronics; 3D renders with emissive materials. Icons: 1.5px stroke, square caps, geometric, no rounded friendly forms. Decorative barcodes, coordinates, "SYS_" labels as texture (mark `aria-hidden`). |
| **Motion** | Fast, mechanical: 80-160ms for UI state, `steps(4)` or `cubic-bezier(0.2, 0, 0, 1)`; text "decode/scramble" reveals 300-600ms; glitch bursts 100-200ms, never looping. Respect `prefers-reduced-motion: reduce` [10]. |
| **Texture / effects** | Scanlines: `repeating-linear-gradient(0deg, transparent 0 2px, rgb(0 0 0 / 0.15) 2px 3px)`; noise overlay at 3-6% opacity; chromatic aberration via offset `text-shadow: -1px 0 #FF2A6D, 1px 0 #00F0FF` on headlines only. |

## Signature examples

| Work | Year | What to take from it |
|---|---|---|
| *Blade Runner* (Ridley Scott; Syd Mead, Lawrence G. Paull) | 1982 | Retrofitted layering, signage as architecture [3] |
| *Neuromancer* (William Gibson) | 1984 | The genre's narrative vocabulary [2] |
| *Akira* (Katsuhiro Otomo; anime) | 1988 | Neon motion trails, Neo-Tokyo density [2] |
| *Ghost in the Shell* (film) | 1995 | Hong Kong streetscapes, green code credits [2][4] |
| *The Matrix* | 1999 | Green digital rain, monochrome phosphor palette [4] |
| *Deus Ex: Human Revolution* | 2011 | Black-and-gold "cyber-renaissance" palette [5] |
| *Blade Runner 2049* | 2017 | Brutalist, atmospheric, restrained neon [6] |
| *Cyberpunk 2077* | 2020 | Ownable yellow accent; dense red HUD (also a cautionary example, see below) [7][11] |

## Fits / Avoid

**Fits:** games and esports, gaming hardware and peripherals, developer tools and security products targeting enthusiasts, music/nightlife/events, sci-fi entertainment, hackathons, crypto/Web3 (with care, see below), limited-edition drops.

**Avoid / adapt:** healthcare, finance for general consumers, government, children's products, anything requiring calm trust or long reading.

**Accessibility risks (high):**
- **Flashing.** Glitch flicker and strobing neon can violate WCAG 2.3.1 (Level A): no more than three flashes in any one-second period unless below the general and red flash thresholds; saturated red flashes are tested separately because people are more sensitive to them [12] [E2].
- **Motion.** Non-essential motion can trigger vestibular symptoms (dizziness, nausea, headaches); provide a reduced-motion path [13][10] [E2].
- **Dark-mode reading.** For users with normal vision, light mode (dark text on light) yields better reading performance most of the time, and the gap grows as text gets smaller; some low-vision users (e.g., cloudy ocular media) do better with dark mode [14] [E1 for the polarity effect, per the peer-reviewed studies NN/g reviews; E2 for the recommendation]. Keep long-form text large and high-contrast, or offer a light theme.
- **Glow and aberration** blur letter edges; WCAG notes that anti-aliasing already makes thin fonts look fainter than their nominal color, so prefer sturdier weights and exceed the minimum ratio [15] [E2]. Never apply glow or RGB split to body text.
- **Monochrome-hue UI.** When decoration and information share one accent color, important information gets lost; *Cyberpunk 2077*'s red map and hacking UI were criticized for exactly this [11] [E3: single practitioner critique].

**Ages badly when:** it is pure trope (cyan + magenta + glitch + kanji) with no ownable twist; it is tied to a hype cycle (for example, a crypto or NFT launch aesthetic), so the visual dates when the cycle does (editorial judgment, not a measured trend).

**Limit:** Using CJK script purely as "exotic tech texture" can read as orientalist and is often wrong or nonsensical to native readers; use real, checked text or omit it.

## Across media

| Medium | Translation |
|---|---|
| **App UI** | Dark theme with one accent for interactive states; HUD details only in chrome (headers, empty states, loading). Body text plain grotesk at 15-16px+, no glow. Offer a light or high-contrast theme. |
| **Website** | Hero can carry full spectacle (3D, scramble text, scanlines); sections below calm down. Gate all ambient motion behind `prefers-reduced-motion`. Test glow and blend effects for performance on mobile. |
| **Social post** | Night photo or render, one neon headline, chamfered frame, 1-2 HUD labels. Glitch as a 1-2 frame transition in video, not a continuous effect. Check the first frame works without motion. |
| **Print / editorial** | Neon does not exist in CMYK: use fluorescent spot inks or metallics on black stock, or accept duller process colors. Large solid blacks need rich-black builds per printer spec. |
| **Billboard / OOH** | Night readability is a strength (light on dark at distance). Limit to headline + logo; HUD detail disappears at distance. Digital OOH: obey local brightness and animation-rate rules. |

## Common mistakes

- Neon everything: three or more accents at full saturation, so nothing reads as primary.
- Glow on small text; RGB split on paragraphs.
- Pure #000 background with pure #FFF text at large areas (harsh halation; use a tinted near-black and off-white).
- Looping glitch animation on a page people must read.
- Decorative "data" (fake coordinates, hex strings) announced by screen readers; mark `aria-hidden="true"`.
- Copying the *Blade Runner* or *2077* look wholesale instead of finding an ownable accent and texture (as 2077 did with yellow and Deus Ex with gold) [5][7].
- Forgetting the "low life" half: perfectly clean, glossy surfaces read as generic sci-fi, not cyberpunk. Add wear, layering, and imperfection.

## Pairs well with / Related styles

- **Dark tech SaaS** (`dark-tech-saas.md`): the corporate, toned-down cousin; borrow its restraint for product UI.
- **Vaporwave** (`vaporwave.md`) and **retro-futurism** (`retro-futurism.md`): share neon and grids, but are nostalgic/ironic rather than dystopian.
- **Y2K** (`y2k.md`): chrome and tech optimism vs. cyberpunk's dystopia.
- **Immersive 3D/WebGL** (`immersive-3d-webgl.md`): the usual delivery vehicle for cyberpunk heroes.
- **Kinetic typography** (`kinetic-typography.md`): decode/scramble text reveals.
- **Brutalist / anti-design** (`anti-design-ugly.md`): shares raw density; useful for the "low life" texture.

## Sources

[1] Bethke, B. (n.d.). *Etymology of Cyberpunk* (author's foreword to "Cyberpunk"). Mirror at neonvagabond.xyz (secondary host of the author's text; the original brucebethke.com page failed to load due to an expired certificate). https://neonvagabond.xyz/mirrors/modernized_cyberpunk/idb/etymology_of_cyberpunk.html
[2] Wikipedia contributors. (2026). *Cyberpunk*. Wikipedia. https://en.wikipedia.org/wiki/Cyberpunk (secondary source)
[3] Lightman, H. A., & Patterson, R. (1982/2020). *Blade Runner: Production Design and Photography*. American Cinematographer (July 1982; republished online October 8, 2020). https://theasc.com/articles/blade-runner-set-design
[4] Wikipedia contributors. (2026). *Digital rain*. Wikipedia. https://en.wikipedia.org/wiki/Digital_rain (secondary source)
[5] Wikipedia contributors. (2026). *Deus Ex: Human Revolution*. Wikipedia. https://en.wikipedia.org/wiki/Deus_Ex:_Human_Revolution (secondary source)
[6] Wikipedia contributors. (2026). *Blade Runner 2049*. Wikipedia. https://en.wikipedia.org/wiki/Blade_Runner_2049 (secondary source)
[7] Game World Observer. (2022, May 25). *CD Projekt used Coca-Cola as reference when choosing yellow color for Cyberpunk 2077* (report on Michał Janiszewski's Digital Dragons talk). https://gameworldobserver.com/?p=14887
[8] Wikipedia contributors. (2026). *Eurostile*. Wikipedia. https://en.wikipedia.org/wiki/Eurostile (secondary source)
[9] Wikipedia contributors. (2026). *OCR-A*. Wikipedia. https://en.wikipedia.org/wiki/OCR-A (secondary source)
[10] MDN Web Docs. (2026). *prefers-reduced-motion*. Mozilla. https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion
[11] Le Santo, A. (2022). *Cyberpunk 2077: UX/UI critique*. Interface In Game. https://interfaceingame.com/articles/cyberpunk-2077-ux-ui-critique
[12] W3C. (2023). *Understanding SC 2.3.1: Three Flashes or Below Threshold* (WCAG 2.2). https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html
[13] W3C. (2023). *Understanding SC 2.3.3: Animation from Interactions* (WCAG 2.2). https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html
[14] Budiu, R. (2020, February 2). *Dark Mode vs. Light Mode: Which Is Better?* Nielsen Norman Group (review of Piepenbrock et al. 2013, Dobres et al. 2017, Legge et al. 1985). https://www.nngroup.com/articles/dark-mode/
[15] W3C. (2023). *Understanding SC 1.4.3: Contrast (Minimum)* (WCAG 2.2). https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html
