const jwt=require('jsonwebtoken')


const generateToken=(id)=>{

return jwt.sign({id},process.env.JWT_SECRET,{
expiresIn:"30d",    
});

};

console.log("the token is",generateToken)

module.exports=generateToken;