const axios = require('axios');
const Weather = require('./models/weather');

const resolvers = {
    Query:{
        getWeatherData: async(parent,args) => {
            let Weatherdata = await Weather.find({pincode: args.value});
            //console.log(Weatherdata);
            if (Weatherdata.length !=0) {
                return Weatherdata[0]
            }
            const res  = await axios.get("https://api.openweathermap.org/data/2.5/weather?zip="+args.value+",us&appid=6553b971e4ad7ccbebff54082db4911d")
            
            const data = new Weather({
                description: res.data.weather[0].description,
                pincode:args.value,
                windspeed:res.data.wind.speed,
                temp:res.data.main.temp,
                Humidity:res.data.main.humidity
            });
            let weatherData = await data.save();
            //console.log(weatherData);
            return weatherData;
        },
    },
} 

module.exports = resolvers