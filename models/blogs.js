const mongoose = require('mongoose');

// blogs Schema ................................

const blogs = mongoose.model('blogs', {
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    comments: [{ text: String, date: {type:String, default: new Date()} }]

    });



module.exports = blogs