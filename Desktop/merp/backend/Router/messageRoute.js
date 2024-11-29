const express=require('express')
const { protectRoute } = require('../middleware/authmiddleware')
const {getUsersForSidebar,getMessages}=require('../controller/messagecontroller')
const router=express.Router()



router.get("user",protectRoute,getUsersForSidebar)
router.get("/:id",protectRoute,getMessages)
router.post('/send/:id',protectRoute,sendMessage)







module.exports=router