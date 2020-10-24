const request = require('request')

const forecast = (latitude, longitude, callback) => {
    var YOUR_ACCESS_KEY = '4a611cbfd8889b0b317701c86b7caeab'
//    const url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/' + latitude + ',' + longitude
    const url = 'http://api.weatherstack.com/current?access_key=' + YOUR_ACCESS_KEY 
        + '&query=' + latitude + ',' + longitude
    // console.log('forecast url:', url)

    request({ url, json: true }, (error, res, data) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
//            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.current.temperature + ' degress out. There is a ' + body.current.precip + '% chance of rain.')
            callback(undefined, ' It is currently ' + body.current.temperature + ' degress out. There is a ' + body.current.precip + '% chance of rain.')
        }
    })
}

module.exports = forecast