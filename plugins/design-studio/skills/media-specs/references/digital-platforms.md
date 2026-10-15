# Digital Platforms: Apple, Material, Windows, Web, Email

> **Scope:** Production specs for designing app and web UI: units and scale factors, default type ramps, touch targets, safe areas, app icons, favicons and share images, PWA manifest icons, and email constraints, across Apple platforms, Android/Material 3, Windows/Fluent, the web, and email clients.
> **Last verified:** 2026-10 (every spec below was checked against the cited page in 2026-10 unless marked otherwise)
> **Used by:** ui-designer, design-system-architect, design-engineer, accessibility-specialist, typographer, creative-director, design-critic, social-media-designer

Everything in this file is volatile. Platform owners revise these pages several times a year (Apple's Layout page was revised on September 9, 2026 [4]). Before handoff, re-open the cited page if the date here is more than six months old.

Related files:
- `layout-composition` → `responsive-layout.md` (breakpoint strategy, fluid grids, container queries)
- `accessibility` → `wcag-22-in-practice.md` (how to test and document WCAG 2.5.8 / 2.5.5)
- `typography` → `scale-and-rhythm.md` (building custom type scales), `web-and-variable-fonts.md`
- `color` → `color-spaces-and-management.md` (sRGB vs Display P3 for assets)
- sibling: `social-formats.md` (social images and video)

---

## 1. Quick reference

| Need | Apple (iOS/iPadOS) | Android / Material 3 | Windows / Fluent | Web |
|------|--------------------|----------------------|------------------|-----|
| Layout unit | point (pt) | dp (layout), sp (text) | effective pixel (epx) | CSS px |
| Default body text | 17 pt (Body) [1] | 16 sp Body Large / 14 sp Body Medium [12] | 14/20 epx Body [15] | 16px browser default |
| Minimum text | 11 pt [1] | Not set as a single value | 12px Regular / 14px Semibold [15] | No WCAG minimum; see `typography` |
| Touch target | 44×44 pt default, 28×28 pt minimum [2] | 48×48 dp [9] | 40×40 epx (7.5 mm) [16] | 24×24 CSS px (AA), 44×44 (AAA) [23][24] |
| App/site icon master | 1024×1024 px layered, via Icon Composer [6] | 108×108 dp adaptive layers, 66×66 dp safe zone [11] | n/a | favicon.ico 32 + SVG + 180 apple-touch + 192/512 manifest [17] |
| Breakpoints | size classes (compact/regular) [4] | 600 / 840 / 1200 / 1600 dp [10] | n/a | content-driven; see `responsive-layout.md` |

---

## 2. Units and scale factors

**Rule:** Design in the platform's logical unit, never in device pixels. Export bitmaps at every scale factor the platform needs, or ship vectors.

### Apple: points
- A point is an abstract unit. On 2D displays one point maps to 1, 2, or 3 pixels; in visionOS a point is an angular value that scales with viewing distance [5].
- Scale factors by platform [5]:

| Platform | Bitmap scale factors to export |
|----------|-------------------------------|
| iOS | @2x and @3x |
| iPadOS, watchOS | @2x |
| macOS, tvOS | @1x and @2x |
| visionOS | @2x or higher (the system rescales with distance; Apple warns about performance above @6x) |

- Design at @1x and scale up. Put vector control points on whole values so they stay crisp at 2x and 3x [5].
- Device screen-size tables: Apple's Layout page no longer carries a device table in the version read for this file (revised 2026-09-09) [4]. Get current device dimensions from Xcode's simulator or Device Hub rather than from old blog tables. [verified 2026-10]

### Android: dp and sp
- 1 dp is about 1 px on a 160 dpi ("mdpi") screen; `px = dp × (dpi / 160)` [8].
- sp equals dp by default but scales with the user's text-size setting. "Never use sp for layout sizes" [8].
- Density buckets follow a 3:4:6:8:12:16 ratio [8]:

| Qualifier | ~dpi | Scale vs mdpi | 48 dp icon exports at |
|-----------|------|---------------|-----------------------|
| ldpi | 120 | 0.75× | 36 px |
| mdpi | 160 | 1× | 48 px |
| hdpi | 240 | 1.5× | 72 px |
| xhdpi | 320 | 2× | 96 px |
| xxhdpi | 480 | 3× | 144 px |
| xxxhdpi | 640 | 4× | 192 px |

### Windows: effective pixels
- WinUI sizes are in effective pixels (epx); the scaling system keeps a 24 px font equally legible on a TV 10 feet away and on a phone, so you do not change font sizes per screen [15].

### Web: CSS px
- A CSS px is a reference pixel; device pixel ratio (DPR) is 1, 2, or 3 on common hardware. Serve raster images with `srcset`/`sizes` at 1x and 2x (3x only for small, critical images). Prefer SVG for icons.

**Apply.** Spec handoff in logical units only: "16 pt / 16 dp / 1rem margin," never "48 px" without the unit system. In Figma, set frames to logical size (e.g. a 390×844 iPhone frame, not 1170×2532).
**Limit.** A point or dp is not a physical size. 44 pt is a different physical size on an iPhone and an iPad; use mm-based guidance only where the platform gives it (Windows: 7.5 mm [16]).

---

## 3. Apple platforms (iOS, iPadOS, macOS, watchOS, visionOS, tvOS)

### 3.1 Default and minimum text sizes [1] (verified 2026-10)

| Platform | Default size | Minimum size |
|----------|--------------|--------------|
| iOS, iPadOS | 17 pt | 11 pt |
| macOS | 13 pt | 10 pt |
| tvOS | 29 pt | 23 pt |
| visionOS | 17 pt | 12 pt |
| watchOS | 16 pt | 12 pt |

Apple also advises avoiding Ultralight, Thin, and Light weights at small sizes; prefer Regular through Bold [1].

### 3.2 iOS/iPadOS Dynamic Type at the default size ("Large") [1] (verified 2026-10)

| Style | Weight | Size (pt) | Leading (pt) | Emphasized weight |
|-------|--------|-----------|--------------|-------------------|
| Large Title | Regular | 34 | 41 | Bold |
| Title 1 | Regular | 28 | 34 | Bold |
| Title 2 | Regular | 22 | 28 | Bold |
| Title 3 | Regular | 20 | 25 | Semibold |
| Headline | Semibold | 17 | 22 | Semibold |
| Body | Regular | 17 | 22 | Semibold |
| Callout | Regular | 16 | 21 | Semibold |
| Subheadline ("Subhead") | Regular | 15 | 20 | Semibold |
| Footnote | Regular | 13 | 18 | Semibold |
| Caption 1 | Regular | 12 | 16 | Semibold |
| Caption 2 | Regular | 11 | 13 | Semibold |

- Dynamic Type has seven standard sizes (xSmall to xxxLarge) plus five accessibility sizes (AX1 to AX5); for example Body is 14 pt at xSmall and 17 pt at Large [1].
- Emphasized weights were added to the tables on December 16, 2025 [1].

### 3.3 macOS built-in text styles [1] (verified 2026-10)

macOS does not support Dynamic Type [1].

| Style | Weight | Size (pt) | Line height (pt) |
|-------|--------|-----------|------------------|
| Large Title | Regular | 26 | 32 |
| Title 1 | Regular | 22 | 26 |
| Title 2 | Regular | 17 | 22 |
| Title 3 | Regular | 15 | 20 |
| Headline | Bold | 13 | 16 |
| Body | Regular | 13 | 16 |
| Callout | Regular | 12 | 15 |
| Subheadline | Regular | 11 | 14 |
| Footnote | Regular | 10 | 13 |
| Caption 1 | Regular | 10 | 13 |
| Caption 2 | Medium | 10 | 13 |

### 3.4 watchOS and visionOS notes [1]

- watchOS default Dynamic Type size depends on case size: Small on 38 mm, Large on 40/41/42 mm, xLarge on 44/45/49 mm. At xLarge, Body is 17 pt / 19.5 pt leading and Large Title is 40 pt [1].
- visionOS uses bolder Body and Title styles than iOS and adds Extra Large Title 1 and 2 for editorial layouts. Prefer 2D text; billboard labels so they face the viewer [1].
- tvOS Body is Medium 29 pt / 36 pt leading; Title 1 is 76 pt [1].

### 3.5 System typefaces [1]

| Family | Where | Notes |
|--------|-------|-------|
| SF Pro | System font on iOS, iPadOS, macOS, tvOS, visionOS | Variable font with dynamic optical sizes (Text and Display merged); widths include Condensed and Expanded. Rounded variant available. |
| SF Compact | System font on watchOS | SF Compact Rounded is used in complications. |
| SF Mono | Code | Part of the SF family. |
| New York (NY) | Serif companion, usable on iOS, iPadOS, tvOS, watchOS; on macOS via Mac Catalyst | Designed to pair with SF. |

- Do not embed system fonts in an app; call them through the system font APIs. When mocking up, the system adjusts tracking per point size, so mockups may need manual tracking to match [1].
- Apple distributes SF and NY for designing Apple-platform UI. Read the font license before using them anywhere else, such as a web brand or print [license terms not reviewed this pass]; see `typography` → `web-and-variable-fonts.md`.

### 3.6 Hit targets and spacing [2][3] (verified 2026-10)

| Platform | Default control size | Minimum control size |
|----------|---------------------|----------------------|
| iOS, iPadOS | 44×44 pt | 28×28 pt |
| macOS | 28×28 pt | 20×20 pt |
| tvOS | 66×66 pt | 56×56 pt |
| visionOS | 60×60 pt | 28×28 pt |
| watchOS | 44×44 pt | 28×28 pt |

- Spacing: about 12 pt of padding around bezeled elements and about 24 pt around elements without a bezel [2].
- Buttons: "a hit region of at least 44x44 pt — in visionOS, 60x60 pt" [3]. In visionOS, keep button centers at least 60 pt apart [3][4]. visionOS button sizes: Mini 28, Small 32, Regular 44, Large 52, Extra large 64 pt [3].

**Apply.** The visible glyph can be smaller than the hit region: a 22 pt icon inside a 44×44 pt tappable frame is the standard pattern.
**Limit.** The 28 pt minimum is a floor for dense secondary controls, not a target for primary actions.

### 3.7 Safe areas, margins, and bars [4][7]

- A safe area is the region not covered by hardware (Dynamic Island, rounded corners, camera housing) or by bars (status bar, toolbar, tab bar). Lay content out relative to safe areas and system layout guides, not fixed offsets [4].
- Size classes: horizontal and vertical are each compact or regular. Decide layout by size class, not by device or orientation [4].
- macOS: keep controls and critical information away from the window bottom; avoid the camera housing at the top edge [4].
- tvOS: inset primary content 60 pt from top and bottom and 80 pt from the sides [4]. The tvOS tab bar is 68 pt tall, with its top edge 46 pt from the screen top [7].
- **Standard iOS bar heights are not published in the current HIG** (checked Layout and Tab bars pages, 2026-10). Figures like "44 pt nav bar, 49 pt tab bar" come from older versions and from UIKit behavior; with Liquid Glass (2025) bars float and vary. Read them from the running system (safe-area insets) rather than hard-coding.

### 3.8 App icons: layered Liquid Glass format [6] (verified 2026-10)

Since June 9, 2025, iOS, iPadOS, macOS, and watchOS icons are layered: a background layer plus one or more foreground layers that the system renders with Liquid Glass effects (specular highlights, refraction, translucency). The HIG was refined again for Liquid Glass on June 8, 2026 [6].

**Procedure:**
1. Draw foreground layers in your design tool as vectors (SVG or PDF); outline text. Use PNG only for raster art or mesh gradients [6].
2. Import layers into **Icon Composer** (ships with Xcode). Define the background there (solid or gradient), place foreground layers, set glass effects per layer or group, annotate default/dark/mono variants, preview across OS versions, export to Xcode [6].
3. Provide square, unmasked layers. The system applies the rounded-rectangle mask (iOS/iPadOS/macOS) or circular mask (watchOS, visionOS). Pre-masked layers break specular highlights [6].
4. Keep content centered, with clean hard edges (no feathering) and no baked-in shadows, bevels, glows, or blurs [6].
5. Check every appearance: default, dark, clear (light/dark), tinted (light/dark) [6].

| Platform | Canvas | Final shape | Style | Appearances |
|----------|--------|-------------|-------|-------------|
| iOS, iPadOS, macOS | 1024×1024 px | Rounded rectangle | Layered | Default, dark, clear light, clear dark, tinted light, tinted dark |
| tvOS | 800×480 px | Rounded rectangle | Layered parallax (2–5 layers) | n/a |
| visionOS | 1024×1024 px | Circle | Layered 3D (background + 1–2 layers) | n/a |
| watchOS | 1088×1088 px | Circle | Layered | n/a |

- The system generates smaller sizes; you no longer hand-draw each size [6].
- Color spaces: sRGB, Gray Gamma 2.2, Display P3 (P3 not on visionOS) [6].
- watchOS: avoid pure black backgrounds. tvOS: keep a safe zone because focus scaling crops edges [6].
- Alternate icons in iOS/iPadOS need their own dark, clear, and tinted variants [6].

---

## 4. Android and Material Design 3

Note: m3.material.io renders client-side and could not be read in this pass. Material values below come from Android Developers documentation and from the AndroidX Compose token source, which is generated from the Material tokens.

### 4.1 Type scale tokens (Compose `TypeScaleTokens`, token version v0_103) [12] (verified 2026-10)

| Role | Size (sp) | Line height (sp) | Weight | Tracking (sp) |
|------|-----------|------------------|--------|---------------|
| Display Large | 57 | 64 | Regular 400 | −0.2 |
| Display Medium | 45 | 52 | 400 | 0 |
| Display Small | 36 | 44 | 400 | 0 |
| Headline Large | 32 | 40 | 400 | 0 |
| Headline Medium | 28 | 36 | 400 | 0 |
| Headline Small | 24 | 32 | 400 | 0 |
| Title Large | 22 | 28 | 400 | 0 |
| Title Medium | 16 | 24 | Medium 500 | 0.2 |
| Title Small | 14 | 20 | 500 | 0.1 |
| Body Large | 16 | 24 | 400 | 0.5 |
| Body Medium | 14 | 20 | 400 | 0.2 |
| Body Small | 12 | 16 | 400 | 0.4 |
| Label Large | 14 | 20 | 500 | 0.1 |
| Label Medium | 12 | 16 | 500 | 0.5 |
| Label Small | 11 | 16 | 500 | 0.5 |

- The Compose file also defines emphasized variants (heavier weights) for each role [12].
- Several tracking values appear as −0.25 / 0.25 in widely copied Material tables; the Compose token file shows −0.2 and 0.2 (Display Large, Title Medium, Body Medium). The difference is cosmetic; use the platform's token, not a retyped value. [Material site value unverified this pass]

### 4.2 Touch targets [9]
- "At least 48dp×48dp. Larger is even better" for touch; precise pointers (mouse, trackpad) may be smaller [9].
- Compose Material components (`Button`, `IconButton`, `ListItem`) enforce the minimum; custom elements need `Modifier.sizeIn(minWidth = 48.dp, minHeight = 48.dp)` [9].

### 4.3 Window size classes [10] (verified 2026-10, page updated 2026-09-22)

| Width class | Range (dp) | Typical device | Typical layout |
|-------------|-----------|----------------|----------------|
| Compact | < 600 | Phone portrait | Single pane, bottom navigation |
| Medium | 600–839 | Tablet portrait, foldable open | Navigation rail, optional second pane |
| Expanded | 840–1199 | Tablet landscape | Two panes |
| Large | 1200–1599 | Desktop window, large tablet | Two or three panes |
| Extra-large | ≥ 1600 | Connected displays | Multi-pane, wider margins |

| Height class | Range (dp) |
|--------------|-----------|
| Compact | < 480 |
| Medium | 480–899 |
| Expanded | ≥ 900 |

- Large and extra-large width classes are opt-in in Compose: `currentWindowAdaptiveInfo(supportLargeAndXLargeWidth = true)` [10].
- Classes describe the window, not the device; never use them for `isTablet` logic [10].

### 4.4 Adaptive launcher icons [11] (verified 2026-10)

| Spec | Value |
|------|-------|
| Foreground and background layers | 108×108 dp each |
| Safe zone (never clipped by any OEM mask) | Inner 66×66 dp |
| Logo size | 48×48 dp minimum, 66×66 dp maximum |
| Reserved for mask and motion effects | Outer 18 dp on each side |
| Monochrome layer | Provide one for themed icons (Android 13+). From Android 16 QPR 2 the system auto-themes apps without one |

- Vectors preferred; no masks or shadows baked into layers [11].
- Discrepancy: many older guides say "72 dp visible, 66 dp safe." 108 − 2×18 = 72 dp is the masked viewport area; the current page states the guaranteed safe zone as 66×66 dp [11]. Design to 66.
- Google Play listing icon (512×512 px) is specified on a separate Play Console page not opened in this pass. [unverified]

### 4.5 Material 3 Expressive (status, 2026-10)
- Announced May 13, 2025, alongside Android 16 and Wear OS 6. Google described it as an expansion of Material 3, "not Material Design 4," with no plan to discontinue M3 (secondary report) [14].
- Android Developers (updated 2026-10-01) calls M3 Expressive "an expansion of Material Design 3" with updates to theming, components, motion, and typography, implemented in Jetpack Compose [13].
- Reported changes: revised button shapes and a 35-shape library, spring-based motion, FAB at 56/80/96 dp, wavy progress indicators (secondary) [14].
- Which Expressive APIs are stable vs experimental was not confirmed in this pass; check the Compose Material 3 release notes before relying on them. [unverified]

**Apply.** Build tokens on M3 roles (not raw sizes). Use Expressive's larger shapes and motion as a theme layer, keeping the M3 type and color roles underneath.

---

## 5. Windows / Fluent (brief)

| Item | Value | Source |
|------|-------|--------|
| System font | Segoe UI Variable (weight 100–700, automatic optical size 8–36 pt) | [15] |
| Type ramp (size/line height, epx) | Caption 12/16; Body 14/20; Body Strong 14/20 semibold; Body Large 18/24; Subtitle 20/28; Title 28/36; Title Large 40/52; Display 68/92 | [15] |
| Minimum text | 14px Semibold or 12px Regular | [15] |
| Emphasis | Use Semibold, not Bold; italics are not in the ramp | [15] |
| Line length | 50–60 characters | [15] |
| Touch target | 7.5 mm square, i.e. 40×40 epx at 135 PPI and 1.0× scaling | [16] |

**Apply.** For a cross-platform web app that should feel native on Windows, a 40px minimum control height with 14px body text matches Fluent density; keep 44px if you also target iOS touch.

---

## 6. Web

### 6.1 Breakpoints (reference only)
Breakpoints should come from content, not devices; see `layout-composition` → `responsive-layout.md`. Two common reference sets:

| System | Breakpoints (min-width) |
|--------|-------------------------|
| Tailwind CSS defaults [25] | sm 640, md 768, lg 1024, xl 1280, 2xl 1536 px (40/48/64/80/96 rem) |
| Material window classes [10] | 600, 840, 1200, 1600 dp |

### 6.2 Favicon and touch-icon set [17] (verified 2026-10)

Minimal set that covers current browsers, iOS home screen, and Android/PWA installs:

| File | Size | Purpose |
|------|------|---------|
| `/favicon.ico` | 32×32 | Legacy browsers, RSS readers, tools that request `/favicon.ico` directly |
| `/icon.svg` | vector | Modern browsers; can include a `prefers-color-scheme` media query for dark tabs |
| `/apple-touch-icon.png` | 180×180 | iOS/iPadOS home screen |
| `/icon-192.png` | 192×192 | Manifest |
| `/icon-512.png` | 512×512 | Manifest, splash screens |
| `/icon-mask.png` | 512×512, `purpose: "maskable"` | Android adaptive masks |
| `/manifest.webmanifest` | — | PWA manifest |

```html
<link rel="icon" href="/favicon.ico" sizes="32x32">
<link rel="icon" href="/icon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon.png"><!-- 180×180 -->
<link rel="manifest" href="/manifest.webmanifest">
```

```json
{
  "icons": [
    { "src": "/icon-192.png", "type": "image/png", "sizes": "192x192" },
    { "src": "/icon-512.png", "type": "image/png", "sizes": "512x512" },
    { "src": "/icon-mask.png", "type": "image/png", "sizes": "512x512", "purpose": "maskable" }
  ]
}
```

- Chromium requires at least a 192×192 and a 512×512 icon in the manifest [18].
- Maskable safe zone: keep the logo inside a centered circle with radius 40% of the icon width (on a 512 icon, a ~409 px diameter circle) [19][17].
- Sources conflict on `purpose`: web.dev's manifest article shows `"any maskable"` [18], while web.dev's maskable-icon article says not to combine them because maskable art used as "any" gets extra padding [19]. Use separate entries, as above.
- SVG manifest icons need a raster fallback [18].

### 6.3 Link-share (Open Graph) images [20] (verified 2026-10)

| Spec (Meta) | Value |
|-------------|-------|
| Recommended | At least 1200×630 px |
| Large-image minimum | 600×315 px |
| Absolute minimum | 200×200 px |
| Aspect ratio | As close to 1.91:1 as possible |
| Max file size | 8 MB |

```html
<meta property="og:image" content="https://example.com/og/launch-1200x630.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Product name: one-line description">
<meta name="twitter:card" content="summary_large_image">
```

- Declare `og:image:width/height` so the first share renders immediately; change the URL when you change the image, because shares cache by URL [20].
- X card image specs: the X developer card docs returned an error (HTTP 402) in this pass. A 1200×630 image under 5 MB is widely used for `summary_large_image`, but the exact X limits are [unverified].
- **Apply.** Keep text and logos inside the central ~1000×500 area; LinkedIn, Slack, iMessage, and X crop the edges differently. Use 60px+ type so the title reads in a 500px-wide preview.

### 6.4 PWA install surfaces
- Manifest icons as above; Chromium scales the two required sizes to the device, or you can supply extra sizes in 48 dp steps for pixel control [18].

---

## 7. Email

### 7.1 Width and layout
- Design at **600 px** (range 600–640 px) so messages fit preview panes and phones without horizontal scroll (practitioner consensus, secondary source) [22] [E2].
- Build with nested tables, inline critical CSS, and explicit widths on tables and cells (Outlook for Windows); many clients strip `<style>` [22].
- Export images at 2× the displayed width and set `width`/`height` attributes; always write `alt` text because many clients block images by default [22].

### 7.2 Client support (caniemail data, fetched 2026-10; individual tests dated as shown) [21]

| Feature | Supported | Not supported / partial |
|---------|-----------|-------------------------|
| `@font-face` web fonts (tests to 2023-12) | Apple Mail (macOS, iOS), Samsung Email, Thunderbird, HEY | Gmail (all apps and webmail), Outlook (macOS, Outlook.com, iOS, Android, Windows Mail), Yahoo, AOL; Outlook for Windows partial and may fall back to Times New Roman |
| `prefers-color-scheme` (tests to 2023-03, some later) | Apple Mail (macOS, iOS), Outlook macOS / Outlook.com / iOS / Android (with caveats), Samsung Email | Gmail (all), Outlook for Windows, Yahoo, AOL, Thunderbird |
| Inline SVG | Apple Mail iOS, Samsung, Thunderbird | Gmail, Outlook, Yahoo, AOL |
| WebP images | Apple Mail 14+, most Outlook apps, Yahoo | Outlook for Windows; Gmail partial |

**Rules that follow:**
1. Always specify a fallback stack: `font-family: 'Brand Sans', Helvetica, Arial, sans-serif;`. Expect most Gmail and Outlook readers to see the fallback.
2. Dark mode: you cannot rely on `prefers-color-scheme` in Gmail; some clients invert colors themselves. Use logos with a transparent background plus a light outline or glow, avoid pure-black text on transparent PNGs, and test in real clients.
3. Use PNG/JPEG (and GIF for animation); treat SVG and WebP as progressive enhancement only.
4. Gmail is widely reported to clip messages above about 102 KB of HTML. [unverified: no official Google page found this pass]

---

## 8. Touch-target table across platforms

| Platform / standard | Recommended | Minimum / floor | Notes | Source |
|---------------------|-------------|-----------------|-------|--------|
| iOS, iPadOS, watchOS | 44×44 pt | 28×28 pt | 12 pt padding (bezel) / 24 pt (no bezel) | [2] |
| macOS | 28×28 pt | 20×20 pt | Pointer-first | [2] |
| visionOS | 60×60 pt | 28×28 pt | Centers ≥ 60 pt apart (eye targeting) | [2][3] |
| tvOS | 66×66 pt | 56×56 pt | Focus-based | [2] |
| Android / Material | 48×48 dp | — | Smaller allowed for mouse/trackpad only | [9] |
| Windows / Fluent | 40×40 epx (7.5 mm) | — | Bigger for frequent or destructive targets | [16] |
| WCAG 2.2 SC 2.5.8 (AA) | — | 24×24 CSS px, or spacing so a 24 px circle on each target does not overlap another | Exceptions: equivalent control, inline text, user-agent default, essential | [23] |
| WCAG 2.2 SC 2.5.5 (AAA) | 44×44 CSS px | — | Exceptions: equivalent, inline, user agent, essential | [24] |

**Apply.** For a cross-platform design system, set the token `target-min = 44` (CSS px / pt) and `target-min-android = 48dp`. Use 24 px only as a hard floor for dense, secondary controls that also meet the spacing test. Testing procedure: `accessibility` → `wcag-22-in-practice.md`.
**Limit.** Larger targets reduce errors for people with motor impairments and on the move [E2: platform guidelines and WCAG]. The platform numbers are design standards, not research thresholds; do not cite them as "proven optimal."

---

## 9. Common mistakes

- Designing iPhone screens at 1170 px wide and handing off pixel values. Work at 1× logical size.
- Copying "44 pt nav bar / 49 pt tab bar / 20 pt status bar" into a 2026 iOS layout. Those bar heights are not published in the current HIG, and Liquid Glass bars float. Use safe-area insets.
- Hand-exporting dozens of iOS icon sizes. Since 2025, ship one 1024 px layered icon through Icon Composer; the system derives the rest.
- Baking rounded corners, shadows, or gloss into an app icon. The system masks and lights it; pre-masked art looks jagged.
- Putting the Android launcher logo out to the 72 dp edge. OEM masks can cut anything outside the 66 dp safe zone.
- Using sp for layout dimensions, or dp for text (text then ignores the user's font-size setting).
- Treating window size classes as device types (`isTablet`).
- Shipping only `favicon.ico`, or ten redundant PNG favicons. The five-icon set above covers current needs.
- Using `"purpose": "any maskable"` on one icon: either the "any" rendering gets padded or the maskable one gets cropped.
- Using a web font in email without a fallback stack, or designing dark-mode email that depends on `prefers-color-scheme` in Gmail.
- Treating WCAG's 24 px as the target size to aim for. It is the AA floor; platform guidance is 40–48.

---

## Sources

[1] Apple. (2025, rev. 2025-12-16). *Typography*. Human Interface Guidelines. https://developer.apple.com/design/human-interface-guidelines/typography (read 2026-10 via the HIG JSON data feed, because the HTML page renders client-side)
[2] Apple. (2025, rev. 2025-06-09). *Accessibility*. Human Interface Guidelines. https://developer.apple.com/design/human-interface-guidelines/accessibility (read 2026-10 via JSON data feed)
[3] Apple. (2025, rev. 2025-12-16). *Buttons*. Human Interface Guidelines. https://developer.apple.com/design/human-interface-guidelines/buttons (read 2026-10 via JSON data feed)
[4] Apple. (2026, rev. 2026-09-09). *Layout*. Human Interface Guidelines. https://developer.apple.com/design/human-interface-guidelines/layout (read 2026-10 via JSON data feed)
[5] Apple. (n.d.). *Images*. Human Interface Guidelines. https://developer.apple.com/design/human-interface-guidelines/images (read 2026-10 via JSON data feed)
[6] Apple. (2026, rev. 2026-06-08). *App icons*. Human Interface Guidelines. https://developer.apple.com/design/human-interface-guidelines/app-icons (read 2026-10 via JSON data feed)
[7] Apple. (n.d.). *Tab bars*. Human Interface Guidelines. https://developer.apple.com/design/human-interface-guidelines/tab-bars (read 2026-10 via JSON data feed)
[8] Android Developers. (n.d.). *Support different pixel densities*. https://developer.android.com/training/multiscreen/screendensities (accessed 2026-10)
[9] Android Developers. (n.d.). *Make apps more accessible*. https://developer.android.com/guide/topics/ui/accessibility/apps (accessed 2026-10)
[10] Android Developers. (2026, updated 2026-09-22). *Use window size classes*. https://developer.android.com/develop/ui/compose/layouts/adaptive/use-window-size-classes
[11] Android Developers. (2026, updated 2026-09-22). *Adaptive icons*. https://developer.android.com/develop/ui/views/launch/icon_design_adaptive
[12] The Android Open Source Project. (n.d.). *TypeScaleTokens.kt* (token version v0_103). AndroidX, compose/material3. https://github.com/androidx/androidx/blob/androidx-main/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/tokens/TypeScaleTokens.kt (accessed 2026-10)
[13] Android Developers. (2026, updated 2026-10-01). *Material Design 3 in Compose*. https://developer.android.com/develop/ui/compose/designsystems/material3
[14] Gigazine. (2025, May 14). *Google announces Material 3 Expressive for Android 16 and Wear OS 6*. https://gigazine.net/gsc_news/en/20250514-android-16-wear-6-material-3-expressive (secondary source)
[15] Microsoft. (2021, updated 2026-07-14). *Typography in Windows*. Microsoft Learn. https://learn.microsoft.com/en-us/windows/apps/design/signature-experiences/typography
[16] Microsoft. (2026, updated 2026-09-28). *Targeting*. Microsoft Learn. https://learn.microsoft.com/en-us/windows/apps/develop/input/guidelines-for-targeting
[17] Evil Martians. (2021, updated 2026-01-21). *How to Favicon: Six files that fit most needs*. https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs (practitioner source)
[18] web.dev. (2024, updated 2024-09-18). *Add a web app manifest*. https://web.dev/articles/add-manifest
[19] web.dev. (n.d.). *Adaptive icon support in PWAs with maskable icons*. https://web.dev/articles/maskable-icon (accessed 2026-10)
[20] Meta for Developers. (n.d.). *Images in Link Shares*. https://developers.facebook.com/docs/sharing/webmasters/images/ (accessed 2026-10)
[21] Can I email. (data updated 2026-09-16). *Support tables: @font-face, prefers-color-scheme, SVG, WebP*. https://www.caniemail.com/features/css-at-font-face/ ; https://www.caniemail.com/features/css-at-media-prefers-color-scheme/ ; data via https://www.caniemail.com/api/data.json
[22] WooCommerce Developer Docs. (n.d.). *Email HTML best practices*. https://developer.woocommerce.com/docs/features/email/email-html-best-practices/ (secondary/practitioner source; accessed 2026-10)
[23] W3C. (2023). *Understanding SC 2.5.8 Target Size (Minimum)*. WCAG 2.2. https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html
[24] W3C. (2023). *Understanding SC 2.5.5 Target Size (Enhanced)*. WCAG 2.2. https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced.html
[25] Tailwind Labs. (n.d.). *Responsive design*. Tailwind CSS docs. https://tailwindcss.com/docs/responsive-design (accessed 2026-10)
