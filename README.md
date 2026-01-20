# 🇵🇱 Polish Date Master

**Version:** 1218  
**Last Updated:** January 20, 2026  
**Live URL:** https://newbroman.github.io/obvious/

---

## 🎯 NEW in v1219: UX Polish & Dark Mode!

### Floating Back Button
- ✅ Changed from "← Back to Calendar" to just **"Back"**
- ✅ **Floats at bottom** of screen (always visible while scrolling)
- ✅ Removed duplicate buttons at bottom of pages
- ✅ Better shadows and backdrop blur effect
- ✅ Works perfectly in both light and dark modes

### Smart Table Widths
- ✅ **Transformation 2 table:** Narrower (400px → 350px on mobile)
- ✅ **Mode A & Mode B:** No horizontal scroll (text wraps naturally)
- ✅ **Transformation 1 & Quick Reference:** Keep horizontal scroll (3 columns)
- ✅ Scroll indicators only show when needed

### Dark Mode Support 🌙
- ✅ Auto-detects device preference
- ✅ Dark navy backgrounds (#1a1a2e)
- ✅ Light text (#e0e0e0) for readability
- ✅ Color coding preserved (Blue/Gold/Orange/Purple/Red)

---

## 📦 Deployment Package Contents

### Core Files
- `index.html` - **UPDATED** (Back button text changed, bottom buttons removed)
- `styles.css` - **ENHANCED** (38KB: dark mode + floating button + table fixes)
- `sw.js` - Service Worker **v1219**
- `manifest.json` - PWA manifest

### JavaScript Modules
- All JS files unchanged from v1217

### Assets
- `icon-192.png`, `icon-512.png`
- `debug-button.css`

### Documentation
- `CHANGELOG.md` - Full version history
- `DEPLOYMENT_GUIDE.md` - Deploy instructions
- `README.md` - This file

---

## 🚀 Quick Deploy

```bash
# 1. Extract
tar -xzf polish-date-master-v1219.tar.gz
cd polish-date-app-deploy

# 2. Copy to repo
cd ~/obvious
cp -r ../polish-date-app-deploy/* .

# 3. Commit and push
git add .
git commit -m "v1219: Floating back button, dark mode, table fixes"
git push origin main

# 4. Test: https://newbroman.github.io/obvious/
```

---

## ✅ What's New in v1219

### UX Improvements 🎯
- **Floating "Back" button** at bottom (sticky, always visible)
- **Shorter label:** "← Back to Calendar" → "Back"
- **Removed duplicates:** No more bottom buttons
- **Better styling:** Shadows, blur, hover effects

### Table Improvements 📏
- **Transformation 2:** Narrower table (2 columns, 400px)
- **Mode A & Mode B:** No scroll needed (single column tables)
- **Smart scrolling:** Only wide tables (3+ columns) scroll
- **Mobile optimized:** Transformation 2 scales to 350px

### Dark Mode 🌙
- Respects `prefers-color-scheme`
- Dark backgrounds replace white
- Perfect text contrast
- Floating button optimized for dark mode

---

## 🧪 Testing Checklist

### Floating Button
- [ ] Navigate to Rules page (⚖️ icon)
- [ ] **Scroll down** - button should stay at bottom
- [ ] Button says "Back" (not "← Back to Calendar")
- [ ] Click button - returns to calendar
- [ ] Navigate to Cultural page (📖 icon)
- [ ] Floating button works there too

### Table Widths
- [ ] **Transformation 1 table:** Scrolls horizontally (3 columns)
- [ ] **Transformation 2 table:** Narrower, easier to read (2 columns)
- [ ] **Mode A table:** No scroll, text wraps
- [ ] **Mode B table:** No scroll, text wraps
- [ ] **Quick Reference table:** Scrolls horizontally (3 columns)
- [ ] Scroll indicators only on wide tables

### Dark Mode
- [ ] Set device to dark mode
- [ ] Rules page background is dark
- [ ] Content boxes are dark slate (not white)
- [ ] Floating button visible and readable
- [ ] Switch to light mode - everything looks normal

---

## 🎨 Color Coding System

Works in both light and dark modes:

- 🔵 **Blue (#4a90e2)** - Nominative Ordinals
- 🟡 **Gold (#ffd700)** - Genitive Ordinals
- 🟠 **Orange (#f39c12)** - Genitive Months
- 🟣 **Purple (#9b59b6)** - Year Components
- 🔴 **Red (#e74c3c)** - Genitive Marker

---

## 📱 Supported Devices

- ✅ iPhone (Safari) - Light & dark mode
- ✅ Android (Chrome) - Light & dark mode
- ✅ iPad (Safari) - Light & dark mode
- ✅ Desktop browsers - Respects OS theme

---

## 🔄 Service Worker Cache

**Version:** v1219  
Caches all app files including updated HTML and enhanced CSS.

---

## 📊 File Sizes

- **styles.css:** 38KB (was 33KB, +5KB for button/table fixes)
- **index.html:** 7KB (button text updated, duplicates removed)
- **Total package:** ~295KB

---

## 🔧 Browser Support

**Floating button (position: fixed):** All browsers ✅  
**Dark mode (prefers-color-scheme):** Safari 12.1+, Chrome 76+, Firefox 67+ ✅  
**Table targeting (:has() selector):** Safari 15.4+, Chrome 105+, Firefox 121+ ✅

Graceful degradation for older browsers.

---

**Ready to deploy!** 🚀
