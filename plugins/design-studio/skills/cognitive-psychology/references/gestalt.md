# Gestalt Principles of Perception

> **Scope:** The Gestalt principles of perceptual organization (figure-ground and the grouping principles), their history and current scientific status, and how to apply them in UI, logos and identity, editorial layout, and out-of-home.
> **Last verified:** 2026-10
> **Used by:** ui-designer, identity-designer, editorial-designer, print-ooh-designer, design-critic, design-system-architect, art-director, social-media-designer, creative-director

Related files: `laws-of-ux.md` (cross-reference table), `attention-and-scanning.md` (salience and where people look),
`cognitive-load-and-mental-models.md` (chunking and load).

---

## How to use this file

1. **Grouping is the first thing a layout communicates.** Before anyone reads a word, the eye has already decided
   which things belong together. Check that grouping matches meaning.
2. **Principles combine and compete.** Proximity and similarity add together; common region and uniform
   connectedness can override both [1][4][5]. When grouping is ambiguous, strengthen one cue rather than adding many.
3. **The classic figure-ground "rules" are weaker than textbooks suggest** [1]. Test logos and ambiguous
   compositions with real viewers.
4. **Evidence:** the grouping and figure-ground phenomena are [E1] (a century of experimental work, reviewed in [1]).
   The *design applications* below are [E2] unless marked otherwise.

---

## 1. History and current status

| Date | Event |
|---|---|
| 1912 | Max Wertheimer's study of apparent motion (the phi phenomenon), "perception of pure motion, without object motion," which many consider the beginning of Gestalt psychology [1] |
| 1915 | Edgar Rubin's vase-faces figure, the classic demonstration of figure-ground reversal [1] |
| 1923 | Wertheimer's paper *Untersuchungen zur Lehre von der Gestalt II* "first posed the problem of perceptual grouping" [1][3] |
| 1920s–1930s | Kurt Koffka and Wolfgang Köhler developed the theory with Wertheimer (the Berlin school). Koffka gave a full account of the Gestalt view in *Psychological Bulletin* in 1922; Köhler extended the Gestalt concept to physical systems and proposed an electrical field theory of the brain [1] |
| Later | Köhler's field theory was undermined by experiments of Lashley and Sperry, and the school lost influence [1] |
| 1992–1994 | Stephen Palmer and Irvin Rock added **common region** (1992) and **uniform connectedness** and **element connectedness** (1994) [4][5] |
| 2012 | Wagemans and colleagues published a two-part, century-long review in *Psychological Bulletin* [1][2] |

**Modern view (Wagemans et al., 2012).**
- Perceptual grouping and figure-ground organization have "returned to center stage" in vision science [1].
- Grouping principles "pervade virtually all perceptual experiences because they determine the objects and parts"
  we see [1].
- Principles are not all-or-nothing rules. Proximity grouping behaves like "a probabilistic competition among
  potential perceptual organizations" [1]. Proximity and similarity combine additively [1].
- Grouping happens at several levels of processing, with provisional groupings refined until a conscious
  organization emerges [1].
- The classic figure-ground factors turned out "weaker than previously supposed," while past experience and
  attention do influence figure-ground [1].
- Part II recasts Prägnanz in modern terms: dynamical systems, neural economy, Bayesian optimality, and structural
  information theory, where coding simplicity yields accurate perception as a side effect. The authors conclude that
  these perspectives still need to be synthesized [2].

**What this means for designers.** The principles are real and robust [E1], but they are tendencies whose strength
depends on context. They are not formulas that guarantee one reading.

---

## 2. Principle catalog

| Principle | Definition (short) | Source | Strongest design use |
|---|---|---|---|
| Figure-ground | The visual field splits into figure (shaped, in front) and ground (shapeless, behind) | Rubin 1915 via [1] | Legibility, overlays, negative-space logos |
| Proximity | Elements close together group | Wertheimer 1923 [1][3] | Spacing systems, forms, label–field pairing |
| Similarity | Elements that look alike group | Wertheimer 1923 [1][3] | Link and button styling, data series |
| Closure | Incomplete shapes are perceived as complete | Classic list [1] | Logos, icons, cropping |
| Good continuation | Elements on a smooth line or curve group | Classic list [1]; [7] | Alignment, carousels, lines of sight |
| Common fate | Elements that move or change together group | Classic list [1] | Motion design, drag and drop, multi-select |
| Symmetry | Symmetric elements group and tend to be seen as figure | Classic list [1] | Logos, formal layouts |
| Parallelism | Parallel contours group | Classic list [1] | Rules, lines, stripes |
| Prägnanz | Perception tends toward the simplest, most regular organization the conditions allow | Wertheimer; [1][6] | Mark simplification, layout clarity |
| Common region | Elements inside a shared bounded area group | Palmer 1992 [4] | Cards, panels, backgrounds |
| Uniform connectedness | Connected regions of uniform property form single units first | Palmer & Rock 1994 [5] | Connectors, steppers, segmented controls |
| Element connectedness | Distinct elements that touch or share a border group | Palmer & Rock 1994 via [1] | Chips, tabs attached to panels |
| Synchrony / generalized common fate | Elements that change at the same time (including brightness) group | [1] | Animated states, highlighting |
| "Focal point" | An element that differs is noticed first | Practitioner label, not a classic Gestalt law | Emphasis (see Von Restorff in `laws-of-ux.md`) |

---

## 3. Principles in detail

### Figure-ground

**Definition.** The visual field is organized into figures (regions that have shape and appear in front) and ground
(which appears to continue behind). The figure "owns" the border between them. When Rubin's vase-faces figure
reverses, border ownership switches with it [1].

**Evidence.** [E1] for the phenomenon. Factors that make a region the figure [1]:
- **Classic configural factors:** convexity, symmetry, small area, surroundedness. Controlled studies found these
  "weaker than previously supposed" and confounded in early demonstrations [1].
- **Newer image-based factors:** the **lower region** is more likely to be seen as the nearer figure; regions wider
  at the **bottom** are favored as figures (top-bottom polarity), which the review links to gravity [1].
- **Past experience:** regions that depict familiar objects in their upright orientation are more often seen as
  figure [1].
- Border-ownership signals appear early in visual cortex (V2) and can arise before attention, though attention
  can modulate them [1].

**Apply.**
- **UI:** Modals, sheets, and menus must read clearly as figure: elevation (shadow), a scrim over the ground, and a
  clear boundary. Text on images needs a stable ground (overlay, scrim, or a quiet image area).
- **Logo/identity:** Negative-space marks use a figure-ground double reading. **FedEx (1994):** the wordmark was
  designed by Lindon Leader at Landor Associates; a right-pointing arrow appears in the space between the "E" and
  the "x," created with a custom typeface based on Univers and Futura (as reported in a secondary source [14]). The
  arrow works because most viewers first see the letters as figure; it is a hidden second reading, not the primary one.
- **Editorial:** Text over full-bleed photography. Check that the ground does not compete (busy textures, faces
  behind type).
- **OOH:** At glance speed, use unambiguous figure-ground. A reversible figure that needs a second look will usually
  not get one (see viewing times in `attention-and-scanning.md`).

**Common mistakes.** Low-contrast overlays where text and image fight for figure status; ghost buttons on busy
photos; "clever" negative-space logos that fail at small sizes because the ground shape disappears.

### Proximity

**Definition.** Elements that are close together are perceived as a group.

**Evidence.** [E1] [1][3]. NN/g: proximity "is one of the most important grouping principles and can overpower
competing visual cues" [8].

**Apply.**
- **UI:** Space within a group must be clearly smaller than space between groups. Put labels closer to their own
  field than to the next one. Split long forms into meaningful groups (shipping, billing) [8]. Put a heading
  closer to its own section than to the section above [8].
- **Logo/identity:** Lockups: the tagline's spacing tells viewers whether it belongs to the logo.
- **Editorial:** Captions closer to their image than to body text; consistent paragraph and section spacing.
- **OOH:** Keep the brand and the message in one tight group so they are read as one statement.

**Common mistakes [8].** Grouping unrelated controls (an "Add" button placed among "Next / Save / Cancel" gets
missed); placing a key item far from what it relates to (a "Skip" link in a far corner); responsive layouts that
stack related items far apart on mobile; equal spacing everywhere, which removes all grouping.

### Similarity

**Definition.** Elements that share visual traits (color, shape, size, texture, orientation) are seen as related.

**Evidence.** [E1] [1][3]. Combines additively with proximity [1].

**Apply.**
- **UI:** One link color, used only for links. Primary and secondary buttons must look different, because
  "Same-color buttons will be perceived as sharing the same level of importance" [9]. Data visualization: one
  color per series.
- **Logo/identity:** A consistent graphic language (stroke weight, corner radius, palette) makes a family of marks
  read as one system.
- **Editorial:** Consistent styles for each level of heading, captions, and pull quotes.
- **OOH and campaigns:** Repeat a distinctive visual trait across executions so separate posters read as one campaign.

**Common mistakes [9].** Decorative elements that look like buttons; similar icons for different categories, which
implies a relationship that doesn't exist; content styled like ads, which users then ignore (see banner blindness
in `attention-and-scanning.md` and [12]).

### Closure

**Definition.** People perceive incomplete figures as complete, filling gaps in contours.

**Evidence.** [E1] as a classic grouping factor [1].

**Apply.**
- **UI:** Icons can use open, simplified forms. A partially visible card at the screen edge signals that a row
  scrolls horizontally (it also relies on continuation).
- **Logo/identity:** **WWF panda.** The logo was inspired by Chi-Chi, a giant panda at London Zoo. Gerald Watterson
  made the initial sketches and Sir Peter Scott drew the first logo [13][15]. In 1986 the Landor San Francisco office
  refined the mark so the viewer completes the image; a Landor design director recalled choosing solid black shapes
  for the eyes as "the most engaging and open to interpretation" [13]. Sources differ on details (Wikipedia says the
  mark was simplified and made geometric in 1978 and stylized in 1986 [15]), so cite 1986 only for the Landor version.
- **Editorial:** Cropping a figure so the reader completes it outside the frame.
- **Painting example:** NN/g cites closure as the reason viewers see two figures kissing in a Picasso painting [11].

**Common mistakes.** Gaps too large to close, especially at small sizes or from a distance; closure-based logos
that break apart when reversed (white on dark) or at favicon size.

### Good continuation (continuity)

**Definition.** Elements arranged along a smooth line or curve are seen as belonging together, and the eye follows
the line. Modern research shows the visual system links aligned elements along a path even when they are far apart,
and detection drops sharply when elements are misaligned [7].

**Evidence.** [E1] [1][7].

**Apply.**
- **UI:** Strong alignment axes (one left edge for labels and fields); horizontal rows cut at the edge to suggest
  scrolling; progress steppers drawn as one line.
- **Logo/identity:** Continuous strokes that carry the eye through a mark.
- **Editorial:** Text columns and image edges on shared axes; gaze lines in photos that point into the page.
- **OOH:** A single strong diagonal or line of sight leading to the brand.

**Common mistakes.** Near-miss alignments (a few pixels off), which look like errors; zigzag image-text layouts on
long pages, which NN/g found make scanning less efficient (see `attention-and-scanning.md`).

### Common fate (and synchrony)

**Definition.** Elements that move together, in the same direction and at the same speed, are grouped. Related
newer principles: **synchrony**, "the tendency for elements that change simultaneously to be grouped together," and
**generalized common fate**, grouping by elements becoming brighter or darker together [1].

**Evidence.** [E1] [1].

**Apply.**
- **UI and motion:** Selected items in a multi-select move or highlight together. Animate a parent and its children
  as one unit. Stagger only when you want to show sequence, not membership.
- **Social and video:** Kinetic typography: words that animate together read as one phrase.
- **Digital OOH:** Restrained motion that groups the message; see the distraction data in
  `attention-and-scanning.md`.

**Common mistakes.** Animating unrelated elements in sync, which creates false groups; decorative motion
that pulls attention from the content.

### Symmetry and parallelism

**Definition.** Symmetric elements and parallel contours tend to be grouped [1]. Global symmetry is also a
figure-ground factor, though weak when it competes with convexity [1].

**Evidence.** [E1] for grouping; weaker for figure-ground [1].

**Apply.**
- **UI:** Symmetry signals stability (centered sign-in screens, dialogs). Asymmetric layouts create direction and
  hierarchy. Parallel rules and stripes create rhythm and group rows.
- **Logo/identity:** Symmetric marks feel stable and formal; asymmetry suggests movement.
- **Editorial:** Symmetric covers and openers for formal content; asymmetric grids for dynamic layouts.

**Common mistakes.** Forcing symmetry onto content of unequal importance, which flattens hierarchy.

### Prägnanz (law of good Gestalt, simplicity)

**Definition.** Wertheimer's most general principle: "the perceptual field and objects within it will take on the
simplest and most encompassing" structure the conditions allow [1].

**Evidence.** [E1] as a tendency, with an important correction. Van Geert & Wagemans (2024) show that modern uses
often reduce Prägnanz to "few elements," a property of the stimulus. In the original sense it is a property of the
*perceived* whole, shaped by the observer and the context; "good" includes regularity, symmetry, completeness, and
meaningfulness, not just simplicity [6]. They note that "simple stimuli do not necessarily produce simple perceptual
groupings" [6].

**Apply.**
- **UI:** Prefer shapes and layouts that resolve into one clear organization at a glance.
- **Logo/identity:** Simplify marks until the intended reading is the most likely one. Remove details that
  suggest a competing organization.
- **OOH:** The simplest strong form wins at distance and speed.

**Common mistakes.** Treating Prägnanz as "minimalism." Removing elements can make a composition *less* clear if the
remaining parts suggest the wrong grouping [6].

### Common region

**Definition.** Elements within the same bounded area are grouped [4].

**Evidence.** [E1]. Palmer (1992) showed that common region can overcome proximity and similarity, depends on
perceived depth, is dominated by the smallest enclosing region, and can follow a hierarchical embedding scheme [4].

**Apply.**
- **UI:** Cards, panels, and tinted backgrounds. Because the *smallest* enclosing region dominates [4], nested cards
  group by their innermost boundary. Use nesting deliberately and sparingly. NN/g's example: putting each recipe's
  image, title, and details into a card fixed confusion about which byline belonged to which recipe [10].
- **Editorial:** Boxed sidebars and tinted panels for related material.
- **OOH and packaging:** A colored band that holds brand and offer together.

**Common mistakes [10].** Boxing everything when spacing would do; full-width color bands that create a "false
floor" and stop scrolling; decorative containers with no grouping purpose. NN/g: grouping in a container "is a
strong visual cue that can be used when whitespace alone doesn't suffice" [10].

### Uniform connectedness and element connectedness

**Definition.**
- **Uniform connectedness:** "closed regions of homogeneous properties—such as lightness, chromatic color, texture,
  and so forth—tend to be perceived initially as single units" [5]. Palmer & Rock argue it forms the entry-level units
  *before* classic grouping, and showed its effects even when opposed by proximity and similarity [5].
- **Element connectedness:** "the tendency for distinct elements that share a common border to be grouped together" [1].

**Evidence.** [E1] for the effect. Its status as *the* first stage of organization has been challenged by other
researchers [1].

**Apply.**
- **UI:** Connecting lines in steppers, timelines, and flow diagrams; a tab visually attached to its panel;
  segmented controls drawn as one continuous shape.
- **Data visualization:** A line connecting points makes them read as one series even across colors.
- **Editorial and infographics:** Leader lines from labels to the object.

**Common mistakes.** Connectors that accidentally link unrelated items (gridlines, decorative rules touching cards);
tabs separated from their panels by a gap, which breaks the connection.

### "Focal point" (practitioner label)

Some design curricula list a "focal point" principle: the element that differs from the rest is noticed first.
It is **not** among the classic or newer grouping principles in the 2012 review [1]. It is better understood as
salience (pre-attentive features) and the isolation effect. See `attention-and-scanning.md` and Von Restorff in
`laws-of-ux.md`. Grade: [E1] for salience itself; [E3] for treating "focal point" as a Gestalt law.

---

## 4. Combining principles: decision rules

| Situation | Strongest cue to use | Why |
|---|---|---|
| Two groups look merged | Increase space between groups first (proximity), then add a region | Proximity is strong and costs no ink [8] |
| Spacing is tight (mobile, dense data) | Common region (cards, zebra rows) or connectedness | They can override proximity [4][5] |
| A primary action must stand out within a group | Break similarity on one element only | Isolation works against a background of similarity (see Von Restorff) |
| Items must read as one set across a page | Similarity (shared color or shape) | Works at a distance where proximity can't |
| Animated content | Common fate: move members together | Synchrony groups strongly [1] |
| An important element is ignored | Check it isn't styled or placed like an ad | Similarity to ads triggers banner blindness [12] |

**A caution from banner-blindness research.** Benway & Lane (1998) tested whether grouping a salient "banner" with the
menu (sharing a gray background region) would help searchers notice it. It did not show a clear advantage; only 17 of
71 participants reported seeing the non-ad banners at all [12]. Grouping cues do not overcome a learned habit of
ignoring things that look like ads.

---

## 5. Media notes

| Medium | Gestalt priorities |
|---|---|
| UI | Proximity-based spacing scale; common region for cards; similarity for interactive states; connectedness for flows |
| Logo / identity | Figure-ground and closure for memorable marks; Prägnanz for reproduction at small sizes; test reversed and tiny versions |
| Editorial | Proximity for captions and headings; continuation along grid axes; common region for sidebars |
| OOH | Unambiguous figure-ground, one group, simple forms; nothing that needs a second look |
| Social / motion | Common fate and synchrony; safe zones so platform UI doesn't break grouping |

---

## Sources

[1] Wagemans, J., Elder, J. H., Kubovy, M., Palmer, S. E., Peterson, M. A., Singh, M., & von der Heydt, R. (2012). A century of Gestalt psychology in visual perception: I. Perceptual grouping and figure–ground organization. *Psychological Bulletin*, 138(6), 1172–1217. https://doi.org/10.1037/a0029333 (open access: https://pmc.ncbi.nlm.nih.gov/articles/PMC3482144/)
[2] Wagemans, J., Feldman, J., Gepshtein, S., Kimchi, R., Pomerantz, J. R., van der Helm, P. A., & van Leeuwen, C. (2012). A century of Gestalt psychology in visual perception: II. Conceptual and theoretical foundations. *Psychological Bulletin*, 138(6), 1218–1252. https://doi.org/10.1037/a0029334 (author manuscript: https://pmc.ncbi.nlm.nih.gov/articles/PMC3728284)
[3] Wertheimer, M. (1923). Untersuchungen zur Lehre von der Gestalt. II. *Psychologische Forschung*, 4(1), 301–350. https://doi.org/10.1007/BF00410640
[4] Palmer, S. E. (1992). Common region: A new principle of perceptual grouping. *Cognitive Psychology*, 24(3), 436–447. https://doi.org/10.1016/0010-0285(92)90014-S
[5] Palmer, S., & Rock, I. (1994). Rethinking perceptual organization: The role of uniform connectedness. *Psychonomic Bulletin & Review*, 1(1), 29–55. https://doi.org/10.3758/BF03200760
[6] Van Geert, E., & Wagemans, J. (2024). Prägnanz in visual perception. *Psychonomic Bulletin & Review*, 31(2), 541–567 (online 2023). https://doi.org/10.3758/s13423-023-02344-9 (open access: https://pmc.ncbi.nlm.nih.gov/articles/PMC11061049)
[7] Field, D. J., Hayes, A., & Hess, R. F. (1993). Contour integration by the human visual system: Evidence for a local "association field." *Vision Research*, 33(2), 173–193. https://doi.org/10.1016/0042-6989(93)90156-Q
[8] Harley, A. (2020, August 2). *Proximity Principle in Visual Design*. Nielsen Norman Group. https://www.nngroup.com/articles/gestalt-proximity/
[9] Harley, A. (2020, September 6). *Similarity Principle in Visual Design*. Nielsen Norman Group. https://www.nngroup.com/articles/gestalt-similarity/
[10] Harley, A. (2020, July 12). *The Principle of Common Region*. Nielsen Norman Group. https://www.nngroup.com/articles/common-region/
[11] Gordon, K. (2020, March 1). *5 Principles of Visual Design in UX*. Nielsen Norman Group. https://www.nngroup.com/articles/principles-visual-design/
[12] Benway, J. P., & Lane, D. M. (1998). *Banner Blindness: Web Searchers Often Miss "Obvious" Links*. Rice University. https://www.ruf.rice.edu/~lane/papers/banner_blindness.pdf
[13] Logo Design Love. (2011, updated 2023). *World Wildlife Fund logo sketches*. https://www.logodesignlove.com/world-wildlife-fund (secondary source; quotes Landor's Jerry Kuyper)
[14] Wikipedia. *FedEx* (logo section, citing an interview with Lindon Leader in The Sneeze, 2004). Accessed 2026-10. https://en.wikipedia.org/wiki/FedEx (secondary source; the original interview could not be retrieved)
[15] Wikipedia. *World Wide Fund for Nature* (logo section). Accessed 2026-10. https://en.wikipedia.org/wiki/World_Wide_Fund_for_Nature (secondary source)
