/**
 * historical-events.js - Historical events database for dates before 1000 AD and medieval Poland
 * 
 * Structure:
 * - Key format: "YYYY-MM-DD" (negative years for BC)
 * - Each event has:
 *   - name (English)
 *   - namePl (Polish)
 *   - description (English)
 *   - descriptionPl (Polish)
 *   - era (ancient-rome, early-poland, medieval-poland, etc.)
 *   - importance (low, medium, high, critical)
 *   - type (legendary, historical, battle, political, religious, cultural)
 */

export const historicalEvents = {
    // ===== ANCIENT ROME (753 BC - 476 AD) =====
    
    "-753-04-21": {
        name: "Founding of Rome",
        namePl: "Założenie Rzymu",
        description: "According to legend, Romulus founded the city of Rome on the Palatine Hill",
        descriptionPl: "Według legendy, Romulus założył miasto Rzym na Wzgórzu Palatyńskim",
        era: "ancient-rome",
        importance: "critical",
        type: "legendary"
    },
    
    "-509-01-01": {
        name: "Foundation of Roman Republic",
        namePl: "Założenie Republiki Rzymskiej",
        description: "Rome transitioned from monarchy to republic after expelling the last king",
        descriptionPl: "Rzym przeszedł od monarchii do republiki po wygnaniu ostatniego króla",
        era: "ancient-rome",
        importance: "critical",
        type: "political"
    },
    
    "-264-01-01": {
        name: "First Punic War Begins",
        namePl: "Początek Pierwszej Wojny Punickiej",
        description: "Rome and Carthage began their first major conflict for control of the Mediterranean",
        descriptionPl: "Rzym i Kartagina rozpoczęły pierwszy wielki konflikt o kontrolę nad Morzem Śródziemnym",
        era: "ancient-rome",
        importance: "high",
        type: "battle"
    },
    
    "-218-01-01": {
        name: "Second Punic War / Hannibal's Campaign",
        namePl: "Druga Wojna Punicka / Kampania Hannibala",
        description: "Hannibal crossed the Alps with elephants to invade Italy",
        descriptionPl: "Hannibal przekroczył Alpy ze słoniami, aby najechać na Italię",
        era: "ancient-rome",
        importance: "high",
        type: "battle"
    },
    
    "-44-03-15": {
        name: "Assassination of Julius Caesar",
        namePl: "Zamordowanie Juliusza Cezara",
        description: "Julius Caesar was assassinated by senators on the Ides of March",
        descriptionPl: "Juliusz Cezar został zamordowany przez senatorów w Idy Marcowe",
        era: "ancient-rome",
        importance: "critical",
        type: "political"
    },
    
    "-27-01-16": {
        name: "Augustus Becomes First Roman Emperor",
        namePl: "Oktawian August Zostaje Pierwszym Cesarzem Rzymskim",
        description: "Octavian received the title Augustus, marking the beginning of the Roman Empire",
        descriptionPl: "Oktawian otrzymał tytuł Augusta, co oznaczało początek Cesarstwa Rzymskiego",
        era: "ancient-rome",
        importance: "critical",
        type: "political"
    },
    
    "0-01-01": {
        name: "Traditional Birth Year of Jesus Christ",
        namePl: "Tradycyjny Rok Narodzin Jezusa Chrystusa",
        description: "Year 1 in the Christian calendar (though historians debate the actual date)",
        descriptionPl: "Rok 1 w kalendarzu chrześcijańskim (choć historycy dyskutują o rzeczywistej dacie)",
        era: "ancient-rome",
        importance: "critical",
        type: "religious"
    },
    
    "476-09-04": {
        name: "Fall of Western Roman Empire",
        namePl: "Upadek Cesarstwa Zachodniorzymskiego",
        description: "Romulus Augustulus, last Western Roman Emperor, was deposed",
        descriptionPl: "Romulus Augustulus, ostatni cesarz zachodniorzymski, został obalony",
        era: "ancient-rome",
        importance: "critical",
        type: "political"
    },
    
    // ===== EARLY POLAND (Before 966 AD) =====
    
    "960-01-01": {
        name: "Beginning of Polish State",
        namePl: "Początek Państwa Polskiego",
        description: "Duke Mieszko I began consolidating Polish tribes under Piast rule",
        descriptionPl: "Książę Mieszko I rozpoczął konsolidację plemion polskich pod rządami Piastów",
        era: "early-poland",
        importance: "critical",
        type: "political"
    },
    
    // ===== MEDIEVAL POLAND (966 - 1500 AD) =====
    
    "966-04-14": {
        name: "Baptism of Poland",
        namePl: "Chrzest Polski",
        description: "Duke Mieszko I accepted Christianity from Rome, bringing Poland into Western Christendom",
        descriptionPl: "Książę Mieszko I przyjął chrześcijaństwo z Rzymu, wprowadzając Polskę do zachodniej chrześcijaństwa",
        era: "medieval-poland",
        importance: "critical",
        type: "religious"
    },
    
    "972-06-24": {
        name: "Battle of Cedynia",
        namePl: "Bitwa pod Cedynią",
        description: "Mieszko I defeated German forces, securing Poland's independence",
        descriptionPl: "Mieszko I pokonał siły niemieckie, zabezpieczając niepodległość Polski",
        era: "medieval-poland",
        importance: "high",
        type: "battle"
    },
    
    "992-05-25": {
        name: "Death of Mieszko I",
        namePl: "Śmierć Mieszka I",
        description: "The founder of the Polish state died, succeeded by his son Bolesław I the Brave",
        descriptionPl: "Założyciel państwa polskiego zmarł, jego następcą został syn Bolesław I Chrobry",
        era: "medieval-poland",
        importance: "high",
        type: "political"
    },
    
    "1000-03-01": {
        name: "Congress of Gniezno",
        namePl: "Zjazd Gnieźnieński",
        description: "Holy Roman Emperor Otto III met with Bolesław I, recognizing Poland's sovereignty",
        descriptionPl: "Cesarz rzymsko-niemiecki Otton III spotkał się z Bolesławem I, uznając suwerenność Polski",
        era: "medieval-poland",
        importance: "critical",
        type: "political"
    },
    
    "1025-12-25": {
        name: "Coronation of Bolesław I the Brave",
        namePl: "Koronacja Bolesława I Chrobrego",
        description: "Bolesław I became the first crowned King of Poland",
        descriptionPl: "Bolesław I został pierwszym koronowanym królem Polski",
        era: "medieval-poland",
        importance: "critical",
        type: "political"
    },
    
    "1410-07-15": {
        name: "Battle of Grunwald",
        namePl: "Bitwa pod Grunwaldem",
        description: "Polish-Lithuanian forces decisively defeated the Teutonic Knights in one of medieval Europe's largest battles",
        descriptionPl: "Siły polsko-litewskie pokonały Zakon Krzyżacki w jednej z największych bitew średniowiecznej Europy",
        era: "medieval-poland",
        importance: "critical",
        type: "battle"
    },
    
    "1466-10-19": {
        name: "Second Peace of Thorn",
        namePl: "Drugi Pokój Toruński",
        description: "Treaty ending the Thirteen Years' War, Teutonic Order became Polish vassal",
        descriptionPl: "Traktat kończący wojnę trzynastoletnią, Zakon Krzyżacki stał się lennikiem Polski",
        era: "medieval-poland",
        importance: "high",
        type: "political"
    }
};

/**
 * Era definitions with colors and icons
 */
export const eras = {
    "ancient-rome": {
        name: "Ancient Rome",
        namePl: "Starożytny Rzym",
        color: "#8B4513", // Brown
        icon: "🏛️",
        period: "753 BC - 476 AD"
    },
    "early-poland": {
        name: "Early Poland",
        namePl: "Wczesna Polska",
        color: "#4A5568", // Gray
        icon: "⚔️",
        period: "Before 966 AD"
    },
    "medieval-poland": {
        name: "Medieval Poland",
        namePl: "Średniowieczna Polska",
        color: "#C41E3A", // Polish red
        icon: "🛡️",
        period: "966 - 1500 AD"
    }
};

/**
 * Get historical event for a specific date
 * @param {Date} date - The date to check
 * @returns {Object|null} - Event object or null
 */
export function getHistoricalEvent(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const key = `${year}-${month}-${day}`;
    
    return historicalEvents[key] || null;
}

/**
 * Get all events for a specific year
 * @param {number} year - The year to check
 * @returns {Array} - Array of events with dates
 */
export function getEventsForYear(year) {
    const events = [];
    const yearStr = String(year);
    
    for (const [key, event] of Object.entries(historicalEvents)) {
        if (key.startsWith(yearStr + '-')) {
            const [y, m, d] = key.split('-').map(Number);
            events.push({
                ...event,
                date: new Date(y, m - 1, d),
                dateKey: key
            });
        }
    }
    
    return events.sort((a, b) => a.date - b.date);
}

/**
 * Check if date has historical event
 * @param {Date} date - The date to check
 * @returns {boolean}
 */
export function hasHistoricalEvent(date) {
    return getHistoricalEvent(date) !== null;
}

export default {
    events: historicalEvents,
    eras,
    getHistoricalEvent,
    getEventsForYear,
    hasHistoricalEvent
};
