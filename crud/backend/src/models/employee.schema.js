const mongoose = require("mongoose")

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        // minlength: 2,
        // maxlength: 50
    },
    email: {
        type: String,
        required: true,
        // unique: true,
        // trim: true,
        lowercase: true,
       
    },
    phone: {
        type: String,
        required: true,
        // unique: true,
       
    },
    position: {
        type: String,
        required: true,
        
    },
    department: {
        type: String,
        required: true,
        trim: true
    },
    salary: {
        type: Number,
        required: true,
        // min: 10000,
        // max: 1000000
    }

})

const Employee = mongoose.model("Employee",employeeSchema)
module.exports = Employee;