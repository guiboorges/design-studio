# design-studio — Roadmap

A Claude Code plugin that gives you a full design team: 20 specialist agents, a shared,
research-verified knowledge base, and workflows for everything from design systems to billboards.

Principles:

- **One source of truth.** Knowledge lives once, in knowledge skills. Agents load what they need; they never duplicate it.
- **Verified, cited.** Every knowledge file is researched, fact-checked, and lists its sources. Volatile specs (social formats, platform guidelines) carry a "last verified" date.
- **Evidence-graded.** Claims are marked by strength: established research, practitioner consensus, or popular-but-weak (e.g. most color-psychology claims, golden-ratio myths).
- **Ethical persuasion.** Cognitive biases are taught alongside the dark-pattern catalog and explicit guardrails.
- **Tool-agnostic, integration-ready.** Works with just text; gets more capable with Figma, image generation, Canva, and code.

## Architecture

```
.claude-plugin/marketplace.json        # repo = marketplace
plugins/design-studio/
├── .claude-plugin/plugin.json
├── skills/
│   ├── <knowledge-skill>/SKILL.md     # < 500 lines: principles + index
│   │   └── references/*.md            # deep, cited material, loaded on demand
│   └── <workflow-skill>/SKILL.md      # /design-studio:<name>, orchestrates agents
└── agents/<specialist>.md             # preloads its knowledge skills via `skills:`
```

- **Orchestration runs in the main thread.** The creative director is a skill, so it can call specialist agents in parallel. Specialists are defined without the `Agent` tool (subagents could otherwise nest up to three levels), which keeps cost predictable.
- **Agents preload knowledge** through the `skills:` frontmatter. Deep reference files load only when needed.
- **Reliable auto-triggering.** Skill descriptions lead with "Use whenever…" trigger conditions. A `SessionStart` hook
  (`hooks/hooks.json`, ~120 tokens once per session) tells the model to consult the design-studio skills before answering
  design tasks, because headless tests showed the model otherwise answers spec questions from memory. Root cause: Claude Code
  gives skill descriptions 1% of the context window and drops the descriptions of the least-used skills first when many
  plugins are installed, so a new plugin's descriptions are the first to disappear. The hook names the skills directly.
- **Two platforms, one source.** Claude Code is primary. Codex support adds a root `plugins/design-studio/plugin.json`,
  a Codex marketplace at `.agents/plugins/marketplace.json`, and custom agents in `plugins/design-studio/codex/agents/*.toml`.
  The agents are generated from `agents/*.md` by `scripts/build-codex-agents.py`; never edit them by hand.
  `codex/install.sh` installs the agents (Codex plugins can't bundle them) and an optional `AGENTS.md` routing note
  (the Codex equivalent of the SessionStart hook).
- **Figma integration is optional.** The plugin works with `figma@claude-plugins-official` when it is installed but does not require it, so users without Figma can still install.
- **Versioning.** `version` is set in both manifests (`.claude-plugin/plugin.json` and the Codex `plugin.json`), starting at
  `1.0.0`. Bump both on every release, or users won't receive updates.

Install:

```
/plugin marketplace add guiboorges/design-studio
/plugin install design-studio@design-studio
```

---

## Phase 1 — Foundation + Creative Director

### Knowledge skills (loaded by agents, not usually invoked by users)

| # | Skill | Contents |
|---|-------|----------|
| 1 | `design-history` | **Masters**: graphic (Rand, Bass, Glaser, Vignelli, Müller-Brockmann, Tschichold, Lubalin, Aicher, Crouwel, Fletcher, Chermayeff & Geismar, Scher, Carson, Brody, Greiman, Sagmeister & Walsh, Bierut, Kenya Hara, Ikko Tanaka), product/industrial (Rams, Ive, Charles & Ray Eames, Loewy, Sottsass, Castiglioni, Jacobsen, Fukasawa, Newson, Jongerius), digital/UX (Norman, Nielsen, Cooper, Kare, Krug, Tufte, Frost, Victor), type designers (Frutiger, Miedinger, Zapf, Carter, Spiekermann, Licko, Frere-Jones), **web & interactive** — pioneers and standards (Nielsen, Zeldman, Marcotte, Monteiro, Dave Shea / CSS Zen Garden, Luke Wroblewski, Jen Simmons, Rachel Andrew, Aarron Walter, Jared Spool), the Flash/experimental era (Joshua Davis, Hillman Curtis, Yugo Nakamura, 2Advanced), UI/product creators (Zhenya Rynzhuk, Tobias van Schneider, Rauno Freiberg, Emil Kowalski, Bruno Simon), studios (Ueno, Active Theory, Locomotive, Hello Monday, Resn, Lusion, Immersive Garden, Obys, Instrument, Work & Co, Darkroom/Studio Freight), and the award ecosystem as a reference source (Awwwards, FWA, CSS Design Awards, Webby). For each: key works, principles, and what to borrow today; studio entries record current status (merged, acquired, closed). **Movements**: Arts & Crafts → Art Nouveau → Art Deco → Constructivism → De Stijl → Bauhaus → Swiss/International → Mid-century → Psychedelia → Pop → Postmodernism → Memphis → New Wave → Grunge/Deconstruction → Digital eras. |
| 2 | `visual-styles` | Catalog of contemporary aesthetics: minimalism, Apple-style, Swiss revival, flat, Material, skeuomorphism, neumorphism, glassmorphism / Liquid Glass, brutalism & neo-brutalism, bento grids, editorial, maximalism, Y2K, retro-futurism, vaporwave, claymorphism, gradient/aurora, Scandinavian, luxury/dark, anti-design, kinetic type, corporate illustration… Each with: origin, visual DNA, **token recipe** (type, color, radius, shadow, spacing, motion), audiences it fits, when to avoid, reference examples. |
| 3 | `cognitive-psychology` | Cognitive biases relevant to design (~40, each with design application + ethical limit), Laws of UX (Hick, Fitts, Jakob, Miller, Tesler, Von Restorff, Peak-End, Doherty, Zeigarnik, Serial Position, Aesthetic-Usability…), Gestalt principles, attention & scanning (F/Z/layer-cake patterns), cognitive load, mental models, Kahneman System 1/2, Cialdini's principles, Fogg Behavior Model, Hook model, color psychology (evidence-graded), dark-pattern catalog. |
| 4 | `typography` | Anatomy, classification (Vox-ATypI and modern), pairing logic, modular scales, measure/leading/tracking, hierarchy, web & variable fonts, licensing, legibility per medium (screen, print, distance). |
| 5 | `color` | Theory (Itten, Albers), harmonies, color spaces (sRGB, Display P3, OKLCH, CMYK, Pantone), palette construction and tonal scales, contrast (WCAG 2.2, APCA), dark mode, cultural meaning. |
| 6 | `layout-composition` | Grid systems (column, modular, baseline, 8-pt, editorial), hierarchy, white space, visual weight & balance, proportion systems (with evidence notes), responsive layout. |
| 7 | `accessibility` | WCAG 2.2 AA/AAA in practice, inclusive design, cognitive accessibility, motion sensitivity, accessible color/type, testing checklist. |
| 8 | `media-specs` | Digital (Apple HIG, Material 3, web breakpoints), social formats per platform (dated), print (bleed, CMYK, resolution, ISO/US paper, magazine production), out-of-home (billboard sizes, viewing distance → letter height, word count, contrast), packaging basics. |

### Creative Director (orchestrator skill, auto-triggers on design requests)

- `creative-director` — receives briefs, asks the right questions, diagnoses audience and goal, chooses style direction, assembles the team per project, and signs off.

### Specialists shipped early (Sonnet)

Nine specialists whose knowledge already exists were pulled forward so the creative director can delegate:
`design-critic`, `typographer`, `color-specialist`, `accessibility-specialist`, `art-director`,
`social-media-designer`, `print-ooh-designer`, `ui-designer`, `editorial-designer`. They run on Sonnet
(`model: sonnet`) to keep multi-agent projects affordable. The creative director runs on the session's model and keeps
direction, integration, and sign-off. Measured on Opus for every agent: one wave of 3 specialists cost $4.62.

### Workflow skills (user-invocable)

- `/design-studio:brief` — structured creative brief from a vague request.
- `/design-studio:critique` — critique of any design against principles, audience, and accessibility.

---

## Phase 2 — Design System + UI/UX

**Knowledge**: `design-systems` (atomic design, token architecture primitive→semantic→component, W3C DTCG format, Figma variables & modes, component anatomy, documentation, governance, reference systems: Material, Carbon, Polaris, Primer, Fluent, HIG, Spectrum, Atlassian), `ux-methods` (research methods, JTBD, personas, journeys, IA, Nielsen's heuristics, usability testing), `motion` (12 principles applied to UI, easing, duration, choreography).

**Agents**: `design-producer`, `design-critic`, `ux-researcher`, `behavioral-psychologist`, `ux-writer`, `accessibility-specialist`, `interaction-motion`, `ui-designer`, `design-system-architect`, `design-engineer`.

**Workflows**: `/design-studio:design-system`, `/design-studio:ui-screen`, `/design-studio:ux-audit`.

**Integrations**: Figma MCP (files, variables, components, layouts); code export (DTCG JSON, CSS variables, Tailwind, React).

---

## Phase 3 — Brand, editorial & print

**Knowledge**: `brand-identity` (positioning, archetypes, logo typology, identity systems, brand voice), `editorial-print` (magazine anatomy, grids, prepress), `out-of-home`, `social-media-design`.

**Agents**: `brand-strategist`, `identity-designer`, `typographer`, `color-specialist`, `editorial-designer`, `print-ooh-designer`, `social-media-designer`.

**Workflows**: `/design-studio:identity`, `/design-studio:editorial`, `/design-studio:campaign`, `/design-studio:social`.

**Integrations**: Canva (social and print pieces).

---

## Phase 4 — Image & art direction

**Knowledge**: `image-direction` (photographic language: lens, light, composition, color grading; illustration styles; moodboards), `image-prompting` (prompt structure per model family, consistency, references, upscaling, legal/ethical notes).

**Agents**: `art-director`, `image-generation`.

**Workflows**: `/design-studio:moodboard`, `/design-studio:image`.

**Integrations**: model-agnostic image generation (whatever image MCP the user has connected).

---

## Release

README (EN), install instructions, examples gallery, CONTRIBUTING (how to add knowledge with sources), MIT license, versioned releases.
