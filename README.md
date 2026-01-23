# Polish Language App - v1322

✅ events.js: Added swipe navigation for mobile month navigation
✅ sw.js: Updated cache version to v1322

## 📱 New Feature: Swipe Navigation

**Mobile-Friendly Month Navigation**:
- Swipe left on calendar → Next month
- Swipe right on calendar → Previous month
- Smart detection: Only triggers on horizontal swipes (not vertical scrolling)
- Threshold: 50px minimum swipe distance
- Passive event listeners for optimal performance

**How It Works**:
1. Touch the calendar grid and swipe left/right
2. Must swipe at least 50 pixels horizontally
3. Vertical movement must be less than 100px (prevents conflict with scrolling)
4. Reuses existing prevMonth/nextMonth button logic
5. Works seamlessly with existing arrow button navigation

**Technical Details**:
- Tracks touchstart and touchend positions
- Calculates horizontal vs vertical movement
- Only triggers when horizontal swipe is dominant
- Uses passive event listeners for smooth scrolling performance
- No dependencies, pure vanilla JavaScript

**User Experience**:
- Natural mobile gesture for month navigation
- Doesn't interfere with scrolling
- Works alongside existing arrow buttons
- Instant response, reuses existing month change logic

**All Previous Features Still Work**:
- Complete translation coverage (EN/PL)
- Name days display with translations
- Holiday/Tradition tags translate
- Color guide with Polish terminology
- All back buttons translate properly

Deploy:
tar -xzf polish-date-master-v1322.tar.gz
cd ~/obvious && cp -r polish-date-master-v1322/* .
git add . && git commit -m "v1322: Swipe navigation for mobile!" && git push
