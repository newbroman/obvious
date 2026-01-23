// help.js - Help page language management

export function updateHelpPage(isPolish) {
    const helpTitle = document.getElementById('helpTitle');
    const helpDevNote = document.getElementById('helpDevNote');
    const helpFeedbackBtn = document.getElementById('helpFeedbackBtn');
    const helpBackBtn = document.getElementById('helpBackBtn');
    const helpNavSearchBtn = document.getElementById('helpNavSearch');
    
    // Set up back button click handler
    if (helpBackBtn) {
        helpBackBtn.onclick = () => document.getElementById('navCalendar').click();
        helpBackBtn.innerText = isPolish ? "Wróć" : "Back";
    }
    
    // Translate help page search button
    if (helpNavSearchBtn) {
        helpNavSearchBtn.innerHTML = isPolish 
            ? "🔍 Szukaj Imienin"
            : "🔍 Name Day Search";
    }
    
    if (helpTitle) {
        helpTitle.innerText = isPolish ? "Pomoc" : "Help";
    }
    
    // Update "How to Use This App" section title
    const howToTitle = document.querySelector('#helpPage h3');
    if (howToTitle) {
        howToTitle.textContent = isPolish ? "🎯 Jak Korzystać z Aplikacji" : "🎯 How to Use This App";
    }
    
    // Update Calendar Page section
    const calTitle = document.querySelector('#helpPage h4:nth-of-type(1)');
    const calList = document.getElementById('helpCalList');
    if (calTitle) {
        calTitle.textContent = isPolish ? "📅 Strona Kalendarza" : "📅 Calendar Page";
    }
    if (calList) {
        calList.innerHTML = isPolish 
            ? `<li><b>Kliknij dowolną datę</b>, aby usłyszeć polską wymowę</li>
                <li><b>Dwa tryby wymowy:</b>
                    <ul style="margin: 3px 0; padding-left: 20px;">
                        <li><i>"Dzisiaj jest..."</i> - Przypadek mianownik</li>
                        <li><i>"To jest..."</i> - Przypadek dopełniacz do umawiania spotkań</li>
                    </ul>
                </li>
                <li><b>Przełączaj między trybami</b> za pomocą przycisku u góry</li>
                <li><b>Przełączaj lata</b>, aby uwzględnić rok w wymowie daty</li>`
            : `<li><b>Click any date</b> to hear Polish pronunciation</li>
                <li><b>Two pronunciation modes:</b>
                    <ul style="margin: 3px 0; padding-left: 20px;">
                        <li><i>"Today is..."</i> (Dzisiaj jest) - Nominative case</li>
                        <li><i>"It's on..."</i> (To jest) - Genitive case for arranging meetings</li>
                    </ul>
                </li>
                <li><b>Toggle between modes</b> using the button at the top</li>
                <li><b>Toggle years</b> to include the year in the date pronunciation</li>`;
    }
    
    // Update Culture Page section
    const cultTitle = document.querySelector('#helpPage h4:nth-of-type(2)');
    const cultList = document.getElementById('helpCultList');
    if (cultTitle) {
        cultTitle.textContent = isPolish ? "📖 Strona Kultury" : "📖 Culture Page";
    }
    if (cultList) {
        cultList.innerHTML = isPolish 
            ? `<li><b>Odkryj znaczenie</b> polskich nazw dni i miesięcy</li>
                <li><b>Dowiedz się, czyje imieniny</b> przypadają w danym dniu</li>
                <li><b>Poznaj święta</b> przypadające w bieżącym miesiącu</li>
                <li><b>Wyszukaj imiona</b> za pomocą czerwonego przycisku "Szukaj Imienin", aby znaleźć, kiedy ktoś obchodzi imieniny</li>`
            : `<li><b>Discover the meaning</b> of Polish day names and month names</li>
                <li><b>Find out whose name day it is</b> on any date</li>
                <li><b>Learn about holidays</b> happening in the current month</li>
                <li><b>Search for names</b> using the red "Name Day Search" button to find when someone's name day occurs</li>`;
    }
    
    // Update Grammar Page section
    const gramTitle = document.querySelector('#helpPage h4:nth-of-type(3)');
    const gramList = document.getElementById('helpGramList');
    if (gramTitle) {
        gramTitle.textContent = isPolish ? "⚖️ Strona Gramatyki" : "⚖️ Grammar Page";
    }
    if (gramList) {
        gramList.innerHTML = isPolish 
            ? `<li><b>Opanuj polskie przypadki liczebników</b> - klucz do poprawnej wymowy dat</li>
                <li><b>Naucz się, kiedy używać mianownika, a kiedy dopełniacza</b></li>
                <li><b>Zobacz szczegółowe przykłady</b> z wyjaśnieniami</li>`
            : `<li><b>Master Polish numeral cases</b> - the key to correct date pronunciation</li>
                <li><b>Learn when to use nominative vs. genitive</b> case</li>
                <li><b>See detailed examples</b> with explanations</li>`;
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
