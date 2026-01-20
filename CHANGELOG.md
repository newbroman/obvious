# Polish Date Master - Changelog

## Version 1218 (2026-01-20)

### 🌙 Dark Mode Support
- **Added full dark mode support** for Rules page using `prefers-color-scheme`
- App now automatically matches device dark/light mode preference
- Dark backgrounds replace white boxes in dark mode
- All text remains readable with proper contrast
- Color-coded grammar (Blue/Gold/Orange/Purple/Red) preserved in both modes

### 🎨 Dark Mode Colors
- Background: Deep navy (#1a1a2e)
- Content boxes: Dark slate (rgba(40, 40, 60, 0.8))
- Tables: Dark background with subtle borders
- Text: Light gray (#e0e0e0) for readability
- Headings: Bright white (#f0f0f0)
- All grammatical colors optimized for dark backgrounds

### 📱 Mobile Enhancements (from v1217)
- Tables scroll horizontally on mobile/tablet
- All 3 columns visible with swipe gesture
- "← Swipe to see all columns →" indicator
- Responsive typography (0.7rem - 0.9rem)

### 🔧 Technical Changes
- Service Worker cache version: v1217 → v1218
- Added `@media (prefers-color-scheme: dark)` CSS
- Added `@media (prefers-color-scheme: light)` CSS
- CSS size: 30KB → 33KB (dark mode rules added)
- All inline white backgrounds overridden in dark mode

---

## Version 1217 (2026-01-20)

### 🐛 Bug Fixes
- Fixed Rules page mobile display issues
- Removed 9 duplicate CSS media queries
- Added horizontal scrolling for grammar tables
- Fixed column widths (110px + 220px + 220px)

### 🎨 Improvements
- CSS optimization: 40KB → 30KB
- Color coding preserved
- Touch scrolling optimized

---

## Previous Versions
- v1214: Last version before mobile fixes
