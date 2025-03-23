

const express = require('express')
const cors = require("cors")
const app = express()
const cookieParser =  require("cookie-parser")
app.use(cors({
    origin: "http://localhost:5173", // Allow Vite frontend
    credentials: true, // Allow sending cookies
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
const authRouter = require("./routes/auth.route")
const todoRouter = require("./routes/todo.route")
app.use("/api/auth",authRouter)
app.use("/api/todo",todoRouter)
module.exports =  app