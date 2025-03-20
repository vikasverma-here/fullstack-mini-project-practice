const bcrypt =  require("bcryptjs")
const User = require("../models/user.model")
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