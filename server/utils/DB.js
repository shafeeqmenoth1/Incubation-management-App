const mongoose = require('mongoose');

module.exports.connection =()=>{
  mongoose.connect('mongodb://localhost:27017/inc-mng',
  {
    useNewUrlParser: true,
   
    useUnifiedTopology: true
  },
  (err)=>{
    if(err) throw err
    console.log("Connected to DATABASE");
  }
);
} 