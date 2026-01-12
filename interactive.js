//Variables for configuration and stuff...
import { obtenerTemperatura } from './temperatura.js';
import { detectarMomento } from './hora.js';

//Code here below
let interiorVisible = false;
let interiorState = "";
let luzEncendida = false;
let puertaAbierta = false;
let hornoEncendido = false;
let hornoCocinando = "";
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
const weatherIcon = document.getElementById("weather-icon");
const nube1 = document.getElementById("nube1");
const nube2 = document.getElementById("nube2");

let momento = detectarMomento();
console.log(momento);

//Check if the interior lamp is on
function checkLuz() {
  if (luzEncendida == true) {
    interiorState = "on";
  } else {
    interiorState = "off";
  }
}

checkLuz();

//Allows to play a sound...
function reproducirSonido(src) {
  const audio = new Audio(src);
  audio.volume = 0.6;
  audio.play();
}

//Allows to update the scene everytime...
function actualizarEscena() {
  nube1.src = `images/clouds_${momento}.png`;
  nube2.src = `images/clouds_${momento}.png`;
  weatherIcon.src = "images/sun.png";
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
}

actualizarEscena();

//Boolean that help to the update if afternoon or night...
if (momento == "afternoon" || momento == "night") {
  fondo.style.backgroundImage = "linear-gradient(to bottom, #4F3868, #FEB47B)";
  interior.src = "images/house_interior_wall_on.png";
  cama.src = "images/house_interior_bed_on.png";
  mesa.src = "images/house_interior_craftingtable_on.png";
  horno.src = "images/house_interior_furnace_on.png";
  caldero.src = "images/house_interior_cauldron_on.png";
  lampara.src = "images/house_interior_lamp_on.png";
  luzEncendida = !luzEncendida;
  if (momento == "night") {
    weatherIcon.src = "images/moon.png";
    fondo.style.backgroundImage = "linear-gradient(to bottom, #000000, #000000)";
  }
}

//When door is clicked
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

//When lamp is clicked...
lampara.onclick = () => {
  luzEncendida = !luzEncendida;
  interiorState = luzEncendida ? "on" : "off";
  lampara.src = `images/house_interior_lamp_${interiorState}.png`;
  cama.src = `images/house_interior_bed_${interiorState}.png`;
  mesa.src = `images/house_interior_craftingtable_${interiorState}.png`;
  caldero.src = `images/house_interior_cauldron_${interiorState}.png`;
  interior.src = `images/house_interior_wall_${interiorState}.png`;
  if (hornoEncendido == true) {
    horno.src = `images/house_interior_furnace_on_cook.png`;
  } else {
    horno.src = `images/house_interior_furnace_${interiorState}.png`;
  }
  reproducirSonido("sounds/click_stereo.ogg")
};

//When wall is clicked...
pared.onclick = () => {
  interiorVisible = !interiorVisible;
  pared.style.opacity = interiorVisible ? 0.25 : 1;
  pared.style.bottom = (interiorVisible ? 256 : 128) + "px";
  puerta.style.opacity = interiorVisible ? 0.25 : 1;
  puerta.style.bottom = (interiorVisible ? 256 : 128) + "px";
  oscurecer.style.opacity = interiorVisible ? 0.5 : 0;
};

//When furnace is clicked...
horno.onclick = () => {
  hornoEncendido = !hornoEncendido;
    hornoCocinando = hornoEncendido ? "_cook" : "";
  horno.src = hornoEncendido
   ? `images/house_interior_furnace_on${hornoCocinando}.png`
   : `images/house_interior_furnace_${interiorState}.png`;
  reproducirSonido("sounds/click_stereo.ogg")
  checkLuz();
};