const request = require('request');

var getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/e65e81c01094abd9eeee0afe5d9ce5f7/${lat},${lng}`,
        json: true
    }, (error, response, body)=>{
        if(error) {
            callback('Unable to connect to Forecast.io server.', undefined);
        } else if(response.statusCode === 400) {
            callback('Unable to fetch weather.', undefined);
        } else if(response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        }
    });
}

module.exports.getWeather = getWeather;