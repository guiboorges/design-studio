# Immersive 3D / WebGL

> **Scope:** Browser-rendered real-time 3D experiences (WebGL/WebGPU via Three.js and similar), where the scene, camera, and physics are the interface: what defines the style, how to build it, and when it hurts more than it helps.
> **Last verified:** 2026-10
> **Used by:** creative-director, ui-designer, art-director, design-system-architect

## Origin & context

- **The enabling stack.** Three.js was first released on GitHub by Ricardo Cabello ("Mr.doob") in April 2010; the code began in ActionScript (Flash) and was ported to JavaScript in 2009 [1]. WebGL 1.0, the Khronos Group's browser API based on OpenGL ES 2.0, shipped on March 3, 2011; WebGL 2.0 (OpenGL ES 3.0) was finalized in January 2017; WebGPU is being developed to supersede WebGL [2]. Together these let the "Flash experience" era of interactive brand sites return as open web technology.
- **Studios that defined the look.** Active Theory was founded in summer 2012 by Michael Anthony, Andy Thelander, and Nick Mountford in Los Angeles (Venice), and built Google I/O experiences such as the multiplayer browser game *Racer* (2013) and *Paper Planes* (2016), plus a 3D tour of Hogwarts for Pottermore; it built an in-house 3D toolset so designers could build scenes with less code [5]. Lusion (UK) won Awwwards Site of the Month in May 2019 for its first studio site and Site of the Year (Developer Award) 2023 for *Lusion v3* [6].
- **The portfolio as playable world.** Bruno Simon's 2019 portfolio, where you drive a small car through a 3D landscape to discover his projects, won Awwwards Site of the Day on November 11, 2019 [3]. The current version (repository "folio-2025") runs on Three.js with WebGL and WebGPU renderers, Rapier physics, gamepad/touch/keyboard controls, and a Low/High quality toggle [4].
- **Tooling lowered the barrier.** react-three-fiber (pmndrs) lets teams write Three.js scenes as React components [8]; Spline is a browser-based 3D design tool that exports embeddable web scenes, so designers can ship 3D without a graphics engineer [9].
- **Cultural reason.** As flat, template-driven sites converged, studios and brands used real-time 3D to signal craft and technical ambition, and award platforms (Awwwards Developer Awards) rewarded it [3][6].

## Visual DNA

- A live 3D scene (not a video) as the hero or the whole site; the camera moves with scroll, pointer, or drag.
- Physically based materials: glass/transmission, metal, iridescence, soft subsurface "plastic."
- Cinematic lighting: HDRI environment maps, bloom, depth of field, film grain.
- Particles, fluid or noise-driven shaders, and morphing geometry responding to the cursor.
- Minimal 2D chrome over the canvas: small grotesk labels, thin lines, a preloader with a percentage counter.
- Game mechanics: driving, physics objects, collectibles, sound design, achievements [4].
- Scroll-driven storytelling, often with pinned sections (scrolljacking) [11].

## Token recipe

| Token group | Starting values |
|---|---|
| Typography | Overlay type is secondary to the scene. Display: neo-grotesk or wide grotesk (e.g., Inter Display, Space Grotesk, Neue Montreal class), weight 400-600 at 64-160 px desktop, letter-spacing -0.02 to -0.04 em. UI labels: 11-13 px, uppercase, tracking +0.06 to +0.12 em, or a mono (JetBrains Mono, IBM Plex Mono) for "technical" captions. Scale ratio 1.333 (perfect fourth) for overlay text. Body copy only on non-canvas sections, 16-18 px. |
| Color | Dark stage, light-emitting subject. Background `#0A0A0B` (oklch(0.14 0.003 286)); ink `#EDEDED` (16.9:1 on bg); muted ink `#8B8B93` (5.85:1); one saturated accent from the scene's key light, e.g. `#5B5BF0` (oklch(0.56 0.21 277)), use white text on it (5.0:1), not as text on the dark bg (3.96:1, fails 4.5:1 body). Light-stage variant: `#F2F0EC` bg with soft-shadowed matte objects. Render with ACES Filmic tone mapping and sRGB output so colors match CSS. |
| Radius | Overlay UI 0-8 px (crisp) or full pill for floating controls; 3D objects carry their own bevels (0.02-0.05 scene units). |
| Borders | 1 px hairlines at 10-16% white alpha on dark (`rgba(255,255,255,0.12)`); frame-corner marks for HUD feel. |
| Shadows / elevation | No CSS shadows on the canvas; elevation comes from scene lighting, contact shadows, and ambient occlusion. Overlay panels: `backdrop-filter: blur(12-20px)` over a 60-70% opaque fill so text stays legible. |
| Spacing / grid | Full-bleed canvas; overlay on a 12-column grid, 24-40 px outer margin, 8 px base unit. Keep a fixed "safe zone" for nav and CTA that never overlaps busy geometry. |
| Imagery & iconography | glTF/GLB models (Draco or meshopt geometry compression, KTX2 textures); baked lighting for static scenes; icons 1.5 px line, monochrome. |
| Motion | Camera moves 0.8-1.6 s, ease `power3.inOut` / cubic-bezier(0.65, 0, 0.35, 1). Continuous follow uses damping (lerp 0.06-0.12 per frame). Hover response < 100 ms. Target 60 fps; cap `devicePixelRatio` at 2. Provide a reduced-motion path (static camera, no auto-rotation) via `prefers-reduced-motion` [10]. |
| Texture / effects | Post-processing stack: bloom (threshold ~0.8, low intensity), film grain 2-4% opacity, vignette, optional chromatic aberration < 1 px. Use at most 2-3 passes on mobile. |

## Signature examples

| Work | Year | Why it matters |
|---|---|---|
| Three.js (library) | 2010 | The open-source foundation of most of the style [1]. |
| Active Theory, *Paper Planes* for Google I/O | 2016 | Browser-based multiplayer 3D at event scale [5]. |
| Bruno Simon portfolio (drivable car world) | 2019; rebuilt 2025 | Defined "portfolio as a game"; Awwwards SOTD Nov 11, 2019 [3][4]. |
| Lusion studio site | 2019 (SOTM May 2019); *Lusion v3* SOTY Developer 2023 | Benchmark for real-time material and physics craft [6]. |
| Igloo Inc (abeto, Bureaux) | 2024 | Awwwards SOTD July 23, 2024; scroll-driven 3D corporate landing page [7]. |

## Fits / Avoid

**Fits:** creative studios and portfolios; product launches where form and material are the story (hardware, automotive, fashion objects); entertainment, games, music releases; event microsites with a short life; brand "flagship" moments that sit beside a conventional site.

**Avoid:** task-oriented flows (checkout, account, docs, government, health); audiences on low-end Android devices or metered data; content that must be indexed, scanned, or translated; any site whose main job is to be read.

**Accessibility risks (high):**
- Motion and parallax can trigger dizziness and nausea in people with vestibular disorders; WCAG 2.3.3 (AAA) asks that interaction-triggered motion can be disabled, and 2.2.2 covers motion that starts automatically [10] [E2].
- Scrolljacking disoriented most participants in NN/g usability testing, worst on mobile and when text animates while scroll rate changes [11] [E2].
- The canvas is opaque to screen readers: every piece of content in 3D needs a DOM equivalent (headings, links, alt text).
- Long loads: past ~10 s users lose focus and need progress feedback [12] [E2].

**Apply:** pair the scene with a plain-HTML layer that carries all content and navigation; ship a "Low quality / reduce motion" toggle, as Bruno Simon's site does with its quality setting [4].
**Limit:** never put required information or the primary CTA only inside the 3D scene. The style ages fast when the effect is generic (stock "floating blob", default bloom); tie it to the brand's actual object or idea.

## Across media

| Medium | Translation |
|---|---|
| App UI | Use sparingly: a 3D product viewer, onboarding moment, or reward animation; keep core navigation native 2D. |
| Website | Canvas hero or full experience plus semantic HTML fallback; lazy-load the 3D bundle after first paint. |
| Social post | Export real-time renders as 6-15 s loops (MP4) or stills; the "interactive" quality is lost, so lead with the material and light. |
| Print / editorial | Render high-resolution stills from the same scene; add grain to avoid a sterile CG look. |
| Billboard / OOH | Rendered hero object on a dark or flat field with one line of type; digital OOH can run the animated loop. |

## Common mistakes

- Shipping 20-50 MB of uncompressed models and textures; no loading budget.
- Preloader that blocks all content instead of progressive reveal.
- Pinned scroll sections that take over the first screen and hide navigation [11].
- Light-gray overlay text placed over bright, moving geometry (contrast changes frame by frame).
- No `prefers-reduced-motion` branch; auto-rotating cameras that never stop [10].
- Uncapped pixel ratio on 3x phones, causing thermal throttling and dropped frames.
- Effects stack (bloom + DOF + aberration + grain) applied to everything, flattening hierarchy.

## Pairs well with / Related styles

- `dark-tech-saas.md` (dark stage, glow, hairlines; often the 2D shell around a 3D hero)
- `cyberpunk-futuristic.md` (neon lighting, HUD overlays)
- `claymorphism.md` (soft 3D objects, matte materials on a light stage)
- `kinetic-typography.md` (type as a 3D or shader-driven object)
- `gradient-aurora-mesh.md` (shader gradients as a lighter-weight alternative to full 3D)
- `retro-futurism.md` (chrome and space-age props in real-time scenes)

## Sources

[1] Wikipedia contributors. (2026). *Three.js*. Wikipedia. https://en.wikipedia.org/wiki/Three.js (secondary source)
[2] Wikipedia contributors. (2026). *WebGL*. Wikipedia. https://en.wikipedia.org/wiki/WebGL (secondary source)
[3] Awwwards. (2019). *Bruno Simon Portfolio* (Site of the Day, Nov 11, 2019). https://www.awwwards.com/sites/bruno-simon-portfolio
[4] Simon, B. (2025). *Bruno's portfolio* (live site; source repository "folio-2025"). https://bruno-simon.com/
[5] Communication Arts. (n.d.). *Active Theory* (studio feature). https://www.commarts.com/features/active-theory
[6] Awwwards. (2026). *Lusion* (studio profile and award list). https://www.awwwards.com/lusion/
[7] Awwwards. (2024). *Igloo Inc* (Site of the Day, July 23, 2024). https://www.awwwards.com/sites/igloo-inc
[8] Poimandres (pmndrs). (2026). *react-three-fiber: A React renderer for Three.js*. GitHub. https://github.com/pmndrs/react-three-fiber
[9] Spline. (2026). *Spline: 3D design tool for the web* (product site). https://spline.design/
[10] W3C WAI. (2023). *Understanding Success Criterion 2.3.3: Animation from Interactions* (WCAG 2.2). https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html
[11] Paul, S. (2023). *Scrolljacking 101*. Nielsen Norman Group. https://www.nngroup.com/articles/scrolljacking-101/
[12] Nielsen, J. (1993). *Response Times: The 3 Important Limits*. Nielsen Norman Group (excerpt from *Usability Engineering*). https://www.nngroup.com/articles/response-times-3-important-limits/
