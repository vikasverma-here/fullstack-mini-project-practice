const mongoose = require("mongoose")


const User = new mongoose.Schema({
    name:{
        type:String,
        require:true,
        minLength:4,
        maxLength:50,
    },
    email:{
        type:String,
        require:true,
        unique: true,

    },
    password:{
        type:String,
        require:true,
        unique:true,
        
    },
    age:{
        type:Number,
        min:18,
        max:50,
    },
    gender:{
       type:String,
      

    }
},
{
    timestamps:true
})

const UserModel = mongoose.model('UserModel',User)
module.exports=UserModel;