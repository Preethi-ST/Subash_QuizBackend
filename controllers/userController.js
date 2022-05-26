const asyncHandler=require("express-async-handler");
const User=require('../models/userModel')
const generateToken=require('../generateToken')



const registerUser=asyncHandler(async (req,res)=>{


 const {name,email,password}=req.body;  



 if (!name || !email || !password)
 {
  res.status(400);
  throw new Error("Please Enter all the Fields")
 }
 const userExits=await User.findOne({email});

 if (userExits)
 {
  res.status(400);
  throw new Error("User already exists");
 }
 

 const user=await User.create({
 name,
 email,
 password
 });


 if(user){
 res.status(201).json({
 _id:user._id,
 name:user.name,
 email:user.email,
 token:generateToken(user._id)
 });
 console.log("Successfully")   
 }
 else {
 res.status(400);
 throw new Error("Failed to Create the User"); 
 }

});


module.exports={registerUser};