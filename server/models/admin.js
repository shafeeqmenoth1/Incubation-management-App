const mongoose =require('mongoose')
const ObjectId = mongoose.Types.ObjectId



const AdminSchema=new mongoose.Schema({
    // name : {type:String, required:true},
    email :{type : String , required : true,unique : true},
    password : { type : String , required : true},
} )

const Admin = mongoose.model('admin',AdminSchema)

module.exports=Admin
