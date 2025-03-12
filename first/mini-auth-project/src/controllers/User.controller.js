
const User = require("../models/User.model")
const mongoose = require("mongoose")
const bcrypt = require("bcrypt");
var jwt = require('jsonwebtoken');
module.exports.signUp=async(req,res)=>{
   
 try{
    const {name,email,password}=req.body
    const existingUser = await User.findOne({email})
    if(existingUser){
        return res.status(400).json({Message:'user  already exits'});

    }
    const hashedPassword = await bcrypt.hash(password, 10);
console.log(hashedPassword)
    const newUser =await User.create(
        {
            name,
            email,
            password:hashedPassword
        })

    const token = jwt.sign(
        {
            userId:newUser._id,
            email:newUser.email
        },
        "we_are-making_first_time_auth",

    )

    res.cookie("authToken", token);

    res.status(201).json({message:`${name} you are registered successfully`, user:newUser});

 }catch(err){
  
    res.status(500).json({message:'server error',error:err.message})
 }



    
}

module.exports.login=async(req,res)=>{
    try{
     const {email,password} = req.body;
     const user = await User.findOne({email})
     if(!user){
        return res.status(400).json({message:"invalid credential"})
     }
    
     const isMathced = await bcrypt.compare(password,user.password)
    if(!isMathced){
        return res.status(400).json({message:"invalid credential"})
    }
 
    const token = jwt.sign({
        userId:user._id,
        userEmail:user.email,   
    },"we_are-making_first_time_auth",
        { expiresIn: "1h" })

        res.cookie("authToken", token)
        res.status(200).json({ message: "Login successful!" });
    }catch(err){
        res.status(500).json({ message: "Server error", error: err.message });

    }
}


module.exports.logout = (req, res) => {
    res.clearCookie("authToken");
    res.status(200).json({ message: "Logged out successfully" });
  };




  module.exports.userProfile = (req, res) => {
    try {
      if (!req.user) {
        return res.status(401).json({ message: "Please login first" }); 
      }
      return res.status(200).json(req.user); 
    } catch (err) {
      if (!res.headersSent) {
        return res.status(500).json({ error: err.message }); 
      }
    }
  };
  
  