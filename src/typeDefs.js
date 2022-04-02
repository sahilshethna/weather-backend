const { gql } = require('apollo-server-express');
const typeDefs = gql`
type weatherData {
        id: Int
        main: String
        description: String
        icon: String
}

type coord {
    lon: String
    lat: String
}

type main {
    temp: Float
        feels_like: Float
        temp_min: Float
        temp_max: Float
        pressure: Int
        humidity: Int
}

type wind {
    speed: Float
    deg: Int
    gust: Float
}

type clouds {
    all: Int
}

type sys {
    type: Int
    id: Int
    country: String
    sunrise: String
    sunset: String
}

type Weather  {
    coord: coord
    weather: [weatherData]
    base: String
    main : main
    visibility: Int
    wind:wind
    clouds: clouds
    sys:sys
    timezone: Int
    id: String
    name: String
    cod: Int
}

type weatherInfo{
    description: String
    pincode:String
    windspeed:String
    temp:String
    Humidity:String
}

type Query {
    getWeatherData(value: String!): weatherInfo!
}

`;

module.exports = typeDefs;