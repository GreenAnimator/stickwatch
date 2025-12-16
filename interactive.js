let interiorVisible = false;
let interiorState = "";
let puertaAbierta = false;
const fondo = document.getElementById("fondo");
const tierra = document.getElementById("tierra");
const interior = document.getElementById("interior");
const casa = document.getElementById("casa");
const pared = document.getElementById("pared");
const puerta = document.getElementById("puerta");

const hora = new Date().getHours();

let momento = "dia";

if (hora >= 6 && hora < 17) {
  momento = "day";
} else if (hora >= 17 && hora < 20) {
  momento = "afternoon";
} else {
  momento = "night";
}

if (interiorVisible == true) {
  interiorState = "on";
} else {
  interiorState = "off";
}

function reproducirSonido(src) {
  const audio = new Audio(src);
  audio.volume = 0.6;
  audio.play();
}

function actualizarEscena() {
  fondo.src  = `images/sky_${momento}.png`;
  tierra.src = `images/grass_${momento}.png`;
  casa.src   = `images/house_columns&rooftop_${momento}.png`;
  interior.src = `images/house_interior_wall_${interiorState}.png`;
  pared.src = `images/wall_${momento}.png`;
}

actualizarEscena();

puerta.src = "images/door_closed_day.png";

puerta.onclick = () => {
  puertaAbierta = !puertaAbierta;

  puerta.src = puertaAbierta
    ? `images/door_open_${momento}.png`
    : `images/door_closed_${momento}.png`;
  reproducirSonido(
    puertaAbierta
      ? "sounds/door_open.ogg"
      : "sounds/door_close.ogg"
  );

};

let luzEncendida = false;

interior.onclick = () => {
  luzEncendida = !luzEncendida;
  interior.src = luzEncendida
    ? "images/house_interior_wall_on.png"
    : "images/house_interior_wall_off.png";
};

pared.onclick = () => {
  interiorVisible = !interiorVisible;
  pared.style.opacity = interiorVisible ? 1 : 0.25;
  puerta.style.opacity = interiorVisible ? 1 : 0.25;
}