require("dotenv").config(); 
const connectDB=require("./src/db/db")
const app = require("./src/app");

const PORT = process.env.PORT || 5400; 
connectDB()
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
