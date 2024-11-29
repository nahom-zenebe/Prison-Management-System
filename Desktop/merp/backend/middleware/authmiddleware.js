const jwt=require('jsonwebtoken')
const User=require('../models/usermodel')


module.exports.protectRoute=async(req,res,next)=>{
    const token=req.cookie.JWT


    try {

        if(!token){
            res.status(401).json({message:"unauthoraized access- no token provided"})
        }
      const decoded=jwt.verify(token,process.env.JWT_SECRET)
        if(!decoded){
            res.status(401).json({message:"unauthoraized - Invalid Token"}) 
        }
        const user=await User.findById(decoded.userId).select("-password")
        if(!user){
            res.status(401).json({message:"User is not found"})  
        }

        req.user=user
        next()

    } catch (error) {
        console.log("Error in protectedRoute middleware",error.message)
         res.status(500).json({message:"Internal server error"})
        
    }
}