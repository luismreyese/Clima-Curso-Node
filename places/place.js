const axios = require('axios');

const getPlace = async(direccion) => {

    let setUrl = encodeURI(direccion);

    let respuesta = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${setUrl}&key=AIzaSyBSJpFsJfC0vX60p6lVhY_4VtxH8n-0U_w`);

    if (respuesta.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la locacion: ${direccion}`);
    }
    let datos = respuesta.data;
    let { address_components, formatted_address, geometry, place_id } = datos.results[0]; // Destructuracion
    let { location } = geometry; // Destructuracion

    return {
        direccion: formatted_address,
        lat: location.lat,
        lng: location.lng,
        pId: place_id
    }

}

module.exports = {
    getPlace
}