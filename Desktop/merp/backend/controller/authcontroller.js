
const User=require('../models/usermodel')
const bcrypt=require('bcryptjs')
const generateToken=require('../lib/utils')
const cloudinary=require('../lib/cloudinary')
module.exports.signup=async(req,res)=>{
    const{email,fullname,password,ProfilePic}=req.body
   try {
    if(!fullname|| !email||!password){
        return res.status(400).json({message:'All fields are required'})
    }

    if(password.length<6){
        return res.status(400).json({message:'Password must be at least 6 characters'})
    }
    const user=await User.findOne({email})
    if(user){
        return res.status(400).json({message:'Email is already exisits'})
    }

    const salt=await bcrypt.genSalt(10)
    const hashedPassword=await bcrypt.hash(password,salt)
   const newUser=new User({
    fullname,
    email,
    password:hashedPassword,
   })


if(newUser){
    generateToken(newUser._id,res)
    await newUser.save()


res.status(201).json({
    _id:newUser._id,
    fullname:newUser.fullname,
    email:newUser.email,
    ProfilePic:newUser.ProfilePic
})

  


}
else{
 return res.status(400).json({message:'Invalid user data'})
}
 

    
   } catch (error) {
    console.log("Error in signup controller",error.message)
    res.status(500).json({message:"Internal Server Error"})
    
   }


}


module.exports.login=async(req,res)=>{
    const{email,password}=req.body
    try {

        const user=await User.findOne({email})

        if(!user){
            return res.status(400).json({message:'Invalid credentials'})
        }

        const isPassword=await bcrypt.compare(password,user.password)

        if(!isPassword){
            return res.status(400).json({message:'Invalid credentials'})
        }
     

        generateToken(user._id,res)
       res.status(200).json({
        _id:user._id,
    fullname:user.fullname,
    email:user.email,
    ProfilePic:user.ProfilePic
       })



    } catch (error) {
        console.log("Error in signup controller",error.message)
    res.status(500).json({message:"Internal Server Error"})
    

     
    }
 
 
 }


 module.exports.logout=async(req,res)=>{
    try {

        res.cookie('JWT','',{maxAge:0})
        res.status(200).json({message:"Logged out successfully"})
     
    } catch (error) {
        console.log("Error in signup controller",error.message)
       res.status(500).json({message:"Internal Server Error"})
    
     
    }
 
 
 }


 module.export.updateprofile=async(req,res)=>{


     try {

        const {ProfilePic}=req.body
        const userId=req.user._id
        if(!ProfilePic){
            return res.status(400).json({message:'Invalid user data'})
            
        }
        const uploadResponse=await cloudinary.uploader.upload(ProfilePic)
        const updateUser=await User.findByIdAndUpdate(userId,{ProfilePic:uploadResponse.secure_url},{new:true})

        res.status(200).json(updateUser)

} catch (error) {
    
}
 }




 module.exports.checkAuth=async(req,res)=>{

      try {
        res.status(200).json(req.user)
        
      } catch (error) {
        console.log("Error in checkAuth Controller",error.message)
        res.status(500).json({message:"Internal Server Error"})
        
      }
 }