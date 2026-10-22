# Design library

Reusable design work made with Design Studio. Copy any folder into another project and use it from there. Each item is
self-contained: tokens, components, docs, and a preview page.

Each item is designed and approved in Figma first, then exported to code with the plugin's knowledge base: contrast is
computed and documented, and tokens keep the exact design values.

| Category | Contents |
|---|---|
| [`design-systems/`](design-systems/) | Token-based design systems (DTCG JSON + CSS) with components and a live preview |

### Design systems

| System | Look | Source |
|---|---|---|
| [Lustro v2](design-systems/lustro-v2/) | Warm rust-to-orange gradient window, frosted navigation, white cards, ink action pills, Plus Jakarta Sans | Figma: Limpo · v2 Premium |
| [Summit](design-systems/summit/) | Dark-first smart home: blue-gray surfaces, orange data, teal scenes, lake-house photos, Manrope | Figma: Summit — Smart Home Design System |
| [Clearbook](design-systems/clearbook/) | Glass accounting dashboard: translucent panels over studio photos, one blue accent, Inter | Figma: Clearbook — Accounting Design System |
| [Ember](design-systems/ember/) | Warm, light-first business and store dashboard: ink pills, one orange, hatched profit bars, Geist | Figma: Ember — Business & Store Design System |
| [Fairway](design-systems/fairway/) | Light-first golf course and club management: glass over an aerial photo, forest ink, electric lime, Sora | Figma: Fairway — Golf Course Management Design System |

More categories (social templates, print, presentations) will be added as they're built.

## Using an item in your project

1. Copy the folder, for example `design-systems/canopy/`.
2. Import its CSS, or load its `tokens/*.json` into your token tooling (Style Dictionary, Tokens Studio, Figma variables).
3. Read its `README.md` for the rules: what each token is for, the component states, and the accessibility requirements.

## Credits and references

Items may be inspired by public design references. We borrow visual language, never names, logos, or assets, and
reference images are kept out of this repository.
