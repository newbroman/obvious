import { renderHelpModal } from './help.js';

/**
 * app.js - Final Integration Fixed
 */
import { updateInfoPanel, updateNamedaysDisplay } from './ui-renderer.js';
import { setupListeners } from './events.js';
import holidayData from './holiday.js';
import { checkVoices } from './audio.js';
import culturalData from './cultural.js';

// 1. Initialize Global State
const state = { 
    viewDate: new Date(),    
    selectedDate: new Date(), 
    includeYear: true,
    isPolish: false,
    isFormal: false
}

// 2. Main Render Function
function render() {
    const grid = document.getElementById('calendarGrid');
    const mRoller = document.getElementById('monthRoller');
    const yInput = document.getElementById('yearInput');
    const weekdayContainer = document.querySelector('.weekdays');
    const meetingBtn = document.getElementById('meetingToggle');
    const playBtn = document.getElementById('playBtn');
    const repeatYearBtn = document.getElementById('repeatYearBtn');
    
    if (!grid) return;

    const monthIndex = state.viewDate.getMonth();
    const year = state.viewDate.getFullYear();

// Render help modal
const modalTitle = document.getElementById('modalTitle');
if (modalTitle) {
    renderHelpModal(state.isPolish);
}
    
   // 1. Update Mode Button
    if (meetingBtn) {
    // state.isFormal = false (Default) -> "Today is" (Naming Mode)
    // state.isFormal = true            -> "It's on" (Event Mode)
    
    const icon = state.isFormal ? "🎉" : "📅";
    
    const label = state.isFormal 
        ? (state.isPolish ? "To jest dnia" : "It's on") 
        : (state.isPolish ? "Dzisiaj jest" : "Today is");

    meetingBtn.innerText = `${icon} ${label}`;
    
    // Theme: Blue for Naming (Today is), Gold for Event (It's on)
    meetingBtn.className = `pill-btn ${state.isFormal ? 'mode-btn-event' : 'mode-btn-naming'}`;
}


    
    // 2. Update Info Panel
