# Polish Date Master - Changelog

## Version 1220 (2026-01-20)

### 🎯 Close Button Redesign
- **Repositioned:** Moved from bottom center to **top right corner**
- **Smaller size:** 40px circle (36px on mobile) - no longer covers content
- **Icon-only:** Shows "×" symbol instead of "Back" text
- **Better styling:** White circle with subtle shadow, red on hover
- **Dark mode:** Dark background with white X in dark mode

### 📏 Table Width Fixes  
- **Transformation 2:** Narrower (400px → 350px on mobile, 2 columns only)
- **Mode A & Mode B:** No horizontal scroll (text wraps naturally)
- **Smart scrolling:** Only wide tables (3+ columns) scroll

### 🌙 Dark Mode Support
- Auto-detects device preference (`prefers-color-scheme`)
- Dark navy backgrounds (#1a1a2e)
- Light text (#e0e0e0) for readability
- Color coding preserved

### 🔧 Technical Changes
- Service Worker: v1220
- CSS: 38KB (close button repositioned, dark mode, table fixes)
- HTML: Button text removed (icon-only now)
- Files organized in `polish-date-master-v1220/` folder

---

## Version 1218 (2026-01-20)
- Dark mode support (superseded by v1220)

## Version 1217 (2026-01-20)
- Mobile table scrolling fixes

## Version 1214 (Previous)
- Last version before mobile fixes
