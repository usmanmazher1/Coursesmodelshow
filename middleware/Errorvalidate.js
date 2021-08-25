const ErrorResponse = require('../error');
const error = (err,req,res,next) =>{
    let error = {...err};
    error.message = err.message;
    if(err.name==="CastError"){
        const message = `Course Not Found with id${err.value}`;
        error = new ErrorResponse(message,400);
    }
    //
    if(err.code===11000){
        const message = `Duplicate Value Entered `;
        error = new ErrorResponse(message,401);
    }
    //
    if(err.name==="ValidatorError"){
        const message =     Object(err.error).map(val=>val.message);
        error = new ErrorResponse(message,400);
    }
    res.status(error.statusCode ||500).json({
        success:false,
        error:error.message || 'Server error'
    });
}
module.exports = error;