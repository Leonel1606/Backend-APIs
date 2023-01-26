const mongoose = require('mongoose');

// users schema
const admin = mongoose.model('admin', {
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    profile:{
        type: String,
        default: "dummy.png"
    },
    created_date:{
        type:Date,
        default: new Date()
    }
    
});

module.exports = admin