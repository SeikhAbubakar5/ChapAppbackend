const express =require("express");

const router=express.Router();
const userController=require("../Controllers/userController")

//register auser
router.post("/register" ,userController.registerUser)
//login user
router.post("/login" ,userController.loginUser)

module.exports=router;