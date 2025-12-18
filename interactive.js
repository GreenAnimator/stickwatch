let interiorVisible = false;
let interiorState = "";
let luzEncendida = false;
let puertaAbierta = false;
let hornoEncendido = false;
const fondo = document.getElementById("fondo");
const tierra = document.getElementById("tierra");
const interior = document.getElementById("interior");
const casa = document.getElementById("casa");
const cama = document.getElementById("cama");
const horno = document.getElementById("horno");
const mesa = document.getElementById("mesa");
const caldero = document.getElementById("caldero");
const lampara = document.getElementById("lampara");
const pared = document.getElementById("pared");
const puerta = document.getElementById("puerta");
const oscurecer = document.getElementById("oscurecer");

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
  if (luzEncendida == true) {
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
  cama.src = `images/house_interior_bed_${interiorState}.png`;
  mesa.src = `images/house_interior_craftingtable_${interiorState}.png`;
  horno.src = `images/house_interior_furnace_${interiorState}.png`;
  caldero.src = `images/house_interior_cauldron_${interiorState}.png`;
  lampara.src = `images/house_interior_lamp_${interiorState}.png`;

  if (momento == "afternoon") {
    interior.src = "images/house_interior_wall_on.png";
    cama.src = "images/house_interior_bed_on.png";
    lampara.src = "images/house_interior_lamp_on.png";
    mesa.src = "images/house_interior_craftingtable_on.png";
    horno.src = "images/house_interior_furnace_on.png";
    caldero.src = "images/house_interior_cauldron_on.png";
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

lampara.onclick = () => {
  luzEncendida = !luzEncendida;
  lampara.src = luzEncendida
   ? "images/house_interior_lamp_on.png"
   : "images/house_interior_lamp_off.png";
  cama.src = luzEncendida
   ? "images/house_interior_bed_on.png"
   : "images/house_interior_bed_off.png";
  horno.src = luzEncendida
   ? "images/house_interior_furnace_on.png"
   : "images/house_interior_furnace_off.png";
  mesa.src = luzEncendida
   ? "images/house_interior_craftingtable_on.png"
   : "images/house_interior_craftingtable_off.png";
  caldero.src = luzEncendida
   ? "images/house_interior_cauldron_on.png"
   : "images/house_interior_cauldron_off.png";
  interior.src = luzEncendida
   ? "images/house_interior_wall_on.png"
   : "images/house_interior_wall_off.png";
  reproducirSonido("sounds/click_stereo.ogg")
}

pared.onclick = () => {
  interiorVisible = !interiorVisible;
  pared.style.opacity = interiorVisible ? 0.25 : 1;
  pared.style.bottom = (interiorVisible ? 256 : 128) + "px";
  puerta.style.opacity = interiorVisible ? 0.25 : 1;
  puerta.style.bottom = (interiorVisible ? 256 : 128) + "px";
  oscurecer.style.opacity = interiorVisible ? 0.5 : 0;
}

horno.onclick = () => {
  hornoEncendido = !hornoEncendido;
  horno.src = hornoEncendido
   ? `images/house_interior_furnace_on_cook.png`
   : `images/house_interior_furnace_${interiorState}.png`;
  reproducirSonido("sounds/click_stereo.ogg")
  checkLuz();
}

actualizarEscena();
