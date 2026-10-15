# Glassmorphism

> **Scope:** Frosted-glass UI: translucent, background-blurred panels layered over colorful content. Covers its lineage (Windows Aero, iOS 7, Fluent Acrylic, macOS Big Sur), the 2020 trend, its relation to Apple's Liquid Glass, and its accessibility problems.
> **Last verified:** 2026-10
> **Used by:** creative-director, ui-designer, art-director, design-system-architect

## Origin & context

| Date | Event |
|------|-------|
| 2006–2007 | **Windows Vista / Aero.** Enterprise availability Nov 30, 2006, general availability Jan 30, 2007. Its visual effects included "blurred glass translucencies and dynamic glass reflections" [1]. Aero required a capable GPU (DWM, pixel shader 2.0, WDDM drivers) [2]. |
| 2009 | Windows 7 refines Aero, with glass borders users could tint or make opaque [2]. |
| 2012 | Windows 8 replaces glass with flat Metro. Transparency is removed except on the taskbar, which loses its blur [2]. |
| Jun 10, 2013 | iOS 7 introduces translucency and layered UI in a flat context [3]. |
| 2017 | Microsoft's **Fluent Design System** adds the **Acrylic** material [4][5]. Acrylic is built from background, blur, exclusion blend, color/tint overlay, and noise [6]. |
| Jun 22, 2020 | **macOS Big Sur** announced (released Nov 12, 2020), with "new blurs to establish a visual hierarchy" [7]. |
| 2020 | The term **"glassmorphism"** is coined by Michał Malewicz [8]. It becomes a Dribbble and web trend and partly succeeds neumorphism [8][9]. |
| Jun 7, 2024 | NN/g publishes "Glassmorphism: Definition and Best Practices," calling it a trend since 2020 [10]. |
| Sep 2024 | CSS `backdrop-filter` reaches Baseline ("Newly available") across current major browsers [11]. |
| Jun 9, 2025 | Apple introduces **Liquid Glass**, a translucent material that "reflects and refracts its surroundings" [12]. Wikipedia describes it as a shift away from the iOS 7 flat aesthetic, inspired by visionOS [8]. |
| Mid-2020s | Per Wikipedia, glassmorphism begins replacing flat design more widely, with translucent and blurred elements reported in Android 17, HarmonyOS, and One UI 8.5 [8]. (Secondary report; verify per platform before relying on it.) |

**Relation to Liquid Glass:** Glassmorphism is a static web/UI *look* (a translucent fill plus a fixed blur). Liquid Glass is a *system material*. It renders in real time with refraction and specular highlights, adapts its color and light/dark appearance to the content beneath, appears more opaque in larger elements such as sidebars, and changes appearance when users choose Tinted, Reduce Transparency, or Increase Contrast [12][13][14][21]. Treat Liquid Glass as Apple's adaptive, accessibility-aware glass. Don't imitate it with a fixed CSS blur on non-Apple platforms.

## Visual DNA

- Translucent panels (frosted glass) over vivid backgrounds: gradients, blobs, photos [10].
- Background blur behind the panel; a light 1px semi-transparent stroke suggests the glass edge [10].
- Layered depth: several panes at different blur and opacity levels.
- Soft, large radii; subtle shadow under panes.
- Colorful "aurora" or mesh-gradient backdrops so the blur has something to show.
- Acrylic adds noise texture and an exclusion blend for legibility [6].

## Token recipe

| Token | Starting value | Notes |
|-------|----------------|-------|
| Typography: families | Clean sans (Inter, SF Pro, Segoe UI Variable). | Use weight 500+ on glass. Thin strokes break up over blur. |
| Typography: scale | 1.2–1.25; body 16px minimum on glass. | |
| Typography: weights | 500 body on glass, 600–700 headings. | |
| Typography: letter-spacing | 0 to +0.005em. | |
| Color: structure | Vivid backdrop (2–3 hues) + glass fill (white or black at low alpha) + solid text color + one accent. | |
| Color: glass fill | Light: `rgb(255 255 255 / 0.55–0.70)`. Dark: `rgb(20 20 28 / 0.55–0.70)`. Avoid alpha below 0.4 behind text. | NN/g illustrates opacity at 90/60/30%. Lower opacity shows more background and reduces legibility [10]. |
| Color: example contrast | White text over a blurred mid-blue area (`#7FA7FF`) = 2.37:1 (**fails**). Over a darkened area (`#3B4A7A`) = 8.58:1. Near-black `#111111` over a pale blurred area (`#DCE6FF`) = 15.11:1. | Test against the lightest and darkest regions that can scroll beneath the panel [15]. |
| Blur | `backdrop-filter: blur(20px) saturate(160%)` for UI panels; 24–40px over busy photos. | NN/g: "More background blur is better, especially with intricate backgrounds." At 30% opacity, 25px blur keeps edges distinguishable; 100px blends them [10]. |
| Dimming layer | Over bright media, add a dark layer at about 35% opacity under light text. | Apple's guidance for clear Liquid Glass [13]. |
| Radius | 16–28px for panels; 12px for controls; pill for chips. | |
| Borders | `1px solid rgb(255 255 255 / 0.35)` (light) or `rgb(255 255 255 / 0.12)` (dark). Gradient strokes for depth [10]. | Decorative only. Controls still need a ≥3:1 cue [16]. |
| Shadows / elevation | `0 8px 32px rgb(0 0 0 / 0.18)`. | |
| Spacing / grid | 8px base; 24–32px internal padding. Don't place panes edge to edge, which creates seams (Acrylic guidance) [6]. | |
| Imagery & iconography | Mesh gradients, abstract 3D blobs, photography; filled icons (survive blur better than hairline). | |
| Motion | 200–300ms fades and translate; parallax of background behind glass sparingly. | Respect reduced motion [17]. |
| Texture / effects | Noise 2–4% inside the pane (Acrylic recipe) [6]. | |
| Fallbacks | `@supports not (backdrop-filter: blur(1px))` → opaque fill; `@media (prefers-reduced-transparency: reduce)` → opacity ≥0.9 or solid; `@media (prefers-contrast: more)` → solid + border. | `prefers-reduced-transparency` has limited browser support (not Baseline) [18], so solid fallbacks must not depend on it alone. |

## Signature examples

| Example | Year | Why |
|---------|------|-----|
| Windows Vista Aero Glass | 2006–2007 | Mass-market blurred glass chrome [1][2]. |
| iOS 7 Control Center and translucent bars | 2013 | Translucency in a flat system [3]. |
| Fluent Acrylic (context menus, flyouts, NavigationView) | 2017 → | Documented, accessibility-aware glass material [6]. |
| macOS Big Sur | 2020 | Blur for hierarchy across the OS [7]. |
| Apple Liquid Glass (iOS 26 → iOS 27) | 2025–2026 | Adaptive glass as a platform language [12][19]. |

## Fits / Avoid

**Fits:** overlays and transient surfaces (menus, popovers, toolbars, media controls) that should keep context visible [6]; music, photo, and video apps; hero sections and marketing visuals; OS-level chrome.

**Avoid:** long-form reading surfaces; forms; dashboards with dense text; large background panels (Microsoft: don't put desktop acrylic on large app backgrounds [6]); low-powered devices (rendering acrylic is GPU-intensive and is disabled in Battery Saver [6]).

**Evidence on people:**
- The main problem is text readability: text that is "too light or too dark" or backgrounds that are "too busy." Translucent components put text over multiple colors, so contrast can fail in parts [10]. **[E2]**
- Expert review of iOS 26 found that translucent controls over content lose contrast and compete with content [20]. Apple then added Clear/Tinted (iOS 26.1) and a transparency slider (iOS 27) [14][19]. **[E2]**
- No controlled study isolating glass effects on task performance was found in this pass.

**Accessibility risks:** contrast that varies with scroll position; accent-colored text on acrylic (Microsoft says such combinations likely fail at 14px) [6]; hyperlinks over acrylic [6]; motion-driven background parallax [17]; reliance on `prefers-reduced-transparency` alone [18].

**When it ages badly:** heavy glass everywhere reads as Vista-era. Fixed CSS glass that ignores user settings now looks worse next to adaptive system materials.

**Limit:** Glass is for chrome, not content. Body text and critical data go on opaque or near-opaque surfaces.

## Across media

| Medium | How it translates |
|--------|-------------------|
| App UI | Use the platform material (Liquid Glass via system components, Fluent Acrylic or Mica, Android blur where supported) instead of custom blur. Apply it to transient and navigation layers only [6][13]. |
| Website | Sticky glass header with opaque fallback; one glass card over a gradient hero; content sections opaque. |
| Social post | Glass cards over vivid gradients or photos. Readable at thumbnail size only with bold type and darkening. |
| Print / editorial | Simulate with vellum overlays, transparent stock, or frosted effects. On-screen blur doesn't print well. |
| Billboard | Avoid fine translucency; a single bold frosted panel over a photo can work if text sits on ≥0.8 opacity. |

## Common mistakes

- Glass on glass (stacked translucent layers), which Microsoft calls "distracting optical illusions" [6].
- Low-opacity panes over busy photos with thin white text.
- No fallback where `backdrop-filter` is unsupported or disabled.
- Panes placed edge to edge, which creates seams [6].
- Accent-colored text on glass [6].
- Treating the decorative 1px white stroke as a sufficient control boundary [16].

## Pairs well with / Related styles

- **Lineage:** `skeuomorphism.md` (Aero, Frutiger Aero), `flat-design.md` (iOS 7 translucency).
- **Platform implementations:** `apple-style.md` (Liquid Glass), `material-design.md` (contrast: tonal surfaces instead of glass).
- **Predecessor trend:** `neumorphism.md` [8].
- **Backdrops:** `gradient-aurora-mesh.md` (the vivid backgrounds glass needs).
- **Layout partners:** `bento-grid.md` (glass tiles), `minimalism.md` (one glass element on a quiet page).

## Sources

[1] Wikipedia contributors. (n.d.). *Windows Vista*. Wikipedia. https://en.wikipedia.org/wiki/Windows_Vista (secondary source; accessed 2026-10)
[2] Wikipedia contributors. (n.d.). *Windows Aero*. Wikipedia. https://en.wikipedia.org/wiki/Windows_Aero (secondary source; accessed 2026-10)
[3] Apple. (2013, June 10). *Apple Unveils iOS 7*. Apple Newsroom. https://www.apple.com/newsroom/2013/06/10Apple-Unveils-iOS-7/
[4] Wikipedia contributors. (n.d.). *Fluent Design System*. Wikipedia. https://en.wikipedia.org/wiki/Fluent_Design_System (secondary source; accessed 2026-10)
[5] Wikipedia contributors. (n.d.). *Flat design*. Wikipedia. https://en.wikipedia.org/wiki/Flat_design (secondary source; accessed 2026-10)
[6] Microsoft. (2026, October 2 update). *Acrylic material – Windows apps*. Microsoft Learn. https://learn.microsoft.com/en-us/windows/apps/design/style/acrylic
[7] Wikipedia contributors. (n.d.). *macOS Big Sur*. Wikipedia. https://en.wikipedia.org/wiki/MacOS_Big_Sur (secondary source; accessed 2026-10)
[8] Wikipedia contributors. (n.d.). *Glassmorphism*. Wikipedia. https://en.wikipedia.org/wiki/Glassmorphism (secondary source; accessed 2026-10)
[9] Wikipedia contributors. (n.d.). *Neumorphism*. Wikipedia. https://en.wikipedia.org/wiki/Neumorphism (secondary source; accessed 2026-10)
[10] Brown, M. (2024, June 7). *Glassmorphism: Definition and Best Practices*. Nielsen Norman Group. https://www.nngroup.com/articles/glassmorphism/
[11] MDN Web Docs. (n.d.). *backdrop-filter*. Mozilla. https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter
[12] Apple. (2025, June 9). *Apple introduces a delightful and elegant new software design*. Apple Newsroom. https://www.apple.com/newsroom/2025/06/apple-introduces-a-delightful-and-elegant-new-software-design/
[13] Apple. (2025). *Materials*. Human Interface Guidelines. https://developer.apple.com/design/human-interface-guidelines/materials
[14] Apple. (n.d.). *What's new in the updates for iOS 26*. Apple Support. https://support.apple.com/en-us/123075
[15] W3C. (2023). *Understanding SC 1.4.3 Contrast (Minimum)* (WCAG 2.2). https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html
[16] W3C. (2023). *Understanding SC 1.4.11 Non-text Contrast* (WCAG 2.2). https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html
[17] W3C. (2023). *Understanding SC 2.3.3 Animation from Interactions* (WCAG 2.2). https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html
[18] MDN Web Docs. (n.d.). *prefers-reduced-transparency*. Mozilla. https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-transparency
[19] Apple. (2026). *iOS 27*. https://www.apple.com/os/ios/ (accessed 2026-10)
[20] Budiu, R. (2025, October 10). *Liquid Glass Is Cracked, and Usability Suffers in iOS 26*. Nielsen Norman Group. https://www.nngroup.com/articles/liquid-glass/
[21] Apple. (2025). *Color* (Liquid Glass color section). Human Interface Guidelines. https://developer.apple.com/design/human-interface-guidelines/color
