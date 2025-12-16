fetch("https://api.openweathermap.org/data/2.5/weather?q=Buenos Aires&appid=7f9518e4f8dccbf13d85e223724372a6&units=metric")
  .then(res => res.json())
  .then(data => {
    const clima = data.weather[0].main.toLowerCase();
    const image = document.getElementById("escena");

    if (clima.includes("rain")) {
      image.src = "videos/lluvia.mp4";
    } else if (clima.includes("cloud")) {
      image.src = "videos/nublado.mp4";
    } else {
      image.src = "videos/soleado.mp4";
    }
  });

const relojHora = document.getElementById("reloj-hora");
const relojFecha = document.getElementById("reloj-fecha");

const dias = [
  "Domingo", "Lunes", "Martes", "Miércoles",
  "Jueves", "Viernes", "Sábado"
];

const meses = [
  "enero", "febrero", "marzo", "abril", "mayo", "junio",
  "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
];

function actualizarReloj() {
  const ahora = new Date();

  const horas = String(ahora.getHours()).padStart(2, "0");
  const minutos = String(ahora.getMinutes()).padStart(2, "0");

  const diaSemana = dias[ahora.getDay()];
  const diaMes = ahora.getDate();
  const mes = meses[ahora.getMonth()];

  relojHora.textContent = `${horas}:${minutos}`;
  relojFecha.textContent = `${diaSemana}, ${diaMes} de ${mes}`;
}

actualizarReloj();
setInterval(actualizarReloj, 1000);