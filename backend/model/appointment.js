var mongoose = require('mongoose');


var appointmentSchema = mongoose.Schema({
    therapist : {
        type  : String,
        required : true
    },
    patient : {
        type  : String,
        required : true
    },
    time : {
        type :String,
        required : true
    },
    date : {
        type : String,
        required : true
    },
    completed : {
        type :Boolean,
        default : false
    }
})


module.exports = mongoose.model('Appointment', appointmentSchema);