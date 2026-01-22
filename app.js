import { renderHelpModal } from './help.js';
import { updateInfoPanel, updateNamedaysDisplay } from './ui-renderer.js';
import { setupListeners } from './events.js';
import holidayData from './holiday.js';
import { checkVoices } from './audio.js';
import culturalData from './cultural.js';

// Initialize Global State
const state = { 
    viewDate: new Date(),    
    selectedDate: new Date(), 
    includeYear: true,
    isPolish: false,
    isFormal: false
}

// Main Render Function
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
    
    // Update Mode Button
    if (meetingBtn) {
        const icon = state.isFormal ? "🎉" : "📅";
        const label = state.isFormal 
            ? (state.isPolish ? "To jest dnia" : "It's on") 
            : (state.isPolish ? "Dzisiaj jest" : "Today is");
        meetingBtn.innerText = `${icon} ${label}`;
        meetingBtn.className = `pill-btn ${state.isFormal ? 'mode-btn-event' : 'mode-btn-naming'}`;
    }
    
    // Update Info Panel
    updateInfoPanel(state);
    
    // Update month roller
    if (mRoller) mRoller.value = monthIndex;
    if (yInput) yInput.value = year;

    // Update weekday headers
    if (weekdayContainer) {
        const weekdayLabels = state.isPolish 
            ? ['Pon', 'Wt', 'Śr', 'Czw', 'Pt', 'Sob', 'Niedz']
            : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        weekdayContainer.innerHTML = weekdayLabels.map(d => `<div class="weekday">${d}</div>`).join('');
    }

    // Build calendar grid
    const firstDay = new Date(year, monthIndex, 1);
    const lastDay = new Date(year, monthIndex + 1, 0);
    const daysInMonth = lastDay.getDate();
    let dayOfWeek = firstDay.getDay();
    if (dayOfWeek === 0) dayOfWeek = 7;
    dayOfWeek--;

    grid.innerHTML = '';

    // Empty cells before month starts
    for (let i = 0; i < dayOfWeek; i++) {
        const emptyCell = document.createElement('div');
        emptyCell.className = 'calendar-day empty';
        grid.appendChild(emptyCell);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
        const dateObj = new Date(year, monthIndex, day);
        const cell = document.createElement('div');
        cell.className = 'calendar-day';
        
        const isToday = (
            dateObj.getDate() === new Date().getDate() &&
            dateObj.getMonth() === new Date().getMonth() &&
            dateObj.getFullYear() === new Date().getFullYear()
        );
        
        const isSelected = (
            dateObj.getDate() === state.selectedDate.getDate() &&
            dateObj.getMonth() === state.selectedDate.getMonth() &&
            dateObj.getFullYear() === state.selectedDate.getFullYear()
        );
        
        if (isToday) cell.classList.add('today');
        if (isSelected) cell.classList.add('selected');

        // Check if it's a holiday
        const monthKey = String(monthIndex + 1).padStart(2, '0');
        const dayKey = String(day).padStart(2, '0');
        const dateKey = `${monthKey}-${dayKey}`;
        const holiday = holidayData[dateKey];
        
        if (holiday) {
            cell.classList.add('holiday');
            cell.setAttribute('title', holiday.name);
        }

        cell.textContent = day;
        cell.onclick = () => {
            state.selectedDate = dateObj;
            render();
        };
        
        grid.appendChild(cell);
    }

    // Update namedays display
    updateNamedaysDisplay(state);

    // Update play button
    if (playBtn) {
        playBtn.disabled = !state.selectedDate;
    }

    // Update repeat year button
    if (repeatYearBtn) {
        repeatYearBtn.disabled = !state.selectedDate;
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    checkVoices();
    setupListeners(state, render);
    render();
});
