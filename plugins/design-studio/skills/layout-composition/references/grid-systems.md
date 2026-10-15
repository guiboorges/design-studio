# Grid Systems

> **Scope:** How to choose, build, and implement grids (manuscript, column, modular, hierarchical, baseline) for print, editorial, UI, web, social, and out-of-home, including spacing tokens and CSS Grid/subgrid recipes.
> **Last verified:** 2026-10 (browser support, framework and design-system values)
> **Used by:** ui-designer, editorial-designer, design-system-architect, design-engineer, print-ooh-designer, social-media-designer, creative-director, design-critic

## How to use this file

1. Use the **decision table** to pick the grid type for the job.
2. Use **Build a grid from content** to derive the grid from body text and images. Do not start from a template.
3. For screens, set the **spacing scale** (4/8 base) and the **column grid**, then implement with the **CSS recipes**.
4. For social and OOH, read the platform safe zones and viewing distances first. They live in `media-specs` → `social-formats.md` and `media-specs` → `out-of-home.md`. The grid divides the *safe area*, not the full canvas.

Related: hierarchy and whitespace inside the grid are in `hierarchy-balance-whitespace.md`. Breakpoints, container queries, and fluid spacing are in `responsive-layout.md`. The type scale and baseline values are in `typography` → `scale-and-rhythm.md`. Müller-Brockmann's life, works, and principles are in `design-history` → `masters-graphic-modernist.md`. This file covers the working method only.

---

## 1. Decision table

| Job | Grid type | Typical setup | Why |
|-----|-----------|---------------|-----|
| Novel, report, long article, legal doc, blog post | Manuscript (single column) | One text block, measure 45–75 characters, generous margins | Continuous reading needs one measure, not layout options |
| Website, app screen, dashboard | Column grid | 4 columns on phones, 8 on tablets, 12 on desktop (or Carbon's 4/8/16) [1][2] | Flexible spans, maps directly to CSS Grid |
| Magazine, catalog, annual report, editorial web | Modular (columns + rows = fields) | 6–12 columns × 4–8 rows on a baseline | Images and text blocks snap to fields, so pages vary but stay related |
| Landing page hero, poster, single-screen composition, homepage with one star module | Hierarchical | Columns of unequal width, set by content importance | Content has an obvious rank, and equal modules would flatten it |
| Any multi-column text layout, especially print | Baseline grid | Increment = body line height (print) or 4px (UI) [3] | Lines across columns align; vertical rhythm |
| Social carousel, ad set, template system | Modular inside the safe zone | 2–6 columns × 2–6 rows | Repeated slots across many frames |
| Billboard, transit poster | Simple hierarchical or 2–3 field modular | Few, large fields | Read in seconds at distance. See `media-specs` → `out-of-home.md` |
| Data table, spreadsheet-like UI | Column grid per data type, 4px vertical rhythm | Column widths set by content, not by a 12-column template | Numbers must align on decimals and units |

**Rule:** Most real products combine grids. A typical site uses a 12-column page grid, a manuscript grid inside the article body, a baseline (or 4px) vertical rhythm, and modular card grids in listings.

---

## 2. Anatomy

| Part | Definition | Typical values |
|------|-----------|----------------|
| **Format** | The page, screen, or canvas | A4, 1080 × 1350, 1440px viewport |
| **Margins** | Space between the format edge and the live area | Print: often asymmetric (see canons below). UI: 16px on phones, 24–80px on desktop. Carbon puts 16px of padding inside every column [2] |
| **Live area / type area** | Where content goes | Print: set by the margins (the ninths canon in section 5 leaves 4/9 of the page area). Web: a max-width container, often 1200–1440px |
| **Columns** | Vertical divisions of the live area | 4/8/12 on screens. Fluent notes 12 divides into halves, thirds, fourths, and sixths [1] |
| **Gutters** | Space between columns (and between rows in modular grids) | UI: a multiple of the base unit [1], usually 16–32px. Print: about the line height (for example 4–5 mm at 10/12 pt) |
| **Rows / flowlines** | Horizontal divisions. Flowlines are the strongest horizontal alignments, where headings and images start | Set on a whole number of baselines |
| **Modules / fields** | One column-by-row cell of a modular grid | Height = a whole number of text lines |
| **Spatial zones** | Groups of fields given one role (the "image zone," the "caption zone") | Defined per template |
| **Markers** | Fixed positions for folios, running heads, page numbers, logos | Always in the margin or a dedicated zone |
| **Baseline grid** | Equally spaced horizontal lines that text baselines sit on | Print: equals the body leading. UI: 4px [3] |

**Column-width formula** (any medium):

```
column = (live_width − (n − 1) × gutter) / n
live_width = format_width − margin_inner − margin_outer
```

Examples:
- Desktop container 1200px, 12 columns, 24px gutters: (1200 − 11 × 24) / 12 = **78px** per column.
- Phone 375px, 16px margins, 4 columns, 16px gutters: (375 − 32 − 48) / 4 = **73.75px**. Fractional widths are fine in CSS (`1fr`). Do not round the gutters to "fix" them.
- A4 (210mm), 20mm inner and 15mm outer margins, 6 columns, 4mm gutters: (175 − 20) / 6 = **25.8mm**.

---

## 3. Grid types in detail

### 3.1 Manuscript (single column)
- **Rule:** One text block sized by the measure, then margins sized by the canon or the screen.
- **Numbers:** Measure 45–75 characters per line for body text. The rationale and the research on line length are in `typography` → `legibility-by-medium.md`. On screens, set `max-inline-size: 65ch` (approximate, since `ch` is the width of "0" in that font).
- **Apply:** Print: book pages via the canons in section 5. Web: article body inside a wider page grid. Images can "break out" to the page grid (see the full-bleed recipe in section 8). App: settings and long-form text screens.
- **Limit:** Poor for content that needs side-by-side comparison, or many small items.

### 3.2 Column grid
- **Rule:** Equal columns with fixed gutters. Every element spans a whole number of columns.
- **Numbers:** Screens: 4 / 8 / 12 columns are the common progression. Carbon uses 4 / 8 / 16 [2]. Bootstrap's breakpoints were chosen to "comfortably hold containers whose widths are multiples of 12" [4].
- **Apply:** UI and web: the default. Print: newspapers (many narrow columns), reports (2–3 columns). Social: a 4- or 6-column grid inside the safe area keeps text and logos consistent across a carousel.
- **Limit:** A 12-column grid with no rows encourages only vertical alignment. Add a spacing scale or baseline for vertical order.

### 3.3 Modular grid
- **Rule:** Columns plus rows make fields. Images and text blocks occupy whole fields. Row gaps equal one or more text lines, so a caption fits under an image.
- **Numbers:** Field height = *f* lines. Type-area height in lines = *r* × *f* + (*r* − 1) × *g*, where *r* = rows and *g* = row gap in lines. Example: 6 rows × 9 lines with 1-line gaps = 59 lines. At 12 pt leading, that is a 708 pt (about 250 mm) type area.
- **Apply:** Magazine and catalog spreads, editorial homepages, bento-style dashboards (see `visual-styles` → `bento-grid.md`), poster series, social templates.
- **Limit:** Too many fields produce timid, fragmented layouts. Müller-Brockmann shows type areas of 8, 20, and 32 fields and warns about misuse (see `design-history` → `masters-graphic-modernist.md`). Start coarse (6–12 fields) unless content really is granular.

### 3.4 Hierarchical grid
- **Rule:** Column widths and positions come from the content's rank, not from equal division. Draw the content blocks first, then rationalize their edges into a small set of alignments.
- **Numbers:** Typical ratios: 1:2 (sidebar : main), 1:2:1 (rail : main : rail), 2:1 (feature : list). In CSS: `grid-template-columns: 1fr 2fr 1fr` or fixed rails plus a fluid main.
- **Apply:** Web: hero sections, homepages with one dominant story, app shells (nav rail + content + inspector). Print: posters and covers. OOH: billboards, which are almost always hierarchical.
- **Limit:** Harder to keep consistent across many pages. Document the alignments as named lines (section 8) so others can reuse them.

### 3.5 Baseline grid
- **Rule:** Every line of text, and every element height, sits on a fixed vertical increment.
- **Numbers:** Print: increment = body leading (for example 12 pt for 9.5/12). Headings take whole multiples of it (24, 36 pt), or their line height is chosen so space above plus line height totals a multiple. UI: 4px baseline with an 8px spacing grid is a common practitioner pairing [3]. Android aligns small elements such as icons and type to a 4dp grid and layout to an 8dp grid [5].
- **Apply:** Print: essential in multi-column text so lines align across columns and pages (and show-through on thin paper lines up). Web: approximate it. Use line heights that are multiples of 4px, spacing in the 4/8 scale, and the `rlh` unit and `text-box` trimming (section 8.6).
- **Limit:** A strict baseline on the web breaks easily with user font scaling, images of arbitrary height, and translated text. Treat it as rhythm, not a pixel contract. Never block user text resizing to protect a baseline.

---

## 4. Build a grid from content (method)

This is the working procedure, in the spirit of Müller-Brockmann's *Grid Systems* (summarized with sources in `design-history` → `masters-graphic-modernist.md`). It works for print and screen.

1. **Inventory content.** List every content type and its range: body text length, heading levels, image counts and aspect ratios, captions, tables, data, ads, CTAs. Use real content, including the longest headline and the longest translation.
2. **Set body type first.** Choose size and leading for the reading distance and medium (`typography` → `legibility-by-medium.md`). The leading becomes the baseline unit (print). In UI it becomes the line-height token, typically 24px for 16px body, which is a multiple of 4.
3. **Set the measure.** 45–75 characters. The measure sets the narrowest text column.
4. **Choose the column count.** Pick the count where the text column is a whole number of grid columns, and the smallest image or card is one or two columns wide. On screens, keep 12 (or 16) on desktop for divisibility, and reduce on smaller widths (`responsive-layout.md`).
5. **Set gutters.** Print: about one line of leading (for example 4–5 mm at 12 pt). UI: one step of the spacing scale (16, 24, or 32px).
6. **Set rows (modular grids).** Field height = a whole number of baselines. Row gap = 1 or more baselines.
7. **Set margins.** Print: use a canon (section 5) or derive from binding and hand-holding needs. Screen: the outer margin should be at least the gutter. On desktop, wide margins come from the max-width container, not from padding.
8. **Map content to fields.** Define the allowed spans: images at 1, 2, 3, 4 fields, or 3, 4, 6, 8, 12 columns. Text at 4–7 columns on desktop. Write them down as the template rules.
9. **Stress-test.** Lay out the 3 hardest pages or screens: most text, most images, longest translation, empty state. If an element fits nowhere, fix the grid, not the element.
10. **Document.** Record columns, gutters, margins, baseline, allowed spans, and named lines/areas. In a design system this becomes layout tokens plus CSS (section 8).

**Critique check:** For every element, ask which column edge, flowline, or baseline it aligns to. If the answer is "none," either the grid is wrong or the element is.

---

## 5. Editorial and book grids

### 5.1 Canons of page construction (print books)
These are historical construction methods for placing a text block on a page. They are presented accurately below, and their historical use is a claim by their 20th-century authors (mainly Tschichold and Rosarivo), not a measured fact about every medieval book [6].

| Canon | What it does | Result |
|-------|--------------|--------|
| **Van de Graaf canon** (J. A. van de Graaf, 1946) | A geometric construction with the diagonals of the page and the two-page spread. Tschichold popularized it in *The Form of the Book*. It works for any page proportion [6]. | Margins are 1/9 and 2/9 of the page dimensions. The text block has the same proportions as the page [6]. |
| **Rosarivo's division by ninths** (*Divina proporción tipográfica*, 1947) | Divide page width and height into 9 parts each. Rosarivo argued Gutenberg used a 2:3 "secret number" [6]. | Inner margin = 1/9 width, outer = 2/9 width, top = 1/9 height, bottom = 2/9 height. |
| **Tschichold's "golden canon"** | Applies the construction to a 2:3 page [6]. | Text block height equals page width. Margins inner : top : outer : bottom = **2 : 3 : 4 : 6**. The text block is 2/3 of the page in each dimension [6]. |

**Formula (ninths, any page):**
```
inner = W/9   outer = 2W/9   top = H/9   bottom = 2H/9
text block = (2/3)W × (2/3)H
```
Example on A4 (210 × 297 mm): inner 23.3, outer 46.7, top 33, bottom 66 mm. Text block 140 × 198 mm.

- **Apply:** Literary books, poetry, art catalogs, "bookish" editorial web (as proportions for the article column and margins).
- **Limit:** The ninths canon gives generous margins: the text block is only 4/9 of the page area. Paperbacks, textbooks, and reports usually need tighter margins for cost and content. The name "golden canon" does not mean it uses the golden ratio: the page is 2:3. Treat claims that historic books follow these proportions "exactly" as the authors' assertions [6]. See also the golden-ratio myths in `hierarchy-balance-whitespace.md`.

### 5.2 Magazine grids
- **Rule:** Use a flexible grid whose column count has many divisors, so one grid supports 1-, 2-, 3-, and 4-column stories.
- **Common setups:**

| Grid | Supports | Notes |
|------|----------|-------|
| 12 columns | 1, 2, 3, 4, 6 equal text columns | The most flexible. Divides into halves, thirds, fourths, and sixths [1] |
| 6 columns | 1, 2, 3 text columns, 1-column captions | Simpler. Good for small formats |
| 5 columns | 2 text columns + 1 margin/caption column | Classic "scholar's margin" for notes, pull quotes, captions |
| 12 × 8 modular | Images in standard field multiples | Catalogs and image-heavy features |

- **Procedure:** Body text at 2–3 grid columns for news briefs, 4 grid columns for features (of 12), headline spans set by impact. Keep folios, running heads, and section markers in fixed positions on every page. Let openers break the grid deliberately (full-bleed image, oversized headline), and return to the grid on following pages.
- **Apply (web editorial):** Use the same 12-column grid with a manuscript body column of about 7–8 columns and breakout spans for images. See `visual-styles` → `editorial-magazine-web.md` for styling.
- **Limit:** A flexible grid is not permission to use every option on every spread. Pick 2–3 column patterns per issue section.

---

## 6. The 8-point grid and 4-point baseline (UI)

### 6.1 The rule
Use multiples of 8 for dimensions, padding, and margins of blocks and components. Use 4 for small adjustments, icons, and type line heights [3][5].

### 6.2 Origin and status
- The 8pt grid is a practitioner convention. A widely cited write-up is Spec's "The 8-Point Grid" (undated, no author listed). It recommends multiples of 8 for "dimensions, padding, and margin of both block and inline elements," and pairing the 8pt UI grid with a 4pt baseline grid [3].
- Android's design guidance states: "Android UI utilizes an 8 dp grid for layout, components, and spacing," with a 4dp grid for icons, type, and some component internals [5].
- Fluent 2 uses a 4px base unit with a ramp of 0, 2, 4, 6, 8, 10, 12, 16, 20, 24, 28, 32, 36, 40, 48, 52, 56. The 2, 6, and 10 steps account for icon padding [1].
- Carbon's "2x Grid" uses an 8px square "mini unit" as its basic geometry [2].

### 6.3 Why 4 and 8 (the arithmetic, checked)
Android's density buckets are 1x (mdpi), 1.5x (hdpi), 2x (xhdpi), 3x (xxhdpi), and 4x (xxxhdpi) [5]. Spec's guide works at @1x and scales to @2x and @3x for Apple screens [3]. Converting a value to device pixels:

| Value (pt/dp) | ×1 | ×1.5 | ×2 | ×3 | ×4 |
|---------------|----|------|----|----|----|
| 4 | 4 | **6** | 8 | 12 | 16 |
| 8 | 8 | **12** | 16 | 24 | 32 |
| 5 | 5 | **7.5** | 10 | 15 | 20 |
| 6 | 6 | **9** | 12 | 18 | 24 |
| 10 | 10 | **15** | 20 | 30 | 40 |
| 15 | 15 | **22.5** | 30 | 45 | 60 |

- **What the arithmetic shows:** Any **even** value lands on a whole pixel at 1.5x. Odd values (5, 15) produce half pixels at 1.5x. At 1x, 2x, 3x, and 4x, every whole value is already whole. So "8 divides cleanly at 1.5x" is true, but so does 6 or 10.
- **The real benefit** is fewer decisions and consistent rhythm. Spec argues that one set of measurements gives a more consistent UI and removes most spacing decisions [3]. An 8 base gives clearly distinct steps (8, 16, 24, 32), and 4 gives a half step when 8 is too coarse.
- **Grade:** "8pt grids render sharper" is partly true. Half-pixel edges can blur on 1x and 1.5x screens, but text and anti-aliased shapes rarely sit on whole pixels anyway. Treat the 8pt grid as a consistency system **[E2: practitioner consensus and platform guidance]**, not a perception finding.

### 6.4 Hard grid vs. soft grid
- **Hard grid:** elements placed in 8pt cells, with transparent containers so everything snaps like bricks. Suits Material-style systems [3].
- **Soft grid:** measure 8pt increments *between* elements without a visible grid. Faster, and suits iOS, where many system elements don't follow an even grid [3].
- **Apply:** Use a soft grid in Figma (8px nudge, 4px for fine work). Enforce the scale through spacing tokens, not by drawing the grid.

### 6.5 Type on the 4pt baseline
Line heights in multiples of 4: 16/24, 14/20, 12/16, 20/28, 24/32, 32/40, 40/48. Full scale guidance is in `typography` → `scale-and-rhythm.md`.

- **Limit:** Platform elements (iOS navigation bars, system controls) have their own sizes. Don't force them onto your grid. Align your content to them instead. Touch-target sizes are in `media-specs` → `digital-platforms.md`.

---

## 7. Spacing scales as tokens

### 7.1 Rule
Define one spacing scale as primitive tokens, map it to semantic tokens, and use only semantic tokens in components.

### 7.2 Reference scale (Carbon, verified 2026-10) [7]

| Token | rem | px |
|-------|-----|----|
| `$spacing-01` | 0.125 | 2 |
| `$spacing-02` | 0.25 | 4 |
| `$spacing-03` | 0.5 | 8 |
| `$spacing-04` | 0.75 | 12 |
| `$spacing-05` | 1 | 16 |
| `$spacing-06` | 1.5 | 24 |
| `$spacing-07` | 2 | 32 |
| `$spacing-08` | 2.5 | 40 |
| `$spacing-09` | 3 | 48 |
| `$spacing-10` | 4 | 64 |
| `$spacing-11` | 5 | 80 |
| `$spacing-12` | 6 | 96 |
| `$spacing-13` | 10 | 160 |

Carbon says the scale "complements the 2x Grid and typography scale by using multiples of two, four, and eight." Small steps handle detail-level relationships, and large steps control density [7].

### 7.3 Ready-to-use tokens (CSS)

```css
:root {
  /* Primitives: 4px base, steps grow as the values grow */
  --space-0: 0;
  --space-1: 0.25rem;  /* 4  */
  --space-2: 0.5rem;   /* 8  */
  --space-3: 0.75rem;  /* 12 */
  --space-4: 1rem;     /* 16 */
  --space-5: 1.5rem;   /* 24 */
  --space-6: 2rem;     /* 32 */
  --space-7: 3rem;     /* 48 */
  --space-8: 4rem;     /* 64 */
  --space-9: 6rem;     /* 96 */
  --space-10: 10rem;   /* 160 */

  /* Semantic: what the space means */
  --space-inline-gap: var(--space-2);      /* icon to label */
  --space-stack-tight: var(--space-2);     /* label to field */
  --space-stack: var(--space-4);           /* between fields, list items */
  --space-group: var(--space-6);           /* between groups */
  --space-section: var(--space-8);         /* between page sections */
  --space-gutter: var(--space-5);          /* grid gutter */
  --space-page-margin: var(--space-4);     /* phone margin */
}
```

- **Rule for choosing steps:** Space *within* a group must be clearly smaller than space *between* groups. Going up at least two steps (for example 8 to 16, or 16 to 32) makes the grouping readable. This is the proximity principle. See `cognitive-psychology` → `gestalt.md`.
- **Use rem, not px**, for spacing that sits next to text, so spacing scales with the user's font size.
- **Fluid spacing:** `clamp()`-based tokens for section spacing are in `responsive-layout.md`.
- **Limit:** A scale with too many steps (20+) is no scale. 10–14 steps cover nearly every product.

---

## 8. CSS Grid recipes

All recipes use standard CSS Grid. Subgrid support is noted separately.

### 8.1 Page container with named lines and full-bleed breakouts

```css
.page {
  --margin: clamp(1rem, 5vw, 5rem);
  --max: 75rem; /* 1200px */
  display: grid;
  grid-template-columns:
    [full-start] minmax(var(--margin), 1fr)
    [content-start] min(100% - 2 * var(--margin), var(--max)) [content-end]
    minmax(var(--margin), 1fr) [full-end];
}
.page > * { grid-column: content; }       /* default: in the container */
.page > .bleed { grid-column: full; }     /* edge-to-edge image or band */
```

Lines named `content-start` / `content-end` create an implicit area called `content`, so `grid-column: content` works.

### 8.2 12-column grid with spans

```css
.grid {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  column-gap: var(--space-gutter);
}
.span-4  { grid-column: span 4; }
.span-8  { grid-column: span 8; }
.article-body { grid-column: 3 / span 8; }  /* manuscript column inside 12 */
```

Use `minmax(0, 1fr)`, not `1fr`. A plain `1fr` track has an automatic minimum, so a long URL or wide image can push a column wider than its share.

### 8.3 Named areas (hierarchical app shell)

```css
.shell {
  display: grid;
  grid-template-columns: 16rem minmax(0, 1fr) 20rem;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "nav header aside"
    "nav main   aside"
    "nav footer aside";
  min-block-size: 100dvh;
}
.shell > nav    { grid-area: nav; }
.shell > header { grid-area: header; }
.shell > main   { grid-area: main; }
.shell > aside  { grid-area: aside; }
.shell > footer { grid-area: footer; }

@media (width < 60rem) {
  .shell {
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: auto;
    grid-template-areas: "header" "main" "aside" "footer" "nav";
  }
}
```

**Limit:** Areas move boxes visually, not in the DOM. Screen readers and keyboard focus follow source order. Keep source order meaningful (`responsive-layout.md`, reading order section).

### 8.4 Auto-fit card grid (no media queries)

```css
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 16rem), 1fr));
  gap: var(--space-5);
}
```

- `auto-fit` collapses empty tracks to 0px, so a few items stretch to fill the row. `auto-fill` keeps empty tracks, so items keep their size and leave space at the end [8]. Use `auto-fill` when a short last row or a single item should not balloon.
- `min(100%, 16rem)` stops overflow when the container is narrower than 16rem.
- Only one auto-repeat `repeat()` is allowed per track list, and it cannot be combined with fully intrinsic or flexible sizes [8].

### 8.5 Subgrid: aligned card internals

```css
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 18rem), 1fr));
  gap: var(--space-5);
}
.card {
  display: grid;
  grid-row: span 3;               /* image, title, body */
  grid-template-rows: subgrid;    /* share row tracks with siblings */
  row-gap: var(--space-3);        /* override the inherited gap */
}

@supports not (grid-template-rows: subgrid) {
  .card { grid-template-rows: auto auto 1fr; }
}
```

Behavior (MDN) [9]:
- A subgrid uses the parent's tracks. Line numbers restart at 1 inside the subgrid.
- Parent line names pass into the subgrid. The subgrid can add its own (`grid-template-columns: subgrid [a] [b] [c]`).
- Parent `gap` is inherited unless the subgrid sets its own.
- With subgrid in both dimensions, no implicit tracks are created. Extra items go into the last track, so match `span` to the number of children.

**Support (verified 2026-10):** Chrome and Edge 117, Firefox 71, Safari 16.0 (iOS 16.0), Samsung Internet 24. caniuse lists 94.43% global usage [10]. MDN marks subgrid **Baseline Widely available**, working across major browsers since September 2023 [9]. Keep the `@supports` fallback for older iOS devices.

**Apply:** Card titles and buttons that line up across a row, form labels and inputs aligned across fieldsets, article components that align to the page's 12-column grid (`grid-template-columns: subgrid` on a full-width section).

### 8.6 Baseline rhythm on the web

```css
:root {
  --baseline: 0.25rem;                 /* 4px */
  font-size: 100%;
  line-height: 1.5;                    /* 16/24 */
}
h1 { font-size: 2.5rem;  line-height: 3rem; }    /* 40/48 */
h2 { font-size: 1.75rem; line-height: 2.25rem; } /* 28/36 */
p, ul, ol { margin-block: 0 1rlh; }  /* one root line of space */

/* Trim half-leading so text boxes start at cap height and end at baseline */
h1, h2, .card-title { text-box: trim-both cap alphabetic; }

/* Debug overlay: 4px baseline */
.debug-baseline {
  background-image: linear-gradient(to bottom, rgb(255 0 0 / 0.2) 1px, transparent 1px);
  background-size: 100% var(--baseline);
}
```

- **`rlh`** (root line height): Chrome/Edge 111, Firefox 120, Safari 16.4. caniuse lists 94.59% global usage (verified 2026-10) [11].
- **`text-box` / `text-box-trim` / `text-box-edge`**: Chrome 133, Edge 132, Firefox 154, Safari 18.2. caniuse lists 87.48% global usage (verified 2026-10) [12]. Use it as a progressive enhancement. Without it, the half-leading above and below text remains.
- **Limit:** Images, embeds, and user font scaling break strict baselines. Snap component heights to 4px where you control them, and accept drift elsewhere.

---

## 9. Grids for social, posters, and billboards

| Medium | Grid approach | Rule |
|--------|--------------|------|
| **Social posts and carousels** | 4- or 6-column grid with 2–6 rows, drawn **inside** the platform safe zone | Get safe zones and canvas sizes from `media-specs` → `social-formats.md` (verified there). Keep logo, headline, and CTA positions identical across a carousel. Let images bleed past the safe zone, but never text or logos. |
| **Stories / Reels / TikTok covers** | Hierarchical: one headline zone, one subject zone | Platform UI covers the top and bottom bands. Again, see `social-formats.md`. |
| **Posters (A-series, 50 × 70 cm, etc.)** | Modular, 4–8 columns × 6–10 rows, or a hierarchical grid built around one image | Build the grid on the format proportion. For ISO A-series (√2), halving the format keeps the proportion, so one grid scales across A4–A0. See `hierarchy-balance-whitespace.md` for the √2 facts. |
| **Billboards and transit (OOH)** | 2–3 large fields, hierarchical | Maximum one image, one line of copy, one logo. Letter height and word counts by viewing distance are in `media-specs` → `out-of-home.md`. Glance-based attention is in `cognitive-psychology` → `attention-and-scanning.md`. |
| **Presentation slides** | 12-column grid with title, content, and footer zones | Keep title and footer flowlines fixed across slides. |

**Procedure for a campaign that spans formats:** define one master grid relationship (for example, "headline spans 4/6 of the width, logo sits in the bottom-right field"). Re-express it per format as proportions, not pixels. Each format's grid still sits inside its own safe zone.

---

## 10. Common mistakes

- **Starting from a 12-column template** without checking content. Columns should come from measure and image sizes (section 4).
- **Using `1fr` instead of `minmax(0, 1fr)`**, so long words or wide media blow out a column.
- **Gutters that differ from the spacing scale** (for example 20px gutters on an 8px system). Every gutter and margin should be a token.
- **Treating the visible grid as decoration.** Swiss-revival layouts that draw grid lines everywhere but don't align to them (see `visual-styles` → `swiss-international.md`).
- **Ignoring the vertical axis.** Column-aligned layouts with random vertical spacing look unfinished. Use the spacing scale or baseline.
- **Forcing platform components onto a custom grid** (iOS bars, Android system UI). Align to them instead.
- **Placing text in the full social canvas** instead of the safe area.
- **Reordering content with grid areas** so visual order no longer matches DOM order. This can fail WCAG 1.3.2 when meaning depends on order (see `responsive-layout.md`).
- **Too many fields** in a modular grid, which leads to fragmented, timid layouts.
- **Calling a 2:3 page with ninths margins "golden ratio."** The golden canon is named for its reputation, not for φ.
- **Claiming the 8pt grid is "scientifically proven."** It is a consistency convention [E2], justified by arithmetic and team efficiency.

---

## Sources

[1] Microsoft. (n.d.). *Layout*. Fluent 2 Design System. https://fluent2.microsoft.design/layout (verified 2026-10)
[2] IBM. (n.d.). *2x Grid: Overview*. Carbon Design System. https://carbondesignsystem.com/elements/2x-grid/overview/ (verified 2026-10)
[3] Spec. (n.d.). *The 8-Point Grid*. Spec.fm. https://spec.fm/specifics/8-pt-grid (no author or date given on page; accessed 2026-10)
[4] Bootstrap. (n.d.). *Breakpoints* (v5.3). https://getbootstrap.com/docs/5.3/layout/breakpoints/ (verified 2026-10)
[5] Android Developers. (n.d.). *Grids and units*. https://developer.android.com/design/ui/mobile/guides/layout-and-content/grids-and-units (verified 2026-10)
[6] Wikipedia contributors. (n.d.). *Canons of page construction*. Wikipedia. https://en.wikipedia.org/wiki/Canons_of_page_construction (secondary source; it cites van de Graaf 1946, Tschichold 1991 *The Form of the Book*, Rosarivo 1953, Hendel 1998; accessed 2026-10)
[7] IBM. (n.d.). *Spacing: Overview*. Carbon Design System. https://carbondesignsystem.com/elements/spacing/overview/ (verified 2026-10)
[8] MDN Web Docs. (n.d.). *repeat()*. Mozilla. https://developer.mozilla.org/en-US/docs/Web/CSS/repeat
[9] MDN Web Docs. (n.d.). *Subgrid*. Mozilla. https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Subgrid (verified 2026-10)
[10] caniuse.com. (n.d.). *CSS Subgrid*. https://caniuse.com/css-subgrid (verified 2026-10)
[11] caniuse.com. (n.d.). *CSS unit: rlh*. https://caniuse.com/mdn-css_types_length_rlh (verified 2026-10)
[12] caniuse.com. (n.d.). *CSS text-box-trim*. https://caniuse.com/css-text-box-trim (verified 2026-10)
