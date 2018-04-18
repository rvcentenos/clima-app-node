const axios = require('axios');

const getLugarLatLng = async(address) => {
    let encodeUrl = encodeURI(address);
    let response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}}&key=AIzaSyADjYdXNUPlUW_xUE92UzmZWjOcomQGkPU`);
    if (response.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${ address }`);
    }

    let location = response.data.results[0];
    let coors = location.geometry.location;

    return {
        address: location.formatted_address,
        lat: coors.lat,
        lng: coors.lng
    }

    // axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}}&key=AIzaSyADjYdXNUPlUW_xUE92UzmZWjOcomQGkPU`)
    //     .then(function(response) {

    //         // let location = response.data.results[0];
    //         // let coors = location.geometry.location;

    //         // console.log('Dirección: ', location.formatted_address);
    //         // console.log('Lat: ', coors.lat);
    //         // console.log('Lng: ', coors.lng);

    //     })
    //     .catch(function(error) {
    //         console.log("ERROR: ", error);
    //     });
}

module.exports = {
    getLugarLatLng
}