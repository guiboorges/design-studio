# Motion, Media, Images, Focus, and Forms

> **Scope:** Hands-on accessibility specs for motion (reduced motion, flashing, auto-play), time-based media (captions, audio description, transcripts, players), images (alt text decision tree), focus and keyboard, forms, touch and pointer input, and the screen-reader annotations a designer must hand off.
> **Last verified:** 2026-10 (MDN browser-support status and OS setting paths checked 2026-10; GitHub Annotation Toolkit released 22 September 2025)
> **Used by:** accessibility-specialist, ui-designer, design-engineer, design-system-architect, social-media-designer, editorial-designer, creative-director, design-critic

---

## How to use this file

- Each section gives the rule, then the spec values or code, then **Apply** and **Limit**.
- The success-criterion catalog is in `wcag-22-in-practice.md`. This file goes deeper on implementation.
- Contrast values → `color` → `contrast-and-dark-mode.md`. Platform touch sizes → `media-specs` → `digital-platforms.md`. Video and social format specs → `media-specs` → `social-formats.md`.
- Motion *design* craft (easing, duration, choreography) is not covered here. This file covers only the accessibility constraints.

---

## 1. Motion

### 1.1 Why it matters

- Interaction-triggered animation can cause "distraction, dizziness, nausea, or headaches" in some users [1]. **[E2]**
- About **15% of US adults (roughly 33 million)** reported a balance or dizziness problem in a 2008 survey. Symptoms include vertigo, blurred vision, disorientation, and nausea [2]. **[E1]** (national survey; it measures balance problems in general, not reactions to screen motion)
- Flashing content can trigger seizures in people with photosensitive epilepsy, which is why 2.3.1 is Level A [3]. **[E2]**
- Moving content distracts people with attention and cognitive disabilities [4]. **[E2]**

### 1.2 The rules

| SC | Level | Rule | Designer action |
|---|---|---|---|
| 2.3.1 Three Flashes or Below Threshold | A | No more than 3 general flashes and no more than 3 red flashes in any 1 s, *or* the flashing area stays small [3]. | Never strobe. Check video cuts, GIFs, glitch effects, and "flashing sale" banners. |
| 2.3.2 Three Flashes | AAA | No more than 3 flashes per second, regardless of size [5]. | Aim for this anyway: it's simpler to verify. |
| 2.2.2 Pause, Stop, Hide | A | Auto-starting motion that lasts more than 5 s and runs beside other content can be paused, stopped, or hidden. Auto-updating content needs the same control, with no 5 s grace [6]. | Pause buttons on carousels, tickers, background video, and animated illustrations. |
| 2.3.3 Animation from Interactions | AAA | Motion triggered by interaction can be disabled unless essential [1]. | **Adopt as a house rule:** honor `prefers-reduced-motion`. |
| 1.4.2 Audio Control | A | Audio that autoplays for more than 3 s can be paused or stopped, or has its own volume control [5]. | No autoplay with sound. |

### 1.3 Flash thresholds (2.3.1), exact definitions [3]

| Term | Definition |
|---|---|
| General flash | A pair of opposing changes in relative luminance of **10% or more** of maximum relative luminance, where the darker image is below **0.80** relative luminance. |
| Red flash | A pair of opposing transitions involving a saturated red. Working definition: R/(R+G+B) ≥ 0.8 in one state, with a CIE 1976 UCS chromaticity difference above 0.2. |
| Small-area allowance | The combined flashing area is no more than **0.006 steradians** within any 10° visual field (25% of the field). Approximation: a **341 × 256 px** rectangle on a 1024 × 768 screen (87,296 CSS px²). |
| Tools | Trace Center PEAT and Harding FPA (W3C lists them as informational, with no endorsement). Content at 3 flashes per second or fewer passes without tools. |

**Apply:** For video and social, run edits with fast cuts or light effects through a flash analyzer before publishing. In UI, avoid blinking cursors or indicators faster than about 3 Hz. Most UI never comes close.

### 1.4 What counts as "motion" (2.3.3)

- **Motion animation** means adding steps between states "to create the illusion of movement or to give a sense of a smooth transition": sliding, scaling, rotating, and parallax [1].
- **Excluded:** color changes and opacity changes that don't change perceived size, shape, or position. W3C errata **removed blur from the exclusions**, so blur effects now count [1].
- **Scrolling itself** is essential motion. Extra animation tied to scroll (parallax, scroll-triggered reveals) isn't [1].

So a reduced-motion variant should **swap movement for opacity or color changes**, not necessarily remove all feedback.

### 1.5 Implementing reduced motion

`prefers-reduced-motion` has two values, `no-preference` and `reduce`. It has been Baseline widely available since January 2020 [7]. Users set it in the OS [7] (verified 2026-10):

| Platform | Setting |
|---|---|
| Windows 11 | Settings > Accessibility > Visual Effects > Animation Effects |
| macOS (Sequoia and earlier) | System Settings > Accessibility > Display > Reduce motion |
| macOS (Tahoe and later) | System Settings > Accessibility > Motion > Reduce motion |
| iOS | Settings > Accessibility > Motion |
| Android 9+ | Settings > Accessibility > Remove animations |

**Preferred pattern: motion as opt-in (progressive enhancement)**

```css
/* Base: no movement. Opacity transitions are fine. */
.card { transition: opacity 200ms ease; }

/* Add movement only when the user hasn't asked to reduce it */
@media (prefers-reduced-motion: no-preference) {
  .card { transition: opacity 200ms ease, transform 300ms cubic-bezier(0.2, 0, 0, 1); }
  .card:hover { transform: translateY(-4px); }
  html { scroll-behavior: smooth; }
}
```

**Retrofit pattern: tone down existing animation** (adapted from MDN [7])

```css
@media (prefers-reduced-motion: reduce) {
  .hero-animation { animation: fade 400ms ease both; } /* replace scale or slide with fade */
  .parallax-layer { transform: none !important; }
}
```

**JavaScript-driven motion** (technique SCR40 [1])

```js
const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
function apply() { mq.matches ? stopParallax() : startParallax(); }
apply();
mq.addEventListener('change', apply); // respond if the user changes the setting mid-session
```

Also offer an **in-product motion toggle** if motion is central to the brand. Not every user knows the OS setting, and W3C lists a site-wide control as a technique [1].

### 1.6 Risk table: common motion patterns

| Pattern | Risk | Accessible version |
|---|---|---|
| Parallax backgrounds | Vestibular trigger. Non-essential [1] | Static under reduced motion. Keep depth shifts small. |
| Auto-advancing carousel | 2.2.2 failure without pause. Distraction. Content changes before people finish reading | No autoplay, or a visible pause control, pause on hover and focus, previous/next buttons (2.5.1). |
| Background hero video | 2.2.2 (> 5 s), 1.4.2 if it has sound | Muted, pause control, poster image under reduced motion. |
| Scroll-jacking / custom scroll | Disorientation. Also in scope for 2.5.7 when it replaces native scroll [see `wcag-22-in-practice.md`] | Native scrolling. |
| Zoom or scale page transitions | Motion per 2.3.3 | Cross-fade under reduced motion. |
| Animated GIFs in UI or social | 2.2.2 if > 5 s and looping. Flashing risk | Limit loops. Use video with controls. Check flashes. |
| Loading spinners | Usually fine. A preloader that is the only content is exempt from 2.2.2 [6] | Keep it small. Show progress text for long waits. |
| Live tickers and auto-updating feeds | 2.2.2: no 5 s grace for auto-updating content [6] | Pause control, or user-controlled update frequency. |

**Apply by medium**
- **UI/app:** Native platforms expose the same preference (iOS Reduce Motion, Android Remove animations). Map it to your motion tokens: `motion.reduce = true` means durations of 0 for transforms, keep fades.
- **Web:** Opt-in pattern above. One global pause control for all decorative motion is best practice [6].
- **Social video:** No strobing. Keep text on screen long enough to read. Captions on by default.
- **Digital OOH screens:** Flash limits still apply to people walking past. Prefer slow cuts.

**Limit:** "Reduced" doesn't mean "none." Users still need state feedback, so keep opacity and color changes, and short non-spatial transitions. Don't remove motion that carries essential meaning, such as an animation preview in an editor [1].

---

## 2. Time-based media

### 2.1 Captions vs. subtitles

| Term | Meaning [8] |
|---|---|
| **Captions** | Same-language text of **speech and non-speech audio** needed to understand the content: speaker identification, sound effects, relevant music. Needed for accessibility. |
| **Subtitles** | Translated speech for viewers who can hear but don't know the language. W3C notes subtitles in other languages are "not directly an accessibility accommodation." Some regions use "subtitles" for both (intralingual vs. interlingual). |
| **Closed captions** | Can be turned on and off by the viewer. |
| **Open captions** | Burned in, always visible. |

### 2.2 What WCAG requires for media

| Content | Level A | Level AA | Level AAA |
|---|---|---|---|
| Prerecorded video with audio | Captions (1.2.2). Audio description *or* text alternative (1.2.3) | Audio description (1.2.5) | Sign language (1.2.6), extended audio description (1.2.7), full text alternative (1.2.8) |
| Live video with audio | — | Captions (1.2.4) | — |
| Prerecorded audio-only (podcast) | Transcript (1.2.1) | — | — |
| Prerecorded video-only (silent) | Transcript or audio track (1.2.1) | — | — |
| Live audio-only | — | — | Text alternative (1.2.9) |

Sources: [5][8][9]. Video with no needed audio (background music only) doesn't need captions [8]. A "talking head" with no meaningful visuals doesn't need description [9].

### 2.3 Audio description options [9]

| Approach | When |
|---|---|
| **Integrated description**: describe the visuals in the main script ("I'm opening the Settings menu, top right") | Best for most training, product, and marketing video. No separate track. **Cheapest when planned before production.** |
| Separate described version (alternate video) | Stories and film where narration can't carry it. |
| Text description track (WebVTT, read by the player) | Needs player support and gaps in the audio. |
| Extended audio description (pauses the video) | AAA 1.2.7. W3C generally doesn't recommend pausing because it needs extra code and degrades the experience. |

### 2.4 Caption production spec

W3C notes that browser and player styling support is "inconsistent and sometimes unreliable." Most players default to white text on a black box, and some let users restyle [8]. Practical spec (craft guidance **[E2]**, check your platform):

- **Closed captions** (WebVTT, SRT, or platform upload) wherever the platform supports them, so users can restyle them. Use open (burned-in) captions on platforms without caption support, and on silent-autoplay social feeds as a design choice, but keep them inside the safe area and high-contrast.
- Identify speakers when it isn't obvious, and include meaningful sounds: [door slams], [music fades].
- **Edit auto-captions** before publishing. Unedited ASR output doesn't reliably provide an equivalent.
- Don't place captions over on-screen text or lower thirds. Reserve the bottom band in the layout.

### 2.5 Transcripts

- Required (A) for prerecorded **audio-only** content such as podcasts [8].
- A **descriptive transcript** (dialogue plus descriptions of visuals) can serve as the media alternative for 1.2.3 (A) and for video-only content under 1.2.1 [5][9]. At AA, 1.2.5 still requires audio description [5].
- Place a visible "Transcript" link next to the player, not only in a description field.

### 2.6 Video player checklist

| Requirement | SC |
|---|---|
| No autoplay with sound. If it autoplays muted, it can be paused | 1.4.2, 2.2.2 |
| All controls reachable and operable by keyboard. No trap inside the player iframe | 2.1.1, 2.1.2 |
| Every control has an accessible name ("Play," "Mute," "Captions") and state (pressed, volume value) | 4.1.2 |
| Captions toggle visible in the control bar, not buried in settings | 1.2.2 |
| Visible focus on every control | 2.4.7 |
| Control contrast 3:1 against the video. Use a scrim behind controls | 1.4.11 |
| Targets ≥ 24 px, ideally 44 px on touch | 2.5.8 |
| Seek bar usable without dragging: click on the track, or skip ±10 s buttons | 2.5.7 |
| Transcript link adjacent | 1.2.1, 1.2.3 |

**Limit:** Third-party embeds (YouTube, Vimeo, social players) control most of these. Choose the platform with the best player, and still supply captions and transcripts yourself.

---

## 3. Images and icons

### 3.1 W3C alt-text decision tree [10]

Ask in order:

1. **Does the image contain text?**
   - The same text is present as real text nearby → `alt=""`.
   - The text is only a visual effect → `alt=""`.
   - The text has a function (such as an icon) → alt describes the **function**.
   - The text isn't available elsewhere → alt **contains that text** (image of text).
2. **Is it in a link or button that would be unclear without it?** → alt says **where the link goes or what the button does** (functional image).
3. **Does it add meaning to the page?**
   - Simple graphic or photo → **brief description that conveys the meaning** (informative).
   - Graph or complex information → **put the information in text elsewhere** (complex image, §3.3).
   - Repeats nearby text → `alt=""`.
4. **Is it purely decorative?** → `alt=""` (empty, *not* missing).
5. **None of the above or unclear?** → see the W3C Images Tutorial.

### 3.2 Image types quick reference

| Type | Example | Alt | Note |
|---|---|---|---|
| Decorative | Background swirl, divider, stock mood photo next to a heading that says it all | `alt=""` or CSS background | A missing `alt` makes screen readers read the file name. |
| Informative | Photo of the product color variant | "Navy wool coat, double-breasted" | Describe what matters *in this context*. The same photo needs different alt text on a news page and a shop page. |
| Functional | Logo linking home. Magnifier icon in a search button | "Acme home". "Search" | Describe the action, not the picture ("magnifying glass" is wrong). |
| Image of text | Quote card, poster headline | The full text | Avoid in UI (1.4.5). On social, repeat the text in the post copy. |
| Complex | Chart, map, diagram, infographic | Short alt that identifies it, plus a long description | §3.3 |
| Logo (non-link) | Partner logos | Company name | Logos are exempt from contrast rules, not from alt text. |
| Icon with visible label | Trash icon + "Delete" | Icon hidden (`alt=""` / `aria-hidden="true"`) | The label is the name. Don't announce it twice. |
| Icon-only button | ✕ close, ⋯ more | Accessible name on the button: "Close dialog", "More actions for Invoice 42" | Prefer a visible label or tooltip too. 2.5.3 requires the visible label to be in the name. |

**Alt-writing rules (practitioner consensus [E2]):** Lead with the information. Skip "image of" or "photo of" (screen readers announce the role). Include text that appears in the image. Keep it short; long content goes in a long description. Don't stuff it with keywords.

### 3.3 Complex images (charts, diagrams, maps) [11]

Two parts: a **short description** that identifies the image, and a **long description** that conveys the essential information as text.

| Method | Use when |
|---|---|
| Data table or summary text next to the chart, visible to everyone | **Default.** It helps everyone, including people who struggle with charts. |
| `<figure>` + `<figcaption>` containing the description (and a table) | The description needs structure: headings, lists, tables. |
| Link next to the image to a long-description page | Very long descriptions. |
| `aria-describedby` pointing to a paragraph on the page | Short text-only descriptions. It's read as one continuous paragraph [11]. |

**Apply**
- **Dataviz:** Put the key takeaway in the chart title ("Sales doubled in Q3"), and provide the data table. Use direct labels, not color-only legends (1.4.1).
- **Social:** Every platform alt-text field is a deliverable. Write it in the content calendar with the copy.
- **Editorial/print-to-web:** Captions aren't alt text. Captions add context for everyone. Alt text replaces the image for people who can't see it.

---

## 4. Focus and keyboard

### 4.1 Focus indicator spec

Full rules are in `wcag-22-in-practice.md` §5.2. Summary: visible (2.4.7), 3:1 against adjacent colors (1.4.11), house standard of a **2 px solid outline with a 2 px offset** meeting 2.4.13 [12].

```css
:focus-visible {
  outline: 2px solid var(--focus-ring-color);
  outline-offset: 2px;
}
/* Forced-colors mode (Windows contrast themes): box-shadow is forced to none and
   outline-color is replaced with a system color, so an outline-based ring survives [13].
   If a component relies on box-shadow for its focus ring, add a real outline here: */
@media (forced-colors: active) {
  .shadow-ring:focus-visible { outline: 2px solid; }
}
```

- Use `:focus-visible` so mouse clicks on buttons don't show rings while keyboard focus always does. It has been Baseline since March 2022 [14].
- **Never** `outline: none` without a replacement. That is failure F78 [12].
- In Windows forced-colors (high contrast) mode, author `box-shadow` becomes `none` [13], so shadow-only focus rings disappear.

### 4.2 Focus order and management

| Situation | Spec |
|---|---|
| Default | DOM order = visual reading order. Don't use positive `tabindex`. |
| Modal dialog opens | Focus moves into the dialog (to the heading or first field). Tab cycles inside it. Esc closes it. Focus **returns to the trigger** on close. |
| Inline expand or disclosure | Focus stays on the toggle. Content appears directly after it in the DOM. |
| Item deleted from a list | Focus moves to the next item, or to a logical container. Never to `<body>`. |
| Route change (SPA) | Focus moves to the new page's `<h1>` or main region. The title updates (2.4.2). |
| Form submit with errors | Focus moves to the error summary, or to the first invalid field [15]. |
| Sticky headers and footers | `scroll-padding` so focused items aren't covered (2.4.11). |

### 4.3 Skip link (2.4.1)

```html
<a class="skip-link" href="#main">Skip to main content</a>
...
<main id="main" tabindex="-1">...</main>
```

```css
.skip-link { position: absolute; inset-inline-start: 1rem; top: -100px; }
.skip-link:focus { top: 1rem; } /* must become visible on focus */
```

Design the skip link's visible state, using brand button styles. It's the first thing keyboard users see.

### 4.4 Keyboard traps and widget behavior

- **No keyboard traps (2.1.2):** embedded maps, video iframes, rich-text editors, and chat widgets must let Tab or Esc out. Document the exit key if it isn't Tab.
- **Specify keyboard behavior for every custom widget** in the handoff: which key opens it, moves within it, selects, and closes. Common conventions: Tab moves between widgets. Arrow keys move within composite widgets (tabs, menus, radio groups, listboxes, grids). Enter and Space activate. Esc closes. [Practitioner convention; see the WAI-ARIA Authoring Practices for each pattern.]
- **Prefer native elements** (`button`, `a`, `select`, `input`, `details`, `dialog`). They come with keyboard support, name, and role.

**Limit:** Keyboard support doesn't satisfy 2.5.7 (dragging) for touch users. Provide visible pointer alternatives too [see `wcag-22-in-practice.md` §5.3].

---

## 5. Forms

### 5.1 Labels and instructions (1.3.1, 2.4.6, 3.3.2, 2.5.3)

| Rule | Spec |
|---|---|
| Every field has a **visible, persistent label** | Label above the field (best for scanning, zoom, and long translations). **No placeholder-as-label.** |
| Instructions **before** the field | Format hints between the label and input ("For example, 06/30/2026"), linked with `aria-describedby`. |
| Group related fields | `fieldset` + `legend` for radio groups, checkbox groups, and multi-part dates or addresses. |
| Required vs. optional | Put "(required)" **in the label text** and use the `required` attribute, which most browsers announce. `aria-required="true"` covers older browsers [16]. Or mark the few *optional* fields instead, and say which convention you use at the top. |
| Visible label = accessible name | The name starts with the visible text (2.5.3). |
| Accept different formats | Phone numbers with or without spaces, postal codes with letters [16]. Be lenient. |

### 5.2 Errors (3.3.1, 3.3.3, 4.1.3)

**Inline error** (each field) [15][17]:
- Text that says **what's wrong and how to fix it** ("Enter an email address like name@example.com"), not "Invalid."
- Placed **next to or below the field** [17], associated via `aria-describedby`, marked `aria-invalid="true"`.
- Color **plus** an icon **plus** text. Never color alone (1.4.1). An icon to the left of the message draws attention [17].

**Error summary** (on submit) [15][17]:
- At the top of the form, under a distinctive heading ("There are 2 problems"), each item **linked to its field**.
- Move focus to it, or use `role="alert"` when the page doesn't reload [15].
- Add the error state to the page `<title>`: "Error: Checkout – Acme" [15].
- The summary is **in addition to** inline errors, not a replacement [17].

### 5.3 Inline validation timing

| Timing | Use for | Source |
|---|---|---|
| **On leaving the field (blur)** | Default for format checks (email, date, postal code) | "avoid showing an error until the user has finished with the field and moved to the next field" [17]. W3C suggests checking dates "when the user leaves the form field" [15]. |
| **While typing** | Positive, progressive feedback: username availability, password-rule checklist, character counters | "Instant feedback during typing can be extremely helpful" for these cases [15]. Announce with `aria-live="polite"` so it isn't read on every keystroke [15]. |
| **On submit** | Cross-field and server checks. Required-but-empty fields | Error summary plus inline errors [15]. |
| **Never** | An error the moment a field receives focus, or after the first keystroke | Premature errors frustrate users [17]. |

`aria-live="assertive"` interrupts the user. Reserve it for important messages after focus changes [15].

### 5.4 Markup pattern

```html
<div class="field">
  <label for="email">Email address (required)</label>
  <p id="email-hint" class="hint">We'll send your receipt here.</p>
  <p id="email-error" class="error">
    <svg aria-hidden="true" focusable="false"><!-- error icon --></svg>
    Enter an email address like name@example.com
  </p>
  <input id="email" name="email" type="email" autocomplete="email"
         required aria-invalid="true" aria-describedby="email-hint email-error">
</div>
```

### 5.5 `autocomplete` tokens (1.3.5)

WCAG 2.2 §7 lists **53 input purposes** [5]. Fields collecting information **about the user** must expose the matching token [18]. The ones designers meet most:

| Data | Token(s) |
|---|---|
| Name | `name`, `given-name`, `family-name`, `additional-name`, `honorific-prefix`, `nickname` |
| Account | `username`, `current-password`, `new-password` |
| Contact | `email`, `tel` (or `tel-country-code`, `tel-national`), `url`, `impp` |
| Address | `street-address`, `address-line1`–`address-line3`, `address-level1`–`address-level4`, `postal-code`, `country`, `country-name` |
| Organization | `organization`, `organization-title` |
| Payment | `cc-name`, `cc-number`, `cc-exp`, `cc-exp-month`, `cc-exp-year`, `cc-csc`, `cc-type`, `transaction-amount`, `transaction-currency` |
| Personal | `bday`, `bday-day`, `bday-month`, `bday-year`, `sex`, `language`, `photo` |

Benefits [18]: autofill, assistive tech that can show familiar icons next to fields (a cake for `bday`, a phone for `tel`), and recognition independent of the label's language. Whether a browser actually autofills isn't part of the test.

### 5.6 Other form criteria

| SC | Form spec |
|---|---|
| 3.3.4 Error Prevention (legal, financial, data) | A review step before final submit, or undo, or cancellation |
| 3.3.7 Redundant Entry | "Same as shipping" checkboxes. Carry data between steps. Keep input after errors |
| 3.3.8 Accessible Authentication | Paste allowed, password-manager-friendly fields, passkeys or magic links, paste-able OTP field |
| 2.2.1 Timing Adjustable | Timeout warning with an "extend" action. Autosave |
| 3.2.2 On Input | No auto-submit or page reload when a select or radio changes |
| 1.4.10 / 1.4.4 | Forms usable at 320 px and 200% text. Labels above inputs survive both |

**Apply**
- **UI/app:** Build the error, hint, required, disabled, and success states into each form component in the design system, with copy guidelines.
- **Web:** Specify which validation fires on blur, on type, and on submit for each field in the handoff.

**Limit:** Disabled submit buttons that enable only when the form is valid hide the reason. Users don't know what's missing. Prefer an enabled button that shows the error summary.

---

## 6. Touch and pointer

Summary (rules in `wcag-22-in-practice.md` §3.3 and §5.3–5.4; platform sizes in `media-specs` → `digital-platforms.md`):

| Need | Rule | Spec |
|---|---|---|
| Hit area | 2.5.8: ≥ 24×24 CSS px or spacing exception. 2.5.5 (AAA): 44×44 | Set the minimum hit area in component tokens. Pad small icons. |
| Gestures | 2.5.1: path or multipoint gestures have single-pointer alternatives | Buttons for swipe, pinch, and two-finger actions. |
| Dragging | 2.5.7: single-pointer alternative | Move menus, tap-on-track sliders. |
| Accidental activation | 2.5.2: fire on release, allow abort or undo | Undo toasts for destructive actions. |
| Device motion | 2.5.4: UI alternative, can be disabled | Never shake-only. |
| Hover | 1.4.13: hover content dismissible, hoverable, persistent. Touch has no hover | Never put essential information only in hover tooltips. |
| Speech input | 2.5.3: visible label in the accessible name | Users say what they see. |

---

## 7. Screen reader basics: what the designer must annotate

Screen readers expose structure the eye infers from layout. If it isn't annotated, engineering guesses. **[E2]**

### 7.1 Annotation checklist

| Annotate | What to specify | SC |
|---|---|---|
| **Page title** | Title pattern per template | 2.4.2 |
| **Language** | `lang` per page, and for foreign-language passages | 3.1.1, 3.1.2 |
| **Headings** | Level (H1–H6) for each heading. One H1 per page. Levels are structural, not visual: an H3 can be styled small or large | 1.3.1, 2.4.6 |
| **Landmarks** | Regions (table below). Labels when a type repeats ("Main navigation," "Footer navigation") | 1.3.1, 2.4.1 |
| **Reading order** | Numbered order where the visual layout is non-linear | 1.3.2 |
| **Focus order** | Tab sequence for complex screens and modals. Where focus goes on open and close | 2.4.3 |
| **Names** | Accessible names for icon buttons, repeated links ("Edit — Invoice 42"), form fields | 4.1.2, 2.4.4, 2.5.3 |
| **Roles** | Button vs. link (action vs. navigation), tabs, dialog, menu, switch | 4.1.2 |
| **States** | Expanded or collapsed, selected, checked, pressed, current page (`aria-current`), disabled, invalid | 4.1.2 |
| **Alt text** | Per image, or "decorative" | 1.1.1 |
| **Status messages** | Toasts, result counts, "Saved," with polite vs. assertive priority | 4.1.3 |
| **Keyboard behavior** | For each custom widget | 2.1.1 |
| **Hidden helper text** | Visually hidden text that screen readers read ("opens in new tab") | 2.4.4 |

### 7.2 Landmarks [19]

| Role | HTML element | Content |
|---|---|---|
| banner | `<header>` (top level) | Site logo, global utilities |
| navigation | `<nav>` | Link groups. Label each one if there's more than one |
| main | `<main>` | Primary content. One per page |
| complementary | `<aside>` | Related but independent content |
| contentinfo | `<footer>` (top level) | Copyright, legal, contact |
| search | `<search>` | Site search |
| form | `<form>` with an accessible name | A significant form |
| region | `<section>` with an accessible name | Important content no other landmark describes |

Put all perceivable content inside a landmark. Don't repeat the role in the label: "Site navigation," not "Site navigation navigation" [19].

### 7.3 Annotation kits (verified 2026-10)

| Kit | Status |
|---|---|
| **GitHub Annotation Toolkit** (Figma library) | Open-sourced **22 September 2025**, license CC-BY-4.0, with attribution to the **CVS Health Inclusive Design team**. It covers headings and landmarks, focus and reading order, image descriptions, media embeds, form semantics, lists and tables, buttons vs. links, live-region feedback, document title and language, and checklists, with iOS and Android support. Repo: github.com/github/annotation-toolkit [20]. |
| **Microsoft Learn: "Accessibility design specs with annotations"** | Training module (February 2025) on annotating designs for screen readers, keyboards, and magnifiers, with a curated list of Figma tools and templates [21]. |
| **Indeed "A11y Annotation Kit"** (Figma Community) | Described in search listings as documenting focus order, callouts, and keyboard interactions [unverified: Figma page not reachable in this pass]. |

**Apply:** Pick one kit for the team and make annotation layers part of the definition of done for every handoff (see `legal-and-testing.md`, design-stage checklist).

**Limit:** Annotations are only as good as the designer's understanding. A kit with wrong roles (such as `menu` for site navigation) creates bugs. When unsure, annotate the *intent* ("this navigates to a page") and let engineering choose the native element.

---

## Common mistakes

- **Removing all animation under reduced motion**, including state feedback, or the opposite: ignoring the preference entirely.
- **Blur and zoom effects treated as "not motion."** Blur now counts under 2.3.3 [1].
- **Carousels that autoplay with no pause** (2.2.2).
- **Auto-captions published unedited.** Captions without sound cues or speaker IDs.
- **Subtitles (translation) delivered as the accessibility solution** for same-language audiences.
- **Alt text that describes the icon, not the function** ("magnifying glass" instead of "Search").
- **Missing `alt`** (the screen reader reads the file name) where `alt=""` was intended.
- **Charts with color-only legends** and no data table.
- **`outline: none`** or `box-shadow`-only focus rings that vanish in forced-colors mode.
- **Focus not returned to the trigger** after closing a modal.
- **Placeholder-as-label**, errors shown only in red, errors that fire on the first keystroke.
- **Disabled submit buttons** that don't explain what's missing.
- **No `autocomplete`** on name, email, address, and payment fields.
- **Visual-only handoff:** no heading levels, landmarks, reading order, or names annotated.

---

## Sources

[1] W3C WAI. (2023). *Understanding SC 2.3.3 Animation from Interactions* (WCAG 2.2, including errata). https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html
[2] National Institute on Deafness and Other Communication Disorders. (n.d.). *Balance Disorders*. NIH. https://www.nidcd.nih.gov/health/balance-disorders (accessed 2026-10)
[3] W3C WAI. (2023). *Understanding SC 2.3.1 Three Flashes or Below Threshold*. https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html
[4] W3C WAI. (2024). *Diverse Abilities and Barriers: Cognitive*. https://www.w3.org/WAI/people-use-web/abilities-barriers/cognitive/
[5] W3C. (2024). *Web Content Accessibility Guidelines (WCAG) 2.2*. W3C Recommendation, 12 December 2024 edition. https://www.w3.org/TR/WCAG22/
[6] W3C WAI. (2023). *Understanding SC 2.2.2 Pause, Stop, Hide*. https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html
[7] MDN Web Docs. (n.d.). *prefers-reduced-motion*. Mozilla. https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion (accessed 2026-10)
[8] W3C WAI. (n.d.). *Captions/Subtitles*. Making Audio and Video Media Accessible. https://www.w3.org/WAI/media/av/captions/ (accessed 2026-10)
[9] W3C WAI. (n.d.). *Description of Visual Information*. Making Audio and Video Media Accessible. https://www.w3.org/WAI/media/av/description/ (accessed 2026-10)
[10] W3C WAI. (n.d.). *An alt Decision Tree*. Images Tutorial. https://www.w3.org/WAI/tutorials/images/decision-tree/ (accessed 2026-10)
[11] W3C WAI. (n.d.). *Complex Images*. Images Tutorial. https://www.w3.org/WAI/tutorials/images/complex/ (accessed 2026-10)
[12] W3C WAI. (2023). *Understanding SC 2.4.7 Focus Visible* and *Understanding SC 2.4.13 Focus Appearance*. https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html ; https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html
[13] MDN Web Docs. (n.d.). *forced-colors*. Mozilla. https://developer.mozilla.org/en-US/docs/Web/CSS/@media/forced-colors (accessed 2026-10)
[14] MDN Web Docs. (n.d.). *:focus-visible*. Mozilla. https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible (accessed 2026-10)
[15] W3C WAI. (n.d.). *User Notifications*. Forms Tutorial. https://www.w3.org/WAI/tutorials/forms/notifications/ (accessed 2026-10)
[16] W3C WAI. (n.d.). *Validating Input*. Forms Tutorial. https://www.w3.org/WAI/tutorials/forms/validation/ (accessed 2026-10)
[17] Krause, R. (2019, February 3; reviewed 2024, December 12). *10 Design Guidelines for Reporting Errors in Forms*. Nielsen Norman Group. https://www.nngroup.com/articles/errors-forms-design-guidelines/
[18] W3C WAI. (2023). *Understanding SC 1.3.5 Identify Input Purpose*. https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html
[19] W3C WAI. (n.d.). *Landmark Regions*. ARIA Authoring Practices Guide. https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/ (accessed 2026-10)
[20] GitHub. (2025, September 22). *Open sourcing the GitHub Annotation Toolkit*. GitHub Changelog. https://github.blog/changelog/2025-09-22-open-sourcing-the-github-annotation-toolkit
[21] Microsoft. (2025). *Introduction — Accessibility design specs with annotations*. Microsoft Learn. https://learn.microsoft.com/en-us/training/modules/accessibility-design-specs-with-annotations/1-introduction
