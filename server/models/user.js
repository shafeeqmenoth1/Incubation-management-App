const {Schema, model} = require('mongoose')



const UserSchema = new Schema({
   
    userName:{type:String, required:true},
    email:{type:String, required:true},
    password:{type:String, required:true},
    role:{type:String, enum:["user","admin"], default:"user"}
})




const User = model("user",UserSchema)





module.exports =User