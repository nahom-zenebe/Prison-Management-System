const express=require('express')
const router=express.Router()
const {signup,login,logout,checkAuth}=require('../controller/authcontroller')

const protectRoute=require('../middleware/authmiddleware')



router.post('/signup',signup)
router.post('/login',login)

router.post('/logout',logout)

router.put('/update-profile',protectRoute,updateprofile)

router.get('/check',protectRoute,checkAuth)






module.exports=router