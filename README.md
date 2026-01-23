# Polish Language App - v1325

✅ rules.js: Added "swipe to see all columns" labels to all tables
✅ sw.js: Updated cache version to v1325

## 📱 Table Swipe Labels Restored

### What Changed
Added back the "↔️ Swipe to see all columns" labels to all tables that need horizontal scrolling:

**Tables with swipe labels**:
1. ✅ **Transformation 1** - Cardinal → Ordinal table
2. ✅ **Transformation 2** - Months transform table
3. ✅ **Transformation 2** - Years transform table  
4. ✅ **Quick Reference** - Complete reference table

**Sections WITHOUT tables** (clean vertical layout):
- ❌ Mode A (Putting It Together)
- ❌ Mode B (Putting It Together)

### User Experience
- Tables that need scrolling now show the swipe hint
- Users know they can scroll horizontally to see more columns
- Mode A and Mode B remain clean with no tables
- All backgrounds still respect dark mode (v1324)

### All Previous Features Still Work
- ✅ Dark mode support for all backgrounds (v1324)
- ✅ Grammar Rules title translates (v1323)
- ✅ Clean Mode A/B layout without tables (v1323)
- ✅ Swipe navigation for months (v1322)
- ✅ Complete translation coverage (v1321)

Deploy:
tar -xzf polish-date-master-v1325.tar.gz
cd ~/obvious && cp -r polish-date-master-v1325/* .
git add . && git commit -m "v1325: Restore swipe labels for tables!" && git push
