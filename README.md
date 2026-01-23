# Polish Calendar Learning App - Changelog

## v1344 - Pagan Traditions Integration
**Date**: January 23, 2026

### New Features
- **Pagan Traditions Calendar**: Ancient Slavic/Polish pre-Christian festivals now integrated
  - 🌿 Green theme for pagan traditions (distinct from historical bronze and anniversary purple)
  - Calendar highlighting with nature icon badge
  - Cultural page section with detailed descriptions

### Pagan Festivals Included
- **Kupala Night** (June 21-24): Summer solstice with fire/water rituals
- **Koliada** (Dec 21-Jan 6): Winter solstice, 12-day celebration
- **Spring Dziady** (April 1): Ancestor veneration
- **Autumn Dziady** (Oct 31-Nov 2): Forefathers' Eve
- **Equinoxes** (Mar 20, Sep 22): Seasonal balance celebrations

### Technical Changes
- New `pagan-traditions.js` module with festival database
- Green gradient styling for pagan dates
- Priority system: Historical > Anniversary > Pagan
- Bilingual support (Polish/English) for all traditions
- Dark mode support for green theme

---

## v1343 - Dark Mode Fix for Historical Boxes
**Date**: January 23, 2026

### Bug Fixes
- **Dark mode historical/anniversary boxes**: Fixed white background boxes in cultural page
  - Now uses `var(--card-bg)` CSS variable
  - Light mode: white background
  - Dark mode: `#1e1e1e` dark background
  - Properly respects device display mode settings

---

## v1342 - Anniversary Display & Double-Click Navigation
**Date**: January 23, 2026

### New Features
- **Anniversary visibility on calendar**: Anniversaries now display with purple gradient background and 📅 badge
- **Double-click navigation**: Double-click any date to jump directly to its cultural information page

### Changes
- Added `hasAnniversary()` and `getAnniversaryCount()` calls to calendar rendering
- Purple theme for anniversary dates (distinct from bronze historical events)
- Anniversary badge shows count when multiple anniversaries on same date
- Double-click uses timer pattern (250ms delay) to prevent single-click interference

### Bug Fixes
- Fixed anniversaries not appearing on calendar (functions were imported but not called)
- Fixed double-click not working due to single-click interference
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
- 🌿 **Green gradient** = Ancient pagan tradition/festival
- **Today highlight** = Current date marker
- **Holiday styling** = Polish cultural holidays and traditions

## Pagan Traditions Overview

The app now includes ancient Slavic calendar traditions based on pre-Christian festivals:

### Calendar System
- Lunar-solar hybrid with 13 months
- Year began March 1 or March 9
- Month names from nature (e.g., Kwiecień = "flowering month")

### Major Festivals
1. **Kupala Night** - Summer solstice fire/water rituals
2. **Koliada** - Winter solstice sun rebirth
3. **Dziady** - Ancestor veneration ("communion of living with dead")
4. **Equinoxes** - Seasonal balance celebrations

### Pantheon
- **Perun**: Thunder god (oak, sky, order)
- **Veles**: Earth/underworld god (willow, chaos)
- Cosmic dualism: sky vs earth, light vs dark
