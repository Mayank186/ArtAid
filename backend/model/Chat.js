var mongoose = require('mongoose');

var chatSchema = mongoose.Schema({
    to:{
        type : String,
        required : true
    },
    from:{
        type: String,
        required : true
    },
    date: {
        type : Date, 
        default : Date.now()
    },
    message : {
        type : String,
        required : true
    },
    seen : {
        type  :Boolean,
        default : false
    }
});


module.exports = mongoose.model('Chat', chatSchema);