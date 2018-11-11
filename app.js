const getPlace = require('./places/place');
const getClima = require('./clima/clima');
const argv = require('./yargs').argv;

let lat = 3.4516467;
let lng = -76.5319854;

const result = async(direccion) => {
    try {
        coors = await getPlace.getPlace(direccion);
        clima = await getClima.getClima(coors.lat, coors.lng);

        let { temp, temp_min, temp_max } = clima.main;

        console.log(`el Clima en ${coors.direccion} es ${temp}`);
        console.log(`Tempereatura minima: ${temp_min} Temperatura Maxima: ${temp_max}`);

    } catch {
        console.log(`No es posible obtener el clima de la localidad ${coors.direccion}`);
    }

}

result(argv.direccion);

// getPlace.getPlace(argv.direccion).then(respuesta => {
//     console.log(respuesta);
//     lat = respuesta.lat;
//     lng = respuesta.lng;
// }).catch(error => {
//     console.log(error);
// });

// console.log(lat, lng);

// getClima.getClima(lat, lng).then(clima => {
//     console.log(clima);
// }).catch(error => {
//     console.log(error);
// });