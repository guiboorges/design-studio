# Tool Map: Which Tool for Each Stage

> **Scope:** Which tool produces each part of a design job (research, direction, assets, layout, motion, build, publishing, QA), how to tell what is available, and the rules for paid tools and visible delivery.
> **Last verified:** 2026-10 (local recipes tested 2026-10-27: Blender 5.2.2 LTS headless, `@gltf-transform/cli` 4.5.1, ffmpeg all-intra encoding).
> **Used by:** creative-director, ui-designer, art-director

## 1. Rules

1. **Deliver something the user can see.** Every request for a visual deliverable ends with a viewable result: a
   published page, a render, a GIF or screenshot of the work running, or a Figma frame screenshot. A proposal in text is
   a draft. When the user asks only for direction ("no code yet"), still produce one key visual through a free channel
   (a style tile page, a Figma frame, a Blender render of the hero object). Ask first only if it would cost money.
2. **Paid generation needs an OK first.** Before spending credits (Higgsfield and similar), say what you will generate,
   how many items, and the cost if the tool can quote it. Then wait for a yes. One approval covers the batch you
   described, not later batches.
3. **Local apps are free to use.** If an app is installed (Blender, ffmpeg, Node), use it without asking. Check that it
   exists first (§2).
4. **Figma for layout and direction, code for motion.** Screens, grids, and the design system go in Figma first when
   it is connected (`figma-to-product.md`). Scroll, transitions, and timing go straight to a code prototype, because
   motion can't be judged in a static frame (`expressive-web`).
5. **Real beats generated for the subject itself.** Use real photos of the client's product, people, and place
   whenever they exist. Generated images are for exploration, mood, backgrounds, and placeholders marked as such.
   Disclose AI generation where `ai-slop` requires it.
6. **Never claim a tool produced something it didn't.** If a tool is missing or fails, say so, and use the next row's
   alternative.

## 2. Find out what is available

- **Connected tools (MCP):** look for these names in your tool list.
  - Higgsfield: `generate_image`, `generate_video`, `generate_3d`, `generate_audio`, `upscale_image`,
    `remove_background`, `balance`.
  - Figma: `use_figma`, `generate_image`, `create_shader`.
  - Canva: `generate-design`.
  - Browser: `claude-in-chrome`, or the `agent-browser` skill.
  - Publishing: the Artifact tool, Vercel.
- **Local apps:** `command -v blender ffmpeg node npx`. On macOS, also `ls /Applications`, since Blender, DaVinci
  Resolve, and Figma can be installed without a CLI on the PATH. The Blender binary lives at
  `/Applications/Blender.app/Contents/MacOS/Blender`.
- Load each tool's own required skill before its first call (Figma skills, the Higgsfield server instructions,
  `hyperframes` for video, `artifact-design` for published pages).

## 3. Stage map

| Stage | Primary | Alternative | Notes |
|---|---|---|---|
| Research and references | Browser (claude-in-chrome or agent-browser): open, scroll, and probe sites | Web search | Probe method in `expressive-web` → `build-and-qa.md` §6. |
| Direction, moodboard, style tiles | Figma frames | A published page; Higgsfield images for mood | Style tiles as described in the art-director procedure. |
| Hero object, product, or architecture in 3D | **Blender** (headless, §4.1) | Higgsfield `generate_3d` (GLB); procedural Three.js | Blender gives exact, repeatable geometry and lighting: the right choice when several renders must match (states, angles, a turntable). |
| Photographic images, textures, mood | Real photos from the client | Higgsfield `generate_image` + `upscale_image`; Figma `generate_image` | For several images of the same subject, render the base in Blender and use generation only for look-development. |
| Cut-outs | Higgsfield `remove_background` | Blender render with a transparent background (`film_transparent`) | |
| Video loops, hero film, transitions | Real footage; Blender animation rendered to frames | Higgsfield `generate_video`; HyperFrames (code-driven video) | Encode for the web with ffmpeg (§4.2). |
| Scroll-scrubbed image sequence or video | Blender frame sequence → ffmpeg all-intra MP4 (§4.2) | Image sequence drawn to a canvas | Normal MP4s stutter when scrubbed; every frame must be a keyframe. |
| Sound (ambient bed, UI sounds) | Higgsfield `generate_audio` | No sound | Off by default, and opt-in only (`expressive-web` → `build-and-qa.md` §5). |
| Shader effects (grain, distortion, fluid) | Three.js / GLSL in code | Figma `create_shader` for exploration | |
| Screens, layout, design system | Figma (`figma-to-product.md`) | Code with tokens | |
| Motion prototype (signature moment) | Code: one HTML page with GSAP, Lenis, and Three.js (pinned CDN versions, `expressive-web` → `build-and-qa.md` §1), published as a page | Local Vite project | Show it running and tune timing with the user. |
| Final website | Vite (static) or Next.js | Webflow (outside this environment) | |
| Social and print pieces from a campaign | Canva or Figma | | Specs from `media-specs`. |
| Publishing | Prototype: published page (Artifact). Finished site: GitHub Pages or Vercel | Local preview over http | Follow the project's publishing conventions and get the user's OK before anything goes public. |
| QA of motion and performance | Browser: step-scroll, frame sampling, LoAF, reduced-motion emulation, 390 px phone, GIF recording | | `expressive-web` → `build-and-qa.md` §6. |
| Video editing and grading | DaVinci Resolve (manual, by the user) or ffmpeg | HyperFrames | Resolve has no reliable headless mode; give the user a cut list if they edit there. |

## 4. Local recipes (tested 2026-10-27)

### 4.1 Blender, headless

Run a Python script without the interface:

```bash
blender -b --factory-startup -P make_scene.py -- out_dir
# macOS without the CLI on PATH: /Applications/Blender.app/Contents/MacOS/Blender -b ...
```

Skeleton (a lathed vessel, one camera, one area light, a Cycles render, and a GLB export; the full tested script took
about 4 s on CPU at 480×600 and 32 samples):

```python
import bpy, bmesh, math, os, sys
out = sys.argv[sys.argv.index("--") + 1]
bpy.ops.wm.read_factory_settings(use_empty=True)

mesh = bpy.data.meshes.new("vessel"); obj = bpy.data.objects.new("vessel", mesh)
bpy.context.scene.collection.objects.link(obj)
bm = bmesh.new()
profile = [(0.0, 0), (0.35, 0), (0.42, 0.1), (0.5, 0.45), (0.38, 0.8), (0.22, 0.95), (0.25, 1.1)]
vs = [bm.verts.new((r, 0, z)) for r, z in profile]
for a, b in zip(vs, vs[1:]): bm.edges.new((a, b))
bmesh.ops.spin(bm, geom=bm.verts[:] + bm.edges[:], cent=(0, 0, 0), axis=(0, 0, 1), angle=math.tau, steps=64)
bmesh.ops.remove_doubles(bm, verts=bm.verts, dist=1e-4)
bm.to_mesh(mesh); bm.free()
for p in mesh.polygons: p.use_smooth = True

# ... material (Principled BSDF), camera, area light, world color ...

scene = bpy.context.scene
scene.render.engine = "CYCLES"; scene.cycles.device = "CPU"; scene.cycles.samples = 32
scene.render.resolution_x, scene.render.resolution_y = 480, 600
scene.render.filepath = os.path.join(out, "vessel.png")
bpy.ops.render.render(write_still=True)
bpy.ops.export_scene.gltf(filepath=os.path.join(out, "vessel.glb"), export_format="GLB")
```

- **Matching states** (raw clay → fired, closed → open, day → night): keep the camera, lights, and geometry fixed.
  Change only materials or modifiers per state, and render each state to its own file. This is the consistency that
  image generation can't guarantee.
- **Turntables and scrub sequences:** keyframe the object or the camera, set `scene.frame_start`/`frame_end`, and
  render the animation to PNG frames (`bpy.ops.render.render(animation=True)` with `filepath` ending in `f_####`).
- **Drafts vs. finals:** 32 samples for drafts and 128–256 with denoising for finals. Use `film_transparent = True`
  for cut-outs.
- **Optimize GLB for the web** (Draco or meshopt; KTX2 needs the `toktx` binary, which is often missing, so use WebP
  textures instead):

```bash
npx -y @gltf-transform/cli@4 optimize in.glb out.glb --compress meshopt
# tested: 14.46 KB → 5.06 KB on the sample vessel
```

### 4.2 ffmpeg

```bash
# Scroll-scrub video: every frame a keyframe (-g 1), web-friendly, no audio
ffmpeg -framerate 30 -i f_%04d.png -c:v libx264 -g 1 -crf 23 -pix_fmt yuv420p -movflags +faststart -an scrub.mp4

# Ordinary loop for a hero (normal GOP, smaller file)
ffmpeg -i in.mov -c:v libx264 -crf 24 -preset slow -pix_fmt yuv420p -movflags +faststart -an loop.mp4

# Poster frame for LCP
ffmpeg -i loop.mp4 -frames:v 1 -q:v 3 poster.jpg
```

Checked: `-g 1` produced 90/90 keyframes on a 3 s test clip (`ffprobe -show_entries frame=key_frame`).

### 4.3 Higgsfield

- Follow the server's own instructions first. When unsure of the model, use `models_explore` to get a recommendation.
- Before generating, check the cost (`balance`, or the tool's quote) and get the user's OK (rule 2).
- For several related images, generate one approved hero, then use it as the reference for the rest. Or render the
  geometry in Blender and use generation only for texture and mood.
- Batch independent generations and wait for them together. Then show the results to the user before using any in a
  build.

## Sources

Recipes were tested in this environment on 2026-10-27 (Blender 5.2.2 LTS, `@gltf-transform/cli` 4.5.1, ffmpeg via
Homebrew). Tool names come from the connected tool list on the same date. They vary by installation, so check §2 every
time.
