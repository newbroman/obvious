# 🇵🇱 Polish Date Master

**Version:** 1218  
**Last Updated:** January 20, 2026  
**Live URL:** https://newbroman.github.io/obvious/

---

## 🌙 NEW in v1218: Dark Mode Support!

The app now **automatically matches your device's dark/light mode preference**!

### Dark Mode Features:
- ✅ Respects system `prefers-color-scheme` setting
- ✅ Dark backgrounds on all Rules page content
- ✅ Perfect contrast for readability
- ✅ Color-coded grammar preserved (Blue/Gold/Orange/Purple/Red)
- ✅ Seamless switching between light and dark modes
- ✅ No manual toggle needed - follows your device

---

## 📦 Deployment Package Contents

### Core Files
- `index.html` - Main HTML structure
- `styles.css` - **WITH DARK MODE** (33KB, includes dark/light mode)
- `sw.js` - Service Worker **v1218** (updated cache version)
- `manifest.json` - PWA manifest

### JavaScript Modules
- `app.js` - Main application logic
- `events.js` - Event handlers
- `ui-renderer.js` - UI updates
- `audio.js` - Text-to-speech
- `holiday.js` - Holiday data
- `cultural.js` - Cultural explanations
- `rules.js` - Grammar rules
- `numbers.js` - Number formatting
- `phonetics.js` - Phonetic transcriptions
- `color-utils.js` - Color utilities
- `namedays.js` - Name day logic
- `namedays.json` - Name day database

### Assets
- `icon-192.png` - App icon (192x192)
- `icon-512.png` - App icon (512x512)
- `debug-button.css` - Debug styling

### Documentation
- `CHANGELOG.md` - Version history
- `DEPLOYMENT_GUIDE.md` - Deployment instructions
- `README.md` - This file

---

## 🚀 Quick Deploy

```bash
# 1. Navigate to your GitHub repo
cd ~/path/to/obvious

# 2. Extract and copy all files from this package
# (Replace existing files)

# 3. Commit and push
git add .
git commit -m "v1218: Add dark mode support for Rules page"
git push origin main

# 4. Wait 1-2 minutes for GitHub Pages to rebuild
# 5. Test at: https://newbroman.github.io/obvious/
```

---

## ✅ What's New in v1218

### Dark Mode Support 🌙
- ✅ Auto-detects device dark/light mode preference
- ✅ Dark backgrounds replace white boxes in dark mode
- ✅ All text readable with proper contrast (#e0e0e0 on dark)
- ✅ Headings bright white (#f0f0f0)
- ✅ Tables with dark backgrounds and subtle borders
- ✅ Color coding intact (Blue/Gold/Orange/Purple/Red)
- ✅ Light mode unchanged (original design preserved)

### From v1217: Mobile Table Scrolling
- ✅ Tables scroll horizontally on mobile
- ✅ All 3 columns visible with swipe
- ✅ Scroll indicator added
- ✅ Optimized CSS (removed duplicates)

---

## 🧪 Testing Checklist

After deployment, verify:

### Dark Mode Testing (Priority!)
- [ ] **Set device to dark mode**
- [ ] Navigate to Rules page (⚖️ icon)
- [ ] Background should be dark navy (#1a1a2e)
- [ ] Content boxes should be dark slate (not white!)
- [ ] Text should be light gray (readable)
- [ ] Tables should have dark backgrounds
- [ ] Color coding visible (Blue/Gold/Orange/Purple/Red)
- [ ] **Switch device to light mode**
- [ ] Rules page should show original light design
- [ ] White backgrounds should appear
- [ ] Text should be dark

### Mobile Testing
- [ ] Tables scroll horizontally
- [ ] All 3 columns visible when swiping
- [ ] Scroll indicator appears
- [ ] Color coding intact in both modes

### General Testing
- [ ] App loads at https://newbroman.github.io/obvious/
- [ ] Calendar displays current month
- [ ] Audio playback works
- [ ] Mode toggle works (Today is / It's on)
- [ ] Language toggle works (EN / PL)

---

## 🎨 Color Coding System

The app uses color-coded grammar highlighting (works in both light and dark modes):

- 🔵 **Blue (#4a90e2)** - Nominative Ordinals (pierwszy, drugi, trzeci)
- 🟡 **Gold (#ffd700)** - Genitive Ordinals (pierwszego, drugiego, trzeciego)
- 🟠 **Orange (#f39c12)** - Genitive Months (stycznia, lutego, marca)
- 🟣 **Purple (#9b59b6)** - Year Components (dwa tysiące dwudziestego szóstego)
- 🔴 **Red (#e74c3c)** - Genitive Marker (roku)

---

## 📱 Supported Devices

- ✅ iPhone (Safari) - All sizes, light & dark mode
- ✅ Android (Chrome) - All sizes, light & dark mode
- ✅ iPad (Safari) - Light & dark mode
- ✅ Desktop browsers (Chrome, Firefox, Safari, Edge) - Respects OS theme

---

## 🔄 Service Worker Cache

**Version:** v1218  
The service worker caches all app files for offline use. Dark mode CSS is now included in the cache.

---

## 📊 File Sizes

- styles.css: 33KB (was 30KB in v1217, +3KB for dark mode)
- Total package: ~295KB

---

## 📄 License

Independent educational project by Martin Hollingham.

---

**Ready to deploy with dark mode!** 🚀🌙
