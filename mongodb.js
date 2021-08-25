const mongoose = require('mongoose');
const mongodb = async()=>{
   const connect =  mongoose.connect("mongodb+srv://admin:admin123@cluster0.5wyko.mongodb.net/test",{
       useNewUrlParser:true,
       useUnifiedTopology:true,
       useFindAndModify:false,
       useCreateIndex:true
   });
   console.log("your datbase is connected");
}
module.exports = mongodb;
