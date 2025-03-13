const Employee = require("../models/employee.schema")

module.exports.addInfo= async (req,res)=>{
    const {name,email,phone,position,department,salary} = req.body
     
    const employee = await Employee.create({
        name,email,phone,position,department,salary
    })

    res.send(employee)
}

module.exports.delete= async(req,res)=>{
 try{
    const id = req.params.id
    const deletedEmployee = await Employee.findByIdAndDelete(id);

        if (!deletedEmployee) {
            return res.status(404).json({ message: "Employee not found" });
        }

        res.json({ message: "Employee deleted successfully", deletedEmployee });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
   
}


module.exports.getEmployee= async(req,res)=>{
    const getAllEmployee = await Employee.find()
    res.send(getAllEmployee)
}

module.exports.updateEmployee = async(req,res)=>{
    const id = req.params.id
    const employee = await Employee.findByIdAndUpdate(id,req.body,{ new: true,})
    res.send(employee)
}