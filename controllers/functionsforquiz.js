const questionModel=require("../models/question")

const getQuestions=async(req,res)=>{

    try{
        const questions=await questionModel.find({})

        if(questions)
        {
          res.json(questions)  
        }
     }
    catch(error)
    {
     console.log(error)   
    }
};


const getQuestion=async(req,res)=>{

  try{
      const questions=await questionModel.findById(req.params.id)

      if(questions)
      {
        res.json(questions)  
      }
   }
  catch(error)
  {
   console.log(error)   
  }
};



const createQuestion=async(req,res)=>{
try
{
const question=new questionModel({
question:req.body.question,
option1:req.body.option1,
option2:req.body.option2,
option3:req.body.option3,
answer:req.body.answer,
})   
const createData=await question.save();

if(createData)
{
 res.send(createData) 
}

}
  catch(error)
  {
   console.log(error) 
  }

}

const updateQuestion=async (req,res)=>{

  try{

  const question=await questionModel.findByIdAndUpdate(req.params.id,req.body)  

  if(question)
  {
   res.send('Updated successfully') 
  }

  }catch(error)
  {
  console.log(error)
  }
}

const deleteQuestion=async(req,res)=>{
try{

  const question=await questionModel.findByIdAndDelete(req.params.id)
  
  if(question)
  {
   res.send('Deleted Successfully') 
  }

}
catch(error)
{
console.log(error)
}
}







module.exports={getQuestions,createQuestion,updateQuestion,deleteQuestion,getQuestion}