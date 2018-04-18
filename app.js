const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    address: {
        alias: 'a',
        desc: 'Dirección de la ciudad para obtener el clima.',
        demand: true
    }
}).argv;

let getInfo = async(address) => {

    try {
        let coors = await lugar.getLugarLatLng(address);
        let temp = await clima.getClima(coors.lat, coors.lng);

        // return `El clima en ${coors.address} es de ${temp}`
        return {
            Direccion: coors.address,
            Lat: coors.lat,
            Lng: coors.lng,
            temp: temp
        }
    } catch (error) {
        return `No se pudo determinar el clima en ${address}`;
    }

};

getInfo(argv.address)
    .then(message => console.log(message))
    .catch(e => console.log(e));