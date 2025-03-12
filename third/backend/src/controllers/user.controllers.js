const User = require("../models/userModels")
const bcrypt= require("bcrypt")
const jwt = require("jsonwebtoken")
module.exports.signup = async (req, res) => {
    try {
      console.log("Received Request Body:", req.body); // ✅ Check if data is coming
  
      const { name, email, password } = req.body;
      if (!name || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
      }
  
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
      
      const user = await User.create({
        name,
        email,
        password: hashedPassword,
      });
  
      res.status(201).json({ message: "User signed up successfully", userId: user._id });
      req.user=user
    } catch (error) {
      console.error("🔥 Signup Error:", error.message, error.stack);
      res.status(500).json({ message: "Internal server error", error: error.message });
    }
  };


  module.exports.login= async(req,res)=>{
  console.log(req.body)
  const {email,password} =req.body
 const exitUser= await User.findOne({email})
 if(!exitUser){
   return res.status(400).json({message:"this particular user not exit in the db"})
 }
 const validPassword = await bcrypt.compare(password,exitUser.password)
 if(!validPassword){
  return res.status(400).json({message:"password not valid "})
 }

 const token = jwt.sign(
    { id: exitUser._id },
     "Vikas_ki_key",
      { expiresIn: "1h" }
    );

    res.cookie("token",token)

    res.json({message:"user login succesfull"})

  }
  