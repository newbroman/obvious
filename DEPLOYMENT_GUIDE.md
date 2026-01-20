# 🚀 Deployment Guide - Polish Date Master v1218

## 🌙 Dark Mode Update!

This version adds **automatic dark mode support** that respects your device's system preference.

---

## Quick Deploy to GitHub Pages

### Step 1: Extract the Package
```bash
tar -xzf polish-date-master-v1218.tar.gz
cd polish-date-app-deploy
```

### Step 2: Copy to Your Repo
```bash
cd ~/path/to/obvious
cp -r /path/to/polish-date-app-deploy/* .
```

### Step 3: Commit and Push
```bash
git add .
git commit -m "v1218: Add dark mode support for Rules page"
git push origin main
```

### Step 4: Test
- Wait 1-2 minutes for GitHub Pages
- Visit: https://newbroman.github.io/obvious/
- **Test in both dark and light mode!**

---

## What Changed in v1218

### Dark Mode Support 🌙
- **CSS:** Added `@media (prefers-color-scheme: dark)` rules
- **Backgrounds:** White boxes → Dark navy/slate in dark mode
- **Text:** Dark text → Light gray in dark mode  
- **Tables:** White backgrounds → Dark backgrounds in dark mode
- **Automatic:** No toggle needed, follows device preference

### Service Worker
- **Version:** v1217 → v1218
- Ensures fresh CSS with dark mode loads

### Files Modified
1. `sw.js` - Version bump to v1218
2. `styles.css` - Dark mode CSS added (30KB → 33KB)

### Files Unchanged
- All JavaScript (app.js, events.js, etc.)
- HTML, manifest, icons
- Data files

---

## Testing After Deploy

### CRITICAL: Dark Mode Testing

**On your phone (the one in the photos):**

1. **Enable dark mode** on your device
   - Android: Settings → Display → Dark theme
   - iOS: Settings → Display & Brightness → Dark

2. **Open the app:** https://newbroman.github.io/obvious/

3. **Navigate to Rules page** (⚖️ icon)

4. **Verify dark mode:**
   - ✅ Background should be dark navy (like your device)
   - ✅ Content boxes should be dark slate (NOT white!)
   - ✅ Text should be light gray (readable)
   - ✅ Tables should have dark backgrounds
   - ✅ Color coding still visible (Blue/Gold/Orange/Purple/Red)

5. **Switch to light mode** on device

6. **Refresh app and check Rules page:**
   - ✅ Background should be light
   - ✅ Content boxes should be white
   - ✅ Text should be dark
   - ✅ Original design preserved

### Mobile Table Scrolling (from v1217)
- [ ] Tables scroll horizontally
- [ ] All 3 columns visible when swiping
- [ ] "← Swipe to see all columns →" appears

### Desktop Testing
- [ ] Open in desktop browser
- [ ] Check Rules page in light mode (default)
- [ ] **Change OS to dark mode** (macOS: System Preferences → General → Appearance → Dark)
- [ ] Refresh browser - Rules page should go dark
- [ ] Switch OS back to light - Rules page should go light

---

## Troubleshooting

### Dark mode not working?

**Check 1: Hard refresh**
- Mobile: Clear browser cache
- Desktop: Ctrl+Shift+R (Cmd+Shift+R on Mac)

**Check 2: Service worker**
- Open DevTools → Application → Service Workers
- Should show v1218 (not v1217 or v1214)
- If old version: Unregister → Hard refresh

**Check 3: Browser support**
- Ensure browser supports `prefers-color-scheme`
- Modern browsers (2019+) support this
- Safari 12.1+, Chrome 76+, Firefox 67+

### Still seeing white backgrounds in dark mode?

**Solution:**
1. Force refresh: Ctrl+Shift+R
2. Clear all site data in browser
3. Close and reopen browser
4. Check sw.js shows v1218

---

## How Dark Mode Works

The app uses CSS media queries to detect your device's color scheme preference:

```css
@media (prefers-color-scheme: dark) {
  /* Dark backgrounds, light text */
}

@media (prefers-color-scheme: light) {
  /* Light backgrounds, dark text */
}
```

**No JavaScript needed** - pure CSS solution!

---

## Rollback Instructions

If dark mode causes issues:

```bash
# Revert to v1217 (before dark mode)
git revert HEAD
git push origin main
```

Or restore from Obvious checkpoint: "Before adding dark mode support"

---

## Version History

- **v1218** (2026-01-20): Dark mode support
- **v1217** (2026-01-20): Mobile table scrolling fix
- **v1214** (Previous): Before mobile fixes

---

**Deploy and enjoy dark mode!** 🌙🇵🇱
