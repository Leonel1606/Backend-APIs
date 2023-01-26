const mongoose = require('mongoose');

// subscribers Schema ....................................
const subscribers = mongoose.model('subscribers', {
    email: {
        type:String,
        required:true
    },
   
    date: {
        type:String, 
        default: new Date()
    } 
});


module.exports = subscribers