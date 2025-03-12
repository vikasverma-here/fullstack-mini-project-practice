const express = require("express")
const app = express()
const cors = require("cors")
const userRouter =  require("./routes/user.route")
const cookieParser = require("cookie-parser");
app.use(express.json())
app.use(cookieParser());
app.use(cors())
app.use("/user",userRouter)

module.exports=app