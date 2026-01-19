/**
 * color-utils.js - Grammar-based color coding for Polish date phrases
 */

// Color scheme for grammatical components
const GRAMMAR_COLORS = {
    context: '#95a5a6',      // Gray - "Dzisiaj jest", day names
    ordinal: '#3498db',      // Blue - Ordinal day numbers
    genitive: '#f39c12',     // Gold - Genitive month names
    year: '#9b59b6',         // Purple - Year numbers
    genitiveMark: '#e74c3c'  // Red - "roku" marker
};

// Genitive month names (all lowercase for matching)
const GENITIVE_MONTHS = [
    'stycznia', 'lutego', 'marca', 'kwietnia', 'maja', 'czerwca',
    'lipca', 'sierpnia', 'września', 'października', 'listopada', 'grudnia'
];

/**
 * Colorize a Polish date phrase with grammar-based color coding
 * @param {string} phrase - The Polish date phrase
 * @param {boolean} includeYear - Whether the phrase includes a year
 * @returns {string} HTML string with colored spans
 */
export function colorizePolishPhrase(phrase, includeYear = false) {
    if (!phrase || phrase === "Wybierz datę") {
        return phrase;
    }
    
    let colored = phrase;
    
    // 1. Color the day name (context - gray)
    const dayNames = ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'];
    dayNames.forEach(day => {
        const regex = new RegExp(`(${day})`, 'g');
        colored = colored.replace(regex, `<span style="color: ${GRAMMAR_COLORS.context}">$1</span>`);
    });
    
    // 2. Color genitive month names (gold)
    GENITIVE_MONTHS.forEach(month => {
        // Case-insensitive match, preserve original case
        const regex = new RegExp(`(${month})`, 'gi');
        colored = colored.replace(regex, `<span style="color: ${GRAMMAR_COLORS.genitive}; font-weight: 600;">$1</span>`);
    });
    
    // 3. Color "roku" marker (red) if year is included
    if (includeYear) {
        colored = colored.replace(/(roku)/g, `<span style="color: ${GRAMMAR_COLORS.genitiveMark}; font-weight: 600;">$1</span>`);
    }
    
    // 4. Color ordinal day numbers (blue)
    // Common ordinal endings: -ego, -y, -i, -iego, -szego
    const ordinalPattern = /(pierwszego|drugiego|trzeciego|czwartego|piątego|szóstego|siódmego|ósmego|dziewiątego|dziesiątego|jedenastego|dwunastego|trzynastego|czternastego|piętnastego|szesnastego|siedemnastego|osiemnastego|dziewiętnastego|dwudziestego|pierwszego|drugiego|trzeciego|czwartego|piątego|szóstego|siódmego|ósmego|dziewiątego)/gi;
    colored = colored.replace(ordinalPattern, `<span style="color: ${GRAMMAR_COLORS.ordinal}; font-weight: 600;">$1</span>`);
    
    // 5. Color year numbers (purple) - match multi-word year phrases
    if (includeYear) {
        // Match patterns like "dwa tysiące dwudziestego szóstego"
        const yearPattern = /(dwa tysiące [\w\s]+?)(?=\s+roku)/gi;
        colored = colored.replace(yearPattern, `<span style="color: ${GRAMMAR_COLORS.year}; font-weight: 600;">$1</span>`);
    }
    
    return colored;
}

/**
 * Get plain text from colored HTML (for TTS)
 * @param {HTMLElement} element - Element containing colored HTML
 * @returns {string} Plain text without HTML tags
 */
export function getPlainText(element) {
    return element.innerText || element.textContent;
}

export const COLORS = GRAMMAR_COLORS;
