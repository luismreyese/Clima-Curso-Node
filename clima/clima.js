const axios = require('axios');

const getClima = async(lat, lng) => {

    console.log(lat, lng);
    let clima = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=9d8495ddf73e8a1dbb8f5e1b2a03a67f&units=metric`);

    let { coord, sys, weather, main, wind, rain, clouds, dt, id, name, cod } = clima.data;

    if (cod == '400') {
        throw new Error(`No existe informacion para las coorenadas Latitud: ${lat} Longitud: ${lng}`);
    }

    return {
        main: main,
        wind: wind,
        rain: rain
    }
}

module.exports = {
    getClima
}