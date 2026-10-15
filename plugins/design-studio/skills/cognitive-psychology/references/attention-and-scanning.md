# Attention and Scanning

> **Scope:** How people allocate visual attention to screens, print, feeds, and out-of-home: saliency and pre-attentive features, eye-tracking scanning patterns, banner blindness, inattentional and change blindness, left-side and reading-direction effects, faces and gaze cues, feed and billboard viewing times, and the fold.
> **Last verified:** 2026-10 (oldest volatile data: Facebook IQ feed attention figures, 2016; NN/g scrolling and left-side data, 2017–2018)
> **Used by:** ui-designer, ux-researcher, design-critic, ux-writer, editorial-designer, print-ooh-designer, social-media-designer, art-director, behavioral-psychologist, creative-director

Related files: `gestalt.md` (grouping), `laws-of-ux.md` (Von Restorff, selective attention, serial position),
`cognitive-load-and-mental-models.md` (load and reading), `persuasion-and-behavior.md` (attention budgets by medium).

---

## How to use this file

1. **Visible is not seen.** People look where their task and past experience tell them to look. Design for the
   path the eye actually takes, then confirm with testing (eye-tracking, first-click tests, 5-second tests).
2. **Two forces guide attention:** bottom-up salience (contrast, color, motion) and top-down goals and expectations.
   Wolfe & Horowitz add scene structure and meaning, search history, and the value of targets [4]. A salient element
   that doesn't match the user's goal or looks like an ad can still be ignored [12][13].
3. **Know the attention budget of the medium:** a billboard gets fractions of a second per glance; a feed item gets
   about 2 seconds; a web page gets scanned, not read.
4. **Grades:** perception and attention research is [E1]; NN/g eye-tracking patterns are [E2]; Z-pattern and the
   Gutenberg diagram are [E3].

---

## 1. Visual hierarchy and saliency

### Pre-attentive features

**What it is.** Some visual features are detected rapidly and in parallel across a display, before focused attention.
Healey's summary: tasks on multi-element displays that finish in under 200–250 ms are considered pre-attentive,
because eye movements take at least 200 ms to start [2]. The term persists because it conveys "the speed and ease"
of detection, although attention plays a role even at this stage [2].

**Feature integration theory.** Treisman & Gelade (1980) proposed that basic features are registered in parallel in
separate feature maps, while *combining* features (a conjunction, such as "red AND vertical") needs focused,
serial attention [1][2]. Search time for a conjunction target grows with the number of items [2]. Later work softened
this: parallel and serial search are "two ends of a spectrum," and some conjunctions (with motion or depth) can be
found quickly [2]. Guided search (Wolfe) combines bottom-up and top-down guidance [2][4].

**Features that pop out [E1]** (from Healey's catalog of studies [2][3]):

| Feature family | Examples | Design reading |
|---|---|---|
| Color | Hue, luminance/intensity | One accent hue for the primary action or alert |
| Form | Orientation, length, width, size, curvature, closure | A tilted or larger element stands out among uniform ones |
| Motion | Flicker, direction, velocity | Motion is the strongest attention grabber; use sparingly |
| Spatial | Density, 3D depth cues, lighting direction | Elevation (shadow) separates layers |

**Asymmetries.** Some features pop out in one direction only: a sloped line among vertical lines pops out, but a
vertical line among sloped ones does not [2].

**Apply.**
- **UI:** Encode the one thing that must be found by a single feature (color *or* size), not a conjunction. Status
  indicators: color plus shape or icon (also required for accessibility, so color is not the only cue).
- **Data visualization:** Highlight the series that matters in a saturated hue; gray the rest.
- **Print/editorial:** One dominant element per spread; size contrast drives the entry point.
- **OOH:** High luminance contrast and one large shape.

**Limit.** Pop-out guarantees *detection*, not *comprehension* or *memory*. And salience stops working if the element
looks like an ad (see banner blindness).

### Visual hierarchy

Hierarchy is the planned order in which elements are noticed, built from salience (size, contrast, color, isolation)
and position (top and left in left-to-right reading cultures, see section 5). Working rules (practitioner heuristics,
not separately verified for this file):
- One clear entry point per screen or spread.
- Three to four distinguishable levels of emphasis are usually enough; more levels blur together.
- Test with a squint or blur test, and a 5-second test: what do people recall?

---

## 2. Eye-tracking scanning patterns (NN/g)

**Context.** NN/g's original 2006 study tracked 232 users on thousands of pages [5]. Later rounds (2017–2019) confirmed
and extended the findings on desktop and mobile [6][7]. These are observed patterns of *behavior on text-heavy
pages*, not laws. Grade [E2].

| Pattern | What users do | When it happens | Design response |
|---|---|---|---|
| **F-pattern** | Horizontal pass across the top, a shorter pass lower down, then a vertical scan down the left edge. "Rarely a *perfect* F"; can look like an E or an inverted L [5][6] | Text with no formatting cues, users want to be efficient, and they are not committed to reading every word [6] | Treat it as a symptom. Front-load paragraphs and headings; add subheads, bullets, bold keywords [6] |
| **Layer-cake** | Fixations mostly on headings and subheadings, then reading the body under the relevant one [8] | Pages with clear, visually distinct headings | NN/g calls it "by far the most effective way" to scan [7]. Make headings descriptive and front-loaded [8] |
| **Spotted** | Skipping large blocks to fixate on specific words or items (links, numbers, bold text) [7] | Looking for something specific, such as a phone number or price | Make such items visually findable (format numbers, use consistent link style) |
| **Marking** | Eyes stay in one place while the page scrolls under them [6] | More common on mobile [6] | Keep key content in predictable positions; strong headings that catch a fixed gaze |
| **Bypassing** | Skipping the first words of list items when they repeat [6] | Lists whose items start with the same words | Start list items with the distinguishing word |
| **Commitment** | Reading nearly everything [6][7] | Highly motivated users: trust the source, are loyal, or believe they are in the right place [7] | Don't design for it; it's uncommon [6] |

**Why the F-pattern is bad news.** "Users may skip important content simply because it appears on the right side of
the page" [6]. Users scanning the left edge notice the first two words of a line far more than the third [5].

**Right-to-left languages.** NN/g observed a mirrored F-pattern with Arabic readers [6].

**Apply.**
- **UI/web:** Put the most important information in the first two paragraphs; start headings, links, and bullets
  with the information-carrying words [5][6].
- **Editorial (print):** Print readers also scan, but magazine and newspaper layouts provide strong entry points
  (headline, image, deck). The NN/g data are from screens; don't transfer the F-shape literally to a designed spread.
- **Mobile:** Expect marking and fast scrolling. Each screenful needs its own clear heading.

### Zigzag layouts

Alternating image-text rows (zigzag) made scanning less efficient than aligned layouts when images were decorative;
users stumbled over images. Informational images worked in either layout [9]. Rule: align decorative images on one
side; zigzag is acceptable for 2–3 rows [9]. [E2]

### Z-pattern and the Gutenberg diagram [E3]

The **Z-pattern** (eye moves top-left → top-right → diagonal → bottom-right) and the **Gutenberg diagram** (a page
divided into four zones with a "reading gravity" from top-left to bottom-right; commonly attributed to newspaper
designer Edmund Arnold [unverified]) are widely taught for sparse layouts such as landing pages and posters.
- **Evidence quality:** For this file, no peer-reviewed or NN/g eye-tracking study establishing either pattern could
  be located and verified. NN/g's eye-tracking taxonomy of scanning patterns does not include a Z-pattern [6][7].
- **Use them as composition heuristics, not as findings about eye movements.** On sparse pages, attention is driven
  by salience (faces, large type, contrast) and the viewer's goal more than by a fixed path [4].
- **Safe reading:** Put the logo or entry point top-left, the primary action where the composition leads, and test.

---

## 3. Banner blindness

**Origin.** Benway & Lane (1998) named the effect. In a usability test of a corporate intranet, almost every
participant scrolled past a large, salient "New! Internet Courses" banner link and chose a small text link instead [12].
In their controlled pilot study, banner-delivered targets were found about 58% of the time vs. 94% for menu-delivered
ones [12]. In a second experiment (72 students), only 17 of 71 who answered reported noticing non-ad banners that
pointed to the answer [12].

**NN/g 2018 update** [13]:
- Banner blindness is "a strong and robust phenomenon" [13].
- Users skip anything that *looks* like an ad: ad-typical positions (top banner, right rail), ad-like styling such as
  animation, and placement next to ads [13].
- After one negative glance, users may avoid a whole area for the rest of the visit [13].
- On mobile, inline ads are hard to avoid because they fill the screen, but users scroll quickly past anything that
  looks like one [13].

**Evidence.** [E1] for the phenomenon (controlled studies [12]) and [E2] for current behavior [13].

**Apply.**
- **UI/web:** Don't present important content in ad formats or ad positions. Don't put content and ads in the same
  visual section [13]. Making content look "different" to attract attention "often has the opposite effect" [13].
- **Social:** Native-looking content outperforms banner-looking content for the same reason (see
  `persuasion-and-behavior.md`).
- **Print:** Advertorial-style boxes can be skipped as ads.

**Limit.** Disguising ads as content to avoid banner blindness is deceptive ("disguised ads," see
`dark-patterns-and-ethics.md`).

---

## 4. Inattentional blindness and change blindness

**Inattentional blindness [E1].** People engaged in an attention-demanding task can fail to see an unexpected
object in plain view. Simons & Chabris (1999) found that noticing depended on how similar the unexpected object was to
attended objects and on task difficulty, not on how close it was to the attended location. "Observers attend to
objects and events, not spatial positions" [14].

**Change blindness [E1].** When a brief blank interrupts two versions of a scene, even large, repeated changes are
very hard to detect. Changes to objects of central interest are found faster. Attention is required to perceive
change [15].

**Apply.**
- **UI:** A change that happens during a page reload, a scroll, or a transition can go unnoticed: updated totals,
  validation errors at the top of a long form, items added to a cart. Animate the change at its location, keep it near
  the user's focus, and confirm in text.
- **Error messages:** Place them next to the field and move focus to them; a summary at the top alone is often missed.
- **Motion:** Use motion to *connect* states (the element moves from A to B) so the change is attended.
- **Print/OOH:** Less relevant, but campaign variations that differ in small details will not be noticed as different.

---

## 5. Left-side bias and reading direction

**Web data [E2].** In NN/g's 2017 eye-tracking (more than 120 participants, 130,000+ fixations, 1920×1080 screens),
80% of fixations fell on the left half of the screen and 20% on the right (69% left in the 2010 study) [11]. On
search results pages, 94% of fixations were on the left side [11]. No participants scrolled horizontally [11].

**Basic perception [E1].** Neurologically normal people show a small leftward bias when bisecting lines
("pseudoneglect"). A meta-analysis of 73 studies (2,191 participants) found effect sizes of −0.37 to −0.44; the
direction of scanning matters: left-to-right scanning produces leftward errors and right-to-left scanning produces
rightward errors [16].

**Reading direction [E1].** In 162 participants, French (left-to-right readers) preferred images with rightward
directionality and Israeli (right-to-left readers) preferred leftward directionality [17].

**RTL interfaces [E2].** NN/g reports that RTL sites tend to mirror "Western" patterns and that users' viewing
adapts to the layout they see [11]; their 2017 study observed a mirrored F-pattern among Arabic readers [6].

**Apply.**
- **UI/web (LTR):** Put the most important navigation and content on the left; don't park critical content in a
  right rail.
- **RTL (Arabic, Hebrew, Persian, Urdu):** Mirror layout, navigation, and progress direction, since viewing adapts
  to the layout [11]. Which icons to mirror (back/forward arrows) and which not to (logos, many media controls) is set
  by platform bidirectionality guidelines; check them, as they were not re-verified for this file [unverified].
  Test with native readers.
- **Print/OOH and motion:** Directional cues (gaze, arrows, implied motion) should run with the reading direction of
  the market. A mirrored layout may "feel" different in emphasis.

**Limit.** The left-bias percentage depends on layout; centered layouts with empty gutters change the numbers [11].

---

## 6. Faces and gaze cueing

**Evidence [E1].**
- A face whose eyes look to one side shifts observers' attention in that direction reflexively, even when the gaze
  does not predict where a target will appear (Friesen & Kingstone, 1998, as described in [19]) [18].
- Arrows can produce similar reflexive shifts, so gaze is not unique in its behavioral effect, though it seems to
  involve different brain systems [19].
- In an eye-tracking study of web banners, faces with **averted gaze** (looking toward the ad's text or product)
  increased attention to the banner, the text, and the product, and improved memory for brand and message.
  Faces with **mutual gaze** (looking at the viewer) pulled attention to the face itself and weakened the benefit,
  especially in vertical banners [20].

**Practitioner evidence [E3].** A widely shared 2009 eye-tracking test (106 participants) found that when a baby in an
ad looked toward the headline, more viewers read the text than when the baby looked at the camera [21]. It is an
unpublished industry study; consistent with [20] but not peer-reviewed.

**Web photos [E2].** Users ignore generic stock photos of people and examine photos that carry information, such as
real staff or products [22].

**Apply.**
- **Ads, social, print, OOH:** If a person appears, have them look at the product or the message, not at the camera,
  when the goal is attention to the message. Use direct gaze when the goal is emotional connection with the person.
- **UI/web:** Use real people and real products; skip decorative stock images [22].
- Arrows and pointing work too [19], and need no casting.

**Limit.** Gaze cues are strong; pointing them at fine print or pre-checked options to steer choice is manipulative.

---

## 7. Feeds and thumbnails (mobile social)

**Data (platform-reported, 2016) [E2].** Facebook reported that people spend, on average, 1.7 seconds with a piece of
content on mobile vs. 2.5 seconds on desktop. In tests run for Facebook by Fors Marsh Group, people recalled mobile
feed content at a statistically significant rate after only 0.25 seconds of exposure [23]. These are platform-
sponsored figures from 2016; feeds and formats have changed since.

**Apply.**
- **Social:** The first frame must work as a still: one subject, high contrast, brand visible early, and legible with
  the sound off. Assume a sub-2-second decision to stop scrolling.
- **Thumbnails (video, articles):** A single readable focal point at small size; faces and large, short text.
  Test at actual display size.
- See `persuasion-and-behavior.md` (media table) for platform hook timing.

---

## 8. Out-of-home: glance-based viewing

**Driver glance research [E1].**
- 25 drivers on a Toronto expressway: the average glance at advertising signs lasted **0.57 s** (SD 0.41), with
  about 36 glances per driver on the route. Signs with moving or changing elements received 69% of all glances and
  78% of long glances [24].
- 41 drivers in Stockholm: electronic billboards attracted longer dwell times, more fixations, and longer maximum
  fixations than regular traffic signs. The study defined visual distraction as a continuous look of more than 2 s;
  whether the billboards are a safety hazard could not be determined from the data [25].

**Industry guidance [E2, industry].** Lamar Advertising states that billboard "exposure time is typically four to five
seconds" and advises "seven words or less" [27]. This is total exposure while approaching a board, which can include
several short glances; it is not a single fixation.

**Apply.**
- One message, readable in a single sub-second glance: brand, one image, and very few words.
- Design so that each glance can pick up the whole message; don't build in reading order that needs several glances.
- Roadside digital: avoid motion and rapid changes that pull drivers' eyes away for long [24][25].
- Pedestrian and transit OOH allow longer viewing, but no verified dwell-time data were found for this file [unverified].
- Letter heights, viewing distances, and specs live in the `media-specs` skill.

**Limit.** Roadside work must not demand long glances from drivers. Safety outranks attention.

---

## 9. Above the fold and scrolling

**Data [E2].** In NN/g's 2018 eye-tracking (120 participants, 130,000+ fixations, 1920×1080 screens), **57%** of
page-viewing time was above the fold and **74%** within the first two screenfuls. In 2010 the above-the-fold share
was 80% [10]. "The pattern of a sharp decrease in attention following the fold remains the same in 2018 as in 2010" [10].

**Related.** On an average page, users have time to read at most 28% of the words; about 20% is more likely [26].

**Apply.**
- **Web:** The first screen must state what the page is and why it matters, and give a reason to scroll. Position
  correlates with attention: "the closer a piece of information is to the top of the page, the higher the chance
  that it will be read" [10].
- Don't cram everything above the fold: "people will scroll if they have a reason to do it" [10]. Avoid false floors
  (full-width bands that look like an ending; see `gestalt.md`).
- **Mobile:** The fold is smaller and scrolling more habitual; the same priority rule applies per screen.
- **Print:** The equivalent is the top half of a newspaper front page and the cover lines visible on a newsstand.

---

## Quick reference: what draws and what loses attention

| Draws attention [evidence] | Loses attention [evidence] |
|---|---|
| Single-feature contrast: color, size, motion [2] | Ad-like position or styling [12][13] |
| Headings that front-load key words [5][8] | Unformatted text walls (forces F-pattern) [6] |
| Faces, and the direction they look [18][20] | Generic stock photos [22] |
| Top of page, left side (LTR) [10][11] | Right rail, below the second screen [10][11] |
| Changes animated at the point of focus [15] | Changes during reloads or out of view [14][15] |
| Moving or changing signs (roadside) [24] | Multi-glance messages on billboards [24][27] |

---

## Sources

[1] Treisman, A. M., & Gelade, G. (1980). A feature-integration theory of attention. *Cognitive Psychology*, 12(1), 97–136. https://doi.org/10.1016/0010-0285(80)90005-5
[2] Healey, C. G. (n.d., accessed 2026-10). *Perception in Visualization*. North Carolina State University. https://www.csc2.ncsu.edu/faculty/healey/PP/
[3] Healey, C. G., & Enns, J. T. (2012). Attention and visual memory in visualization and computer graphics. *IEEE Transactions on Visualization and Computer Graphics*, 18(7), 1170–1188. https://doi.org/10.1109/TVCG.2011.127
[4] Wolfe, J. M., & Horowitz, T. S. (2017). Five factors that guide attention in visual search. *Nature Human Behaviour*, 1, 0058. https://doi.org/10.1038/s41562-017-0058
[5] Nielsen, J. (2006, April 16). *F-Shaped Pattern For Reading Web Content* (original study). Nielsen Norman Group. https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content-discovered/
[6] Pernice, K. (2017, November 12). *F-Shaped Pattern of Reading on the Web: Misunderstood, But Still Relevant (Even on Mobile)*. Nielsen Norman Group. https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/
[7] Pernice, K. (2019, August 25). *Text Scanning Patterns: Eyetracking Evidence*. Nielsen Norman Group. https://www.nngroup.com/articles/text-scanning-patterns-eyetracking/
[8] Pernice, K. (2019, August 4). *The Layer-Cake Pattern of Scanning Content on the Web*. Nielsen Norman Group. https://www.nngroup.com/articles/layer-cake-pattern-scanning/
[9] Flaherty, K. (2017, November 26). *Zigzag Image–Text Layouts Make Scanning Less Efficient*. Nielsen Norman Group. https://www.nngroup.com/articles/zigzag-page-layout/
[10] Fessenden, T. (2018, April 15). *Scrolling and Attention*. Nielsen Norman Group. https://www.nngroup.com/articles/scrolling-and-attention/
[11] Fessenden, T. (2017, October 22). *Horizontal Attention Leans Left*. Nielsen Norman Group. https://www.nngroup.com/articles/horizontal-attention-leans-left/
[12] Benway, J. P., & Lane, D. M. (1998). *Banner Blindness: Web Searchers Often Miss "Obvious" Links*. Rice University. https://www.ruf.rice.edu/~lane/papers/banner_blindness.pdf
[13] Pernice, K. (2018, April 22). *Banner Blindness Revisited: Users Dodge Ads on Mobile and Desktop*. Nielsen Norman Group. https://www.nngroup.com/articles/banner-blindness-old-and-new-findings/
[14] Simons, D. J., & Chabris, C. F. (1999). Gorillas in our midst: Sustained inattentional blindness for dynamic events. *Perception*, 28(9), 1059–1074. https://doi.org/10.1068/p281059
[15] Rensink, R. A., O'Regan, J. K., & Clark, J. J. (1997). To see or not to see: The need for attention to perceive changes in scenes. *Psychological Science*, 8(5), 368–373. https://doi.org/10.1111/j.1467-9280.1997.tb00427.x
[16] Jewell, G., & McCourt, M. E. (2000). Pseudoneglect: A review and meta-analysis of performance factors in line bisection tasks. *Neuropsychologia*, 38(1), 93–110. https://doi.org/10.1016/S0028-3932(99)00045-7
[17] Chokron, S., & De Agostini, M. (2000). Reading habits influence aesthetic preference. *Cognitive Brain Research*, 10(1–2), 45–49. https://doi.org/10.1016/S0926-6410(00)00021-5
[18] Friesen, C. K., & Kingstone, A. (1998). The eyes have it! Reflexive orienting is triggered by nonpredictive gaze. *Psychonomic Bulletin & Review*, 5(3), 490–495. https://doi.org/10.3758/BF03208827
[19] Ristic, J., Friesen, C. K., & Kingstone, A. (2002). Are eyes special? It depends on how you look at it. *Psychonomic Bulletin & Review*, 9(3), 507–513. https://doi.org/10.3758/BF03196306
[20] Sajjacholapunt, P., & Ball, L. J. (2014). The influence of banner advertisements on attention and memory: Human faces with averted gaze can enhance advertising effectiveness. *Frontiers in Psychology*, 5, 166. https://doi.org/10.3389/fpsyg.2014.00166
[21] Usable World. (2009, March 16). *You look where they look* (eye-tracking study, 106 participants). https://www.usableworld.com.au/2009/03/16/you-look-where-they-look/
[22] Nielsen, J. (2010, October 31). *Photos as Web Content*. Nielsen Norman Group. https://www.nngroup.com/articles/photos-as-web-content/
[23] Facebook IQ. (2016, April 20). *Capturing Attention in Feed: The Science Behind Effective Video Creative*. Meta for Business. https://www.facebook.com/business/news/insights/capturing-attention-feed-video-creative
[24] Beijer, D., Smiley, A., & Eizenman, M. (2004). Observed driver glance behavior at roadside advertising signs. *Transportation Research Record*, 1899, 96–103. https://doi.org/10.3141/1899-13
[25] Dukic, T., Ahlstrom, C., Patten, C., Kettwich, C., & Kircher, K. (2013). Effects of electronic billboards on driver distraction. *Traffic Injury Prevention*, 14(5), 469–476. https://doi.org/10.1080/15389588.2012.731546
[26] Nielsen, J. (2008, May 5). *How Little Do Users Read?* Nielsen Norman Group. https://www.nngroup.com/articles/how-little-do-users-read/
[27] Lamar Advertising. (n.d., accessed 2026-10). *Design tips*. https://www.lamar.com/howtoadvertise/designtips
