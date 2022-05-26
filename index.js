require("dotenv").config();
const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const router=require('./routes/routes')
const jwt=require('jsonwebtoken')
const User=require('./models/userModel')


const app=express();


app.use(express.json())

app.use(cors())

const PORT=process.env.PORT || 5000;

app.use('/',router)

app.get('/',(req,res)=>{
   res.send("Quiz application is up and running")
 })

const URI=process.env.MONGO_URL;

mongoose.connect(URI).then(()=>{
   app.listen(PORT,()=>{
   console.log(`Server is running on ${PORT}`)
   }) 
}).catch((error)=>{


})

app.post('/api/register',async(req,res)=>{
   console.log(req.body)
   try{
   const user=await User.create({
   // name:req.body.name,
   email:req.body.email,
   password:req.body.password, 
   })
   res.json({status:'ok'})
   }
   catch(err){
     console.log(err)
     res.json({status:'error',error:'Duplicate email'})
   }
 })

 app.post('/api/login',async(req,res)=>{
   const user=await User.findOne({
   email:req.body.email,
   password:req.body.password, 
   })
   if(user){
 
   // const token=jwt.sign({
   
   //   email:user.email,
   // }, 'my_secret_key')    
   
   const token=jwt.sign({
   
     email:user.email,
   },process.env.SECRET_KEY) 
 
   
 
 
   return res.json({status:'ok',user:token})
   }
   else{
     return res.json({status:'error',user:false})
   }
 })