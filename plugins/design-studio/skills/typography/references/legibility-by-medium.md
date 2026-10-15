# Legibility and Readability by Medium

> **Scope:** Minimum sizes, spacing, and treatment rules that keep text legible and readable on screens, in print, at small sizes, at distance, in video subtitles, and for readers with low vision or dyslexia, with evidence grades and per-medium checklists.
> **Last verified:** 2026-10 (Apple HIG sizes, Android scaling, BBC subtitle guidelines v1.2.5, Netflix style guides, UKAAF/RNIB/ACB large-print guidance)
> **Used by:** typographer, accessibility-specialist, ui-designer, editorial-designer, print-ooh-designer, social-media-designer, design-critic

Related files: `scale-and-rhythm.md` (measure, leading, tracking, tokens), `web-and-variable-fonts.md` (loading, optical sizing, app font scaling), `anatomy-and-classification.md` (x-height, apertures, counters). Contrast math, APCA, and color-vision deficiency: `color` → `contrast-and-dark-mode.md`. Letter height vs viewing distance: `media-specs` → `out-of-home.md`. Regulatory minimum type sizes on packs: `media-specs` → `packaging-basics.md`. Caption and audio-description rules in WCAG: `accessibility` → `motion-media-and-forms.md`.

---

## 1. Definitions

| Term | Definition | Depends on | You control it with |
|---|---|---|---|
| **Legibility** | How easily a typeface's glyphs "can be correctly identified as characters and words, including how individual characters can be distinguished from one another" [1]. | Typeface design: x-height, apertures, counters, distinct forms (Il1, O0, rn/m), stroke contrast, spacing. | Font choice, size, weight, rendering. |
| **Readability** | "How comfortable it is for a person to engage with text created with legible type" [2]. | Typesetting: size, measure, leading, tracking, contrast, alignment, hierarchy, and the writing itself. | Layout and editing. |

**Rule.** A legible font can be set unreadably (8px, 140-character lines, gray on gray). Fix readability problems with layout before swapping fonts.

**Quick legibility test for a candidate font:** set "Il1 O0 rn m 5S 8B 6b 9g" at the smallest size you will use. Ambiguous pairs disqualify it for UI, codes, and data.

---

## 2. Screen

### 2.1 Body size minimums

| Platform | Default body | Minimum | Unit and scaling | Source |
|---|---|---|---|---|
| Web | 16px (1em at default browser settings [8]); keep `html { font-size: 100% }` and use rem | 14px for secondary UI text; 12px only for captions and legal text (working practice, not a standard) | rem scales with the user's browser font setting and zoom [10] | [7][8][10] |
| iOS, iPadOS | 17pt (Body, Large default) | 11pt | Dynamic Type text styles; scales from xSmall to AX5 (Body 14pt to 53pt) | [3] |
| macOS | 13pt | 10pt | No Dynamic Type on macOS | [3] |
| watchOS | 16pt | 12pt | Dynamic Type | [3] |
| tvOS | 29pt | 23pt | Dynamic Type | [3] |
| visionOS | 17pt | 12pt | Dynamic Type; bolder body and title styles | [3] |
| Android | 16sp (M3 Body large); 14sp (Body medium) | 11sp (M3 Label small) | `sp` scales with the user's font size; up to 200% non-linear on Android 14+ | [4][5][6] |

Supporting guidance:
- Butterick: optimal web body text is 15–25px, print 10–12pt [7] **[E2]**.
- British Dyslexia Association: 12–14pt or equivalent, "e.g. 1-1.2em / 16-19 px" [8] **[E2]**.
- Rello, Pielot & Marcos (2016), eye tracking with 104 participants on Wikipedia text: readability and comprehension improved as font size rose up to 18 points, the first study to test sizes beyond 14 points (secondary report) [9] **[E1, single study]**.
- **WCAG 2.2 sets no minimum font size.** It requires text to resize to 200% without loss (1.4.4) [10], survive user spacing overrides (1.4.12) [11], and meet contrast (1.4.3; see `color` → `contrast-and-dark-mode.md`).

**Apply.**
- **Web:** Body 16–20px; long-form 18–21px. Never set `html { font-size: 62.5% }` with px-locked children; respect the user's default.
- **iOS:** Use text styles (`.body`, `.headline`) or scale custom fonts with `UIFontMetrics` (see `web-and-variable-fonts.md`). Avoid Ultralight, Thin, and Light weights at text sizes [3].
- **Android:** Text in sp, line height in sp. Test at 200% [5].
- **Dashboards, dense UI:** 14px body is acceptable for expert, frequent users if 1.4.4 resizing works; keep 16px for public-facing forms.

### 2.2 Light vs dark mode text

| Finding | Evidence |
|---|---|
| Dark text on light backgrounds (positive polarity) gives better proofreading and acuity performance for people with normal vision, and the advantage grows as text gets smaller [14][15]. | **[E1]** Two 2014 studies by Piepenbrock, Mayr & Buchner, plus earlier work reviewed by NN/g [14]. |
| The mechanism appears to be luminance: brighter displays shrink the pupil and sharpen the retinal image [15]. | **[E1]** |
| Readers with cloudy ocular media (for example cataracts) read faster with light text on dark (Legge et al. 1985, n = 7, CRT displays) [14]. | **[E2/E3]** Small, old sample on CRTs. |
| Polarity made no difference for glanceable text in simulated daytime; at night, light mode was better and small text was much harder in dark mode (Dobres et al. 2017) [14]. | **[E1]** |

**Rules.**
- Default to light mode for reading-heavy products; offer dark mode as a user choice, and follow the OS setting [14] **[E2]**.
- In dark mode, raise body size or weight slightly, avoid pure white on pure black for long text (use off-white on near-black), and never use thin weights. If the font has a grade axis, reduce grade instead of weight so text does not reflow (see `web-and-variable-fonts.md`) [craft guidance, **E3**: halation effects are widely reported but not measured in sources opened here].
- Contrast values for both modes: `color` → `contrast-and-dark-mode.md`.

### 2.3 Low vision and aging eyes

- **Fluent print size.** Vision research defines a range over which text is read at maximum speed: x-height from about 0.2° to 2° of visual angle, which at 40cm (16in) is about 1.4mm to 14mm [12] **[E1]**. Below about 0.2°, reading falls below maximum speed. The minimum fluent x-height grows linearly with distance: about 3.5mm per meter of viewing distance (0.2° ≈ 0.0035 rad).
- **Case at small sizes.** For words near the acuity limit, uppercase is more legible than lowercase (size thresholds about 0.1 log unit lower), and upper-case text was read faster than mixed case at twice acuity size, especially by visually impaired readers. The advantage disappeared at larger sizes [13] **[E1]**. Use this for tiny labels (for example, short uppercase codes on devices), not for paragraphs.
- **Aging.** Older adults showed a smaller polarity advantage on acuity tasks and are more sensitive to glare [14] **[E1/E2]**. Working rule (not a published threshold): for audiences over 60, start body text at 18px on screen and 12–14pt in print, use regular or medium weights, and use matte surfaces in print, following clear-print guidance [16][18] **[E2]**.
- **Respect OS settings.** Bold Text, Larger Text, and Increase Contrast exist because many users need them. Custom fonts must honor them [3].

---

## 3. Print

### 3.1 Body sizes by format

| Format | Typical body size | Leading | Measure | Evidence |
|---|---|---|---|---|
| Books (trade) | 10–12pt | 120–145% | 60–70 characters | Butterick: optimal print body is 10–12pt [7] **[E2]** |
| Magazines | 9–11pt | 120–135% | 40–50 characters per column | Common practice [unverified: no primary source opened] |
| Newspapers | about 8.5–10pt | 110–125% | 30–40 characters per column | Common practice [unverified: no primary source opened] |
| Reports, manuals | 10–12pt | 130–145% | 60–75 characters | **[E2]** |
| Clear print (general public, inclusive) | 12pt minimum, 14pt ideal (UKAAF); 14pt Arial or equivalent, 3.5mm capital height (RNIB) | Single to 1.15 line spacing, plus space between paragraphs | Avoid or reduce columns | [16][17] **[E2]** |
| Large print | 16pt minimum, 18pt ideal (UKAAF); 16pt+ Arial or equivalent, 4mm capital height (RNIB); ACB: Arial 18pt body, 20pt subheads, 22pt headings | ACB: 1.15 spacing; one blank line between paragraphs | Single column (ACB) | [16][17][18] **[E2]** |
| Giant print | 24pt (UKAAF) | | | [16] **[E2]** |

Notes:
- Point size is not apparent size. "Arial 14 point appears larger than Times New Roman 14 point"; UKAAF gives recommended x-heights of 2mm (12pt), 2.3mm (14pt), 2.8mm (16pt), and about 2.9mm (18pt) [16]. Specify by x-height or cap height when the face is unusual.
- Publisher guidance (Ingram) for large-print editions: never below 14pt, 14–18pt typical, 16pt recommended, sans serif, no italics, bold, underlining, or large blocks of capitals, non-glossy paper [19] **[E2]**.
- The APH (American Printing House for the Blind) research-based large-print guidelines could not be opened in this pass; secondary reports put its threshold for true large print at 18pt [unverified].

### 3.2 Large-print and clear-print rules (UKAAF, RNIB, ACB consensus)

1. Sans serif such as Arial [16][17][18].
2. No italics, underlining, or blocks of capitals; use bold for emphasis [16]. (ACB instead uses underline for emphasis [18]; the sources disagree on underline.)
3. Left-aligned, ragged right; no justification [16][18].
4. Page numbers, labels, and footnotes at body size [16][18].
5. Matte or non-glossy paper, heavy enough to prevent show-through [16][18].
6. Black on white or off-white/cream (ACB) [18]; good contrast; no text over images [16].
7. Do not make large print by enlarging on a photocopier [16].
8. Some readers with sight loss prefer smaller print than 14pt [16]. Offer formats; do not assume one size fits all.

**Apply.**
- **Editorial:** Design an accessible-format variant of key documents (annual reports, ballots, health leaflets) at 14pt clear print and 18pt large print.
- **Packaging, leaflets, signage:** RNIB recommends instructions at a minimum of 14pt Arial equivalent and 4.5:1 contrast [17].

---

## 4. Small sizes (captions, legal text, labels)

| Use | Screen minimum | Print minimum | Rules |
|---|---|---|---|
| Captions, metadata | 12px web; iOS Caption 2 11pt; M3 Body small 12sp [3][6] | 7–8pt [unverified common practice] | Regular or medium weight, no light weights [3]. Slightly open tracking (+0.01 to +0.02em). |
| Legal, disclaimers | 12px (11px absolute floor) | Regulatory minimums apply; see `media-specs` → `packaging-basics.md` | Legal minimums are usually defined by x-height in mm, not points. |
| UI labels, badges | 11–12px; iOS minimum 11pt [3] | | Uppercase short labels may be more legible at the acuity limit [13]. Track caps +0.05 to +0.1em. |
| Data tables | 12–14px | 7–9pt | Tabular figures; distinct 0/O, 1/l/I. |

**Choose fonts for small sizes:** large x-height, open apertures, low stroke contrast, loose default spacing, and a dedicated text or caption optical size if the family has one (see `anatomy-and-classification.md`, `web-and-variable-fonts.md`).

**Limit.** "Fine print" designed to be unreadable is a dark pattern (see `cognitive-psychology` → `dark-patterns-and-ethics.md`). Material terms must be legible, not merely present.

---

## 5. Distance (signage, OOH, presentations, TV)

Detailed letter-height tables and viewing-distance formulas live in `media-specs` → `out-of-home.md`. Summary:

- Legibility at distance depends on **visual angle**, not point size. The fluent x-height range is about 0.2° to 2° [12] **[E1]**, so minimum x-height scales linearly with distance (about 3.5mm per meter at the 0.2° floor; design well above the floor).
- Viewing time matters as much as size: roadside and transit copy must be read in seconds, so cut words before shrinking type.
- Use medium to bold weights, generous tracking, and mixed case for words. Avoid thin strokes and high-contrast didones.
- **TV and 10-foot UI:** tvOS default body is 29pt and minimum 23pt [3], about 1.7× iOS.
- **Slides:** set body text so that at least 6–8 lines fit vertically; check from the back of the room.

---

## 6. Motion and video: subtitles and captions

### 6.1 Subtitle specs

| Parameter | BBC Subtitle Guidelines (v1.2.5, March 2026) [20] | Netflix English (USA) Timed Text Style Guide (updated 2025-12) [21][22] |
|---|---|---|
| Reading speed | 160–180 words per minute; minimum about 0.3s per word (for example, 1.2s for 4 words) | Up to 20 characters per second (adult); up to 17 cps (children) |
| Characters per line | Broadcast: 37 characters (Teletext constraint). Online: width ≤ 68% of a 16:9 frame, ≤ 90% of 4:3, 1:1, or 9:16 frames | 42 characters |
| Lines | Max 2 for 16:9, 4:3, 1:1; max 3 for vertical 9:16 | Max 2 |
| Size | Line height 7–8% of active video height (16:9, 4:3, 1:1); 3.9–4.5% for 9:16 | Relative to resolution, sized so 42 characters fit across the screen |
| Font | Author in a wide font (Reith Sans, Verdana, Tiresias) so rendering in narrower fonts (Arial) does not reflow | Arial as placeholder for proportional sans serif; white |
| Color | White text on a black background box; colors (yellow, cyan, green) only to distinguish speakers | White |
| Position | Bottom of screen; move to top to avoid on-screen captions, mouths, or key action. In 9:16, a little higher but still in the lower third | Not specified in the style guide |
| Minimum duration / gaps | Timing is editorial; target 0.3s per word | Minimum 20 frames; minimum 2 frames between subtitles [22] |
| Line breaks | Break at natural points (punctuation, before conjunctions); do not split article and noun | Bottom-heavy pyramid; break after punctuation and before conjunctions and prepositions [21] |

### 6.2 Burned-in captions on social video

- Keep caption blocks inside each platform's safe zone (UI overlays cover the bottom and right edges); see `media-specs` → `social-formats.md`.
- Use the BBC 9:16 rules as the baseline: up to 3 lines, line height about 4–4.5% of frame height, 90% max width, lower third but above the platform UI [20] **[E2]**.
- Highlight-word "karaoke" captions add motion; keep at most one animated word at a time and do not cut reading time.
- Always provide real (closed) captions as well where the platform supports them; burned-in text cannot be resized or translated.

**Limit.** Reading speed limits trade completeness for readability. BBC raised its live-subtitle rate to 160–180 wpm from 130–150 wpm in 2016 [20]; faster rates exclude slower readers, children, and second-language viewers.

---

## 7. Dyslexia

### 7.1 "Dyslexia fonts" (OpenDyslexic, Dyslexie): evidence is weak **[E3]**

| Study | Design | Result |
|---|---|---|
| Wery & Diliberto (2017), *Annals of Dyslexia* | Single-subject alternating-treatment design; elementary students with dyslexia; OpenDyslexic vs Arial and Times New Roman | "No improvement in reading rate or accuracy for individual students with dyslexia, as well as the group as a whole." No participant preferred the font [23]. |
| Kuster et al. (2018), *Annals of Dyslexia* | Exp. 1: 170 children with dyslexia; Exp. 2: 102 with and 45 without dyslexia; Dyslexie vs Arial (and Times New Roman) | Dyslexie neither helped nor harmed reading speed or accuracy. Most children preferred Arial or Times; preference did not predict performance [24]. |
| Marinus et al. (2016), as summarized by Kuster et al. | Low-performing readers | A small advantage (about 7% more words per minute) for Dyslexie disappeared when letter and word spacing were matched, so spacing, not letter shapes, explained it [24]. |

**Corrected reading:** Specialized dyslexia fonts do not improve reading speed or accuracy in controlled studies. Any benefit comes from the extra spacing they carry, which you can apply to any good font. Offer them as a user preference if requested, not as an accessibility fix **[E3]**.

### 7.2 What actually helps

| Lever | Evidence | Practical setting |
|---|---|---|
| Letter spacing | Mixed. Zorzi et al. (2012, *PNAS*, Italian and French children) found extra-large letter spacing improved text reading in dyslexia, attributing it to reduced crowding [25] **[E1]**. van den Boer & Hakvoort (2015) found no benefit of increased spacing for word naming, but harm from tighter-than-default spacing [26] **[E1]**. Hakvoort et al. (2017): extra spacing reduced errors (not speed) for readers with and without dyslexia, only in full sentences [27] **[E1]**. | Never tighten body tracking. Allow user spacing (WCAG 1.4.12 0.12em) [11]. BDA suggests around 35% of average letter width [8] **[E2]**. |
| Size | BDA: 12–14pt or 16–19px; some readers need larger [8] **[E2]**. | Body ≥ 16px; offer text-size controls. |
| Line spacing | BDA: 1.5 preferable [8]; WCAG 1.4.8 AAA ≥ 1.5 [32] **[E2]**. | `line-height: 1.5` or more. |
| Line length | BDA: 60–70 characters [8] **[E2]**. | `max-width: 65ch`. |
| Alignment | Left-aligned, not justified (even word spacing) [8][32] **[E2]**. | `text-align: start`; no `justify`. |
| Emphasis | Avoid underlining, italics, and all caps for continuous text; use bold [8] **[E2]**. | |
| Background | Off-white or cream instead of bright white; single-color backgrounds; matte paper [8] **[E2]**. | |
| Structure | Headings at least 20% larger than body, short paragraphs, lists, plain language [8] **[E2]**. | |
| Fonts | BDA suggests sans serif such as Arial, Verdana, Tahoma, Century Gothic, Trebuchet, Calibri, Open Sans (it also lists Comic Sans) [8] **[E2]**. Controlled studies do not show a specific font effect beyond spacing [24]. | Any well-spaced, large-x-height, unambiguous font. |

**Apply.** Build these into defaults (they help everyone) and add a reading-preferences panel (size, spacing, line height, background) rather than a "dyslexia mode" font toggle.

---

## 8. All caps and italics in long text

| Claim | Evidence | Grade | Rule |
|---|---|---|---|
| Lowercase running text is read faster than all caps | Woodworth (1938), Smith (1969), Fisher (1975) found lowercase 5–10% faster; Larson argues this is a practice effect, since speed with caps improves with practice [29]. | **[E1]** for the speed gap; **[E2]** for the practice explanation | No all-caps paragraphs. Caps for headings shorter than one line [31]. |
| Caps are hard to read because they lose "word shape" | Word-shape (bouma) models are rejected by reading research; readers recognize letters in parallel. Proofreading errors track letter shape, not word shape (Paap et al. 1984) [29]. | **[E3]** as an explanation | Do not justify caps rules with word shape; justify them with familiarity, size, and spacing. |
| Uppercase is more legible at very small sizes and for low vision | Arditi & Cho (2007) [13]. | **[E1]** | Short uppercase labels at tiny sizes are acceptable; track them. |
| Italics reduce legibility in long passages | UKAAF: italics "reduce the clarity of text as they distort the standard letter" shapes [16]; BDA: avoid italics [8]. Controlled reading-speed studies were not located in this pass. | **[E2]** (guideline consensus) | Italics for short emphasis, titles, and foreign words. Never for whole paragraphs, captions for low-vision audiences, or large print. |

---

## 9. Checklists per medium

### 9.1 Web

- [ ] Root font size not overridden in px; body ≥ 16px in rem.
- [ ] Text resizes to 200% without loss; no viewport-only font sizes [10].
- [ ] Layout survives line height 1.5, paragraph spacing 2em, letter spacing 0.12em, word spacing 0.16em [11].
- [ ] Measure ≤ 75 characters (`max-width: 60–70ch`) [30][32].
- [ ] Body line height ≥ 1.5 for long text.
- [ ] Contrast meets WCAG in light and dark modes (see `color` → `contrast-and-dark-mode.md`).
- [ ] No light/thin weights below 18px; no all-caps or italic paragraphs.
- [ ] Left-aligned body; no justification without hyphenation.

### 9.2 iOS / Android apps

- [ ] All text uses Dynamic Type text styles or scaled custom fonts (iOS) and sp (Android) [3][4].
- [ ] Tested at AX5 (iOS) and 200% (Android); no truncated essential text [3][5].
- [ ] Line heights scale with text (sp on Android) [5].
- [ ] Bold Text and Increase Contrast settings honored [3].
- [ ] No text below 11pt / 11sp [3][6].

### 9.3 Print editorial

- [ ] Body 9–12pt depending on format; x-height checked, not just point size.
- [ ] Leading 120–145%; measure 40–70 characters by column type.
- [ ] Captions ≥ 7pt, regular weight; legal text meets the regulation (see `media-specs` → `packaging-basics.md`).
- [ ] Clear-print (14pt) and large-print (18pt) versions available for public-service documents [16][17].
- [ ] Matte stock for long reading and large print [16][18].

### 9.4 Small text and labels

- [ ] Font has unambiguous Il1/O0 and a large x-height.
- [ ] No weights lighter than Regular.
- [ ] Tracking slightly open; tabular figures for data.

### 9.5 Distance (OOH, signage, slides, TV)

- [ ] Letter height checked against viewing distance (see `media-specs` → `out-of-home.md`).
- [ ] Word count fits viewing time.
- [ ] Medium/bold weights; high contrast; mixed case for words.

### 9.6 Video and social

- [ ] Subtitles ≤ 2 lines (≤ 3 for 9:16), ≤ 37–42 characters or ≤ 68%/90% width [20][21].
- [ ] Reading speed ≤ 160–180 wpm (BBC) or ≤ 17–20 cps (Netflix) [20][21].
- [ ] White on a black box or equivalent; positioned to avoid faces and on-screen text [20].
- [ ] Burned-in captions inside platform safe zones (see `media-specs` → `social-formats.md`); closed captions also supplied.

### 9.7 Dyslexia-inclusive defaults

- [ ] Body ≥ 16px; line height ≥ 1.5; measure 60–70 characters; left-aligned [8].
- [ ] No italics, underline, or all-caps for continuous text [8].
- [ ] Off-white background option; user controls for size and spacing.
- [ ] No reliance on a "dyslexia font" [23][24].

---

## 10. Common myths

| Myth | Corrected reading | Grade |
|---|---|---|
| "Dyslexia fonts help dyslexic readers." | Controlled studies of OpenDyslexic and Dyslexie show no gains in speed or accuracy; spacing explains small effects [23][24]. | **[E3]** for the claim |
| "Serif is more readable in print; sans serif on screen." | Fonts differing only in serifs showed no difference in legibility or reading speed; tiny gains at small or distant sizes came from the extra spacing serifs add [28]. Choose by x-height, spacing, rendering, and familiarity. | **[E3]** for the claim; **[E1]** for the null result |
| "We read by word shape, so all caps destroys the bouma." | Readers recognize letters in parallel; the lowercase speed advantage is mainly practice [29]. | **[E3]** |
| "WCAG requires a 16px minimum font size." | WCAG 2.2 has no minimum size; it requires resizing (1.4.4), spacing tolerance (1.4.12), and contrast [10][11]. Platform and organizational guidance supply minimums [3][16]. | **[E2]** |
| "Dark mode is easier to read." | For normal vision, light mode performs better, especially for small text; dark mode helps some low-vision readers and suits preference [14][15]. | **[E1]** |
| "Bigger is always better." | Reading speed is flat across a wide fluent range (about 0.2° to 2° x-height) [12]; oversized body text shortens lines and increases scrolling. Size up to the fluent range, then fix measure and spacing. | **[E1]** |
| "66 characters is the scientifically optimal line." | It is a typographic convention; screen studies show longer lines can be read faster but are rated harder and may lower comprehension [30]. | **[E2]** |
| "Point size tells you how big text looks." | Apparent size depends on x-height; Arial 14pt looks larger than Times 14pt [16]. Specify by x-height for accessibility work. | **[E2]** |

---

## Sources

[1] Google Fonts. (n.d.). *Legibility*. Fonts Knowledge glossary. https://fonts.google.com/knowledge/glossary/legibility
[2] Google Fonts. (n.d.). *Readability*. Fonts Knowledge glossary. https://fonts.google.com/knowledge/glossary/readability
[3] Apple. (n.d.). *Typography*. Human Interface Guidelines (default and minimum sizes, Dynamic Type tables). https://developer.apple.com/design/human-interface-guidelines/typography (accessed 2026-10)
[4] Android Developers. (n.d.). *Support different pixel densities* (dp and sp). https://developer.android.com/training/multiscreen/screendensities
[5] Android Developers. (n.d.). *Android 14 features and APIs: Non-linear font scaling to 200%*. https://developer.android.com/about/versions/14/features
[6] Google / AndroidX. (n.d.). *TypeScaleTokens.kt* (Material 3). https://github.com/androidx/androidx/blob/androidx-main/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/tokens/TypeScaleTokens.kt (accessed 2026-10)
[7] Butterick, M. (n.d.). *Point size*. Practical Typography. https://practicaltypography.com/point-size.html
[8] British Dyslexia Association. (2023). *Dyslexia friendly style guide*. https://www.bdadyslexia.org.uk/advice/employers/creating-a-dyslexia-friendly-workplace/dyslexia-friendly-style-guide (text read from a copy hosted at https://www.bumc.bu.edu/jmedday/files/2025/05/Dyslexia-friendly-style-guide.docx)
[9] Clark, S. (2023, April 7). *Best font size and line spacing* (summary of Rello, L., Pielot, M., & Marcos, M.-C. (2016). Make It Big! *CHI '16*, 3637–3648). BYU Editing Research (secondary source). https://editingresearch.byu.edu/2023/04/07/best-font-size-and-line-spacing/
[10] W3C. (2023). *Understanding SC 1.4.4: Resize Text*. https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html
[11] W3C. (2023). *Understanding SC 1.4.12: Text Spacing*. https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html
[12] Legge, G. E., & Bigelow, C. A. (2011). Does print size matter for reading? A review of findings from vision science and typography. *Journal of Vision, 11*(5), 8. https://doi.org/10.1167/11.5.8 (abstract read via Europe PMC)
[13] Arditi, A., & Cho, J. (2007). Letter case and text legibility in normal and low vision. *Vision Research, 47*, 2499–2505. https://doi.org/10.1016/j.visres.2007.06.010 (abstract)
[14] Budiu, R. (2020, February 2). *Dark Mode vs. Light Mode: Which Is Better?* Nielsen Norman Group. https://www.nngroup.com/articles/dark-mode/
[15] Piepenbrock, C., Mayr, S., & Buchner, A. (2014). Positive display polarity is particularly advantageous for small character sizes. *Human Factors, 56*, 942–951. https://doi.org/10.1177/0018720813515509; and Piepenbrock, C., Mayr, S., & Buchner, A. (2014). Smaller pupil size and better proofreading performance with positive than with negative polarity displays. *Ergonomics, 57*, 1670–1677. https://doi.org/10.1080/00140139.2014.948496 (abstracts)
[16] UK Association for Accessible Formats. (2019/2023). *Creating clear print and large print documents* (G003, v4). https://www.ukaaf.org/wp-content/uploads/2024/12/G003-UKAAF-Creating-clear-print-and-large-print-documents-v4.pdf
[17] RNIB. (n.d.). *Product guidelines* (Complete Product Design Guide). https://media.rnib.org.uk/documents/Complete_Product_Design_Guide.pdf
[18] American Council of the Blind. (2025). *Large Print Guidelines* (adopted May 6, 2025). https://www.acb.org/large-print-guidelines
[19] Ingram Content Group. (2023). *Large print guidelines*. https://marketing.ingramcontent.com/mrkng/documents/publishers/large-print-guidelines.pdf
[20] BBC. (2026, March). *Subtitle Guidelines*, version 1.2.5. https://www.bbc.co.uk/accessibility/forproducts/guides/subtitles/
[21] Netflix. (2025). *English (USA) Timed Text Style Guide* (last updated 2025-12-19). https://partnerhelp.netflixstudios.com/hc/en-us/articles/217350977-English-USA-Timed-Text-Style-Guide
[22] Netflix. (2025). *Timed Text Style Guide: Subtitle Timing Guidelines* (last updated 2025-07-04). https://partnerhelp.netflixstudios.com/hc/en-us/articles/360051554394-Timed-Text-Style-Guide-Subtitle-Timing-Guidelines
[23] Wery, J. J., & Diliberto, J. A. (2017). The effect of a specialized dyslexia font, OpenDyslexic, on reading rate and accuracy. *Annals of Dyslexia, 67*, 114–127. https://doi.org/10.1007/s11881-016-0127-1 (abstract)
[24] Kuster, S. M., van Weerdenburg, M., Gompel, M., & Bosman, A. M. T. (2018). Dyslexie font does not benefit reading in children with or without dyslexia. *Annals of Dyslexia, 68*(1), 25–42. https://pmc.ncbi.nlm.nih.gov/articles/PMC5934461/
[25] Zorzi, M., Barbiero, C., Facoetti, A., et al. (2012). Extra-large letter spacing improves reading in dyslexia. *PNAS, 109*, 11455–11459. https://doi.org/10.1073/pnas.1205566109 (abstract)
[26] van den Boer, M., & Hakvoort, B. E. (2015). Default spacing is the optimal spacing for word reading. *Quarterly Journal of Experimental Psychology, 68*, 697–709. https://doi.org/10.1080/17470218.2014.964272 (abstract)
[27] Hakvoort, B., van den Boer, M., Leenaars, T., Bos, P., & Tijms, J. (2017). Improvements in reading accuracy as a result of increased interletter spacing are not specific to children with dyslexia. *Journal of Experimental Child Psychology, 164*, 101–116. https://doi.org/10.1016/j.jecp.2017.07.010 (abstract)
[28] Arditi, A., & Cho, J. (2005). Serifs and font legibility. *Vision Research, 45*, 2926–2933. https://doi.org/10.1016/j.visres.2005.06.013 (abstract)
[29] Larson, K. (2003; page dated 2018). *The Science of Word Recognition*. Microsoft Typography. https://learn.microsoft.com/en-us/typography/develop/word-recognition
[30] Dyson, M. C. (2004). How physical text layout affects reading from screen. *Behaviour & Information Technology, 23*(6), 377–393.
[31] Butterick, M. (n.d.). *All caps*. Practical Typography. https://practicaltypography.com/all-caps.html
[32] W3C. (2023). *Understanding SC 1.4.8: Visual Presentation*. https://www.w3.org/WAI/WCAG22/Understanding/visual-presentation.html
