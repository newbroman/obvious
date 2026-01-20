# Polish Date Master - Changelog

## Version 1219 (2026-01-20)

### 🎯 UX Improvements
- **Floating Back Button:** Changed from "← Back to Calendar" to just "Back"
- **Sticky Positioning:** Back button now floats at bottom of screen (always visible)
- **Better Shadows:** Added depth with shadows and backdrop blur
- **Dark Mode Button:** Optimized floating button for dark mode

### 📏 Table Width Fixes
- **Transformation 2 Table:** Reduced width from 580px to 400px (narrower, 2 columns only)
- **Mode A & Mode B Tables:** Removed horizontal scroll (text wraps naturally)
- **Scroll Indicators:** Removed from "Putting It Together" section (not needed)
- **Smarter Layouts:** Tables only scroll when necessary (3+ columns)

### 🌙 Dark Mode Support
- **Auto-detection:** Respects device dark/light mode preference
- **Dark Backgrounds:** Deep navy (#1a1a2e) replaces white
- **Readable Text:** Light gray (#e0e0e0) on dark backgrounds
- **Color Coding:** Blue/Gold/Orange/Purple/Red preserved in both modes

### 📱 Mobile Enhancements
- **Horizontal Scrolling:** Only on wide tables (Transformation 1, Quick Reference)
- **Responsive Tables:** Transformation 2 scales to 350px on mobile
- **Floating Button:** Smaller on tiny screens (480px)
- **Bottom Padding:** Content doesn't get hidden behind floating button

### 🔧 Technical Changes
- Service Worker: v1217 → v1219
- CSS size: 33KB → 38KB (button fixes + table improvements)
- HTML: Updated button labels
- Added `:has()` CSS selector for smart table targeting

---

## Version 1217 (2026-01-20)

### 🐛 Bug Fixes
- Fixed Rules page mobile display
- Removed 9 duplicate CSS media queries
- Added horizontal scrolling for grammar tables
- Fixed column widths (110px + 220px + 220px)

---

## Previous Versions
- v1214: Last version before mobile fixes
