const axios = require("axios");

const getLugarLatLng = async direccion => {
  let encodeURL = encodeURI(direccion);

  const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURL}`,
    headers: {
      "x-rapidapi-key": "dbf23d649fmsh1873a095c4496acp1a7925jsn7545c88259c0"
    }
  });

  const resp = await instance.get();
  if (resp.data.Results.length == 0) {
    throw new Error(`No hay resultados para ${direccion}`);
  }
  const data = resp.data.Results[0];
  const dir = data.name;
  const lat = data.lat;
  const long = data.lon;

  return { dir, lat, long };
};

module.exports = { getLugarLatLng };
