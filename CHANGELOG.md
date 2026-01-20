# Polish Date Master - Changelog

## Version 1217 (2026-01-20)

### 🐛 Bug Fixes
- **Rules Page Mobile Display:** Fixed grammar tables breaking on mobile devices
  - Removed 9 duplicate CSS media query sections causing conflicts
  - Added horizontal scrolling for tables on mobile/tablet
  - Fixed column widths to ensure all 3 columns are visible (110px + 220px + 220px)
  - Added visual scroll indicator: "← Swipe to see all columns →"
  
### 🎨 Improvements
- **CSS Optimization:** Reduced styles.css from 40KB to 30KB
- **Color Coding Preserved:** All grammatical color coding intact (Blue/Gold/Orange/Purple/Red)
- **Touch Scrolling:** Added smooth webkit touch scrolling for better mobile experience
- **Responsive Typography:** Optimized font sizes for mobile (0.7rem - 0.9rem)

### 📱 Mobile Enhancements
- Tables now properly scroll horizontally on screens < 768px
- Fixed table layout with proper column sizing
- Added scroll hints for better UX
- Optimized for iPhone, Android, and iPad devices

### 🔧 Technical Changes
- Service Worker cache version bumped: v1214 → v1217
- Consolidated duplicate media queries into single clean implementation
- Improved CSS specificity and !important usage for mobile overrides

---

## Previous Versions
- v1214: Last stable version before mobile table fix
