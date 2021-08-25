const express =require('express');
const {getcourses,insertcourse,updatecourse,deletecourse,getcourse} = require('../controller/CourseController');
const router = express.Router();
router.route('/').get(getcourses).post(insertcourse);
router.route('/:id').put(updatecourse).get(getcourse).delete(deletecourse);
module.exports = router;