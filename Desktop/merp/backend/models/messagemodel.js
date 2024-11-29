
const mongoose=require('mongoose')



const messageSchema=mongoose.Schema({
    senderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    
    },
    
    recieverId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    text:{
        type:String,
        
    },
    
    image:{
        type:String,
        
    },

},{
    timestamp:true
})


const Message=mongoose.model("Message", messageSchema)


module.exports=Message