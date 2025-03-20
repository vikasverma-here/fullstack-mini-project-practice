require("dotenv").config({ path: "./config/config.env" });
const app = require("./src/app");
const connectDB=require("./src/db/db")

connectDB()
app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
