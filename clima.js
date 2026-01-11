import momento from './hora.js';

fetch("https://api.openweathermap.org/data/2.5/weather?lat=-31.442&lon=-68.428&appid=7f9518e4f8dccbf13d85e223724372a6&units=metric")
  .then(res => res.json())
  .then(data => {
    const clima = data.weather[0].main.toLowerCase();

    if (clima.includes("rain")) {
      if (momento = "day") {
        fondo.style.backgroundImage = "linear-gradient(to bottom, #677389, #576072ff)";
      }
      if (momento = "afternoon") {
        fondo.style.backgroundImage = "linear-gradient(to bottom, #4e5666ff, #434957ff)";
      }
      if (momento = "night") {
        fondo.style.backgroundImage = "linear-gradient(to bottom, #0c0d0fff, #0c0d0fff)";
      }
    } else if (clima.includes("cloud")) {
      if (momento == "day") {
        fondo.style.backgroundImage = "linear-gradient(to bottom, #677389, #576072ff)";
      }
      if (momento == "afternoon") {
        fondo.style.backgroundImage = "linear-gradient(to bottom, #4e5666ff, #434957ff)";
      }
      if (momento == "night") {
        fondo.style.backgroundImage = "linear-gradient(to bottom, #0c0d0fff, #0c0d0fff)";
      }
    }
  });