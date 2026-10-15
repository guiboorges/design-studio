# Cognitive Load and Mental Models

> **Scope:** How limited working memory shapes design (cognitive load theory, Baddeley's model, Cowan's limit), the techniques that reduce load (recognition over recall, progressive disclosure, defaults, error prevention, plain language), and how users understand systems (mental models, Norman's conceptual models, gulfs, affordances and signifiers, dual-process thinking, satisficing).
> **Last verified:** 2026-10
> **Used by:** ui-designer, ux-researcher, ux-writer, behavioral-psychologist, design-critic, accessibility-specialist, design-system-architect, interaction-motion, creative-director

Related files: `laws-of-ux.md` (Miller, Hick, working memory, chunking), `attention-and-scanning.md` (how people
read and scan), `gestalt.md` (grouping), `persuasion-and-behavior.md` (dual-process models in persuasion),
`dark-patterns-and-ethics.md` (where defaults and friction become manipulation).

---

## How to use this file

1. **Assume users are busy, distracted, and scanning.** They read a fraction of the words [35] and choose the
   first option that seems good enough. Design for that user, not the ideal one.
2. **Cut extraneous load first.** It is the load the designer controls: clutter, inconsistency, things users must
   remember, jargon.
3. **Keep the information users need visible** instead of relying on memory.
4. **Match the user's mental model, or teach a better one on purpose.** Most "user errors" are mismatches between
   the system and the user's model [15].
5. **Grades:** working-memory limits and cognitive load theory are [E1] in their home fields; their UI applications
   are [E2]. Dual-process "System 1 / System 2" is [E2] as a metaphor and contested as a literal theory.

---

## 1. Working memory and its limits

**Baddeley's model [E1].** Baddeley & Hitch (1974) proposed working memory as a three-component system [7][8]:
a controlling central executive plus subsidiary storage systems. Baddeley (2000) added the **episodic
buffer**, a limited-capacity store that binds information from the subsystems and from long-term memory into a
single episode [8].

**Capacity [E1].** Miller's (1956) "seven, plus or minus two" [10] was, in Cowan's words, "more as a rough estimate
and a rhetorical device than as a real capacity limit." When rehearsal and chunking are prevented, capacity averages
**about four chunks** [9]. Chunking (grouping items into meaningful units, often with help from long-term memory)
raises how much raw information fits, because one chunk can contain several items [9][10].

**Design consequences.**
- Information users must carry between steps (an order number, a price, an earlier answer) competes for three to
  five slots, along with the user's own goals and distractions.
- Recognition is cheaper than recall (section 3).
- Short-term memory limits **do not** limit how many items can be *shown*. Menus are scanned and recognized, not
  memorized [38]. See the 7±2 misuse in `laws-of-ux.md`.

**Apply.**
- **UI:** Keep comparison data side by side; carry details forward (show the selected plan on the payment step);
  keep filters and selections visible; don't make users copy codes between screens (offer copy buttons and autofill).
- **Content:** Chunk text with headings, short paragraphs, and lists; format long strings in groups [37].
- **Print/OOH:** A phone number or URL on a poster must survive a few seconds in memory. Prefer one short, memorable
  item or a scannable code.

---

## 2. Cognitive load theory (Sweller)

**Origin [E1].** Cognitive load theory began with Sweller's (1988) work on problem solving and learning [1] and was
consolidated by Sweller, van Merriënboer & Paas (1998) [2]. Its premise: novel information is processed by a
working memory with limited capacity and duration, then stored in a long-term memory without those limits. Once
information is stored, the limits of working memory "disappear" for that material [5].

**The three types (classic formulation).**

| Type | What it is | Designer's job |
|---|---|---|
| **Intrinsic** | Load that comes from the complexity of the material itself: how many elements must be processed together ("element interactivity") [3] | Can't remove it without changing the task; sequence it, chunk it, build on what users know |
| **Extraneous** | Load caused by how information is presented, not by the content [3]. In UX: processing that "takes up mental resources, but doesn't actually help users understand the content" [11] | **Minimize it.** This is where design has the most leverage |
| **Germane** | Load devoted to learning (building schemas) | Contested; see below |

**The germane-load debate.** Germane load has been redefined and questioned:
- Sweller (2010) proposed that germane load "can be defined in terms of intrinsic cognitive load," tying all three
  types to element interactivity rather than treating germane load as a separate source [3].
- Kalyuga (2011) asked how many types of load the theory really needs [6].
- de Jong (2010) identified "problematic conceptual, methodological and application-related issues" in the theory
  and set out a research agenda [4].

**Corrected reading for designers.** Use the practical split: **intrinsic** (the task's real complexity) vs.
**extraneous** (complexity the design adds). Don't plan to "add germane load" as a design goal.

**UI translation [E2].** NN/g's three ways to minimize load [11]:
1. **Avoid visual clutter:** redundant links, irrelevant images, decorative type.
2. **Build on existing mental models:** use labels and layouts people already know from other sites.
3. **Offload tasks:** show a picture instead of text to read, redisplay previously entered information, set
   smart defaults. "Every task you eliminate leaves more mental resources for the decisions that truly are essential" [11].

**Common misuse.** Equating "low load" with "few elements on screen." Splitting a comparison across several screens
*adds* load because users must remember the earlier screens. A dense, well-structured table can be lower-load.

---

## 3. Recognition over recall

**Definition [E2].** Recognition is judging that something is familiar; recall is retrieving it from memory with
few cues. "The difference between recognition and recall is the number of cues that help memory retrieval," and
"Recognition is easier than recall because it involves more cues" [12]. It is NN/g heuristic #6: "Minimize the user's
memory load by making elements, actions, and options visible" [13].

**Apply.**
- **UI:** Menus and visible options rather than commands to remember; recently viewed items and search history;
  autocomplete; labeled icons rather than icon-only buttons (unlabeled icons force recall of their meaning) [12].
- **Forms:** Pickers and suggestions for known values; show password requirements before the user types.
- **Print/editorial:** Running heads, section tabs, and color-coding help readers recognize where they are.

**Limit.** Recognition aids must not pre-select choices the user did not make (see defaults below).

---

## 4. Progressive disclosure

**Definition [E2].** Show the core options first and reveal advanced or rarely used options on request (Nielsen,
2006) [14]. Anything on the initial display signals importance [14].

**Two requirements [14].**
1. **Split correctly:** everything users *frequently* need must be on the initial display.
2. **Make progression obvious:** a clearly labeled control that tells users what they will find.

**Variant: staged disclosure.** A linear sequence of steps (wizards). It works when steps have little interaction;
it fails when users must move back and forth between interdependent steps [14].

**Rule.** "Designs that go beyond 2 disclosure levels typically have low usability" [14]. If you need three or more,
simplify first.

**Apply.**
- **UI:** "Advanced settings" sections, expandable details, "Show more" for long specs, layered onboarding.
- **Editorial/print:** Headline → deck → body → sidebars and footnotes is progressive disclosure on paper.
- **OOH:** The billboard is the first layer; the QR code or URL is the second.

**Common misuse.** Hiding a frequently needed option to make a screen look clean; this moves load to every user who
needs it (see Tesler's law in `laws-of-ux.md`). Hiding cancellation or opt-out behind disclosure is a dark pattern.

---

## 5. Mental models and Norman's framework

### Mental models

**Definition [E2].** "A mental model is what the user believes about the system" [15]. Mental models are based on
belief, not facts; they differ between users and change with experience [15]. "If people make mistakes on your site,
it is often because they've formed erroneous mental models" [15].

**Two ways to close a gap [15].**
1. **Make the system match the model:** put content where users look for it (find out with card sorting and
   tree testing).
2. **Improve the model:** explain better, label more clearly, teach the model early, or remove distinctions users
   don't need.

### Norman's conceptual model, gulfs, affordances, and signifiers

**The Design of Everyday Things (revised and expanded edition, 2013) [18].** Norman's 2013 revision kept the core
science, rewrote the examples, added two new chapters, and added **signifiers** to the "Fundamental Principles of
Interaction" in chapter 1 [19]. The core vocabulary of that chapter (discoverability, affordances, signifiers,
constraints, mappings, feedback, conceptual models) is listed here from the book [unverified line by line in this
research pass].

**Conceptual model and system image.** In Norman's framework, the designer's conceptual model reaches the user only
through what the product shows and does (the "system image"); the user builds a mental model from that
[unverified line by line, from [18]]. Practical rule: if the interface does not show it, the user's model won't contain it.

**Gulfs of execution and evaluation [E2].** Introduced by Hutchins, Hollan & Norman in their mid-1980s work on direct
manipulation [16][17]:
- **Gulf of execution:** the difficulty of "taking action to accomplish a specific goal": knowing what to do and
  how [16].
- **Gulf of evaluation:** the difficulty of "understanding the state of the system": perceiving and interpreting
  feedback [16].
- Successful execution depends on correct evaluation; a plan built on a misread state fails [16].
- Hutchins et al. described directness as reducing the distance between the user's intentions and what the machine
  provides [17].

**Apply (gulfs) [16].**
- Make system status visible *and* easy to interpret; a visible label is not enough if its meaning is ambiguous.
- Build on familiar designs so users can form accurate models.
- Prefer checkboxes for on/off settings when toggle state is ambiguous; word settings positively ("On" means
  something is happening) and avoid double negatives.

**Affordances vs. signifiers.**
- **Affordance** (from J. J. Gibson): a *relationship* between the properties of an object and the abilities of an
  actor; it exists whether or not it is visible [20].
- Norman later said he should have said **perceived affordance** when he introduced the term to design: "we care much
  more about what the user perceives than what is actually true," and on screens designers control only perceived
  affordances [20]. In 1999 he objected to designers saying "I put an affordance there" with "no data, just opinion" [22].
- **Signifier:** "I call any physically perceivable cue a signifier, whether it is incidental or deliberate" [21].
  Norman's conclusion: "Forget affordances: what people need, and what design must provide, are signifiers" [21].
  Social signifiers (traces of other people's behavior, such as worn paths or crowds) are part of the same idea [21].

**Correct usage in critiques.**
- Wrong: "Add an affordance to the button." Right: "The button lacks a **signifier** that it is clickable" (shape,
  contrast, label, cursor change, conventional placement).
- A flat text link with no visual difference from body text has the affordance (it can be clicked) but no signifier.

**Apply.**
- **UI:** Every interactive element needs a signifier: conventional styling, labels, icons with text, visible focus
  states. Drag handles, swipe hints, and scroll cues are signifiers for hidden actions.
- **Physical, packaging, wayfinding, OOH:** Door handles, tear strips, and arrows are signifiers; test them with
  first-time users.

---

## 6. Dual-process thinking (System 1 / System 2), with caveats

**Model.** Fast, automatic, intuitive processing vs. slow, effortful, deliberate processing, popularized by Daniel
Kahneman's *Thinking, Fast and Slow* (2011). Full treatment is in `persuasion-and-behavior.md`; the points that matter
for load are:

- **Type 1 / Type 2, not two brain systems [E1, contested].** Evans & Stanovich (2013) defend a distinction in which
  rapid autonomous processes give default responses unless higher-order reasoning intervenes, and Type 2 processing
  is defined by hypothetical thinking and heavy use of working memory [23].
- **Critics call the two-type split a myth.** Melnikoff & Bargh (2018) argue that the typology "lacks empirical
  support, contradicts well-established findings, and is internally incoherent" [24].
- **Some book findings failed.** Kahneman wrote in 2017 that he "placed too much faith in underpowered studies" in the
  book's priming chapter [25].

**Design reading [E2].** Use it as a metaphor: most interaction runs on habit and recognition, and deliberate thought
is costly because it loads working memory [23]. So:
- Make routine actions automatic (conventions, defaults, consistent placement).
- Add deliberate friction only where a fast choice could harm the user (deleting data, payments, irreversible actions).

**Limit.** "Bypass System 2" is not a legitimate goal (see `dark-patterns-and-ethics.md`).

---

## 7. Satisficing ("Don't make me think")

**Origin [E1].** Herbert Simon (1955, 1956) argued that real decision makers have limited information and computing
capacity, so they use much simpler choice mechanisms than economic models of rational choice assume [26][27]. His term
for choosing the first option that meets an aspiration level is **satisficing** (the 1956 paper is usually cited for
the term [unverified in this pass]).

**On the web [E2].** Steve Krug's *Don't Make Me Think* (1st ed. 2000; 3rd ed. *Revisited*, 2014) [28] made the idea
the core of web usability: the title is its first principle, and the book argues that users scan, satisfice, and
muddle through rather than read and optimize [unverified: chapter wording not re-checked in this pass]. This matches
NN/g's reading data: at most 28% of words read per page visit, about 20% more likely [35].

**Apply.**
- The first plausible option gets clicked. Make the right option look plausible and the wrong ones clearly different.
- Labels must be self-evident; anything that makes users stop and think ("Is this clickable? What does this mean?")
  costs attention.
- Navigation labels with strong information scent beat clever names.

**Limit.** Satisficing users are easy to steer with a prominent "good enough" option. Make the prominent option the
one that serves the user (see defaults).

---

## 8. Defaults

**Evidence [E1].**
- Default options "can lead to striking differences in preferences." Johnson & Goldstein (2003) found large effects of
  the default on organ-donor registration [29].
- A meta-analysis of 58 studies (pooled n = 73,675) found a considerable effect (d = 0.68, 95% CI 0.53–0.83) with
  substantial variation: most studies found positive effects, several found none, and two found negative effects [30].
- Defaults were more effective in consumer domains and less in environmental ones, and more effective when seen as a
  recommendation (**endorsement**) or as the status quo (**endowment**) [30].

**Apply.**
- **UI:** Pre-fill what you know (country from locale, shipping = billing), choose the safest and most common option
  as the default, and remember previous choices. NN/g lists good defaults as a way to prevent slips [32] and to offload
  work [11].
- **Settings:** Privacy-protective and accessibility-friendly defaults.

**Limit.** Because users accept defaults, pre-checked add-ons, opt-out consent, and defaults that favor the business
over the user are dark patterns (see `dark-patterns-and-ethics.md`). Rule: a default must be the option most users
would choose if they read every word.

---

## 9. Error prevention

**Principle [E2].** NN/g heuristic #5: "the best designs carefully prevent problems from occurring in the first place" [13].

**Two kinds of error.** Norman's research on action slips [31] is the basis for the practitioner distinction [32]:
- **Slips:** "users intend to perform one action, but end up doing another (often similar) action," usually on
  autopilot [32].
- **Mistakes:** the goal or plan is wrong, often because of incomplete or incorrect information about the task,
  that is, a mental-model problem [32].

**Preventing slips [32].**
- **Constraints:** limit input to valid values (a return date can't precede departure).
- **Suggestions:** contextual suggestions while typing.
- **Good defaults:** reasonable preset values.
- **Forgiving formatting:** accept input as people naturally type it and reformat it (see Postel's law in
  `laws-of-ux.md`).

**Preventing mistakes.** Improve the mental model: clear labels, previews of outcomes, and feedback that shows the
system state (closing the gulf of evaluation [16]).

**Recovery.** Prevention is not enough: offer undo, and confirm before destructive or irreversible actions [13].
Overused confirmations become habitual clicks (a slip in themselves), so reserve them for consequential actions and
prefer undo for everything else (practitioner heuristic, not separately sourced here).

---

## 10. Readability and load in text

**How people read on screens [E2].** On an average page, users have time to read at most 28% of the words; 20% is
more likely [35]. Even experts prefer plain language: NN/g found that "even highly educated online readers crave
succinct information that is easy to scan" [34].

**Plain language [E2].** In the US, "The Plain Writing Act of 2010 established the requirement that content for the
public is written for its specific audience" [39]. WCAG 2.2 SC 3.1.5 Reading Level (Level AAA) asks for a version that
does not require reading ability above the **lower secondary education level** (about 7–9 years of school) when the
main text exceeds it [33].

**Readability formulas: use with care.** Formulas such as Flesch's (1948) [36] estimate difficulty from surface features
of the text (sentence and word length). They make reading level measurable, but they don't measure clarity,
structure, or whether the reader knows the terms. W3C notes that "it will not be possible to write a text that will
suit the abilities of all people" and that reading level is used because it can be tested [33].

**Rules for low-load text [E2].**
- Front-load: the main point in the first sentence; key words at the start of headings, links, and bullets
  (see `attention-and-scanning.md`).
- Use the words users use; define unavoidable terms on first use.
- One idea per sentence and per paragraph; short paragraphs; lists for steps and options [37].
- Descriptive headings that work when read alone (layer-cake scanning).
- Provide a summary or simplified version for complex content (WCAG 3.1.5 [33]).

**Apply across media.**
- **UI/microcopy:** Buttons say what happens ("Save draft," not "Submit"); errors say what went wrong and how to fix it.
- **Editorial:** Decks and subheads carry the story for skimmers.
- **OOH and social:** Glance media allow a handful of words; make each one carry meaning.

**Limit.** Plain language is not dumbing down; experts benefit too [34]. Simplification must not drop information
people need to make a decision (fees, risks, terms).

---

## Quick reference: load-reduction checklist

| Check | Technique | Grade |
|---|---|---|
| Does the user have to remember anything from a previous step? | Carry it forward on screen | [E1] limit, [E2] fix |
| Are options visible or must they be recalled? | Recognition over recall | [E2] |
| Is everything on the first screen frequently needed? | Progressive disclosure (max 2 levels) | [E2] |
| Can the system do the work instead? | Defaults, inference, autofill (Tesler) | [E1] defaults |
| Are interactive elements signified? | Signifiers, conventions | [E2] |
| Can a slip cause damage? | Constraints, undo, confirmation for irreversible actions | [E2] |
| Can the target reader understand the text quickly? | Plain language, front-loading, chunking | [E2] |
| Is anything on screen doing no work? | Remove it (extraneous load) | [E1] theory, [E2] UI |

---

## Sources

[1] Sweller, J. (1988). Cognitive load during problem solving: Effects on learning. *Cognitive Science*, 12(2), 257–285. https://doi.org/10.1207/s15516709cog1202_4
[2] Sweller, J., van Merriënboer, J. J. G., & Paas, F. G. W. C. (1998). Cognitive architecture and instructional design. *Educational Psychology Review*, 10(3), 251–296. https://doi.org/10.1023/A:1022193728205
[3] Sweller, J. (2010). Element interactivity and intrinsic, extraneous, and germane cognitive load. *Educational Psychology Review*, 22(2), 123–138. https://doi.org/10.1007/s10648-010-9128-5
[4] de Jong, T. (2010). Cognitive load theory, educational research, and instructional design: Some food for thought. *Instructional Science*, 38(2), 105–134. https://doi.org/10.1007/s11251-009-9110-0
[5] Sweller, J., van Merriënboer, J. J. G., & Paas, F. (2019). Cognitive architecture and instructional design: 20 years later. *Educational Psychology Review*, 31(2), 261–292. https://doi.org/10.1007/s10648-019-09465-5
[6] Kalyuga, S. (2011). Cognitive load theory: How many types of load does it really need? *Educational Psychology Review*, 23(1), 1–19. https://doi.org/10.1007/s10648-010-9150-7 (bibliographic record checked; full text not accessed)
[7] Baddeley, A. D., & Hitch, G. (1974). Working memory. *Psychology of Learning and Motivation*, 8, 47–89. https://doi.org/10.1016/S0079-7421(08)60452-1
[8] Baddeley, A. (2000). The episodic buffer: A new component of working memory? *Trends in Cognitive Sciences*, 4(11), 417–423. https://doi.org/10.1016/S1364-6613(00)01538-2
[9] Cowan, N. (2001). The magical number 4 in short-term memory: A reconsideration of mental storage capacity. *Behavioral and Brain Sciences*, 24(1), 87–114. https://doi.org/10.1017/S0140525X01003922
[10] Miller, G. A. (1956). The magical number seven, plus or minus two: Some limits on our capacity for processing information. *Psychological Review*, 63(2), 81–97. https://doi.org/10.1037/h0043158
[11] Whitenton, K. (2013, December 22). *Minimize Cognitive Load to Maximize Usability*. Nielsen Norman Group. https://www.nngroup.com/articles/minimize-cognitive-load/
[12] Budiu, R. (2024, January 15). *Memory Recognition and Recall in User Interfaces*. Nielsen Norman Group. https://www.nngroup.com/articles/recognition-and-recall/
[13] Nielsen, J. (1994, updated 2020 and 2024). *10 Usability Heuristics for User Interface Design*. Nielsen Norman Group. https://www.nngroup.com/articles/ten-usability-heuristics/
[14] Nielsen, J. (2006, December 3). *Progressive Disclosure*. Nielsen Norman Group. https://www.nngroup.com/articles/progressive-disclosure/
[15] Chan, M. (2024, January 26). *Mental Models* (update of a 2010 article by J. Nielsen). Nielsen Norman Group. https://www.nngroup.com/articles/mental-models/
[16] Whitenton, K. (2018, March 11). *The Two UX Gulfs: Evaluation and Execution*. Nielsen Norman Group. https://www.nngroup.com/articles/two-ux-gulfs-evaluation-execution/
[17] Hutchins, E. L., Hollan, J. D., & Norman, D. A. (1985). Direct manipulation interfaces. *Human–Computer Interaction*, 1(4), 311–338. https://doi.org/10.1207/s15327051hci0104_2
[18] Norman, D. (2013). *The Design of Everyday Things* (Revised and expanded ed.). Basic Books. ISBN 9780465072996. https://www.hachettebookgroup.com/titles/don-norman/the-design-of-everyday-things/9780465072996/
[19] Norman, D. (n.d.). *The Design of Everyday Things: Revised and Expanded Edition* (book page). jnd.org. https://jnd.org/books/the-design-of-everyday-things-revised-and-expanded-edition/
[20] Norman, D. (2008, November 17). *Affordances and Design*. jnd.org. https://jnd.org/affordances-and-design/
[21] Norman, D. A. (2008). Signifiers, not affordances. *Interactions*, 15(6), 18–19. https://doi.org/10.1145/1409040.1409044 (also at https://jnd.org/signifiers-not-affordances/)
[22] Norman, D. A. (1999). Affordance, conventions, and design. *Interactions*, 6(3), 38–43. https://doi.org/10.1145/301153.301168
[23] Evans, J. St. B. T., & Stanovich, K. E. (2013). Dual-process theories of higher cognition: Advancing the debate. *Perspectives on Psychological Science*, 8(3), 223–241. https://doi.org/10.1177/1745691612460685
[24] Melnikoff, D. E., & Bargh, J. A. (2018). The mythical number two. *Trends in Cognitive Sciences*, 22(4), 280–293. https://doi.org/10.1016/j.tics.2018.02.001
[25] Kahneman, D. (2017, February 14). Comment on Schimmack, U., Heene, M., & Kesavan, K., *Reconstruction of a Train Wreck: How Priming Research Went off the Rails*. Replicability-Index. https://replicationindex.com/2017/02/02/reconstruction-of-a-train-wreck-how-priming-research-went-of-the-rails/comment-page-1/
[26] Simon, H. A. (1955). A behavioral model of rational choice. *The Quarterly Journal of Economics*, 69(1), 99–118. https://doi.org/10.2307/1884852
[27] Simon, H. A. (1956). Rational choice and the structure of the environment. *Psychological Review*, 63(2), 129–138. https://doi.org/10.1037/h0042769
[28] Krug, S. (2014). *Don't Make Me Think, Revisited: A Common Sense Approach to Web Usability* (3rd ed.). New Riders. ISBN 978-0-13-359727-1. https://www.peachpit.com/store/dont-make-me-think-revisited-a-common-sense-approach-9780133597271
[29] Johnson, E. J., & Goldstein, D. (2003). Do defaults save lives? *Science*, 302(5649), 1338–1339. https://doi.org/10.1126/science.1091721
[30] Jachimowicz, J. M., Duncan, S., Weber, E. U., & Johnson, E. J. (2019). When and why defaults influence decisions: A meta-analysis of default effects. *Behavioural Public Policy*, 3(2), 159–186. https://doi.org/10.1017/bpp.2018.43
[31] Norman, D. A. (1981). Categorization of action slips. *Psychological Review*, 88(1), 1–15. https://doi.org/10.1037/0033-295X.88.1.1
[32] Laubheimer, P. (2015, August 23). *Preventing User Errors: Avoiding Unconscious Slips*. Nielsen Norman Group. https://www.nngroup.com/articles/slips/
[33] W3C. *Understanding SC 3.1.5: Reading Level*. WCAG 2.2. https://www.w3.org/WAI/WCAG22/Understanding/reading-level.html
[34] Loranger, H. (2017, October 8). *Plain Language Is for Everyone, Even Experts*. Nielsen Norman Group. https://www.nngroup.com/articles/plain-language-experts/
[35] Nielsen, J. (2008, May 5). *How Little Do Users Read?* Nielsen Norman Group. https://www.nngroup.com/articles/how-little-do-users-read/
[36] Flesch, R. (1948). A new readability yardstick. *Journal of Applied Psychology*, 32(3), 221–233. https://doi.org/10.1037/h0057532
[37] Moran, K. (2016, March 20). *How Chunking Helps Content Processing*. Nielsen Norman Group. https://www.nngroup.com/articles/chunking/
[38] Nielsen, J. (2009, December 6). *Short-Term Memory and Web Usability*. Nielsen Norman Group. https://www.nngroup.com/articles/short-term-memory-and-web-usability/
[39] Digital.gov (U.S. General Services Administration). (n.d., accessed 2026-10). *Plain language guide*. https://digital.gov/guides/plain-language
