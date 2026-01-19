(function() {
    let namedaysData = null;

    async function loadNamedaysData() {
        if (!namedaysData) {
            try {
                const response = await fetch('./namedays.json');
                namedaysData = await response.json();
                console.log('Namedays data loaded, sample keys:', Object.keys(namedaysData).slice(0, 5));
            } catch (error) {
                console.error('Error loading namedays data:', error);
                namedaysData = {};
            }
        }
        return namedaysData;
    }

    window.getNamesForDate = async function(date) {
        const data = await loadNamedaysData();
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const dateKey = `${day}-${month}`;
        const names = data[dateKey] || [];
        console.log(`getNamesForDate called: ${date.toDateString()} -> key: ${dateKey} -> found ${names.length} names`, names);
        return names;
    };
})();
