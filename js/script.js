console.log('Hallo Welt!');

const url_mountain = 'json/mountains.json';
async function loadMountains() {
    try {
        const response = await fetch(url_mountain);
        return await response.json();
    } catch (error) {
        console.error(error);
        return false;
    }
}
const mountains = await loadMountains();
console.log(mountains); // gibt die Daten der API oder false in der Konsole aus

async function loadWeather(mountains) {
    const weatherData = [];

    for (const mountain of mountains) {
        const lat = parseFloat(mountain.lat.toString().replace(/\s/g, ''));
        const lon = parseFloat(mountain.long.toString().replace(/\s/g, ''));
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code`;

        try {
            const response = await fetch(url);
            const data = await response.json();

            if (!data.current) throw new Error("Kein gültiges 'current'-Objekt");

            weatherData.push({
                id: mountain.id,
                temperature: data.current.temperature_2m,
                weather_code: data.current.weather_code
            });
        } catch (error) {
            console.error(`Fehler bei ${mountain.name}:`, error);
            weatherData.push({
                id: mountain.id,
                temperature: null,
                weather_code: null
            });
        }
    }

    return weatherData;
}


// Beispiel-Aufruf:
const weather = await loadWeather(mountains);
console.log(weather); // Array mit Wetterdaten zu jedem Berg
