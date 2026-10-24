# AI Slop in UI and Web

> **Scope:** The visible tells of AI-generated and "vibe-coded" app and web UI (landing pages, SaaS sites, dashboards, apps, components, design systems), why they appear, and what to do instead.
> **Last verified:** 2026-10
> **Used by:** creative-director, design-critic, ui-designer, art-director

## How to use this file

- **A tell is a default, not a crime.** Every pattern below is legitimate when the brief asks for it. It becomes slop when it appears because nobody chose it. Anthropic's own skill says so: the traits "are defaults rather than choices, and they appear regardless of subject," and "the brief's own words always win, including when it asks for one of these looks" [2].
- **One tell rarely convicts. Clusters do.** Treat a single cream background or a single eyebrow label as a question. Treat cream + italic serif + tracked caps + mono labels + arrows on every link as a finding. Wikipedia's AI-writing guide makes the same point for text: the patterns are "only potential signs of a problem, not the problem itself" [26].
- **Fix the cause, not the symptom.** Deleting a tell without a decision behind it produces the next default. Anthropic reports that a generic instruction such as "don't use cream" tends to "shift the model to a different fixed palette rather than producing variety" (as quoted in [13]; primary document not located, [unverified]).
- **Evidence honesty.** No peer-reviewed study yet measures whether users recognize these tells or whether they hurt conversion. Almost everything here is **[E2]** (several independent practitioners, an authoritative evaluator such as NN/g, or the tool vendors' own documentation) or **[E3]** (one source, or anecdotal). Grades describe how well documented the *tell* is, not how harmful it is.

Related files: `visual-styles/references/styles/gradient-aurora-mesh.md`, `dark-tech-saas.md`, `bento-grid.md`, `glassmorphism.md`, `corporate-flat-illustration.md` (the legitimate versions of styles that slop imitates); `typography`, `color`, `layout-composition`, `accessibility`, and `cognitive-psychology/references/dark-patterns-and-ethics.md`.

## 1. Why generated UI converges

| Mechanism | What happens | Evidence | Grade |
|---|---|---|---|
| Distributional convergence | Models sample the "high-probability center" of their training data. Unguided, a landing page "will almost always conform to Inter fonts, purple gradients on white backgrounds, and minimal animations" (Anthropic, Nov 2025) [1]. Anthropic's cookbook: "You tend to converge toward generic, 'on distribution' outputs. In frontend design, this creates what users call the 'AI slop' aesthetic" [3]. | Vendor's own statement about its model | [E2] |
| Stack defaults | Generators default to the same stack, so they inherit its look. NN/g tested Bolt, UX Pilot, Claude, Figma Make, v0, Stitch, Lovable, and Replit and found outputs "share a similar, generic look," because tools "default to component libraries like Shadcn and front-end frameworks like Tailwind CSS" (Oct 2025) [11]. Vercel: v0 "uses shadcn/ui by default" (Aug 2025) [10]. | NN/g evaluation + vendor docs | [E2] |
| Vendors recommend the same stack | OpenAI's GPT-5 prompting guide (Aug 7, 2025) recommends, for new apps: Tailwind CSS, shadcn/ui, Radix Themes; icons Material Symbols, Heroicons, Lucide; animation Motion; fonts Inter, Geist, Mona Sans, IBM Plex Sans, Manrope [6]. | Primary vendor doc | [E2] |
| Template ancestry | Tailwind co-creator Adam Wathan, Aug 7, 2025: "I'd like to formally apologize for making every button in Tailwind UI `bg-indigo-500` five years ago, leading to every AI generated UI on earth also being indigo" [4]. It is a joke with a plausible mechanism, not a measured finding. Bakaus (Impeccable): "Every model trained on the same SaaS templates" [15]. | Practitioner testimony | [E3] for causation; the indigo/purple bias itself is [E2] |
| Shared library code | The New Yorker reports Claude Design steering users to the same libraries (shadcn UI, Radix UI). Engineer Lucas Gelfond compares the result to manufacturing marks: "seams on injection-molded plastic, industrial saw marks in wood" (Jun 2026) [13]. | Journalism with named sources | [E2] |
| Iteration converges further | A designer who used Lovable, v0, and Claude Code: "start fresh and the output is serviceable. Start iterating and it converges," because each revision uses the model's previous output as its baseline (Jun 2026) [14]. | One practitioner | [E3] |
| Avoid-lists breed the next default | Anthropic's Oct 2025 cookbook told Claude to avoid Inter and suggested Space Grotesk, Fraunces, Clash Display, and others [3], then noted the model "still tend[s] to converge on common choices (Space Grotesk, for example)" [3]. By 2026 Impeccable flags Fraunces and Space Grotesk as overused AI fonts [16], and Anthropic's Sep 2026 skill names a new cluster (cream, high-contrast serif, terracotta) as the current tell [2]. | Dated primary docs | [E2] |

**Apply:** Never answer "make it not look AI" with a ban list alone. Give the generator a positive decision (a palette, a typeface, a layout concept, real content) derived from the subject. NN/g found that naming a specific style ("neobrutalist") beats adjectives like "modern" or "clean," and that attaching visual references and realistic mock data improves output [12].

### Where the defaults come from (verified in source, 2026-10)

| Default | Where it lives | Resulting tell |
|---|---|---|
| `bg-indigo-500` primary buttons | Tailwind UI (2020 era), per its author [4] | Indigo/violet primary color on unrelated products |
| `rounded-xl border ... shadow-sm` on every Card | shadcn/ui `new-york-v4` `card.tsx` [7] | Identical rounded cards with the same soft shadow |
| `rounded-full ... text-xs` Badge | shadcn/ui `badge.tsx` [7] | Pill badges everywhere ("New", "Beta") |
| `lucide-react` icons | shadcn/ui components import Lucide (e.g. `dialog.tsx`) [7]; OpenAI recommends Lucide [6] | The same outline icon set on every product |
| Geist + Geist Mono | `create-next-app` template `layout.tsx` [9] | Geist body + mono labels |
| "Total Revenue $1,250.00", badge "+12.5%", "Trending up this month" | shadcn/ui `dashboard-01` block, `section-cards.tsx` [8] | KPI cards with a green "+12.5%" and a trend arrow |

These are good, well-made defaults. The problem is shipping them unchanged on a product that has its own subject, brand, and data.

## 2. Dated timeline

| Date | Event | Source |
|---|---|---|
| 2024-08-14 | FTC final rule bans fake reviews and testimonials, explicitly including those "by someone who does not exist, such as AI-generated fake reviews" | [22] |
| 2024-09-20 | NN/g: no participant associated the sparkle icon with AI | [21] |
| 2025-08-07 | Wathan's indigo apology (about 1.5M views at retrieval); same day, OpenAI's GPT-5 guide recommends Tailwind, shadcn/ui, Lucide, Inter, Geist | [4][6] |
| 2025-08-07 | Reply by Kevin Kern showing a purple AI-built French-learning app, joking GPT-5 had not solved "the purple problem" (secondary report only) | [5] |
| 2025-10-21 | Anthropic cookbook names the "AI slop" aesthetic: Inter, "purple gradients on white backgrounds" | [3] |
| 2025-10-24 | NN/g evaluates 8 AI prototyping tools: "flat and interchangeable" screens | [11] |
| 2025-11-12 | Anthropic blog introduces "distributional convergence" and the frontend-design skill | [1] |
| 2025-11-16 | Paul Bakaus creates the Impeccable repo (62 detector rules and about 86k stars by 2026-10) | [15] |
| 2025-12-05 | NN/g: vague prompts produce "Frankenstein layouts," clutter, duplicated elements | [12] |
| 2026-04-24 | Fountain Institute: "7 Signs a UI Has Been Vibe Coded" | [18] |
| 2026-06-24 | The New Yorker (Kyle Chayka) documents a "Claudian sameness": cream, rust accents, italic serifs, tracked subheads, tickers | [13] |
| 2026-09-03 | Anthropic updates frontend-design "to avoid generic design defaults," listing five current clusters | [2] |

## 3. The catalog

Columns: **Tell** | **Why it reads as AI** | **Do instead** | **Legitimate when** | **Grade [sources]**.

### 3.1 Color

| Tell | Why it reads as AI | Do instead | Legitimate when | Grade |
|---|---|---|---|---|
| Purple/indigo/violet primary, or purple-to-blue/pink gradient hero | The single most cited tell: Anthropic's own baseline output [1][3], Tailwind UI's indigo [4], "the Times New Roman of AI-generated design" [18], "Purple to blue, centred headline, two buttons, a soft glow behind" [19] | Derive the palette from the subject (materials, place, audience, category vernacular). Start from one color with a reason [19]. See `color` | The brand already owns violet, or the brief asks for it | [E2] [1][3][4][16][18][19][20] |
| Gradient text on headings or metrics | Decorative, not meaningful; "a common AI tell, especially on headings and metrics" [16] | One solid color; emphasize with size or weight [17] | A single owned brand moment (logo lockup, launch title) with tested contrast | [E3] [16][17] |
| Cyan or neon accents on dark, colored glows, radial halos, "spotlight" blobs behind the hero | "The default 'cool' look of AI-generated UIs" [16]; designers report dashboard elements "with a neon glow underneath" and HN commenters cite "heavy use of glow effects" [13]; "aurora borealis background and glowing text" [18] | Create depth with surface steps, borders, and contrast; neutral elevation; remove effects that convey no information [18] | Gaming, nightlife, cyberpunk briefs (`cyberpunk-futuristic.md`); one owned gradient asset (`gradient-aurora-mesh.md`) | [E2] [13][16][18] |
| Warm cream background (near `#F4F1EA`) + high-contrast serif + terracotta/rust accent (near `#D97757`) | Named by Anthropic as the top current cluster; `#D97757` is "Anthropic's own Claude-interaction accent, so on a user's brief it reads as a tell" [2]. The New Yorker: "beige- and cream-colored backgrounds, rusty orange-hued accents" [13]; Impeccable: "the default 'tasteful' AI surface" [16] | Choose the ground from the palette logic, not as the "safe warm off-white" [16] | Editorial, craft, food, or heritage briefs that call for paper and ink; the client's existing brand | [E2] [2][13][16] |
| Near-black (`#0B0B0B`, `#111`) + one acid-green or vermilion accent | Anthropic cluster 2; tinted near-black "standing in for black" [2] | Decide whether the product is dark for a reason (long sessions, media, pro tools). If so, build a full surface scale (`dark-tech-saas.md`) | Dev tools, media, pro creative tools with a stated reason | [E3] [2] |
| "Tasteful, slightly askew primary colors," desaturated mid-century hues | Designer Celine Nguyen on Claude Design output; repetition turned it into a cliché [13] | Same as above: palette from subject | Mid-century or Bauhaus-referencing briefs (see `design-history`) | [E3] [13] |
| Five or six competing neon colors | "Vibe-coded interfaces love neon, especially five or six competing for attention" [18]; NN/g: "Overused colors creating visual tension" [11] | One dominant, one accent, one neutral; hierarchy through contrast [18] | Maximalist or youth campaign briefs (`maximalism.md`) | [E2] [11][18] |
| Gray text on colored backgrounds; low contrast | Common in generated output [11][15]; fails WCAG 1.4.3 | Darker shade of the background hue or near-white; compute contrast | Never below AA for text | [E2] [11][15][16] |

### 3.2 Typography

| Tell | Why it reads as AI | Do instead | Legitimate when | Grade |
|---|---|---|---|---|
| Inter (or Geist, Roboto, system sans) for everything | Anthropic: Inter is the default [1][3]; NN/g: generic "sans-serif typeface and minimalistic styling" [11]; Geist ships in `create-next-app` [9]; Impeccable flags Inter, Roboto, Geist, Plus Jakarta Sans, Space Grotesk, Fraunces [16]. **Caveat:** on the whole web Inter is only about 1.4-1.5% of pages (Web Almanac 2025) [25], up from about 1% in 2024 [24]. The tell is about the AI/startup/template slice, not the web at large | Choose a face for this product's character and reading needs; state why. Use `typography` (selection procedure and licensing) | The brand uses it; dense product UI where neutrality is the brief; the design system mandates it | [E2] [1][3][11][16] |
| The "approved alternative" fonts (Space Grotesk, Fraunces, Clash Display, Satoshi, Bricolage) | Anthropic's 2025 cookbook suggested them [3]; they are now flagged as the next wave of AI faces [16] | Same: pick from the subject, not from a "distinctive fonts" list | As above | [E3] [3][16] |
| One accented word in the headline (italic, color, or gradient on one word) | Anthropic lists it first among "the commonest tells of a generated page" [2]; The New Yorker: serif type "italicized and highlighted in zealous attempts to emphasize" [13] | Let the whole headline carry the voice; use the type treatment itself as the design [2] | The accented word is the brand name or a genuine contrast the copy needs | [E2] [2][13] |
| Oversized italic serif display headline | "The universal AI-startup landing page hero" [16]; The New Yorker documents the same [13] | Set roman, or a display face chosen for the subject [16] | Editorial and luxury briefs (`editorial-magazine-web.md`, `luxury-premium.md`) | [E2] [13][16] |
| Tracked-out ALL-CAPS eyebrow above every heading | Anthropic: "a tracked-out ALL-CAPS eyebrow label above every heading" [2]; New Yorker: subheadings "tracked out" [13]; Impeccable flags kickers above headings [16] | Delete it, or fold the useful words into the heading [17] | A real taxonomy (section, category, date) that readers navigate by, used sparingly | [E2] [2][13][16] |
| Monospace for small data labels and numbers | Anthropic cluster 5 [2]; HN commenters on Claude output: "numbers in monospaced fonts" [13] | Use tabular figures in the text face (`font-variant-numeric: tabular-nums`) | Developer tools, code, terminal output, true technical data | [E2] [2][13] |
| Meta strings joined with middle dots ("A · B · C"); "WORD — fragment" labels; em dash in every line | Anthropic cluster 5 [2]; Gelfond: "overuse of dots, dividing characters" [13]; Impeccable em-dash saturation rule [16] | Write a sentence or use real structure (a table, a definition list) | Bylines and dense metadata where the convention helps scanning | [E2] [2][13][16] |
| Flat type hierarchy (heading and body within 1.25x) | Detected as a slop rule [16]; NN/g notes "a lack of visual hierarchy" [11] | Build a scale with at least one strong step (see `typography/references/scale-and-rhythm.md`) | Data-dense UI where size steps are deliberately small but weight and color carry hierarchy | [E2] [11][16] |
| Crushed negative tracking on display type | Impeccable rule [16] | Tighten optically, check each glyph stays distinct | Never destructive | [E3] [16] |

### 3.3 Layout and composition

| Tell | Why it reads as AI | Do instead | Legitimate when | Grade |
|---|---|---|---|---|
| Centered hero, confident headline, two buttons, soft gradient behind | "A centered hero with a confident headline and two buttons, rounded cards floating on a soft gradient" seen from Claude Design, Lovable, v0, and Bolt [14]; "could belong to any of ten thousand other products" class of critique [19] | Open with "the most characteristic thing in the subject's world": a product shot, a live demo, an image, an interaction [2]. Show the real product [19] | Single-action pages where the CTA truly is the content | [E2] [2][14][19] |
| Hero metric: big number, small label, supporting stats, gradient accent ("10x", "99.9%", "24/7") | Anthropic: "the default treatment, so only use it if that's truly the best option" [2]; Impeccable design-review pattern "Hero metric layout" [17] | Lead with a metric only when the number explains the product, and use a real, sourced number | Fintech, analytics, or impact reports where the number *is* the story | [E2] [2][17] |
| Three identical feature cards with icon, heading, and three equal-length sentences | "Three feature cards with three icons and three sentences of equal length, all claiming something unfalsifiable" [19]; "Identical card grids" give every point the same weight [17]; "neat three-column grids" [20] | Describe features unevenly, as they really are [19]; group related ideas and vary the layout [17] | Genuinely parallel items (three plans, three locations) | [E2] [17][19][20] |
| Everything in a card; cards nested in cards | Anthropic "SaaS-card kit: content chopped into identical rounded cards" [2]; "In AI-generated interfaces, everything goes in a card" [18]; nested cards rule [15][16] | Group with whitespace, proximity, type, and dividers; cards only for independently actionable items [18] | Collections of discrete objects (products, files, people) | [E2] [2][15][16][18] |
| One radius and the same soft gray shadow on everything | "One border-radius on everything regardless of hierarchy, the same soft grey shadow (rgba(0,0,0,.1)) under each" [2]; the shadcn Card default [7]; "hairline border with wide shadow" on every card of a row [16] | Vary radius and elevation by role (container vs. control vs. overlay); choose edge *or* shadow [17] | A system whose spec defines exactly that, applied deliberately | [E2] [2][7][16] |
| Thick colored left-border ("side-tab") accent on cards, often a different color per card | "The most recognizable tell of AI-generated UIs" [16]; "every single block gets one, and each one gets a different color" [18] | Remove it when there is no status to communicate [17]; treat color as a limited resource [18] | Alerts, callouts, status, priority, quoted text | [E2] [16][17][18] |
| Numbered 01 / 02 / 03 markers on non-sequential content | Anthropic: "only appropriate if the content actually is a sequence" [2]; Impeccable "numbered section labels" [16] | Check the content is a sequence first [2] | Steps, timelines, ranked lists | [E2] [2][16] |
| Monotonous spacing (one gap everywhere) | "Spacing so even it feels exhaled rather than drawn" [14]; detector rule [16] | Tight inside groups, generous between sections (`layout-composition`) | Never as a default | [E2] [14][16] |
| Bento grid on every section | Overuse in SaaS templates already reads as trend-following (`bento-grid.md`) | One bento where content has mixed importance; other sections use other structures | Feature summaries, launch pages (`bento-grid.md`) | [E3] (repo file) |
| Logo cloud of companies that are not customers; "Trusted by 10,000+ teams" | "Logos of companies who are not customers" [19] | Only real customer logos with permission; otherwise omit | Real, permissioned customer logos | [E3] for the tell; misrepresentation risk under consumer-protection law [22] |
| Template section order: hero, logos, 3 features, testimonials, 3-tier pricing with "Most popular", FAQ, CTA | Widely observed in SaaS templates; no dedicated critique found in this pass | Order sections by the visitor's questions for *this* product | When research shows the visitor needs exactly those answers in that order | [E3] (no source) |
| Duplicated elements and "Frankenstein layouts" | NN/g: "designs that feel randomly pieced together," "the same element or information displayed multiple times" (duplicate progress bars in Lovable and Bolt output) [12] | Inventory content first; one home for each piece of information | Never | [E2] [12] |

### 3.4 Components and chrome

| Tell | Why it reads as AI | Do instead | Legitimate when | Grade |
|---|---|---|---|---|
| Emoji as icons (nav, section headers, bullets) | "The AI-generated interface has discovered emojis and will not stop using them" [18]; Gelfond lists emojis among the "tells in L.L.M.-generated software" [13]; Wikipedia flags "Emoji as formatting" in AI text [26] | One consistent icon set sized for context; emoji only as tone in microcopy [18] | Chat, social, and consumer products whose voice uses emoji; user-generated content | [E2] [13][18][26] |
| Icon in a tinted rounded square above every heading (often Lucide) | "The universal AI feature-card template — every generator outputs this exact shape" [16]; Lucide is the shadcn default [7] | Icon beside the heading, or in flow without a container [16]; custom or brand-drawn icons for marketing | App-launcher grids, settings lists where the tile is the hit target | [E2] [7][16] |
| Sparkle icon to mean "AI" | NN/g (n=107): top readings were "favorite or save" and "visual effects or optimization"; "No one attributed the concept of 'artificial intelligence' to the icon" [21] | Label it ("Ask AI", "Summarize"); test icons; prefer a recognized icon when one exists [21] | Paired with a text label; image/video-effects features [21] | [E2] [21] |
| Pill badge or eyebrow chip above the hero ("New", "Now in beta", "v2 is here") | "Now the default AI SaaS hero" [16]; "can look clickable and compete with the message" [17]; shadcn Badge is `rounded-full` by default [7] | Remove it, or put the news in the headline or support line [17] | A real, dated announcement that links somewhere | [E2] [16][17] |
| Arrow (→) appended to every link and button | Anthropic cluster 5 [2] | Arrows only where they signal direction (next step, external, carousel) | Directional navigation | [E3] [2] |
| Glassmorphism on every surface | "Blur effects, glass cards, and glow borders used as decoration rather than to solve a real layering problem" [17] | Glass only where content scrolls under a layer; opaque fallback; see `glassmorphism.md` | Overlays, nav bars, media controls; Apple Liquid Glass platforms | [E3] [17] |
| Decorative grid-line or repeating-stripe backgrounds | "A recurring generated-UI signature" [16]; "adds lines without helping people use the page" [17] | Plain surface or a texture from the brand | Canvases, maps, blueprints, measurement tools [16] | [E3] [16][17] |
| Pulsing "live" status dots | "Decoration that looks like data is actively harmful" [18]; "simulate liveness decoratively" [16] | Map each dot to a defined state and say it in text [18] | Genuinely live data (on-call, recording, streaming) | [E2] [16][18] |
| Ticker / auto-scrolling marquee (logos, news-style bars) | New Yorker: "an inexplicable prevalence of ticker-like text bars, as if the website were a cable-news show" [13]; marquee rule [16] | Static rows; if motion is essential, provide pause (WCAG 2.2.2) | Real live feeds (prices, scores) with pause control | [E2] [13][16] |
| Decorative blinking cursor in the hero | "Simulates typing where no input exists" [16] | Remove; keep carets where people can type [17] | A real input or terminal demo | [E3] [16] |

### 3.5 Motion

| Tell | Why it reads as AI | Do instead | Legitimate when | Grade |
|---|---|---|---|---|
| Fade-and-slide-up entrance on every section | Anthropic: "the generic default and read[s] as AI-generated" [2] | One orchestrated moment (a page-load sequence or one reveal) [2]; honor `prefers-reduced-motion` | A single deliberate reveal with a narrative reason | [E2] [2] |
| Hover lift (translate + shadow) on every card | Anthropic: "hover transitions on every card are the generic default" [2] | Hover feedback only on things that are clickable; motion that answers an action and "shows what changed" [2] | Card is a single large hit target | [E2] [2] |
| Bounce or elastic easing on routine UI | "Feel dated and tacky" [16]; "can make a routine action feel fussy" [17] | Ease-out curves that settle quickly | Playful or kids briefs (`playful-friendly.md`) | [E3] [16][17] |
| Content invisible until a scroll animation fires (and sometimes never) | "The failed-reveal signature: the content shipped but never becomes visible" [16] | Visible by default; animate as enhancement [17] | Never | [E2] [16][17] |
| Scroll-triggered parallax with no off switch | Can cause dizziness and nausea for people with vestibular disorders; WCAG 2.3.3 (AAA) asks that interaction-triggered motion can be disabled [27] | Respect `prefers-reduced-motion`; see `accessibility` | Immersive briefs with a reduced-motion path | [E2] [27] |

### 3.6 Content and copy

| Tell | Why it reads as AI | Do instead | Legitimate when | Grade |
|---|---|---|---|---|
| Copy that could describe any product ("Transform your workflow with powerful, intuitive tools") | [19]; buzzwords like "streamline," "empower," "supercharge," "world-class," "next-generation" [16]; "promotional and advertisement-like language" [26] | One sentence that only this product could say, with a real figure (e.g. deploy time from 12 minutes to 90 seconds) [19]; write from the user's perspective, plain verbs [2] | Never as filler | [E2] [2][16][19][26] |
| Aphoristic cadence ("Not a feature. A platform."; "X. No Y.") repeated across sections | Impeccable "aphoristic-cadence" [16]; New Yorker compares design tells to text tics like "not X . . . but Y" [13]; Wikipedia "negative parallelisms" [26] | State the distinction plainly once [17] | Once, as an earned brand line | [E2] [13][16][26] |
| Fake or invented testimonials, placeholder people, stock "team" photos | "A smiling team photo that is not the team" [19]. In the US, testimonials "by someone who does not exist, such as AI-generated fake reviews" are prohibited (FTC rule, Aug 2024, effective Oct 2024) [22] | Real quotes with consent, or none; mark mockups clearly as placeholder in design files | Clearly labeled prototypes that never ship | [E2] [19][22] |
| Invented metrics and social proof ("10,000+ teams", "99.9% uptime") with no source | "No numbers, no names, no screenshots of the actual product, no dates" is the inverse failure [19]; invented numbers are the other | Use real, dated, sourced numbers or leave the slot out | Real figures with a source | [E3] [19] |
| Lorem-like generic placeholder content in the design itself | Lovable: "Placeholder text hides design problems and gives Lovable nothing to work with" [23]; NN/g recommends realistic mock data "so that visual design supports the key content" [12] | Design with real or realistic content from the start | Early wireframes, labeled as such | [E2] [12][23] |
| Vague errors and empty states ("Something went wrong") | Anthropic: errors explain "what went wrong and how to fix it"; "An empty screen is an invitation to act" [2] | Specific cause, specific next step, consistent action names ("Publish" produces "Published") [2] | Never | [E2] [2] |

### 3.7 Imagery and illustration

| Tell | Why it reads as AI | Do instead | Legitimate when | Grade |
|---|---|---|---|---|
| Hero illustration assembled from primitive SVG shapes | "Reads as placeholder clip art, not illustration" [16] | Real artwork, photography, or product screenshots | Icons, logos, data graphics at their natural scale [16] | [E3] [16] |
| Generic stock or corporate-flat illustration | "Generic illustrations" listed among stock-everything tells [19]; the style now signals "generic tech" (`corporate-flat-illustration.md`) | Commission or art-direct imagery from the subject; see the art-director brief | Budget onboarding with a distinctive variant (`corporate-flat-illustration.md`) | [E2] [19] |
| Raster buried under a near-opaque wash; broken or placeholder `<img>` | Detector rules [16] | Let the image contribute or remove it [17] | Never | [E3] [16] |

### 3.8 Dashboards and app UI

| Tell | Why it reads as AI | Do instead | Legitimate when | Grade |
|---|---|---|---|---|
| KPI cards with a big number, outline badge "+12.5%", trend arrow, and a one-line caption | This is the literal shadcn `dashboard-01` default ("+12.5%", "Trending up this month") [8] | Choose the 3-5 metrics the user acts on; show period, comparison base, and target; color change by meaning, not by sign | Real metrics with defined comparison periods | [E2] for the default's existence [8]; [E3] that users read it as AI |
| Multiple rounded outline panels with a neon glow underneath | Designer David McGillivray on Claude dashboards [13] | Density and hairlines for expert tools (`data-dense-functional.md`) | Gaming or esports dashboards | [E3] [13] |
| Charts that decorate rather than answer a question; gradient fills on metrics | Fountain: "Decoration that looks like data is actively harmful to usability" [18]; gradient text "especially on headings and metrics" [16] | Start from the decision the chart supports; pick the chart form for that question (see the `dataviz` skill if available) | Never as decoration | [E3] [16][18] |
| Emphasis on the wrong element; social-profile patterns forced onto non-social tasks | NN/g: tools "often place visual emphasis on the wrong element" [12]; "unnecessary visual attention" on non-essential info [11] | Rank content by task before styling | Never | [E2] [11][12] |
| Hard-coded colors that bypass tokens (e.g. `text-red-600` instead of a semantic token) | v0 community guidance notes this drift (search summary of Vercel sources; not opened, [unverified]) | Semantic tokens only; Impeccable's design-system rules flag fonts, colors, radii, sizes outside `DESIGN.md` [16] | Prototypes, never production | [E3] [16] |

### 3.9 Craft gaps (the tells that are not style)

These are the strongest signal that nobody looked at the output. They also matter more than style.

| Gap | Evidence | Do instead | Grade |
|---|---|---|---|
| Happy path only: no loading, empty, error, disabled, or partial states | "Loading states, empty states, error recovery are often missing entirely. AI optimizes for the happy path" [20] | Spec every component state; design empty and error states with copy (section 3.6) | [E3] [20] |
| Inconsistent margins, cramped padding, text against the viewport edge | NN/g: "Inconsistent margin spacing" [11]; detector rules for cramped padding and edge text [16] | Spacing tokens on a 4/8-pt scale; check at 320 px | [E2] [11][16] |
| Responsive treated as an afterthought | "Unless mobile is explicitly requested, interfaces break on smaller screens" [20] | Content-first breakpoints (`layout-composition/references/responsive-layout.md`) | [E3] [20] |
| Accessibility missing: contrast, heading order, keyboard focus, semantics | NN/g found "Poor color contrast" [11]; detector flags skipped headings and low contrast [16] | WCAG 2.2 AA floor (`accessibility`); Anthropic's quality floor: responsive, visible focus, reduced motion respected [2] | [E2] [2][11][16] |
| No optical alignment: icons centered by box not by mass, hanging punctuation ignored, headline widows | Detector rules for stub last lines and stragglers (`text-wrap: balance` / `pretty`) [16]; optical alignment itself is craft practice, no AI-specific source found | `text-wrap: balance` on headings, `pretty` on body; nudge icons optically | [E3] [16] |
| Polished look mistaken for quality | NN/g: "don't confuse visual fidelity with design quality" [12]; "Good from Afar, But Far from Good" [11] | Judge against the task and the brief, not the screenshot | [E2] [11][12] |

## 4. Tells by tool (where documented)

Only attributions with a source. Tools change monthly; treat as a 2025-2026 snapshot.

| Tool | Documented tendency | Source | Grade |
|---|---|---|---|
| Claude / Claude Code (unguided, 2025) | Inter, purple gradient on white, minimal animation | Anthropic [1][3] | [E2] |
| Claude / Claude Design (2026) | Cream/beige grounds, rust accents, italic highlighted serifs, tracked subheads, tickers, glowing rounded dashboard panels; default "consistent house style" resembling Anthropic's branding; Claude Design launched April 2026 per [13] | New Yorker [13]; Anthropic skill [2] | [E2] |
| GPT-5 era (Aug 2025) | Purple output persisted; vendor guide recommends Tailwind/shadcn/Lucide/Inter/Geist | [5] (secondary), [6] | [E3] / [E2] |
| v0 | shadcn/ui by default | Vercel [10] | [E2] |
| Lovable, Bolt, Figma Make, Stitch, Replit, UX Pilot, v0, Claude | "Similar, generic look," sans-serif minimalism; duplicated elements under vague prompts | NN/g [11][12] | [E2] |
| Lovable | Its own docs warn of "fighting a default look across the whole app" and ship a polish prompt: "Fix anything that feels generic" | Lovable docs [23] | [E2] |
| Codex / GPT | Impeccable names rules `codex-grid-background` and `gpt-thin-border-wide-shadow`, implying attribution by the author; no separate evidence found | [16] | [E3] |

**Limit:** Do not label a human's work "AI slop" on the basis of these tells. Many come from human templates (Tailwind UI, shadcn, SaaS kits) that predate generators. Critique the default, not the author.

## 5. The slop test (run before shipping)

Answer each in one line. Two or more "no" answers mean revise before presenting.

| # | Question | Fails when |
|---|---|---|
| 1 | Could this page belong to a different product in a different industry with only the logo changed? | Yes: the Ström-Awn test, "the logo is different, but the design is the same" [13] |
| 2 | Can I name the reason for the primary color, the typeface, and the layout concept, each from the brief or subject? | Any answer is "it's the default" or "it looks modern" |
| 3 | If I re-run a similar prompt, would I get roughly the same design? | Yes: Anthropic's own self-check [2] |
| 4 | Where is the one memorable thing, and is everything else quiet? | Boldness is spread thin, or there is none [2] |
| 5 | Does every eyebrow, number, border, badge, dot, arrow, and divider encode information? | Any is decoration ("Visual structure is information" [2]) |
| 6 | Are there more than two of: purple/indigo gradient, cream + terracotta, glow, Inter/Geist, italic serif accent, tracked caps eyebrows, mono labels, middle-dot meta, arrows on links, identical cards, icon tiles, left-border cards, 01/02/03, hero stats, pill chip? | Yes, and the brief did not ask for them |
| 7 | Is every sentence specific to this product? Any "streamline," "empower," "seamless," "Not X. Y."? | Generic or aphoristic copy remains [16][19] |
| 8 | Are all names, logos, quotes, and numbers real (or clearly labeled as placeholders in a non-shipping file)? | Any invented testimonial, logo, or metric ships [22] |
| 9 | Is motion limited to one orchestrated moment plus responses to user actions, with reduced-motion honored? | Every section fades up; every card lifts [2][27] |
| 10 | Do loading, empty, error, disabled, and long-content states exist? | Only the happy path exists [20] |
| 11 | Does it pass AA contrast, visible focus, heading order, and 320 px reflow? | Any fails [2][11] |
| 12 | Did I look at a screenshot at desktop and mobile size before calling it done? | No ("a picture is worth 1000 tokens" [2]) |

## 6. Apply

### In code (HTML, React, Tailwind, shadcn)

- **Plan first, in tokens.** Before code, write 4-6 named hex values, the typefaces and roles, a one-sentence layout concept with an ASCII wireframe, and the principles that make this page unique, then review the plan against the brief and revise anything generic [2].
- **Re-theme the library before using it.** Set your own `globals.css` / theme tokens (color, radius, type, spacing) before generating screens; v0 reads styling from that file, and a token baseline is what "models can use when generating new UIs" [10]. Never ship shadcn's neutral theme plus `indigo-500` unchanged.
- **Override component defaults deliberately.** Decide Card radius and elevation per role; decide whether Badge is a pill; pick the icon set (Lucide is fine if chosen). Replace `dashboard-01` sample metrics with real ones [7][8].
- **Lint for tells.** Impeccable's detector (`npx impeccable detect src/` or a URL) runs 62 deterministic rules, including side-tab borders, purple gradients, gradient text, dark glows, icon tiles, eyebrows, numbered labels, marquees, bounce easing, plus quality rules [15][16]. Use it as a check, not as taste: "A clean detector run is evidence, not proof" [15]. Allow-list brand choices (e.g. `ignores add-value overused-font Inter --reason "Brand font"`) [15].
- **Grep yourself.** Quick searches for `indigo-`, `violet-`, `purple-`, `bg-clip-text`, `border-l-4`, `tracking-widest uppercase`, `font-mono` on labels, `→`, `animate-pulse`, `shadow-[0_0_` glows, and repeated `fade-in`/`slide-up` classes catch most clusters.
- **Ground the hero.** Real product screenshot, live demo, or subject imagery beats a gradient blob [2][19].

### In Figma

- Build variables (color, type, radius, spacing) from the plan before drawing screens; a default kit (shadcn or Tailwind community files) is a starting library, not a look.
- Use real content and realistic data in frames from the first pass [12][23]; mark any placeholder layer `PLACEHOLDER` so it cannot ship.
- Design all component states as variants (default, hover, focus, pressed, disabled, loading, empty, error).
- Run the slop test on the frame at 100% and on a 390 px frame before review.
- With Figma Make or other generators: attach high-fidelity references and name a style; "the higher the fidelity of the attached file, the more accurately the design was translated" [11].

### In critique

- Report tells as **clusters with a cause** ("default shadcn kit + Tailwind indigo + three icon-tile cards: no brand decision was made"), not as a list of bans.
- For each finding, give the **decision** that would replace it, tied to the brief.
- Severity: craft gaps (section 3.9) and dishonest content (fake testimonials, invented metrics) rank above style tells.

**Limit:**
- Do not remove a tell the brief asked for. "The brief's own words always win" [2].
- Do not swap one default for another default from an avoid-list (section 1, last row).
- Do not chase "looks human" with fake imperfection; the goal is fit to subject, not disguise. Wikipedia's editors warn that treating signs as the problem "could just make detection harder" [26].
- Do not invent social proof, logos, or testimonials to make a page look real; in the US this is regulated [22], and it is a dark pattern (`cognitive-psychology/references/dark-patterns-and-ethics.md`).

## Sources

[1] Rajasekaran, P., Wei, J., & Bricken, A. (2025, November 12). *Improving frontend design through Skills*. Anthropic, Claude blog. https://claude.com/blog/improving-frontend-design-through-skills
[2] Anthropic. (2026, September 3, last update). *frontend-design* (SKILL.md). GitHub, anthropics/skills. https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md
[3] Anthropic. (2025, October 21). *Frontend Aesthetics: A Prompting Guide* (notebook). GitHub, anthropics/claude-cookbooks. https://github.com/anthropics/claude-cookbooks/blob/main/coding/prompting_for_frontend_aesthetics.ipynb
[4] Wathan, A. [@adamwathan]. (2025, August 7). *"I'd like to formally apologize for making every button in Tailwind UI `bg-indigo-500` five years ago..."* X. https://x.com/adamwathan/status/1953510802159219096 (text and date retrieved via the api.fxtwitter.com mirror; about 1.5M views at retrieval, 2026-10)
[5] AIbase. (2025, August 8). *The Purple Spell of AI Interface Design: A Tweet Unveils a Technological Phenomenon*. https://www.aibase.com/news/20365 (secondary source for the Kevin Kern and @dotey replies; originals not opened)
[6] OpenAI. (2025, August 7). *GPT-5 prompting guide*, section "Frontend app development". GitHub, openai/openai-cookbook. https://github.com/openai/openai-cookbook/blob/main/examples/gpt-5/gpt-5_prompting_guide.ipynb
[7] shadcn. (n.d., verified 2026-10). *new-york-v4 registry: card.tsx, badge.tsx, dialog.tsx*. GitHub, shadcn-ui/ui. https://github.com/shadcn-ui/ui/tree/main/apps/v4/registry/new-york-v4/ui
[8] shadcn. (n.d., verified 2026-10). *dashboard-01 block: section-cards.tsx*. GitHub, shadcn-ui/ui. https://github.com/shadcn-ui/ui/blob/main/apps/v4/registry/new-york-v4/blocks/dashboard-01/components/section-cards.tsx
[9] Vercel. (n.d., verified 2026-10). *create-next-app template: app/layout.tsx*. GitHub, vercel/next.js. https://github.com/vercel/next.js/blob/canary/packages/create-next-app/templates/app-tw/ts/app/layout.tsx
[10] Sather, W. (2025, August 22). *AI-powered prototyping with design systems*. Vercel. https://vercel.com/blog/ai-powered-prototyping-with-design-systems
[11] Wang, H.-H., & Brown, M. (2025, October 24). *Good from Afar, But Far from Good: AI Prototyping in Real Design Contexts*. Nielsen Norman Group. https://www.nngroup.com/articles/ai-prototyping/
[12] Wang, H.-H. (2025, December 5). *Prompt to Design Interfaces: Why Vague Prompts Fail and How to Fix Them*. Nielsen Norman Group. https://www.nngroup.com/articles/vague-prototyping/
[13] Chayka, K. (2026, June 24). *The A.I.-Design Aesthetic That's Taking Over the Internet*. The New Yorker. https://www.newyorker.com/culture/infinite-scroll/the-ai-design-aesthetic-thats-taking-over-the-internet (read via a text-reader proxy; quotes from Anthropic "guidance documents" not traced to a primary page)
[14] Kakehi, T. (2026, June 8). *AI design isn't ugly. It's fluent — and that's the problem*. UX Collective. https://uxdesign.cc/ai-design-isnt-ugly-it-s-fluent-and-thats-the-problem-131b2f4eb78c (only the opening section was readable; the rest is [unverified])
[15] Bakaus, P. (2025-2026). *Impeccable* (README). GitHub, pbakaus/impeccable, Apache 2.0. https://github.com/pbakaus/impeccable (repo created 2025-11-16; 62 detector rules, about 86k stars at 2026-10-24)
[16] Bakaus, P. (verified 2026-10). *antipatterns.json* (detector rule catalog, 62 rules). GitHub, pbakaus/impeccable. https://github.com/pbakaus/impeccable/blob/main/crates/live/assets/antipatterns.json
[17] Bakaus, P. (n.d., verified 2026-10). *Slop: The visible tells of AI design*. Impeccable. https://impeccable.style/slop
[18] Humble, J. (2026, April 24). *7 Signs a UI Has Been Vibe Coded (And How to Avoid Them)*. The Fountain Institute. https://www.thefountaininstitute.com/blog/signs-vibe-coded-ui
[19] 21st.dev. (2026, August 21). *How to Make a Site Not Look AI Generated*. https://21st.dev/blog/website-not-look-ai-generated
[20] Brummer, A. (2025, December 15). *The Year AI-Generated Interfaces Took Over — and What They Got Wrong*. Standard Beagle Studio. https://standardbeagle.com/the-year-ai-generated-interfaces-took-over/
[21] Kaplan, K. (2024, September 20). *The Proliferation and Problem of the Sparkles Icon*. Nielsen Norman Group. https://www.nngroup.com/articles/ai-sparkles-icon-problem/
[22] Federal Trade Commission. (2024, August 14). *Federal Trade Commission Announces Final Rule Banning Fake Reviews and Testimonials*. https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials
[23] Lovable. (n.d., verified 2026-10). *How to build a real product with Lovable*. Lovable Documentation. https://docs.lovable.dev/tips-tricks/best-practice
[24] HTTP Archive. (2024). *Web Almanac 2024: Fonts*. https://almanac.httparchive.org/en/2024/fonts
[25] HTTP Archive. (2025). *Web Almanac 2025: Fonts*. https://almanac.httparchive.org/en/2025/fonts
[26] WikiProject AI Cleanup. (n.d., verified 2026-10). *Wikipedia:Signs of AI writing*. Wikipedia. https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing
[27] W3C. (2023). *Understanding Success Criterion 2.3.3: Animation from Interactions* (WCAG 2.2). https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html
