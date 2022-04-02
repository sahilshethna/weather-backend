const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Weather")
.then(() => {
    console.log("Connection is Successfull");
}).catch((e)=> {
    console.log(e);
})