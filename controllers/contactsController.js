const contacts = require('../models/contacts');
const multer = require('multer');

// get all messages
const getAllMessages = (req, res) =>{
    contacts.find({}, (err, data) => {
        if(!err) {
            res.send(data);
        } else {
            res.json({
                message: "No Messages to show"
            })
        }
    });
}

// save message
const saveMessage = (req, res) =>{

    const new_contact = new contacts({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        message: req.body.message
    });
    new_contact.save((err, data) => {
        if(!err) {
            res.status(200).json({code: 200, message: 'New message Added Successfully', new_contact: data})
        } else {
           console.log(err);
        }
    });
}

//get single message
const getSingleMessage = (req, res) =>{
    contacts.findById(req.params.id, (err, data) => {
        if(!err) {
            res.send(data);
        } else {
           console.log(err);
        }
    });
}

//update messages

const updateMessage = (req, res) =>{
    const contact = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        message: req.body.message
    };
    contacts.findByIdAndUpdate(req.params.id, { $set: contact}, { new: true }, (err, data) => {
        if(!err) {
            res.status(200).json({code: 200, message: 'Contact Message Updated Successfully', editContact: data})
        } else {
            console.log(err);
        }
    });
}

// delete Message

const deleteMessage = (req, res) =>{
    contacts.findByIdAndRemove(req.params.id, (err, data) => {
        if(!err) {
            // res.send(data);
            res.status(200).json({code: 200, message: 'contact message deleted', deleteMessage: data})
        } else {
            console.log(err);
        }
    });
}

// exports

module.exports = {
    getAllMessages,
    saveMessage,
    getSingleMessage,
    updateMessage,
    deleteMessage
}