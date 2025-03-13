const express = require("express")
const router = express.Router()
const emplyeeInfo = require('../controllers/employeeInfo.cntroller')
router.post("/info",emplyeeInfo.addInfo)
router.delete("/delete/:id",emplyeeInfo.delete)
router.get("/getAllEmployees",emplyeeInfo.getEmployee)
router.put("/updateUser/:id",emplyeeInfo.updateEmployee)
module.exports=router