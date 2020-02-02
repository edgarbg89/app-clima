const lugar = require("./lugar/lugar.js");
const clima = require("./clima/clima.js");

const argv = require("yargs").options({
  direccion: {
    alias: "d",
    desc: "Dirección de la ciudad para obtener el clima",
    demand: true
  }
}).argv;

const obtenerClima = async () => {
  try {
    const infoLugar = await lugar.getLugarLatLng(argv.direccion);

    const weather = await clima.getClima(infoLugar.lat, infoLugar.long);

    return `El clima en ${argv.direccion} es de ${weather}`;
  } catch (err) {
    return `No se pudo obtener el clima de ${argv.direccion}`;
  }
};

obtenerClima()
  .then(console.log)
  .catch(console.log);
