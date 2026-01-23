# Polish Calendar Learning App - Changelog

## v1342 - Anniversary Display & Double-Click Navigation
**Date**: January 23, 2026

### New Features
- **Anniversary visibility on calendar**: Anniversaries now display with purple gradient background and 📅 badge
- **Double-click navigation**: Double-click any date to jump directly to its cultural information page

### Changes
- Added `hasAnniversary()` and `getAnniversaryCount()` calls to calendar rendering
- Purple theme for anniversary dates (distinct from bronze historical events)
- Anniversary badge shows count when multiple anniversaries on same date
- Double-click triggers navCulture button to show cultural hub

### Bug Fixes
- Fixed anniversaries not appearing on calendar (functions were imported but not called)
- Proper integration with existing navigation system

---

## v1340 - Anniversary Refinements & Bug Fixes
**Date**: January 23, 2026

### Archive Cleanup
- Removed backup files (README.md.backup, *.backup, *.backup2)
- Size reduction: 624KB → 568KB (56KB smaller, ~9% reduction)

### Bug Fixes
- **BC period fix**: Christian holidays no longer appear in BC years
- **Future anniversary prevention**: Anniversaries only show for events that have already occurred

### Visual Improvements
- **Purple anniversary theme**:
  - Calendar dates: Light purple gradient (#f3e5f5 → #e1bee7)
  - Purple border (#ba68c8) and badge
  - Cultural page: Purple-themed anniversary section
  - Distinct from bronze historical events (🏛️)

---

## v1338 - BC Dates & Historical Database Expansion
**Date**: January 2026

### Features
- **BC dates display correctly**: English shows "753 BC" instead of "-753"
- **Historical database expanded**: 18 → 33 events
  - Added Polish history: Piast dynasty, Jagiellonian dynasty
  - Battle of Legnica (1241), Union of Krewo (1385)
  - Thirteen Years' War and Peace of Thorn (1466)

### Content
- All Christian holidays restored and working
- Historical calendar highlighting with 🏛️ icon
- Bronze gradient for historical event dates

---

## Visual Legend

- 🏛️ **Bronze gradient** = Historical event occurred on this exact date
- 📅 **Purple gradient** = Anniversary of historical event
- **Today highlight** = Current date marker
- **Holiday styling** = Polish cultural holidays and traditions
