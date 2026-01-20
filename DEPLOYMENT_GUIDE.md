# 🚀 Deployment Guide - Polish Date Master v1217

## Quick Deploy to GitHub Pages

### Step 1: Extract the Package
```bash
# Extract the tar.gz file
tar -xzf polish-date-master-v1217.tar.gz
cd polish-date-app-deploy
```

### Step 2: Copy to Your Repo
```bash
# Navigate to your GitHub Pages repo
cd ~/path/to/obvious

# Copy all files (this will replace existing files)
cp -r /path/to/polish-date-app-deploy/* .
```

### Step 3: Commit and Push
```bash
git add .
git commit -m "v1217: Fix Rules page mobile table scrolling"
git push origin main
```

### Step 4: Wait and Test
- GitHub Pages takes 1-2 minutes to rebuild
- Visit: https://newbroman.github.io/obvious/
- Test on mobile device

---

## What Changed in v1217

### Service Worker
- **Cache version:** v1214 → v1217
- Ensures fresh CSS is loaded on all devices

### CSS (styles.css)
- **Size:** 40KB → 30KB (optimized)
- **Fixed:** 9 duplicate media queries removed
- **Added:** Horizontal table scrolling for mobile
- **Added:** "← Swipe to see all columns →" indicator

### Files Modified
1. `sw.js` - Version bump to v1217
2. `styles.css` - Mobile table fix applied

### Files Unchanged
- All JavaScript modules (app.js, events.js, etc.)
- HTML structure (index.html)
- Assets (icons, manifest)
- Data files (namedays.json)

---

## Testing After Deploy

### Desktop Testing
1. Open https://newbroman.github.io/obvious/
2. Navigate to Rules page (⚖️ icon)
3. Tables should display normally (no scrolling needed)
4. All 3 columns visible without scrolling

### Mobile Testing (Critical)
1. Open on phone: https://newbroman.github.io/obvious/
2. Navigate to Rules page (⚖️ icon)
3. **Verify:**
   - Tables have horizontal scrollbar
   - Can swipe left/right to see all columns
   - "← Swipe to see all columns →" appears
   - Color coding intact (Blue/Gold/Orange/Purple/Red)
   - Text is readable (not cut off)

### Devices to Test
- iPhone Safari (any model)
- Android Chrome
- iPad Safari
- Desktop browser (for regression testing)

---

## Troubleshooting

### Problem: Old CSS still showing
**Solution:** Hard refresh the browser
- Chrome/Firefox: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Safari: Cmd+Option+R
- Mobile: Clear browser cache

### Problem: Tables still not scrolling on mobile
**Check:**
1. Verify sw.js shows v1217 (not v1214)
2. Hard refresh on mobile device
3. Check browser console for errors
4. Try in incognito/private mode

### Problem: Service worker not updating
**Solution:**
1. Open DevTools → Application → Service Workers
2. Click "Unregister"
3. Hard refresh page
4. Service worker will reinstall with v1217

---

## Rollback Instructions

If you need to revert:

```bash
# Revert the last commit
git revert HEAD
git push origin main

# Or restore from Obvious checkpoint
# Go to Obvious → Find checkpoint → Restore
```

---

## Version History

- **v1217** (2026-01-20): Rules page mobile table fix
- **v1214** (Previous): Last version before mobile fix

---

## Support

For issues or questions:
- Check CHANGELOG.md for detailed changes
- Review README.md for full documentation
- Test on multiple devices before considering stable

---

**Deploy with confidence!** All files tested and ready. 🇵🇱
