const validator = require("validator");
const jwt = require("jsonwebtoken")
const User = require('../models/User.model')
const signUpValidator = (req, res, next) => {
  const { name, email, password } = req.body;
  const errors = [];

  if (!name || validator.isEmpty(name.trim())) {
    errors.push({ field: "name", message: "Name is required" });
  }

  if (!email || !validator.isEmail(email.trim())) {
    errors.push({ field: "email", message: "Invalid email format" }); 
  }

  if (!password || !validator.isStrongPassword(password)) {
    errors.push({ field: "password", message: "Password is not strong enough" }); 
  }

  if (errors.length > 0) {
    return res.status(400).json({ errors }); 
  }

  next(); 
};

const authMiddleware= async(req,res,next)=>{
  try{
    const { authToken } = req.cookies;
    if(!authToken){
      throw new Error ("token  not valid comming from cookies")
    }
    const decoded = jwt.verify(authToken,"we_are-making_first_time_auth")

    const {userId} = decoded;
    const user = await User.findById(userId)
    console.log(user)
    if(!user){
      throw new Error("user not exit")
    }
    req.user=user
  }catch(err){
    res.status(400).json({message:err.message})
  }
  

  next()
}

module.exports = { signUpValidator,authMiddleware };
