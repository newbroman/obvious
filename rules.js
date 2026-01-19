/**
 * rules.js - Comprehensive Polish Date Grammar
 * Focus: Cardinal vs Ordinal, Nominative vs Genitive
 */

import { COLORS } from './color-utils.js';

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

    let html = `
        <article class="rules-container">
            <header class="rules-header">
                <h2>🇵🇱 Polish Date Grammar Explained</h2>
                <p>Master the two key transformations: Cardinal → Ordinal, Nominative → Genitive</p>
            </header>
            
            <section class="color-legend" style="background: rgba(128,128,128,0.05); padding: 20px; border-radius: 8px; margin-bottom: 30px;">
                <h3 style="margin-top: 0;">🎨 Color Coding Guide</h3>
                <p style="margin-bottom: 15px;">Polish date components are color-coded by their grammatical function:</p>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px;">
                    <div style="padding: 10px; border-left: 4px solid ${COLORS.ordinalNominative}; background: rgba(74, 144, 226, 0.05);">
                        <strong style="color: ${COLORS.ordinalNominative};">Blue</strong> = Nominative Ordinals<br>
                        <small style="color: #666;">pierwszy, drugi, trzeci (Today is...)</small>
                    </div>
                    <div style="padding: 10px; border-left: 4px solid ${COLORS.ordinalGenitive}; background: rgba(255, 215, 0, 0.05);">
                        <strong style="color: ${COLORS.ordinalGenitive};">Gold</strong> = Genitive Ordinals<br>
                        <small style="color: #666;">pierwszego, drugiego, trzeciego (It's on...)</small>
                    </div>
                    <div style="padding: 10px; border-left: 4px solid ${COLORS.genitive}; background: rgba(243, 156, 18, 0.05);">
                        <strong style="color: ${COLORS.genitive};">Orange</strong> = Genitive Months<br>
                        <small style="color: #666;">stycznia, lutego, marca</small>
                    </div>
                    <div style="padding: 10px; border-left: 4px solid ${COLORS.year}; background: rgba(155, 89, 182, 0.05);">
                        <strong style="color: ${COLORS.year};">Purple</strong> = Year Components<br>
                        <small style="color: #666;">dwa tysiące dwudziestego szóstego</small>
                    </div>
                    <div style="padding: 10px; border-left: 4px solid ${COLORS.genitiveMark}; background: rgba(231, 76, 60, 0.05);">
                        <strong style="color: ${COLORS.genitiveMark};">Red</strong> = Genitive Marker<br>
                        <small style="color: #666;">roku (of the year)</small>
                    </div>
                </div>
            </section>

            <h3 class="section-divider">🔑 The Two Key Transformations</h3>
            
            <section class="rule-block" style="background: rgba(52, 152, 219, 0.08); border-left: 5px solid ${COLORS.ordinal}; padding: 20px; margin-bottom: 25px; border-radius: 0 8px 8px 0;">
                <h3>Transformation 1️⃣: Cardinal → Ordinal (Number Type)</h3>
                <p><strong>English equivalent:</strong> "one" → "first", "two" → "second", "three" → "third"</p>
                <p>In Polish, dates ALWAYS use ordinal numbers for days, never cardinals.</p>
                
                <div style="background: white; padding: 15px; border-radius: 6px; margin: 15px 0;">
                    <table style="width: 100%; border-collapse: collapse;">
                        <thead>
                            <tr style="border-bottom: 2px solid #ddd;">
                                <th style="text-align: left; padding: 8px;">Cardinal (Counting)</th>
                                <th style="text-align: left; padding: 8px;">Ordinal Nominative</th>
                                <th style="text-align: left; padding: 8px;">Ordinal Genitive</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom: 1px solid #eee;">
                                <td style="padding: 8px;">jeden (one)</td>
                                <td style="padding: 8px;">${colorTerm('pierwszy', 'ordinalNom')} (first)</td>
                                <td style="padding: 8px;">${colorTerm('pierwszego', 'ordinalGen')} (of the first)</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #eee;">
                                <td style="padding: 8px;">dwa (two)</td>
                                <td style="padding: 8px;">${colorTerm('drugi', 'ordinalNom')} (second)</td>
                                <td style="padding: 8px;">${colorTerm('drugiego', 'ordinalGen')} (of the second)</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #eee;">
                                <td style="padding: 8px;">trzy (three)</td>
                                <td style="padding: 8px;">${colorTerm('trzeci', 'ordinalNom')} (third)</td>
                                <td style="padding: 8px;">${colorTerm('trzeciego', 'ordinalGen')} (of the third)</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #eee;">
                                <td style="padding: 8px;">dziesięć (ten)</td>
                                <td style="padding: 8px;">${colorTerm('dziesiąty', 'ordinal')} (tenth)</td>
                                <td style="padding: 8px;">${colorTerm('dziesiątego', 'ordinal')} (of the tenth)</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px;">piętnaście (fifteen)</td>
                                <td style="padding: 8px;">${colorTerm('piętnasty', 'ordinal')} (fifteenth)</td>
                                <td style="padding: 8px;">${colorTerm('piętnastego', 'ordinal')} (of the fifteenth)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <p><strong>Pattern:</strong> Ordinal nominative ends in <code>-y</code> or <code>-i</code>, ordinal genitive ends in <code>-ego</code></p>
            </section>

            <section class="rule-block" style="background: rgba(243, 156, 18, 0.08); border-left: 5px solid ${COLORS.genitive}; padding: 20px; margin-bottom: 25px; border-radius: 0 8px 8px 0;">
                <h3>Transformation 2️⃣: Nominative → Genitive (Case)</h3>
                <p><strong>English equivalent:</strong> "January" → "of January", "the year 2026" → "of the year 2026"</p>
                <p>The genitive case expresses possession or relationship ("of"). In dates, it answers "when?" by saying "on the [date] OF [month] OF [year]".</p>
                
                <div style="background: white; padding: 15px; border-radius: 6px; margin: 15px 0;">
                    <h4 style="margin-top: 0;">Months Transform:</h4>
                    <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                        <thead>
                            <tr style="border-bottom: 2px solid #ddd;">
                                <th style="text-align: left; padding: 8px;">Nominative (Name)</th>
                                <th style="text-align: left; padding: 8px;">Genitive (Of...)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom: 1px solid #eee;">
                                <td style="padding: 8px;">Styczeń (January)</td>
                                <td style="padding: 8px;">${colorTerm('stycznia', 'genitive')} (of January)</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #eee;">
                                <td style="padding: 8px;">Luty (February)</td>
                                <td style="padding: 8px;">${colorTerm('lutego', 'genitive')} (of February)</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #eee;">
                                <td style="padding: 8px;">Marzec (March)</td>
                                <td style="padding: 8px;">${colorTerm('marca', 'genitive')} (of March)</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px;">Kwiecień (April)</td>
                                <td style="padding: 8px;">${colorTerm('kwietnia', 'genitive')} (of April)</td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <h4 style="margin-top: 15px;">Year Marker Transforms:</h4>
                    <p style="margin: 10px 0;">
                        rok (year) → ${colorTerm('roku', 'roku')} (of the year)
                    </p>
                    <p style="color: #666; font-size: 0.9em;">
                        The word "roku" is ALWAYS added after the year number in dates to mark the genitive case.
                    </p>
                </div>
                
                <p><strong>Pattern:</strong> Most months end in <code>-a</code>, some in <code>-ego</code>. Year always gets ${colorTerm('roku', 'roku')} suffix.</p>
            </section>

            <hr class="rule-divider">
            <h3 class="section-divider">📅 Putting It Together: The Two Modes</h3>

            <section class="rule-block spoken-mode" style="border-left: 5px solid #4a90e2; background: rgba(74, 144, 226, 0.08); padding: 20px; margin-bottom: 20px; border-radius: 0 8px 8px 0;">
                <h3>Mode A: Nominative (Identifying - "It is...")</h3>
                <p>Used when simply naming or identifying a date. Like pointing at a calendar square.</p>
                <p><strong>Question answered:</strong> <em>What day is it?</em></p>
                
                <div style="background: white; padding: 15px; border-radius: 6px; margin: 15px 0;">
                    <p style="margin: 0 0 10px 0;"><strong>Structure:</strong></p>
                    <p style="font-size: 1.1em; margin: 10px 0;">
                        [Day Name] + ${colorTerm('Ordinal-Nominative', 'ordinal')} + ${colorTerm('Month-Genitive', 'genitive')} + ${colorTerm('Year', 'year')} ${colorTerm('roku', 'roku')}
                    </p>
                    <p style="margin: 15px 0 5px 0;"><strong>Example (10th ${dynamicMonth} ${currentYear}):</strong></p>
                    <p style="font-size: 1.2em; margin: 5px 0;">
                        Wtorek, ${colorTerm('dziesiąty', 'ordinal')} ${colorTerm(dynamicMonth, 'genitive')} ${colorTerm('dwa tysiące dwudziestego szóstego', 'year')} ${colorTerm('roku', 'roku')}
                    </p>
                    <p style="color: #666; font-size: 0.9em; margin-top: 10px;">
                        Notice: ${colorTerm('dziesiąty', 'ordinal')} (nominative ending: -y)
                    </p>
                </div>
            </section>

            <section class="rule-block written-mode" style="border-left: 5px solid #ffd700; background: rgba(255, 215, 0, 0.08); padding: 20px; margin-bottom: 25px; border-radius: 0 8px 8px 0;">
                <h3>Mode B: Genitive (Scheduling - "It's on...")</h3>
                <p><strong>PRIMARY MODE for dates.</strong> Used for events, appointments, birthdays - anything happening "on" a date.</p>
                <p><strong>Question answered:</strong> <em>When is it?</em> (On what date?)</p>
                
                <div style="background: white; padding: 15px; border-radius: 6px; margin: 15px 0;">
                    <p style="margin: 0 0 10px 0;"><strong>Structure:</strong></p>
                    <p style="font-size: 1.1em; margin: 10px 0;">
                        [Day Name] + ${colorTerm('Ordinal-GENITIVE', 'ordinal')} + ${colorTerm('Month-Genitive', 'genitive')} + ${colorTerm('Year', 'year')} ${colorTerm('roku', 'roku')}
                    </p>
                    <p style="margin: 15px 0 5px 0;"><strong>Example (10th ${dynamicMonth} ${currentYear}):</strong></p>
                    <p style="font-size: 1.2em; margin: 5px 0;">
                        Wtorek, ${colorTerm('dziesiątego', 'ordinal')} ${colorTerm(dynamicMonth, 'genitive')} ${colorTerm('dwa tysiące dwudziestego szóstego', 'year')} ${colorTerm('roku', 'roku')}
                    </p>
                    <p style="color: #666; font-size: 0.9em; margin-top: 10px;">
                        Notice: ${colorTerm('dziesiątego', 'ordinal')} (genitive ending: -ego)
                    </p>
                </div>
                
                <div style="background: #fffbf0; border: 2px solid #ffd700; padding: 15px; border-radius: 6px; margin-top: 15px;">
                    <h4 style="margin-top: 0;">🎯 The Critical Difference</h4>
                    <p style="margin-bottom: 8px;"><strong>Nominative:</strong> ${colorTerm('dziesiąty', 'ordinal')} (tenth) - ends in <code>-y</code></p>
                    <p style="margin-bottom: 0;"><strong>Genitive:</strong> ${colorTerm('dziesiątego', 'ordinal')} (of the tenth) - ends in <code>-ego</code></p>
                    <p style="margin-top: 12px; color: #666; font-size: 0.9em;">
                        This is the hardest part of Polish dates! The day number changes from -y to -ego when you're talking about an event happening "on" that date.
                    </p>
                </div>
            </section>

            <hr class="rule-divider">
            <h3 class="section-divider">🧮 Quick Reference: Common Day Numbers</h3>
            
            <section class="rule-block" style="padding: 20px;">
                <div style="background: white; padding: 15px; border-radius: 6px;">
                    <table style="width: 100%; border-collapse: collapse;">
                        <thead>
                            <tr style="border-bottom: 2px solid #ddd;">
                                <th style="text-align: left; padding: 8px;">Day</th>
                                <th style="text-align: left; padding: 8px;">Nominative (It is...)</th>
                                <th style="text-align: left; padding: 8px;">Genitive (On the...)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom: 1px solid #eee;">
                                <td style="padding: 8px;">1st</td>
                                <td style="padding: 8px;">${colorTerm('pierwszy', 'ordinalNom')}</td>
                                <td style="padding: 8px;">${colorTerm('pierwszego', 'ordinalGen')}</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #eee;">
                                <td style="padding: 8px;">5th</td>
                                <td style="padding: 8px;">${colorTerm('piąty', 'ordinal')}</td>
                                <td style="padding: 8px;">${colorTerm('piątego', 'ordinalGen')}</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #eee;">
                                <td style="padding: 8px;">10th</td>
                                <td style="padding: 8px;">${colorTerm('dziesiąty', 'ordinal')}</td>
                                <td style="padding: 8px;">${colorTerm('dziesiątego', 'ordinal')}</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #eee;">
                                <td style="padding: 8px;">15th</td>
                                <td style="padding: 8px;">${colorTerm('piętnasty', 'ordinal')}</td>
                                <td style="padding: 8px;">${colorTerm('piętnastego', 'ordinal')}</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #eee;">
                                <td style="padding: 8px;">20th</td>
                                <td style="padding: 8px;">${colorTerm('dwudziesty', 'ordinal')}</td>
                                <td style="padding: 8px;">${colorTerm('dwudziestego', 'ordinal')}</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px;">31st</td>
                                <td style="padding: 8px;">${colorTerm('trzydziesty pierwszy', 'ordinal')}</td>
                                <td style="padding: 8px;">${colorTerm('trzydziestego pierwszego', 'ordinal')}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <hr class="rule-divider">
            <h3 class="section-divider">💡 Memory Tips</h3>
            
            <section class="rule-block" style="background: rgba(128,128,128,0.05); padding: 20px;">
                <h4>🎯 Tip 1: Think "OF"</h4>
                <p>Genitive = "of". When you say an event is "on the 15th OF January", both the day and month need the "of" form (genitive).</p>
                <p style="margin-top: 10px;">
                    ✅ ${colorTerm('piętnastego', 'ordinal')} ${colorTerm('stycznia', 'genitive')} = "of the fifteenth of January"
                </p>
                
                <h4 style="margin-top: 20px;">🎯 Tip 2: Listen for -ego</h4>
                <p>The sound <code>-ego</code> at the end of the day number is your signal that you're in genitive mode (scheduling/event mode).</p>
                
                <h4 style="margin-top: 20px;">🎯 Tip 3: ${colorTerm('roku', 'roku')} is Always There</h4>
                <p>When you include the year in a date, you ALWAYS add ${colorTerm('roku', 'roku')} at the end. No exceptions.</p>
                
                <h4 style="margin-top: 20px;">🎯 Tip 4: Months are ALWAYS Genitive</h4>
                <p>Whether you're in nominative or genitive mode for the day, the month is ALWAYS in genitive form (${colorTerm('stycznia', 'genitive')}, ${colorTerm('lutego', 'genitive')}, etc.).</p>
            </section>

        </article>
    `;

    return html;
}
