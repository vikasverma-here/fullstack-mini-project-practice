require("dotenv").config(); 
const connectDB=require("./src/db/db")
const app = require("./src/app");

const PORT = process.env.PORT || 5400; 
connectDB()
.then(()=>{
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

}).catch((err)=>{
    console.log("db is connection failed ",err)

})

