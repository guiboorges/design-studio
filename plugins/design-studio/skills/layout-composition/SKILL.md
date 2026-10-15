---
name: layout-composition
description: Use whenever a task involves laying out or critiquing a page, screen, poster, post, slide, or billboard: grids, hierarchy, spacing, alignment, balance, whitespace, or responsive behavior. Contains: grid types with a decision table and a 10-step method to build a grid from content, canons of page construction, magazine grids, 8-pt and 4-pt systems, spacing tokens, CSS Grid and subgrid recipes, the hierarchy procedure and levers, visual weight and balance, whitespace research (corrected), density for expert vs. consumer UI, golden ratio and rule of thirds evidence-graded, single-glance composition, and responsive layout (content-first breakpoints, container queries, fluid spacing, RTL, safe areas, dvh, foldables, reading order, responsive images, 320px reflow, QA checklist).
user-invocable: false
---

# Layout and Composition

Layout decides what people see first, what belongs together, and whether the page survives real content at
every size. This skill gives you the procedures and values to build that structure on purpose.

Perception rules (proximity, similarity, common region) live in `cognitive-psychology` → `gestalt.md`.
Scanning patterns are in `attention-and-scanning.md`. Type sizes and measure are in `typography`.
Platform sizes and safe zones are in `media-specs`.

## Non-negotiable rules

1. **Build the grid from the content, not from a template.** Inventory real content (longest headline,
   longest translation, empty state), set body type and measure first, then derive columns, gutters, rows,
   and margins. Stress-test the 3 hardest pages. If an element fits nowhere, fix the grid.
2. **One dominant element.** Rank the content as 1 (the one thing), 2 (2–4 items), and 3 (the rest). Rank 1
   differs on at least two levers. If two items share rank 1, the brief is unresolved.
3. **Cheap levers first.** Position and space come before color and decoration. Size alone fails when
   everything is big. Never use color alone.
4. **Inside < between.** Spacing inside a group is clearly smaller than spacing between groups. Go up at least
   two steps on the spacing scale (e.g. 8 inside, 24 between groups, 64 between sections).
5. **Every element aligns to something.** A column edge, a flowline, or a baseline. In critique, ask "what does
   this align to?" If the answer is "none," the grid or the element is wrong.
6. **Content-first breakpoints, few of them.** 3–5 page-level breakpoints in `rem`/`em`, where the content
   breaks. Push the rest into container queries and intrinsic sizing. Start at 320 CSS px (WCAG reflow).
7. **DOM order = reading order = focus order** at every breakpoint. Use CSS for visual reordering only when the
   reading sequence doesn't change.
8. **Proportion "laws" are heuristics.** The golden ratio and the rule of thirds are [E3] as rules of beauty.
   Use them as construction tools if they help, never as evidence.

## Choose the grid

| Job | Grid | Typical setup |
|---|---|---|
| Long reading (article, report, book) | Manuscript | One column, 45–75 characters, generous margins |
| Website, app, dashboard | Column | 4 columns on phones, 8 on tablets, 12 on desktop (or Carbon 4/8/16); gutters 16–32px |
| Magazine, catalog, annual report, editorial web | Modular | 6–12 columns × 4–8 rows on a baseline |
| Hero, poster, homepage with one star module | Hierarchical | Unequal columns set by importance |
| Multi-column text (especially print) | Baseline | Increment = body leading (print) or 4px (UI) |
| Social carousel, ad set, templates | Modular inside the safe zone | 2–6 × 2–6 fields |
| Billboard, transit poster | Simple hierarchical | Few, large fields; read in seconds |
| Data tables | Column per data type | Widths from content; numbers aligned on decimals |

Most products combine grids. A typical site has a 12-column page grid, a manuscript column for article bodies,
4px vertical rhythm, and modular card grids in listings (`grid-systems.md` §1).

## Quick values

| Need | Value | File |
|---|---|---|
| UI spacing rule | Multiples of 8 for blocks and components; 4 for small adjustments, icons, line heights | `grid-systems.md` §6 |
| Why 8/4 | Convention and divisibility. Any even value lands on whole pixels at 1.5×, so it isn't magic | `grid-systems.md` §6.3 |
| Spacing tokens | Ready CSS scale plus Carbon's verified scale | `grid-systems.md` §7 |
| Hierarchy steps | ≤ 3 type sizes per view, ≤ 2 large elements (NN/g) [E2] | `hierarchy-balance-whitespace.md` §1 |
| Headline vs. body | 2–4× on screens, 4–10× on posters | `hierarchy-balance-whitespace.md` §1.2 |
| Reading-text inset | ≥ 16px on phones, even in dense apps | `hierarchy-balance-whitespace.md` §5.2 |
| Window size classes (Android, verified 2026-10) | Compact < 600, medium 600–839, expanded 840–1199, large 1200–1599, extra-large ≥ 1600 dp | `responsive-layout.md` §2.3 |
| CSS support (2026-10) | Subgrid, container queries, svh/lvh/dvh in all major browsers; `reading-flow` Chromium only | `responsive-layout.md`, `grid-systems.md` |

## Procedures

- **Build a grid** (`grid-systems.md` §4): inventory content → body type → measure → columns → gutters → rows
  → margins → allowed spans → stress-test → document as tokens + CSS.
- **Set hierarchy** (`hierarchy-balance-whitespace.md` §1): rank content → dominant element → step down in clear
  intervals → apply levers → group → squint/blur test → 5-second test.
- **Check balance** (`hierarchy-balance-whitespace.md` §3.3) and **direct movement** to a focal point (§4).
- **Compose for a single glance** (posters, thumbnails, OOH; `hierarchy-balance-whitespace.md` §9): one image,
  one message, two type levels, test at thumbnail size or at distance.
- **Go responsive** (`responsive-layout.md` §2): narrowest first → widen until the content breaks → breakpoint
  there → container queries for components → fluid spacing and type with `clamp()` (with a `rem` term for zoom)
  → run the QA checklist (§13).
- **CSS recipes** (`grid-systems.md` §8): page container with full-bleed breakouts, 12-column spans, named-area
  app shell, auto-fit card grid with no media queries, subgrid-aligned cards, baseline rhythm.

## Myths to reject

| Myth | Correct reading |
|---|---|
| "Whitespace increases comprehension by 20% (Lin 2004)" | Not what the paper is about. Wichita State found margins helped reading; no verified 20% [E3]. |
| Golden ratio is the most beautiful proportion; famous works use it | Preference results are unstable; most examples are post-hoc fits [E3]. |
| Rule of thirds makes images better | Minor or no role in large sets of highly rated images [E3 as a law]. |
| More whitespace is always better | It costs density. Expert tools need compact modes. |
| Hierarchy = make it bigger | Isolation, contrast, position, and weight often do more. |
| Symmetry is boring | Symmetry reads fast and calm (logos, OOH, luxury). Asymmetry adds energy. Both are tools. |

## Reference files — when to open

| File | Open when |
|---|---|
| `references/grid-systems.md` | Choosing or building a grid; grid anatomy; canons of page construction; magazine grids; 8-pt/4-pt systems; spacing tokens; CSS Grid and subgrid code; grids for social, posters, billboards. |
| `references/hierarchy-balance-whitespace.md` | Setting or critiquing hierarchy, visual weight, balance, focal points, whitespace, density; proportion systems; single-glance composition; the composition critique checklist. |
| `references/responsive-layout.md` | Breakpoints, container queries, fluid spacing, RTL and logical properties, safe areas and viewport units, foldables, reading order, responsive images, tables on small screens, navigation by size, 320px reflow, responsive QA. |
