export async function obtenerTemperatura() {
  const res = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=-31.442&lon=-68.428&appid=7f9518e4f8dccbf13d85e223724372a6&units=metric");
  const data = await res.json();
  return Math.round(data.main.temp);
}

const configTemp = {
    api: 'https://api.watcher.com/temp',
    version: '1.0'
};

export default configTemp;