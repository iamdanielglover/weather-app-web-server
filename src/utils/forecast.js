const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/6b34798243df8b905c4d0cda3c53e731/${longitude},${latitude}?units=si`

    request({ url, json: true }, (error, { body }) => {

        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined,  
                body.daily.data[0].summary + ` It is currently ${body.currently.temperature} degrees out. There is a ${body.currently.precipProbability}% chance of rain.
                For today, the highest temperature will be ${body.daily.data[0].apparentTemperatureHigh} degrees celcius &
                the lowest temperature will be ${body.daily.data[0].apparentTemperatureLow} degrees celcius.`)
        }

    })
}

module.exports = forecast

