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
let all_mountains_with_details = [];
console.log(mountains); // gibt die Daten der API oder false in der Konsole aus

async function loadMountainsDetails(url_mountain) {
    try {
        const response = await fetch(url);
        const answer = await response.json();
        // array all_pokemon_with_details mit den details aus den detaildaten befüllen
        return {
            id: answer.id,
            canton: answer.canton,
            name: answer.name,
            height: answer.height,
            lat: answer.lat,
            long: answer.long,
            image: answer.image
        };
    } catch (error) {
        console.error(error);
        return error;
    } 
}
for (const [key, mountains] of all_mountains_with_details.entries()) {
    const details = await loadMountainsDetails(mountains.url);
    all_mountains_with_details.push(details);
}


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

// unsere pokemon ins HTML/DOM einfüllen
const cards_container = document.querySelector('.cards');
mountains.forEach(mountain => {
    const currentWeather = weather.find(w => w.id === mountain.id); // Wetterdaten zum Berg suchen

    const card = `<div class="div-column"><h2 class="canton-name">${mountain.canton}</h2>
        <div class="card">
        <div class="image-container">
            <img src="img/mountains/${mountain.id}.jpg" alt="${mountain.name}" class="card-image">
            <div class="text-overlay">
                <h2 class="mountain-name">${mountain.name}</h2>
                <p class="coordinates">${mountain.coords}</p>
            </div>
        </div>
        <div class="card-bottom">
            <div class="info">
                <img src="icons/hoehe.png" alt="Höhe" class="icon">
                <p>${mountain.height} m ü. M.</p>
            </div>
            <div class="info">
                <img src="icons/${currentWeather?.weather_code ?? 'unknown'}.png" alt="Wetter" class="icon">
                <p>${currentWeather?.temperature ?? '--'} °C</p>
            </div>
        </div>
    </div>
    </div>`;

    cards_container.innerHTML += card;
});
