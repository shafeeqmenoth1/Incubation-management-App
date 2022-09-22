


const bcrypt = require('bcrypt')
const { reject } = require('bcrypt/promises')
const User = require('../models/user')
const Application = require('../models/Applications')
const { response } = require('express')
// const multer = require('multer')
// let fs = require('fs');
// const path = require('path')

// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, './public')
//     },
//     filename: function (req, file, cb) {
//       cb(null, 'companyLogo.jpg')
//     }
//   })
//   let upload = multer({ storage: storage }).single('logo')


module.exports={
    doSignup: async (req,res) => {
        
        try {
            const data = req.body
            console.table(data)
            const { userName, email, password } = req.body
            if (!userName || !email || !password) {
              res.status(400).json({ err: 'Enter all the details' })
            } else if (password.length < 6) {
              res.status(400).json({ err: 'Enter minimum 6 characters for password' })
            } else  {

            let user = await User.findOne({email:data.email})
            if(user){
                console.log(data.email);
                console.log('user already exist');
                
               
            }else{
                data.password = await bcrypt.hash(data.password, 10)
                await User.create({
                    userName: req.body.userName,
                    email: req.body.email,
                    password: data.password
                })
               
                res.status(200).json({ success: 'success' })

                
            }
        }
            
        } catch (error) {
            console.log(error.message);
            res.status(500).send({message:"Internal Server Error"})
        }
       
        
    },
    doLogin: async (req, res) => {
            try {
                const data = req.body
              console.table(req.body);
              const { email, password } = req.body
              if (!email || !password) {
                res.status(400).json({ err: 'Enter all the details' })
              } else {
                let response = {}
            let user = await User.findOne({email:data.email})
            if(user){
                bcrypt.compare(data.password, user.password).then((status) => {
                    if (status) {
                        console.log('loginSuccessfull');
                        response.loggedIn = true;
                        response.user = user;
                      
                        res.status(200).json(response)
                    } else {
                        console.log("Login failed");
                        response.loggedIn = false;
                        res.status(400).json({ err: "invalid username or password" })


                    }

                })
            }else{
                response.loggedIn = false;
                
            }
              }
            } catch (error) {
              console.log(error)
            }
          
   
            
        
        
    },
    insertForm: async(req,res)=>{
      
      try {

            console.log("bodyyyy",req.body.name)
    
        // upload((err) => {
 
            let formData = req.body
            let status = "New"

            await Application.create({...formData,status})
          
                // const currentPath = path.join(__dirname, "../public", "companyLogo.jpg");
                // const destinationPath = path.join(__dirname, "../public/logoImages", doc._id + ".jpg");
          
                // fs.rename(currentPath, destinationPath, function (err) {
                //   if (err) {
                //     throw err
                //   } else {
                //     console.log("Successfully moved the file!");
                //   }
                // });
                res.status(200).json({ success: 'form submitted successfully' })
            
           
         
            // if (err instanceof multer.MulterError) {
            //   return res.status(500).json({ err: 'qwerty' })
            // } else if (err) {
            //   return res.status(500).json({ err: 'asdfgh' })
            // }
        
        //   })
        
      } catch (error) {
        console.log(error);
      }
          
           
        
    }

}