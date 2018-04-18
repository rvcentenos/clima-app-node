const axios = require('axios');

const getClima = async(lat, lng) => {

    let response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=cdcbde79d72b64c02b525b17f5599b46`);

    return response.data.main.temp;
}

module.exports = {
    getClima
}