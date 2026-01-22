// help.js - Help modal content management

export function renderHelpModal(isPolish) {
    const modalTitle = document.getElementById('modalTitle');
    const modalAboutHeader = document.getElementById('modalAboutHeader');
    const helpContent = document.getElementById('helpContent');
    const modalDevNote = document.getElementById('modalDevNote');
    const feedbackBtn = document.getElementById('feedbackBtn');
    
    // Set title
    if (modalTitle) {
        modalTitle.innerText = isPolish ? "Powiedz datę po polsku" : "Say the Date in Polish";
    }
    
    // Hide "About this app" line
    if (modalAboutHeader) {
        modalAboutHeader.style.display = 'none';
    }
    
    // Build help content
    if (helpContent) {
        if (isPolish) {
            helpContent.innerHTML = `
                <h3 style="margin-bottom: 0.5rem;">🎯 Jak korzystać z aplikacji</h3>
                <table style="width: 100%; border: none; font-size: 0.9rem; line-height: 1.5; margin-bottom: 10px;">
                    <tr>
                        <td style="border: none; padding: 4px 0;">📅 <b>Kalendarz:</b> Kliknij datę, by usłyszeć wymowę. Jak powiedzieć dzień i jak umówić spotkanie.</td>
                    </tr>
                    <tr>
                        <td style="border: none; padding: 4px 0;">📖 <b>Kultura:</b> Poznaj polskie tradycje i imieniny.</td>
                    </tr>
                    <tr>
                        <td style="border: none; padding: 4px 0;">⚖️ <b>Gramatyka:</b> Opanuj odmianę liczebników.</td>
                    </tr>
                </table>
                
                <hr style="margin: 20px 0; border: 0; border-top: 1px solid #ddd;">
                
                <h3 style="margin-bottom: 0.5rem;">🔊 Tryby wymowy</h3>
                <p style="font-size: 0.9rem; line-height: 1.5;">
                    Strona kalendarza ma <strong>dwa tryby wymowy</strong> dat. 
                    Zobacz stronę <strong>Gramatyka (⚖️)</strong> po szczegóły.
                </p>
                
                <hr style="margin: 20px 0; border: 0; border-top: 1px solid #ddd;">
                
                <h3 style="margin-bottom: 0.5rem;">🎂 Imieniny</h3>
                <p style="font-size: 0.9rem; line-height: 1.5;">
                    <strong>W Polsce imieniny są często ważniejsze niż urodziny!</strong> 
                    Każdy dzień roku jest poświęcony jednemu lub więcej świętym. 
                    Jeśli twoje imię pasuje do świętego dnia, to twoje <em>imieniny</em>, 
                    a przyjaciele i rodzina świętują z kwiatami i życzeniami.
                </p>
                <p style="font-size: 0.9rem; line-height: 1.5;">
                    Większość polskich kalendarzy wyraźnie pokazuje imieniny i często ludzie 
                    pamiętają czyjeś imieniny, nawet jeśli zapomną urodzin!
                </p>
                
                <hr style="margin: 20px 0; border: 0; border-top: 1px solid #ddd;">
                
                <h3 style="margin-bottom: 0.5rem;">🎉 Polskie święta i tradycje</h3>
                <p style="font-size: 0.9rem; line-height: 1.5;">
                    <strong>Polska ma bogaty kalendarz świąt i tradycji</strong> odzwierciedlających 
                    jej katolickie dziedzictwo i słowiańskie korzenie.
                </p>
                <p style="font-size: 0.9rem; line-height: 1.5;">
                    <strong>Święta oficjalne:</strong> Dni jak <em>Wszystkich Świętych</em> 
                    gdy miliony świec oświetlają cmentarze, i <em>Wigilia</em> 
                    ze świętą 12-daniową postną kolacją.
                </p>
                <p style="font-size: 0.9rem; line-height: 1.5;">
                    <strong>Tradycje kulturowe:</strong> Święta jak <em>Andrzejki</em> (noc wróżb), 
                    <em>Tłusty Czwartek</em> (dzień pączków!), i <em>Dzień Babci</em>.
                </p>
                <p style="font-size: 0.9rem; line-height: 1.5;">
                    Szukaj dni z <strong>czerwonymi ramkami</strong> w kalendarzu.
                </p>
                
                <hr style="margin: 20px 0; border: 0; border-top: 1px solid #ddd;">
                
                <h3 style="margin-bottom: 0.5rem;">🔊 Rozwiązywanie problemów z dźwiękiem</h3>
                <table style="width: 100%; border: none; font-size: 0.9rem; line-height: 1.5;">
                    <tr>
                        <td style="border: none; padding: 4px 8px 4px 0; vertical-align: top; white-space: nowrap;"><strong>Głośność:</strong></td>
                        <td style="border: none; padding: 4px 0;">Sprawdź, czy głośność urządzenia jest włączona</td>
                    </tr>
                    <tr>
                        <td style="border: none; padding: 4px 8px 4px 0; vertical-align: top; white-space: nowrap;"><strong>Polski głos:</strong></td>
                        <td style="border: none; padding: 4px 0;">Ustawienia → Dostępność → Treść mówiona → Głosy → Pobierz polski</td>
                    </tr>
                    <tr>
                        <td style="border: none; padding: 4px 8px 4px 0; vertical-align: top; white-space: nowrap;"><strong>Przeglądarki:</strong></td>
                        <td style="border: none; padding: 4px 0;">Chrome, Safari i Edge mają najlepsze wsparcie</td>
                    </tr>
                    <tr>
                        <td style="border: none; padding: 4px 8px 4px 0; vertical-align: top; white-space: nowrap;"><strong>Mobile:</strong></td>
                        <td style="border: none; padding: 4px 0;">iOS i Android mają wbudowane polskie głosy</td>
                    </tr>
                </table>
            `;
        } else {
            helpContent.innerHTML = `
                <h3 style="margin-bottom: 0.5rem;">🎯 How to Use This App</h3>
                <table style="width: 100%; border: none; font-size: 0.9rem; line-height: 1.5; margin-bottom: 10px;">
                    <tr>
                        <td style="border: none; padding: 4px 0;">📅 <b>Calendar:</b> Click a date to hear pronunciation. How to say the day is and how to say the date when arranging a meeting.</td>
                    </tr>
                    <tr>
                        <td style="border: none; padding: 4px 0;">📖 <b>Culture:</b> Explore Polish traditions and Name Days.</td>
                    </tr>
                    <tr>
                        <td style="border: none; padding: 4px 0;">⚖️ <b>Grammar:</b> Master the numeral cases.</td>
                    </tr>
                </table>
                
                <hr style="margin: 20px 0; border: 0; border-top: 1px solid #ddd;">
                
                <h3 style="margin-bottom: 0.5rem;">🔊 Pronunciation Modes</h3>
                <p style="font-size: 0.9rem; line-height: 1.5;">
                    The calendar page has <strong>two pronunciation modes</strong> for dates. 
                    Refer to the <strong>Grammar page (⚖️)</strong> for detailed explanations.
                </p>
                
                <hr style="margin: 20px 0; border: 0; border-top: 1px solid #ddd;">
                
                <h3 style="margin-bottom: 0.5rem;">🎂 Name Days (Imieniny)</h3>
                <p style="font-size: 0.9rem; line-height: 1.5;">
                    <strong>In Poland, Name Days are often more important than birthdays!</strong> 
                    Each day of the year is dedicated to one or more saints or historical figures. 
                    If your name matches the saint of the day, it's your <em>imieniny</em> (name day), 
                    and friends and family celebrate you with flowers, cards, and well-wishes.
                </p>
                <p style="font-size: 0.9rem; line-height: 1.5;">
                    Most Polish calendars prominently display name days, and it's common to remember 
                    someone's name day even if you forget their birthday!
                </p>
                
                <hr style="margin: 20px 0; border: 0; border-top: 1px solid #ddd;">
                
                <h3 style="margin-bottom: 0.5rem;">🎉 Polish Holidays & Traditions</h3>
                <p style="font-size: 0.9rem; line-height: 1.5;">
                    <strong>Poland has a rich calendar of holidays and traditions</strong> that reflect 
                    its Catholic heritage and Slavic roots.
                </p>
                <p style="font-size: 0.9rem; line-height: 1.5;">
                    <strong>Official Holidays:</strong> Days like <em>Wszystkich Świętych</em> (All Saints' Day) 
                    when millions of candles light up cemeteries, and <em>Wigilia</em> (Christmas Eve) 
                    with its sacred 12-dish meatless supper.
                </p>
                <p style="font-size: 0.9rem; line-height: 1.5;">
                    <strong>Cultural Traditions:</strong> Celebrations like <em>Andrzejki</em> (fortune-telling night), 
                    <em>Tłusty Czwartek</em> (Fat Thursday - donut day!), and <em>Dzień Babci</em> (Grandmothers' Day).
                </p>
                <p style="font-size: 0.9rem; line-height: 1.5;">
                    Look for days with <strong>red borders</strong> in the calendar to identify national holidays 
                    and significant celebrations.
                </p>
                
                <hr style="margin: 20px 0; border: 0; border-top: 1px solid #ddd;">
                
                <h3 style="margin-bottom: 0.5rem;">🔊 Audio Troubleshooting</h3>
                <table style="width: 100%; border: none; font-size: 0.9rem; line-height: 1.5;">
                    <tr>
                        <td style="border: none; padding: 4px 8px 4px 0; vertical-align: top; white-space: nowrap;"><strong>Volume:</strong></td>
                        <td style="border: none; padding: 4px 0;">Check your device volume is turned up</td>
                    </tr>
                    <tr>
                        <td style="border: none; padding: 4px 8px 4px 0; vertical-align: top; white-space: nowrap;"><strong>Polish voice:</strong></td>
                        <td style="border: none; padding: 4px 0;">Settings → Accessibility → Spoken Content → Voices → Download Polish</td>
                    </tr>
                    <tr>
                        <td style="border: none; padding: 4px 8px 4px 0; vertical-align: top; white-space: nowrap;"><strong>Browsers:</strong></td>
                        <td style="border: none; padding: 4px 0;">Chrome, Safari, and Edge have best Polish support</td>
                    </tr>
                    <tr>
                        <td style="border: none; padding: 4px 8px 4px 0; vertical-align: top; white-space: nowrap;"><strong>Mobile:</strong></td>
                        <td style="border: none; padding: 4px 0;">iOS and Android have built-in Polish voices</td>
                    </tr>
                </table>
            `;
        }
    }
    
    // Update footer text
    if (modalDevNote) {
        modalDevNote.innerText = isPolish 
            ? "Projekt niezależny. Twoja opinia pomaga mi w rozwoju!"
            : "Independent project. Your feedback helps me improve!";
    }
    
    if (feedbackBtn) {
        feedbackBtn.innerText = isPolish 
            ? "Prześlij opinię (Feedback)"
            : "Send Feedback";
    }
}
