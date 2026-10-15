# Flat Design

> **Scope:** UI style defined by the absence of glossy or 3D effects (solid color fields, simple icons, type-led hierarchy), from Microsoft's Metro (2010) and iOS 7 (2013) to "flat 2.0."
> **Last verified:** 2026-10
> **Used by:** creative-director, ui-designer, art-director, design-system-architect

## Origin & context

| Date | Event |
|------|-------|
| 1950s–60s | Draws on the International Typographic Style, modernism, and the Bauhaus [1]. |
| 1995 → early 2000s | Early Microsoft design-language principles appear in Encarta 95 and MSN 2.0. Windows Media Center favors text-based navigation [2]. |
| 2006–2007 | Zune: large lowercase type, silhouette logos, monochrome type colors [1]. Zune software refreshed with these principles in 2007 [2]. |
| Feb 15, 2010 | Microsoft unveils Windows Phone 7 Series at Mobile World Congress, Barcelona [3]. Metro is formally introduced as the design language, inspired by Swiss graphic design and public-transport signage, with the Segoe type family [2]. |
| Oct 21, 2010 (worldwide) / Nov 8, 2010 (US) | Windows Phone 7 released. Its Start screen is made of "Live Tiles" [3]. |
| 2011 | Android 4.0 "Holo" adopts flatter trends [1]. Windows Phone 7 wins IDEA 2011 awards including Best in Show [2]. |
| 2012 | Windows 8 uses Metro. The name "Metro" is dropped in August amid trademark concerns, and "Microsoft design language" becomes official in September [2]. |
| Jun 10, 2013 | Apple unveils iOS 7: a full redesign with translucency, layers, refined type, and an understated palette, under Jony Ive [4]. Released Sep 18, 2013 [5]. |
| 2014 | OS X Yosemite brings the iOS 7 look to the Mac. Google's Material Design adds shadows for depth [1]. |
| Sep 27, 2015 | NN/g defines "flat 2.0" (semi-flat, almost flat): "mostly flat" but with "subtle shadows, highlights, and layers" [6]. |
| 2017 | Microsoft's Fluent Design adds depth, light, and the Acrylic material, moving away from pure flatness [1]. |
| Mid-2020s | Glassmorphism and Apple's Liquid Glass (2025) mark a further shift away from strict flatness [1][7]. |

**Cultural reason:** Microsoft called the style "authentically digital" [6]. It was a reaction against skeuomorphic imitation of leather, felt, and paper (see `skeuomorphism.md`). It also suited high-density screens, responsive layouts, and the scaling of icons across many sizes.

## Visual DNA

- Solid color fields. No gradients, gloss, bevels, textures, or drop shadows (strict flat) [6].
- Typography carries hierarchy. Metro's lineage was praised for "big, big typography" set in the Segoe family [2].
- Simple, geometric, single-color glyph icons.
- Bright, saturated accent colors on white or black (Metro tiles).
- Content over chrome: borders, button outlines, and bars are minimized or removed.
- Grid-based, card or tile modules (Live Tiles) [3].
- Flat 2.0 adds back subtle shadows, layers, and clear button shapes as signifiers [6].

## Token recipe

| Token | Starting value | Notes |
|-------|----------------|-------|
| Typography: families | Clean sans: Segoe UI (Windows), SF Pro (Apple), Roboto/Inter elsewhere. | Metro used Segoe variants (Zegoe UI on Zune, Segoe WP on Windows Phone) [2]. |
| Typography: scale | 1.25–1.333 ratio. Body 16px, H1 40–48px, Metro-style pivot headers 48–72px. | |
| Typography: weights | 400 body, 600 labels and buttons. Use Light (300) only at ≥32px. | Early iOS 7 and Metro leaned on light weights. Today's HIG advises avoiding Ultralight/Thin/Light at small sizes [8]. |
| Typography: letter-spacing | 0; display −0.01em. | |
| Color: structure | Neutral background (white or near-black) + 4–6 saturated accents with one primary. Semantic colors (success/warn/error) are distinct from brand accents. | |
| Color: example values (Metro-like accents) | Blue `#0078D4` oklch(56.8% 0.167 251.3) (white text 4.53:1); green `#107C10` oklch(51.0% 0.165 142.7) (white 5.37:1); red `#E81123` oklch(59.0% 0.234 26.3) (white 4.63:1); amber `#FFB900` oklch(82.9% 0.171 81.0) (**black** text 12.19:1); dark surface `#2D2D30` oklch(29.8% 0.005 286.1) (white 13.73:1). | Several saturated mid-tones barely clear 4.5:1 with white. Check every tile and text pairing [9]. |
| Radius | 0px (Metro) or 4–8px (flat 2.0). | |
| Borders | None on cards. **Do** give inputs and secondary buttons a ≥3:1 boundary [10]. | |
| Shadows / elevation | Strict flat: none. Flat 2.0: one subtle level, e.g. `0 1px 2px rgb(0 0 0 / 0.12)`, on interactive cards and buttons. | Shadows used as signifiers, not decoration [6]. |
| Spacing / grid | 8px base; tile grid with 8–12px gutters; generous section spacing. | |
| Imagery & iconography | Glyph icons (solid or 2px stroke), 24px grid; flat illustrations with 3–5 colors; photography fine. | Avoid "long shadow" icons. NN/g calls them decorative effects that add no information [6]. |
| Motion | 150–300ms, ease-out `cubic-bezier(0.2, 0, 0, 1)`. Tiles flip and slide; content enters from the edge. | Motion can substitute for missing depth cues, but keep it brief and respect reduced-motion settings [11]. |
| Texture / effects | None. | |

## Signature examples

| Example | Year | Why |
|---------|------|-----|
| Microsoft Zune HD interface | 2009 | Praised by Engadget for "big, big typography" [2]. |
| Windows Phone 7 (Metro, Live Tiles) | 2010 | First full expression of Metro [2][3]. |
| Windows 8 Start screen | 2012 | Metro on desktop [2]. |
| iOS 7 | 2013 | Apple's flat reset [4][5]. |
| OS X Yosemite | 2014 | iOS 7 language on the Mac [1]. |

## Fits / Avoid

**Fits:** content-heavy apps with conventional layouts, cross-platform design systems that need easy theming, icon systems that must scale, low-bandwidth contexts, infographics and onboarding illustration.

**Avoid / adapt:** dense pages with unconventional layouts, feature-discovery flows, and audiences with low digital literacy. Use flat 2.0 (keep signifiers) instead of strict flat.

**Evidence on people:**
- In an NN/g eyetracking study (71 participants, 9 pages, between-subjects), pages with weak clickability signifiers took about **22% longer** to complete the find-the-click part of tasks and drew about **25% more fixations** than strong-signifier versions (both significant). Three page pairs showed no difference: low information density, traditional layout, and high-contrast targets [12]. **[E2]** This is a single practitioner study. The authors note that whole-task slowdowns would be smaller, but wrong clicks could add cost.
- NN/g recommends flat designs only when the site has low information density, a traditional layout, and interactive elements that clearly stand out [12]. **[E2]**
- The aesthetic-usability effect means attractive flat UIs may be *rated* usable even when performance suffers, which can hide problems in testing [13]. **[E2]**

**Accessibility risks:** ghost buttons and text links without underline or contrast; icon-only controls; mid-tone accent tiles with white text near the 4.5:1 threshold [9]; borderless inputs that fail 3:1 non-text contrast [10].

**When it ages badly:** strict-flat 2013–2015 artifacts (long shadows, ultra-thin type, ghost buttons on hero photos) now read as dated. Flat 2.0 has aged well and underlies most current design systems.

**Limit:** Don't remove a signifier unless testing shows users still recognize the control. Flat is a surface style, not permission to hide affordances.

## Across media

| Medium | How it translates |
|--------|-------------------|
| App UI | Flat 2.0: filled primary buttons, outlined secondary buttons with ≥3:1 borders, underlined or colored links, subtle elevation on tappable cards. |
| Website | Solid color sections, flat illustration heroes, icon-feature grids, clear button shapes. |
| Social post | Flat vector illustration plus a bold sans headline. Easy to template across a series. |
| Print / editorial | Infographics, icon sets, wayfinding. Flat is native to print since it never had gloss. |
| Billboard | Solid field, one icon or illustration, one line of type. Excellent long-distance legibility. |

## Common mistakes

- Ghost (outline-only, low-contrast) primary buttons over photos.
- Same color for headings, links, and static labels, so users can't tell what is clickable [12].
- Light weights at body sizes [8].
- Removing all elevation from overlays, so menus and sheets blend into the page.
- Long-shadow or "flat with gradients" hybrids presented as flat.

## Pairs well with / Related styles

- **Ancestor:** `swiss-international.md`. **Reaction against:** `skeuomorphism.md`.
- **Evolutions:** `material-design.md` (flat plus physical depth metaphor), `glassmorphism.md`, `apple-style.md` (iOS 7 → Liquid Glass).
- **Layout cousin:** `bento-grid.md` (Live Tiles lineage).
- **Pairs with:** `minimalism.md`.

## Sources

[1] Wikipedia contributors. (n.d.). *Flat design*. Wikipedia. https://en.wikipedia.org/wiki/Flat_design (secondary source; accessed 2026-10)
[2] Wikipedia contributors. (n.d.). *Metro (design language)*. Wikipedia. https://en.wikipedia.org/wiki/Metro_(design_language) (secondary source; accessed 2026-10)
[3] Wikipedia contributors. (n.d.). *Windows Phone 7*. Wikipedia. https://en.wikipedia.org/wiki/Windows_Phone_7 (secondary source; accessed 2026-10)
[4] Apple. (2013, June 10). *Apple Unveils iOS 7*. Apple Newsroom. https://www.apple.com/newsroom/2013/06/10Apple-Unveils-iOS-7/
[5] Wikipedia contributors. (n.d.). *iOS 7*. Wikipedia. https://en.wikipedia.org/wiki/IOS_7 (secondary source; accessed 2026-10)
[6] Moran, K. (2015, September 27). *Flat Design: Its Origins, Its Problems, and Why Flat 2.0 Is Better for Users*. Nielsen Norman Group. https://www.nngroup.com/articles/flat-design/
[7] Apple. (2025, June 9). *Apple introduces a delightful and elegant new software design*. Apple Newsroom. https://www.apple.com/newsroom/2025/06/apple-introduces-a-delightful-and-elegant-new-software-design/
[8] Apple. (n.d.). *Typography*. Human Interface Guidelines. https://developer.apple.com/design/human-interface-guidelines/typography
[9] W3C. (2023). *Understanding SC 1.4.3 Contrast (Minimum)* (WCAG 2.2). https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html
[10] W3C. (2023). *Understanding SC 1.4.11 Non-text Contrast* (WCAG 2.2). https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html
[11] W3C. (2023). *Understanding SC 2.3.3 Animation from Interactions* (WCAG 2.2). https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html
[12] Moran, K. (2017, September 3). *Flat UI Elements Attract Less Attention and Cause Uncertainty*. Nielsen Norman Group. https://www.nngroup.com/articles/flat-ui-less-attention-cause-uncertainty/
[13] Moran, K. (2024, February 3). *The Aesthetic-Usability Effect*. Nielsen Norman Group. https://www.nngroup.com/articles/aesthetic-usability-effect/
