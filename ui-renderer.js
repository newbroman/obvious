/**
 * ui-renderer.js - Simplified with Grammar Rules Removed
 */
import { getWrittenDay, getPhoneticDay, getYearPolish, getYearPhonetic } from './numbers.js';
import phonetics from './phonetics.js';
import holidayData from './holiday.js';
import { colorizePolishPhrase } from './color-utils.js';

export function updateInfoPanel(selectedDate, includeYear, isFormal) {
    const plDisplay = document.getElementById('plPhrase');
    const enDisplay = document.getElementById('enPhrase');
    const phoneticDisplay = document.getElementById('phoneticPhrase');
    const holidayDisplay = document.getElementById('holidayName'); 
    const footer = document.querySelector('.info-panel');

    if (!selectedDate || !plDisplay) return;

    const day = selectedDate.getDate();
    const monthIndex = selectedDate.getMonth();
    const year = selectedDate.getFullYear();

    // 1. Remove Grammar Tips & Apply Visual Theme
    // Tip logic removed here as it is now in rules.js
    if (footer) {
        footer.classList.toggle('formal-theme', isFormal);
        footer.classList.toggle('informal-theme', !isFormal);
    }

 // 2. Data Mapping
    const dayNamesPl = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];
    const dayNamesEn = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const dayOfWeekIndex = selectedDate.getDay();
    const dayNamePl = dayNamesPl[dayOfWeekIndex];
    const dayNameEn = dayNamesEn[dayOfWeekIndex]

    
    
    const monthNamesEn = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const monthKeysPl = ["stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca", "lipca", "sierpnia", "września", "października", "listopada", "grudnia"];
    
    const currentMonthKey = monthKeysPl[monthIndex];
    const monthPhonetic = phonetics.months[currentMonthKey]; 
    const monthEn = monthNamesEn[monthIndex];

    const daySpelling = getWrittenDay(day, isFormal);      
    const dayPhonetic = getPhoneticDay(day, isFormal);

    // REMOVED: yearSpelling and yearPhonetic were defined here incorrectly.
    // They are now handled correctly inside the "if (includeYear)" block below.

   // 3. Intros & Base Phrasing
    const capitalizedDaySpelling = daySpelling.charAt(0).toUpperCase() + daySpelling.slice(1);
    const capitalizedDayPhonetic = dayPhonetic.charAt(0).toUpperCase() + dayPhonetic.slice(1);
    
    // We add the Signpost (Day Name) at the start
    let fullPl = `${dayNamePl}, ${daySpelling} ${currentMonthKey}`;
    let fullEn = `${dayNameEn}, ${monthEn} ${day}${getEnglishSuffix(day)}`;
    
    // For phonetics, we need to add the day name pronunciation if you have it, 
    // otherwise, we start with the day number:
    let fullPhonetic = `${dayPhonetic} ${monthPhonetic}`;

    // 4. Year Logic
    if (includeYear) {
        const yearSpelling = getYearPolish(year, true); 
        const yearPhonetic = getYearPhonetic(year, true);
        
        const suffixPl = "roku";
        const suffixPhonetic = "ro-koo";

        fullPl += `, ${yearSpelling} ${suffixPl}`;
        fullEn += `, ${year}`;
        fullPhonetic += `, ${yearPhonetic} ${suffixPhonetic}`;
    }
    
  // 5. Holiday Display
    const holidays = holidayData.getHolidaysForYear(year);
    const holidayKey = `${monthIndex}-${day}`;
    
    if (holidayDisplay) {
        if (holidays[holidayKey]) {
            // Using currentMonthKey ensures it says "stycznia" (Genitive) 
            // instead of "Styczeń" (Nominative)
            holidayDisplay.innerHTML = `<span class="month-label">${currentMonthKey}:</span> 🎉 ${holidays[holidayKey]}`;
            holidayDisplay.style.display = "block";
        } else {
            holidayDisplay.style.display = "none";
        }
    }
   // 6. Update UI - Trimmed to remove potential leading spaces
    // Use innerHTML with color coding for Polish phrase
    plDisplay.innerHTML = colorizePolishPhrase(fullPl.trim(), includeYear);
    enDisplay.innerText = fullEn.trim();
    phoneticDisplay.innerText = fullPhonetic.trim();
}

function getEnglishSuffix(i) {
    const j = i % 10, k = i % 100;
    if (j == 1 && k != 11) return "st";
    if (j == 2 && k != 12) return "nd";
    if (j == 3 && k != 13) return "rd";
    return "th";
}

/**
 * Audio Engine
 */
export function speakPolish() {
    const text = document.getElementById('plPhrase').innerText;
    if (!text || text === "Wybierz datę") return;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'pl-PL';
    utterance.rate = 0.85; 
    window.speechSynthesis.speak(utterance);
}

        const sections = {
            'calendar': document.getElementById('calendarSection'),
            'culture': document.getElementById('culturalHub'),
            'rules': document.getElementById('rulesPage'),
            'search': document.getElementById('nameSearchPage'),
            'help': document.getElementById('helpPage')
        };
    console.log('Found namedaysList element:', list);
    
    if (!list || !selectedDate) {
        console.log('Early return - list or selectedDate missing');
        return;
    }
    
    try {
        // Call the global function from namedays.js
        if (typeof window.getNamesForDate === 'function') {
            console.log('Calling window.getNamesForDate...');
            const names = await window.getNamesForDate(selectedDate);
            console.log('Received names:', names);
            
            if (names && names.length > 0) {
                const html = `<p style="font-weight: bold; margin: 0 0 8px 0; color: #666;">Today's Name Days are:</p><p class="namedays-names">${names.join(', ')}</p>`;
                console.log('Setting innerHTML to:', html);
                list.innerHTML = html;
            } else {
                list.innerHTML = '<p class="namedays-placeholder">No name days found for this date</p>';
            }
        } else {
            console.log('window.getNamesForDate is not a function');
        }
    } catch (error) {
        console.error('Error updating namedays:', error);
        list.innerHTML = '<p class="namedays-placeholder">Error loading name days</p>';
    }
}
