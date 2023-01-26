const subscribers = require('../models/subscribers');
const multer = require('multer');

// get all subscribeers
const getAllSubscribers = (req, res) =>{
    subscribers.find({}, (err, data) => {
        if(!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    });
}

// subscribe
const subscribe = (req, res) =>{

    const new_sub = new subscribers({

        email: req.body.email,

    });
    new_sub.save((err, data) => {
        if(!err) {
            res.status(200).json({code: 200, message: 'Subscription Successfully', new_sub: data})
        } else {
           console.log(err);
        }
    });
}


// exports

module.exports = {
    getAllSubscribers,
    subscribe,

}