const mongoose=require('mongoose')


const questionSchema=mongoose.Schema({
   question:{type:String},
   option1:{type:String},
   option2:{type:String},
   option3:{type:String},
   answer:{type:String}
})

const appleSchema=mongoose.Schema({
   id   :{type: String, require},
   title : {type: String, require},
   price :{type: String, require},
   desc : {type: String, require},
   img : {type: String, require},
  },{
      timestamps:true,
  })

const questionModel=mongoose.model("question",questionSchema);

const appleModel=mongoose.model('apples',appleSchema)


module.exports=questionModel;

module.exports=appleModel;
