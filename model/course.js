const mongoose = require('mongoose');
const CourseSchema  = mongoose.Schema({
  Name:{
      type:String,
      required:[true,"Please enter a course name"],
      trim:true,
      unique:true
  },  
  Code:{
    type:String,
    required:[true,"Please enter a course Code"],
    unique:true
  },
  Description:{
    type:String,
    required:[true,"Please enter a course Description"],
  },
  Weeks:{
    type:String,
    required:[true,"Please enter a week"],
  },
  Createdat:{
    type:Date,
    default:Date.now
  }
  
});
module.exports = mongoose.model('Course',CourseSchema);