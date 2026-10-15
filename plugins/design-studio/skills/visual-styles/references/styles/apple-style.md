# Apple Style

> **Scope:** Apple's product-marketing aesthetic (apple.com, keynotes) and its platform UI language as defined by the Human Interface Guidelines (HIG), including Liquid Glass (2025) and its 2026 refinements.
> **Last verified:** 2026-10
> **Used by:** creative-director, ui-designer, art-director, design-system-architect

## Origin & context

| Date | Event |
|------|-------|
| 1950s–60s influence | Dieter Rams' work for Braun influenced Apple designer Jony Ive, and many Apple products pay tribute to it [1]. |
| Oct 29, 2012 | Apple announces that Jony Ive will "provide leadership and direction for Human Interface (HI) across the company" and that Scott Forstall will leave Apple [2]. |
| Jun 10, 2013 | iOS 7 unveiled: a full redesign with translucency, layered UI, refined typography, and an understated palette. Ive: "There is a profound and enduring beauty in simplicity, in clarity, in efficiency." [3] This ended Apple's skeuomorphic era (see `skeuomorphism.md`). |
| Jun 22, 2020 | macOS Big Sur announced (released Nov 12, 2020). It was the first macOS UI redesign since Yosemite, with new blurs for hierarchy and more consistent, squarer icons [4]. |
| Jun 9, 2025 | Apple introduces **Liquid Glass**, "a translucent material [that] reflects and refracts its surroundings." Its color is "informed by surrounding content" and adapts between light and dark. It is used from buttons, switches, sliders, and media controls up to tab bars, sidebars, the Lock Screen, Home Screen, notifications, and Control Center. It ships in iOS 26, iPadOS 26, macOS Tahoe 26, watchOS 26, and tvOS 26. Alan Dye (VP of Human Interface Design) called it "our broadest software design update ever." [5] |
| Sep 2025 | HIG Materials page updated with revised Liquid Glass guidance (change log: Sep 9, 2025) [6]. |
| Oct 10, 2025 | NN/g publishes "Liquid Glass Is Cracked, and Usability Suffers in iOS 26" (see Fits / Avoid) [7]. |
| Nov 3, 2025 | iOS 26.1 released [8]. It adds a Liquid Glass setting to choose "between the default clear look or a new tinted look," which "increases opacity of the material in apps and notifications on the Lock Screen" [9]. Later 26.x releases add Lock Screen opacity control (26.2) and make Reduce Motion "more reliably" reduce Liquid Glass animations (26.4) [9]. |
| Dec 3, 2025 | Reported departure of Alan Dye to Meta. Stephen Lemay, an Apple designer since 1999, takes over the role, per Tim Cook's statement [10]. |
| Dec 16, 2025 | HIG Color page updated with revised Liquid Glass guidance [11]. |
| Jun 2026 (WWDC26) → Sep 2026 | iOS 27 keeps Liquid Glass with "more uniform refraction and improved contrast" and "a new slider [that] lets you easily customize how Liquid Glass looks, from ultraclear to fully tinted" [12][13]. **Status as of 2026-10:** Liquid Glass is the shipping design language across Apple platforms, now user-adjustable. |

**Cultural reason:** Apple uses a small number of strong signatures (product-as-hero photography, a single system typeface, generous space) so its marketing reads instantly as Apple. Its UI language aims to unify the platforms. Liquid Glass separates a floating "functional layer" (controls, navigation) from content across every Apple platform [5][6].

## Visual DNA

**Marketing (apple.com, keynotes):**
- The product is the hero: large, centered, photographed or rendered on pure white, light gray (`#f5f5f7`), or black.
- Headline-first composition with short, declarative lines. A single sans (SF Pro) with tight tracking at display sizes [14].
- Alternating light and dark full-bleed sections. Scroll-driven reveals and sticky product shots.
- Rounded "tile" cards and **bento grids** for feature summaries (see `bento-grid.md`) [15].
- Pill-shaped buttons with `border-radius: 980px` [14].
- Frosted navigation (`backdrop-filter: blur(20px)` on product pages) [15].

**Platform UI (HIG, Liquid Glass era):**
- Two layers. Liquid Glass forms "a distinct functional layer for controls and navigation elements … that floats above the content layer." Don't use it in the content layer [6].
- Two variants. **Regular** blurs and adjusts luminosity for legibility and is used by most system components. **Clear** is highly translucent and meant only over visually rich media [6].
- Glass has no inherent color. Tint only primary actions or status, and apply the color to the background rather than to the symbol or text [11].
- System fonts are SF Pro (sans) and New York (serif), variable with dynamic optical sizes. Text styles drive Dynamic Type [16].
- Controls float and can collapse or change with context (e.g., the collapsing tab bar). Scroll-edge effects replace solid bars [6][7][17].

## Token recipe

| Token | Starting value | Notes |
|-------|----------------|-------|
| Typography: families | Apple platforms: system font (SF Pro / SF Compact / New York) via system APIs; don't embed [16]. Web: apple.com stack `"SF Pro Text","SF Pro Icons","Helvetica Neue",Helvetica,Arial,sans-serif` [14]. Non-Apple brands should substitute Inter or similar. | Check Apple's font license terms before using SF fonts outside Apple-platform UI. |
| Typography: iOS scale (Large, default) | Large Title 34/41, Title 1 28/34, Title 2 22/28, Title 3 20/25, Headline 17/22 semibold, **Body 17/22**, Callout 16/21, Subhead 15/20, Footnote 13/18, Caption 1 12/16, Caption 2 11/13 (pt size/leading) [16]. | Minimum sizes: iOS 11pt, macOS 10pt; defaults: iOS 17pt, macOS 13pt [16]. |
| Typography: marketing web | Observed on apple.com: 40px/1.1/600, 32px/1.125/600, 28px/1.14/600, 21px/1.19/400, 17px/1.18–1.24/400, 12px/1.33/400 [14]. | Roughly a 1.2 ratio at the top end, with steep jumps to hero sizes. |
| Typography: weights | 600 for headlines, 400 body; HIG: avoid Ultralight, Thin, and Light, especially at small sizes [16]. | |
| Typography: letter-spacing | apple.com: −0.022em at 17px, −0.016em at 14px, −0.01em at 12px, slightly positive (+0.002 to +0.012em) at 19–32px [14]. | On platform, the system font adjusts tracking automatically [16]. |
| Color: marketing palette | Text `#1d1d1f` oklch(23.2% 0.004 286.1) (16.83:1 on white); surface `#f5f5f7` oklch(97.1% 0.003 286.4); secondary `#6e6e73` (5.07:1 on white, 4.66:1 on `#f5f5f7`); tertiary `#86868b` (3.62:1 on white, so large text only); link/CTA `#0071e3` oklch(56.3% 0.193 256.2) (4.70:1 either way with white); dark-mode link `#2997ff` (6.96:1 on black) [14][15]. | Contrast ratios computed from the observed values. |
| Color: platform | Use system colors and semantic roles, which have light, dark, and increased-contrast variants. If you define custom colors, supply all variants, even in single-appearance apps, "to support Liquid Glass adaptivity" [11]. | Apple updated system color values on Jun 9, 2025 [11]. Don't hard-code legacy hex values. |
| Radius | Marketing: pill buttons 980px; tiles 18px; small UI 8–10px [14][15]. Platform: use system component shapes. For nested custom shapes, set inner radius = outer radius − padding. | |
| Borders | Rarely used. Separation comes from fills and material, not strokes. | |
| Shadows / elevation | Marketing: almost none; depth comes from product renders. Platform: elevation is expressed by material (glass) plus scroll-edge effects [6]. | |
| Material | Regular glass for bars, sidebars, alerts, popovers. Clear glass only over photos and video. If the content under clear glass is bright, add a **35% opacity dark dimming layer** [6]. Web approximation: `background: rgb(255 255 255 / 0.6); backdrop-filter: blur(20px) saturate(180%);` with an opaque fallback. | Honor Reduce Transparency and Increase Contrast. Their effect on Liquid Glass is system-defined [6]. |
| Spacing / grid | iOS: respect safe areas, system margins, and size classes [17]. Marketing: section padding 80–160px; bento gap 20px [15]. | |
| Imagery & iconography | Product renders on seamless backgrounds; SF Symbols, weight-matched to adjacent text [16]. | |
| Motion | apple.com: `cubic-bezier(0.4, 0, 0.6, 1)` at 240–320ms for UI reveals [14]. Platform: system springs; Liquid Glass reacts to touch and motion with specular highlights [5]. | Always provide reduced-motion paths. |
| Texture / effects | None besides glass. No noise, no gradients on UI chrome. | |

## Signature examples

| Example | Year | Why |
|---------|------|-----|
| iOS 7 | 2013 | Flat, translucent reset of iOS under Jony Ive [3]. |
| macOS Big Sur | 2020 | Blurs for hierarchy, unified icon shape [4]. |
| iOS 26 / macOS Tahoe 26 with Liquid Glass (Camera, Photos, Safari, FaceTime, Music, News, Podcasts) | 2025 | Liquid Glass as a cross-platform material [5]. |
| iOS 27 with transparency slider | 2026 | Readability refinements and user control over Liquid Glass opacity [12][13]. |
| apple.com MacBook Pro page "bento-grid" feature summary | Observed 2026-10 | Apple's own markup names the pattern `bento-grid` / `bento-item` [15]. |

## Fits / Avoid

**Fits:** premium hardware and consumer tech; apps that should feel native on Apple platforms; product launches; brands that compete on craft and restraint.

**Avoid / adapt:** brands that need warmth or noise to differentiate (Apple style reads as "generic tech" when copied without Apple's photography); data-dense B2B tools (glass and floating controls cost density and legibility); cross-platform products that must also feel native on Android (see `material-design.md`).

**Evidence on people:**
- NN/g's expert review of iOS 26 found that translucent controls over busy content lose contrast, that floating and auto-hiding controls hurt predictability, that touch-target conventions were weakened, and that animation "for motion's sake" distracts [7]. **[E2]** This is a heuristic expert review, not a controlled study.
- Apple's own changes are consistent with these legibility concerns: the Clear/Tinted option in iOS 26.1 [9] and the ultra-clear-to-tinted slider plus contrast tuning in iOS 27 [12][13]. **[E2]**

**Accessibility risks:** text and icons on clear glass over images; low-contrast tertiary gray (`#86868b` on white = 3.62:1, below 4.5:1 for body text) [18]; motion-heavy morphing controls for users with vestibular sensitivity [19]; icon-only back buttons.

**When it ages badly:** copied glass effects without Apple's adaptive rendering look like 2007-era Aero (see `glassmorphism.md`). Hero-product layouts without hero-quality photography look empty.

**Limit:** Don't imitate Apple's trade dress (product renders, the Apple logo, Apple's lockups) in non-Apple brand work, and check Apple's license terms for SF fonts and SF Symbols before using them outside Apple platforms.

## Across media

| Medium | How it translates |
|--------|-------------------|
| App UI (Apple platforms) | Use system components. They adopt Liquid Glass automatically. Limit custom glass to the most important functional elements [6]. Support Dynamic Type at all sizes [16]. |
| Website | Product hero plus one-line headline, alternating light and dark full-bleed bands, bento summary, pill CTA in `#0071e3`-like blue, frosted sticky nav with opaque fallback. |
| Social post | Product on seamless background, 3–6 word headline in a semibold sans, lots of negative space, no badges or starbursts. |
| Print / editorial | Single object per spread, white or black grounds, small type, generous margins. |
| Billboard | Full-bleed product or photograph, a few words, and the logo. The image does the work. |

## Common mistakes

- Putting glass everywhere, including in the content layer. The HIG explicitly says not to [6].
- Using clear glass over bright imagery without a dimming layer [6].
- Tinting many glass controls. Reserve color for primary actions and status [11].
- Ultralight or Thin system weights at small sizes [16].
- Treating `#86868b`-style grays as body-text colors.
- Shipping only one appearance. Liquid Glass adaptivity needs light, dark, and increased-contrast colors [11].
- Ignoring Reduce Transparency and Reduce Motion, which users can now actively adjust [9][12].

## Pairs well with / Related styles

- **Roots:** `minimalism.md` (Rams), `swiss-international.md`.
- **Platform siblings:** `glassmorphism.md` (Liquid Glass is Apple's adaptive, system-level take on glass), `flat-design.md` (iOS 7 to iOS 18 era).
- **Layout partner:** `bento-grid.md`.
- **Contrast with:** `material-design.md` (Google's platform language), `neo-brutalism.md` (deliberately un-Apple).

## Sources

[1] Wikipedia contributors. (n.d.). *Dieter Rams*. Wikipedia. https://en.wikipedia.org/wiki/Dieter_Rams (secondary source; accessed 2026-10)
[2] Apple. (2012, October 29). *Apple Announces Changes to Increase Collaboration Across Hardware, Software & Services*. Apple Newsroom. https://www.apple.com/newsroom/2012/10/29Apple-Announces-Changes-to-Increase-Collaboration-Across-Hardware-Software-Services/
[3] Apple. (2013, June 10). *Apple Unveils iOS 7*. Apple Newsroom. https://www.apple.com/newsroom/2013/06/10Apple-Unveils-iOS-7/
[4] Wikipedia contributors. (n.d.). *macOS Big Sur*. Wikipedia. https://en.wikipedia.org/wiki/MacOS_Big_Sur (secondary source; accessed 2026-10)
[5] Apple. (2025, June 9). *Apple introduces a delightful and elegant new software design*. Apple Newsroom. https://www.apple.com/newsroom/2025/06/apple-introduces-a-delightful-and-elegant-new-software-design/
[6] Apple. (2025). *Materials*. Human Interface Guidelines (change log: Liquid Glass guidance added Jun 9, 2025, updated Sep 9, 2025). https://developer.apple.com/design/human-interface-guidelines/materials
[7] Budiu, R. (2025, October 10). *Liquid Glass Is Cracked, and Usability Suffers in iOS 26*. Nielsen Norman Group. https://www.nngroup.com/articles/liquid-glass/
[8] Wikipedia contributors. (n.d.). *iOS 26* (version history table). Wikipedia. https://en.wikipedia.org/wiki/IOS_26 (secondary source; accessed 2026-10)
[9] Apple. (n.d.). *What's new in the updates for iOS 26* (sections 26.1, 26.2, 26.4). Apple Support. https://support.apple.com/en-us/123075
[10] 9to5Mac. (2025, December 3). *Apple design VP Alan Dye departing for Meta*. https://9to5mac.com/2025/12/03/apple-design-vp-alan-dye-departing-for-meta/ (secondary source reporting Bloomberg and Tim Cook's statement)
[11] Apple. (2025). *Color*. Human Interface Guidelines (change log: Jun 9, 2025 updated system colors; Dec 16, 2025 updated Liquid Glass guidance). https://developer.apple.com/design/human-interface-guidelines/color
[12] Apple. (2026). *iOS 27*. https://www.apple.com/os/ios/ (accessed 2026-10)
[13] Apple. (2026, September 29). *About iOS 27 Updates*. Apple Support. https://support.apple.com/en-us/149076
[14] Apple. (2026). apple.com homepage and global stylesheets (values observed by inspecting the CSS on 2026-10). https://www.apple.com/
[15] Apple. (2026). *MacBook Pro* product page and stylesheets (`bento-grid`, `.ric-bento-gap { gap: 20px }`, `.tile-rounded` 18px, `backdrop-filter: blur(20px)`; observed 2026-10). https://www.apple.com/macbook-pro/
[16] Apple. (n.d.). *Typography*. Human Interface Guidelines. https://developer.apple.com/design/human-interface-guidelines/typography
[17] Apple. (n.d.). *Layout*. Human Interface Guidelines. https://developer.apple.com/design/human-interface-guidelines/layout
[18] W3C. (2023). *Understanding SC 1.4.3 Contrast (Minimum)* (WCAG 2.2). https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html
[19] W3C. (2023). *Understanding SC 2.3.3 Animation from Interactions* (WCAG 2.2). https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html
