---
name: visual-styles
description: Use whenever a task involves choosing, naming, matching, or justifying a visual direction or aesthetic ("make it look like…", modern, premium, playful, techy), building a theme or moodboard, or checking a style against an audience. Contains 31 contemporary styles, each with origin, visual DNA, a concrete token recipe (type, color hex/OKLCH, radius, shadows, spacing, motion), dated examples, fit and avoid by audience, accessibility risk, and how it translates to app, web, social, print, and billboards. Styles: minimalism, Apple style and Liquid Glass, Swiss, flat, Material 3, skeuomorphism, neumorphism, glassmorphism, web brutalism, neo-brutalism, bento grid, editorial, maximalism, Y2K, retro-futurism, vaporwave, claymorphism, gradient/aurora, Scandinavian, luxury, dark tech SaaS, anti-design, kinetic type, corporate flat, Memphis, cyberpunk, organic, risograph, immersive 3D, playful, data-dense.
user-invocable: false
---

# Visual Styles

A style is a set of decisions about type, color, shape, depth, space, imagery, and motion that an audience
recognizes as a whole. This skill helps you pick one on purpose, then build it precisely.

Historical movements (Bauhaus, Swiss school, Memphis Group, Constructivism…) and the designers behind them
are covered in depth in `design-history`; this skill covers the styles as they are practiced today.

## How to choose a style

1. **Start from the brief, not the trend.** Write down: audience (age, expertise, culture), context of use
   (task-heavy product vs. brand moment), medium (app, web, social, print, OOH), and legal accessibility duties.
2. **Shortlist 2–3 styles** from the catalog whose "Best for" matches. Open each file and read **Fits / Avoid**.
3. **Separate base from expression.** Task-heavy UI starts from a functional base (Material, Apple platform
   conventions, Swiss, flat 2.0, data-dense). Expressive styles (neo-brutalism, maximalism, glass, Y2K, Memphis,
   kinetic type) go on brand surfaces: hero, campaign, social, packaging, launch pages.
4. **Combine at most one base + one expressive layer.** Check the "Pairs well with" section of both files.
5. **Build from the token recipe**, then adapt to the brand. Recipes are *starting values*, not official brand
   colors (except where a file says the values were observed from a live product).
6. **Translate per medium** using the file's "Across media" section. A style that works on a website may fail
   at billboard distance or in a 1.7-second feed glance.
7. **Run the accessibility check.** High-risk styles need the accessible variant described in their file.
   Prefer platform materials (Liquid Glass, Fluent Acrylic, Material tonal surfaces) over hand-rolled effects:
   they respond to the user's accessibility settings.
8. **Justify with evidence grades.** Claims like "dark UI looks professional" or "white space signals prestige"
   are [E3]. Style choice is mostly about fit and recognition, not proven conversion effects.

## Catalog

Accessibility risk = risk when the style is applied as commonly practiced, before mitigation.
Where a file rates between two levels, the higher one is shown.

### Functional and platform bases

| Style | DNA | Best for | A11y risk | File |
|---|---|---|---|---|
| Material Design | Elevation, tonal color roles from a seed (M3 / Material You 2021), springs and bold shapes (M3 Expressive 2025) | Android, enterprise tools, teams needing a documented system | Low | `material-design.md` |
| Apple style | Product-as-hero, SF Pro, near-black/off-white with one blue, pill CTAs; Liquid Glass functional layer (2025, adjustable since iOS 26.1/27) | Premium tech, Apple-platform apps, launches | Med | `apple-style.md` |
| Swiss / International | Mathematical grid, neo-grotesque, asymmetric flush-left, objective photography, red/black/white | Cultural institutions, wayfinding, dev tools, data-rich marketing | Low | `swiss-international.md` |
| Flat design | No gloss or depth; solid fields, glyph icons (Metro 2010, iOS 7 2013); flat 2.0 restores signifiers | Content apps, cross-platform systems, icon sets | Med | `flat-design.md` |
| Skeuomorphism | Real-world materials, directional light, tactile controls; neo-skeuo revival | First-time users, audio tools, games, kids, nostalgic brands | Med | `skeuomorphism.md` |
| Data-dense / functional | Small tabular type, hairlines, color only for meaning, keyboard-first panes | Trading, observability, admin, analytics for expert daily users | High | `data-dense-functional.md` |
| Bento grid | Mixed-size rounded tiles, one idea per tile, uniform gap and radius | Feature summaries, launch pages, dashboards, recap posts | Low | `bento-grid.md` |

### Restraint and premium

| Style | DNA | Best for | A11y risk | File |
|---|---|---|---|---|
| Minimalism | Few elements, negative space, one accent, type-led hierarchy ("less, but better") | Premium hardware, luxury, portfolios, single-purpose apps | Med | `minimalism.md` |
| Scandinavian / Nordic | Warm off-white, muted nature accents, modest grotesque, honest flat surfaces | Furniture, wellness, sustainable DTC, public services | Med | `scandinavian-nordic.md` |
| Luxury / premium | Didone serif or stark caps sans, monochrome, vast white space, editorial photography, slow fades | Fashion, beauty, jewelry, fragrance, boutique hospitality | Med | `luxury-premium.md` |
| Editorial / magazine web | Large serif display, kicker/dek/byline, asymmetric grid, full-bleed art, per-story art direction | Publishers, long-form, brand magazines, annual reports | Med | `editorial-magazine-web.md` |
| Organic / biophilic | Paper neutrals, earth palette, blob and leaf forms, natural textures, soft serifs | Wellness, food, hospitality, interiors, sustainability (substantiated) | Med | `organic-biophilic.md` |

### Surfaces and effects

| Style | DNA | Best for | A11y risk | File |
|---|---|---|---|---|
| Glassmorphism | Frosted translucent panels with background blur over vivid backdrops | Overlays, menus, media controls, hero visuals | High | `glassmorphism.md` |
| Neumorphism | Same-color extruded/pressed surfaces from paired light/dark shadows | Concepts, few-control device UIs (accessible variant only) | High | `neumorphism.md` |
| Claymorphism / soft 3D | Inflated pastel surfaces, large radii, matte clay 3D illustration | Casual consumer apps, onboarding, kids, gamified learning | Med | `claymorphism.md` |
| Gradient / aurora / mesh | 3–5 blended hues, heavy blur, grain, slow drift | Fintech, dev platforms, AI/SaaS heroes, app icons | Med | `gradient-aurora-mesh.md` |

### Raw and expressive

| Style | DNA | Best for | A11y risk | File |
|---|---|---|---|---|
| Web brutalism | Raw HTML: default fonts, blue links, mono, visible structure | Artists, indie publications, personal and dev sites | Med | `brutalism-web.md` |
| Neo-brutalism | Thick black borders, hard offset shadows, flat brights, bold type, usable structure | Creator tools, indie SaaS, campaigns, social-first brands | Low | `neo-brutalism.md` |
| Anti-design / "ugly" | Deliberate rule-breaking: distorted type, clashing color, broken grids | Music, streetwear, festivals, zines, studio sites | High | `anti-design-ugly.md` |
| Maximalism | Layered collage, clashing saturated color, pattern on pattern, over a hidden grid | Fashion, music, entertainment, youth campaigns | High | `maximalism.md` |
| Memphis | Clashing primaries/pastels, squiggles and grids, toy-like shapes, asymmetry | Youth, events, snack and toy brands, merch | High | `memphis.md` |

### Nostalgia and retro

| Style | DNA | Best for | A11y risk | File |
|---|---|---|---|---|
| Y2K | Chrome, translucent candy plastics, gel/pill UI, lime/hot-pink/Bondi blue | Gen Z fashion, beauty, music, streetwear drops | Med | `y2k.md` |
| Retro-futurism | Atomic/Googie starbursts, extended caps, cream-orange-teal; or cassette-futurist CRT panels | Entertainment, games, hospitality, audio hardware | Med | `retro-futurism.md` |
| Vaporwave | Pastel neon on purple, Greco-Roman busts, Win95 windows, grid floors, VHS glitch | Music releases, merch, ironic internet-native campaigns | High | `vaporwave.md` |
| Retro print / risograph | 2–3 translucent spot inks on cream, overprint, misregistration, halftone, grain | Indie publishing, gig posters, craft food and drink, merch | Med | `retro-print-risograph.md` |
| Corporate flat illustration | Flat geometric people, bendy limbs, non-literal skin tones, periwinkle/coral/mint | Onboarding, empty states on a budget (now reads as generic) | Med | `corporate-flat-illustration.md` |

### Tech and immersive

| Style | DNA | Best for | A11y risk | File |
|---|---|---|---|---|
| Dark tech SaaS ("Linear style") | Tinted near-black layers, one restrained accent, hairline grids, glow behind screenshots | Dev tools, infrastructure, AI, productivity | Med | `dark-tech-saas.md` |
| Cyberpunk / futuristic | Near-black base, 1–2 neon accents, chamfered HUD frames, glitch, density | Games, esports, gaming hardware, nightlife, sci-fi | High | `cyberpunk-futuristic.md` |
| Immersive 3D / WebGL | Real-time 3D scene as interface, PBR materials, scroll/pointer camera | Studio portfolios, launches, event microsites | High | `immersive-3d-webgl.md` |

### Character and motion

| Style | DNA | Best for | A11y risk | File |
|---|---|---|---|---|
| Playful / friendly | Rounded shapes, bright fills, chunky rounded type, mascots, bouncy celebration motion | Habit apps (education, wellness, beginner finance), family, onboarding | Med | `playful-friendly.md` |
| Kinetic typography | Type as hero: words move, scale, mask in sync with speech, beat, or scroll | Brand launches, music, social video, title sequences | High | `kinetic-typography.md` |

All files are in `references/styles/`.

## Every style file contains

`Origin & context` → `Visual DNA` → **`Token recipe`** (typography families/scale/weights/tracking, color
structure with hex + OKLCH and computed contrast, radius, borders, shadows, spacing/grid, imagery and
iconography, motion durations and easing, texture) → `Signature examples` (dated) → `Fits / Avoid` (with
evidence grades) → `Across media` (app, web, social, print, billboard) → `Common mistakes` →
`Pairs well with` → `Sources`.

## Quick rules

- **Broad, older, or regulated audiences:** avoid high-risk styles or use their accessible variants.
- **Translucency and soft shadows** (glass, neumorphism, clay) fail non-text contrast (3:1) easily. Add borders
  or opaque fallbacks and honor `prefers-reduced-transparency`.
- **Motion-led styles** (kinetic type, immersive 3D, playful) must honor `prefers-reduced-motion` and the
  WCAG three-flashes rule.
- **Trend styles age fast.** Y2K, vaporwave, corporate flat, glassmorphism, and neumorphism date a product
  within a few years. Use them for campaigns. For long-lived products, use a durable base.
- **One signature, many neutrals.** Most successful applications use one strong stylistic signature on top
  of restrained, conventional structure.
