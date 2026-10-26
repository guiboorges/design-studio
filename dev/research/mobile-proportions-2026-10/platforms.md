# Mobile screen proportions: Apple (iOS 26/27) and Material 3 (compact)

> **Scope:** How Apple and Google proportion a phone screen (control heights, chrome heights, margins, row heights, type usage, prominence limits, screen sizes, reach), with documented vs. measured values kept apart.
> **Last verified:** 2026-10 (all items below verified 2026-10-26 unless flagged [unverified]).
> **Used by:** ui-designer, design-critic, creative-director (proposed: `layout-composition` / `media-specs` mobile reference).

Legend: **Doc** = stated in an official Apple/Google page or official source code. **Obs** = measured by us (iOS simulator probe [28], or reading token source [29][30]); method stated. **[unverified]** = not confirmed in this pass.

Key framing fact: **Apple does not publish iOS control heights, bar heights, or row heights in points anywhere in the current HIG or SwiftUI/UIKit docs** (checked Buttons, Layout, Toolbars, Tab bars, Lists, Sheets, ControlSize docs, 2026-10). The HIG Layout page was rewritten on 2026-09-09 and **no longer contains the device-size specification table** [2]. All iOS point values for controls and bars below are therefore **Obs** from the iOS 27.0 simulator (Xcode 27.1, iPhoneSimulator27.1 SDK, default Dynamic Type "Large") [28]. iOS 26 values are expected to match (same Liquid Glass design generation) but were not separately measured: treat as [unverified] for iOS 26 specifically.

---

## (a) Officially documented values and rules

### A1. Apple: buttons and prominence

| Rule | Value / statement | Src | Status |
|---|---|---|---|
| Hit region | "at least 44x44 pt" (visionOS 60x60) | [1] | Doc, verified 2026-10 |
| Prominent buttons per view | "Keep the number of prominent buttons to one or two per view. Presenting too many prominent buttons increases cognitive load" | [1] | Doc, verified 2026-10 |
| Distinguish choices | "Use style — not size — to visually distinguish the preferred choice"; two adjacent buttons of different sizes "can make the interface look confusing and inconsistent" | [1] | Doc, verified 2026-10 |
| Prominent = most likely action | "use a button that has a prominent visual style for the most likely action in a view" | [1] | Doc, verified 2026-10 |
| Primary role | Never give the primary role to a destructive action | [1] | Doc, verified 2026-10 |
| Toolbar primary | "Use the .prominent style for key actions such as Done or Submit... Only specify one primary action, and put it on the trailing side of the toolbar." | [5] | Doc, verified 2026-10 |
| Full-width primary | Stated explicitly **only for watchOS**: "Prefer buttons that span the width of the screen for primary actions" | [1] | Doc (watchOS), verified 2026-10 |
| Full-width on iOS | No HIG rule. API: `buttonSizing(.flexible)` makes a button "span the width of its container, which you may want to do if the button is placed in a narrow context" (iOS 26+) | [13] | Doc (API), verified 2026-10 |
| Capsule default | "Bordered buttons now have a capsule shape by default" (iOS 26) | [18] | Doc (WWDC25), verified 2026-10 |
| Capsule near phone edge | "For phone layouts, use a capsule with extra margin to create space near the screen edge. For iPad and Mac, use a concentric shape that aligns with the window edge" | [16] | Doc (WWDC25), verified 2026-10 |
| Capsule use | "Capsules bring focus and clarity to touch-friendly layouts, but in dense desktop environments, they're best used for standout actions" | [16] | Doc, verified 2026-10 |
| Extra-large size | `ControlSize.extraLarge` exists since iOS 17 and "Resolves to ControlSize.large on platforms other than visionOS" | [12] | Doc, verified 2026-10 |
| Extra-large intent | "for your most important, prominent actions there is now support for extra large sized buttons" (WWDC25, framed around macOS) | [18] | Doc, verified 2026-10 |
| ControlSize cases | mini, small, regular, large, extraLarge; **no point heights documented** | [12] | Doc, verified 2026-10 |
| Glass styles | `GlassProminentButtonStyle` (iOS 26+): "prominent glass border artwork" | [12] | Doc, verified 2026-10 |
| Activity in button | iOS: show an activity indicator inside the button for non-instant actions ("Checkout" -> "Checking out...") | [1] | Doc, verified 2026-10 |
| Label copy | Title-style capitalization, start with a verb ("Add to Cart") | [1] | Doc, verified 2026-10 |

### A2. Apple: concentricity and shape

| Rule | Statement | Src | Status |
|---|---|---|---|
| Three shape types | "fixed shapes have a constant corner radius. Capsules use a radius that's half the height of the container. And concentric shapes calculate their radius by subtracting padding from the parent's." | [16] | Doc, verified 2026-10 |
| Concentric definition | A corner is concentric when its radius "shares a common center with the containing shape's rounded corner radius"; `ConcentricRectangle` computes it "without hard-coded values"; may resolve to 0 (square) far from the container corner; use `concentric(minimum:)` for a floor | [14] | Doc, verified 2026-10 |
| Fallback trick | "use a concentric shape with a fallback radius. The concentric value adapts when nested, and the fallback kicks in when the component stands alone." | [16] | Doc, verified 2026-10 |
| Bars | Standard toolbar items "have corner radii that are concentric with bar corners"; custom ones must be too | [5] | Doc, verified 2026-10 |
| Sheets | iOS 26 partial-height sheets are inset with Liquid Glass; "At smaller heights, the bottom edges pull in, nesting in the curved edges of the display"; full height becomes opaque and anchors to the screen edge | [18] | Doc, verified 2026-10 |

**Apply.** Radius rule for nested cards: `inner = outer − padding` (concentric). Buttons on phone: capsule (`radius = height/2`), never edge-to-edge; keep at least the layout margin to the screen edge.

### A3. Apple: layout, margins, chrome

| Item | Statement | Src | Status |
|---|---|---|---|
| Hierarchy | "place the most important items near the top and leading side" | [2] | Doc, verified 2026-10 |
| Controls vs content | Use Liquid Glass for controls; "Instead of applying a solid or semi-opaque background color beneath controls, use a scroll edge effect"; extend full-screen backgrounds under bars | [2] | Doc, verified 2026-10 |
| Content first | Liquid Glass "floating above your content to bring structure and clarity, without ever stealing focus"; "hierarchy should be expressed through layout and grouping" instead of decoration | [16] | Doc, verified 2026-10 |
| Scroll edge effect | "not decorative"; only where floating UI exists; "Apply one scroll edge effect per view" | [16] | Doc, verified 2026-10 |
| Every element earns its place | "A well-designed experience removes the unnecessary, with every element earning its place"; "Simplicity isn't minimalism... keeps the important things close by and lets the others fall away" | [9] | Doc, verified 2026-10 |
| Content takes center stage | Liquid Glass used "alongside the scroll edge effects to ensure clarity and legibility, all while letting your app's content truly take center stage"; scrolled text gets stronger shadows for separation | [17] | Doc, verified 2026-10 |
| Limit controls | "limiting the number of onscreen controls while making secondary details and actions discoverable with minimal interaction" | [8] | Doc, verified 2026-10 |
| Reach | "it tends to be easier and more comfortable for people to reach a control when it's located in the middle or bottom area of the display" | [8] | Doc, verified 2026-10 |
| Layout margins | Root view margins "reflect the system minimum margins and safe area insets"; custom margins smaller than `systemMinimumLayoutMargins` are overridden ("if the value for one system minimum margin is 20 points and you specify a value of 10... the view uses the value 20"). **The per-device numbers are not documented** (see B2) | [15] | Doc, verified 2026-10 |
| Readable width | `readableContentGuide` never exceeds the layout margins; width ≤ "the readable width defined for the current dynamic text size" | [15] | Doc, verified 2026-10 |
| Size classes | Lay out by size class, not device or orientation | [2] | Doc, verified 2026-10 |
| Large title | "By default, a large title transitions to a standard title as people begin scrolling the content, and transitions back to large when people scroll to the top" | [5] | Doc, verified 2026-10 |
| Large title (iOS 26 UIKit) | "Large titles are now placed at the top of the content scroll view, and scroll with the content underneath the bar" | [19] | Doc, verified 2026-10 |
| Title length | "keep the title under 15 characters long" | [5] | Doc, verified 2026-10 |
| Toolbar groups | "aim for a maximum of three" groups; don't put a text button next to a symbol button | [5][16] | Doc, verified 2026-10 |
| Tab bar (iOS) | "floats above content at the bottom of the screen" on Liquid Glass; can minimize on scroll when it has an accessory (`tabBarMinimizeBehavior`); optional search tab at trailing end | [4][18][19] | Doc, verified 2026-10 |
| Tab count | No fixed number: "it's generally easier to navigate among fewer tabs"; avoid the More overflow tab; single-word labels; filled symbols. "Five or fewer" appears only as the default for user-customizable iPad tab bars | [4] | Doc, verified 2026-10 |
| Tab bar content | "Avoid placing screen-specific actions here—a checkout button, for example, belongs with the content it supports" | [16] | Doc, verified 2026-10 |
| Sheet detents | Two system detents: large (full) and medium ("about half"); compose sheets (Mail, Messages) use only large; include a grabber in resizable sheets; one sheet at a time | [6] | Doc, verified 2026-10 |
| Sheet buttons | Cancel leading, Done trailing in the top toolbar; never Cancel + Done + Back together | [6] | Doc, verified 2026-10 |
| List rows | "Keep item text succinct"; avoid over-large rows, move long text to a detail view; grouped style uses headers, footers, extra space | [7] | Doc, verified 2026-10 |
| iPhone Duo | New foldable (2026): bars move to the side on the outer display; design with size classes (compact outer, regular inner), no fixed widths | [10] | Doc, verified 2026-10 |

### A4. Apple: typography usage on a phone

| Rule | Statement | Src | Status |
|---|---|---|---|
| Default / minimum | iOS 17 pt default, 11 pt minimum | [3] | Doc, verified 2026-10 (already in `digital-platforms.md`) |
| Weights | Prefer Regular, Medium, Semibold, Bold; avoid Ultralight, Thin, Light | [3] | Doc, verified 2026-10 |
| Hierarchy levers | "Adjust font weight, size, and color"; "Minimize the number of typefaces you use" | [3] | Doc, verified 2026-10 |
| Text styles = hierarchy | Body for multi-line reading; Headline "help[s] distinguish a heading from surrounding content"; styles "form a typographic hierarchy" | [3] | Doc, verified 2026-10 |
| Symbolic traits | Use bold trait for an extra level instead of a new size; tight leading OK in list rows but not for 3+ lines | [3] | Doc, verified 2026-10 |
| Large text | At large sizes stack text above secondary items, reduce columns, keep primary elements at top | [3] | Doc, verified 2026-10 |
| iOS 26 direction | Typography "now bolder and left-aligned to improve readability in key moments like alerts and onboarding" | [16] | Doc, verified 2026-10 |
| "Not too large" | **No HIG statement caps display sizes on iPhone**; the only explicit size discipline is: Large Title is the top-level/scroll-orienting title [5], and prominence comes from style, not size [1] | [1][3][5] | Doc (absence noted), verified 2026-10 |

Not found in HIG: an explicit "how many text styles per screen" number. [unverified that one exists anywhere official]

### A5. Apple: iPhone logical sizes (derived from official pixels)

Pixels and ppi are official [20]-[27]; points are **derived** by dividing pixels by the scale factor. Scale @3x for 460 ppi devices and @2x for 326 ppi devices is our derivation; Apple only states that iOS uses "@2x and @3x" [11]. The simulator confirmed scale=3.0 and the pt sizes for the four models we ran [28].

| Model (iOS 27-compatible [26]) | Pixels (portrait) | ppi | Scale | Points | Src | Status |
|---|---|---|---|---|---|---|
| iPhone 18 Pro, iPhone 17 (6.3") | 1206 x 2622 | 460 | @3x | **402 x 874** | [20][22][28] | Doc px + Obs pt, verified 2026-10 |
| iPhone 18 Pro Max (6.9") | 1320 x 2868 | 460 | @3x | **440 x 956** | [20][28] | verified 2026-10 |
| iPhone Air (6.5") | 1260 x 2736 | 460 | @3x | **420 x 912** | [21][28] | verified 2026-10 |
| iPhone 17e (6.1") | 1170 x 2532 | 460 | @3x | **390 x 844** | [23][28] | verified 2026-10 |
| iPhone 16 (6.1") | 1179 x 2556 | 460 | @3x | 393 x 852 | [24] | Doc px, pt derived |
| iPhone SE 2nd/3rd gen (4.7") | 750 x 1334 | 326 | @2x | **375 x 667** (smallest iOS 27 phone) | [26][27] | Doc px, pt derived |
| iPhone 12/13 mini | — | — | @3x | 375 x 812 | — | [unverified] (not opened) |
| iPhone Duo outer (5.4") | 1398 x 2034 | 460 | @3x? | 466 x 678 if @3x | [25] | px Doc; pt [unverified] |
| iPhone Duo inner (7.6", folding) | 1878 x 2670 | 430 | ? | unknown | [25] | pt [unverified] |

**Figma frame recommendation.** Default **402 x 874** (one size covers iPhone 17, 17 Pro, 18 Pro). Stress-test at **375 x 667** (narrowest + shortest supported) and **440 x 956** (largest). Margins: 16 pt at 375–402 wide, 20 pt at 420–440 wide (B2).

### A6. Material 3 (compact, < 600 dp)

Values from the androidx Compose Material3 token source (`androidx-main`, tokens `VERSION: v0_11_0`) [29][30] and m3.material.io pages read via headless browser [31]-[40].

**Layout**

| Item | Value | Src | Status |
|---|---|---|---|
| Compact width | < 600 dp; single pane; navigation bar (or modal rail), placed near the bottom | [31][32] | Doc, verified 2026-10 |
| Compact margins | "Margins are 16dp from the leading and trailing edge of the window" | [31] | Doc, verified 2026-10 |
| Line length | "adjust margins and type styles to keep text between 40–60 characters per line" | [32] | Doc, verified 2026-10 |
| Spacing semantics | "A denser layout can feel more serious and focused, while a more spacious layout can feel calm and open"; "Desktop layouts can use more generous spacing than mobile layouts"; similar elements same spacing and sizing | [33] | Doc, verified 2026-10 |

**Buttons (M3 Expressive sizes)**

| Size | Height (dp) | Side padding | Icon | Label style (Compose) | Square-shape radius | Src | Status |
|---|---|---|---|---|---|---|---|
| XS | 32 | 16 | 20 | Label Large 14 sp | 12 (Medium) | [29][30] | verified 2026-10 |
| S (default) | **40** | 16 (24 baseline; "Use 16dp" recommended) | 20 | Label Large 14 sp | 12 | [29][30][34][36] | verified 2026-10 |
| M | 56 | 24 | 24 | Title Medium 16 sp | 16 (Large) | [29][30] | verified 2026-10 |
| L | 96 | 48 | 32 | Headline Small 24 sp | 28 (Extra large) | [29][30] | verified 2026-10 |
| XL | 136 | 64 | 40 | Headline Large 32 sp | 28 | [29][30] | verified 2026-10 |

Round shape = fully rounded (`CornerFull`) for all sizes [29]. `ButtonDefaults.MinWidth` 58 dp; MinHeight 40 dp (36 dp with precision pointer) [30].
Usage rules: filled style "ideally for only one action on a page" [35]; "Too many buttons on a screen can disrupt the visual hierarchy" [35]; label "ideally 1–3 words", sentence case, never wrapped [35]; don't stretch into "long, flat buttons" in large windows [35]. **M3 does not state which button sizes to use on compact screens** [34][35][36] (checked 2026-10).

**FAB, bars, lists**

| Component | Value (dp) | Src | Status |
|---|---|---|---|
| FAB small / baseline / medium / large | 40 / 56 / **80** / 96 (icons 24/24/28/32) | [29] | verified 2026-10 |
| FAB guidance | Medium FAB "recommended for most situations"; "Use a medium FAB for mobile layouts, and large FAB for tablets"; small FAB "no longer recommended"; "Don't display multiple FABs on a single screen"; lower right on compact | [37] | Doc, verified 2026-10 |
| Extended FAB S/M/L | 56 / 80 / 96 | [29] | verified 2026-10 |
| Top app bar small | 64 (title Title Large 22 sp) | [29] | verified 2026-10 |
| Medium flexible | 112 expanded (136 with subtitle), Headline Medium 28 sp; collapses to 64 | [29][30] | verified 2026-10 |
| Large flexible | 120 expanded (152 with subtitle), Display Small 36 sp; collapses to 64 | [29][30] | verified 2026-10 |
| Baseline medium / large | 112 / 152 (now "no longer recommended") | [29][38] | verified 2026-10 |
| App bar rules | "1–2 essential actions"; "only have one action, two if necessary"; never shorter than default height; full width; straight corners | [38] | Doc, verified 2026-10 |
| Navigation bar (flexible) | **64** (baseline 80, "no longer recommended"); active indicator 56x32 (vertical item) | [29][39] | verified 2026-10 |
| List item 1 / 2 / 3 lines | **56 / 72 / 88**; padding 16 leading/trailing, 10 top/bottom; leading avatar 40, image 56 | [29] | verified 2026-10 |
| List targets | "Target size must be at least 48x48dp" | [40] | Doc, verified 2026-10 |
| Search bar | 56, full radius | [29] | verified 2026-10 |
| Floating toolbar | 64, full radius, 16 external padding | [29] | verified 2026-10 |
| Bottom sheet drag handle | 32 x 4 | [29] | verified 2026-10 |
| Shape scale | XS 4, S 8, M 12, L 16, L-increased 20, XL 28, XL-increased 32, XXL 48, Full | [29] | verified 2026-10 |
| Type scale | Display 57/45/36, Headline 32/28/24, Title 22/16/14, Body 16/14/12, Label 14/12/11 (sp) | [29] | verified 2026-10 |

### A7. Reach, grip, mobile content (research)

| Claim | Evidence | Grade | Src | Status |
|---|---|---|---|---|
| Grip mix (2013) | 780 people touching screens, public places, informal observation: one-handed 49%, cradled 36%, two-handed 15%; one-handed right thumb 67% | E2 (large n, but convenience sample, no demographics, first seconds only) | [41] | verified 2026-10 |
| People shift grip often | "sometimes every few seconds"; anecdotal, not quantified | E3 | [41] | verified 2026-10 |
| Classic thumb-zone heat map | Hoober later says his own reach drawings came from informal sampling of coworkers "and should be ignored"; 2017: the thumb-sweep chart is "well-known, but incorrect" (assumes one hand, small phone) | **E3 — do not use as a rule** | [41][42] | verified 2026-10 |
| Center is best | People "prefer to view and touch the center of the screen" and scroll content to the middle; accuracy highest at center: ~7 mm targets at center vs ~12 mm in corners (95% of taps) | E2 (author's own data, sample per figure not reported) | [42] | verified 2026-10 |
| Layout model | Primary content in the center (lists, grids); secondary actions (tabs, action buttons) along top and bottom edges; tertiary in corner menus | E2 | [42] | verified 2026-10 |
| Apple's position | Middle or bottom is easier to reach; swipe-back and row swipe actions matter | E2 | [8] | verified 2026-10 |
| Screen cost | "Think hard of the opportunity cost of each new element... something else gets pushed out (or below the fold)"; "Content and feature prioritization is key" | E2 | [43] | verified 2026-10 |
| Decorative bloat | "pages needlessly lengthened by images and graphics that are decorative and unnecessary"; users won't "scroll for the sake of scrolling" | E2 | [44] | verified 2026-10 |

**Apply.** Put the primary content in the middle band, persistent navigation at the bottom, and the primary action either in the bottom area (sheet, onboarding footer) or as the trailing toolbar item. Don't treat the top corners as off-limits (Back lives there and people use it) [42].
**Limit.** No platform or study gives a "hero must be ≤ X% of the screen" number. The rule is opportunity cost: every tall decorative block pushes task content down [43][44].

---

## (b) Observed / derived values (how we got them)

### B1. Method
A minimal UIKit + SwiftUI probe app, compiled with Xcode 27.1 (iPhoneSimulator27.1 SDK, deployment target iOS 26.0), run on the iOS 27.0 simulator for iPhone 17e, 17, Air and 18 Pro Max at the default text size (Large). It logs `systemLayoutSizeFitting` / GeometryReader sizes, frames, margins, and `UIFont.preferredFont` metrics, plus one screenshot measured at 3 px/pt [28]. Values are what the system renders, not documented specs. They may shift with Dynamic Type and between OS releases.

### B2. Margins (Obs [28])

| Width (pt) | Device | `systemMinimumLayoutMargins` leading/trailing | Plain VC root margins | Inset-grouped list inset | Readable width |
|---|---|---|---|---|---|
| 390 | iPhone 17e | 16 | 16 | 16 (row width 358) | 358 |
| 402 | iPhone 17 / 18 Pro | 16 | 16 | **20** (row width 362) | 362–370 |
| 420 | iPhone Air | 20 | 20 | 20 (row width 380) | 380 |
| 440 | iPhone 18 Pro Max | 20 | 20 | 20 (row width 400) | 400 |

Rule derived: **16 pt side margin up to 402 pt wide, 20 pt from 420 pt**. Inset-grouped lists already use 20 at 402. Material uses 16 dp on all compact widths [31].

### B3. Control heights, iOS 27 simulator (Obs [28])

Same values from SwiftUI `.controlSize()` and UIKit `UIButton.Configuration.buttonSize`, for every style tested (bordered, borderedProminent, glass, glassProminent, filled, tinted, gray):

| SwiftUI ControlSize | UIKit Configuration.Size | Height (pt) | Width of "Continue" (pt) | Label size (visual) |
|---|---|---|---|---|
| mini | mini | 28 | 82 | ~15 pt (smaller) [visual estimate] |
| small | small | 28 | 82 | ~15 pt [visual estimate] |
| regular (default) | medium | **34.33** | 92.67 | ~17 pt [visual estimate] |
| large | large | **50.33** | 108.67 | ~17 pt (same size; more padding) [visual estimate] |
| extraLarge | — | 50.33 (= large on iPhone, as documented [12]) | 108.67 | — |

Other controls: UISwitch 61 x 28; segmented control 31 h; rounded text field 34 h; slider 34 h; UISearchBar 64 h (incl. padding) [28].
`buttonSizing(.flexible)` on a 402 pt phone: 370 wide (screen − 2 x 16) [28].

**Implication.** An Apple-proportioned phone primary CTA is about **50 pt tall** (system Large), capsule, label at body size (17 pt), never more. The default in-content button is about 34 pt. Every visible control below 44 pt relies on an invisible 44 pt hit region [1]. The M3 equivalent default is 40 dp; M3 Medium is 56 dp; M3 L (96) and XL (136) are emphasis sizes with no compact-use guidance [29][34].

### B4. Chrome and rows, iPhone 17 at 402 x 874 (Obs [28])

| Element | pt | % of 874 | Note |
|---|---|---|---|
| Top safe area (status bar + Dynamic Island) | 62 | 7.1% | 47 on 17e, 68 on Air, 62 on 18 Pro Max |
| Nav bar with large title (expanded) | 106 | 12.1% | Same 106 on all 4 widths |
| Top chrome total, large title | 168 | 19.2% | |
| Nav bar collapsed (inline title) | 54 | 6.2% | Top chrome total 116 (13.3%) |
| Tab bar frame (incl. 34 pt home indicator) | 83 | 9.5% | Same on all 4 |
| Visible floating tab-bar capsule (2 tabs) | ~62 h x ~188 w, bottom ~21 above screen edge | ~7% | Screenshot measurement, ±2 pt |
| Content zone at rest (large title + tab bar) | 623 | **71%** | 677 / 77% after the title collapses |
| Inset-grouped row, 1 line (with or without icon) | **53** | 6.1% | |
| Inset-grouped row, title + subtitle | **69.33** | 7.9% | |
| Section header (first) | 38 | | Gap after section (footer) 17.33 |
| Separator inset with leading icon | 56 (16 + icon column) | | 16 without icon; 60/20 on 420+ widths |

Text styles at default size (Obs [28]; matches the HIG table already in `digital-platforms.md`): Large Title 34 (line 40.6), Title 1 28, Title 2 22, Title 3 20, Headline 17, Body 17, Callout 16, Subheadline 15, Footnote 13, Caption 1 12, Caption 2 11.

**Derived proportion rules (Apple-calibrated, our synthesis — validate against real apps):**
- The largest text on a standard iPhone screen is the 34 pt Large Title, and only for the top-level, scrollable screen [5]. Body content is 17 pt. That is a **2:1 ratio** between the biggest and the reading size. A heading that exceeds ~34 pt in app UI breaks Apple proportions (marketing or onboarding heroes are the exception, and no official number exists).
- Rows are about 53 pt for 1 line (~6% of screen height), so about 11–12 rows fit in the content zone. Buttons are 34 pt (in content) or 50 pt (primary). The ratio of primary CTA to row height is about 1:1.
- System chrome takes about 29% of the screen at rest (top 19% + tab bar 9.5%), and content gets about 71%.

### B5. Material derived
At 360–412 dp compact width with 16 dp margins, the full-width content column is 328–380 dp. Top app bar 64 + nav bar 64 = 128 dp of chrome; the large flexible app bar takes 120–152 dp expanded [29]. One-line list rows are 56 dp, about 3 dp taller than iOS's 53 pt, and both are near-identical [28][29].

---

## (c) Could not verify / not documented

| Item | Status |
|---|---|
| Official iOS point heights for buttons, nav bar, tab bar, list rows | Not published in the HIG or the API docs (checked 2026-10). Apple Design Resources (iOS 26 Figma/Sketch kit) not opened. [unverified] |
| iOS 26 (vs iOS 27) control heights | Probe ran on iOS 27.0 only. [unverified] for 26 |
| Heights at other Dynamic Type sizes | Not measured. They grow with text size. [unverified] |
| Inset-grouped section corner radius, glass button corner/shadow metrics | Not measured. [unverified] |
| "3–5 tabs" rule | Not in the current HIG (only "fewer tabs" + avoid More; "five or fewer" for customizable iPad tab bars) [4]. Any 3–5 number is [unverified] |
| HIG device-size table (former Layout "Specifications") | Removed in the 2026-09-09 revision [2]. Older values not re-opened. [unverified] |
| iPhone 12/13 mini 375 x 812 pt | Not opened this pass. [unverified] |
| iPhone Duo point sizes and scale factor | Pixels official [25]; points [unverified] |
| A hero/header height as a % of screen | No platform guidance exists. Only opportunity-cost guidance [43][44] |
| Per-screen limit on number of type sizes | No official number found. [unverified] |
| Full-width primary button on iOS as an official rule | Only watchOS has it [1]. On iOS it is an API option [13] plus the WWDC "capsule with extra margin" phone guidance [16] |
| Thumb-zone heat maps (Hoober 2011/2013, Wroblewski) | Disowned by the original author [41][42]. E3 |

---

## Sources

[1] Apple. (2025, updated Dec 16). *Buttons*. Human Interface Guidelines. https://developer.apple.com/design/human-interface-guidelines/buttons
[2] Apple. (2026, updated Sep 9). *Layout*. Human Interface Guidelines. https://developer.apple.com/design/human-interface-guidelines/layout
[3] Apple. (2025, updated Dec 16). *Typography*. Human Interface Guidelines. https://developer.apple.com/design/human-interface-guidelines/typography
[4] Apple. (n.d., accessed 2026-10-26). *Tab bars*. Human Interface Guidelines. https://developer.apple.com/design/human-interface-guidelines/tab-bars
[5] Apple. (n.d., accessed 2026-10-26). *Toolbars*. Human Interface Guidelines. https://developer.apple.com/design/human-interface-guidelines/toolbars
[6] Apple. (n.d., accessed 2026-10-26). *Sheets*. Human Interface Guidelines. https://developer.apple.com/design/human-interface-guidelines/sheets
[7] Apple. (2023). *Lists and tables*. Human Interface Guidelines. https://developer.apple.com/design/human-interface-guidelines/lists-and-tables
[8] Apple. (n.d., accessed 2026-10-26). *Designing for iOS*. Human Interface Guidelines. https://developer.apple.com/design/human-interface-guidelines/designing-for-ios
[9] Apple. (2026, Jun 8). *Design principles*. Human Interface Guidelines. https://developer.apple.com/design/human-interface-guidelines/design-principles
[10] Apple. (2026). *Designing for iPhone Duo*. Human Interface Guidelines. https://developer.apple.com/design/human-interface-guidelines/designing-for-iphone-duo
[11] Apple. (n.d., accessed 2026-10-26). *Images*. Human Interface Guidelines. https://developer.apple.com/design/human-interface-guidelines/images
[12] Apple. (n.d.). *ControlSize*, *ControlSize.extraLarge*, *GlassProminentButtonStyle*. SwiftUI documentation. https://developer.apple.com/documentation/swiftui/controlsize ; https://developer.apple.com/documentation/swiftui/controlsize/extralarge ; https://developer.apple.com/documentation/swiftui/glassprominentbuttonstyle
[13] Apple. (n.d.). *buttonSizing(_:)* and *ButtonSizing*. SwiftUI documentation. https://developer.apple.com/documentation/swiftui/view/buttonsizing(_:) ; https://developer.apple.com/documentation/swiftui/buttonsizing
[14] Apple. (n.d.). *ConcentricRectangle*. SwiftUI documentation. https://developer.apple.com/documentation/swiftui/concentricrectangle
[15] Apple. (n.d.). *layoutMargins*, *directionalLayoutMargins*, *systemMinimumLayoutMargins*, *readableContentGuide*. UIKit documentation. https://developer.apple.com/documentation/uikit/uiview/layoutmargins ; https://developer.apple.com/documentation/uikit/uiview/directionallayoutmargins ; https://developer.apple.com/documentation/uikit/uiviewcontroller/systemminimumlayoutmargins ; https://developer.apple.com/documentation/uikit/uiview/readablecontentguide
[16] Apple. (2025). *Get to know the new design system* (WWDC25 session 356, transcript). https://developer.apple.com/videos/play/wwdc2025/356/
[17] Apple. (2025). *Meet Liquid Glass* (WWDC25 session 219, transcript). https://developer.apple.com/videos/play/wwdc2025/219/
[18] Apple. (2025). *Build a SwiftUI app with the new design* (WWDC25 session 323, transcript). https://developer.apple.com/videos/play/wwdc2025/323/
[19] Apple. (2025). *Build a UIKit app with the new design* (WWDC25 session 284, transcript). https://developer.apple.com/videos/play/wwdc2025/284/
[20] Apple. (2026). *iPhone 18 Pro and iPhone 18 Pro Max — Technical Specifications*. https://www.apple.com/iphone-18-pro/specs/
[21] Apple. (2025). *iPhone Air — Technical Specifications*. https://www.apple.com/iphone-air/specs/
[22] Apple. (2025). *iPhone 17 — Technical Specifications*. https://www.apple.com/iphone-17/specs/
[23] Apple. (2026). *iPhone 17e — Technical Specifications*. https://www.apple.com/iphone-17e/specs/
[24] Apple. (2024). *iPhone 16 — Technical Specifications*. https://www.apple.com/iphone-16/specs/
[25] Apple. (2026). *iPhone Duo — Technical Specifications*. https://www.apple.com/iphone-duo/specs/
[26] Apple. (2026). *iOS 27* (compatible devices list). https://www.apple.com/os/ios/
[27] Apple Support. (n.d.). *iPhone SE (3rd generation) — Tech Specs*. https://support.apple.com/en-us/111866
[28] Design Studio research. (2026, Oct 26). *Layout probe: iOS 27.0 Simulator, Xcode 27.1, iPhone 17e/17/Air/18 Pro Max* (UIKit + SwiftUI measurement app; source and raw logs in `dev/research/mobile-proportions-2026-10/probe/`). Unpublished measurement.
[29] Google / AOSP. (2026, accessed Oct 26). *Compose Material3 design tokens* (ButtonXSmall/Small/Medium/Large/XLargeTokens, BaselineButtonTokens, Fab*Tokens, ExtendedFab*Tokens, AppBar*Tokens, NavigationBar*Tokens, ListTokens, SearchBarTokens, FloatingToolbarTokens, SheetBottomTokens, ShapeTokens, TypeScaleTokens; token version v0_11_0). androidx/androidx, branch androidx-main. https://github.com/androidx/androidx/tree/androidx-main/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/tokens
[30] Google / AOSP. (2026, accessed Oct 26). *Button.kt* (ButtonDefaults: MinWidth, MinHeight, textStyleFor) and *AppBar.kt* (TopAppBarDefaults heights). androidx/androidx. https://github.com/androidx/androidx/blob/androidx-main/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt ; https://github.com/androidx/androidx/blob/androidx-main/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
[31] Google. (n.d., accessed 2026-10-26). *Breakpoints: Compact*. Material Design 3. https://m3.material.io/foundations/layout/applying-layout/compact
[32] Google. (n.d., accessed 2026-10-26). *Breakpoints (window size classes)*. Material Design 3. https://m3.material.io/foundations/layout/applying-layout/window-size-classes
[33] Google. (n.d., accessed 2026-10-26). *Grids & spacing: Spacing*. Material Design 3. https://m3.material.io/foundations/layout/understanding-layout/spacing
[34] Google. (n.d., accessed 2026-10-26). *Buttons: Overview*. Material Design 3. https://m3.material.io/components/buttons/overview
[35] Google. (n.d., accessed 2026-10-26). *Buttons: Guidelines*. Material Design 3. https://m3.material.io/components/buttons/guidelines
[36] Google. (n.d., accessed 2026-10-26). *Buttons: Specs*. Material Design 3. https://m3.material.io/components/buttons/specs
[37] Google. (n.d., accessed 2026-10-26). *FAB: Guidelines*. Material Design 3. https://m3.material.io/components/floating-action-button/guidelines
[38] Google. (n.d., accessed 2026-10-26). *App bars: Guidelines*. Material Design 3. https://m3.material.io/components/app-bars/guidelines
[39] Google. (n.d., accessed 2026-10-26). *Navigation bar: Specs*. Material Design 3. https://m3.material.io/components/navigation-bar/specs
[40] Google. (n.d., accessed 2026-10-26). *Lists: Specs*. Material Design 3. https://m3.material.io/components/lists/specs
[41] Hoober, S. (2013, February). *How Do Users Really Hold Mobile Devices?* UXmatters. https://www.uxmatters.com/mt/archives/2013/02/how-do-users-really-hold-mobile-devices.php
[42] Hoober, S. (2017, March). *Design for Fingers, Touch, and People, Part 1*. UXmatters. https://www.uxmatters.com/mt/archives/2017/03/design-for-fingers-touch-and-people-part-1.php
[43] Budiu, R. (2015, Apr 19). *Mobile User Experience: Limitations and Strengths*. Nielsen Norman Group. https://www.nngroup.com/articles/mobile-ux/
[44] Budiu, R. (2023, Jan 1). *The State of Mobile User Experience*. Nielsen Norman Group. https://www.nngroup.com/articles/state-mobile-ux/
