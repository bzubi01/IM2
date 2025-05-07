console.log('Hallo Welt!');

const url = 'json/mountains.json';
async function loadMountains() {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error(error);
        return false;
    }
}
const mountains = await loadMountains();
console.log(mountains); // gibt die Daten der API oder false in der Konsole aus