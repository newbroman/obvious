# 🇵🇱 Polish Date Master

**Version:** 1217  
**Last Updated:** January 20, 2026  
**Live URL:** https://newbroman.github.io/obvious/

---

## 📦 Deployment Package Contents

This package contains all files needed to deploy the Polish Date Master app to GitHub Pages.

### Core Files
- `index.html` - Main HTML structure
- `styles.css` - **FIXED** CSS (30KB, optimized from 40KB)
- `sw.js` - Service Worker **v1217** (updated cache version)
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
git commit -m "v1217: Fix Rules page mobile table scrolling"
git push origin main

# 4. Wait 1-2 minutes for GitHub Pages to rebuild
# 5. Test at: https://newbroman.github.io/obvious/
```

---

## ✅ What's New in v1217

### Rules Page Mobile Fix
- ✅ Tables now scroll horizontally on mobile
- ✅ All 3 columns visible with swipe gesture
- ✅ Text no longer cut off
- ✅ Color coding preserved
- ✅ Scroll indicator added
- ✅ CSS optimized (40KB → 30KB)

---

## 🧪 Testing Checklist

After deployment, verify:

- [ ] App loads at https://newbroman.github.io/obvious/
- [ ] Calendar displays current month
- [ ] Click a date - Polish phrase appears with colors
- [ ] Navigate to Rules page (⚖️ icon)
- [ ] **On mobile:** Swipe tables horizontally
- [ ] **On mobile:** All 3 columns visible
- [ ] **On mobile:** Scroll indicator appears
- [ ] Audio playback works (🔊 Listen button)
- [ ] Mode toggle works (Today is / It's on)
- [ ] Language toggle works (EN / PL)

---

## 🎨 Color Coding System

The app uses color-coded grammar highlighting:

- 🔵 **Blue** - Nominative Ordinals (pierwszy, drugi, trzeci)
- 🟡 **Gold** - Genitive Ordinals (pierwszego, drugiego, trzeciego)
- 🟠 **Orange** - Genitive Months (stycznia, lutego, marca)
- 🟣 **Purple** - Year Components (dwa tysiące dwudziestego szóstego)
- 🔴 **Red** - Genitive Marker (roku)

---

## 📱 Supported Devices

- ✅ iPhone (Safari) - All sizes
- ✅ Android (Chrome) - All sizes
- ✅ iPad (Safari)
- ✅ Desktop browsers (Chrome, Firefox, Safari, Edge)

---

## 🔄 Service Worker Cache

**Version:** v1217  
The service worker automatically caches all app files for offline use. When you deploy a new version, the cache version increments automatically.

---

## 📄 License

Independent educational project by Martin Hollingham.

---

**Ready to deploy!** 🚀
