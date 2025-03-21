const bcrypt =  require("bcryptjs")
const User = require("../models/user.model")
const jwt = require("jsonwebtoken")
module.exports.signUp = async (req,res)=>{
     
   try{
    const  {userName,email,password,age}  =  req.body

    if(!userName ||  !email || !password ||  !age){
        return  res.status(400).json({success:false,message:"Please fill full Form ! "})
    }

    const existingUser = await User.findOne({email})
    if(existingUser){
        return res.status(409).json({success:false,message:"Email already exists ! "})
    }


    const hashPassword = await bcrypt.hash(password,10)
    console.log(hashPassword)
   
    const newUser = await User.create({
        userName,
        email,
        password:hashPassword,
        age,
    })
     


    res.status(201).json({ success: true, message: "User registred Successfully !" ,newUser});
   }catch(error){
       console.error(error)
       res.status(500).json({success:false,message:"Internal Server Error !"})
   }
}

// controller for login 

module.exports.login = async (req,res)=>{
  try{
    const {email,password}  = req.body;
    if(!email|| !password){
        return res.status(400).json({success:false,message:"Please Full Form !"})
    }
  const user = await User.findOne({email})
  if(!user){
    return  res.status(404).json({success:false,message:"User Not Found"})
  }

  const isPasswordCorrect= await bcrypt.compare(password,user.password)
  if(!isPasswordCorrect){
   return res.status(401).json({success:false , message:"Invalid Credetials !"})
  }
const payload = {userId:user._id,userName:user.userName}
const token = jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:"1d"})

 res.cookie("userToken",token)

 res.status(200).json({success:true,message:"User Login Sucessfully"})
  }catch(error){
    console.error("Login Error :" , error)
    res.status(500).json({success:false,message:"Internal Server Error !"})
  }

}


// controller for logout api 

module.exports.logout=(req,res)=>{
    try{
      res.cookie("userToken","",{expires: new Date(0)})
      return res.status(200).json({success:true,message:"User Logout Successfully"})
    }catch(error){
      console.log("Logout Error " , error)
     return res.status(500).json({success:false,message:"Internal Srver Error"})
    }
}