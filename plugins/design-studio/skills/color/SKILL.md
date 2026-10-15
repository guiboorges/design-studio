---
name: color
description: Use whenever a task involves choosing, building, converting, specifying, or checking colors, palettes, themes, dark mode, or contrast for screen or print, even for a quick contrast check: it holds the exact WCAG formula, verified 2026 browser support, and print profiles. Contains: perceptual color (OKLCH, why HSL lies), Itten and Albers as palette exercises, harmonies as heuristics, color spaces (sRGB, P3, OKLCH, HCT, CMYK, Pantone) with gamut fallbacks, print color management (ICC profiles, ink limits, rich black, proofing), brand color specs across media, tonal scales and semantic tokens (DTCG JSON, worked example with computed contrast), Material, Radix, Tailwind, Carbon, and Spectrum scales, data-viz palettes, APCA status, color-vision deficiency, and forced colors.
user-invocable: false
---

# Color

Color is relative (it changes with its neighbors), perceptual (equal numbers don't look equal), and physical
(screens emit light, paper reflects it). This skill gives you procedures and exact values for all three.

The emotional meaning of colors is in `cognitive-psychology` → `color-psychology.md`, and most of it is [E3].
Per-style palettes are in `visual-styles`. Accessibility law and testing are in `accessibility`.

## Non-negotiable rules

1. **Work in OKLCH, store hex + OKLCH.** HSL "lightness" lies. Yellow and blue at HSL 50% have perceived lightness
   of about 97% and 45%. Build scales by fixing hue and stepping L. Taper chroma toward both ends.
2. **Three tiers of tokens.** Primitives (raw steps) → semantic roles (surface, on-surface, primary, outline,
   success…) → component tokens. Components point to roles, never to raw steps. Use the same role names in every
   mode and different values per mode.
3. **Check every text/background pair, in every state and both modes.** WCAG 2 is the conformance bar: 4.5:1 text,
   3:1 large text (≥24px, or ≥18.66px bold), 3:1 for UI boundaries, focus indicators, and meaningful graphics.
   Moving a role onto another surface changes its contrast, and so does using the same step in another hue.
4. **APCA is a secondary check only.** It is *not* in WCAG 3. The September 2026 draft says the contrast
   algorithm "is yet to be determined." Pass WCAG 2 first. Use APCA for dark mode and thin or small type.
5. **Never use color as the only signal** (WCAG 1.4.1). Add text, icons, patterns, or underlines. About 1 in 12
   men with Northern European ancestry has a color-vision deficiency.
6. **Dark mode is a remap, not an inversion.** Use a dark gray canvas, lighter and less saturated accents, and
   elevation shown by lighter surfaces. Off-white text works better than pure white. On-colors flip to dark. Follow
   the system setting.
7. **Every conversion is approximate.** CMYK depends on the paper profile, and Pantone C and U can be different
   numbers. Specify a brand color per condition, and approve it on a proof.
8. **Color claims about feelings are [E3].** Choose by contrast, legibility, distinctiveness, and cultural fit.
   The "60-30-10 rule" has no author or study behind it. Treat it as a heuristic from interior design.

## Procedures

**Build a product palette from one brand color** (`palettes-and-tonal-scales.md` §1–8):
brand hue(s) → neutrals (pure gray, or tinted with the brand hue at chroma 0.004–0.016) → 10–12-step tonal scales on
a shared L ladder → status scales (success, warning, danger, info) on the same ladder → role mapping for light and
dark, checked pair by pair → component tokens → DTCG JSON → CSS, iOS, Android, Figma variables. A worked example
(`#2F6FDB`) shows every value, with WCAG ratios and APCA Lc computed.

**Audit an existing palette in 10 minutes** (`color-theory.md` §10): list OKLCH values → sort by L (text and
surface roles must be far apart) → sort by chroma (the highest chroma gets the smallest area) → grayscale test →
Albers exercises on real backgrounds → no more than three competing Itten contrasts.

**Ship wide-gamut color safely** (`color-spaces-and-management.md` §3–4): design in OKLCH and check gamut
(oklch.com, Color.js). Ship an sRGB value to everyone and a P3 value inside `@media (color-gamut: p3)`. Keep L and
hue identical so contrast doesn't change. Never put text-critical color only in P3.

**Specify a brand color** (`color-spaces-and-management.md` §7, §9): hex + RGB + OKLCH (+ P3) · CMYK per paper
(coated, uncoated) from the right ICC profile · Pantone C and U · RAL/NCS for environments. Follow the 8-step
conversion workflow for digital-first and print-first brands.

**Prepare color for print** (`color-spaces-and-management.md` §8): use the printer's profile and ink limit
(e.g. PSO Coated v3 / FOGRA51 300%, GRACoL 2013 320%, uncoated profiles lower). Use rich black for large areas
only, within the printer's limit, and 100K for text. Soft-proof, then contract-proof.

**Choose a chart palette** (`palettes-and-tonal-scales.md` §9): categorical, sequential, or diverging by data type.
Okabe-Ito or ColorBrewer for CVD safety. Never encode a category by color alone.

## Quick values

| Need | Value | File |
|---|---|---|
| Contrast formula | WCAG 2.2 relative luminance + (L1+0.05)/(L2+0.05); JS snippet included | `contrast-and-dark-mode.md` §1 |
| AAA | 7:1 text, 4.5:1 large text | `contrast-and-dark-mode.md` §1.3 |
| Exempt from contrast rules | Logos, disabled controls, pure decoration, incidental text in photos, essential graphics (flags, photos, heat maps) | `contrast-and-dark-mode.md` §1.4 |
| APCA targets (secondary) | \|Lc\| ≥ 75 body, ≥ 60 UI labels; compare absolute values (signs differ by tool) | `contrast-and-dark-mode.md` §3 |
| Dark canvas | Material baseline `#121212`; elevation = lighter surface | `contrast-and-dark-mode.md` §6 |
| HCT shortcut | Tone difference 40 → ≥3:1; 50 → ≥4.5:1 | `color-spaces-and-management.md` §2 |
| CSS support (2026-10) | `oklch()`, `color()`, `color-mix()` ~95% of users; relative color syntax ~93% | `color-spaces-and-management.md` §3 |
| User preferences | `prefers-color-scheme`, `color-scheme`, `prefers-contrast`, `forced-colors` + system colors | `contrast-and-dark-mode.md` §5–6 |

## Reference files — when to open

| File | Open when |
|---|---|
| `references/color-theory.md` | Explaining or critiquing a palette's relationships; Itten contrasts; Albers exercises; harmonies; temperature, advancing/receding, visual weight; Bezold; proportion; Munsell. |
| `references/color-spaces-and-management.md` | Converting between spaces; CSS Color 4/5 syntax and support; P3 and gamut fallbacks; HDR; ICC profiles, rendering intents, soft proofing, rich black, spot vs. process, Pantone; writing a brand color spec. |
| `references/palettes-and-tonal-scales.md` | Building a palette, tonal scales, semantic roles, component tokens, DTCG JSON; comparing Material/Radix/Tailwind/Carbon/Spectrum; data-viz palettes; print vs. screen palettes. |
| `references/contrast-and-dark-mode.md` | Computing or checking contrast; known WCAG 2 math flaws; APCA; color-vision deficiency and simulation; forced colors; designing and implementing dark mode. |
