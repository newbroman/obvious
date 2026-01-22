// help.js - Help page language management

export function updateHelpPage(isPolish) {
    const helpTitle = document.getElementById('helpTitle');
    const featCal = document.getElementById('featCal');
    const featCult = document.getElementById('featCult');
    const featGram = document.getElementById('featGram');
    const helpDevNote = document.getElementById('helpDevNote');
    const helpFeedbackBtn = document.getElementById('helpFeedbackBtn');
    
    if (helpTitle) {
        helpTitle.innerText = isPolish ? "Pomoc" : "Help";
    }
    
    if (featCal) {
        featCal.innerHTML = isPolish 
            ? "📅 <b>Kalendarz:</b> Kliknij datę, by usłyszeć wymowę. Jak powiedzieć dzień i jak umówić spotkanie."
            : "📅 <b>Calendar:</b> Click a date to hear pronunciation. How to say the day is and how to say the date when arranging a meeting.";
    }
    
    if (featCult) {
        featCult.innerHTML = isPolish 
            ? "📖 <b>Kultura:</b> Poznaj polskie tradycje i imieniny."
            : "📖 <b>Culture:</b> Explore Polish traditions and Name Days.";
    }
    
    if (featGram) {
        featGram.innerHTML = isPolish 
            ? "⚖️ <b>Gramatyka:</b> Opanuj odmianę liczebników."
            : "⚖️ <b>Grammar:</b> Master the numeral cases.";
    }
    
    if (helpDevNote) {
        helpDevNote.innerText = isPolish 
            ? "Projekt niezależny. Twoja opinia pomaga mi w rozwoju!"
            : "Independent project. Your feedback helps me improve!";
    }
    
    if (helpFeedbackBtn) {
        helpFeedbackBtn.innerText = isPolish 
            ? "Prześlij opinię (Feedback)"
            : "Send Feedback";
    }
}
