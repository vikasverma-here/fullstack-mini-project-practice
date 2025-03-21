const jwt =require("jsonwebtoken")

const authMiddleware = (req,res,next)=>{
    try{
        const token = req.cookies.userToken;

        if(!token){
            return res.status(401).json({success:false,message:"Unauthorized :  No token Provided"})
        }
    
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        req.user = decoded
        next()
    
    }catch(error){
        console.log("authentication Error",error)
        return res.status(403).json({success:false,message:"Forbidden : Invalid or expired token "})
    }
}

module.exports=authMiddleware