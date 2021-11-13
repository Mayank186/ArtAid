var mongoose = require('mongoose');

var slotSchema = new mongoose.Schema({
    therapist: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User'
        }
    ],
    slots : [
        {
            isBooked : {
                type : Boolean,
                default : 0
            },
            date : {
                type :Date,
                default : null
            }
        },
    ]  
})

module.exports = mongoose.model('Slot', slotSchema);