/**
 * holiday.js - Enhanced Polish Holiday Data
 */

const holidayData = {
    fixed: {
        "0-1": "Nowy Rok",
        "0-6": "Święto Trzech Króli",
        "0-21": "Dzień Babci 👵",
        "0-22": "Dzień Dziadka 👴",
        "1-14": "Walentynki 💕",
        "2-8": "Dzień Kobiet 🌷",
        "3-1": "Prima Aprilis 🤡",
        "4-1": "Święto Pracy",
        "4-2": "Dzień Flagi 🇵🇱",
        "4-3": "Święto Konstytucji 3 Maja",
        "4-26": "Dzień Matki 💐",
        "5-1": "Dzień Dziecka 🧸",
        "5-23": "Dzień Ojca 👔",
        "7-15": "Wniebowzięcie NMP",
        "7-28": "Dożynki 🌾",
        "10-1": "Wszystkich Świętych",
        "10-11": "Narodowe Święto Niepodległości",
        "10-29": "Andrzejki 🕯️",
        "11-6": "Mikołajki 🎅",
        "11-24": "Wigilia Bożego Narodzenia",
        "11-25": "Boże Narodzenie",
        "11-26": "Drugi Dzień Świąt",
        "11-27": "Dzień Zwycięskiego Powstania Wielkopolskiego 🦅",
        "11-31": "Sylwester 🎆"
    },

    descriptions: {
        "Nowy Rok": "New Year's Day. While the world rests, many Poles enjoy a traditional 'Noworoczny' walk.",
        "Święto Trzech Króli": "Epiphany. You'll see 'K+M+B 2026' written in chalk on doors, representing the Three Kings blessing the home.",
        "Dzień Babci 👵": "Grandmother's Day. A huge deal in Poland! Expect kids to recite poems (laurki) for their 'Babcia'.",
        "Dzień Dziadka 👴": "Grandfather's Day. Celebrated immediately after Babcia's day, ensuring grandpas get their flowers and chocolates too.",
        "Dzień Kobiet 🌷": "Women's Day. A remnant of the past that remains popular; men often buy tulips for every woman in their office or family.",
        "Prima Aprilis 🤡": "April Fools' Day. In Poland, the rule is 'uważaj, bo się pomylisz' (watch out, or you'll be mistaken!).",
        "Święto Pracy": "Labor Day. It kicks off 'Majówka'—the legendary Polish long weekend of grilling and outdoor trips.",
        "Święto Konstytucji 3 Maja": "Constitution Day. Poland proudly celebrates having the first democratic constitution in Europe (1791).",
        "Dzień Matki 💐": "Mother's Day. A day of 'wszystkiego najlepszego' (all the best) and heart-shaped cards.",
        "Dzień Dziecka 🧸": "Children's Day. No schoolwork today! Most towns host festivals with ice cream and games for the 'małolaty' (youngsters).",
        "Dzień Ojca 👔": "Father's Day. Dads are honored with gifts, often involving 'majsterkowanie' (DIY) tools or sweets.",
        "Wniebowzięcie NMP": "Assumption Day & Polish Army Day. You'll see military parades in Warsaw and beautiful herb bouquets in churches.",
        "Wszystkich Świętych": "All Saints' Day. A stunning sight: millions of 'znicze' (candles) turn cemeteries into glowing seas of light at night.",
        "Narodowe Święto Niepodległości": "Independence Day. Commemorates 1918. Expect patriotic marches and the singing of 'Mazurek Dąbrowskiego'.",
        "Andrzejki 🕯️": "St. Andrew's Eve. The last night for parties before Advent. People pour hot wax into water to 'see' their future spouse.",
        "Drugi Dzień Świąt": "St. Stephen's Day. Traditionally a day for visiting friends and throwing grain for good harvests.",
        "Walentynki 💕": "Valentine's Day (Dzień Zakochanych). Increasingly popular day for lovers. Flowers, chocolates, and romantic gestures abound.",
        "Dzień Flagi 🇵🇱": "Day of the Flag. Celebrates Polish national colors: white and red from the eagle emblem. History dates to the Piast dynasty.",
        "Dzień Zwycięskiego Powstania Wielkopolskiego 🦅": "Greater Poland Uprising Day. Commemorates the 1918-1919 uprising that secured western Poland's independence.",
        "Sylwester 🎆": "New Year's Eve. Named after Pope Sylvester I. Major celebration with fireworks, champagne, and parties until midnight.",
        "Dożynki 🌾": "Harvest Festival. Thanksgiving for the harvest. Wreath ceremonies, bread baking from first grain, and Mass. Celebrated late August/early September.",
        "Tłusty Czwartek 🍩": "Fat Thursday. The only day it is socially mandatory to eat several 'pączki' (rose-jam donuts).",
        "Środa Popielcowa": "Ash Wednesday. Marking the transition from Carnival to the 40 days of Lent.",
        "Śmigus-Dyngus (Lany Poniedziałek) 💧": "Wet Monday tradition! Be careful! It’s a tradition to splash people with water for health and beauty.",
        "Wielki Piątek ✝️": "Good Friday. Solemn day commemorating Christ's crucifixion. Way of the Cross processions, church visits, and fasting tradition.",
        "Wielka Sobota 🥚": "Holy Saturday. Food blessing ceremony (Święconka). Baskets with eggs, bread, salt, and horseradish blessed for Easter feast.",
        "Boże Ciało ✨": "Corpus Christi. Spectacular processions with flower carpets through streets. One of Poland's most visually stunning religious celebrations.",
        "Zielone Świątki (Pentecost) 🌿": "Whit Sunday or 'Green Holidays.' Houses decorated with birch branches. Celebrates descent of Holy Spirit 50 days after Easter.",
    },

    getEaster(year) {
        const a = year % 19;
        const b = Math.floor(year / 100);
        const c = year % 100;
        const d = Math.floor(b / 4);
        const e = b % 4;
        const f = Math.floor((b + 8) / 25);
        const g = Math.floor((b - f + 1) / 3);
        const h = (19 * a + b - d - g + 15) % 30;
        const i = Math.floor(c / 4);
        const k = c % 4;
        const l = (32 + 2 * e + 2 * i - h - k) % 7;
        const m = Math.floor((a + 11 * h + 22 * l) / 451);
        const month = Math.floor((h + l - 7 * m + 114) / 31);
        const day = ((h + l - 7 * m + 114) % 31) + 1;
        return new Date(year, month - 1, day);
    },

    getEaster(year) {
        // Meeus/Jones/Butcher algorithm for Gregorian calendar
        const a = year % 19;
        const b = Math.floor(year / 100);
        const c = year % 100;
        const d = Math.floor(b / 4);
        const e = b % 4;
        const f = Math.floor((b + 8) / 25);
        const g = Math.floor((b - f + 1) / 3);
        const h = (19 * a + b - d - g + 15) % 30;
        const i = Math.floor(c / 4);
        const k = c % 4;
        const l = (32 + 2 * e + 2 * i - h - k) % 7;
        const m = Math.floor((a + 11 * h + 22 * l) / 451);
        const month = Math.floor((h + l - 7 * m + 114) / 31) - 1; // 0-indexed
        const day = ((h + l - 7 * m + 114) % 31) + 1;
        
        return new Date(year, month, day);
    },

    getHolidaysForYear(year) {
        // Christian holidays only apply after Christ's birth (year 1 AD)
        if (year < 1) {
            return {}; // No Christian holidays in BC period
        }
        
        const holidays = { ...this.fixed };
        const easter = this.getEaster(year);

        const addHoliday = (date, name) => {
            holidays[`${date.getMonth()}-${date.getDate()}`] = name;
        };

        addHoliday(easter, "Wielkanoc 🐣");

        const fatThursday = new Date(easter);
        fatThursday.setDate(easter.getDate() - 52);
        addHoliday(fatThursday, "Tłusty Czwartek 🍩");

        const ashWed = new Date(easter);
        ashWed.setDate(easter.getDate() - 46);
        addHoliday(ashWed, "Środa Popielcowa");

        // Good Friday (2 days before Easter)
        const goodFriday = new Date(easter);
        goodFriday.setDate(easter.getDate() - 2);
        addHoliday(goodFriday, "Wielki Piątek ✝️");
        
        // Holy Saturday (1 day before Easter)
        const holySaturday = new Date(easter);
        holySaturday.setDate(easter.getDate() - 1);
        addHoliday(holySaturday, "Wielka Sobota 🥚");
        
        const easterMonday = new Date(easter);
        easterMonday.setDate(easter.getDate() + 1);
        addHoliday(easterMonday, "Śmigus-Dyngus (Lany Poniedziałek) 💧");

        const pentecost = new Date(easter);
        pentecost.setDate(easter.getDate() + 49);
        addHoliday(pentecost, "Zielone Świątki (Pentecost) 🌿");

        const corpus = new Date(easter);
        corpus.setDate(easter.getDate() + 60);
        addHoliday(corpus, "Boże Ciało ✨");

        return holidays;
    }
};

export default holidayData;
