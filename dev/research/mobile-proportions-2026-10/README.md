# Mobile proportions research (2026-10)

Evidence behind `plugins/design-studio/skills/layout-composition/references/mobile-proportions.md`.

- `platforms.md`: Apple HIG / WWDC25 / SwiftUI and UIKit docs, Material 3 tokens, reach research. Documented values are kept apart from measured ones.
- `probe/`: the iOS layout probe (`main.swift`) and its logs from the iOS 27.0 simulator (Xcode 27.1; iPhone 17e, 17, Air, 18 Pro Max). Apple doesn't publish control, bar, or row heights in points, so they were measured.
- `measured.md`: 11 pages (7 Apple, plus Stripe, Linear, Vercel, Nike) measured at 390×844 and 1440×900 with headless Chromium on 2026-10-26, plus Apple's `typography-*` tokens per breakpoint.
- `web/`: the measurement and CSS-parsing scripts.

These are snapshots. Re-measure before relying on them after 2027-04.
