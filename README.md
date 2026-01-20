# 🇵🇱 Polish Date Master

**Version:** 1220  
**Last Updated:** January 20, 2026  
**Live URL:** https://newbroman.github.io/obvious/

---

## 🎯 NEW in v1220: Close Button Redesign!

### Top-Right Close Button
- ✅ **Repositioned:** Top right corner (no longer covers content!)
- ✅ **Compact size:** 40px circle (36px on mobile)
- ✅ **Icon-only:** Clean "×" symbol
- ✅ **Smart styling:** White with shadow, turns red on hover
- ✅ **Dark mode:** Adapts to dark backgrounds

### Smart Table Widths
- ✅ **Transformation 2:** Narrower (2 columns, easier to read)
- ✅ **Mode A & Mode B:** No scroll needed (text wraps)
- ✅ **Wide tables:** Keep scrolling when needed (3+ columns)

### Dark Mode
- ✅ Auto-detects device preference
- ✅ Dark backgrounds, light text
- ✅ Color coding preserved

---

## 📦 Files Organized

All files now in folder: **`polish-date-master-v1220/`**

This makes deployment cleaner - just copy the whole folder!

---

## 🚀 Quick Deploy

```bash
# 1. Extract
tar -xzf polish-date-master-v1220.tar.gz

# 2. Copy to repo (folder is already named correctly!)
cd ~/obvious
cp -r polish-date-master-v1220/* .

# 3. Commit and push
git add .
git commit -m "v1220: Top-right close button, smart tables, dark mode"
git push origin main

# 4. Test: https://newbroman.github.io/obvious/
```

---

## ✅ What's New

### Close Button 🎯
- **Position:** Top right corner (fixed)
- **Size:** 40px × 40px circle
- **Icon:** "×" symbol (1.8rem)
- **Hover:** Turns red (#E6192E)
- **Mobile:** 36px × 36px
- **No longer blocks content!**

### Tables 📏
- Transformation 2: Narrower
- Mode A/B: No scroll
- Smart targeting with `:has()` selector

### Dark Mode 🌙
- Automatic detection
- Dark backgrounds
- Perfect contrast

---

## 🧪 Testing Checklist

### Close Button
- [ ] Navigate to Rules page (⚖️)
- [ ] **Close button in top right** (small circle with ×)
- [ ] Doesn't cover any content
- [ ] Hover turns it red
- [ ] Click returns to calendar
- [ ] Try Cultural page (📖) - same behavior

### Tables
- [ ] Transformation 2 narrower than before
- [ ] Mode A/B sections don't scroll
- [ ] Wide tables still scroll (Transformation 1, Quick Reference)

### Dark Mode
- [ ] Enable dark mode on device
- [ ] Close button visible (dark background, white ×)
- [ ] Content has dark backgrounds
- [ ] Switch to light mode - works normally

---

## 📊 File Sizes

- **styles.css:** 38KB
- **index.html:** 7KB  
- **sw.js:** 1KB (v1220)
- **Total package:** ~295KB

---

**Ready to deploy!** 🚀
