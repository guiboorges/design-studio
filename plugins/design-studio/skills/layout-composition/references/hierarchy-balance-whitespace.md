# Hierarchy, Balance, and Whitespace

> **Scope:** Procedures for building visual hierarchy, balance, focal points, whitespace, and density, plus an honest look at proportion systems (golden ratio, rule of thirds, root rectangles, ISO √2) and single-glance composition for posters, thumbnails, and OOH.
> **Last verified:** 2026-10 (design-system density guidance)
> **Used by:** creative-director, ui-designer, editorial-designer, social-media-designer, print-ooh-designer, typographer, design-critic, design-system-architect

## How to use this file

- Building or critiquing a layout: run the **hierarchy procedure** (section 1), then the **balance check** (section 3), then **whitespace and density** (sections 5–6).
- Choosing proportions: read section 8 before using the golden ratio or rule of thirds as a justification.
- Posters, thumbnails, billboards: section 9.
- Don't repeat here: the Gestalt principles (proximity, similarity, common region, figure-ground) are in `cognitive-psychology` → `gestalt.md`. Pre-attentive features, scanning patterns (F, Z, layer-cake), faces and gaze, and banner blindness are in `cognitive-psychology` → `attention-and-scanning.md`. Grids are in `grid-systems.md`. Type scales are in `typography` → `scale-and-rhythm.md`. Contrast math is in `color` → `contrast-and-dark-mode.md`.

---

## 1. Visual hierarchy: the procedure

**Definition:** Visual hierarchy is the arrangement of elements so the eye reaches them in order of importance [1]. **[E2]**

### 1.1 Steps

1. **Rank the content.** Write every element on a list and give it a rank: 1 (the one thing), 2 (supporting, 2–4 items), 3 (everything else). If two items share rank 1, the brief is unresolved. Ask, or pick one.
2. **Assign one dominant element.** Rank 1 gets the strongest contrast with its surroundings on at least two dimensions (for example size *and* weight, or size *and* isolation).
3. **Step down by clear intervals.** Each rank must differ visibly from the next. NN/g suggests no more than three type sizes (small, medium, large) and no more than two large elements [1][2]. **[E2]**
4. **Use the levers** (table 1.2), starting with the cheapest: position and space before color and decoration.
5. **Group** related items (proximity, common region). Rules are in `cognitive-psychology` → `gestalt.md`.
6. **Test.** Run the squint/blur test (1.3) and the 5-second test (1.4). Fix and repeat.

### 1.2 Levers

| Lever | Raises rank when | Typical move | Watch out |
|-------|------------------|--------------|-----------|
| **Size / scale** | Larger than neighbors | Headline 2–4× body size on screens, 4–10× on posters | Size alone fails if everything is large [1] |
| **Weight** | Heavier stroke or fill | Bold heading with regular body | More than 2–3 weights creates noise |
| **Color (hue, saturation)** | Saturated or accent color among neutrals | One accent for the primary action | Never color alone: some users can't see the difference [1]. See `color` → `contrast-and-dark-mode.md` |
| **Value contrast** | Large lightness difference from the background | Dark button on light surface | "If everything is contrasted, then nothing stands out" [1] |
| **Position** | Top and leading side (left in LTR) | Primary content top-left, actions where the task ends | Apple: people often read top to bottom and leading to trailing, so put the most important items near the top and leading side [3]. **[E2]** |
| **Space / isolation** | Surrounded by more empty space than its neighbors | Hero headline with large margins | Expensive in dense UIs. Use where rank 1 lives |
| **Alignment / indentation** | Breaks the main alignment, or sits at the head of an aligned column | Pull quote breaking the column; indented items read as subordinate [3] | Breaking alignment once is emphasis. Breaking it often is mess |
| **Enclosure / common region** | Has its own container or background | Card, banner, highlighted panel | Boxes everywhere cancel each other |
| **Imagery and faces** | Contains a face or high-detail image | Hero photo | Faces strongly pull gaze. See `attention-and-scanning.md` §6 |
| **Motion** | Moves while others are still | Subtle entrance on the primary CTA | Strongest lever, fastest to annoy. Respect reduced motion |
| **Typeface contrast** | Different family or case | Display serif heading over sans body | Pairing rules in `typography` → `pairing-and-selection.md` |

### 1.3 Squint / blur test
- **How:** Squint, or apply a slight Gaussian blur (Figma layer blur about 4–8px at 100% zoom, or view at 25% zoom). NN/g describes designers squinting or applying a slight blur to reveal groupings and hierarchy [1]. **[E2]**
- **Pass:** You can name rank 1 in under a second, see 2–4 rank-2 masses, and see clear group boundaries.
- **Fail:** Several equal blobs (no dominant), a decorative element reads as rank 1, or groups run together.

### 1.4 Five-second / first-glance test
Show the design for about 5 seconds to someone who hasn't seen it, then ask "What was this about? What would you click?" If they name the wrong thing, rank 1 is not dominant. This is a practitioner method, not a standardized metric. **[E2]**

**Apply**
- *UI/app:* One primary action per view. Secondary actions take lower weight (outline or text buttons). Destructive actions are separated by space, not by color alone.
- *Web:* Hero headline as rank 1, one CTA as rank 2. Navigation is rank 3 visually even though it's always present.
- *Print/editorial:* Headline → image → deck → byline → body. Pull quotes act as secondary entry points.
- *Social:* The hook text or subject face is rank 1 at thumbnail size. Logo is rank 3.
- *OOH:* One message, one image, one brand mark. See section 9.

**Limit:** Hierarchy can be used to hide what users need (low-contrast "decline" links, buried cancellation). That is a dark pattern. See `cognitive-psychology` → `dark-patterns-and-ethics.md`.

---

## 2. Visual weight

**Rule:** Every element has a perceptual "weight." Balance and hierarchy both come from managing it.

The classic account is Rudolf Arnheim's *Art and Visual Perception* (1954). As summarized by Hübner and Fillinger [4]:
- Each rectangular frame has "a hidden structure or field of invisible forces." The center attracts most strongly, then the corners, the main axes, and the diagonals.
- "Every visual pattern has a center of perceptual 'mass,'" and a picture is balanced when that center coincides with the frame's geometric center.
- Weight factors: larger elements are heavier; red is heavier than blue; regular shapes are heavier than irregular ones; weight increases with distance from the center (the lever principle).
- Arnheim himself "conceded that most of these factors have to be verified" [4].

| Factor | Heavier when | Evidence |
|--------|--------------|----------|
| Size | Larger | [E2] Arnheim's model; a center-of-"mass" measure built on it predicted balance ratings of simple shape compositions well [4] |
| Distance from center | Farther from center (lever) | [E2] Arnheim's model, used in the same center-of-mass measure [4] |
| Value / contrast | Higher contrast with the background | [E2] practitioner consensus |
| Color | Warm, saturated hues (Arnheim: red over blue) | [E3] Arnheim's claim, flagged by him as unverified [4] |
| Shape regularity | Regular, compact shapes | [E3] Arnheim's claim [4] |
| Texture / detail | Busier, more detailed | [E2] craft consensus |
| Isolation | Alone in empty space | [E2] craft consensus |
| Faces, text, recognizable objects | Present | [E2] for attention (see `attention-and-scanning.md`); weight framing is craft |
| Position (upper vs. lower) | Upper elements often described as "heavier" | [E3] traditional claim; treat as a hypothesis |

**Apply:** To balance a large light element, use a smaller dark or saturated element farther from the center. To keep a CTA dominant, don't place a heavier image next to it.

---

## 3. Balance

### 3.1 Types

| Type | Definition [2] | Feel | Use for |
|------|----------------|------|---------|
| **Symmetrical** | Elements mirrored around a central axis | Quiet, static, formal [2] | Invitations, luxury, institutional, ceremonial covers, centered landing heroes with one message |
| **Asymmetrical** | Unequal elements distributed so weight evens out around the axis | Energetic, modern [2] | Editorial, Swiss-style, most web and app layouts, posters with tension |
| **Radial** | Elements radiate from a common center [2] | Focused, circular movement | Logos, badges, data hubs, event posters with one central subject |
| **Mosaic / all-over** | Many equal-weight elements, no dominant | Rich, busy | Pattern, galleries, maximalist styles. Hierarchy must come from elsewhere |
| **Intentional imbalance** | Weight deliberately off-center | Tension, movement | Covers, campaign posters, motion frames. Use once, deliberately |

### 3.2 Evidence
- Balance is measurable. Hübner and Fillinger (2016) compared two objective measures on simple compositions of seven black shapes. A center-of-mass deviation measure predicted *balance* ratings better. Wilson and Chatterjee's APB score predicted *liking* better. The authors concluded that preference "not only depends on balance, but also on homogeneity" [4]. Samples were small (16–23 analyzed participants per experiment) and the stimuli were abstract. **[E1 for the measurement result; E2 for transfer to real layouts]**
- Practical reading: balance makes a composition read as stable. It does not on its own make it liked or effective. A balanced but dull layout is still dull.

### 3.3 Balance check (procedure)
1. Blur the design (section 1.3).
2. Estimate each mass: area × darkness/saturation.
3. Find the visual center of mass. Is it near the center (stable), or deliberately off-center (tension)? Either is fine if it was a choice.
4. If one side sinks, add a counterweight on the other side (smaller but darker, or farther out), or remove weight. Don't add a new element just to fill space.

**Apply:** *UI:* asymmetric balance is the norm (nav left, content right). Balance dense side panels with whitespace in the main area. *Print:* facing pages balance as a spread, not page by page. *Social:* in a carousel, balance each frame and the sequence. *OOH:* symmetric layouts read fastest when the message is one word or one product.

---

## 4. Tension, movement, and focal points

### 4.1 Focal point
- **Rule:** One focal point per view, two at most. Everything else supports it.
- The Gestalt file covers the "focal point" label and where it comes from (`cognitive-psychology` → `gestalt.md`, "Focal point" section).
- **Make one:** contrast on two or more levers (section 1.2), plus isolation.

### 4.2 Directing movement
| Device | Effect | Evidence |
|--------|--------|----------|
| Gaze of a pictured face | Viewers tend to look where the face looks | [E1/E2]. Details and limits in `attention-and-scanning.md` §6 |
| Pointing shapes, arrows, diagonals, leading lines | Lead the eye toward the target | [E2] craft consensus |
| Sequence of decreasing sizes | Eye steps from large to small | [E2] |
| Reading direction | LTR readers tend to start top-left; RTL readers top-right | [E2]. See `attention-and-scanning.md` §5 |
| Cropping and edge tension | A subject near or cut by the edge creates tension and implied motion | [E3] craft observation |
| Open space ahead of a moving or facing subject | Feels natural; space behind feels tense | [E3] photographic convention (see rule of thirds, section 8.2) |

**Limit:** Directional cues do not override task goals. In UI, users skip decorative cues and look for the thing they came for (see `attention-and-scanning.md` on banner blindness).

---

## 5. Whitespace

### 5.1 Types
- **Macro whitespace:** space between major elements (sections, columns, margins). **Micro whitespace:** space between small elements (list items, caption to image, letters, lines) [5].
- **Passive whitespace:** gives balance and breathing room. **Active whitespace:** deliberately leads the reader to an element, for example extra space around a key quote [5].

### 5.2 Rules
1. **Inside < between.** Space inside a group is clearly smaller than space between groups. Go up at least two steps on the spacing scale between levels (for example, 8 inside, 24 between, 64 between sections). See the token scale in `grid-systems.md` §7.
2. **Rank 1 gets the most isolation.** Space is a hierarchy lever (section 1.2).
3. **Margins around reading text are not optional.** Even dense apps keep 16px or more of text inset on phones.
4. **Line spacing and measure are micro whitespace.** Their values belong in `typography` → `scale-and-rhythm.md` and `legibility-by-medium.md`.
5. **Whitespace signals register.** Generous space reads as premium and calm; tight space reads as urgent, cheap, or information-rich. Mark Boulton's summary: "Less whitespace = cheap; more whitespace = luxury," while noting that brand positioning depends on much more [5]. **[E3: practitioner observation, not measured]**

### 5.3 What the research actually says
The claim "white space increases comprehension by almost 20%" is widely repeated. Usually it is attributed to a study by D. Y. M. Lin in *Computers in Human Behavior* (2004).
- **Lin (2004):** the matching paper is "Evaluating older adults' retention in hypertext perusal: impacts of presentation media as a function of text topology," *Computers in Human Behavior* 20(4), 491–503 [6]. Its title and the abstract summaries we found concern presentation media (animated graphs, static pictures, text) and hypertext structure with older adults (24 participants), not page margins or white space. We could not open the full text, so a passing mention of white space can't be ruled out. But the paper does not appear to be a white-space study. **Treat the attribution as unsupported.**
- **Chaparro, Baker, Shaikh, Hull, and Brady (2004), Wichita State SURL, *Usability News* 6:** compared four on-screen layouts by varying margins and leading. Abstract: "the use of margins affected both reading speed and comprehension more than the No Margin text," participants were "generally more satisfied with the text with margins," and leading "was not shown to impact reading performance but did influence overall user preference" [7]. The abstract gives no 20% figure. If one exists, it would be in the full report, which we could not open [unverified].
- A follow-up from the same group (2005) found that an enhanced layout (headers, indentation, figure placement) did not change reading speed or comprehension but improved satisfaction [unverified: from a search-result summary; not opened].

**Grade:**
- "Margins around on-screen text help reading and are preferred": **[E2]**. One small lab study, consistent with craft consensus and typographic tradition.
- "White space increases comprehension by 20%": **[E3]**. The number is unsourced or misattributed. Don't quote it.
- "More line spacing improves performance": not shown in Chaparro et al. It affected preference only [7]. **[E3 as a performance claim]**

**Apply:** Keep text margins and paragraph spacing. Justify them as readability craft and preference, not with a percentage.

**Limit:** Whitespace costs scrolling and density. Experts doing repeated work often need more on screen (section 6). Excess whitespace can push key content below the fold or split groups apart, which breaks proximity.

---

## 6. Density: expert tools vs. consumer products

### 6.1 Rule
Set density by task frequency and expertise. Consumer and first-run flows get comfortable density. Repeated, data-heavy expert work gets compact density, ideally as a user choice.

### 6.2 What design systems do (verified 2026-10)
- **AWS Cloudscape** offers two modes [8]:
  - *Comfortable* is the default, optimized for "content consumption and readability."
  - *Compact* is for data-intensive views (dashboards, resource lists, resource details). It reduces the spacing scale in 4px increments, tightening padding and margins.
  - Users can switch at any time, and the mode applies across the whole app.
  - Compact is **not fully applied** to informational content (help, alerts, validation messages) or to small-target controls (selects, date pickers, data-vis), to protect reading and pointing.
- **Fluent 2** uses a 4px base unit and a ramp from 0 to 56px [9], so density steps can move by 4px.
- MUI exposes `dense`-style props on buttons, inputs, lists, tables, and toolbars, and warns against applying its dense demo theme to a whole app because it "might negatively impact user experience" [10].

### 6.3 Starting values

| Level | Use | Row/list item height | Control padding | Body text |
|-------|-----|---------------------|-----------------|-----------|
| Spacious | Marketing, onboarding, reading | 56–72px | 16–24px | 16–18px |
| Comfortable (default) | Consumer apps, most SaaS | 48–56px | 12–16px | 14–16px |
| Compact | Admin, dashboards, tables, IDEs, trading | 32–40px | 4–8px | 13–14px |

These are starting values, not standards. Touch-target minimums are in `media-specs` → `digital-platforms.md`, and the WCAG 2.5.8 rule is in `accessibility` → `wcag-22-in-practice.md`. Compact density on touch devices must still meet them.

**Apply**
- *Expert UI:* compact tables with comfortable forms. Persistent density setting. Keep text size readable, and reduce padding before font size.
- *Consumer UI:* comfortable default; no density toggle needed.
- *Print:* annual-report data pages run denser than narrative pages, on the same grid.

**Limit:** Density never justifies text below legible sizes or contrast below WCAG. Dense ≠ cluttered. Keep alignment and grouping strict, because there is less space to signal structure.

---

## 7. Proximity and alignment (summary)

The principles and their evidence are in `cognitive-psychology` → `gestalt.md`. Working rules:
- Related items closer together, unrelated items farther apart (section 5.2, rule 1).
- People assume aligned items are related, and see indented items as subordinate [3]. **[E2]**
- Use as few alignment lines as possible. Every new left edge is a new thing to read.
- Align text by its baseline or cap height, not its bounding box. Align icons by their optical center.
- Prefer left (start) alignment for reading text in LTR languages. Centered text works for short, symmetrical compositions.

---

## 8. Proportion systems: what holds up

### 8.1 Golden ratio (φ ≈ 1.618)
- **Fact:** φ = (1 + √5) / 2 ≈ 1.6180. A golden rectangle minus a square leaves a smaller golden rectangle.
- **Claims and status:**

| Claim | Status |
|-------|--------|
| People prefer golden rectangles | **[E3]**. Fechner reported a preference near φ in the 1870s, but later careful tests were "at best, inconclusive" [11]. Green's 1995 review in *Perception* concluded the golden section seems to produce real effects but that they are sensitive to careless methodology [12]. Friedenberg (2012) calls the finding unstable: "It turns up in some studies but disappears in others" [13]. Boselie (1992) found no preference difference between 1.5 and 1.618 in Mondrian-like rectangles (as reported by Friedenberg) [13]. |
| Markowsky's critique | George Markowsky's "Misconceptions about the Golden Ratio," *College Mathematics Journal* 23(1), 2–19 (1992) [14], is the standard debunking of art, architecture, and body claims. Secondary summaries report that in his own test people did not reliably pick the golden rectangle, and the most chosen ratio was about 1.83 [unverified: we could not open the original]. |
| The Parthenon, Great Pyramid, Mona Lisa use φ | **Myth.** Parthenon claims are "largely discredited." Modern scholars don't think the Great Pyramid is based on φ. Leonardo's writings don't support the Mona Lisa claim [11] (secondary source summarizing Livio 2002 and Devlin). |
| Human bodies and nautilus shells follow φ | **Myth.** Measured ratios vary widely, and nautilus measurements "do not support this claim" [11]. |
| Classic books use golden proportions | **Disputed.** Tschichold claimed many 1550–1770 books show these proportions exactly. But one historian's own measurements of Gutenberg Bible pages give a ratio of 1.45, not 1.618 [11]. The "golden canon" in `grid-systems.md` uses a 2:3 page. |
| Famous logos were drawn on golden circles | **[E3]**. Overlays are usually drawn after the fact, and with thick lines any curve "fits." No evidence it affects viewers. |

- **Apply:** Use φ as one possible ratio for a type scale or layout split (for example a 38/62 sidebar split) if you like it. Its real value is consistency, not magic. Ratios of 1.5 (3:2) and 1.618 differ little in practice: Boselie found no preference difference between them [13].
- **Limit:** Never justify a design to a client with "it's the golden ratio, so people prefer it." That is an [E3] claim.

### 8.2 Rule of thirds
- **Origin:** First written down by John Thomas Smith in *Remarks on Rural Scenery* (1797). Building on Reynolds, he argued a ratio near 2:1 for sky and land was "a much better and more harmonizing proportion" than an even half [15] (secondary source).
- **Rule:** Divide the frame into a 3 × 3 grid. Place horizons on a third line and subjects near intersections, with space ahead of a moving or facing subject.
- **Evidence:** Amirshahi, Hayn-Leichsenring, Denzler, and Redies (2014) computed rule-of-thirds compliance from saliency maps. Aesthetic ratings correlated only weakly with subjective rule-of-thirds scores and not at all with computed ones. High-rated photos and a large set of paintings scored about as low as non-compliant photos. They concluded the rule "seems to play only a minor, if any, role" in large sets of high-quality photographs and paintings [16]. **[E3 as an aesthetic law; E2 as a beginner heuristic]**
- **Apply:** A default for cropping photos and placing subjects in social frames and thumbnails. It moves beginners off dead-center and stops horizons from splitting the frame.
- **Limit:** Centered, symmetrical compositions are often stronger (portraits, products, logos, OOH with one object). On social, platform UI covers parts of the frame, so the safe zone matters more than the thirds lines (`media-specs` → `social-formats.md`).

### 8.3 Root rectangles and dynamic symmetry
- **What:** Rectangles with sides 1 : √n (√2, √3, √5), promoted by Jay Hambidge as "dynamic symmetry" (*Dynamic Symmetry: The Greek Vase*, 1920) [17] (secondary source).
- **Status:** Hambidge built the theory from claimed Greek proportions. In 1921 Edwin Blake (*The Art Bulletin*) and Rhys Carpenter (*American Journal of Archaeology*) published critiques. Later writers call the historical theory discredited, though artists liked it [17]. **[E3 as history or perception]**
- **Apply:** Root rectangles are useful *construction* tools. Their diagonals and subdivisions give a consistent set of alignment points for posters and covers. The √2 rectangle is practical because it is the ISO paper proportion (8.4).

### 8.4 ISO 216 √2 paper (factual)
- **Rule:** A-series sheets have a height-to-width ratio of √2 (≈ 1.4142). Cutting a sheet in half parallel to its short side gives two sheets of the same proportion [18].
- **Numbers:** A0 has an area of 1 m². Each next size halves the area. A4 = 210 × 297 mm [18]. B sizes are geometric means between adjacent A sizes. C sizes (envelopes) sit between matching A and B sizes, so an unfolded A4 sheet fits a C4 envelope [18]. Enlarging A4 to A3 is about 141%, and reducing A3 to A4 is about 71% [18].
- **History:** Lichtenberg described the advantages of √2 in a letter in 1786. Germany adopted the system as DIN 476 in 1922 (Kuhn) or 1921 (Wikipedia, citing other sources), and it became ISO 216 in 1975 [18][19].
- **Apply:** One grid scales across A-series formats without changing proportion. Design an A-series poster campaign once and scale it from A4 flyer to A0 poster. The √2 rectangle is also a good root rectangle for covers.
- **Limit:** US Letter (8.5 × 11 in) and Tabloid are not √2. Layouts don't scale cleanly between ISO and US sizes. Production specs are in `media-specs` → `print-production.md`.

### 8.5 Modular type scales
Ratios such as 1.2, 1.25, 1.333, 1.5, or 1.618 for type and spacing are covered in `typography` → `scale-and-rhythm.md`. Choose the ratio for how many levels you need and the screen range, not for mystical properties.

---

## 9. Single-glance media: posters, thumbnails, OOH

### 9.1 Procedure
1. **One message.** Write it in one line. If you can't, the brief isn't ready.
2. **One focal element** (face, product, number, or word) dominating at least two levers (size + contrast).
3. **Three levels at most:** focal element, message, brand/CTA.
4. **Strong figure-ground.** The focal element must separate from the background in a blurred, grayscale view. Check value contrast, not only hue (`color` → `contrast-and-dark-mode.md`).
5. **Test at real viewing size:**
   - *Thumbnail/feed:* view at the actual feed or profile-grid size on a phone. Can you read the hook?
   - *Poster:* view the full design small on screen (for example 10% zoom) as a quick stand-in for seeing it from across a street. This is a practitioner heuristic, not a calibrated test.
   - *Billboard:* letter heights and words per distance are in `media-specs` → `out-of-home.md`.
6. **Squint test** (section 1.3). Then a 1-second test: show it for a second and ask what it was.

### 9.2 Medium notes

| Medium | Composition notes |
|--------|-------------------|
| Social feed post | Hook (face or 3–6 word headline) as rank 1. Keep text inside the safe zone. Glance and scroll behavior is in `attention-and-scanning.md` §7 |
| Video thumbnail | Close-up face with readable expression, 1 focal object, max 3–4 words, high value contrast. Test against light and dark UI themes |
| Poster (street, event) | Readable at two distances: the image or headline from far away, details (date, venue, QR) up close. A strong grid makes the detail zone predictable |
| Billboard / OOH | Viewed in seconds while moving. Glance-based viewing is in `attention-and-scanning.md` §8. Specs in `out-of-home.md` |
| App icon / avatar | Single silhouette, no text, centered (symmetry wins at small sizes) |

**Limit:** Single-glance rules do not transfer to reading media. A magazine feature or a dashboard needs several entry points and a longer path.

---

## 10. Critique checklist

- [ ] Can you name rank 1 within a second of a blurred view?
- [ ] No more than 3 type sizes in the main content, and at most 2 large elements [1]?
- [ ] Is every element aligned to something?
- [ ] Is space inside groups clearly smaller than space between groups?
- [ ] Does the center of visual mass sit where you intended (stable or tense)?
- [ ] Does the hierarchy still work in grayscale (not color alone)?
- [ ] Is density matched to task and user (section 6), with targets still meeting minimums?
- [ ] Are proportion claims in the rationale free of golden-ratio or thirds mythology?
- [ ] For single-glance media: tested at real viewing size?

---

## Common myths

| Myth | Corrected reading |
|------|-------------------|
| "White space increases comprehension by 20% (Lin 2004)." | The cited Lin (2004) paper is about older adults, presentation media, and hypertext structure [6]. The Wichita State study found margins helped reading and satisfaction, and leading affected only preference [7]. No verified 20% figure. **[E3]** |
| "The golden ratio is the most beautiful proportion." | Preference findings are unstable and method-sensitive [12][13]. Many famous examples are post-hoc fits [11][14]. **[E3]** |
| "The Parthenon / Mona Lisa / Great Pyramid use the golden ratio." | Not supported by measurement or by the artists' own writings [11]. Logo "golden circle" overlays are post-hoc drawings, not evidence. |
| "The rule of thirds makes photos better." | It plays a minor role, if any, in large sets of highly rated photos and paintings [16]. It's a beginner heuristic. **[E3 as a law]** |
| "Symmetry is boring; asymmetry is modern." | Both are tools. Symmetry reads fast and calm (logos, OOH, luxury). Asymmetry adds energy [2]. |
| "More whitespace is always better." | It costs density and scrolling. Expert tools need compact modes [8]. |
| "Balanced layouts are liked more." | Balance and liking are different. Liking also depends on homogeneity and other factors [4]. |
| "Root rectangles reveal the secret of Greek art." | Hambidge's historical claims were criticized in 1921 and are considered discredited. The rectangles are still useful construction tools [17]. |
| "Hierarchy = make the important thing bigger." | Size is one lever. Isolation, contrast, position, and weight often do more, and size fails when everything is big [1]. |

---

## Sources

[1] Gordon, K. (2021, January 17). *Visual Hierarchy in UX: Definition*. Nielsen Norman Group. https://www.nngroup.com/articles/visual-hierarchy-ux-definition/
[2] Gordon, K. (2020, March 1; reviewed 2026). *5 Principles of Visual Design in UX*. Nielsen Norman Group. https://www.nngroup.com/articles/principles-visual-design/
[3] Apple. (2026). *Layout*. Human Interface Guidelines (change log entry September 9, 2026). https://developer.apple.com/design/human-interface-guidelines/layout
[4] Hübner, R., & Fillinger, M. G. (2016). *Comparison of Objective Measures for Predicting Perceptual Balance and Visual Aesthetic Preference*. Frontiers in Psychology, 7, 335. https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2016.00335/full
[5] Boulton, M. (2007, January 9). *Whitespace*. A List Apart, Issue 230. https://alistapart.com/article/whitespace/
[6] Lin, D.-Y. M. (2004). *Evaluating older adults' retention in hypertext perusal: impacts of presentation media as a function of text topology*. Computers in Human Behavior, 20(4), 491–503. https://doi.org/10.1016/j.chb.2003.10.024 (bibliographic data verified via Crossref; full text not opened)
[7] Chaparro, B., Baker, J. R., Shaikh, A. D., Hull, S., & Brady, L. (2004, July). *Reading Online Text: A Comparison of Four White Space Layouts*. Usability News, 6 (Software Usability Research Laboratory, Wichita State University). Abstract record: https://portfolio.erau.edu/en/publications/reading-online-text-a-comparison-of-four-white-space-layouts/
[8] Amazon Web Services. (n.d.). *Content density*. Cloudscape Design System. https://cloudscape.design/foundation/visual-foundation/content-density/ (verified 2026-10)
[9] Microsoft. (n.d.). *Layout*. Fluent 2 Design System. https://fluent2.microsoft.design/layout (verified 2026-10)
[10] MUI. (n.d.). *Density*. Material UI. https://mui.com/material-ui/customization/density/ (verified 2026-10)
[11] Wikipedia contributors. (n.d.). *Golden ratio*. Wikipedia. https://en.wikipedia.org/wiki/Golden_ratio (secondary source; summarizes Livio 2002, Devlin, Fechner, Man; accessed 2026-10)
[12] Green, C. D. (1995). *All That Glitters: A Review of Psychological Research on the Aesthetics of the Golden Section*. Perception, 24(8), 937–968. https://doi.org/10.1068/p240937 (abstract via Crossref)
[13] Friedenberg, J. (2012). *Aesthetic judgment of triangular shape: compactness and not the golden ratio determines perceived attractiveness*. i-Perception, 3(3), 163–175. https://pmc.ncbi.nlm.nih.gov/articles/PMC3485848
[14] Markowsky, G. (1992). *Misconceptions about the Golden Ratio*. The College Mathematics Journal, 23(1), 2–19. https://www.jstor.org/stable/2686193 (bibliographic data verified via Crossref; full text not opened)
[15] Wikipedia contributors. (n.d.). *Rule of thirds*. Wikipedia. https://en.wikipedia.org/wiki/Rule_of_thirds (secondary source; cites Smith 1797, Reynolds 1783, Field 1845; accessed 2026-10)
[16] Amirshahi, S. A., Hayn-Leichsenring, G. U., Denzler, J., & Redies, C. (2014). *Evaluating the Rule of Thirds in Photographs and Paintings*. Art & Perception, 2(1–2), 163–182. https://doi.org/10.1163/22134913-00002024 (abstract via Crossref)
[17] Wikipedia contributors. (n.d.). *Dynamic symmetry*. Wikipedia. https://en.wikipedia.org/wiki/Dynamic_symmetry (secondary source; cites Blake 1921, Bellows & Quick 1992; accessed 2026-10)
[18] Kuhn, M. (n.d.). *International standard paper sizes*. University of Cambridge. https://www.cl.cam.ac.uk/~mgk25/iso-paper.html
[19] Wikipedia contributors. (n.d.). *ISO 216*. Wikipedia. https://en.wikipedia.org/wiki/ISO_216 (secondary source; accessed 2026-10)
