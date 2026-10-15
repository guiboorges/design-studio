# Lustro v2

A warm, premium dashboard design system: rust-to-orange gradient window, frosted glass navigation, white cards on a
peach-tinted canvas, ink pills for the primary action, and Plus Jakarta Sans throughout. It comes from the
**Lustro v2 · Premium** design in Figma (11 light and 4 dark screens). Every value here is exported from that file.

![Overview, light](preview/screenshots/overview-light.png)
![Overview, dark](preview/screenshots/overview-dark.png)

## Contents

| Path | What it is |
|---|---|
| `tokens/color.tokens.json` | The 26 "Lustro v2" color roles in `light` and `dark` (exact Figma values), plus the window, promo, and button gradients |
| `tokens/typography.tokens.json` | The 12 `v2/*` text styles (Plus Jakarta Sans) |
| `tokens/layout.tokens.json` | Radii (control 12, nav 14, KPI 18, card 20, panel 22, window 28, pill 48), spacing, and the Card, Floating, and Window shadows |
| `css/lustro.tokens.css` | **Generated** CSS variables (`--lustro-*`). Run `python3 build/build-css.py` after editing tokens. |
| `css/lustro.components.css` | Components with the `lv-` prefix: window and sidebar, nav item, storage meter, panel, header, buttons (ink, brand, outline), KPI card with bars, card, gauge, legend, treemap and tooltip, ring, action pill (ink, soft), promo card, glass chip |
| `css/lustro.css` | Entry file: tokens, components, and base styles |
| `assets/icons/` | The SVG icons exported from Figma (Lucide geometry, ISC license) |
| `preview/index.html` | The Overview screen rebuilt from the components. Open it, and toggle dark mode. |

## Use it

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap">
<link rel="stylesheet" href="lustro-v2/css/lustro.css">
```

- **Theme:** follows the OS. Force a mode with `<html data-theme="dark">` or `data-theme="light"`.
- **Charts are data-driven:** the gauge and ring are SVGs with `pathLength="100"`. Set `stroke-dasharray="<value> 100"`
  to the value you want, and always print the value as text next to them.
- **Icons:** use the exported SVGs with `<img>`, or recolor them with `.lv-icon` and `--icon: url(...)`. That mask
  technique needs the files served over http(s), because browsers block masks on `file://`.
- **Figma source:** the Limpo file, page "Design System" (foundations and components) and page "v2 · Premium" (screens).

## Accessibility note

The colors are kept exactly as designed. These pairs fall short of WCAG 2.2 AA and are worth fixing before
production:

| Pair | Contrast | Suggested fix |
|---|---|---|
| `text/secondary` on `surface/card` (light) | 4.37:1 | `#80695d` (4.6:1) |
| `text/secondary` on `surface/canvas` (light) | 4.18:1 | same |
| `text/tertiary` on `surface/card` (light) | 2.26:1 | decoration only, or `#7d6a5e` |
| White text on `brand/orange-500` | 2.65:1 | dark text `#22140d` (6.7:1), or white on `brand/rust-700` (5.6:1) |
| `status/review`, `status/safe`, `status/caution` as text (light) | 2.62, 3.20, 3.91:1 | `#965a0c`, `#2a774f`, `#bb3b3d` |
| `text/tertiary` on `surface/card` (dark) | 3.30:1 | `#9a887c` (4.6:1) |
| White text on light treemap tiles and the sidebar gradient's peach end | varies | keep labels on the darker tiles, or switch to dark text |

Every other text pair passes, as do all dark-mode pairs not listed.
