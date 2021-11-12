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
    }
})


module.exports = mongoose.model('User', userSchema);