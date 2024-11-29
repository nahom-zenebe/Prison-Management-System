const Message = require("../models/messagemodel")
const User = require("../models/usermodel")
const cloudinary=require('../lib/cloudinary')

module.exports.getUsersForSidebar=async(req,res)=>{
     try {
        const loggedUserId=req.user._id
        const filteredUsers=await User.find({_id:{$ne:loggedUserId}}).select("-password")
        res.status(200).json(filteredUsers)
     } catch (error) {
        console.log("Error in checkAuth Controller",error.message)
        res.status(500).json({message:"Internal Server Error"})
        
     }
}

module.exports.getMessages=async(req,res)=>{
 

    try {
        const {id:userToChatId}=req.params
        const myId=req.user._id
        const messages=await Message.find({
            $or:[
                {senderId:myId,reveiverId:userToChatId},
                {senderId:userToChatId,reveiverId:myId}

            ]
        })

        res.status(200).json(messages)

        
    } catch (error) {
        console.log("Error in getMessage Controller",error.message)
        res.status(500).json({message:"Internal Server Error"})
      
    }
}

module.exports.sendMessage=async(req,res)=>{


    try {
        const {text,image}=req.body
        const {id:recieverId}=req.params
        const senderId=req.user._id


        let imageUrl;
        if(image){
            const uploadResponse=await cloudinary.uploader.upload(image)
            imageUrl=uploadResponse.secure_url
        }


        const newMessage=new Message({
            senderId,
            recieverId,
            text,
            image: importUrl
        })

        await newMessage.save()

res.status(200).json(newMessage)
        
    } catch (error) {
        console.log("Error in sending image Controller",error.message)
        res.status(500).json({message:"Internal Server Error"})
   
    }
}