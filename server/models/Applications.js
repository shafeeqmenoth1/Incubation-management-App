const mongoose =require('mongoose')


const Applications=new mongoose.Schema({
    userId :{type:String},
    name : {type:String, required:true},
    address :{type : String , required : true},
    city:  { type : String , required : true},
    state:  { type : String , required : true},
    email:  { type : String , required : true},
    phone:  { type : String ,required : true},
    companyname:  { type : String , required : true},
    teamandbackground:  { type : String , required : true},
    companyandproduct:  { type : String , required : true},
    problem:  { type : String , required : true},
    solution:  { type : String , required : true},
    valueproposition:  { type : String , required : true},
    competators:  { type : String },
    revenueModel:  { type : String },
   
    potentialmarketsize:  { type : String , required : true},
    plan:  { type : String , required : true},
    type:  { type : String , required : true},
    businessproposal:  { type : String , required : true},
    status:{type:String},
    selected:{type:Boolean ,default : false},

} )

const Application = mongoose.model('application',Applications)

module.exports = Application