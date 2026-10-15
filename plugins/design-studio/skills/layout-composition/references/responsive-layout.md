# Responsive Layout

> **Scope:** Techniques for layouts that adapt across viewports, containers, devices, writing directions, and zoom levels: breakpoints, container queries, fluid spacing, logical properties, safe areas, viewport units, foldables, reading order, responsive images, tables, navigation, and WCAG reflow. Includes snippets and a QA checklist.
> **Last verified:** 2026-10 (browser support, framework breakpoints, platform size classes)
> **Used by:** ui-designer, design-engineer, design-system-architect, accessibility-specialist, design-critic, creative-director

## How to use this file

1. Pick an approach (section 1) and set breakpoints from content (section 2). Framework sets are references, not rules.
2. Make components respond to their **container**, not the viewport, where possible (section 3).
3. Use fluid tokens, logical properties, and safe-area insets (sections 4–6).
4. Check reading order, images, tables, and navigation (sections 8–11).
5. Run the **reflow test** and the **QA checklist** (sections 12–13) before handoff.

Related: grid construction and CSS Grid/subgrid recipes are in `grid-systems.md`. Density is in `hierarchy-balance-whitespace.md`. History of responsive and intrinsic design (Marcotte 2010, Wroblewski, Simmons 2018) is in `design-history` → `web-pioneers-and-flash-era.md`. Touch targets per platform are in `media-specs` → `digital-platforms.md`. WCAG detail and testing are in `accessibility` → `wcag-22-in-practice.md` and `accessibility` → `legal-and-testing.md`. Fluid type scales are in `typography` → `scale-and-rhythm.md`.

---

## 1. Approaches

| Approach | What it is | Strength | Weakness | Use when |
|----------|-----------|----------|----------|----------|
| **Fluid** | Percentages and `fr` units. Layout stretches continuously | No dead zones | Awkward line lengths and gaps at extremes without limits | Simple pages, inside other approaches |
| **Adaptive** | A few fixed layouts, switched at set widths | Pixel control per layout | Gaps between layouts, more maintenance, device-specific thinking | Kiosks, TV, tightly controlled embeds, native apps by size class |
| **Responsive** (fluid grid + flexible media + media queries) | Fluid grids that change structure at breakpoints | The web default | Viewport-only queries make components depend on page context | Most sites and web apps |
| **Intrinsic** | Layout sized by content and available space: `min()`, `max()`, `clamp()`, `minmax()`, `auto-fit`, `fit-content`, container queries | Components adapt anywhere, fewer breakpoints | Less direct control. Needs testing at many sizes | Design systems, component libraries, CMS-driven pages |

**Rule:** Combine them. Use intrinsic sizing for components, a few content-driven viewport breakpoints for page structure, and adaptive changes only where the interaction model changes (for example, navigation).

Apple's equivalent rule for native apps: base layout on size classes, not device type or orientation, and keep functionality the same as the size class changes [1]. **[E2]**

---

## 2. Breakpoints

### 2.1 Content-first procedure
1. Design the narrowest layout first. Test at 320 CSS px, which is the WCAG reflow width (section 12).
2. Widen the viewport slowly. Add a breakpoint **where the content breaks**: line length goes past about 75 characters, a card row has room for another card, a sidebar's content fits beside the main column, or the navigation fits in one line.
3. Prefer `rem` or `em` in media queries so breakpoints move with the user's font size.
4. Keep the number of page-level breakpoints small (3–5). Push the rest into components (container queries) and intrinsic sizing.
5. Check heights too. Landscape phones and split screens have short viewports. Android treats height as its own size class [2].

### 2.2 Device vs. content breakpoints
- **Device breakpoints** ("iPhone = 390, iPad = 820") go stale as soon as a new device ships and ignore split-screen, zoom, and resizable windows.
- **Content breakpoints** are tied to your layout and survive new devices.
- Android says the same thing about native apps: size classes describe the **window**, not the device, and change at runtime with split-screen, ChromeOS windows, and foldables [2].

### 2.3 Reference sets (verified 2026-10)
Use these to align with a codebase or framework, not as targets.

**Tailwind CSS v4.3** (mobile-first, `min-width` style) [3]:

| Prefix | Min width |
|--------|-----------|
| `sm` | 40rem (640px) |
| `md` | 48rem (768px) |
| `lg` | 64rem (1024px) |
| `xl` | 80rem (1280px) |
| `2xl` | 96rem (1536px) |

Tailwind container-query variants run from `@3xs` 16rem (256px) to `@7xl` 80rem (1280px), for example `@sm` 24rem, `@md` 28rem, `@lg` 32rem, `@xl` 36rem, `@2xl` 42rem [3].

**Bootstrap 5.3** (mobile-first) [4]:

| Breakpoint | Infix | Min width |
|------------|-------|-----------|
| Extra small | none | < 576px |
| Small | `sm` | 576px |
| Medium | `md` | 768px |
| Large | `lg` | 992px |
| Extra large | `xl` | 1200px |
| Extra extra large | `xxl` | 1400px |

Bootstrap says the values were chosen to hold containers whose widths are multiples of 12 and are "a subset of common device sizes," not a target for every device [4].

**Material / Android window size classes (width)** [2]:

| Class | Width | Represents |
|-------|-------|------------|
| Compact | < 600dp | 99.96% of phones in portrait |
| Medium | 600–839dp | 93.73% of tablets in portrait; most large unfolded inner displays in portrait |
| Expanded | 840–1199dp | 97.22% of tablets in landscape; most large unfolded inner displays in landscape |
| Large | 1200–1599dp | Large tablet displays |
| Extra-large | ≥ 1600dp | Desktop displays |

Height classes: compact < 480dp, medium 480–899dp, expanded ≥ 900dp [2]. Android page last updated 2026-09-22.

**Fluent 2** size classes: small 320–479, medium 480–639, large 640–1023, x-large 1024–1365, xx-large 1366–1919, xxx-large 1920+ px. The page's second notation overlaps these slightly, so treat the boundaries as approximate [5].

**Carbon** (2x Grid): sm 320px (4 columns), md 672px (8), lg 1056px (16), xlg 1312px (16), max 1584px (16). Padding is 16px at every breakpoint [6].

**Apple** (iOS/iPadOS): two size classes per axis, *compact* and *regular*, rather than pixel breakpoints [1].

---

## 3. Container queries

### 3.1 Rule
Components respond to the space they are given. Page structure responds to the viewport.

### 3.2 Syntax

```css
/* 1. Declare a container */
.card-list {
  container: cards / inline-size;   /* name / type */
}

/* 2. Query it */
.card { display: grid; gap: var(--space-3); }

@container cards (width >= 30rem) {
  .card { grid-template-columns: 10rem minmax(0, 1fr); }
}

/* 3. Container-relative units */
.card h3 { font-size: clamp(1rem, 0.75rem + 2cqi, 1.5rem); }
```

- `container-type: inline-size` is the usual choice. `size` also contains the block axis, so the container needs an explicit height. `normal` is not a size container but can still be a style container [7].
- Range syntax works: `@container (10em <= width <= 20em)` [7].
- Don't change the size of the container from inside its own query. MDN warns this can loop [7].
- Units: `cqw`, `cqh`, `cqi`, `cqb`, `cqmin`, `cqmax`. `1cqi` is 1% of the container's inline size [8].

### 3.3 Support (verified 2026-10)

| Feature | Chrome | Edge | Firefox | Safari | Global (caniuse) |
|---------|--------|------|---------|--------|------------------|
| Size container queries | 106 | 106 | 110 | 16.0 | 95.89% [9] |
| Container query units | 105 | 105 | 110 | 16.0 | 95.89% [10] |
| Style queries (custom properties) | 111 (partial) | 111 (partial) | 151 | 18.0 (partial) | 92.86% [11] |

- **Size queries are safe for production.** Provide a sensible single-column default for the rare unsupported browser.
- **Style queries** (`@container style(--variant: compact)`) support only custom properties [7]. caniuse marks Chromium and Safari support as partial [11]. Use them as enhancement.

**Apply:** cards that go from stacked to side-by-side in a sidebar vs. main column, data widgets in resizable dashboards, CMS modules dropped into any column, email-like previews.

**Limit:** A container can't query itself; it queries an ancestor container. Wrap the component if needed. Too many named containers make debugging hard. Name only the ones you query by name.

---

## 4. Fluid spacing and type with `clamp()`

### 4.1 Formula
For a value that goes from `min` at viewport `vmin` to `max` at viewport `vmax` (all in px):

```
slope     = (max − min) / (vmax − vmin)
intercept = min − slope × vmin
value     = clamp(min, intercept + slope × 100vw, max)
```

Write the intercept in `rem` so part of the value still scales with the user's font size.

**Examples (checked):**

```css
:root {
  /* 16px at 360px → 24px at 1280px */
  --step-0: clamp(1rem, 0.8043rem + 0.8696vw, 1.5rem);

  /* Section spacing: 24px at 360px → 64px at 1440px */
  --space-section: clamp(1.5rem, 0.6667rem + 3.7037vw, 4rem);

  /* Page margin: 16px → 80px */
  --page-margin: clamp(1rem, 5vw, 5rem);
}
```

Check: at 1280px, 12.87px + 11.13px = 24px. At 1440px, 10.67px + 53.33px = 64px.

### 4.2 Zoom caveat (WCAG 1.4.4)
- Zooming shrinks the CSS viewport, so `vw`-based sizes barely grow when users zoom. Adrian Roselli measured `clamp(1.5rem, 5vw, 3rem)` going from 64px to only 68px at 200% zoom and called it a guaranteed WCAG failure as written [12].
- **Rules:**
  - Use fluid `vw` sizing for **spacing** freely.
  - For **text**, always add a `rem` term (as above), keep the `vw` slope small, and keep the maximum at least 2× the minimum. Roselli's simplest advice is to avoid a maximum font size, and, if you only target minimum conformance, to not set a maximum below twice the base size [12].
  - Test at 200% zoom in Chrome, Firefox, and Safari.
- **[E2: WCAG requirement and expert testing]**

---

## 5. Logical properties and RTL

### 5.1 Rule
Write layout in flow-relative terms (inline/block, start/end) so one stylesheet works for LTR, RTL, and vertical writing modes.

| Physical | Logical | In RTL |
|----------|---------|--------|
| `margin-left` | `margin-inline-start` | becomes right |
| `padding-top` + `padding-bottom` | `padding-block` | unchanged in horizontal text |
| `left` + `right` | `inset-inline` | swaps |
| `width` | `inline-size` | becomes height in vertical text |
| `height` | `block-size` | becomes width in vertical text |
| `border-top-left-radius` | `border-start-start-radius` | becomes top-right |
| `text-align: left` | `text-align: start` | right-aligned |

(Mappings assume horizontal LTR; see MDN [13].)

**Support (verified 2026-10):** full support in Chrome/Edge 89, Firefox 66, Safari 15, with 97.28% global usage per caniuse [14].

### 5.2 Apply
```css
.card { padding-block: var(--space-4); padding-inline: var(--space-5); }
.icon-leading { margin-inline-end: var(--space-2); }
.drawer { inset-inline-start: 0; }
.chevron-next:dir(rtl) { transform: scaleX(-1); } /* mirror directional icons */
```
- Set `<html lang="ar" dir="rtl">`. Flexbox and grid follow the direction automatically.
- Mirror directional icons (back/forward, progress, sliders). Don't mirror logos, media playback icons, clocks, or checkmarks.
- Numbers and Latin brand names stay LTR inside RTL text. Test with real content.

**Limit:** Safe-area insets (`env(safe-area-inset-left)`) are physical, because the notch doesn't rotate with the text direction. Use physical properties there on purpose.

---

## 6. Safe areas and viewport units

### 6.1 Safe areas (notches, rounded corners, home indicators)

```html
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
```

```css
.app-header {
  padding-top: env(safe-area-inset-top);
  padding-left: max(1rem, env(safe-area-inset-left));
  padding-right: max(1rem, env(safe-area-inset-right));
}
footer {
  position: sticky;
  bottom: 0;
  padding: 1em 1em calc(1em + env(safe-area-inset-bottom));
}
```

- `viewport-fit=cover` scales the viewport to fill the display. MDN recommends using the safe-area inset variables with it so important content doesn't end up outside the display [15].
- Insets are `0` on rectangular screens with no occluding UI [16]. `safe-area-max-inset-*` gives the maximum insets with all dynamic UI retracted [16].
- `env()` accepts a fallback: `env(safe-area-inset-right, 1em)` [16]. MDN marks `env()` Baseline Widely available since January 2020, though support for individual variables varies [16].
- Native apps: Apple defines the safe area as the part of the window not covered by hardware features or bars (status bar, tab bar, Dynamic Island) [1]. tvOS content should be inset 60pt from the top and bottom and 80pt from the sides [1].

### 6.2 Viewport units (verified 2026-10)

| Unit | Meaning [8] | Use for |
|------|-------------|---------|
| `svh` / `svw` | Small viewport: browser UI expanded | Full-height heroes that must never hide content under the toolbar |
| `lvh` / `lvw` | Large viewport: browser UI retracted | Backgrounds that should cover the screen when UI hides |
| `dvh` / `dvw` | Dynamic: tracks UI as it expands and retracts | Full-screen app shells, modals. MDN notes the values "are not stable" |
| `vh` / `vw` | Defined by the browser; currently equal to `lvh`/`lvw` in all browsers [8] | Legacy fallback |

Support for `sv*` / `lv*` / `dv*`: Chrome/Edge 108, Firefox 101, Safari 15.4 (iOS 15.4), Samsung Internet 21, with 95.94% global usage per caniuse [17].

```css
.hero {
  min-height: 100vh;      /* fallback */
  min-height: 100svh;     /* never taller than the visible area */
}
.app-shell { block-size: 100dvh; }  /* resizes with browser UI */
```

- **Rule:** Prefer `min-height` over fixed `height`, so content can grow (zoom, long translations).
- Avoid `dvh` on large content areas that would re-layout during scroll. Each UI change resizes them.
- **Virtual keyboard:** by default it resizes only the visual viewport. `<meta name="viewport" content="interactive-widget=resizes-content">` makes the layout viewport shrink so fixed footers stay above the keyboard [15]. Check support before relying on it.
- **Never** use `user-scalable=no` or `maximum-scale=1`. MDN warns this blocks people with low vision from zooming, and that WCAG requires at least 2× scaling [15].

---

## 7. Foldables and dual-screen

- **Native (Android):** foldables appear as window size class changes: inner displays are usually medium (portrait) or expanded (landscape) [2]. Adaptive navigation uses a navigation bar when width or height is compact or the device is in tabletop posture, and a rail otherwise [18].
- **Web:** the Viewport Segments API exposes the fold. Media features `horizontal-viewport-segments` and `vertical-viewport-segments` detect the number of segments. `env(viewport-segment-width x y)` and related variables give each segment's geometry. In a horizontal layout, the left segment is `0 0` and the right is `1 0` [19][20].
- **Support (verified 2026-10):** MDN marks it experimental and not Baseline [19]. caniuse lists Chrome and Edge 138+, Samsung Internet 30, Chrome for Android 154, and no support in Firefox or Safari, at 70.65% global usage [21].

```css
@media (horizontal-viewport-segments: 2) {
  .wrapper {
    display: flex;
    flex-direction: row;
  }
  .list-view   { width: env(viewport-segment-width 0 0); }
  .fold        { width: calc(env(viewport-segment-left 1 0) - env(viewport-segment-right 0 0)); }
  .detail-view { width: env(viewport-segment-width 1 0); }
}
```
(Adapted from MDN [20].)

**Apply:** list-detail and two-pane layouts that place each pane on one segment. Keep text and controls off the hinge.

**Limit:** Treat as progressive enhancement. The default layout must already work as a normal wide or narrow viewport.

---

## 8. Reading order and DOM order

### 8.1 Rule
Source order = reading and focus order. CSS can move boxes visually (grid placement, `order`, `flex-direction: row-reverse`, absolute positioning), but screen readers and keyboard focus follow the DOM.

- **WCAG 1.3.2 Meaningful Sequence (A):** when the order affects meaning, a correct reading sequence must be programmatically determinable [22]. Visual order may differ from DOM order where meaning doesn't depend on it. Failure F1 covers changing meaning by positioning content with CSS. Technique C27 is making DOM order match visual order [22].
- **WCAG 2.4.3 Focus Order** also applies. See `accessibility` → `wcag-22-in-practice.md`.

### 8.2 Apply
- Write the DOM in the order of the narrowest layout's reading sequence. Rearrange for wider screens only in ways that keep reading order sensible (for example, moving an aside to the right).
- Don't use `order` or grid placement to put a CTA visually *before* content that it follows in the DOM.
- **`reading-flow`** lets the visual grid or flex order drive the reading and focus order (for example `reading-flow: grid-rows`). Support (verified 2026-10): Chrome and Edge 137+, no Firefox or Safari, at 70.73% global usage [23]. Enhancement only. Don't rely on it for conformance.

---

## 9. Images

### 9.1 Resolution switching (same image, different sizes)

```html
<img
  src="hero-1200.jpg"
  srcset="hero-600.jpg 600w, hero-1200.jpg 1200w, hero-2000.jpg 2000w"
  sizes="(width >= 75rem) 1200px, (width >= 48rem) 66vw, 100vw"
  width="1200" height="675"
  alt="Describe the image's content and purpose">
```

- `w` descriptors give each file's intrinsic width. `sizes` gives the slot width per media condition. The browser uses the first matching condition, so order matters. Percentages are not allowed in `sizes` [24].
- The browser takes the matching slot width and loads the closest candidate. With no exact match, it picks the first larger image and scales it down [24].
- For fixed-size images (avatars, logos), use `x` descriptors instead: `srcset="logo.png, logo@2x.png 2x"` [24].
- Set `width` and `height` attributes so the browser can reserve the box before the image loads (practitioner standard; reduces layout shift).

### 9.2 Art direction (different crops)

```html
<picture>
  <source media="(width < 50rem)" srcset="product-portrait.jpg">
  <source media="(width >= 50rem)" srcset="product-wide.jpg">
  <img src="product-wide.jpg" alt="…">
</picture>
```

Use `media` on `<source>` only for art direction, and always end `<picture>` with an `<img>` that has `src` and `alt` [24].

### 9.3 CSS

```css
img, video { max-inline-size: 100%; block-size: auto; }
.thumb { aspect-ratio: 1; object-fit: cover; }
.hero-media { aspect-ratio: 16 / 9; object-fit: cover; object-position: 50% 30%; }
```

`aspect-ratio` support: Chrome/Edge 88, Firefox 89, Safari 15, at 97.07% global usage (verified 2026-10) [25].

**Apply:** use art direction when a wide crop would make the subject too small on phones (faces, products, text in images). Social and OOH crop specs are in `media-specs`.

**Limit:** Never put essential text inside raster images. It doesn't reflow, translate, or scale.

---

## 10. Tables and data on small screens

| Pattern | When | Notes |
|---------|------|-------|
| **Scroll container** | Default for true data tables | Table scrolls horizontally inside its own region. The page doesn't. WCAG 1.4.10 exempts data tables, but not the headings, search, and pagination around them [26] |
| **Priority columns** | Many columns, a few matter on mobile | Hide low-priority columns behind a "Columns" control. Never drop data silently |
| **Stacked cards** | Records with few fields, read one at a time (orders, contacts) | Each row becomes a card with label: value pairs. Lose cross-row comparison |
| **Sticky first column / header** | Wide comparisons | Keep sticky elements small. At small sizes they can hide content and focus [26] |
| **Summary + detail** | Dashboards | Show the key number or sparkline. Tap for the full table |

**Accessible scroll container** (Adrian Roselli's pattern) [27]:

```html
<div role="region" aria-labelledby="tbl-cap" tabindex="0" class="table-scroll">
  <table>
    <caption id="tbl-cap">Quarterly revenue by region</caption>
    …
  </table>
</div>
```

```css
.table-scroll { overflow: auto; }
.table-scroll:focus-visible { outline: 2px solid currentColor; outline-offset: 2px; }
```

- `tabindex="0"` lets keyboard users focus and scroll the region. `overflow: auto` keeps the scroll inside the table so the page doesn't gain horizontal scroll [27].
- Roselli's 2026 update says the `role` is no longer strictly required, but labeling stays useful. His sample outline color is too faint: use a focus color with at least 3:1 contrast [27].
- **Limit:** Don't turn true data tables into `display: block` stacks without restoring semantics. Changing `display` on table elements can strip table semantics in some browsers [unverified for current versions; test with a screen reader].

---

## 11. Navigation patterns by size

| Size | Native (Android/Material) | Native (Apple) | Web |
|------|---------------------------|----------------|-----|
| Compact width (phones) | Navigation bar at the bottom [18] | Tab bar | Visible links if 4 or fewer top-level items. Otherwise a mix of visible and hidden links (NN/g) [28] |
| Medium (tablets portrait, foldables) | Navigation rail [18] | Tab bar or sidebar | Visible horizontal nav, or a rail for apps |
| Expanded and larger | Rail by default; permanent drawer by override [18] | Sidebar (switching from tab bar to sidebar is allowed when space permits) [1] | Visible top nav or left sidebar. **No hamburger-only nav on desktop** [28] |

**Evidence on hidden navigation:** NN/g's 2016 study (179 participants, 6 sites, desktop and mobile) found hidden navigation was used less on desktop (27% of cases vs. 48% for visible), cut content discoverability by more than 20%, and made desktop tasks take at least 39% longer than visible navigation. Their recommendation: no hidden navigation on desktop; on mobile, show top-level links if there are 4 or fewer [28]. **[E2: large practitioner study, single study, 2016]**

**Rules**
- Keep the same destinations at every size. Only the container changes [1].
- Navigation is the most common place to need an adaptive (not fluid) switch. Use a content breakpoint: the width at which all top-level links fit on one line at 200% text size.
- Bottom bars must clear the home indicator (`env(safe-area-inset-bottom)`).

---

## 12. Reflow at 320 CSS px (WCAG 1.4.10, AA)

**Requirement:** content can be presented without loss of information or functionality, and without scrolling in two dimensions, at a width equivalent to 320 CSS px (vertical-scrolling content) or a height equivalent to 256 CSS px (horizontal-scrolling content), except parts that require two-dimensional layout for usage or meaning [26].

- **Why 320:** 320 CSS px equals a 1280px-wide viewport at 400% zoom [26]. 400% applies to each dimension. Real viewports are smaller because of scrollbars and browser UI: a 1280 × 1024 display at 400% gives about 318 × 236 px [26].
- **Exceptions (only the excepted part):** images such as maps and diagrams, video, games, presentations, data tables (not individual cells), and interfaces that keep toolbars in view while content is manipulated [26].
- **Sticky content:** headers, toolbars, ads, and sidebars can hide content and focus at small sizes. The guidance suggests switching them to static positioning at small viewports, or letting users toggle them. Also check 2.4.11 Focus Not Obscured [26].

**Test procedure**
1. Set the browser window to 1280px wide and zoom to 400%, or set DevTools to 320 × 256 and 320 × 640.
2. Scroll the full page. There should be no horizontal page scrollbar, except inside excepted regions.
3. Check that no content is clipped or overlapping, all functions are still reachable (menus, dialogs, carousels, form errors), and sticky bars leave usable space.
4. Repeat at 200% zoom with large text settings, and in landscape on a phone.

---

## 13. Responsive QA checklist

**Structure**
- [ ] Layout works at 320px wide with no horizontal page scroll (section 12).
- [ ] Breakpoints are set where content breaks, in `rem`/`em`, and there are only a few page-level ones.
- [ ] Components use container queries or intrinsic sizing where they appear in more than one context.
- [ ] Grid tracks use `minmax(0, 1fr)` where long content could blow them out (`grid-systems.md`).
- [ ] Short viewports (landscape phone, split screen) tested. Height-based problems found.

**Text and zoom**
- [ ] 200% zoom: text grows to about 200%. Fluid type includes a `rem` term (section 4.2).
- [ ] Zoom is not disabled in the viewport meta.
- [ ] Line length stays within about 45–75 characters at every width.
- [ ] Longest translation and the longest real headline fit (test your longest target languages with real strings).

**Direction and order**
- [ ] Logical properties used for spacing and positioning. RTL checked with `dir="rtl"`.
- [ ] Directional icons mirror in RTL. Logos and media icons don't.
- [ ] DOM order matches reading and focus order at every breakpoint (WCAG 1.3.2, 2.4.3).

**Device features**
- [ ] `viewport-fit=cover` pages pad with `env(safe-area-inset-*)`.
- [ ] Full-height sections use `svh`/`dvh` with a `vh` fallback, and `min-height`, not `height`.
- [ ] Fixed footers stay usable when the virtual keyboard is open.
- [ ] Foldable or two-pane enhancement (if any) degrades to the normal layout.

**Media and data**
- [ ] Images have `srcset`/`sizes` or `x` descriptors, `width`/`height` attributes, and `alt`.
- [ ] Art-directed crops keep the subject visible on phones.
- [ ] Tables scroll inside a labeled, focusable region, or use a documented small-screen pattern.

**Navigation and interaction**
- [ ] Same destinations at every size. No hamburger-only navigation on desktop.
- [ ] Touch targets meet minimums at every density (`media-specs` → `digital-platforms.md`).
- [ ] Hover-only interactions have tap and keyboard equivalents.
- [ ] Sticky headers and footers don't cover focused elements.

---

## Common mistakes

- **Designing for device names** ("iPhone layout") instead of content breakpoints and window size classes [2].
- **Pure `vw` font sizes**, which fail resize-text at zoom [12].
- **`height: 100vh` heroes on mobile**, which put content under the browser toolbar. Use `min-height: 100svh`.
- **Viewport media queries inside reusable components.** Use container queries.
- **Reordering with CSS** so focus jumps around the screen.
- **Hiding content on mobile** instead of reorganizing it. Users on phones need the same information.
- **Hamburger menu on desktop** with few top-level items [28].
- **Treating framework breakpoints as design requirements.** They are a codebase's convention, not a standard.
- **Using physical properties** (`margin-left`) throughout, then patching RTL with overrides.
- **Blocking zoom** with `maximum-scale=1` or `user-scalable=no` [15].
- **Assuming foldable APIs exist everywhere.** They are Chromium-only as of 2026-10 [21].

---

## Sources

[1] Apple. (2026). *Layout*. Human Interface Guidelines (change log entry September 9, 2026). https://developer.apple.com/design/human-interface-guidelines/layout
[2] Android Developers. (2026, September 22). *Use window size classes*. https://developer.android.com/develop/ui/compose/layouts/adaptive/use-window-size-classes (verified 2026-10)
[3] Tailwind Labs. (n.d.). *Responsive design* (Tailwind CSS v4.3). https://tailwindcss.com/docs/responsive-design (verified 2026-10)
[4] Bootstrap. (n.d.). *Breakpoints* (v5.3). https://getbootstrap.com/docs/5.3/layout/breakpoints/ (verified 2026-10)
[5] Microsoft. (n.d.). *Layout*. Fluent 2 Design System. https://fluent2.microsoft.design/layout (verified 2026-10)
[6] IBM. (n.d.). *2x Grid: Overview*. Carbon Design System. https://carbondesignsystem.com/elements/2x-grid/overview/ (verified 2026-10)
[7] MDN Web Docs. (n.d.). *Using container size and style queries*. Mozilla. https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_size_and_style_queries
[8] MDN Web Docs. (n.d.). *&lt;length&gt;*. Mozilla. https://developer.mozilla.org/en-US/docs/Web/CSS/length
[9] caniuse.com. (n.d.). *CSS Container Queries (Size)*. https://caniuse.com/css-container-queries (verified 2026-10)
[10] caniuse.com. (n.d.). *CSS Container Query Units*. https://caniuse.com/css-container-query-units (verified 2026-10)
[11] caniuse.com. (n.d.). *CSS Container Style Queries*. https://caniuse.com/css-container-queries-style (verified 2026-10)
[12] Roselli, A. (2019, December 6; updated 2025, October 20). *Responsive Type and Zoom*. https://adrianroselli.com/2019/12/responsive-type-and-zoom.html
[13] MDN Web Docs. (n.d.). *CSS logical properties and values*. Mozilla. https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values
[14] caniuse.com. (n.d.). *CSS Logical Properties*. https://caniuse.com/css-logical-props (verified 2026-10)
[15] MDN Web Docs. (n.d.). *&lt;meta name="viewport"&gt;*. Mozilla. https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meta/name/viewport
[16] MDN Web Docs. (n.d.). *env()*. Mozilla. https://developer.mozilla.org/en-US/docs/Web/CSS/env
[17] caniuse.com. (n.d.). *Small, Large, and Dynamic viewport units*. https://caniuse.com/viewport-unit-variants (verified 2026-10)
[18] Android Developers. (2026, September 22). *Build adaptive navigation*. https://developer.android.com/develop/ui/compose/layouts/adaptive/build-adaptive-navigation (verified 2026-10)
[19] MDN Web Docs. (2025, November 19). *Viewport Segments API*. Mozilla. https://developer.mozilla.org/en-US/docs/Web/API/Viewport_segments_API
[20] MDN Web Docs. (n.d.). *Using the Viewport Segments API*. Mozilla. https://developer.mozilla.org/en-US/docs/Web/API/Viewport_segments_API/Using
[21] caniuse.com. (n.d.). *CSS at-rule: @media: horizontal-viewport-segments*. https://caniuse.com/mdn-css_at-rules_media_horizontal-viewport-segments (verified 2026-10)
[22] W3C WAI. (n.d.). *Understanding SC 1.3.2: Meaningful Sequence* (WCAG 2.2). https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence.html
[23] caniuse.com. (n.d.). *CSS property: reading-flow*. https://caniuse.com/mdn-css_properties_reading-flow (verified 2026-10)
[24] MDN Web Docs. (n.d.). *Responsive images*. Mozilla. https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Responsive_images
[25] caniuse.com. (n.d.). *CSS property: aspect-ratio*. https://caniuse.com/mdn-css_properties_aspect-ratio (verified 2026-10)
[26] W3C WAI. (n.d.). *Understanding SC 1.4.10: Reflow* (WCAG 2.2). https://www.w3.org/WAI/WCAG22/Understanding/reflow.html
[27] Roselli, A. (2020, November 17; updated 2026, October 5). *Under-Engineered Responsive Tables*. https://adrianroselli.com/2020/11/under-engineered-responsive-tables.html
[28] Pernice, K., & Budiu, R. (2016, June 26). *Hamburger Menus and Hidden Navigation Hurt UX Metrics*. Nielsen Norman Group. https://www.nngroup.com/articles/hamburger-menus/
