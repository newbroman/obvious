# Polish Language App - v1328

✅ **OPTION A COMPLETE**: Basic BC date support (1000 BC to 3000 AD)

## 🎯 New Feature: Historical Dates (1000 BC - 3000 AD)

### What's New
Navigate and practice Polish dates from **1000 BC** to **3000 AD**!

### Changes Made

#### 1. Extended Year Range
- **index.html**: Year input now accepts `-1000` to `3000`
- Calendar works with any year in this range
- JavaScript Date object handles negative years natively

#### 2. BC/AD Display
- **New file: year-utils.js** - Utility functions for era formatting
- BC dates show as "p.n.e." (przed naszą erą) in Polish
- BC dates show as "BC" in English
- Example: `-753` displays as "753 p.n.e." or "753 BC"

#### 3. Polish Pronunciation for BC Years
- **numbers.js**: Updated `getYearPolish()` to handle negative years
- Automatically adds "przed naszą erą" suffix
- Examples:
  - `-753` → "siedemset pięćdziesiątego trzeciego przed naszą erą"
  - `-44` → "czterdziestego czwartego przed naszą erą"
  - `-1` → "pierwszego przed naszą erą"

#### 4. Historical Date Notice
- **events.js**: Added notice on Cultural page for dates before 1000 AD
- Explains that cultural data (holidays, name days) only available from 1000 AD+
- Users can still practice pronunciation for any date
- Graceful degradation - no fake historical data

### User Experience

**Example 1: Founding of Rome (April 21, 753 BC)**
1. Enter year: `-753`
2. Select: April 21
3. See: "Niedziela, dwudziestego pierwszego kwietnia, siedemset pięćdziesiątego trzeciego roku przed naszą erą"
4. Cultural page shows: Historical notice (no cultural data)

**Example 2: Modern Date (January 23, 2026)**
1. Works exactly as before
2. Full cultural data available
3. Holidays, name days, month meanings all present

### What Works
- ✅ Calendar navigation: 1000 BC to 3000 AD
- ✅ Polish date pronunciation with BC suffix
- ✅ English translation with BC indicator
- ✅ Phonetic pronunciation
- ✅ Audio playback (text-to-speech)
- ✅ All existing features preserved

### What Doesn't Work (Yet - Coming in Option B)
- ❌ Cultural data before 1000 AD (shows notice instead)
- ❌ Holidays before 1000 AD
- ❌ Name days before 1000 AD
- ❌ Historical events database
- ❌ Julian calendar conversion

### Next Steps - Option B (Future Enhancements)
1. Add historical events database (Roman history, ancient Poland)
2. Research ancient Polish/Slavic calendar traditions
3. Add Julian calendar conversion option
4. Historical context for different eras
5. Ancient name days (if historically accurate data exists)

### Technical Details
- Service worker cache: v1328
- New dependency: year-utils.js (optional, for future expansion)
- BC dates use negative year values (-1000 to -1)
- Proleptic Gregorian calendar (extrapolated backwards)

### All Previous Features Still Work
- ✅ Cultural page shows selected date (v1327)
- ✅ Adaptive status bar color (v1326)
- ✅ Swipe labels on reference tables (v1325)
- ✅ Dark mode support (v1324)
- ✅ Grammar Rules translations (v1323)

## Deploy
```bash
tar -xzf polish-date-master-v1328.tar.gz
cd ~/obvious && cp -r polish-date-master-v1328/* .
git add . && git commit -m "v1328: Add BC date support (1000 BC - 3000 AD)" && git push
```

## Fun Historical Dates to Try
- **753 BC**: Founding of Rome (April 21)
- **44 BC**: Death of Julius Caesar (March 15 - "Ides of March")
- **1 BC**: Year before Christ
- **966 AD**: Baptism of Poland
- **1410 AD**: Battle of Grunwald (July 15)
