const mongoose = require('mongoose');

// Contact Schema ....................................
const contacts = mongoose.model('contacts', {
    name: {
        type: String,
        required:true
    }, 
    email: {
        type:String,
        required:true
    },
    phone: {
        type:String,
        required:true
    },
    message: {
        type:String,
        required:true
    },
    date: {
        type:String, 
        default: new Date()
    } 
});



module.exports = contacts