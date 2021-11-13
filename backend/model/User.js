var mongoose = require('mongoose');


var userSchema = mongoose.Schema({
    name: {
        type: String,
        required : true
    },
    email : {
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    },
    contact:{
        type: String,
        required:  false
    },
    address:{
        type: String,
        required:false
    },
    isTherapist:{
        type : Number,
        default: 0 
    },
    slots : [
        {
            isBooked : {
                type : Boolean,
                default : 0
            },
            dateTime : {
                type :Date,
                default : null
            }
        },
    ],
    imageUrl : {
        type : String,
        default : null
    }
})


module.exports = mongoose.model('User', userSchema);