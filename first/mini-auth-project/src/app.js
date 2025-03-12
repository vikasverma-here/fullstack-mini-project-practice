const express= require("express")
const app =express()
const cors = require("cors");
const userRoutes=require("./routes/user.route")
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/user",userRoutes)



module.exports=app;