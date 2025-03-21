

const express = require('express')
const app = express()
const cookieParser =  require("cookie-parser")
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
const authRouter = require("./routes/auth.route")

app.use("/api/auth",authRouter)
module.exports =  app