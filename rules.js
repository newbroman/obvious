/**
 * rules.js - Grammar rules with color coding
 */

import { COLORS } from './color-utils.js';



const grammarRules = {
    ordinalNumbers: {
        title: "1. Ordinal Numbers",
        explanation: "In English, we say 'January first'. In Polish, we always use ordinal numbers (1st, 2nd, 3rd) for the day. These must match the gender of the word 'day' (dzień), which is masculine.",
        rule: "Day numbers usually end in -y or -i.",
        example: "1st = pierwszy, 2nd = drugi, 3rd = trzeci"
    },
    monthCasing: {
        title: "2. The 'Of' Case (Genitive)",
        explanation: "This is the most important rule. We don't say '1 January'. We say '1st day OF January'. This possessive relationship changes the ending of the month name.",
        rule: "Most months change their ending to -a or -ego.",
        example: "Styczeń (January) becomes Stycznia (of January)"
    },
    yearStructure: {
        title: "3. Including the Year",
        explanation: "When saying a full date, Poles use the Genitive form for the year (answering 'of which year?'). We add the word 'roku' (of the year) at the end.",
        rule: "[Ordinal Number in -ego] + roku",
        example: "2026 = dwa tysiące dwudziestego szóstego roku"
    }
};


// Helper function to colorize grammatical terms and examples
function colorTerm(text, type) {
    const colors = {
        'ordinal': COLORS.ordinal,
        'genitive': COLORS.genitive,
        'year': COLORS.year,
        'roku': COLORS.genitiveMark
    };
    return `<span style="color: ${colors[type]}; font-weight: 600;">${text}</span>`;
}

export function getRulesHTML(state) {
    const currentYear = state.viewDate.getFullYear();
    const monthIndex = state.viewDate.getMonth();
    const monthKeysPl = ["stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca", "lipca", "sierpnia", "września", "października", "listopada", "grudnia"];
    const dynamicMonth = monthKeysPl[monthIndex];

    // Part 2 Rules - Now updated with the current year
    const grammarRules = {
        ordinalNumbers: {
            title: "1. Ordinal Numbers (Blue)",
            explanation: "In English, we say 'January first'. In Polish, we always use ordinal numbers (1st, 2nd, 3rd) for the day. These must match the gender of the word 'day' (dzień), which is masculine.",
            rule: "Day numbers usually end in -y or -i.",
            example: `1st = ${colorTerm('pierwszy', 'ordinal')}, 2nd = ${colorTerm('drugi', 'ordinal')}, 3rd = ${colorTerm('trzeci', 'ordinal')}`
        },
        monthCasing: {
            title: "2. The 'Of' Case (Genitive - Gold)",
            explanation: "This is the most important rule. We don't say '1 January'. We say '1st day OF January'. This possessive relationship changes the ending of the month name.",
            rule: "Most months change their ending to -a or -ego.",
            example: `Styczeń (January) becomes ${colorTerm(dynamicMonth, 'genitive')} (of ${dynamicMonth.slice(0,-1)})`
        },
       yearStructure: {
            title: "3. Including the Year (Purple + Red)",
            explanation: `When saying a full date, Poles use the Genitive form for the year. We add the word '${colorTerm('roku', 'roku')}' (of the year) at the end.`,
            rule: `[Ordinal Number in -ego] + ${colorTerm('roku', 'roku')}`,
            example: `The year ${currentYear} is spoken in its 'of' form ending in ${colorTerm('roku', 'roku')}.`
        },
        proTip: {
            title: "💡 Pro-Tip: The 'Tens & Units' Rule",
            explanation: `Only the last two numbers of a year change their endings. For ${currentYear}, the 'Two Thousand' stays the same, but the '${currentYear % 100}' becomes ${colorTerm('ordinal', 'year')}.`,
            rule: "Keep the thousands basic, change the tens and units to -ego.",
            example: `${currentYear} = ...${colorTerm('dwudziestego szóstego', 'year')} ${colorTerm('roku', 'roku')}`
        }
    };

    let html = `
        <article class="rules-container">
            <header class="rules-header">
                <h2>🇵🇱 Polish Date Mastery</h2>
                <p>Understand the logic behind the endings.</p>
            </header>
            
            <section class="color-legend" style="background: rgba(128,128,128,0.05); padding: 20px; border-radius: 8px; margin-bottom: 30px;">
                <h3 style="margin-top: 0;">🎨 Color Coding Guide</h3>
                <p style="margin-bottom: 15px;">Throughout the app, Polish date components are color-coded by their grammatical function:</p>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px;">
                    <div style="padding: 10px; border-left: 4px solid ${COLORS.ordinal}; background: rgba(52, 152, 219, 0.05);">
                        <strong style="color: ${COLORS.ordinal};">Blue</strong> = Ordinal Numbers<br>
                        <small style="color: #666;">Day numbers (pierwszy, drugiego)</small>
                    </div>
                    <div style="padding: 10px; border-left: 4px solid ${COLORS.genitive}; background: rgba(243, 156, 18, 0.05);">
                        <strong style="color: ${COLORS.genitive};">Gold</strong> = Genitive Case<br>
                        <small style="color: #666;">Month names (stycznia, lutego)</small>
                    </div>
                    <div style="padding: 10px; border-left: 4px solid ${COLORS.year}; background: rgba(155, 89, 182, 0.05);">
                        <strong style="color: ${COLORS.year};">Purple</strong> = Year Numbers<br>
                        <small style="color: #666;">Year components (dwa tysiące...)</small>
                    </div>
                    <div style="padding: 10px; border-left: 4px solid ${COLORS.genitiveMark}; background: rgba(231, 76, 60, 0.05);">
                        <strong style="color: ${COLORS.genitiveMark};">Red</strong> = Genitive Marker<br>
                        <small style="color: #666;">The word "roku"</small>
                    </div>
                </div>
            </section>
            
            <h3 class="section-divider">🔄 Part 1: Contextual Ending Changes</h3>
            
            <section class="rule-block spoken-mode">
                <h3>📅 Mode: (It is...) — Nominative (The Map)</h3>
                <p>Used for simply <strong>identifying</strong> a date on a calendar. (Answers: <em>What day is it?</em>)</p>
                <div class="full-example">
                    <span class="highlight">${colorTerm('Dziesiąty', 'ordinal')} ${colorTerm(dynamicMonth, 'genitive')} ${colorTerm(currentYear, 'year')} ${colorTerm('roku', 'roku')}</span>
                </div>
            </section>

            <section class="rule-block written-mode">
                <h3>🎉 Mode: (It's on...) — Genitive (The Event)</h3>
                <p><strong>Primary Mode.</strong> Used for scheduling, parties, and appointments. (Answers: <em>When?</em>)</p>
                <div class="full-example">
                    <span class="highlight">${colorTerm('Dziesiątego', 'ordinal')} ${colorTerm(dynamicMonth, 'genitive')} ${colorTerm(currentYear, 'year')} ${colorTerm('roku', 'roku')}</span>
                </div>
            </section>

            <hr class="rule-divider">
            <h3 class="section-divider">📖 Part 2: Core Principles</h3>
    `;

    // Render Part 2 with the dynamic examples
    Object.values(grammarRules).forEach(item => {
        html += `
            <section class="rule-block core-rule">
                <h4>${item.title}</h4>
                <p>${item.explanation}</p>
                <p><strong>Rule:</strong> ${item.rule}</p>
                <p><em>Example: ${item.example}</em></p>
            </section>
        `;
    });

    html += `
            <hr class="rule-divider">
            <h3 class="section-divider">🏠 Part 3: The "Address" Analogy</h3>
            <section class="rule-block analogy-section">
                <p>Think of Polish grammar like <strong>arranging furniture in a room.</strong> Here is how it works with the year included:</p>

                <div class="analogy-box" style="border-left: 4px solid var(--text-dim); background: rgba(0,0,0,0.02); margin-bottom: 10px;">
                     <h4>🪧 The Signpost (Day of the Week)</h4>
                     <p>The day name (like <em>Wtorek</em> or <em>Sobota</em>) is just the signpost at the end of the driveway. It always stays in its basic name form (Nominative) because it's just a label.</p>
                </div>

                <div class="analogy-box" style="background: rgba(128,128,128,0.05); border-left: 4px solid #666; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
                    <h4>🏗️ The Building (The Year)</h4>
                    <p>The <strong>Year (${currentYear})</strong> is the building. It never moves. Because everything happens "of that year," it is always locked in the possessive case: <strong>${currentYear} roku</strong>.</p>
                </div>

                <div class="analogy-box" style="border-left: 4px solid #ffd700; padding: 15px; background: rgba(255, 215, 0, 0.05);">
                    <h4>🎉 Mode: (It's on...) — The Event</h4>
                    <p>You are actually <strong>using</strong> the room for a party. Because an action is happening "on" the day, the <strong>Day</strong> furniture shifts to the Genitive to match the room.</p>
                    <p><strong>Result:</strong> <em>${colorTerm('Dziesiątego', 'ordinal')} ${colorTerm(dynamicMonth, 'genitive')}...</em></p>
                </div>

                <div class="analogy-box" style="border-left: 4px solid #4a90e2; margin-top: 15px; padding: 15px; background: rgba(74, 144, 226, 0.05);">
                    <h4>📅 Mode: (It is...) — The Map</h4>
                    <p>You are standing outside the building looking at a map. You are just naming the coordinates. The <strong>Day</strong> furniture stays in its basic form.</p>
                    <p><strong>Result:</strong> <em>${colorTerm('Dziesiąty', 'ordinal')} ${colorTerm(dynamicMonth, 'genitive')}...</em></p>
                </div>
            </section>
        </article>
    `;

    return html;
}
