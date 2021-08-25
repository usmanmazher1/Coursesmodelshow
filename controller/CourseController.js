const Courses = require('../model/course');
const asynchandler = require('../async');
/////Get Course
exports.getcourses = asynchandler(async function(req,res,next){
   const course = await Courses.find();
   res.status(200).json({
       success:true,
       count:course.length,
       data:course
   }) ;
});
///////////////
exports.getcourse = asynchandler(async function(req,res,next){
    const course = await Courses.findById(req.params.id)
    res.status(200).json({
        success:true,
       // count:course.length,
        data:course
    }) ;
 })
/////// Insert Course
exports.insertcourse = asynchandler(async function(req,res,next){
    console.log(req.body);
    const course = await Courses.create(req.body);
    res.status(201).json({
        success:true,
        data:course
    }) ;
 })
 //// Update course
 exports.updatecourse = asynchandler(async function(req,res,next){
    const course = await Courses.findByIdAndUpdate(req.params.id);
    res.status(200).json({
        success:true,
        data:course
    }) ;
 })
 /// Delete course
 exports.deletecourse = asynchandler(async function(req,res,next){
      const course = await Courses.findByIdAndRemove(req.params.id);
    res.status(202).json({
        success:true,
        data:[]
    });
 });