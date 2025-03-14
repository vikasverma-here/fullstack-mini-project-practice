


const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const employeeRouter = require("./routes/employee.route")
app.use(express.json())
app.use("/employees", employeeRouter); 

module.exports = app;
