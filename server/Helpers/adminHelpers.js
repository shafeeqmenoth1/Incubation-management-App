
var collection = require('../config/collections')
const bcrypt = require('bcrypt')
const async = require('hbs/lib/async')
const { ObjectId } = require('mongodb')
const Admin = require('../models/admin')
const Application = require('../models/Applications')
const Slots = require('../models/slots')


module.exports = {
    doAdminLogin : (data) =>{
        return new Promise (async(resolve,reject)=>{
            let response = {}
            let admin = await Admin.findOne({email:data.email})
            if(admin){
                bcrypt.compare(data.password, admin.password).then((status) => {
                    if (status) {
                        console.log('loginSuccessfull');
                        response.loggedIn = true;
                        response.admin = admin
                        resolve(response)
                    } else {
                        console.log("Login failed");
                        response.loggedIn = false;
                        resolve(response)
                    }
                })
            }else{
                response.loggedIn = false;
                resolve(response)
            }
        })
    },
    getNewApplication : ()=>{
        return new Promise ( async(resolve,reject)=>{
           let formData = await Application.find()
        //    console.log("allData : ",formData);
           resolve(formData)
        })
    },
    pending : (id) => {
        return new Promise ( async(resolve,reject) => {
            console.log("iddddddddd",id);
            Application.updateOne({_id:id},{$set:{status:'pending'}}).then((response)=>{
                resolve(response)
            })
        })
    },
    approve : (id) => {
        return new Promise ( async(resolve,reject) => {
            console.log(id);
            Application.updateOne({_id:ObjectId(id)},{$set:{status:'approved'}}).then((response)=>{
                resolve(response)
            })
        })
    },
    getAllslots : () =>{
        return new Promise( async(resolve,reject) => {
            let slots = await Slots.find()
           console.log("allData : ",slots);
           resolve(slots)
        })
    },
    bookSlot : (id) =>{
        return new Promise ( async(resolve,reject) => {
            console.log(id);
            Slots.updateOne({_id:ObjectId(id)},{$set:{selected:true}}).then((response)=>{
                resolve(response)
            })
        }) 
    },
    bookcompany : (id) => {
        return new Promise ( async(resolve,reject) => {
            console.log(id);
            Application.updateOne({_id:ObjectId(id)},{$set:{selected:true}}).then((response)=>{
                resolve(response)
            })
        }) 
    }
}