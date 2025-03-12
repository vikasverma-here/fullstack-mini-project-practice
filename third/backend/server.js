const app = require("./src/app")
const connect = require("./src/db.js/db")

connect()
app.listen(4000,()=>{
    console.log("server is listening on port 4000 ")
})