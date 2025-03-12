const mongoose = require("mongoose")

const connect = ()=>{
    mongoose.connect("mongodb://0.0.0.0/reactAuth")
    .then(()=>{
        console.log("db is connected successfully")
    })
    .catch((err)=>{
        console.log("something went wrong ",err)
    })
}

module.exports=connect