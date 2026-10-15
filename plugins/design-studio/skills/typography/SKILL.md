---
name: typography
description: Use whenever a task involves choosing, pairing, sizing, spacing, licensing, or loading type, or checking text legibility in any medium (app, web, print, video, signage), even if the answer seems obvious: values here are research-verified and dated, and often differ from common advice. Contains: anatomy and legibility (measured x-heights), classification, an 8-step selection procedure with language, family, and licensing gates, 20 verified pairings, licensing by use (web, app, logo, broadcast, OFL, AI clauses), modular scales, fluid type with clamp(), measure, leading, tracking, hierarchy, figures, baseline rhythm, ready UI and editorial tokens, web font loading and variable fonts, app fonts (Dynamic Type, sp), minimum sizes per platform and print format, large print, subtitles, and dyslexia evidence.
user-invocable: false
---

# Typography

Type carries most of the information in most designs. This skill gives you procedures and values to choose,
set, and ship type well, and tells you which reference file holds the detail.

Typeface history (Frutiger, Carter, Licko…) lives in `design-history` → `masters-type-designers.md`.
Per-style type recipes live in `visual-styles`. Contrast math lives in `color` → `contrast-and-dark-mode.md`.
Letter height for viewing distance lives in `media-specs` → `out-of-home.md`.

## Non-negotiable rules

1. **Choose by medium, size, and anatomy, not by mood alone.** Voice is real but [E3]. Large x-height, open
   apertures, distinct I/l/1, and moderate stroke contrast decide small-size and low-vision legibility.
2. **Three hard gates before any font is chosen:** every required script and language is covered; the
   family has what the content needs (true italic, weights, figures, small caps, the actual OpenType features
   in the files you ship); a license covers every use (desktop, web, app, ads, broadcast, logo).
3. **Each family needs a job no other family can do.** Most products need one variable sans plus a mono.
   "Max 2–3 fonts" is a heuristic [E3]. Script companions don't count against it.
4. **Respect the user's text size.** Web: rem units, `html { font-size: 100% }`, and fluid type built with
   rem + vw so it still doubles at 200% zoom (WCAG 1.4.4). iOS: Dynamic Type or `UIFontMetrics`. Android: `sp`.
5. **Never lock text in fixed-height boxes.** Content must survive user spacing overrides: line-height 1.5,
   paragraph 2×, letters 0.12em, words 0.16em (WCAG 1.4.12).
6. **Font-specific guidance beats general rules.** Example: Apple's SF tracking is *positive* at large
   sizes. Check foundry or platform specs before applying the generic table.
7. **Test with real copy at real sizes** on target devices and paper, finalists compared at matched x-height.

## Quick values

| Decision | Default | Range / note | File |
|---|---|---|---|
| Body size, web | 16px | 16–20px; long-form 18–21px; 14px only for dense expert UI | `legibility-by-medium.md` §2.1 |
| Body size, iOS / Android | 17pt Body / 16sp Body large | Minimum 11pt / 11sp | `legibility-by-medium.md` §2.1 |
| Body size, print | Books 10–12pt; magazines 9–11pt [unverified]; newspapers ~8.5–10pt [unverified] | Clear print 12–14pt; large print 16–18pt (UKAAF/RNIB/ACB) | `legibility-by-medium.md` §3 |
| Measure | 55–65 characters | 45–75 is convention [E1/E2]; avoid >100 and <30 | `scale-and-rhythm.md` §3 |
| Line height, body screen | 1.5 (unitless) | 1.4–1.6; print 120–145% | `scale-and-rhythm.md` §4 |
| Line height, display | 1.0–1.1 | ≥48px: 0.95–1.1 | `scale-and-rhythm.md` §4 |
| Tracking | Body 0 | Display −0.01 to −0.03em; caps/small caps +0.05 to +0.12em; tiny text +0.01 to +0.03em | `scale-and-rhythm.md` §5 |
| Scale ratio | 1.2–1.25 for app UI | Dense UI 1.125–1.2; editorial 1.25–1.414; marketing 1.333–1.5; posters: 2–3 sizes, no scale | `scale-and-rhythm.md` §1.3 |
| Text levels per screen | 3–4 | Change one or two levers per level | `scale-and-rhythm.md` §7 |
| Figures in tables and prices | Tabular lining (`font-variant-numeric: tabular-nums lining-nums`) | Oldstyle in running editorial text | `scale-and-rhythm.md` §8 |
| Web font format | WOFF2 only | Preload 1–2 critical files, with `crossorigin` | `web-and-variable-fonts.md` |
| `font-display` | `swap` or `optional` + metric-matched fallback (`size-adjust`) | Never `block` for body text | `web-and-variable-fonts.md` §3, §6 |
| Subtitles | Netflix English: up to 20 chars/sec adults, 17 children | BBC and Netflix specs compared | `legibility-by-medium.md` §6 |

## Procedures

**Select a typeface** (`pairing-and-selection.md` §1): brief → medium → **language gate** → size range per role
→ voice shortlist (3–5) → **family-depth gate** → **licensing gate** → test with the 10-minute anatomy audit
(`anatomy-and-classification.md` §4). Record the decision in the type-spec template (§1.2).

**Pair** (`pairing-and-selection.md` §2–4): first ask whether you need a second family. Contrast *structure*
(proportion, construction, stress), not just serif vs. sans. Match x-heights when faces share a line. Map roles:
display, text, UI, data, code, caption, labels. Twenty verified pairings, 16 of them free, with roles and reasons.

**Build a scale** (`scale-and-rhythm.md` §1–2, §11): pick a ratio by medium, compute steps, round to the 4px grid,
make headings fluid with `clamp(min, rem + vw, max)`. Two ready token sets: UI product and editorial site.

**Set hierarchy** (`scale-and-rhythm.md` §7): size, then weight, then color, then case and space. Run the squint test:
blur the layout or view at 25%, and you should see exactly the intended levels.

**Ship web fonts** (`web-and-variable-fonts.md`): WOFF2, one family name with weight/style descriptors,
`unicode-range` subsets that keep diacritics and typographic punctuation, metric-matched fallbacks, and self-hosting
for EU sites (Munich court, 2022). Variable fonts: declare weight ranges, use `font-weight` not
`font-variation-settings` for standard axes, `font-optical-sizing: auto`.

**Check legibility by medium** (`legibility-by-medium.md` §9): checklists for web, apps, print editorial,
small text and labels, distance, video/social, and dyslexia-inclusive defaults.

## Browser support to remember (verified 2026-10; re-check before relying on it)

`text-box-trim` works in Chrome 133, Firefox 154, and Safari 18.2. `text-wrap: balance` works in all three.
`text-wrap: pretty` works in Chrome and Safari, but not Firefox. COLRv1 color fonts are not in Safari (ship a
fallback). The metric overrides (`ascent-override` etc.) are not yet in stable Safari; `size-adjust` is.

## Myths to reject

| Myth | Correct reading |
|---|---|
| Serif is more readable in print, sans on screen | No reliable difference from serifs themselves [E1 null result]. Choose by x-height, spacing, rendering. |
| There is one most readable font | The best font varies by reader; preference doesn't predict performance [E1]. |
| Dyslexia fonts help | OpenDyslexic and Dyslexie show no gains [E1 against]. Size, spacing, and line length help. |
| WCAG requires 16px minimum | WCAG sets no minimum size; it requires resizing, spacing tolerance, and contrast. |
| Dark mode is easier to read | For normal vision, light mode reads better, especially for small text [E1]. |
| Never pair two sans serifs | Distinction plus harmony is the rule; same-genre pairs work with distinct roles [E3 for the rule]. |
| Point size = apparent size | Apparent size follows x-height; specify by x-height for accessibility work. |
| Free fonts can't be used commercially / OFL = public domain | Google Fonts allow commercial and logo use; OFL forbids selling the font alone and renaming rules apply. |
| A bought font can be used anywhere | Licenses split by use (desktop, web, app, ads, broadcast, OEM). Some (e.g. Commercial Type) forbid AI training and third-party hosting. |

## Reference files — when to open

| File | Open when |
|---|---|
| `references/anatomy-and-classification.md` | Judging whether a face will work at small sizes, for low vision, or at a glance; matching x-heights; classifying or describing a face; checking non-Latin scripts. |
| `references/pairing-and-selection.md` | Choosing or pairing typefaces, mapping roles, writing a type spec, checking licenses (incl. OFL, Adobe Fonts limits, variable-font and AI clauses). |
| `references/scale-and-rhythm.md` | Building a type scale or tokens, fluid type, measure, leading, tracking, hierarchy, figures, baseline grid, `text-wrap`, `text-box`. |
| `references/web-and-variable-fonts.md` | Loading fonts on the web or in apps, performance budgets, fallbacks and CLS, self-hosting and GDPR, variable and color fonts, icon fonts vs SVG. |
| `references/legibility-by-medium.md` | Minimum sizes per platform and print format, large print, small legal text, subtitles and burned-in captions, dyslexia, all caps and italics, per-medium checklists. |
