---
name: media-specs
description: Use whenever a task names a platform, format, or production medium (Instagram, TikTok, YouTube, LinkedIn, X, Pinterest, iOS, Android, web, email, favicon, print, poster, magazine, billboard, packaging) or asks for sizes, safe zones, bleed, resolution, or file settings. Always check here before quoting any spec: platform specs change, and these are verified with dates and sources (2026-10) and often differ from older, commonly repeated values. Contains: Apple, Material, and Fluent sizes, targets, and icons; web and email; social formats, safe zones, and export; print production (paper, bleed, ink limits, PDF/X, binding, finishes); out-of-home formats and the distance-to-letter-height calculator; packaging dielines, GS1 barcodes, and label text minimums.
user-invocable: false
---

# Media Specs

The right design in the wrong format fails at delivery. This skill holds the numbers for each medium, with the
month each was checked. **Specs change.** Copy the "verified" date along with the value. Re-check any value older
than about 6 months against the cited official page, and always confirm with the printer, media owner, or ad
platform for paid production.

Design technique for these media lives elsewhere: type sizes and legibility in `typography`, grids and safe-zone
composition in `layout-composition`, color conversion in `color`, WCAG rules in `accessibility`.

## Non-negotiable rules

1. **Cite the spec and its date.** Values marked `[unverified]` or "secondary" in the files are working values,
   not facts. Say so when you use them.
2. **The production partner's spec wins.** The printer's house spec, the media owner's template, and the ad
   platform's current guide beat any general value here.
3. **Design masters, then derive.** Social: 1080×1350 (4:5) and 1080×1920 (9:16) masters. Print: final trim
   size + bleed. OOH: a stated working scale. App icons: the 1024px layered master.
4. **Keep text and logos inside safe zones.** Vertical video UIs cover the top ~14% and bottom ~20–35%. Billboards
   are read in seconds. Packaging has regulated areas.
5. **Never hard-code what platforms stopped publishing.** Example: iOS bar heights are no longer in the HIG, so
   use safe-area APIs instead of 44/49pt.
6. **Distance decides type size off-screen.** Use the letter-height calculator for OOH and signage, not
   screen-based instincts.

## Quick values (verified 2026-10 unless marked)

| Need | Value | File |
|---|---|---|
| Touch targets | iOS 44×44pt (28pt min); Android 48×48dp; Fluent 40×40 epx; web 24×24 CSS px AA / 44 AAA | `digital-platforms.md` §8 |
| Default body | iOS 17pt; Android 16sp Body Large; web 16px | `digital-platforms.md` §1 |
| Android window classes | 600 / 840 / 1200 / 1600 dp | `digital-platforms.md` §4.3 |
| App icon | Apple 1024px layered (Icon Composer, Liquid Glass); Android 108dp adaptive, 66dp safe zone | `digital-platforms.md` §3.8, §4.4 |
| Favicon set | favicon.ico 32 + SVG + 180 apple-touch-icon + 192/512 manifest icons | `digital-platforms.md` §6.2 |
| Share image | Open Graph 1200×630 | `digital-platforms.md` §6.3 |
| Email | ~600–640px wide (practitioner value); no web fonts in Gmail/Outlook | `digital-platforms.md` §7 |
| Instagram feed / Reels | Organic photos up to 3:4 (1080×1440); 4:5 for ads; carousel ≤ 20 items / Reels 1080×1920, cover 420×654; safe zone top 14%, bottom 35%, sides 6% | `social-formats.md` §1–2 |
| TikTok | 1080×1920; official safe zone varies with caption length (use TikTok's templates); approx. top 240, bottom 660, sides 120px (secondary) | `social-formats.md` §3 |
| YouTube | 16:9 1920×1080/4K; thumbnail 3840×2160 recommended (2 MB mobile / 50 MB desktop); Shorts ≤3 min, safe zone top 288, bottom 672, left 48, right 192px | `social-formats.md` §4 |
| LinkedIn | 1200×628, 1200×1200, 720×900; PDF carousel ≤300 pages; cover 1512×256 | `social-formats.md` §6 |
| Pinterest | 1000×1500 (2:3) | `social-formats.md` §8 |
| Snapchat | 1080×1920; safe zone top 10%, bottom 35%, sides 6%, right 15% in bottom 45% | `social-formats.md` §9 |
| Universal 9:16 safe box | x 120–888, y 288–1248 on 1080×1920: text and logos survive every platform | `social-formats.md` §10.2 |
| Print default spec | Trim + 3mm / 0.125in bleed; 300 ppi effective; 100K text; PDF/X-4 | `print-production.md` §0 |
| Ink limits | Coated ≈300–340%, uncoated ≈260%, newsprint 200–260%: printers disagree, so ask | `print-production.md` §4 |
| Saddle stitch | Page count in multiples of 4; allow for creep | `print-production.md` §8 |
| Billboard letter height | USSC: ~1 inch of cap height per 30 ft (simple scene) to 20 ft (busy scene) | `out-of-home.md` §2 |
| Billboard copy | ~0.5 s per word; 7 ± 2 words incl. logo and URL ("7" is [E3]) | `out-of-home.md` §3 |
| US bulletin | 14 × 48 ft | `out-of-home.md` §1 |
| EAN-13 barcode | 100% = 37.29 × 22.86 mm with quiet zones; allowed 80–200% | `packaging-basics.md` §5 |
| EU food label text | x-height ≥ 1.2mm (0.9mm on small packs) | `packaging-basics.md` §6 |

## Known gaps to close

Re-checked 2026-10-15 against official pages. Confirmed: Instagram photo ratios, carousel limit, and Reels cover;
YouTube Shorts and Snapchat safe zones; Facebook Page cover; TikTok reservation-ad specs; Threads item limit.
Still secondary or unverified: X help pages (blocked), Instagram grid-tile ratio, organic Reels and TikTok video lengths,
TikTok safe-zone pixel values (TikTok publishes templates, not numbers), WhatsApp Status, magazine trims other than
8.5×11in, the UPC-A quiet zone, and continental transit-shelter sizes. Verify these before paid production.

## Reference files — when to open

| File | Open when |
|---|---|
| `references/digital-platforms.md` | Designing or exporting for iOS, iPadOS, macOS, watchOS, visionOS, tvOS, Android, Windows, web (favicons, OG images, PWA), or email. |
| `references/social-formats.md` | Any social post, story, reel, short, thumbnail, banner, carousel, or ad; safe zones; video export settings. |
| `references/print-production.md` | Any printed piece: paper sizes, bleed, resolution, ink, black, overprint, PDF/X, preflight, paper choice, binding, finishes, magazines, proofs, printing method. |
| `references/out-of-home.md` | Billboards, posters, street furniture, transit, DOOH; letter height by distance; copy length; QR codes; file scale; roadside motion rules. |
| `references/packaging-basics.md` | Packaging artwork: panels, dielines, structural types, shelf impact, barcodes, label text minimums, recycling marks, flexo and white ink, mockups and proofs. |
