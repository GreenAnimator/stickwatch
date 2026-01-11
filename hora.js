const hora = new Date().getHours();

let momento = "day";

if (hora >= 6.5 && hora < 19) {
  momento = "day";
} else if ( hora >= 6 && hora < 6.5 || hora >= 19 && hora < 20) {
  momento = "afternoon";
} else {
  momento = "night";
}

export function detectarMomento() {
  return momento;
}

const configHora = {
    api: 'https://api.watcher.com/hour',
    version: '1.0'
};

export default configHora;