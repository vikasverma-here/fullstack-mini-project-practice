const mongoose = require("mongoose")

function connect (){
    mongoose.connect("mongodb://0.0.0.0/practiceAuth")
    .then(()=>{
        console.log("db connected succcefully")
    })
    .catch((err) => {
        console.log("server not connected", err);
     });
}

module.exports=connect