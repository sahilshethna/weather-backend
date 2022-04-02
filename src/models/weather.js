const mongoose = require("mongoose");

const weatherSchema = new mongoose.Schema({
    description: String,
    pincode:String,
    windspeed:String,
    temp:String,
    Humidity:String
})

// new collention

const Weather = new mongoose.model("Weather",weatherSchema);

module.exports = Weather;