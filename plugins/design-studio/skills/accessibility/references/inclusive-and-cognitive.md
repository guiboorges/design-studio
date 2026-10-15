# Inclusive and Cognitive Design

> **Scope:** How to design for the full range of people: the inclusive design method (persona spectrum), disability prevalence, situational and temporary impairments, cognitive and learning disabilities (W3C COGA patterns), plain language, neurodivergent and older users, low literacy, and accessibility in localization. It ends with a design-review checklist.
> **Last verified:** 2026-10 (oldest volatile sources: WHO disability fact sheet, 7 March 2023; ISO 24495-1, June 2023; GOV.UK literacy figures as published 2026-10)
> **Used by:** accessibility-specialist, ui-designer, ux-writer, ux-researcher, design-critic, creative-director, editorial-designer, social-media-designer, design-system-architect

---

## How to use this file

This file covers the *method* and the *cognitive* side of accessibility. It deliberately doesn't repeat material that lives elsewhere:

| Topic | Where it lives |
|---|---|
| Working memory, cognitive load theory, recognition over recall, progressive disclosure, readability and load | `cognitive-psychology` → `cognitive-load-and-mental-models.md` |
| Culture, RTL mirroring tables, text expansion, older adults (NN/g data), children, UK Home Office "Dos and don'ts" posters, dyslexia fonts, literacy statistics and reading-grade targets | `cognitive-psychology` → `audience-and-culture.md` |
| Success-criterion details (3.3.7, 3.3.8, 3.2.6, and others) | `wcag-22-in-practice.md` |
| Motion, media, forms, focus | `motion-media-and-forms.md` |

### Decision rules (read first)

1. **Design for the edges, and the middle benefits.** Start from a specific excluded person or situation, then check how far the solution extends [2]. **[E2]**
2. **Treat disability as a mismatch between a person and a design, not a property of the person.** Microsoft: "Exclusion happens when we solve problems using our own biases" [2]. **[E2]**
3. **Fix universal barriers before you tailor anything.** Plain language, predictable layout, forgiving forms, no memory tests, and user control over motion help cognitive, older, low-literacy, second-language, and stressed users all at once [4][5][6]. **[E2]**
4. **Prefer user control over one fixed compromise** when needs conflict, as with high contrast for low vision vs. sensory sensitivity for some autistic users (see `audience-and-culture.md` §6).
5. **Test with disabled people.** Checklists find barriers. Only users show you whether the design works (see `legal-and-testing.md`).

---

## 1. The inclusive design method

### 1.1 Microsoft's three principles

| Principle | Microsoft's wording [2] | What the designer does |
|---|---|---|
| Recognize exclusion | "Exclusion happens when we solve problems using our own biases." | List who can't complete the core task: by ability, by situation, by device, by language. Treat each as a design input, not an edge case. |
| Learn from diversity | People's "fresh, diverse perspectives are the key to true insight." | Recruit people with lived experience into research and co-design, not only into final testing. |
| Solve for one, extend to many | "Creating products for people with permanent disabilities creates results that benefit everyone." | Design for the hardest constraint first, then check who else it helps. |

### 1.2 The persona spectrum (permanent, temporary, situational)

Microsoft's *Inclusive 101* guidebook describes a spectrum of **permanent, temporary, and situational** scenarios. It uses it to "foster empathy and to show how a solution scales to a broader audience" [3]. Its example: a device designed for a person with one arm also helps "a person with a temporary wrist injury or a new parent holding an infant" [3]. It sizes this for the US: about **26,000 people a year lose an upper extremity**, but counting temporary and situational cases, "the number is greater than 20M" [3]. **[E2]** (illustrative estimate from a practitioner guide, not a prevalence study)

**Build your own spectrum for each key interaction:**

| Ability | Permanent | Temporary | Situational | Design response |
|---|---|---|---|---|
| Touch / reach | One arm, limited dexterity, tremor | Broken wrist, arm in a sling | Holding a child, coffee, or bag; standing on a bus | One-handed operation, thumb-reachable primary actions, large targets (2.5.8), no drag-only (2.5.7), no gesture-only (2.5.1) |
| See | Blind, low vision | Dilated pupils, lost glasses, eye surgery | Bright sunlight, glare, small or cracked screen | Screen-reader structure (1.3.1), resizable text (1.4.4), high contrast (1.4.3), no color-only cues (1.4.1) |
| Hear | Deaf, hard of hearing | Ear infection | Noisy street, quiet library, muted autoplay | Captions (1.2.2), transcripts, visual alerts, no audio-only cues |
| Speak | Non-speaking, speech disability | Laryngitis | Heavy accent with a voice assistant, noisy room | Never voice-only input. Offer text and touch alternatives |
| Cognition / attention | Intellectual disability, dementia, ADHD, brain injury | Concussion, medication, grief, sleep loss | Stress, interruption, multitasking, a second language | Plain language, short steps, no memory tests (3.3.8), saved progress, no time pressure (2.2.1) |

The situational column draws on W3C's examples: contrast helps people using a phone "in bright sunlight or in a dark room," and "captions benefit people in noisy and in quiet environments" [7]. **[E2]** The other rows are this file's synthesis.

**Apply**
- **UI/app:** Run a "one hand, bright sun, no sound" walkthrough of every core flow before handoff.
- **Web:** Add a spectrum row to each persona in the research plan.
- **Social / video:** Assume sound is off (situational deafness). Captions and on-screen text carry the message.
- **OOH / print:** The situational case is the default: glare, distance, motion, a glance of a few seconds. See `media-specs` → `out-of-home.md`.

**Limit**
- The persona spectrum builds empathy. It doesn't replace research with disabled people. Simulating a disability (blindfolds, earplugs) isn't equivalent to lived experience and can create false confidence.
- "Solve for one, extend to many" doesn't mean every accessibility fix benefits everyone equally. Some accommodations, such as screen-reader-only text, exist for a specific group, and that is enough justification.

### 1.3 Accessibility, usability, inclusion: use the right word

W3C distinguishes three terms [7]:
- **Accessibility** "addresses discriminatory aspects related to equivalent user experience for people with disabilities."
- **Usability** "is about designing products to be effective, efficient, and satisfying."
- **Inclusion** "is about diversity, and ensuring involvement of everyone to the greatest extent possible." Some regions call it universal design or design for all.

**Apply:** In briefs and reviews, keep accessibility requirements (testable, often legal) separate from inclusion goals (broader, research-driven). Don't let "we're inclusive" stand in for WCAG conformance, or the reverse.

---

## 2. Prevalence: the numbers to cite

| Fact | Value | Source |
|---|---|---|
| People with significant disability worldwide | **About 1.3 billion, 16% of the world's population, or 1 in 6 people** | WHO fact sheet, 7 March 2023 [1] |
| Health gap | Some people with disabilities die up to 20 years earlier than people without disabilities | [1] |
| US upper-extremity loss vs. the broader spectrum | About 26,000 per year, vs. more than 20 million including temporary and situational cases | Microsoft *Inclusive 101* [3] |
| US adults with a balance or dizziness problem | About 15%, roughly 33 million (2008 survey) | NIDCD [8] (relevant to motion design; see `motion-media-and-forms.md`) |
| Older users | W3C lists age-related declines in vision, dexterity, hearing, and cognition, and says WAI standards "address most older user needs" | [6] |
| Adult literacy, UK | 1 in 6 adults in England have very poor literacy skills, 1 in 4 in Scotland face literacy challenges, 1 in 8 in Wales lack basic literacy, 1 in 5 in Northern Ireland have very poor literacy (definitions vary by nation) | GOV.UK [12] |
| Adult literacy, US | See `audience-and-culture.md` §7 (PIAAC 2023) | — |

**Apply:** Use the WHO figure in business cases ("1 in 6 people"). Add the situational multiplier ("and everyone, sometimes") when arguing for design budget.

**Limit:** Don't inflate prevalence by adding categories that overlap. Don't present the 1.3 billion figure as "potential customers lost." The WHO number measures significant disability, not lost sales.

---

## 3. Situational and temporary impairments: design responses

| Situation | What breaks | Design response | Related SC |
|---|---|---|---|
| **Glare / bright sun** | Low-contrast text, thin strokes, light-gray UI, subtle borders | AA contrast as the floor, AAA 7:1 for outdoor and kiosk use. Weight ≥ 400 for body text. 3:1 component borders | 1.4.3, 1.4.6, 1.4.11 |
| **One hand / on the move** | Top-corner actions, small targets, drag and pinch gestures | Primary actions in the thumb zone, 44 px targets, button alternatives to gestures, undo instead of precision | 2.5.1, 2.5.7, 2.5.8, 2.5.2 |
| **Noise / no sound** | Audio-only instructions, unmuted autoplay, voice-only input | Captions on by default in social video, visual and haptic alerts, text input everywhere | 1.2.2, 1.4.2 |
| **Quiet place (library, night)** | Audio autoplay, voice-required flows | No autoplay with sound. Text alternative to voice | 1.4.2 |
| **Interruption / multitasking** | Long single-page forms, session timeouts, memory across steps | Save progress, timeout warnings, step summaries, redundant-entry carry-over | 2.2.1, 3.3.7 |
| **Stress / time pressure** (bills, health, travel) | Jargon, ambiguous consequences, hidden help | Plain language, consequences stated before commitment, consistent help | 3.3.4, 3.2.6 |
| **Second language** | Idioms, metaphors, complex syntax | Literal language, short sentences, `lang` markup so translation tools work | 3.1.1, 3.1.2 |
| **Slow network / old device** | Heavy media, JS-only forms | See `audience-and-culture.md` §8 | — |

---

## 4. Cognitive and learning disabilities

### 4.1 Who and what

W3C's *Diverse Abilities and Barriers* page (updated 25 June 2024) covers [5]:
- **Attention:** ADHD, "difficulty focusing on a single task, focusing for longer periods, or being easily distracted."
- **Autism:** "impairments of social communication and interaction abilities, and sometimes restricted habits and interests."
- **Intellectual disability:** "learning more slowly, or difficulty understanding complex concepts."
- **Learning disabilities:** dyslexia (literacy and language skills) and dyscalculia (number-based information).
- **Memory impairments:** age-related forgetfulness, dementia, brain injury, mild cognitive impairment.
- **Mental health disabilities:** depression, anxiety, PTSD.

**Barriers W3C lists** [5]: complex multi-step processes, inconsistent navigation, hard sentences and unfamiliar words, figurative language, long text with no illustrations, moving and blinking content, background audio that can't be turned off, memory-based passwords, time limits, and designs that can't be adjusted with browser controls or user style sheets.

**What helps** [5]: clear structure with headings and short blocks supported by images, consistent labels, several ways to navigate, options to stop moving content, error-tolerant design, and support for spell checkers, password managers, text-to-speech, and adjustable text, spacing, and colors. **[E2]**

### 4.2 W3C COGA: "Making Content Usable for People with Cognitive and Learning Disabilities"

A W3C Working Group Note published **29 April 2021** by the COGA Task Force. It is supplemental guidance, **not required for WCAG conformance**, and W3C doesn't expect it to become a Recommendation [4]. **[E2]** It is organized into 8 objectives, each with design patterns. The table maps each objective to concrete designer decisions.

| # | COGA objective [4] | Patterns (selected) [4] | Designer decisions |
|---|---|---|---|
| 1 | Help users understand what things are and how to use them | Make the purpose of your page clear. Use a familiar hierarchy and design. Use a consistent visual design. Clearly identify controls. Make the relationship between controls and the content they affect clear. Use icons that help the user. | Conventional layout patterns, buttons that look like buttons, icon plus text label, one consistent component library. |
| 2 | Help users find what they need | Make the most important tasks easy to find. Make the hierarchy easy to understand. Break media into chunks. Provide search. | Top tasks on the home page, shallow IA, breadcrumbs, typo-tolerant search, chaptered video. |
| 3 | Use clear and understandable content | Use clear words. Use a simple tense and voice. Avoid double negatives and nested clauses. Use literal language. Keep text succinct. Separate each instruction. Use white spacing. Explain implied content. Provide alternatives for numerical concepts. | See §5. One instruction per line or step. Generous spacing. "3 out of 10 people", not only "30%". |
| 4 | Help users avoid mistakes and know how to correct them | Make sure controls and content don't move unexpectedly. Let users go back. Show fees and charges at the start. Design forms to prevent mistakes. Make it easy to undo. Use clear visible labels. Accept different input formats. Avoid data loss and timeouts. Provide feedback. Use familiar metrics and units. | No layout shift, visible Back, all-in prices up front, flexible formats (phone with or without spaces), undo, autosave. See `motion-media-and-forms.md` §5. |
| 5 | Help users focus | Limit interruptions. Make critical paths short. Avoid too much content. Provide the information a user needs to prepare for a task. | No pop-ups mid-task, no autoplay, a "what you'll need" list before long forms, one primary action per screen. |
| 6 | Ensure processes don't rely on memory | Provide a login that doesn't rely on memory or other cognitive skills. Allow a simple, single-step login. Let users avoid navigating voice menus. Don't rely on users' calculations or memory. | Passkeys, magic links, paste-able codes (3.3.8). Show totals instead of making people compute them. Carry data forward (3.3.7). |
| 7 | Provide help and support | Provide human help. Provide alternative content for complex information. Clearly state results and disadvantages of choices. Provide help for forms and non-standard controls. Make help easy to find. Provide reminders. | Persistent help link in the same place (3.2.6), "What happens next" text, inline field help, reminder emails for appointments. |
| 8 | Support adaptation and personalization | Let users control when content moves or changes. Enable APIs and extensions. Support simplification. Support a personalized, familiar interface. | Honor `prefers-reduced-motion`, don't block browser extensions, offer a "simple view" or summary mode, keep settings persistent. |

COGA also stresses **not breaking add-ons**, because many people use browser extensions as assistive technology, and testing every pattern with real users [4].

**Apply**
- **UI/app:** Use objectives 4–6 as a form and flow review rubric. They catch the costliest cognitive barriers.
- **Web/content:** Use objective 3 as an editorial standard (see §5).
- **Social:** One idea per post, literal captions, numbers shown as frequencies or visuals.
- **Print / editorial:** Chunking, white space, summaries at the top of long documents (objective 3, "Provide summary of long documents and media").

**Limit:** COGA is guidance, not a legal requirement [4]. Some patterns trade off against density for experts, so offer progressive disclosure rather than removing capability. See `cognitive-load-and-mental-models.md` §4.

### 4.3 Where cognitive needs are already in WCAG 2.2 A/AA

Use these as the enforceable core of cognitive accessibility. Details are in `wcag-22-in-practice.md`.

| Need | SC |
|---|---|
| Not having to remember or transcribe to log in | 3.3.8 |
| Not re-entering data | 3.3.7 |
| Finding help in a predictable place | 3.2.6 |
| Predictable behavior | 3.2.1, 3.2.2, 3.2.3, 3.2.4 |
| Clear labels, errors, and suggestions | 2.4.6, 3.3.1, 3.3.2, 3.3.3 |
| Preventing costly mistakes | 3.3.4 |
| Enough time | 2.2.1 |
| Stopping distracting motion | 2.2.2 |
| Autofill of personal data | 1.3.5 |

Reading level (3.1.5), unusual words (3.1.3), abbreviations (3.1.4), and help (3.3.5) are **AAA** [9]. Adopt them for public-service, health, and finance content.

---

## 5. Plain language

### 5.1 Standards and authorities

| Source | What it says | Status |
|---|---|---|
| **ISO 24495-1:2023**, *Plain language — Part 1: Governing principles and guidelines* | Sets governing principles and guidelines for plain-language documents. It applies to most written languages (examples in English) and to printed or digital text, not podcasts or video. For digital accessibility it points to WCAG and EN 301 549 [10]. | Published 2023-06-20, edition 1 [10]. Principle 1 is "relevant" (readers get what they need) and principle 2 is "findable." Principles 3 and 4 ("understandable," "usable") are as commonly reported [unverified in this pass]. |
| **US Plain Writing Act of 2010** | Requires US federal agencies to write public content their audience can understand. The former PlainLanguage.gov guidance now lives on digital.gov, "adapted from PlainLanguage.gov" [11]. | In force (verified 2026-10) [11]. |
| **GOV.UK writing guidelines** | Split sentences over **25 words**. Paragraphs of **no more than 5 sentences**. Use short words ("buy," not "purchase"). Active voice. Specialist terms only where needed [12]. | Live guidance (verified 2026-10) [12]. |
| **WCAG 3.1.5 Reading Level (AAA)** | If text needs reading ability above **lower secondary education** (roughly 7–9 years of school), provide supplemental content or a simpler version [9]. | WCAG 2.2 [9]. |

GOV.UK also reports that people with *higher* literacy prefer plain English, because it's faster. In research on legal language, **80% of people preferred sentences written in clear English**, and the more complex the issue, the stronger the preference [12]. **[E2]** (cited by GOV.UK without the underlying study details)

### 5.2 Procedure: plain-language pass

1. **Name the reader and the task.** What do they need to *do* after reading? Cut what doesn't serve that (ISO principle 1, "relevant") [10].
2. **Put the answer first.** Lead with the action or outcome, then the reasons.
3. **Structure for finding** (ISO principle 2, "findable") [10]: descriptive headings, short sections, lists for steps and options, one topic per section.
4. **Sentences:** one idea each. Split anything over 25 words [12]. Use active voice and "you" [11][12].
5. **Words:** common words. Define unavoidable terms on first use. Expand abbreviations. No idioms or metaphors (COGA "Use literal language") [4].
6. **Numbers:** use digits, give frequencies ("1 in 4") alongside percentages, and calculate totals for the reader (COGA objective 3 and 6) [4].
7. **Instructions:** one step per line, numbered, with the expected result after each.
8. **Check:** a readability formula as a rough signal only, then test with representative readers. NN/g grade targets and the limits of Flesch-Kincaid are in `audience-and-culture.md` §7 and `cognitive-load-and-mental-models.md` §10.

| Before | After |
|---|---|
| "Applications not submitted prior to the deadline will not be processed." | "Send your application by 30 June. We can't accept late applications." |
| "Your session has timed out due to inactivity." | "You were signed out because nothing happened for 20 minutes. Your answers are saved. Sign in to continue." |
| "Invalid input." | "Enter your phone number with 10 digits, for example 0612345678." |

**Apply**
- **UI copy:** Labels name the thing ("Email address"), buttons name the action and object ("Pay €42.00"), errors say what happened and how to fix it.
- **Editorial:** Summary box at the top, short paragraphs, descriptive subheads every 3–5 paragraphs.
- **Social and OOH:** One message, short words, a single call to action.

**Limit**
- Plain language isn't dumbing down. Keep precise terms experts need, and define them. GOV.UK says to use specialist language when the audience needs it [12].
- Readability scores measure word and sentence length, not comprehension. A short sentence full of jargon still scores well.

---

## 6. Neurodivergent users (evidence-graded)

The research base for interface design specific to ADHD and autism is thin. Most guidance is practitioner consensus or lived-experience reports. Grade it honestly.

| Group | Design levers | Evidence |
|---|---|---|
| **ADHD / attention** | Fewer simultaneous demands, no autoplay or moving content, one primary action per screen, visible progress and remaining steps, saved progress, reminders, focus or reading modes | **[E2]** W3C barrier list and COGA "Help users focus" [4][5]. Little ADHD-specific UI research; see `audience-and-culture.md` §6.2. |
| **Autism** | Predictable, consistent layouts. Literal language with no idioms. Descriptive button labels. Calm, user-adjustable color and motion. Advance notice of what happens next. No surprise sounds | **[E2]** W3C [5] and UK Home Office posters (in `audience-and-culture.md` §6.1). Sensory preferences vary widely, so prefer settings over one fixed palette. **[E3]** for any claim that a specific color is "autism-friendly." |
| **Dyslexia** | Left-aligned text, short lines, no long italics, underlines, or all-caps blocks, text-to-speech compatibility, spelling-tolerant search and inputs | **[E2]** for layout guidance [5]. **[E1]** that special "dyslexia fonts" don't improve reading: see `audience-and-culture.md` §6.3. |
| **Dyscalculia** | Do calculations for users, show totals, use visual quantities, avoid number-only codes | **[E2]** COGA "Provide alternatives for numerical concepts" and "Don't rely on users' calculations" [4]. |
| **Anxiety / mental health** | State consequences and next steps, generous time, easy-to-reach human help, review before submit, no manipulative urgency | **[E2]** W3C [5]. Home Office anxiety poster. See `cognitive-psychology` → `dark-patterns-and-ethics.md` on false urgency. |

**Apply:** A **user-preference panel** (reduce motion, simplify layout, increase spacing, turn off sounds) serves several groups at once and respects conflicting needs. Pair it with honoring OS settings (`prefers-reduced-motion`, `prefers-contrast`, and similar) so users don't have to configure each site.

**Limit**
- Don't build a separate "neurodivergent mode" that hides features or patronizes users. Fix the default, then add options.
- Avoid labeling users or asking them to disclose a diagnosis to get a usable interface.

---

## 7. Older adults (summary; details elsewhere)

W3C's older-users page (updated 20 November 2025) lists age-related changes [6]:

| Change | Design implication | SC |
|---|---|---|
| Reduced contrast sensitivity, color perception, near focus | Larger body text, high contrast, no color-only cues | 1.4.3, 1.4.4, 1.4.1 |
| Reduced dexterity and fine motor control | Large targets, no drag, no double-tap-only actions | 2.5.8, 2.5.5, 2.5.7 |
| Difficulty with high-pitched sounds and separating sounds | Captions and transcripts, no background music under speech | 1.2.2, 1.4.7 (AAA) |
| Reduced short-term memory, difficulty concentrating, distractibility | Short flows, no memory tests, consistent navigation, no moving content | 3.3.7, 3.3.8, 3.2.3, 2.2.2 |

W3C says existing WAI standards "address most older user needs" [6]. NN/g task-success data, the 0.8%-per-year decline in web-use ability, and the warning against "senior modes" are in `audience-and-culture.md` §4.1.

---

## 8. Low literacy (summary; details elsewhere)

Lower-literacy readers read word by word and miss content outside the main column. Rewriting for them improves everyone's success rates. Grade-level targets come from NN/g. All of this is in `audience-and-culture.md` §7. Add to it:

- **Pair text with recognizable icons and images**, but never use an icon alone (1.1.1, and COGA "Use icons that help the user") [4].
- **Support text-to-speech and read-aloud tools**: real text, not images of text (1.4.5), and a correct `lang` (3.1.1) so the voice pronounces words properly [9].
- **Make search typo-tolerant**, and accept different input formats [4].

---

## 9. Localization, RTL, and accessibility basics

Culture-level guidance (mirroring tables, text expansion, formats) is in `audience-and-culture.md` §2–3. The accessibility-specific rules:

| Rule | Why | How |
|---|---|---|
| **Declare the page language** | Screen readers pick voice and pronunciation from it. Translation tools rely on it | `<html lang="pt-BR">` (3.1.1) [9] |
| **Mark language changes** | Foreign phrases and language-picker items are otherwise mispronounced | `<span lang="ja">日本語</span>` (3.1.2) [9] |
| **Set direction in markup, not only CSS** | Assistive tech and bidi algorithms need it | `<html lang="ar" dir="rtl">`. Use `dir="auto"` for user-generated text |
| **Use logical CSS properties** | The layout mirrors automatically with direction and writing mode [13] | See the snippet below |
| **Write alt text, captions, and labels per locale** | Untranslated alt text is a 1.1.1 failure in practice | Put alt text and aria-labels in the translation pipeline, not hard-coded |
| **Leave room for expansion** | Resized text (1.4.4) plus longer translations compound | No fixed-width buttons. Test at 200% in the longest language |
| **Localize formats in error messages** | "Enter a date like 06/30/2026" is wrong outside the US | Show the locale's format example in the hint |
| **Don't put meaning in culture-bound icons or colors alone** | Color and icon meanings vary (see `cognitive-psychology` → `color-psychology.md`) | Icon plus text (1.4.1) |

```css
/* Logical properties: correct in LTR and RTL without overrides [13] */
.card       { padding-inline: 1rem; padding-block: 0.75rem; margin-inline-start: 1rem; }
.card__icon { margin-inline-end: 0.5rem; }
.badge      { position: absolute; inset-inline-end: 0; }
p           { text-align: start; }
```

**Limit:** Mirroring isn't translation. RTL screen-reader users also need correct reading order (1.3.2), so test with an actual RTL screen-reader setup, not just a flipped layout.

---

## 10. Design-review checklist for inclusion

Run it at the wireframe stage and again before handoff. Each item maps to a section above or a WCAG SC.

**Method**
- [ ] Core flows walked with the persona spectrum: one hand, bright sun, no sound, interrupted, second language (§1.2, §3).
- [ ] People with disabilities involved in research or testing for this release (`legal-and-testing.md`).

**Cognition and content**
- [ ] Every page states its purpose in the first heading and first sentence (COGA 1).
- [ ] Copy passes the plain-language procedure: sentences ≤ 25 words, active voice, no idioms, terms defined (§5.2).
- [ ] Numbers come with frequencies or visuals. Totals are calculated for the user (COGA 3, 6).
- [ ] One primary action per screen. No interruptions mid-task (COGA 5).
- [ ] Long processes show steps, progress, what you'll need, and save progress (COGA 4, 5. SC 2.2.1).
- [ ] No data re-entry within a process (3.3.7).
- [ ] Login works with a password manager, paste, passkey, or magic link (3.3.8).
- [ ] Help sits in the same place on every page (3.2.6).
- [ ] Fees, consequences, and next steps are stated before commitment (COGA 4, 7. SC 3.3.4).

**Sensory and motor**
- [ ] No autoplay audio. Motion can be paused and honors reduced motion (1.4.2, 2.2.2, 2.3.3).
- [ ] Targets ≥ 24 px at minimum, 44 px for primary touch controls (2.5.8, 2.5.5).
- [ ] Every gesture or drag has a button alternative (2.5.1, 2.5.7).
- [ ] Information never relies on color, sound, or position alone (1.4.1, 1.3.3).

**Adaptation and localization**
- [ ] Layout survives 200% text, 320 px width, and increased text spacing (1.4.4, 1.4.10, 1.4.12).
- [ ] `lang` and `dir` are specified per locale and per foreign-language passage (3.1.1, 3.1.2).
- [ ] Alt text, captions, and labels are in the translation pipeline.
- [ ] OS preferences are honored: reduced motion, contrast, dark mode, text size.

---

## Common mistakes and myths

- **Myth: "Accessibility is for a small minority."** Corrected reading: about 16% of people worldwide have a significant disability [1], and situational limits affect everyone [3][7].
- **Myth: "Cognitive accessibility isn't in WCAG."** Corrected reading: several A/AA criteria target it directly (3.3.7, 3.3.8, 3.2.6, 3.3.1–3.3.4, 2.2.1, 2.2.2) (§4.3). COGA adds non-normative guidance [4].
- **Myth: "Plain language is for people with low education."** Corrected reading: higher-literacy readers prefer it too, because it's faster [12].
- **Myth: "Dyslexia fonts fix readability."** Corrected reading: controlled studies show no benefit. Fix layout and language instead (see `audience-and-culture.md` §6.3). **[E1]**
- **Mistake:** Disability simulations used as a substitute for research with disabled people.
- **Mistake:** A separate "accessible version" or "senior mode" instead of fixing the main experience.
- **Mistake:** Treating the persona spectrum's situational column as proof that a fix "helps everyone," then dropping fixes that serve only permanent disabilities.
- **Mistake:** Mirroring an RTL layout but leaving alt text, `lang`, and reading order untranslated.
- **Mistake:** Choosing one "calm" palette for autistic users. Sensory needs vary, so provide settings.

---

## Sources

[1] World Health Organization. (2023, March 7). *Disability* (fact sheet). https://www.who.int/news-room/fact-sheets/detail/disability-and-health
[2] Microsoft. (n.d.). *Microsoft Inclusive Design*. https://inclusive.microsoft.design/ (accessed 2026-10)
[3] Microsoft. (n.d.). *Inclusive 101 guidebook*. Microsoft Inclusive Design. https://inclusive.microsoft.design/articles/inclusive-101-guidebook (accessed 2026-10)
[4] W3C Cognitive and Learning Disabilities Accessibility Task Force. (2021, April 29). *Making Content Usable for People with Cognitive and Learning Disabilities*. W3C Working Group Note. https://www.w3.org/TR/coga-usable/
[5] W3C WAI. (2024, June 25 update). *Diverse Abilities and Barriers: Cognitive*. https://www.w3.org/WAI/people-use-web/abilities-barriers/cognitive/
[6] W3C WAI. (2025, November 20 update). *Older Users and Web Accessibility*. https://www.w3.org/WAI/older-users/
[7] W3C WAI. (n.d.). *Accessibility, Usability, and Inclusion*. https://www.w3.org/WAI/fundamentals/accessibility-usability-inclusion/ (accessed 2026-10)
[8] National Institute on Deafness and Other Communication Disorders. (n.d.). *Balance Disorders*. NIH. https://www.nidcd.nih.gov/health/balance-disorders (accessed 2026-10)
[9] W3C. (2024). *Web Content Accessibility Guidelines (WCAG) 2.2*. W3C Recommendation. https://www.w3.org/TR/WCAG22/
[10] ISO. (2023). *ISO 24495-1:2023 Plain language — Part 1: Governing principles and guidelines*. Catalog page. https://committee.iso.org/standard/78907.html (principle names partly from a retailer table of contents found via search; see note in §5.1)
[11] digital.gov. (n.d.). *Plain language guide*. US General Services Administration. https://digital.gov/guides/plain-language (accessed 2026-10); and *Writing*. https://digital.gov/guides/plain-language/writing
[12] Government Digital Service. (n.d.). *Use clear language*. GOV.UK content and publishing guidance. https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/writing-guidelines/clear-language/ (accessed 2026-10)
[13] MDN Web Docs. (n.d.). *CSS logical properties and values*. Mozilla. https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values (accessed 2026-10)
