// === Footer: année actuelle ===
const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

// === Footer: date de dernière modification ===
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;

// === Données météo statiques ===
const temperature = 20; // °C
const windSpeed = 5;    // km/h

// === Fonction pour calculer le windchill ===
function calculateWindChill(temp, wind) {
    // Formule du windchill en °C
    return Math.round(
        13.12 + 0.6215*temp - 11.37*Math.pow(wind, 0.16) + 0.3965*temp*Math.pow(wind, 0.16)
    );
}

// === Calcul et affichage du windchill ===
let windchillDisplay = "N/A";

// Conditions pour calculer le windchill (°C et km/h)
if (temperature <= 10 && windSpeed > 4.8) {
    windchillDisplay = `${calculateWindChill(temperature, windSpeed)} °C`;
}

// Affichage dans la page
document.getElementById("windchill").textContent = windchillDisplay;
