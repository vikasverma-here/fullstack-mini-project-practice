const mongoose = require("mongoose")
const validator = require("validator")
const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:[true,"Username is required"],
        trim:true,
        minLength:[3,"Username must be at least 3 characters long"]
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        unique:true,
        trim:true,
        lowercase:true,
        validate:{
            validator:validator.isEmail,
            message:"Please enter a  valid email address"
        }

    },
    password:{
        type:String,
        required:true,
        minLength:[8,"Password must be at least 8 characters long"],
        // select:false,
        validate:{
            validator:function(pass){
                return validator.isStrongPassword(pass,{
                    minLength:8,
                    minLowercase:1,
                    minUppercase:1,
                    minNumbers:1,
                    minSymbols:1
                })
            },
            message:"password must be strong ( at least 8 characters , 1 uppercase,1 lowercase , 1 number,1 symbol)"
        }
    },
    age:{
        type:Number,
        required:[true,"Age is required "],
        min:[10,"Age must be at least 10 year"],
        max :[120,"Age  cannot be more that 120 year"]
    }
})


const User = mongoose.model("User",userSchema)
module.exports= User