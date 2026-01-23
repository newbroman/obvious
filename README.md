# Polish Calendar Learning App - Changelog

## v1345 - Śmigus-Dyngus Name Prominence & Pagan Traditions
**Date**: January 23, 2026

### Changes
- **Śmigus-Dyngus name prominence**: Easter Monday now displays as "Śmigus-Dyngus (Lany Poniedziałek) 💧"
  - Traditional name shown first
  - Literal translation "Wet Monday" in parentheses
  - Makes the holiday more recognizable by its popular name

### New Features (from v1344)
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

## Visual Legend

- 🏛️ **Bronze gradient** = Historical event occurred on this exact date
- 📅 **Purple gradient** = Anniversary of historical event
- 🌿 **Green gradient** = Ancient pagan tradition/festival
- 💧 **Water droplet** = Śmigus-Dyngus (Easter Monday water tradition)
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
