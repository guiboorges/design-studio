# Kinetic Typography

> **Scope:** Motion-led type, where letterforms move, transform, and carry rhythm as the main visual event, from Saul Bass's film titles to kinetic brand identities, lyric videos, social clips, and scroll-driven web type.
> **Last verified:** 2026-10
> **Used by:** creative-director, ui-designer, art-director, design-system-architect

## Origin & context

- **Before:** Film credits were mostly static and separate from the film itself, often projected onto the cinema curtain before it rose [1].
- **Saul Bass (1920-1996)** made the opening title a piece of storytelling. His animated cut-paper arm for *The Man with the Golden Arm* (1955) made his name in the industry [1][2]. For Alfred Hitchcock he did *Vertigo* (1958, with John Whitney), *North by Northwest* (1959), and *Psycho* (1960). Art of the Title credits the Hitchcock work with "a new type of kinetic typography" [1][2].
  - In *North by Northwest*, the credits slide along a grid that becomes the facade of a skyscraper [1].
  - Later sequences by Elaine and Saul Bass include *Goodfellas* (1990) and *Casino* (1995) [1][2]. Their stated principle: "we are there to serve the film" [2].
- **Kyle Cooper, *Se7en* (1995):** made at R/Greenberg Associates. It uses hand-etched type on scratchboard, smeared and jittered in the film transfer, mixed with Helvetica [3]. Fincher wanted the type hand-drawn "because it was from the mind of the killer" [3]. This set the template for distressed, glitchy kinetic type.
- **Lyric videos:** Prince's *Sign o' the Times* video (1987), designed by Bill Konersman for Flora Films, shows the lyrics as synchronized moving type over color fields that change with the music. It is often cited as an early modern lyric video [4].
- **HCI research:** At CMU, Lee, Forlizzi and Hudson built *The Kinetic Typography Engine* (UIST 2002), a system for animating expressive text, framing motion as a way to add emotion and tone of voice to text [5][6].
- **Kinetic identities (2016 to now):** DIA, the New York studio of Mitch Paone and Meg Donohoe, made motion the core of an identity rather than an add-on. Their A-Trak system (2016) is "constantly transitioning, never landing on anything specific" [7].
  - For Squarespace, DIA built an entirely kinetic identity, with the typeface Clarkson made with François Rappo at Optimo. Year: [unverified], probably 2018 [8].
- **Why it took off on the web:** Two CSS features made type motion cheap to build in the browser:
  - Variable fonts let one file interpolate weight, width, slant and optical size [9].
  - CSS scroll-driven animations tie keyframes to scroll position instead of time [10].
- **Why it took off on social:** Sound-optional, short-form feeds reward type that carries the message by itself. This is a practitioner observation; no data was verified.

## Visual DNA

- Type is the hero. Imagery is absent or secondary, and words carry both the message and the composition.
- Motion means something: words enter, stack, stretch, split or collide in sync with speech, beat, or scroll.
- Heavy, condensed or extended grotesques that hold up at large sizes, or expressive variable fonts animated along their axes.
- Few colors at high contrast, usually 2-3 flat colors. Color changes are timed to cuts.
- Grids that move: text locked to lines, frames, or masks, the descendant of Bass's *Psycho* bars and *North by Northwest* grid [1].
- Masks and reveals: type sliding out from behind bars, clipping paths, letter-by-letter or line-by-line staggers.
- Rhythm: beat-locked timing, holds that give readers time to read, and hard cuts as punctuation.
- Distortion variants: smear, jitter, scratch, or glitch for tension (*Se7en* lineage) [3].

## Token recipe

| Token group | Starting values |
|---|---|
| **Typography** | **Display:** a variable grotesque with a wide `wght` range (e.g. 100-900) and a `wdth` axis, or a heavy condensed sans. **Body/UI:** a neutral sans, not animated.<br>**Scale ratio:** 1.333 for UI. Hero motion sizes jump instead of stepping: 64 / 128 / 256 px on desktop, or 12-20vw for one-word frames.<br>**Weights:** 700-900 for motion words, 400-500 for supporting text.<br>**Letter-spacing:** -0.02 to -0.04em at display sizes. Animate tracking from +0.2em to 0 for "settle" reveals.<br>**Line-height:** 0.9-1.0 for stacked display lines. |
| **Color** | 2-3 flat colors at high contrast. Example: ink `#0A0A0A` / `oklch(0.15 0 0)`, paper `#F4F1EA` / `oklch(0.95 0.01 85)`, one signal accent such as `#FF3B1F` / `oklch(0.65 0.23 33)`. Invert background and text at cuts. Keep text-to-background contrast at 4.5:1 or more in every frame where text must be read. |
| **Radius** | 0 is the default. Motion graphics read sharper with hard edges. Use 4-8px only on UI chrome around the motion piece. |
| **Borders** | Use rules and bars as moving elements: 2-8px solid lines that sweep in to frame or mask type (Bass lineage). |
| **Shadows/elevation** | None. Depth comes from scale and overlap, not drop shadows. |
| **Spacing/grid** | Strong modular grid. Common choices are 12 columns, or a 4x4 grid for square social frames. Snap moving type to grid lines and set keyframe positions in grid units. Allow at least 8% safe margin in video frames. |
| **Imagery & iconography** | Mostly none. If used, flat pictograms or simple cut-paper shapes that animate with the same easing as the type. |
| **Motion** | **Micro (UI):** 150-250 ms.<br>**Word/line entrances:** 300-600 ms, stagger 40-80 ms per letter or 80-150 ms per word.<br>**Easing:** `cubic-bezier(0.16, 1, 0.3, 1)` (expo-out) for entrances, `cubic-bezier(0.7, 0, 0.84, 0)` (expo-in) for exits, steps or linear for mechanical or ticker effects.<br>**Holds:** each readable phrase stays still for at least ~250 ms per word. This is a practitioner heuristic, not a standard.<br>**Reduced motion:** cross-fade or a static final frame. |
| **Texture/effects** | Optional: film grain at 3-6% opacity, scratch or smear distortion, RGB split for glitch. Use one effect family per piece. |

## Signature examples

| Work | Year | Why it matters |
|---|---|---|
| *The Man with the Golden Arm*, titles by Saul Bass | 1955 | Animated graphic titles become part of the story [1][2] |
| *Vertigo*, Saul Bass with John Whitney | 1958 | Spirographic motion paired with type [1][2] |
| *North by Northwest*, Saul Bass | 1959 | Credits travel on a grid that becomes architecture [1] |
| *Psycho*, Saul Bass | 1960 | Type split and revealed by moving bars [1] |
| Prince, *Sign o' the Times* video, Bill Konersman | 1987 | Early lyric video built entirely from synchronized kinetic type [4] |
| *Se7en*, Kyle Cooper (R/GA) | 1995 | Hand-scratched, jittering type, the distortion branch [3] |
| A-Trak identity by DIA | 2016 | Kinetic identity where "the motion is the work" [7] |
| Squarespace kinetic identity by DIA, typeface Clarkson | [unverified] | Brand system defined by motion rhythm ("square / space") [8] |

## Fits / Avoid

**Fits:**
- Brand launches and campaign films.
- Music, entertainment, events and festivals.
- Social video, especially sound-off viewing.
- Product-launch hero sections and conference openers.
- Title sequences and data-light announcements.

**Avoid:**
- Long-form reading. Animating text that people must read for detail makes them read at the animation's pace, not their own.
  - The research on speed reading and rapid serial presentation shows a speed-accuracy trade-off: forced faster presentation costs comprehension [11] **[E1]**.
  - **Limit:** keep kinetic type to short phrases, and give the full text in a static form.
- Dense UI such as forms, settings and dashboards, where motion competes with the task.

**Claims about effects on people:**
- Animated text grabs and directs attention, and adds emotional tone [6] **[E3]**. The CMU project page asserts this with general reference to perceptual research but does not cite studies. Treat it as plausible but not quantified.

**Accessibility risks:**
- **Pause control:** motion that starts automatically, lasts more than 5 seconds and sits alongside other content needs a way to pause, stop or hide it (WCAG 2.2.2, Level A) [12] **[E2]**. Hero loops of kinetic type usually fall under this rule.
- **Motion triggered by interaction:** people with vestibular disorders can get dizziness, headaches or nausea from it. WCAG 2.3.3 (AAA) asks that it can be disabled, and recommends honoring `prefers-reduced-motion` [13][14] **[E2]**. Scaling and panning large text are typical triggers [14].
- **Flashing:** nothing may flash more than three times in any one second (WCAG 2.3.1, Level A) [15] **[E2]**. Beat-synced inverts and strobes break this easily.
- **Screen readers:** moving text built from per-letter `<span>`s can be read out letter by letter. Keep the real string in the DOM (for example `aria-label` on the container, with the letter spans `aria-hidden`).

**Ages badly when:** the piece copies a specific trending preset (one easing curve or one text-effect template) instead of a rhythm that comes from the content.

## Across media

- **App UI:** Use motion on onboarding headlines, empty states and celebrations only. Keep it at 600 ms or less, never block input, and use a static fallback under reduced motion.
- **Website:**
  - **Hero:** a scroll-driven type sequence using `animation-timeline: scroll()` / `view()` [10], or variable-font axis animation [9].
  - Always render the final readable state without JavaScript.
  - Add a pause control to any autoplay loop longer than 5 seconds [12].
- **Social post:**
  - Vertical 9:16 video with one idea per frame, burned-in text large enough to read on a phone, and a beat-locked edit.
  - Keep text clear of platform UI overlays. Platform safe zones change; check the current spec.
  - Add a static first frame as the thumbnail.
- **Print/editorial:**
  - Motion can't print, so translate it into implied motion: sequential frames, type smeared or stepped across a spread, or a static frame showing the end state.
  - A QR code or AR link can carry the motion version.
- **Billboard/OOH:**
  - **Static boards:** freeze the strongest frame.
  - **Digital (DOOH):** short loops of 6-10 s with very few words. Check local regulations on motion and driver distraction before animating roadside screens [unverified: rules vary by jurisdiction].

## Common mistakes

- Animating every word, so nothing stands out. Choose one hero motion per phrase.
- Text moving too fast to read. Readers must finish a phrase before it leaves.
- Mixing several unrelated easing curves and effect presets in one piece.
- Per-letter spans that break screen readers and copy-paste.
- Autoplay loops with no pause control, or no fallback under `prefers-reduced-motion`.
- Strobe or invert cuts that go over 3 flashes per second.
- Layout shift: animating `font-size` or `width` instead of `transform`, or changing variable-font axes on body text, which causes reflow. Prefer `transform`/`opacity`. Axes that don't change advance widths, such as grade, avoid reflow [9].

## Pairs well with / Related styles

- **Swiss / International Typographic Style:** grid discipline for moving type.
- **Brutalist and anti-design:** distorted and glitch variants. See `anti-design-ugly.md`.
- **Dark tech SaaS:** scroll-driven hero headlines on dark backgrounds. See `dark-tech-saas.md`.
- **Retro print / risograph:** grain and misregistration as motion texture. See `retro-print-risograph.md`.
- **Immersive 3D / WebGL:** type set into 3D space. See `immersive-3d-webgl.md`.

## Sources

[1] Wikipedia contributors. (n.d., accessed 2026-10). *Saul Bass*. Wikipedia. https://en.wikipedia.org/wiki/Saul_Bass (secondary source)
[2] Art of the Title. (n.d., accessed 2026-10). *Saul Bass* (designer page). https://www.artofthetitle.com/designer/saul-bass/
[3] Art of the Title. (n.d., accessed 2026-10). *Se7en* (title sequence page, with Kyle Cooper interview). https://www.artofthetitle.com/title/se7en/
[4] People's Graphic Design Archive. (n.d., accessed 2026-10). *Prince "Sign O' The Times" Music Video*. https://assets.peoplesgdarchive.org/item/8843/prince-sign-o-the-times-music-video
[5] Lee, J. C., Forlizzi, J., & Hudson, S. E. (2002). *The Kinetic Typography Engine: An Extensible System for Animating Expressive Text*. Proceedings of UIST 2002, 81-90. ACM. Citation confirmed via the UIST archive listing, https://uist.acm.org/archive/html/keywords/kwkinetic.html (full text not opened)
[6] Lee, J. C. (n.d., accessed 2026-10). *What is Kinetic Typography?* Carnegie Mellon University project page. https://www.cs.cmu.edu/~johnny/kt
[7] It's Nice That. (2018, Sept 18). *"Go, go, go": how DIA messed with design theory, only to improve it*. https://www.itsnicethat.com/features/dia-mitch-paone-meg-donohoe-graphic-design-animation-typography-180918
[8] Playgrounds. (n.d., accessed 2026-10). *DIA Studio* (artist page). https://weareplaygrounds.nl/artist/dia-studio/
[9] MDN Web Docs. (n.d., accessed 2026-10). *Variable fonts guide*. Mozilla. https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_fonts/Variable_fonts_guide
[10] MDN Web Docs. (n.d., accessed 2026-10). *CSS scroll-driven animations*. Mozilla. https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scroll-driven_animations
[11] Rayner, K., Schotter, E. R., Masson, M. E. J., Potter, M. C., & Treiman, R. (2016). *So much to read, so little time: How do we read, and can speed reading help?* Psychological Science in the Public Interest, 17(1), 4-34. https://profiles.wustl.edu/en/publications/so-much-to-read-so-little-time-how-do-we-read-and-can-speed-readi/ (abstract opened)
[12] W3C. (2023). *Understanding SC 2.2.2: Pause, Stop, Hide (Level A)*. WCAG 2.2. https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html
[13] W3C. (2023). *Understanding SC 2.3.3: Animation from Interactions (Level AAA)*. WCAG 2.2. https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html
[14] MDN Web Docs. (n.d., accessed 2026-10). *prefers-reduced-motion*. Mozilla. https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion
[15] W3C. (2023). *Understanding SC 2.3.1: Three Flashes or Below Threshold (Level A)*. WCAG 2.2. https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html
