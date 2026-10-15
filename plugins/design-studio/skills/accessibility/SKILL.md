---
name: accessibility
description: Use whenever a task involves designing or reviewing anything people read or interact with (UI, web, documents, video, social posts, forms), writing alt text or annotations, or any accessibility or compliance question, even when accessibility is not mentioned: legal dates changed in 2026 and are verified here. Contains: WCAG 2.2 A/AA with what the designer must decide per criterion, the 9 new 2.2 criteria, AAA worth adopting, inclusive design, cognitive accessibility (COGA), plain language, motion and flashing, captions and audio description, the alt-text decision tree, focus and keyboard specs, forms and errors, screen-reader annotation, laws (EU EAA and EN 301 549, ADA Title II 2027/2028, Section 508, UK, Canada, Brazil, Japan), tool coverage, and test checklists.
user-invocable: false
---

# Accessibility

Accessibility means people with disabilities can perceive, operate, and understand the work. That includes
permanent, temporary, and situational disabilities. Most failures start as a design decision nobody made: no
focus style drawn, no error state, no alt text, no heading levels. This skill turns those decisions into a
checklist.

Contrast math, APCA, and color-vision deficiency live in `color` → `contrast-and-dark-mode.md`. Platform
touch-target sizes live in `media-specs` → `digital-platforms.md`. Older adults, literacy, dyslexia, and culture
live in `cognitive-psychology` → `audience-and-culture.md`. Type minimums live in `typography` →
`legibility-by-medium.md`.

## Non-negotiable rules

1. **Target WCAG 2.2 AA** unless a contract or law names another version. It also satisfies 2.1 AA and 2.0 AA,
   except for 4.1.1 Parsing, which 2.2 removed. All WCAG requirements are [E2].
2. **Design every state.** Default, hover, focus, active, selected, disabled, error, loading, and empty, in both
   color modes. An undrawn state is an accessibility bug.
3. **Visible focus everywhere.** House standard: 2px solid outline, 2px offset, 3:1 against adjacent colors
   (meets AAA 2.4.13). Never use `outline: none` without a replacement. Sticky headers must not hide the focused
   item (2.4.11).
4. **Targets ≥ 24×24 CSS px** (2.5.8 AA), or spaced to act like it. Platform minimums are larger (44pt iOS,
   48dp Android), so use those on touch UIs.
5. **Never strobe, and respect reduced motion.** At most 3 flashes per second. Pause controls for any motion
   longer than 5s. Honor `prefers-reduced-motion` as a house rule (2.3.3).
6. **Everything by keyboard; nothing only by dragging, hovering, or memory.** Single-tap alternatives to
   dragging (2.5.7). No puzzles or transcription in login (3.3.8). Don't ask people to re-type data (3.3.7).
7. **Forms:** visible labels (placeholders are not labels), instructions before the field, errors in text that
   say how to fix them, and validation that waits until the user has left the field. Use `autocomplete` tokens
   for personal data (1.3.5).
8. **Text alternatives by purpose.** Follow the W3C alt decision tree: decorative images get `alt=""`,
   functional images describe the action, complex images get a long description. No images of text.
9. **Fix universal barriers before tailoring.** Plain language, predictable layout, forgiving forms, and user
   control help cognitive, older, low-literacy, second-language, and stressed users at once [E2].
10. **Automated tools are not a verdict.** Single tools caught 17–41% of barrier types in the 2017 UK
    government audit. Test manually and with disabled people.
11. **Legal notes are orientation, not legal advice.** Verify dates before quoting them. Several changed in 2026.

## Designer's spec checklist (hand-off)

- [ ] Heading levels, landmarks, and reading/focus order annotated (annotation kits: `motion-media-and-forms.md` §7).
- [ ] Every interactive element: name, role, all states, focus style, target size.
- [ ] Every image: alt text or marked decorative. Charts have a text or table equivalent.
- [ ] Every form: labels, help text, error messages written, required fields marked, `autocomplete` noted.
- [ ] Contrast checked for text, UI boundaries, focus, and icons in both modes (`color`).
- [ ] Motion: reduced-motion variant specified. No flashing. Pause control for long motion.
- [ ] Video: captions, plus audio description or a transcript.
- [ ] Layout reflows at 320 CSS px. Text survives 200% zoom and the 1.4.12 spacing overrides (`layout-composition`).
- [ ] Help and contact in a consistent place (3.2.6). Login without memory tests (3.3.8).
- [ ] Plain-language pass on all copy (`inclusive-and-cognitive.md` §5).

## Legal snapshot (verified 2026-10, re-verify before quoting)

| Where | Rule | Standard | Dates |
|---|---|---|---|
| EU | European Accessibility Act | EN 301 549: V3.2.1 cited now; V4.1.1 (WCAG 2.2 AA) published Sept 2026, Official Journal citation pending | Applies from 28 June 2025 |
| US state/local govt | ADA Title II rule (2024) | WCAG 2.1 AA | Extended April 2026: 26 Apr 2027 (≥50k population), 26 Apr 2028 (smaller, special districts) |
| US businesses | ADA Title III | Case law, usually WCAG 2.x AA | Litigation-driven |
| US federal | Section 508 | WCAG 2.0 AA (web, documents, software) | Since 2018 |
| UK public sector | PSBAR 2018 | WCAG 2.2 AA + accessibility statement | In force |
| Canada federal | Accessible Canada Act | CAN/ASC-EN 301 549:2024 | Goal 2040 |
| Brazil | LBI art. 63 | ABNT NBR 17225 (2025); eMAG 3.1 (federal) | In force |
| Japan | Disability Discrimination Act | JIS X 8341-3:2016 | Private-sector accommodation mandatory since Apr 2024 |

WCAG 2.2 is also ISO/IEC 40500:2025. WCAG 3 is still a Working Draft and is years away.

## By medium

| Medium | Focus |
|---|---|
| Native apps | 1.3.4 orientation, 1.4.4 Dynamic Type / font scaling, 2.5.x pointer and targets, 3.3.x input, 4.1.2 name/role/value |
| Web | Everything. 1.4.10 reflow, 1.4.12 spacing, and 2.4.11 focus-not-obscured break most often. |
| PDF, slides | Tags, headings, reading order, contrast, page titles, language |
| Social posts | Alt-text fields, captions on video, no color-only meaning, text repeated in the caption, no strobing |
| Print, OOH | WCAG doesn't apply directly, but its contrast and color logic is good practice. Distance rules are in `media-specs`. |

## Reference files — when to open

| File | Open when |
|---|---|
| `references/wcag-22-in-practice.md` | Checking any success criterion; writing a spec; the 2.2 additions in detail; AAA criteria worth adopting; per-medium applicability. |
| `references/inclusive-and-cognitive.md` | Inclusive design method, persona spectrum, prevalence numbers to cite, situational impairments, cognitive accessibility (COGA), plain language, neurodivergent users, localization/RTL basics, inclusion review checklist. |
| `references/motion-media-and-forms.md` | Motion and flashing, reduced motion code, captions/audio description/transcripts, alt text and complex images, focus and keyboard specs, skip links, forms and errors, `autocomplete`, touch/pointer, screen-reader annotation and kits. |
| `references/legal-and-testing.md` | Legal questions by jurisdiction, which standard to design to, tool coverage, WebAIM Million 2026, manual test checklist, testing with disabled users, Figma handoff checklist, accessibility statements, VPAT/ACR. |
