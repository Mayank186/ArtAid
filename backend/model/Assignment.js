var mongoose = require('mongoose');

var assignmentSchema = mongoose.Schema({
    clientName:{
        type:String,
        required: true
    },
    assignment: { 
        type : String,
        required : true
    },
    date: {
        type : String,
        required : true
    },
    status : {
        type:String,
        required : true
    }
})


module.exports = mongoose.model('Assignment', assignmentSchema);