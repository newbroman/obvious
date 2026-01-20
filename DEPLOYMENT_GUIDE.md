# 🚀 Deployment Guide - Polish Date Master v1219

## Quick Deploy

```bash
# Extract
tar -xzf polish-date-master-v1219.tar.gz
cd polish-date-app-deploy

# Copy to repo
cd ~/obvious
cp -r ../polish-date-app-deploy/* .

# Commit and push
git add .
git commit -m "v1219: Floating back button, dark mode, table fixes"
git push origin main
```

Wait 1-2 minutes, then test at: https://newbroman.github.io/obvious/

---

## What Changed in v1219

### Files Modified
1. **index.html** - Button text changed to "Back", bottom buttons removed
2. **styles.css** - Added floating button CSS + table width fixes + dark mode
3. **sw.js** - Version bump to v1219

### Files Unchanged
- All JavaScript (app.js, events.js, etc.)
- Assets (icons, manifest)
- Data files (namedays.json)

---

## Testing After Deploy

### 1. Floating Back Button
**On mobile:**
- [ ] Navigate to Rules page (⚖️ icon)
- [ ] Scroll down the page
- [ ] **Button should float at bottom** (always visible)
- [ ] Button says "Back" (short label)
- [ ] Click it - returns to calendar
- [ ] Try Cultural page (📖 icon) - same behavior

**Expected:** Blue floating button with shadow, stays at bottom while scrolling

### 2. Table Widths
**On mobile (Rules page):**
- [ ] **Transformation 1 table** (Cardinal → Ordinal):
  - Should scroll horizontally (3 columns)
  - "← Swipe to see all columns →" indicator visible
  
- [ ] **Transformation 2 table** (Nominative → Genitive):
  - **Should be narrower** (2 columns only)
  - Should scroll but less distance than before
  - Easier to read on mobile
  
- [ ] **Mode A section** ("It is..."):
  - Should NOT scroll
  - Text wraps naturally
  - No scroll indicator
  
- [ ] **Mode B section** ("It's on..."):
  - Should NOT scroll
  - Text wraps naturally
  - No scroll indicator
  
- [ ] **Quick Reference table**:
  - Should scroll horizontally (3 columns)
  - "← Swipe to see all columns →" indicator visible

### 3. Dark Mode
**On your device (from photos):**
- [ ] Enable dark mode in device settings
- [ ] Open app, navigate to Rules page
- [ ] Background should be dark navy
- [ ] Content boxes should be dark slate (NOT white!)
- [ ] Floating button should be visible (blue)
- [ ] Text should be light gray (readable)
- [ ] Switch device to light mode
- [ ] Everything should look normal (original design)

---

## Troubleshooting

### Floating button not appearing?
**Check:**
1. Hard refresh browser (Ctrl+Shift+R)
2. Clear browser cache
3. Check DevTools console for errors
4. Verify sw.js shows v1219

### Tables still too wide?
**Check:**
1. Verify you're on Rules page (not another page)
2. Hard refresh to get new CSS
3. Check if browser supports `:has()` selector (Safari 15.4+, Chrome 105+)
4. Older browsers will show all tables at 580px (still scrollable)

### Dark mode not working?
**Check:**
1. Device actually in dark mode (Settings → Display → Dark theme)
2. Browser supports `prefers-color-scheme` (2019+ browsers)
3. Hard refresh after enabling dark mode
4. Service worker updated to v1219

---

## Rollback Instructions

If issues arise:

```bash
git revert HEAD
git push origin main
```

Or restore from Obvious checkpoint: "Before fixing back buttons and table widths"

---

## Version History

- **v1219** (2026-01-20): Floating button, table fixes, dark mode
- **v1217** (2026-01-20): Mobile table scrolling
- **v1214** (Previous): Before mobile fixes

---

**Deploy with confidence!** 🚀
