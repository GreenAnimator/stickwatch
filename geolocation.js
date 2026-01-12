import momento from './hora.js';

const tempText = document.getElementById("temp-text");
const weatherStateText = document.getElementById("clima");
const fondo = document.getElementById("fondo");

navigator.geolocation.getCurrentPosition(async (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const response = await fetch(`http://localhost:3000/api/clima?lat=${lat}&lon=${lon}`);
    const data = await response.json();
    const temp = Math.round(data.main.temp);
    const weather = data.weather[0].main.toLowerCase();
    const weatherDesc = data.weather[0].description;

    console.log(weatherDesc);

    if (weather.includes("clear")) {
        weatherStateText.textContent = "Soleado";
        if (momento == "afternoon" || momento == "night") {
            weatherStateText.textContent = "Despejado";
        }
    } else if (weather.includes("clouds")) {
        weatherStateText.textContent = "Nublado";
        if (momento == "day") {
            fondo.style.backgroundImage = "linear-gradient(to bottom, #677389, #576072ff)";
        }
        if (momento == "afternoon") {
            fondo.style.backgroundImage = "linear-gradient(to bottom, #4e5666ff, #434957ff)";
        }
        if (momento == "night") {
            fondo.style.backgroundImage = "linear-gradient(to bottom, #0c0d0fff, #0c0d0fff)";
        }
    } else if (weather.includes("rain")) {
        weatherStateText.textContent = "Lluvia";
        if (momento = "day") {
            fondo.style.backgroundImage = "linear-gradient(to bottom, #555f72ff, #555f72ff)";
        }
        if (momento = "afternoon") {
            fondo.style.backgroundImage = "linear-gradient(to bottom, #373d49ff, #373d49ff)";
        }
        if (momento = "night") {
            fondo.style.backgroundImage = "linear-gradient(to bottom, #090a0cff, #090a0cff)";
        }
    } else if (weather.includes("thunderstorm")) {
        weatherStateText.textContent = "Tormenta Electrica";
    }

    document.body.classList.remove('clear', 'clouds', 'rain');
    document.body.classList.add(weather.toLowerCase());

    tempText.textContent = `${temp}ºC`;
})