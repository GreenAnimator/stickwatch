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