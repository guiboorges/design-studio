# WCAG 2.2 in Practice

> **Scope:** Every WCAG 2.2 Level A and AA success criterion, organized by POUR, translated into what the designer must decide or specify, plus the common failure. Covers the 2.2 additions in depth, the AAA criteria worth adopting, and the status of WCAG 3.
> **Last verified:** 2026-10 (WCAG 2.2 edition of 12 December 2024; ISO/IEC 40500:2025 announced 21 October 2025; WCAG 3 Working Draft status page updated 25 September 2026)
> **Used by:** accessibility-specialist, ui-designer, design-system-architect, design-engineer, design-critic, creative-director, social-media-designer, editorial-designer

---

## How to use this file

1. **Target WCAG 2.2 Level AA** unless a contract or law names another version. AA is what most laws and procurement rules reference (see `legal-and-testing.md`). Meeting 2.2 AA also meets 2.1 AA and 2.0 AA, except for the removed 4.1.1 Parsing [1][2].
2. **Use the "Designer decides" column as a spec checklist.** Most failures start as an unmade design decision: no focus style drawn, no error state designed, no alt text written, no heading levels annotated.
3. **For contrast numbers, go to `color` → `contrast-and-dark-mode.md`.** This file gives one line per contrast criterion and links there. That file owns the contrast math, APCA, and color-vision deficiency.
4. **For platform touch-target sizes (Apple, Material, Fluent), go to `media-specs` → `digital-platforms.md`.** This file owns only the WCAG 2.5.8 rule.
5. Motion, media, alt text, focus, forms, and annotation get full treatment in `motion-media-and-forms.md`. Cognitive and inclusive design is in `inclusive-and-cognitive.md`.

All WCAG requirements below are **[E2]**: an authoritative standard. Where the file says who benefits, that is also W3C's own reasoning **[E2]**, not an independent effect study.

---

## 1. Status and versions (verified 2026-10)

| Item | Status | Source |
|---|---|---|
| WCAG 2.2 | W3C Recommendation, first published **5 October 2023**. The current dated edition is **12 December 2024** (`REC-WCAG22-20241212`). | [1][2] |
| ISO/IEC 40500:2025 | WCAG 2.2 is now an ISO/IEC standard. W3C announced it on **21 October 2025**, said it is free from ISO, and said it "enables more countries to formally adopt WCAG 2.2." The ISO catalog lists the edition as 2025-09. | [3] |
| What 2.2 added | **9 new success criteria** (6 at A/AA, 3 at AAA). | [2] |
| What 2.2 removed | **4.1.1 Parsing**, now "obsolete and removed." Assistive technology no longer parses HTML directly. Anyone still bound to 2.0 or 2.1 "may need to continue to test and report 4.1.1." | [1][2] |
| WCAG 3 | **Working Draft only.** W3C calls it "an incomplete draft that will change" and says it is "not expected to be a completed W3C standard for a few more years." A new Working Draft and Explainer came out in September 2026. W3C's advice for now is to meet WCAG 2.2. | [4] |

**On WCAG 3, don't overclaim.** Don't design to WCAG 3 scoring, don't cite its draft requirements as rules, and don't tell clients that WCAG 2 is being replaced soon. W3C says WCAG 2 will stay in place for several years after WCAG 3 is finalized [4].

### The 9 new criteria in 2.2

| SC | Name | Level | One line |
|---|---|---|---|
| 2.4.11 | Focus Not Obscured (Minimum) | AA | A focused item is never *entirely* hidden by author content such as sticky bars or banners. |
| 2.4.12 | Focus Not Obscured (Enhanced) | AAA | No *part* of the focused item is hidden. |
| 2.4.13 | Focus Appearance | AAA | The focus indicator is at least as big as a 2 CSS px perimeter and changes by 3:1. |
| 2.5.7 | Dragging Movements | AA | Anything done by dragging can also be done with single clicks or taps. |
| 2.5.8 | Target Size (Minimum) | AA | Targets are at least 24×24 CSS px, or are spaced so that they act as if they were. |
| 3.2.6 | Consistent Help | A | Help links and contact options repeated across pages stay in the same relative order. |
| 3.3.7 | Redundant Entry | A | Don't make people re-type what they already entered in the same process. |
| 3.3.8 | Accessible Authentication (Minimum) | AA | Login doesn't require memorizing, transcribing, or solving puzzles unless an alternative or aid exists. |
| 3.3.9 | Accessible Authentication (Enhanced) | AAA | Like 3.3.8, but object-recognition and personal-content tests are no longer allowed exceptions. |

Source: [1][2].

### Conformance in one paragraph

A conformance claim covers **full pages** and **complete processes**. One inaccessible step in a checkout fails the whole checkout. AA means all A and AA criteria are met. "Partial" conformance isn't a level [1]. **Apply:** design reviews should walk entire flows, not isolated screens.

---

## 2. Perceivable

### 2.1 Text alternatives and time-based media

| SC | Lvl | Plain rule | Designer decides or specifies | Common failure |
|---|---|---|---|---|
| 1.1.1 Non-text Content | A | Every meaningful image, icon, chart, and control has a text alternative. Decorative ones are hidden from assistive tech [1]. | Classify each image as decorative, informative, functional, or complex. Write the alt text or label in the spec. Plan long descriptions for charts. See the decision tree in `motion-media-and-forms.md`. | Icon-only buttons with no label. Alt text like "image123.jpg". Charts with no data alternative. |
| 1.2.1 Audio-only and Video-only (Prerecorded) | A | Audio-only needs a transcript. Video-only needs a transcript or an audio track [1]. | Budget the transcript in the content plan. Place a visible link to it. | Podcast with no transcript. Silent product demo with no description. |
| 1.2.2 Captions (Prerecorded) | A | Prerecorded video with audio has captions [1]. | Choose the player and caption style. Treat captions as a deliverable. Leave a safe area so captions don't cover key visuals or lower thirds. | Auto-captions published unedited. Captions burned over on-screen text. |
| 1.2.3 Audio Description or Media Alternative (Prerecorded) | A | Video has audio description *or* a full text alternative [1]. | Script key visual information into narration (integrated description), or commission description. | Visual-only information such as "as you can see here" with no spoken equivalent. |
| 1.2.4 Captions (Live) | AA | Live video with audio has captions [1]. | Book live captioning (CART) for webinars and launches. Reserve screen space for it. | Live stream with no captions. |
| 1.2.5 Audio Description (Prerecorded) | AA | Prerecorded video has audio description [1]. At AA, a text alternative alone is no longer enough. | Write scripts that describe visuals as they happen. If pauses are too short, plan a described version. | Brand film whose meaning lives entirely in silent visuals and on-screen text. |

### 2.2 Adaptable

| SC | Lvl | Plain rule | Designer decides or specifies | Common failure |
|---|---|---|---|---|
| 1.3.1 Info and Relationships | A | Structure that is visible (headings, lists, tables, groups, labels) is also in the code [1]. | Annotate heading levels, lists, data tables vs. layout, form groups (fieldset/legend), and landmarks. | Bold text styled as a heading but coded as a paragraph. Faux tables built from divs. |
| 1.3.2 Meaningful Sequence | A | Reading order in code matches the meaningful order [1]. | Annotate reading order where the visual layout is non-linear: cards, sidebars, overlapping hero text. | A CSS grid that reorders content visually so the screen reader order makes no sense. |
| 1.3.3 Sensory Characteristics | A | Instructions don't rely only on shape, color, size, position, or sound [1]. | Write copy like "Select **Continue** (bottom right)," not "click the green button on the right." | "Fields marked in red are required." |
| 1.3.4 Orientation | AA | Don't lock to portrait or landscape unless essential [1]. | Design both orientations for mobile web and apps. | A mobile site that shows "rotate your device" in landscape. |
| 1.3.5 Identify Input Purpose | AA | Fields that collect information about the user expose their purpose, such as `autocomplete="email"` [1][18]. | Specify the `autocomplete` token for each personal-data field. The full list of 53 tokens is in `motion-media-and-forms.md`. | Name, address, and phone fields with no autocomplete, so autofill and icon-based assistive tools can't help. |

### 2.3 Distinguishable

| SC | Lvl | Plain rule | Designer decides or specifies | Common failure |
|---|---|---|---|---|
| 1.4.1 Use of Color | A | Color is never the only way to convey information or show an action [1]. | Pair color with text, icon, pattern, or underline. Inline links in body text need a non-color cue. | Error shown only by a red border. A chart legend distinguished only by hue. |
| 1.4.2 Audio Control | A | Audio that autoplays for more than 3 seconds can be paused or stopped, or has its own volume control [1]. | Default to no autoplay with sound. If audio autoplays, put a visible control first in the page. | A background video with sound and no mute control. |
| 1.4.3 Contrast (Minimum) | AA | Text 4.5:1. Large text (≥ 18 pt or ≥ 14 pt bold) 3:1 [1]. | Choose palette pairs that pass. → `color` → `contrast-and-dark-mode.md` | Light gray placeholder or body text. |
| 1.4.4 Resize Text | AA | Text resizes to 200% without loss of content or function, without assistive tech [1]. | Design containers that grow. No fixed-height text boxes. Truncation needs a way to see the full text. | Buttons whose labels clip at 200%. |
| 1.4.5 Images of Text | AA | Use real text, not pictures of text, except logos or where a particular presentation is essential [1]. | Set headlines, quotes, and promos as live text over images. | Hero banners exported as a single JPG with the headline baked in. |
| 1.4.10 Reflow | AA | Content works at **320 CSS px** wide (1280 px at 400% zoom) without two-dimensional scrolling. Maps, data tables, diagrams, video, games, and toolbars are excepted [1][14]. | Provide a single-column layout at 320 px. Data tables may scroll sideways, but the text around them must not. | Fixed-width layouts. Side-by-side panels that never stack. |
| 1.4.11 Non-text Contrast | AA | UI component boundaries and states, focus indicators, and meaningful graphics reach 3:1 against adjacent colors. Inactive components are exempt [1][12]. | Input borders, toggles, checkbox outlines, focus rings, chart lines. → `color` → `contrast-and-dark-mode.md` | `#AAA` input border on white [12]. Ghost buttons that vanish. |
| 1.4.12 Text Spacing | AA | Nothing breaks when users set line height 1.5×, paragraph spacing 2×, letter spacing 0.12×, and word spacing 0.16× the font size [1]. | Leave slack in fixed-height components. Test with a spacing bookmarklet. | Text clipped in cards, buttons, and tabs once spacing increases. |
| 1.4.13 Content on Hover or Focus | AA | Tooltips and popovers that appear on hover or focus are **dismissible** (Esc), **hoverable** (the pointer can move onto them), and **persistent** (they stay until dismissed or no longer relevant) [1]. | Specify tooltip behavior: delay, Esc to close, no disappearing when the pointer moves onto it. | A tooltip that vanishes when the user tries to move onto it. A popover that covers the trigger with no way to close it. |

---

## 3. Operable

### 3.1 Keyboard, timing, seizures

| SC | Lvl | Plain rule | Designer decides or specifies | Common failure |
|---|---|---|---|---|
| 2.1.1 Keyboard | A | Everything works from a keyboard, with no timing requirement for keystrokes [1]. | Specify keyboard behavior for custom widgets (tabs, menus, carousels, sliders, drag-and-drop) in the handoff. | Click-only custom dropdown. Hover-only menus. |
| 2.1.2 No Keyboard Trap | A | Focus can always move away from a component with the keyboard [1]. | Specify how users exit modals, embeds, and editors (Esc, Close). | An embedded map or video iframe that swallows Tab. |
| 2.1.4 Character Key Shortcuts | A | Single-key shortcuts (letters, numbers, punctuation) can be turned off or remapped, or work only on focus [1]. | If you design shortcuts, use modifier keys or add a setting. | "Press S to share" firing while a speech-input user dictates. |
| 2.2.1 Timing Adjustable | A | Time limits can be turned off, adjusted, or extended (warn the user and allow at least 20 seconds to extend with a simple action, up to at least 10 times). Exceptions: real-time events, essential limits, and limits over 20 hours [1]. | Design the session-timeout warning dialog. Specify the extend action. Avoid timed steps. | A checkout session that expires silently and loses the form. |
| 2.2.2 Pause, Stop, Hide | A | Moving, blinking, or scrolling content that starts automatically, lasts more than 5 s, and sits beside other content can be paused, stopped, or hidden. Auto-updating content needs the same control, with no 5 s grace [1][16]. | Put a visible pause control on carousels, tickers, and animated heroes. One control for all motion is best practice [16]. | Auto-advancing carousels with no pause. |
| 2.3.1 Three Flashes or Below Threshold | A | Nothing flashes more than 3 times in any 1 second, unless it stays below the general and red flash thresholds [1]. | Check video edits, GIFs, and transitions. Details in `motion-media-and-forms.md`. | A strobe-cut promo video or flashing "SALE" banner. |

### 3.2 Navigable

| SC | Lvl | Plain rule | Designer decides or specifies | Common failure |
|---|---|---|---|---|
| 2.4.1 Bypass Blocks | A | There is a way to skip repeated blocks, such as a skip link or landmarks [1]. | Design the "Skip to main content" link's visible-on-focus state. Annotate landmarks. | A skip link that is never visible, or targets nothing. |
| 2.4.2 Page Titled | A | Each page has a descriptive `<title>` [1]. | Specify the title pattern: "Page – Section – Brand". Put the error state first on failed submits ("Error: …"). | Every page titled "Home" or the brand name only. |
| 2.4.3 Focus Order | A | Focus order preserves meaning and operation [1]. | Annotate tab order for complex screens and modals. Focus moves into a dialog when it opens and returns to the trigger when it closes. | A modal opens but focus stays behind it. |
| 2.4.4 Link Purpose (In Context) | A | The link's purpose is clear from its text plus its context (sentence, list item, heading) [1]. | Write link text that names the destination. Avoid bare "Read more" repeated 12 times. | Card grids with identical "Learn more" links. |
| 2.4.5 Multiple Ways | AA | Pages in a set can be found in more than one way: navigation, search, sitemap, or related links. Steps in a process are excepted [1]. | Include search or a sitemap in the information architecture. | A large site with only a hamburger menu. |
| 2.4.6 Headings and Labels | AA | Headings and labels describe the topic or purpose [1]. | Write headings as content summaries. Write field labels that say what to enter. | Headings like "Overview" everywhere. Labels like "Field 1". |
| 2.4.7 Focus Visible | AA | The keyboard focus indicator is visible. It must not be time-limited, and because it is non-text content it also falls under 1.4.11 [1][13]. | Draw the focus state for every interactive component in the design system. | `outline: none` with no replacement (failure F78) [13]. |
| **2.4.11 Focus Not Obscured (Minimum)** *(new)* | AA | The focused component is not *entirely* hidden by author-created content [1][5]. | Specify scroll padding equal to sticky header and footer heights. Make cookie banners modal or non-overlapping. See §5.1. | A sticky footer or cookie banner fully covers the focused link (failure F110) [5]. |

### 3.3 Input modalities

| SC | Lvl | Plain rule | Designer decides or specifies | Common failure |
|---|---|---|---|---|
| 2.5.1 Pointer Gestures | A | Multipoint or path-based gestures (pinch, two-finger swipe, drawing a path) have a single-pointer alternative, unless essential [1]. | Add +/− buttons to pinch-zoom maps and arrows to swipe carousels. | A swipe-only carousel. Pinch-only zoom. |
| 2.5.2 Pointer Cancellation | A | Actions fire on release (up-event), or can be aborted or undone [1]. | Specify that destructive actions trigger on release, or can be undone. | Delete fires on mousedown. |
| 2.5.3 Label in Name | A | The accessible name contains the visible label text, ideally at the start [1]. | Make sure the visible label and the coded name match. Note this in the spec when an aria-label is used. | Visible "Search" but aria-label="Find products", so speech users saying "click Search" fail. |
| 2.5.4 Motion Actuation | A | Functions triggered by device motion (shake, tilt) have a UI alternative and can be turned off [1]. | Always add a button for shake-to-undo or tilt-to-scroll. | Shake to report a bug, with no alternative. |
| **2.5.7 Dragging Movements** *(new)* | AA | Anything done by dragging can also be done with a single pointer without dragging, unless dragging is essential [1][7]. | Design the non-drag path: up/down buttons, "Move to…" menus, tap-on-track sliders. See §5.3. | Kanban or sortable list that only drags (failure F108) [7]. |
| **2.5.8 Target Size (Minimum)** *(new)* | AA | Targets are at least **24×24 CSS px**, or meet the spacing exception [1][8]. | Set minimum hit areas in component tokens. See §5.4. | 16 px icon buttons packed edge to edge. |

---

## 4. Understandable and Robust

### 4.1 Readable, predictable

| SC | Lvl | Plain rule | Designer decides or specifies | Common failure |
|---|---|---|---|---|
| 3.1.1 Language of Page | A | The page's language is set in code (`<html lang="en">`) [1]. | List the locale per page or template in the handoff. | Missing `lang`. In 2026, WebAIM found it missing on 13.5% of top home pages (see `legal-and-testing.md`). |
| 3.1.2 Language of Parts | AA | Passages in another language are marked (`lang="fr"`). Proper names, technical terms, and naturalized words are exempt [1]. | Flag foreign-language quotes, language switchers ("Español"), and bilingual content. | A language picker whose names are read with the wrong pronunciation. |
| 3.2.1 On Focus | A | Focusing an element doesn't change context, such as opening a new page or submitting [1]. | No auto-navigation on focus. | A menu that navigates as soon as an item receives focus. |
| 3.2.2 On Input | A | Changing a setting doesn't change context unless users were told beforehand [1]. | Use an explicit "Apply" or "Go" button for filters and selects that navigate. | A country select that reloads the page on change. |
| 3.2.3 Consistent Navigation | AA | Repeated navigation keeps the same relative order across pages [1]. | Lock navigation order in the layout system. | Nav items reorder on different templates. |
| 3.2.4 Consistent Identification | AA | Components with the same function are identified the same way across pages [1]. | One icon and one label per function across the product: "Search" isn't "Find" on another page. | Same download action labeled three ways. |
| **3.2.6 Consistent Help** *(new)* | A | If help (contact details, contact form or chat, self-help, chatbot) repeats across pages, it stays in the same relative order [1][9]. | Fix the location of "Help" and "Contact" in the header or footer template. See §5.5. | A chat button that moves between pages, or a help link that jumps from header to footer. |

### 4.2 Input assistance

| SC | Lvl | Plain rule | Designer decides or specifies | Common failure |
|---|---|---|---|---|
| 3.3.1 Error Identification | A | Detected errors identify the field and describe the error in text [1]. | Design the error state for every field with a text message, not only color. | A red border only. A generic "Invalid input". |
| 3.3.2 Labels or Instructions | A | Inputs have labels or instructions [1]. | Use a visible, persistent label for every field. Put format hints before the field. | Placeholder-as-label that disappears on typing. |
| 3.3.3 Error Suggestion | AA | When a fix is known, suggest it, unless that would jeopardize security [1]. | Write correction copy: "Enter a date like 21/04/2026", "Did you mean gmail.com?" | "Error 422." |
| 3.3.4 Error Prevention (Legal, Financial, Data) | AA | For legal, financial, data-changing, or test submissions, at least one holds: reversible, checked, or reviewable and confirmable before submit [1]. | Design a review step or undo for orders, payments, deletions, and exams. | One-tap purchase with no confirmation or cancellation path. |
| **3.3.7 Redundant Entry** *(new)* | A | Information entered earlier in the same process is auto-filled or selectable. Exceptions: essential, security, or no longer valid [1][10]. | Use "Billing same as shipping" checkboxes. Carry values between steps. Keep input after an error. See §5.6. | Asking for the email twice across steps. Clearing the card number after a payment error. |
| **3.3.8 Accessible Authentication (Minimum)** *(new)* | AA | No cognitive function test (remembering, transcribing, calculating, puzzles) at any login step unless there is an alternative, an aid (password managers, paste), object recognition, or personal content [1][11]. | Allow paste and autofill. Offer passkeys, magic links, or OAuth. Make one-time code fields accept paste. See §5.7. | Paste blocked in password fields. Six one-digit OTP boxes that reject paste. Text CAPTCHAs [11]. |

### 4.3 Robust

| SC | Lvl | Plain rule | Designer decides or specifies | Common failure |
|---|---|---|---|---|
| ~~4.1.1 Parsing~~ | — | **Removed in 2.2** as obsolete [1][2]. | Nothing. Still test it if a contract cites 2.0 or 2.1 [1]. | — |
| 4.1.2 Name, Role, Value | A | Every UI component exposes its name and role, and its states and values are programmatically available and settable [1]. | Annotate component names, roles (button vs. link vs. tab), and states (expanded, selected, checked, disabled). Prefer native elements. | A div "button". A toggle with no on/off state exposed. |
| 4.1.3 Status Messages | AA | Status messages (such as "Added to cart", "3 results", "Saved") are announced without moving focus [1]. | List every toast, inline status, and result count in the spec as a "status message" so engineering adds a live region. | A silent toast that screen reader users never hear. |

---

## 5. The 2.2 additions in detail

### 5.1 2.4.11 Focus Not Obscured (Minimum), AA

**Rule.** When an element has keyboard focus, it isn't *entirely* hidden by author-created content [1]. Partial overlap passes AA, but W3C recommends designing so that none of the component is covered [5].

**Key details** [5]:
- The test is about the **component**, not the focus ring. A fully hidden ring may also fail 2.4.7.
- **Sticky headers and footers** are the classic failure. A cookie banner that fully covers the focused element fails.
- **Modals pass by design**, because they take and hold focus. A non-modal overlay that doesn't take focus or close when focus leaves is at risk.
- **User-movable content:** only its initial position is tested.
- **Non-persistent popups** (menus, date pickers, tooltips) don't fail as long as they close when focus moves on.
- Semi-transparent overlays may not "entirely hide" the item, but they can still fail 1.4.11 contrast.

**Spec values**

```css
/* Keep focused items clear of sticky chrome (technique C43) */
html {
  scroll-padding-top: 72px;    /* = sticky header height */
  scroll-padding-bottom: 64px; /* = sticky footer or cookie bar height */
}
```

**Apply**
- **Web/app:** In the design file, annotate the height of every sticky element and request matching `scroll-padding`. Make cookie and consent banners either modal or placed so they don't overlap content (push content up).
- **Design system:** Document "Sticky components must not cover focused content" in the header, footer, chat-launcher, and toast components.

**Limit:** Meeting AA (partly visible) is the floor. A focused link that is 90% covered passes AA but still fails users. Aim for 2.4.12 (no part hidden) where you can.

### 5.2 2.4.13 Focus Appearance, AAA (adopt it as your house standard)

**Rule** [1][6]. When the focus indicator is visible, an area of it:
1. is at least as large as the area of a **2 CSS px thick perimeter** of the unfocused component, and
2. has a **contrast ratio of at least 3:1** between the same pixels in the focused and unfocused states.

Exceptions: the browser draws the indicator and the author can't adjust it, or the author hasn't modified the indicator or its background [6].

**Numbers** [6]:
- Minimum area for a rectangle = 4h + 4w. For a 90×30 px button: 4×30 + 4×90 = **480 px²**.
- A **solid outline at least 2 px thick** around the outside is the simplest pass.
- An **inset** indicator must be thicker. W3C's example: a 2 px inset fails, a 3 px inset passes.
- Only pixels that change by 3:1 count toward the area. A black background shifting to `#555` fails. Shifting to `#FFF` passes.

**Token recipe**

```css
:root {
  --focus-ring-color: #1a5fff;  /* must reach 3:1 against both the component and the page background */
  --focus-ring-width: 2px;
  --focus-ring-offset: 2px;
}
:focus-visible {
  outline: var(--focus-ring-width) solid var(--focus-ring-color);
  outline-offset: var(--focus-ring-offset);
}
```

`:focus-visible` shows the ring for keyboard focus but usually not for mouse clicks on buttons. It has been widely available since March 2022 [17]. Prefer `outline` to `box-shadow` for rings, because `box-shadow` is forced to `none` in Windows forced-colors mode (see `legal-and-testing.md`, manual tests).

**Apply**
- **Design system:** Draw one focus treatment and apply it to every interactive component. Check it on every surface color you ship, including dark mode, imagery, and brand fills. On mixed backgrounds, a two-tone ring (dark outline plus light offset gap) keeps 3:1 everywhere.
- **Why adopt an AAA criterion:** 2.4.7 (AA) only says "visible," and 1.4.11 adds 3:1. Neither sets a size. 2.4.13 is the only criterion that defines a measurable minimum, which makes it the easiest to spec and QA.

**Limit:** A ring that passes against the component but sits on a photo can still disappear. Test the ring on real backgrounds.

### 5.3 2.5.7 Dragging Movements, AA

**Rule.** Any function that uses dragging also works with a single pointer without dragging, unless dragging is essential or the browser controls it [1][7].

**Who benefits** [7]: people who can't press, hold, and move precisely, including users of trackballs, head pointers, eye gaze, and speech-controlled mouse emulation. Keyboard support alone does not satisfy this criterion, because touchscreen users may have no keyboard [7].

**Design patterns that pass** [7]

| Dragging UI | Non-drag alternative to design |
|---|---|
| Sortable list | Select item, then reveal **Move up / Move down** buttons, or a "Move to position" menu. |
| Range slider | **Tap anywhere on the track** to move the thumb there. Add +/− steppers or a number input. |
| Map | Pan with **arrow buttons**. Zoom with +/−. |
| Kanban board | Card menu **"Move to → column"**, or select the card and then tap the target column. |
| Carousel | **Previous / Next** buttons. |
| Selection rectangle, connecting items | **Two clicks**: start point, then end point [7]. |

**Relation to 2.5.1:** 2.5.1 is about path-based and multipoint gestures, where direction matters. 2.5.7 is about grab-and-move, where the path doesn't matter. A slider that must be followed precisely along its track can fail both [7].

**Limit:** Native browser scrolling is out of scope. A custom scroll mechanism is in scope [7].

### 5.4 2.5.8 Target Size (Minimum), AA

**Rule.** Pointer targets are at least **24 by 24 CSS px**: an axis-aligned 24×24 square must fit inside the target [1][8]. Exceptions [1][8]:

| Exception | Meaning |
|---|---|
| **Spacing** | Undersized targets pass if a **24 px diameter circle** centered on each target's bounding box doesn't intersect another target or another undersized target's circle. |
| **Equivalent** | Another control on the same page does the same thing and meets the size. |
| **Inline** | Links inside a sentence or block of text, or targets whose size is set by the line height of non-target text. |
| **User agent control** | Unmodified native browser controls. |
| **Essential** | The size is essential or legally required, such as dense map pins or legally mandated replicas of paper forms. |

**Worked spacing example** [8]: six 20×20 px toolbar icons with 4 px gaps have centers 24 px apart, so their 24 px circles touch without overlapping. They pass. The same icons with 0 px gaps have centers 20 px apart, so the circles overlap. They fail.

**Spec values**

```css
.icon-button {
  min-inline-size: 24px;  /* WCAG 2.5.8 floor */
  min-block-size: 24px;
  /* House standard: 44px (WCAG 2.5.5 AAA) for primary and touch controls */
}
```

**Apply**
- **Touch UI and mobile web:** 24 px is a legal floor, not a design target. Use the platform targets for primary controls (Apple and Material values in `media-specs` → `digital-platforms.md`), and **44×44 CSS px** for AAA 2.5.5 [1].
- **Dense desktop UI (tables, toolbars):** 24 px is achievable. Where icons must be smaller, enforce the spacing rule in the component, not by eye.
- Sliders, gradient color pickers, and text-cursor areas count as one target [1].
- CSS pixels don't change with zoom, so you can't rely on users zooming to meet the size [8].

**Limit:** Passing by spacing still leaves small visual targets, which are hard for people with tremor. Spacing prevents mis-taps on neighbors. It doesn't make the target easier to hit.

### 5.5 3.2.6 Consistent Help, A

**Rule.** If any of these help mechanisms repeats across a set of pages, it appears in the same order relative to other page content: **human contact details, a human contact mechanism, a self-help option, a fully automated contact mechanism** (such as a chatbot) [1][9].

**Key details** [9]:
- It **does not require you to provide help.** It only regulates consistency where help exists.
- The test is **relative order** in the content sequence, not pixel position. W3C still recommends a consistent visual location.
- Layout changes the user triggers (zoom, orientation, viewport) are excepted, so the mobile and desktop positions may differ.

**Apply:** Put "Help" or "Contact" in one template slot (header utility nav or footer) on every page. Put the chat launcher in one corner. Don't hide help on checkout pages, where it matters most.

### 5.6 3.3.7 Redundant Entry, A

**Rule.** In the same process, information the user already entered is either **auto-populated** or **available to select**. Exceptions: re-entry is essential (memory games), required for security (passwords), or the information is no longer valid [1][10].

**Key details** [10]:
- "Process" means one activity, not a visit or a future session. It can cross domains, as with a third-party payment step.
- **Browser autofill doesn't count.** The site itself must carry the data.
- "Available to select" can be a checkbox, a dropdown of earlier entries, or text visible on the same page.
- Asking users to confirm a newly created password is allowed.

**Apply:** "Billing address same as delivery" checkbox. Pre-fill the email from step 1 in the receipt step. Keep the card number after a payment error. Keep the previous query in the search results field [10].

### 5.7 3.3.8 Accessible Authentication (Minimum), AA

**Rule.** No step of a login requires a **cognitive function test** unless the step offers an alternative method, an assisting mechanism, an object-recognition test, or a personal-content test [1]. A cognitive function test is remembering, manipulating, or transcribing information: memorized passwords or patterns, typing characters, spelling, calculating, solving puzzles. Entering your name, email, or phone number does **not** count [1].

| Passes [11] | Fails [11] |
|---|---|
| Fields that password managers and browsers can fill. | Blocking paste in authentication fields. |
| Allowing paste ("copy and paste can be relied on to avoid transcription"). | Scripts that block autofill. |
| Email magic links. | Split one-digit code boxes that accept only one digit on paste. |
| Passkeys / WebAuthn, device biometrics, hardware keys, app-approval 2FA. | Asking for "characters 1, 3, and 5" of a password. |
| OAuth / third-party login. | Math or distorted-text CAPTCHAs with no alternative. Audio CAPTCHAs that need transcription. |
| Object recognition ("select the cars"), at AA only. | Text-based personal questions, which rely on recall. |

For one-time codes, "it must be possible for a user to at least paste the code" [11].

**Apply:** Design the login with password-manager-friendly fields, a visible "Show password" toggle, passkey and magic-link options, and a single code field (`autocomplete="one-time-code"` is a common pattern [unverified in this pass; check the HTML spec]) that accepts paste. 3.3.8 doesn't cover account creation [11], but the same design helps there too.

**Limit:** 3.3.9 (AAA) removes the object-recognition and personal-content exceptions. Image CAPTCHAs still exclude many users, so avoid them even at AA [11].

---

## 6. AAA criteria worth adopting selectively

W3C doesn't recommend requiring AAA for entire sites, because some content can't meet it [1]. Several AAA criteria are cheap, high-value house standards.

| SC | Rule | When to adopt |
|---|---|---|
| 2.4.13 Focus Appearance | 2 px perimeter area, 3:1 change [1] | **Always**, as the design-system focus spec (§5.2). |
| 2.4.12 Focus Not Obscured (Enhanced) | No part of focus hidden [1] | Any product with sticky chrome. |
| 2.5.5 Target Size (Enhanced) | 44×44 CSS px, with exceptions [1] | Touch-first products, older audiences, primary actions everywhere. |
| 2.3.3 Animation from Interactions | Motion triggered by interaction can be disabled unless essential [1][15] | **Always** honor `prefers-reduced-motion`. See `motion-media-and-forms.md`. |
| 3.3.9 Accessible Authentication (Enhanced) | No object-recognition or personal-content tests [1] | Health, finance, government, and services for older users. |
| 1.4.6 Contrast (Enhanced) | 7:1 text, 4.5:1 large [1] | Long-form reading, older audiences, outdoor and kiosk use. → `color` → `contrast-and-dark-mode.md` |
| 1.4.8 Visual Presentation | User color choice, width ≤ 80 characters (40 for CJK), no justified text, line spacing ≥ 1.5, resizable to 200% without horizontal scrolling [1] | Editorial and long-form templates. These are good typography defaults anyway. |
| 2.2.6 Timeouts | Warn users how much inactivity causes data loss, unless data is kept for 20+ hours [1] | Forms and applications with sessions. |
| 2.4.10 Section Headings | Organize content with headings [1] | All long content. |
| 3.1.5 Reading Level | Supplemental content when text needs reading ability above lower secondary education level [1] | Public services, health, legal summaries. See `inclusive-and-cognitive.md`. |
| 3.2.5 Change on Request | Context changes only when the user requests them [1] | Apps with auto-refresh or auto-redirect. |
| 2.2.4 Interruptions | Users can postpone or suppress interruptions, except emergencies [1] | Notification-heavy products. |
| 1.2.6 Sign Language (Prerecorded) | Sign language for prerecorded audio [1] | Content for Deaf communities and public-service video. |

---

## 7. Contrast criteria at a glance

All math, tools, APCA notes, and palette-building are in `color` → `contrast-and-dark-mode.md`.

| SC | Level | Rule |
|---|---|---|
| 1.4.3 Contrast (Minimum) | AA | Text 4.5:1. Large text 3:1. "Large" is ≥ 18 pt (≈ 24 CSS px) regular or ≥ 14 pt (≈ 18.66 CSS px) bold [1]. |
| 1.4.6 Contrast (Enhanced) | AAA | Text 7:1. Large text 4.5:1 [1]. |
| 1.4.11 Non-text Contrast | AA | UI components, states, focus indicators, and meaningful graphics: 3:1 against adjacent colors [1][12]. |
| 2.4.13 Focus Appearance | AAA | The focus indicator changes by 3:1 between states (§5.2) [1]. |
| 1.4.1 Use of Color | A | Not a contrast rule, but it pairs with them: never use color alone [1]. |

Logos, incidental text, and inactive components are exempt from 1.4.3 and 1.4.11 [1][12].

---

## 8. By medium

| Medium | What applies |
|---|---|
| **App UI (native)** | WCAG is written for web content, but most success criteria map onto apps, and laws such as the US Title II rule and EN 301 549 apply them to apps (see `legal-and-testing.md`). Focus on 1.3.4, 1.4.4 (Dynamic Type), 2.5.x, 3.3.x, and 4.1.2. |
| **Web** | Everything here. 1.4.10, 1.4.12, and 2.4.11 are the most often broken by responsive and sticky layouts. |
| **Documents (PDF, slides)** | 1.1.1, 1.3.1 (tags, headings, reading order), 1.4.3, 2.4.2, 3.1.1. Section 508 applies WCAG 2.0 to non-web documents [see `legal-and-testing.md`]. |
| **Social posts** | WCAG applies to the platform, but the content still needs 1.1.1 (alt text fields), 1.2.2 (captions on video), 1.4.1, 1.4.5 (avoid all-text images, or repeat the text in the caption), and 2.3.1 (no strobing). |
| **Print / OOH** | WCAG doesn't apply directly. Its contrast and use-of-color logic is still good practice. For distance reading, see `media-specs` → `out-of-home.md`. |

---

## Common mistakes

- **Treating automated scan results as WCAG conformance.** Most criteria above need human judgment (see `legal-and-testing.md`).
- **Designing only the default state.** Focus, error, disabled, expanded, selected, and loading states are where most A/AA failures live (2.4.7, 3.3.1, 4.1.2).
- **Placeholder text as the only label** (fails 3.3.2, and usually 1.4.3 as well).
- **`outline: none`** in a reset stylesheet with no replacement focus style (F78) [13].
- **Assuming 24 px is the touch target to design to.** It is the AA floor. Primary touch controls should be about 44 px or larger.
- **Sticky headers, chat launchers, and cookie bars** covering focused content (2.4.11).
- **Drag-only reordering** in dashboards and boards (2.5.7).
- **Blocking paste** in password or OTP fields "for security" (3.3.8).
- **Citing WCAG 3 or APCA as a compliance target.** WCAG 3 is a Working Draft [4]. Laws reference WCAG 2.x.
- **Still testing 4.1.1 Parsing as a 2.2 failure.** It was removed. Test it only if a contract specifies 2.0 or 2.1 [1].

---

## Sources

[1] W3C. (2024). *Web Content Accessibility Guidelines (WCAG) 2.2*. W3C Recommendation, 12 December 2024 edition (first published 5 October 2023). https://www.w3.org/TR/WCAG22/
[2] W3C WAI. (2023). *What's New in WCAG 2.2*. https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/
[3] W3C WAI. (2025, October 21). *WCAG 2.2 Approved as an ISO Standard*. https://www.w3.org/WAI/news/2025-10-21/wcag22-iso
[4] W3C WAI. (2026). *WCAG 3 Introduction* (updated 25 September 2026). https://www.w3.org/WAI/standards-guidelines/wcag/wcag3-intro/
[5] W3C WAI. (2023). *Understanding SC 2.4.11 Focus Not Obscured (Minimum)*. https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html
[6] W3C WAI. (2023). *Understanding SC 2.4.13 Focus Appearance*. https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html
[7] W3C WAI. (2023). *Understanding SC 2.5.7 Dragging Movements*. https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements.html
[8] W3C WAI. (2023). *Understanding SC 2.5.8 Target Size (Minimum)*. https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html
[9] W3C WAI. (2023). *Understanding SC 3.2.6 Consistent Help*. https://www.w3.org/WAI/WCAG22/Understanding/consistent-help.html
[10] W3C WAI. (2023). *Understanding SC 3.3.7 Redundant Entry*. https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry.html
[11] W3C WAI. (2023). *Understanding SC 3.3.8 Accessible Authentication (Minimum)*. https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum.html
[12] W3C WAI. (2023). *Understanding SC 1.4.11 Non-text Contrast*. https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html
[13] W3C WAI. (2023). *Understanding SC 2.4.7 Focus Visible*. https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html
[14] W3C WAI. (2023). *Understanding SC 1.4.10 Reflow*. https://www.w3.org/WAI/WCAG22/Understanding/reflow.html
[15] W3C WAI. (2023). *Understanding SC 2.3.3 Animation from Interactions*. https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html
[16] W3C WAI. (2023). *Understanding SC 2.2.2 Pause, Stop, Hide*. https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html
[17] MDN Web Docs. (n.d.). *:focus-visible*. Mozilla. https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible (accessed 2026-10)
[18] W3C WAI. (2023). *Understanding SC 1.3.5 Identify Input Purpose*. https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html
