const axios = require("axios");

const getClima = async (lat, lon) => {
  const resp = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=5e0eb8c4e7e1c26f2d90ca279255ca58`
  );
  return resp.data.main.temp;
};

module.exports = { getClima };
