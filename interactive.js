let interiorVisible = false;
let interiorState = "";
let puertaAbierta = false;
const fondo = document.getElementById("fondo");
const tierra = document.getElementById("tierra");
const interior = document.getElementById("interior");
const casa = document.getElementById("casa");
const pared = document.getElementById("pared");
const puerta = document.getElementById("puerta");
const obj_interior = document.getElementById("obj-interior");

const hora = new Date().getHours();

let momento = "dia";

if (hora >= 6.5 && hora < 17.5) {
  momento = "day";
  actualizarEscena();
} else if ( hora >= 6 && hora < 6.5 || hora >= 17 && hora < 20) {
  momento = "afternoon";
  actualizarEscena();
} else {
  momento = "night";
  actualizarEscena();
}

function checkLuz() {
  if (interiorVisible == true) {
    interiorState = "on";
  } else {
    interiorState = "off";
  }
}

checkLuz();

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
  pared.src = `images/house_wall_${momento}.png`;
  puerta.src = `images/house_door_closed_${momento}.png`;
  obj_interior.src = `images/house_interior_objs_${interiorState}.png`;

  if (momento == "afternoon") {
    interior.src = "images/house_interior_wall_on.png";
    obj_interior.src = "images/house_interior_objs_on.png"
  }
}

actualizarEscena();

puerta.onclick = () => {
  puertaAbierta = !puertaAbierta;

  puerta.src = puertaAbierta
    ? `images/house_door_open_${momento}.png`
    : `images/house_door_closed_${momento}.png`;
  reproducirSonido(
    puertaAbierta
      ? "sounds/door_open.ogg"
      : "sounds/door_close.ogg"
  );

};

pared.onclick = () => {
  interiorVisible = !interiorVisible;
  pared.style.opacity = interiorVisible ? 0.25 : 1;
  pared.style.bottom = (interiorVisible ? 256 : 128) + "px";
  puerta.style.opacity = interiorVisible ? 0.25 : 1;
  puerta.style.bottom = (interiorVisible ? 256 : 128) + "px";
}

actualizarEscena();