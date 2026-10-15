# Laws of UX

> **Scope:** The named "laws" and principles of UX (Hick, Fitts, Jakob, Miller, Tesler, Doherty, Von Restorff, peak-end and others). For each: the original source, the strength of evidence, how to apply it, and how it is commonly misused.
> **Last verified:** 2026-10 (platform target sizes: Apple HIG, Android, WCAG 2.2, checked 2026-10)
> **Used by:** ui-designer, ux-researcher, behavioral-psychologist, design-critic, interaction-motion, ux-writer, accessibility-specialist, design-system-architect, creative-director

**About the name "Laws of UX."** Most designers know these principles from *Laws of UX* (lawsofux.com),
a popular compilation by Jon Yablonski, who also wrote a book with that title [1]. The site lists 30 entries
and is a good index, but it is a summary. It does not show evidence strength and it sometimes simplifies
the history. For example, it says Hick and Hyman ran a joint study in 1952 [1], but they published separate
papers in 1952 and 1953 [2][3]. This file cites the primary sources wherever they could be checked.
Few of these "laws" are laws in the scientific sense. Fitts's law and the Hick-Hyman law are quantitative models.
Most of the others are memory or attention effects, and a few are rules of thumb (Pareto, Parkinson, Occam, Tesler).

Related files: `gestalt.md` (grouping laws), `attention-and-scanning.md` (where people look),
`cognitive-load-and-mental-models.md` (memory, load, mental models), `dark-patterns-and-ethics.md` (limits).

---

## How to use this file

1. **Check the grade before you cite a law in a critique or rationale.** "Fitts's law says this button is too small"
   rests on [E1] evidence. "Miller's law says the menu needs 7 items" is a misuse.
2. **Use laws to make hypotheses, not verdicts.** Most effects are real but small and depend on context.
   Usability testing beats a law.
3. **Prefer the corrected readings** in the "Common misuse" lines. Those are what experienced reviewers will check.

---

## At a glance

| Law / principle | Use it as | Grade | Primary design use |
|---|---|---|---|
| Hick-Hyman law | Choice time grows with the log of the number of equally likely options | [E1] in the lab; [E2] for menus | Fewer options when speed matters; good grouping and defaults |
| Fitts's law | Pointing time grows with distance and shrinks with target size | [E1] | Target size, spacing, placement, screen edges |
| Jakob's law | Users expect your product to work like the ones they already use | [E2] | Follow conventions; innovate only where it pays |
| Miller's law (7±2) | Short-term memory is limited (about 4 chunks today) | [E1] limit; [E3] as a menu rule | Don't make users remember; chunk content |
| Tesler's law | Some complexity can't be removed, only moved | [E2] | Move complexity from the user into the system |
| Postel's law | Be tolerant of input, strict in output | [E2] | Accept many input formats; normalize them |
| Doherty threshold (<400 ms) | Fast response keeps people engaged | [E3] for the 400 ms figure; [E2] for 0.1/1/10 s limits | Response-time budgets and feedback |
| Pareto principle | A few causes produce most effects | [E3] as a law; [E2] as a prioritization heuristic | Prioritize the most-used features and worst problems |
| Parkinson's law | Work expands to fill the time available | [E3] | Short, clear tasks; autofill; time estimates |
| Occam's razor | Prefer the simplest adequate explanation or design | [E2] (philosophical principle) | Remove elements that do no work |
| Aesthetic-usability effect | Attractive designs are *perceived* as more usable | [E1] for perception | Polish matters, but test behavior, not opinions |
| Von Restorff (isolation) effect | The item that differs is remembered better | [E1] | One distinct primary action per view |
| Serial position effect | First and last items in a list are recalled best | [E1] in memory; [E2] in UI | Put key items at the start and end |
| Peak-end rule | Experiences are judged by their peak and end | [E1] for retrospective ratings; [E2] in UX | Design the worst moment and the ending |
| Zeigarnik effect | Unfinished tasks are remembered better | **[E3]**: failed meta-analysis | Use the resumption tendency instead (Ovsiankina) |
| Goal-gradient effect | Effort increases as the goal gets closer | [E1] | Progress indicators; show distance to reward |
| Choice overload | Too many options can reduce choosing or satisfaction | [E3] as a general rule; [E1] under moderators | Reduce options when choices are complex or preferences unclear |
| Working memory | Limited, short-lived mental workspace | [E1] | Keep needed information visible |
| Cognitive load | Mental effort a design demands | [E1] (instruction); [E2] (UI) | Cut extraneous load |
| Chunking | Grouping items into meaningful units | [E1] (memory); [E2] (content) | Group, label, and format content |
| Selective attention | People attend to a subset of input and miss the rest | [E1] | Don't rely on peripheral messages |
| Flow | Absorption when challenge matches skill | [E1] moderate support | Clear goals, immediate feedback, low friction |
| Paradox of the active user | Users skip manuals and learn by doing | [E2] | Teach in context; design for exploration |
| Mental model | What users believe about how a system works | [E2] | Match existing models, or teach the new one |
| Gestalt grouping (proximity, similarity, common region, uniform connectedness, Prägnanz) | Perceived grouping | [E1] | Layout and grouping (see `gestalt.md`) |

---

## 1. Decision and choice

### Hick-Hyman law (Hick's law)

**Statement.** In choice-reaction tasks, the time to respond increases with the information in the
stimulus set. For equally likely alternatives, the increase is roughly logarithmic in their number, not linear.
Hick (1952) showed the relation for the number of alternatives [2]. Hyman (1953) showed that reaction
time tracks stimulus *information*, so probability and sequence matter as well as the count [3].

**Evidence.** [E1] for choice-reaction experiments [2][3]. In HCI the law "failed to gain momentum" compared
with Fitts's law, as Seow's review puts it [5].

**When it does NOT apply (or applies weakly).**
- **Searching vs. choosing.** A novice scanning an unfamiliar menu is doing *visual search*, and search time grows
  roughly *linearly* with the number of items. The logarithmic Hick-Hyman cost applies to *expert* users who
  already know where items are. Cockburn, Gutwin & Greenberg's menu model uses visual search time for novices,
  Hick-Hyman decision time for experts, and a transition between the two. Its predictions matched empirical
  data closely [4].
- **Familiar, well-ordered options.** If the options are ordered in a way users can predict (alphabetical
  countries, numeric sizes, dates), people jump to the right area rather than weigh each one.
- **Choices that are not equally likely.** Hyman's point: a dominant or default option carries little
  information and is chosen fast [3].
- **The decision is hard because of the content, not the count.** Comparing three insurance plans takes
  longer than picking one of twenty colors. Hick's law models neither.

**Apply.**
- UI/web: When speed matters (point-of-sale, frequent actions, onboarding), reduce visible options, highlight a
  recommended or default option, and group long lists under clear headings. Long menus can still be fast
  if they are well organized; NN/g's video on long menus says Hick's law can be offset by other techniques [6].
- Print/OOH: A poster or billboard with several competing calls to action splits a few seconds of attention.
  Give one action.

**Common misuse.** Using Hick's law to justify hiding options behind extra clicks. Each added step costs time
and can make options harder to find. Splitting 12 items into 3 menus of 4 does not make choosing faster if users
must now guess which menu to open.

**Related.** Choice overload, Fitts's law, progressive disclosure (`cognitive-load-and-mental-models.md`), Jakob's law.

### Choice overload

**Statement.** More options can sometimes reduce the likelihood of choosing, or reduce satisfaction with the choice.

**Evidence.** [E3] as a general rule; [E1] for the moderated version.
- The famous study: people were more likely to buy gourmet jams or chocolates, or to write an optional essay,
  when offered 6 choices rather than 24 or 30 [51].
- A meta-analysis of 63 conditions from 50 experiments (N = 5,036) found a **mean effect size of virtually zero**,
  with large variance between studies [52].
- A later meta-analysis (99 observations, N = 7,202) found four moderators that make overload more likely:
  choice-set complexity, decision-task difficulty, preference uncertainty, and an effort-minimizing goal [53].
  Once these moderators are included, the overall effect of assortment size is significant [53].

**Corrected reading.** Large assortments hurt when options are hard to compare, the task is difficult, people
don't know what they want, or they want to decide with little effort. Large assortments are fine, and often
preferred, when people have clear preferences and good tools to filter.

**Apply.**
- UI/web: Offer filters, sorting, comparison tables, and a recommended option before cutting the catalog.
  Pricing pages: three to four clearly differentiated plans with one highlighted.
- Print/OOH: One offer per piece.

**Common misuse.** Quoting the jam study as proof that fewer options always convert better. **Limit:** Removing
options users need, or hiding cheaper options, to steer choice is manipulation (see `dark-patterns-and-ethics.md`).

**Related.** Hick-Hyman law, defaults, satisficing (`cognitive-load-and-mental-models.md`).

### Occam's razor

**Statement.** Common formulation: "Entities are not to be multiplied beyond necessity." The modern principle is
only tenuously connected to William of Ockham himself [32]. Philosophers separate *elegance* (few, concise
principles) from *parsimony* (few kinds of entities) [32].

**Evidence.** [E2]. It is a principle of reasoning, not an empirical finding about users.

**Apply.** Among designs that meet the requirements, prefer the one with fewer elements, states, and concepts.
Remove anything that does no work. NN/g's heuristic #8 states the same idea for interfaces: "Every extra unit of
information in an interface competes with the relevant units of information" [63].

**Common misuse.** Equating "simple" with "fewer visible elements." Hiding necessary controls moves complexity to
the user (see Tesler's law). Minimal must still be sufficient.

**Related.** Tesler's law, aesthetic-usability effect, cognitive load.

### Tesler's law (conservation of complexity)

**Statement.** In Larry Tesler's words (formulated around 1984): "Every application has an inherent amount of
irreducible complexity. The only question is: Who will have to deal with it—the user, the application developer,
or the platform developer?" [24]

**Evidence.** [E2]. A design principle from practice, not an experimental result.

**Apply.**
- UI/web: Move complexity into the system. Detect the card type instead of asking; infer city from postal code;
  provide smart defaults; calculate shipping instead of showing rate tables.
- Print/editorial: The designer and editor absorb the complexity of the content (structure, hierarchy, wayfinding)
  so the reader doesn't have to.

**Common misuse.** Treating "simplify" as "delete." If the complexity is inherent, deleting the control pushes the
work onto users, support staff, or error recovery.

**Related.** Occam's razor, Postel's law, progressive disclosure.

### Pareto principle (80/20)

**Statement.** "For many events, roughly 80% of the effects come from 20% of the causes" [1]. It is named after
Vilfredo Pareto's observation about land ownership in Italy [1] (primary source not checked here).

**Evidence.** [E3] as a law: 80/20 is a rough pattern in skewed distributions, not a constant. [E2] as a
prioritization habit.

**Apply.** Use analytics to find the small set of tasks, pages, or errors that account for most usage or failures,
and fix those first. Put the most-used features on the first level of the interface.

**Common misuse.** Assuming the split is exactly 80/20, or cutting the "80% of features" that serve the minority.
Accessibility needs and rare but critical tasks (account recovery, cancellation) are often in the long tail.

**Related.** Progressive disclosure, Hick-Hyman law.

### Parkinson's law

**Statement.** "Any task will inflate until all of the available time is spent" [1]. It comes from a humorous
1955 essay in *The Economist* by C. Northcote Parkinson about bureaucracy [1] (the original essay could not be
opened for this file).

**Evidence.** [E3]. It is satire and an observation, not a tested law about users.

**Apply (as a heuristic).** Make tasks short and well-defined: autofill, saved details, and stated time estimates
("takes about 2 minutes").

**Common misuse.** Using it to justify artificial deadlines or countdown timers. **Limit:** Fake urgency is a dark
pattern (see `dark-patterns-and-ethics.md`).

**Related.** Goal-gradient effect, Doherty threshold.

---

## 2. Motor performance and system response

### Fitts's law

**Statement.** The time to move to a target depends on distance (D) and target width along the line of motion (W).
NN/g gives it as T = a + b·log2(2D/W), where a and b depend on the pointing device [8], following Fitts (1954) [7].
MacKenzie's review established it as a research and design tool in HCI [9].

**Evidence.** [E1]. It is one of the most robust models in HCI [7][9].

**Apply.**
- **Size.** Make frequent and important targets bigger. Labels next to icons enlarge the target [8].
- **Distance.** Put related controls near where the pointer or thumb already is, for example a Submit button
  right after the last form field [8].
- **Screen edges (mouse).** The edge stops the pointer, so an edge target behaves as if it were infinitely deep.
  The macOS menu bar and the Windows taskbar take advantage of this [8]. Walker & Smelcer found that
  "impenetrable borders" made menu selection faster [10]. Corners are bounded on two sides, so the same
  reasoning applies there (an inference from the edge effect, not separately checked here).
- **Touch is different.** The edge advantage does not carry over to touchscreens. NN/g reports a study in which
  edge targets took *longer* to hit on touch devices, perhaps because users overshoot [8].
- **Touch target size (physical).** Parhi, Karlson & Bederson found that one-handed thumb use worked without loss
  of performance at about 9.2 mm for single targets and 9.6 mm for sequences of taps [11]. NN/g recommends at least
  **1 cm × 1 cm** of physical size and notes that the average fingertip is about 1.6–2 cm wide [12].

**Platform minimum target sizes (verified 2026-10).**

| Source | Value | Status |
|---|---|---|
| Apple HIG, Accessibility | iOS/iPadOS: **44×44 pt** default, 28×28 pt minimum. watchOS: 44×44 default, 28×28 minimum. visionOS: 60×60 default, 28×28 minimum. tvOS: 66×66 default, 56×56 minimum. macOS: 28×28 default, 20×20 minimum [13] | Guideline [E2] |
| Android / Material | At least **48×48 dp** for touch [14], which is about 9 mm physically [15] | Guideline [E2] |
| WCAG 2.2 SC 2.5.8 Target Size (Minimum), Level AA | At least **24×24 CSS px**, with exceptions for spacing, an equivalent control, inline targets, user-agent controls, and essential presentation [16]. W3C calls this a minimum and recommends larger targets [16] | Standard [E2] |
| WCAG 2.2 SC 2.5.5 Target Size (Enhanced), Level AAA | At least **44×44 CSS px** (exceptions: equivalent, inline, user-agent control, essential) [17] | Standard [E2] |

Rule: treat WCAG's 24×24 as the legal floor and 44 pt / 48 dp as the design default for touch.

- Print/OOH: Fitts doesn't apply to printed pieces. It does apply to kiosks, touch screens in stores, and QR codes:
  a QR code needs to be big enough and placed where a phone can reach it comfortably.

**Common misuse.** "Make everything big." Fitts's law is about tradeoffs. Large targets take space, push other
content away, and increase distance to other targets. Also: padding that users can't see only helps if they try
to click it. NN/g notes users may still slow down if they don't realize a target is padded [8].

**Related.** Hick-Hyman law (combined in menu models [4]), WCAG (see the `accessibility` skill).

### Doherty threshold (and response-time limits)

**Statement (as popularized).** "Productivity soars when a computer and its users interact at a pace (<400ms)
that ensures that neither has to wait on the other" [1]. Laws of UX attributes the 400 ms figure to a 1982 paper
by Walter J. Doherty and Ahrvind J. Thadani published in the *IBM Systems Journal* [1].

**What the sources say.**
- The 1982 Doherty & Thadani paper, *The Economic Value of Rapid Response Time* (IBM, November 1982, republished
  online with IBM's permission), argues for **sub-second** response. It reports Thadhani's data of about 180
  transactions per hour at 3 s response vs. 371 at 0.3 s, and a card-wiring test where response dropped from 0.6 s
  to 0.25 s [27]. **The republished text does not state a 400 ms threshold** [27].
- The *IBM Systems Journal* article in this line of work is Thadhani (1981), "Interactive user productivity" [28].
- **[E3]**: Treat "400 ms" as a popular rule of thumb whose attribution could not be confirmed. The underlying
  finding (faster system response increased productivity in IBM's 1970s–80s studies) is [E2]: real but old,
  and measured on mainframe programming tasks.

**Use these limits instead [E2].** Nielsen's three response-time limits (1993), based on Miller (1968) and
Card et al. (1991) [29][30][31]:

| Delay | User perception | What to do |
|---|---|---|
| ~0.1 s | Feels instantaneous | No feedback needed beyond the result |
| ~1 s | Flow of thought stays uninterrupted, but the delay is noticed | Avoid spinners for short waits; keep context visible |
| ~10 s | Limit for keeping attention on the task | Show progress and an estimate; allow other work |

**Apply.**
- UI/web: Set response-time budgets per interaction. Use optimistic UI, skeleton screens, and progress indicators.
  Progress bars that speed up toward the end are perceived as faster [45].
- Motion: Keep feedback animations short enough that they don't become the delay.

**Common misuse.** Citing "400 ms" as a hard research threshold, or adding artificial delays "to feel thorough"
without testing the effect.

**Related.** Flow, peak-end rule (progress bars), Parkinson's law.

---

## 3. Memory

### Miller's law (and the 7±2 misuse)

**Statement.** Miller (1956), "The magical number seven, plus or minus two," summarized evidence that people can hold
about seven *chunks* in immediate memory [20]. Cowan (2001) argued that the number "was meant more as a rough estimate
and a rhetorical device than as a real capacity limit," and that the real limit, when people can't chunk or rehearse,
averages **about four chunks** [21].

**Evidence.** [E1] that short-term memory capacity is small (about 3–5 chunks [21]). **[E3]** for any rule that
limits menus, navigation, or tabs to 7 items.

**Corrected reading.** The limit applies to what people must *hold in mind*, not what they can *see*. Menus are
recognized, not recalled. Nielsen: "It's a common misconception that limited short-term memory implies that menus
should be similarly limited to 7 items," and "It's fine to have longer menus (if needed), because users don't have
to memorize the full list of menu items" [22]. NN/g's chunking article makes the same point [23]. Laws of UX itself
says: "Don't use the 'magical number seven' to justify unnecessary design limitations" [1].

**Apply.**
- UI/web: Don't make users carry information between screens (codes, prices, earlier answers). Keep it visible.
  Format long strings in chunks (phone numbers, card numbers, IBANs) [23].
- Print/OOH: Phone numbers and URLs on a billboard must be recalled after a glance. Make them short and
  memorable, or leave them out.

**Common misuse.** "Navigation must have 7±2 items." There is no such rule. Navigation length should depend on
information scent and grouping, tested with tree tests and card sorts.

**Related.** Working memory, chunking, recognition over recall (`cognitive-load-and-mental-models.md`).

### Working memory

**Statement.** Working memory is a limited-capacity system for temporarily holding and manipulating information.
Baddeley & Hitch (1974) proposed a multi-component model [54]. Baddeley (2000) added a fourth component, the
episodic buffer, which binds information from the subsystems and from long-term memory [55].

**Evidence.** [E1].

**Apply.** Show, don't ask users to remember: keep comparison data side by side, show the item being edited, keep
selected filters visible, repeat key details at checkout. Details in `cognitive-load-and-mental-models.md`.

**Common misuse.** Treating capacity as a fixed number of items for every situation. Capacity depends on chunking,
expertise, and how familiar the material is [21].

**Related.** Miller's law, cognitive load, chunking.

### Chunking

**Statement.** Grouping individual items into larger meaningful units, so each unit takes one "slot" in memory.
In content design, chunking means "breaking up content into small, distinct units of information" [23].

**Evidence.** [E1] for the memory phenomenon [20][21]; [E2] for content guidelines [23].

**Apply.**
- UI/web: Short paragraphs, headings, lists, cards, and conventional formats for strings. NN/g also recommends
  lines of about 50–75 characters and auto-formatting form input [23].
- Print/editorial: Sidebars, pull quotes, numbered steps, and clear section breaks.

**Common misuse.** Over-chunking: breaking content into so many cards or accordions that the structure disappears
and users have to open everything.

**Related.** Gestalt proximity and common region (`gestalt.md`), layer-cake scanning (`attention-and-scanning.md`).

### Serial position effect

**Statement.** In free recall of a list, items at the beginning (primacy) and end (recency) are remembered better
than items in the middle. Murdock (1962) described a primacy effect over the first 3–4 words and a recency effect
over the last several words [38]. Glanzer & Cunitz (1966) attributed the two effects to two storage mechanisms [39].

**Evidence.** [E1] for list memory. [E2] for UI placement. In interfaces, *viewing* (where people look) and *memory*
(what they recall) are different, and scanning patterns favor the top and left (see `attention-and-scanning.md`).

**Apply.**
- UI/web: Put the most important navigation items first and last; put the key message at the start and repeat
  the call to action at the end of long pages.
- Presentations and video: Open and close with the main point.

**Common misuse.** Assuming the middle of a list is invisible. Users looking for something specific will scan to it.

**Related.** Von Restorff effect, peak-end rule.

### Von Restorff effect (isolation effect)

**Statement.** When one item in a list differs from the others, it is remembered better. The effect is usually
credited to Hedwig von Restorff (1933) [36].

**Evidence.** [E1]. Hunt's (1995) re-reading of the original shows a nuance: von Restorff found that *perceptual
salience is not necessary*, and that difference alone is not sufficient. Distinctiveness only works against a
background of similarity [37].

**Apply.**
- UI/web: Make one primary action visually distinct per view. Highlight the recommended plan.
- Print/OOH: One accent color or element against a restrained field.

**Common misuse.** Making many things distinct. If everything is highlighted, nothing is isolated. Also, salient
items can be ignored when they look like ads (banner blindness; see `attention-and-scanning.md`).
**Limit:** Do not make the option that benefits the business distinct while visually suppressing the option the user
asked for (for example, a gray, hard-to-see "No thanks").

**Related.** Serial position effect, Gestalt similarity, pre-attentive attributes.

### Zeigarnik effect (and the Ovsiankina effect)

**Statement (classic).** Interrupted, unfinished tasks are remembered better than completed ones (Zeigarnik, 1927 [46];
published in a series edited by Kurt Lewin, which is why Crossref lists the DOI under Lewin's name).

**Evidence.** **[E3]** for the memory advantage. A 2025 meta-analysis "found no memory advantage for unfinished
tasks but found a general tendency to resume tasks" [47]. The authors conclude that the Ovsiankina effect (the urge
to resume unfinished tasks) "represents a general tendency, whereas the Zeigarnik effect lacks universal validity" [47].

**Corrected reading.** Don't claim that incomplete tasks are *remembered* better. People do tend to *resume*
interrupted tasks [47] [E1].

**Apply.** Make resumption easy: save drafts, show "continue where you left off," and show what remains in a
partially completed profile or checklist.

**Common misuse.** Using unfinished-task framing (fake incomplete profiles, artificial cliffhangers in onboarding)
to create anxiety. **Limit:** Never create artificial incompleteness to drive compulsive return visits.

**Related.** Goal-gradient effect, endowed progress.

### Peak-end rule

**Statement.** People judge a past experience largely by its most intense moment and its end, not by the sum or
average of every moment.

**Evidence.** [E1] for retrospective evaluations.
- In a cold-water study, most participants chose to repeat a *longer* trial that had a less painful ending [40].
- Colonoscopy (n = 154) and lithotripsy (n = 133) patients' memories of total pain were strongly correlated with
  peak pain and pain in the last 3 minutes. Long procedures were not remembered as especially aversive [41].
- "Duration neglect": the length of an episode has little effect on how it is evaluated afterward [42].
- The rule also applies to pleasant experiences and material goods [43].

[E2] for UX journeys. NN/g's examples (celebration screens, avoiding exit pop-ups, good error recovery) are
illustrations, not measured effects [44].

**Apply.**
- UI/web: Find and fix the worst moment (errors, waiting, confusing steps). End flows clearly and positively:
  a confirmation that answers "what happens next." Don't end with an upsell wall.
- Service, packaging, events: Design the unboxing and the closing moment.

**Common misuse.** Polishing the ending while leaving a painful middle. Duration neglect is not permission to make
flows longer. **Limit:** A pleasant ending must not hide a bad outcome (for example, a celebratory screen that
obscures an unwanted subscription).

**Related.** Serial position effect, goal-gradient effect, Doherty threshold (perceived waiting).

---

## 4. Motivation and engagement

### Goal-gradient effect

**Statement.** Effort increases as people approach a goal. The idea comes from Hull's (1932) studies of animals
in mazes [48].

**Evidence.** [E1].
- In a real café reward program, customers bought coffee more often as they got closer to a free coffee [49].
- Customers given a 12-stamp card with 2 "bonus" stamps already filled completed the 10 required purchases faster
  than customers given a regular 10-stamp card [49].
- The "endowed progress effect": turning an 8-step task into a 10-step task with 2 steps already done increased
  completion and reduced completion time [50].

**Apply.**
- UI/web: Show progress in multi-step flows ("Step 3 of 4"), show distance to a reward, and give real credit for
  steps the user has actually done (for example, steps completed during sign-up).
- Loyalty programs and print coupons: stamp cards with visible progress.

**Common misuse.** Fake progress bars that move without real progress, or a progress bar that resets. **Limit:**
Endowed progress must reflect something real. Inventing progress is deception.

**Related.** Zeigarnik/Ovsiankina, peak-end rule, flow.

### Flow

**Statement.** Flow, a term coined by Mihaly Csikszentmihalyi in 1975, is a state of deep absorption in an
activity [1]. It is associated with a balance between challenge and skill.

**Evidence.** [E1] with modest effects. A meta-analysis of 28 studies found a **moderate** relationship between
challenge-skill balance and flow. Clear goals and a sense of control also contributed [60].

**Apply.**
- Products and games: Clear goals, immediate feedback, low friction, and difficulty that grows with skill.
- Tools: Keyboard shortcuts and fast response for experts; don't interrupt focused work with prompts.

**Common misuse.** Using "flow" to describe compulsive engagement (infinite scroll, autoplay). Flow is about the user's
goals, not time on site. **Limit:** see `dark-patterns-and-ethics.md` and the Hook model in `persuasion-and-behavior.md`.

**Related.** Doherty threshold, cognitive load, goal-gradient effect.

---

## 5. Attention and perception

### Selective attention

**Statement.** People focus on a subset of the input that is relevant to their goal and filter out the rest.
Cherry's (1953) listening experiments started this research [58]. In vision, people can miss an unexpected object
in plain view when attention is engaged elsewhere ("inattentional blindness") [59].

**Evidence.** [E1].

**Apply.** Put critical information where users' attention already is (at the point of action), not in a side
banner. Don't style important content like ads. Details in `attention-and-scanning.md`.

**Common misuse.** Assuming visible = seen.

**Related.** Banner blindness, change blindness, Von Restorff effect.

### Aesthetic-usability effect

**Statement.** People tend to perceive attractive products as more usable [35].

**Evidence.** [E1] for *perceived* usability.
- Kurosu & Kashimura (1995, Hitachi): apparent usability was "strongly affected by the aesthetic aspects rather than
  the inherent usability" [33]. NN/g reports the study used 26 ATM layouts and 252 participants [35].
- Tractinsky, Katz & Ikar (2000): after people used an ATM-like system, its aesthetics affected their post-use
  ratings of usability, while its actual usability did not [34].

**Apply.**
- UI/web: Visual quality earns tolerance for *minor* issues and first-impression credibility.
- Research: In usability tests, attractive prototypes can mask problems. Compare what participants say with what
  they do [35].

**Common misuse.** Treating "users said it looks easy" as evidence of usability. NN/g: "A pretty design can make
users forgiving of minor usability problems, but not of large ones" [35].

**Related.** Occam's razor, peak-end rule, `persuasion-and-behavior.md` (emotional design).

### Gestalt grouping laws (cross-reference)

Laws of UX lists the law of common region, proximity, Prägnanz, similarity, and uniform connectedness [1].
They are covered in depth, with primary sources, in `gestalt.md`. Quick rules [E1]:

| Law | Rule |
|---|---|
| Proximity | Closer items are seen as a group. Space between groups should be clearly larger than space within groups |
| Similarity | Items that share color, shape, or size are seen as related. Reserve the link color for links |
| Common region | Items inside one boundary (card, panel, background) are seen as a group |
| Uniform connectedness | Items connected by a line or a continuous shared region are seen as one unit; this can override proximity and similarity |
| Prägnanz | People perceive the simplest, most regular organization the conditions allow |

---

## 6. Expectations and learning

### Jakob's law

**Statement.** Jakob Nielsen (2000): "Users spend most of their time on other sites," so "users prefer your site to work
the same way as all the other sites they already know" [18][19].

**Evidence.** [E2]. Practitioner consensus; it is consistent with mental-model research and NN/g's heuristic
#4, "Consistency and standards" [63].

**Apply.**
- UI/web: Use conventional placements and patterns (logo top left links home, cart top right, search with a
  magnifier icon, standard form controls). Spend innovation where it creates real value.
- Print/editorial: Readers have conventions too (table of contents at the front, page numbers at the outer corners,
  captions next to images).
- Localization: Conventions differ by market and script direction (see `attention-and-scanning.md`).

**Common misuse.** Using it to block all innovation, or copying a competitor's bad pattern because it is common.
Convention is a default, not a law.

**Related.** Mental model, paradox of the active user.

### Mental model

**Statement.** "A mental model is what the user believes about the system at hand" [62]. It is based on belief, not
fact, and it varies between users and over time [62].

**Evidence.** [E2].

**Apply.** Either make the system match users' mental models (for example, move content to where users look for it,
using card sorting) or improve users' models (better explanations, clearer labels) [62]. Details and Norman's
conceptual-model framework in `cognitive-load-and-mental-models.md`.

**Common misuse.** Assuming the team's model is the user's model. Test with think-aloud sessions [62].

**Related.** Jakob's law, gulfs of execution and evaluation.

### Paradox of the active user

**Statement.** Users skip manuals and start using software right away to get their immediate task done, even though
learning the system first would save time in the long run. The term comes from Carroll & Rosson (1987) [61].

**Evidence.** [E2].

**Apply.** "We must design for the way users actually behave" [61]. Teach in context: empty states that explain,
inline hints, sensible defaults, undo, and examples. Make the first useful action possible without a tutorial.

**Common misuse.** Forcing long onboarding tours that users skip anyway.

**Related.** Jakob's law, progressive disclosure, recognition over recall.

### Postel's law (robustness principle)

**Statement.** From Jon Postel's TCP specification (RFC 761, January 1980): "be conservative in what you do, be liberal
in what you accept from others" [25].

**Evidence.** [E2] as an engineering principle. Its UX reading is from practice [1]. The IETF's Internet Architecture
Board has since warned that applied to protocols, tolerating faulty input can conceal problems and entrench bugs.
RFC 9413 says "ignoring faulty or ambiguous input is almost always the incorrect solution to the problem" [26].

**Apply.**
- UI/web: Accept dates, phone numbers, and names in many formats and normalize them. Don't reject a card number
  because of spaces. Output must be consistent and clear [1].
- Forms: When input truly can't be interpreted, say what is wrong and how to fix it [1].

**Common misuse.** Silently "fixing" input in ways the user can't see, such as guessing a date format and booking the
wrong day. Tolerance needs visible confirmation. That is the UX lesson from RFC 9413 [26].

**Related.** Tesler's law, error prevention (`cognitive-load-and-mental-models.md`).

### Cognitive load

**Statement.** "The amount of mental resources" needed to operate a system [56]. Cognitive load theory comes from
instructional research (Sweller, 1988) [57].

**Evidence.** [E1] in instructional design; [E2] for UI applications.

**Apply.** NN/g's three rules: avoid visual clutter, build on existing mental models, and offload tasks (show
pictures, redisplay entered information, set smart defaults) [56]. Full treatment, including the intrinsic/extraneous/
germane debate, in `cognitive-load-and-mental-models.md`.

**Common misuse.** Equating low load with fewer elements. A dense table can carry lower load than five screens of
cards if it supports comparison.

**Related.** Working memory, Miller's law, Hick-Hyman law.

---

## Decision rules for critiques

| If the critique says... | Check |
|---|---|
| "Too many options (Hick's law)" | Are users choosing or searching? Are options grouped and ordered? Is there a default? |
| "Limit nav to 7 items (Miller)" | Reject. Ask instead whether labels have clear information scent |
| "Button too small (Fitts)" | Measure against 44 pt / 48 dp / 24 CSS px (WCAG minimum) and check spacing |
| "Should respond under 400 ms (Doherty)" | Use the 0.1 / 1 / 10 s limits and real performance data |
| "Users will remember unfinished tasks (Zeigarnik)" | Reframe as resumption; provide save and continue |
| "Fewer choices convert better (jam study)" | Check the four moderators: complexity, difficulty, preference uncertainty, effort goal |
| "Users like it, so it's usable (aesthetic-usability)" | Compare stated opinions with task success |

---

## Sources

[1] Yablonski, J. (n.d.). *Laws of UX*. https://lawsofux.com/ (pages consulted 2026-10: home, /hicks-law/, /millers-law/, /doherty-threshold/, /teslers-law/, /postels-law/, /parkinsons-law/, /pareto-principle/, /flow/). Yablonski is identified as "Author of Laws of UX" at https://jonyablonski.com/
[2] Hick, W. E. (1952). On the rate of gain of information. *Quarterly Journal of Experimental Psychology*, 4(1), 11–26. https://doi.org/10.1080/17470215208416600
[3] Hyman, R. (1953). Stimulus information as a determinant of reaction time. *Journal of Experimental Psychology*, 45(3), 188–196. https://doi.org/10.1037/h0056940
[4] Cockburn, A., Gutwin, C., & Greenberg, S. (2007). A predictive model of menu performance. *Proceedings of CHI 2007*, 627–636. ACM. https://doi.org/10.1145/1240624.1240723
[5] Seow, S. C. (2005). Information theoretic models of HCI: A comparison of the Hick-Hyman law and Fitts' law. *Human–Computer Interaction*, 20(3), 315–352. https://doi.org/10.1207/s15327051hci2003_3
[6] Sherwin, K. (2018, July 6). *Hick's Law: Designing Long Menu Lists* (video). Nielsen Norman Group. https://www.nngroup.com/videos/hicks-law-long-menus/
[7] Fitts, P. M. (1954). The information capacity of the human motor system in controlling the amplitude of movement. *Journal of Experimental Psychology*, 47(6), 381–391. https://doi.org/10.1037/h0055392
[8] Budiu, R. (2022, July 31). *Fitts's Law and Its Applications in UX*. Nielsen Norman Group. https://www.nngroup.com/articles/fitts-law/
[9] MacKenzie, I. S. (1992). Fitts' law as a research and design tool in human-computer interaction. *Human–Computer Interaction*, 7(1), 91–139. https://doi.org/10.1207/s15327051hci0701_3
[10] Walker, N., & Smelcer, J. B. (1990). A comparison of selection time from walking and pull-down menus. *Proceedings of CHI '90*, 221–226. ACM. https://doi.org/10.1145/97243.97277
[11] Parhi, P., Karlson, A. K., & Bederson, B. B. (2006). Target size study for one-handed thumb use on small touchscreen devices. *Proceedings of MobileHCI '06*, 203–210. ACM. https://doi.org/10.1145/1152215.1152260
[12] Harley, A. (2019, May 5). *Touch Targets on Touchscreens*. Nielsen Norman Group. https://www.nngroup.com/articles/touch-target-size/
[13] Apple. (n.d., accessed 2026-10). *Human Interface Guidelines: Accessibility* (Mobility, "Offer sufficiently sized controls"). https://developer.apple.com/design/human-interface-guidelines/accessibility
[14] Android Developers. (n.d., accessed 2026-10). *Make apps more accessible*. https://developer.android.com/guide/topics/ui/accessibility/apps
[15] Google. (n.d., accessed 2026-10). *Touch target size* (Android Accessibility Help). https://support.google.com/accessibility/android/answer/7101858
[16] W3C. (2023, updated). *Understanding SC 2.5.8: Target Size (Minimum)*. WCAG 2.2. https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html
[17] W3C. *Understanding SC 2.5.5: Target Size (Enhanced)*. WCAG 2.2. https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced.html
[18] Nielsen, J. (2000, July 22). *End of Web Design*. Nielsen Norman Group. https://www.nngroup.com/articles/end-of-web-design/
[19] Nielsen, J. (2017, August 18). *Jakob's Law of the Internet User Experience* (video). Nielsen Norman Group. https://www.nngroup.com/videos/jakobs-law-internet-ux/
[20] Miller, G. A. (1956). The magical number seven, plus or minus two: Some limits on our capacity for processing information. *Psychological Review*, 63(2), 81–97. https://doi.org/10.1037/h0043158
[21] Cowan, N. (2001). The magical number 4 in short-term memory: A reconsideration of mental storage capacity. *Behavioral and Brain Sciences*, 24(1), 87–114. https://doi.org/10.1017/S0140525X01003922
[22] Nielsen, J. (2009, December 6). *Short-Term Memory and Web Usability*. Nielsen Norman Group. https://www.nngroup.com/articles/short-term-memory-and-web-usability/
[23] Moran, K. (2016, March 20). *How Chunking Helps Content Processing*. Nielsen Norman Group. https://www.nngroup.com/articles/chunking/
[24] Tesler, L. (n.d.). *Law of Conservation of Complexity*. nomodes.com. https://www.nomodes.com/larry-tesler-consulting/complexity-law
[25] Postel, J. (1980, January). *RFC 761: DoD Standard Transmission Control Protocol*, section 2.10. IETF. https://www.rfc-editor.org/rfc/rfc761
[26] Thomson, M., & Schinazi, D. (2023). *RFC 9413: Maintaining Robust Protocols*. IAB / IETF (Informational). https://www.rfc-editor.org/rfc/rfc9413
[27] Doherty, W. J., & Thadani, A. J. (1982, November). *The Economic Value of Rapid Response Time*. IBM. Republished with permission by J. Elliott. https://jlelliotton.blogspot.com/p/the-economic-value-of-rapid-response.html
[28] Thadhani, A. J. (1981). Interactive user productivity. *IBM Systems Journal*, 20(4), 407–423. https://doi.org/10.1147/sj.204.0407
[29] Nielsen, J. (1993, updated 2014). *Response Times: The 3 Important Limits*. Nielsen Norman Group (excerpt from *Usability Engineering*). https://www.nngroup.com/articles/response-times-3-important-limits/
[30] Miller, R. B. (1968). Response time in man-computer conversational transactions. *Proceedings of the AFIPS Fall Joint Computer Conference*, 267–277. https://doi.org/10.1145/1476589.1476628
[31] Card, S. K., Robertson, G. G., & Mackinlay, J. D. (1991). The information visualizer, an information workspace. *Proceedings of CHI '91*, 181–186. ACM. https://doi.org/10.1145/108844.108874
[32] Baker, A. (2004, rev. 2022). Simplicity. *Stanford Encyclopedia of Philosophy*. https://plato.stanford.edu/entries/simplicity/
[33] Kurosu, M., & Kashimura, K. (1995). Apparent usability vs. inherent usability: Experimental analysis on the determinants of the apparent usability. *CHI '95 Conference Companion*, 292–293. ACM. https://doi.org/10.1145/223355.223680
[34] Tractinsky, N., Katz, A. S., & Ikar, D. (2000). What is beautiful is usable. *Interacting with Computers*, 13(2), 127–145. https://doi.org/10.1016/S0953-5438(00)00031-X
[35] Moran, K. (2024, February 3). *The Aesthetic-Usability Effect*. Nielsen Norman Group. https://www.nngroup.com/articles/aesthetic-usability-effect/
[36] von Restorff, H. (1933). Über die Wirkung von Bereichsbildungen im Spurenfeld. *Psychologische Forschung*, 18(1), 299–342. https://doi.org/10.1007/BF02409636
[37] Hunt, R. R. (1995). The subtlety of distinctiveness: What von Restorff really did. *Psychonomic Bulletin & Review*, 2(1), 105–112. https://doi.org/10.3758/BF03214414
[38] Murdock, B. B. (1962). The serial position effect of free recall. *Journal of Experimental Psychology*, 64(5), 482–488. https://doi.org/10.1037/h0045106
[39] Glanzer, M., & Cunitz, A. R. (1966). Two storage mechanisms in free recall. *Journal of Verbal Learning and Verbal Behavior*, 5(4), 351–360. https://doi.org/10.1016/S0022-5371(66)80044-0
[40] Kahneman, D., Fredrickson, B. L., Schreiber, C. A., & Redelmeier, D. A. (1993). When more pain is preferred to less: Adding a better end. *Psychological Science*, 4(6), 401–405. https://doi.org/10.1111/j.1467-9280.1993.tb00589.x
[41] Redelmeier, D. A., & Kahneman, D. (1996). Patients' memories of painful medical treatments: Real-time and retrospective evaluations of two minimally invasive procedures. *Pain*, 66(1), 3–8. https://doi.org/10.1016/0304-3959(96)02994-6
[42] Fredrickson, B. L., & Kahneman, D. (1993). Duration neglect in retrospective evaluations of affective episodes. *Journal of Personality and Social Psychology*, 65(1), 45–55. https://doi.org/10.1037/0022-3514.65.1.45
[43] Do, A. M., Rupert, A. V., & Wolford, G. (2008). Evaluations of pleasurable experiences: The peak-end rule. *Psychonomic Bulletin & Review*, 15(1), 96–98. https://doi.org/10.3758/PBR.15.1.96
[44] Kane, L. (2018, December 30). *The Peak–End Rule: How Impressions Become Memories*. Nielsen Norman Group. https://www.nngroup.com/articles/peak-end-rule/
[45] Harrison, C., Amento, B., Kuznetsov, S., & Bell, R. (2007). Rethinking the progress bar. *Proceedings of UIST '07*, 115–118. ACM. https://doi.org/10.1145/1294211.1294231
[46] Zeigarnik, B. (1927). Das Behalten erledigter und unerledigter Handlungen. *Psychologische Forschung*, 9(1), 1–85 (part of K. Lewin's series "Untersuchungen zur Handlungs- und Affektpsychologie"). https://doi.org/10.1007/BF02409755
[47] Ghibellini, R., & Meier, B. (2025). Interruption, recall and resumption: A meta-analysis of the Zeigarnik and Ovsiankina effects. *Humanities and Social Sciences Communications*, 12. https://doi.org/10.1057/s41599-025-05000-w
[48] Hull, C. L. (1932). The goal-gradient hypothesis and maze learning. *Psychological Review*, 39(1), 25–43. https://doi.org/10.1037/h0072640
[49] Kivetz, R., Urminsky, O., & Zheng, Y. (2006). The goal-gradient hypothesis resurrected: Purchase acceleration, illusionary goal progress, and customer retention. *Journal of Marketing Research*, 43(1), 39–58. https://doi.org/10.1509/jmkr.43.1.39
[50] Nunes, J. C., & Drèze, X. (2006). The endowed progress effect: How artificial advancement increases effort. *Journal of Consumer Research*, 32(4), 504–512. https://doi.org/10.1086/500480
[51] Iyengar, S. S., & Lepper, M. R. (2000). When choice is demotivating: Can one desire too much of a good thing? *Journal of Personality and Social Psychology*, 79(6), 995–1006. https://doi.org/10.1037/0022-3514.79.6.995
[52] Scheibehenne, B., Greifeneder, R., & Todd, P. M. (2010). Can there ever be too many options? A meta-analytic review of choice overload. *Journal of Consumer Research*, 37(3), 409–425. https://doi.org/10.1086/651235
[53] Chernev, A., Böckenholt, U., & Goodman, J. (2015). Choice overload: A conceptual review and meta-analysis. *Journal of Consumer Psychology*, 25(2), 333–358. https://doi.org/10.1016/j.jcps.2014.08.002 (abstract via Kellogg School of Management: https://www.kellogg.northwestern.edu/faculty/research/detail/2015/when-product-assortment-leads-to-choice-overload-a-conceptual)
[54] Baddeley, A. D., & Hitch, G. (1974). Working memory. *Psychology of Learning and Motivation*, 8, 47–89. https://doi.org/10.1016/S0079-7421(08)60452-1
[55] Baddeley, A. (2000). The episodic buffer: A new component of working memory? *Trends in Cognitive Sciences*, 4(11), 417–423. https://doi.org/10.1016/S1364-6613(00)01538-2
[56] Whitenton, K. (2013, December 22). *Minimize Cognitive Load to Maximize Usability*. Nielsen Norman Group. https://www.nngroup.com/articles/minimize-cognitive-load/
[57] Sweller, J. (1988). Cognitive load during problem solving: Effects on learning. *Cognitive Science*, 12(2), 257–285. https://doi.org/10.1207/s15516709cog1202_4
[58] Cherry, E. C. (1953). Some experiments on the recognition of speech, with one and with two ears. *Journal of the Acoustical Society of America*, 25(5), 975–979. https://doi.org/10.1121/1.1907229
[59] Simons, D. J., & Chabris, C. F. (1999). Gorillas in our midst: Sustained inattentional blindness for dynamic events. *Perception*, 28(9), 1059–1074. https://doi.org/10.1068/p281059
[60] Fong, C. J., Zaleski, D. J., & Leach, J. K. (2015). The challenge–skill balance and antecedents of flow: A meta-analytic investigation. *The Journal of Positive Psychology*, 10(5), 425–446. https://doi.org/10.1080/17439760.2014.967799
[61] Nielsen, J. (1998, October 4). *Paradox of the Active User* (citing Carroll, J. M., & Rosson, M. B. (1987). The paradox of the active user. In J. M. Carroll (Ed.), *Interfacing Thought*. MIT Press). Nielsen Norman Group. https://www.nngroup.com/articles/paradox-of-the-active-user/
[62] Chan, M. (2024, January 26). *Mental Models* (update of a 2010 article by J. Nielsen). Nielsen Norman Group. https://www.nngroup.com/articles/mental-models/
[63] Nielsen, J. (1994, updated 2020 and 2024). *10 Usability Heuristics for User Interface Design*. Nielsen Norman Group. https://www.nngroup.com/articles/ten-usability-heuristics/
