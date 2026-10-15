# From Reference to Design System to Working Product

> **Scope:** The tested workflow for turning a reference image or brief into a Figma design system, then into a working coded product, plus the tool traps that cost time.
> **Last verified:** 2026-10 (Figma MCP plugin skills v2.2.127, Vite 8, React 19)
> **Used by:** creative-director, ui-designer, art-director

Worked example: **Summit**, a smart-home dashboard design system and app built with this plugin in October 2026 [2][3]. The user approved each stage before the next one started. Items marked **(tested)** were observed while building it; they are not documented by Figma.

## 1. The sequence

Each stage ends with something the user can look at and approve. Never spend on the next stage before that.

| Stage | Output | Gate |
|---|---|---|
| 1. Decisions | 2–3 questions, each with a recommended option | User answers |
| 2. Spec line | Palette with computed contrast, type scale, spacing, the style reference used | (internal) |
| 3. Figma foundations | Pages, variables, text and effect styles, icons, imagery | — |
| 4. Figma components and screens | Components bound to variables; screens built from instances, in both modes | User approves screenshots |
| 5. Tokens in code | DTCG tokens + generated CSS in `library/design-systems/<name>/` | — |
| 6. Working product | App on a simulated or real data layer, with tests | Verified with screenshots and a scripted test |
| 7. Publish | Repo, deploy, README with screenshots, release | User approves any public text |

**Apply:**
- **Stage 1.** Ask only what changes the work: the name, the imagery source (AI-generated, vector, or none), and the modes (dark and light, or one). Read free-text answers closely; they can change the theme. For example, a mountain chart in the reference became "lake houses for a smart-home manager".
- **Stage 2.** Load `color` (contrast-and-dark-mode) and the matching `visual-styles` file. Compute every text and background ratio with the WCAG formula before you choose values (`color` skill).
- **Stage 4.** Show a screenshot of every screen. Fix what you see, take one more screenshot, then ask for approval.
- **Adding views later.** Design them in Figma first. Reuse the existing components and add only the ones that are missing.

**Limit:** do not jump to code because it is faster. A code-first build the user did not ask for was rejected and wasted their budget (see "Output channels" in SKILL.md).

## 2. Figma file structure

| Page | Contents |
|---|---|
| Cover | Hero image, name, version, what's inside |
| Foundations · Color | Primitive ramps; semantic roles side by side in Dark and Light, each with its alias, hex, and computed contrast; rules |
| Foundations · Typography | Specimen; every text style with size, line height, tracking, and use |
| Foundations · Spacing & Effects | Spacing scale, radii, elevation, glows, glass |
| Assets · Icons & Imagery | Icon components (instance-swap); generated or licensed images with their source |
| Components | One section per component or family, each with a title and a description |
| Patterns · Cards | Compositions of components, with usage notes |
| Screens | Every screen in Dark and Light |

**Variables:**
- **Primitives:** one mode, `scopes = []` so they stay hidden from pickers.
- **Color:** semantic roles that alias the primitives, with modes Dark and Light.
- **Spacing:** space and radius values.
- **On every variable:** set explicit scopes (fills, text, strokes, gap, radius) and WEB code syntax `var(--name-role)` [1].

**Pinned modes:** a frame can force a mode with `setExplicitVariableModeForCollection`. Use it for:
- cards with photos (pin Dark, so text over the image keeps its contrast in both themes);
- a contrasting sidebar (pin Light inside a dark screen).

Build the light version of a screen by cloning it and pinning Light on the clone.

## 3. Figma traps

| Trap | Fix |
|---|---|
| `resize()` silently resets both auto-layout sizing modes to FIXED [1] | Call `resize()` first, then set `layoutSizingHorizontal = 'FILL'`/`'HUG'`. |
| Reading a width for chart geometry before the node is in its final layout gives a stale value (tested) | Append the frame, set FILL, then read `width` and draw the chart. |
| `resize()` on a sublayer inside an **instance** is silently ignored (tested) | Make the track an auto-layout frame and use its **right padding** as the value. Padding can be overridden. Document the formula in the component description. |
| A TEXT component property added to a variant set forces one default text on every variant (tested) | Accept it, or set the per-variant text on the instances. |
| A failed `use_figma` script rolls back everything it did (tested) | Fix the cause and rerun the whole script; nothing is half-built. |
| An empty auto-layout frame used as a spacer is 100 px tall by default (tested) | Set `layoutSizingVertical = 'FIXED'` and a height of 1, or use `layoutGrow`. |
| A variable-bound paint with opacity below 1 renders the base color (tested) | Pass the real resolved color as the base color, or use an unbound rgba for glass. |
| Sections and pages are light by default (tested) | Set the section `fills` and page `backgrounds` for dark documentation. |
| `setFileThumbnailNodeAsync` is not supported in the MCP runtime, and setting `fontFeatures` on a text style throws (tested) | Skip them. |
| `get_metadata` may list one page only (tested) | Always enumerate `figma.root.children`. |

**Images:**
- **Cropping:** `scaleMode: 'CROP'` with an `imageTransform` cuts several views from one image, for example four security-camera views from two photos.
- **Generated images:** `generate_image` returns a different pixel size than requested, and it costs the user's Figma AI credits. Say so before generating.
- **Exporting:** export images with `get_screenshot` at their original size and download the URL.

## 4. Tokens and code

**Tokens:**
- **Format:** write DTCG JSON (`color`, `typography`, `layout`). Semantic roles reference primitives (`{primitive.orange.400}`).
- **Generated CSS:** a small script outputs `--name-*` custom properties and is the only file the product imports.
- **Theme rules:** dark-first products put Dark on `:root` and switch to Light under `prefers-color-scheme: light` or `[data-theme="light"]`.
- **Mode pins:** add `.name-light` and `.name-dark` classes that redefine the roles, so code can pin a subtree like Figma does.

**App layer:**

| Part | How |
|---|---|
| Data | Pure functions for the model and the simulation (`src/sim/*.ts`), each tested, plus one hook that owns state, the clock tick, and `localStorage` |
| Navigation | One hash route per tab (`#rooms`), so screenshots and links can target a view |
| Charts | SVG with `preserveAspectRatio="none"` and `vector-effect: non-scaling-stroke`; draw dots and labels in HTML so they stay round and sharp |
| Grids | `minmax(0, 1fr)` instead of `1fr`; a plain `1fr` track keeps its min-content width and overflows on phones |
| Selectors | Scope chart rules (`.flow > svg`), so they do not hit icon SVGs inside the same container |

**Simulated data:** when there is no real data source, show history that is plausible and stable. Generate it from a seeded function of the date, so values don't change on reload. Live values must react to the user's actions. Say plainly in the UI and the README that the data is simulated.

## 5. Verify before showing

1. **Unit tests** on the model: totals, energy balance, scene and automation triggers.
2. **Production build:** check that it passes.
3. **Headless Chrome screenshots:** dark, light, and each route. Compare them with the Figma screens.
4. **Phone width:** headless Chrome enforces a minimum window of about 500 px (tested). Load the app in a 390 px `<iframe>` and check `document.documentElement.scrollWidth` for overflow.
5. **Scripted interactions:** drive the app inside an iframe with `--dump-dom`. Click switches, set range inputs through the native value setter plus an `input` event, submit forms, and print the resulting text.

Then publish under the user's repository conventions, showing any public text first.

## Sources

[1] Figma. (2026). *figma-use skill: SKILL.md and references/gotchas.md*, Claude Code Figma plugin v2.2.127. Rules on `resize()` resetting sizing modes, variable scopes, and code syntax.
[2] Borges, G. (2026). *Summit Home: smart home dashboard on a simulated lake house* (v1.1.0). GitHub. https://github.com/guiboorges/summit-home
[3] Design Studio. (2026). *Summit design system* (tokens, CSS, previews). GitHub. https://github.com/guiboorges/design-studio/tree/main/library/design-systems/summit
