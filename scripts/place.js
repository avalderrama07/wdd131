const today = new Date();
document.querySelector("#currentyear").textContent = today.getFullYear();

document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

const temperature = 26;
const windSpeed = 14;

function calculateWindChill(temp, speed) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16).toFixed(1) + " °C";
}

const windChillElement = document.getElementById("windchill");

if (temperature <= 10 && windSpeed > 4.8) {
    windChillElement.textContent = calculateWindChill(temperature, windSpeed);
} else {
    windChillElement.textContent = "N/A";
}