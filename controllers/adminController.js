const admin = require('../models/admin');
const multer = require('multer');
const bycrpt = require('bcryptjs');
const jwt = require('jsonwebtoken');


// // register users ....................

const registerUser = (req, res) =>{
bycrpt.hash(req.body.password, 10, (error, hashedPassword)=>{
    if(error){
        res.json({error: error});
    }
    const new_user = new admin({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,

    });
    new_user.save((err, data) => {
        if(!err) {
            // res.send(data);
            res.status(200).json({code: 200, message: 'account created  Successfully', new_contact: data})
        } else {
           console.log(err);
        }
    });
})
}

//update user info
const updateAdmin = (req, res) =>{
    const user = {
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    };
    admin.findByIdAndUpdate(req.params.id, { $set: user}, { new: true }, (err, data) => {
        if(!err) {
            res.status(200).json({code: 200, message: 'info Updated Successfully', editProfile: data})
        } else {
            console.log(err);
        }
    });
}

// login 
const adminLogin = (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;

    admin.findOne({$or: [{username: username}, {email: username }]})
    .then(admin =>{
        if(admin){
            bycrpt.compare(password, admin.password, function(err, result) {
                if(err){
                    res.json({
                        error: err
                    })
                }
                if(result){
                    const adminInfo = {
                        name: admin.name,
                        username: admin.username,
                        email: admin.email,
                    }
                    jwt.sign({adminInfo}, 'leon', (err, token) =>{
                        if(err){
                            res.json({error: err})
                        }
                        res.json({
                            message: `Hey ${adminInfo.username} , You've  successful logged in...`,
                            adminInfo,
                            token
                        })
                    })
                }
                else{
                    res.json({
                        message: 'Password dont match, try again'
                    })
                } 
        } )
        }
        else{
            res.json({
                message: "user not found"
            })
        }
    })
}
//exports .........

module.exports = {
    registerUser,
    updateAdmin,
    adminLogin

}