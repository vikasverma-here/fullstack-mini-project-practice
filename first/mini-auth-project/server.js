const app = require("./src/app")
const connect = require("./src/db/db")

connect()
app.listen(8080,()=>{
    console.log("server listing on 8080 port")
})