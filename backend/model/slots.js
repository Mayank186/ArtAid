var mongoose = require('mongoose');

var slotSchema = new mongoose.Schema({
    time : {
        type  : String,
        required : true
    },
    date : {
        type : Date,
        required: true
    },
    isBooked : {
        type : Boolean,
        default : 0 // 0 -> Not Booked, 1-> Booked
    }
})

module.exports = mongoose.model('Slot', slotSchema);