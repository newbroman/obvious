# Polish Language App - v1324

✅ rules.js: Replace hardcoded white/gray backgrounds with CSS variables
✅ styles.css: Add dark mode support for card backgrounds
✅ sw.js: Updated cache version to v1324

## 🌙 Dark Mode Support for Grammar Rules

### Fixed Background Issues
**Problem**: Grammar Rules page had hardcoded white backgrounds that didn't respect dark mode
**Solution**: Replaced all hardcoded backgrounds with CSS variables

**Changes**:
- `background: white;` → `background: var(--card-bg);`
- `background: #f8f9fa;` → `background: var(--subtle-bg);`
- `background: #fffbf0;` → `background: var(--highlight-bg);`

### New CSS Variables
**Light Mode**:
- `--card-bg: #ffffff` (white cards)
- `--subtle-bg: #f8f9fa` (light gray for Notice boxes)
- `--highlight-bg: #fffbf0` (light yellow for highlights)

**Dark Mode**:
- `--card-bg: #1e1e1e` (dark cards)
- `--subtle-bg: #252525` (darker gray for Notice boxes)
- `--highlight-bg: #2a2a1a` (dark yellow-tinted for highlights)

### User Experience
- ✅ All boxes in Grammar Rules now respect device dark mode setting
- ✅ "Notice" boxes have proper dark backgrounds in dark mode
- ✅ Structure and Example boxes adapt to theme
- ✅ No more white boxes on dark backgrounds
- ✅ Smooth, consistent experience across light/dark modes

### All Previous Features Still Work
- ✅ Grammar Rules title translates (v1323)
- ✅ No horizontal scrolling tables (v1323)
- ✅ Swipe navigation (v1322)
- ✅ Complete translation coverage (v1321)

Deploy:
tar -xzf polish-date-master-v1324.tar.gz
cd ~/obvious && cp -r polish-date-master-v1324/* .
git add . && git commit -m "v1324: Dark mode support for Grammar Rules!" && git push
