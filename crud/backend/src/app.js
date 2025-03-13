


const express = require("express");
const app = express();
const employeeRouter = require("./routes/employee.route")
app.use(express.json())
app.use("/employees", employeeRouter); 

module.exports = app;
