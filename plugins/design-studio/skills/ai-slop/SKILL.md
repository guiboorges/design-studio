---
name: ai-slop
description: Use whenever you create, generate, or review any design (app or web UI, landing page, dashboard, design system, logo, identity, social post, ad, poster, packaging, image or video direction, UI copy), and whenever someone says a design looks AI-generated, generic, templated, vibe-coded, or "like every other site". It is the anti-default check every deliverable must pass before delivery. Contains: why generated work converges (distributional convergence, mode collapse, shared Tailwind/shadcn/Inter defaults), a cited, dated catalog of AI tells per dimension (color, type, layout, components, motion, copy, imagery, logos, video, dashboards, craft gaps) with what to do instead and when each is legitimate, the default fingerprints of popular tools, AI image and brand tells with verified brand backlash cases, copy tells and word lists, audience-perception evidence on AI labels and trust, disclosure rules (EU AI Act Art. 50, platform labels, C2PA), and slop tests for UI, imagery, and copy.
user-invocable: false
---

# AI Slop

**AI slop (design):** work whose form and words could belong to any brand, product, or audience, because they came
from a default instead of a decision. It shows three ways: **generic** (swap the brand name and nothing breaks),
**unreviewed** (errors, placeholder residue, invented facts, missing states), and **unasked-for volume** (more
sections, effects, and words than the reader needs). The definition doesn't depend on provenance: a human can ship
slop, and AI-assisted work can pass. Merriam-Webster ("slop") and Macquarie ("AI slop") made it their 2025 words of
the year, so audiences now name and mock it in public.

This skill is not a ban list. It's a check that every visible choice was **made for this brief**.

## Rules

1. **A tell is a default, not a crime.** Every pattern in the catalogs is legitimate when the brief asks for it or
   the brand already owns it. The brief's own words always win, including when it asks for one of these looks. A tell
   becomes slop when it appears because nobody chose it.
2. **Clusters convict, single tells don't.** One cream background is a question. Cream + italic serif accent + tracked
   caps eyebrows + mono labels + arrows on every link is a finding. Report clusters with their cause.
3. **Replace, don't ban.** Banning a default produces the next one: Anthropic's 2025 "avoid Inter" guidance pushed
   models to Space Grotesk and Fraunces, which are now flagged as AI fonts too. Every removal needs a positive decision
   derived from the subject: its materials, place, audience, vernacular, real content, and real data.
4. **The first generation is the statistical center of the category.** Treat it as the starting point to move away
   from, never as the deliverable. Generated work is better on average and more alike across people [E1]
   (`copy-and-perception.md` §1.4). For a brand, "better than average and like everyone else" is a loss.
5. **Craft gaps and false content outrank style.** Missing loading, empty, and error states, broken contrast, invented
   testimonials, metrics, and logos are the strongest sign nobody looked. Invented reviews and testimonials are also
   illegal in the US (FTC rule, Aug 2024). Rank them above any style tell.
6. **Fix the genericness, not the fingerprints.** The goal is honest, specific work, not undetectable AI. Never add
   fake imperfection to disguise generated work, never use generated people to simulate diversity or customers, and
   never hide AI use in a way that can be exposed: being exposed costs more trust than disclosing [E1].
7. **Critique the default, not the author.** Many tells come from human templates (Tailwind UI, shadcn, SaaS kits)
   that predate generators. Never accuse a person of using AI on the basis of these signals.

## The anti-default procedure (before producing)

Run this at the "Set the direction" step, before any Figma, code, image, or Canva tool.

1. **Name the subject.** What is this, for whom, and what is the most characteristic thing in its world (a material,
   a place, a ritual, a number, an object)? Distinctive choices come from there, not from a "distinctive fonts" list.
2. **Write the plan as decisions with reasons:** 4–6 named colors, the typefaces and their roles, a one-sentence layout
   concept, the one memorable element, and the motion moment (one, or none). Each item gets a reason from the brief.
   "It looks modern" and "it's the default" are not reasons.
3. **Re-run test.** Would a similar prompt for a different client land on roughly the same plan? If yes, change the
   parts that would repeat and say what changed and why.
4. **Real content first.** Real copy, names, numbers, and product images from the start. Placeholder content hides
   design problems and invites invented proof. Mark any unavoidable placeholder `PLACEHOLDER` so it can't ship.
5. **Spend boldness in one place.** One memorable thing, everything around it quiet. Then remove one accessory.

## Quick tell index

The full tables (why it reads as AI, what to do instead, when it's legitimate, grade, sources) are in the reference
files. Grades: most UI tells are [E2] practitioner consensus (Anthropic, NN/g, Impeccable, critics), image tells are
largely [E1] (detection research), copy tells [E2].

| Dimension | Most common tells | File |
|---|---|---|
| Color | Purple/indigo primary or purple-to-blue gradient hero (Tailwind UI's `bg-indigo-500` legacy); gradient text; neon glows and radial halos on dark; warm cream (~`#F4F1EA`) + high-contrast serif + terracotta (~`#D97757`); near-black + one acid-green or vermilion accent | `ui-and-web.md` §3.1 |
| Typography | Inter/Geist for everything (Inter is only ~1.5% of the whole web, so this is a startup and AI-slice tell); the "approved alternatives" (Space Grotesk, Fraunces, Clash Display); one accented word in the headline; italic serif display hero; tracked ALL-CAPS eyebrow over every heading; mono for small labels; `A · B · C` meta strings; flat hierarchy | `ui-and-web.md` §3.2 |
| Layout | Centered hero + headline + two buttons + soft gradient; hero stat row ("10x / 99.9% / 24/7"); three identical icon-heading-sentence cards; everything in cards with one radius and one soft shadow; colored left-border cards; 01/02/03 on non-sequences; one gap everywhere; fake logo cloud; template section order | `ui-and-web.md` §3.3 |
| Components | Emoji as icons; Lucide icon in a tinted rounded tile; sparkle icon meaning "AI" (NN/g: nobody read it as AI); "New" pill chip over the hero; → on every link; glass on every surface; decorative grid backgrounds; pulsing "live" dots; tickers | `ui-and-web.md` §3.4 |
| Motion | Fade-and-slide-up on every section; hover lift on every card; bounce easing; content invisible until a scroll trigger fires | `ui-and-web.md` §3.5 |
| Dashboards | shadcn `dashboard-01` KPI cards ("+12.5%", "Trending up this month"); neon-glow panels; charts that decorate instead of answering a question | `ui-and-web.md` §3.8 |
| Craft gaps | Happy path only (no loading, empty, error, disabled states); inconsistent spacing; mobile as an afterthought; contrast, focus, and heading-order failures; no optical alignment | `ui-and-web.md` §3.9 |
| Photography | Waxy, over-smoothed skin; glossy "cinematic" HDR finish; averaged, over-attractive casting; garbled text; hands, teeth, jewelry errors (now mostly in background figures); shadows and reflections that disagree; objects held or built impossibly; bokeh and teal-orange by default | `imagery-and-brand.md` §2 |
| Video | Identity drift between shots; style drift; morphing wheels and fingers; stitched-clip pacing | `imagery-and-brand.md` §3 |
| Illustration, 3D | Glossy clay mascots; isometric little worlds; glowing brains, robots, and circuits for "AI"; blue-purple neon for "tech"; generic flat people | `imagery-and-brand.md` §4 |
| Logos, identity | Initials in a circle or shield; swoosh, orbit, gradient blob; literal clichés (lightbulb, leaf, rocket); details that fail at 16 px; generated pseudo-lettering; a mark with no system | `imagery-and-brand.md` §5 |
| Social, ads, print | Over-busy compositions; composites with mismatched light; template layouts; a product that isn't quite the product; generated food | `imagery-and-brand.md` §6 |
| Copy | Copy that fits any product; "Unlock / Elevate / Supercharge / Revolutionize"; seamless, effortless, intuitive, robust; "Not just X, it's Y"; forced triads; "-ing" tails ("…, ensuring peace of mind"); invented testimonials and metrics; chatbot voice and placeholder residue; emoji bullets | `copy-and-perception.md` §2 |

## Tool fingerprints (verified in source, 2026-10)

These are good defaults. The problem is shipping them unchanged on a product with its own subject and data.

| Default | Source | Resulting tell |
|---|---|---|
| `bg-indigo-500` primary buttons | Tailwind UI (2020), per its author | Indigo or violet primary on unrelated products |
| `rounded-xl border shadow-sm` on every Card; `rounded-full` Badge | shadcn/ui `new-york-v4` | Identical rounded cards; pills everywhere |
| `lucide-react` icons | shadcn/ui; OpenAI's GPT-5 guide | The same outline icons on every product |
| Geist + Geist Mono | `create-next-app` template | Geist body with mono labels |
| Tailwind, shadcn/ui, Lucide, Inter, Geist recommended for new apps | OpenAI GPT-5 prompting guide (Aug 2025) | Model output converging on one stack |
| "+12.5%", "Trending up this month" KPI cards | shadcn/ui `dashboard-01` block | Generic dashboard KPI row |

**Apply:** re-theme the library (color, radius, type, spacing tokens) before generating screens, and override
component defaults per role. Optional linter: Impeccable (`npx impeccable detect <path or URL>`, 62 rules) as a check,
not as taste. A clean run is evidence, not proof. Allow-list deliberate brand choices.

## How much it costs: risk by context

People can't reliably tell what's AI-made [E1], so they react to cues of low effort. The penalty lands when AI
authorship is labeled, exposed, or inferred [E1]. Unlabeled, well-made AI creative can match human work on clicks
[E1/E2]. Full table and studies: `copy-and-perception.md` §3.

| Risk | Contexts | Bar |
|---|---|---|
| **High** | Art, illustration, craft, handmade; premium, luxury, heritage; emotional messages (holiday, apology, founder letter); health; news and editorial; local businesses (inferred); Gen Z (higher than marketers expect) | Every visible word and image has a human decision and a fact only this brand could supply. Real photography and people. Disclose AI by role. |
| **Medium** | Finance (copy and claims high, imagery moderate), mainstream consumer brands, social campaigns | Remove every tell cluster; real proof only; consistency across the series. |
| **Low** | Performance banners, product listings, functional UI copy, documentation, internal tools, mood boards | Accuracy and clarity; nothing invented; tells removed. |

Brand cases (verified 2026-10, `imagery-and-brand.md` §8): Levi's (2023), Toys"R"Us (2024), Coca-Cola (2024 and
2025), Call of Duty (2024–25), Guess in Vogue (2025), J.Crew (2025), McDonald's Netherlands (pulled Dec 2025), REI
(2026). Audiences attacked uncanny faces and motion, inconsistency across shots, replacement of paid people, efficiency
framing on emotional work, and late disclosure. Only the first two can be fixed in post.

**Disclosure (verified 2026-10):** EU AI Act Art. 50 applies from 2 Aug 2026 (deep fakes must be disclosed; providers
mark outputs machine-readably). YouTube, Meta, and TikTok label realistic AI content and read C2PA Content
Credentials. US Copyright Office (Jan 2025): prompts alone are not authorship. Reserve space for labels in templates
and keep provenance metadata through export. Not legal advice. Details: `imagery-and-brand.md` §9.

## The slop test (sign-off)

Run on every deliverable. Items 1–4 are blockers. Two or more failures elsewhere mean revise before presenting.
Then run the medium-specific test in the matching reference file.

1. **Truth:** every testimonial, logo, name, metric, award, and product image is real, sourced, and permitted.
2. **Residue:** no placeholders, brackets, lorem ipsum, chatbot phrases, or generated text inside images.
3. **States and floor:** loading, empty, error, disabled, and long-content states exist (for UI); AA contrast,
   visible focus, reduced motion, and 320 px reflow pass.
4. **Substitution:** swap in a competitor's name and logo. If the hero, imagery, and copy still work, it's generic.
5. **Reasons:** you can name why this primary color, typeface, layout concept, and image style, each from the brief.
6. **Re-run:** a similar prompt for another client wouldn't land on the same design.
7. **Cluster count:** no more than two unrequested tells from the quick index.
8. **Structure is information:** every eyebrow, number, border, badge, dot, arrow, divider, and icon tile encodes
   something.
9. **One memorable thing**, everything else quiet. Motion is one orchestrated moment plus responses to actions.
10. **Images are authored:** chosen lens, light, grade, and casting; one light source; no default model look.
11. **Copy is specific:** each block has a concrete noun, number, or mechanism; fewer than two scan-list words.
12. **You looked:** you viewed a screenshot at desktop and phone size, or the image at 100% and 200%.

## Reference files (open the section you need; search for the heading)

| File | Open when | Contents |
|---|---|---|
| `references/ui-and-web.md` | Building or reviewing app, web, landing, dashboard, or design-system UI, in code or Figma | Why generated UI converges, tool defaults verified in source, dated timeline 2024–26, catalog (color, type, layout, components, motion, copy, imagery, dashboards, craft gaps), tells by tool, 12-question UI slop test, Apply for code, Figma, and critique |
| `references/imagery-and-brand.md` | Directing or reviewing photos, illustration, 3D, video, logos, identities, social, ads, posters, packaging; deciding whether to use generation at all | Detection research, tell tables per medium, fading vs. durable tells, 8 brand cases, disclosure and law, direction techniques, campaign consistency rules, prompt do/don't, when AI imagery is acceptable, imagery slop test |
| `references/copy-and-perception.md` | Writing or reviewing any words in a design; justifying the cost of looking AI-made; disclosure decisions | Term origin and definition, convergence and homogenization research, copy tells (hero, rhythm, formatting, proof, microcopy, social), word lists by era, the specificity rewrite, perception and disclosure studies, risk by context, copy slop test |

Related skills: `visual-styles` (the legitimate versions of styles that slop imitates: gradient-aurora-mesh,
dark-tech-saas, bento-grid, glassmorphism, corporate-flat-illustration, claymorphism), `design-history` (precedent as
method, not pastiche), `cognitive-psychology` (dark patterns: invented proof fails the Truth test),
`accessibility` (the quality floor generated UI often misses).
