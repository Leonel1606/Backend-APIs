const User = require("../models/user");
const errorFunction = require("../utils/errorFunction");
const securePassword = require("../utils/securePassword");

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


// register a user
const addUser = async (req, res, next) => {
	try {
		const existingUser = await User.findOne({
			email: req.body.email,
		}).lean(true);
		if (existingUser) {
			res.status(403);
			return res.json(errorFunction(true, "User Already Exists"));
			} else {
				const hashedPassword = await securePassword(req.body.password);
				// create object to store info
				const newUser = await User.create({
					userName: req.body.userName,
					email: req.body.email,
					password: hashedPassword,
					mobileNumber: req.body.mobileNumber,
					birthYear: req.body.birthYear,
					skillSet: req.body.skillSet,
					is_active: req.body.is_active,
			});
			if (newUser) {
				res.status(201);
				return res.json(
					errorFunction(false, "User Created", newUser)
				);
			} else {
				res.status(403);
				return res.json(errorFunction(true, "Error Creating User"));
			}
		}
	} catch (error) {
		res.status(400);
		console.log(error);
		return res.json(errorFunction(true, "Error Adding user"));
	}
};

// retrieve all users in database 
const getUsers = async (req, res, next) => {
	try {
		const allUsers = await User.find();
		if (allUsers) {
			res.status(201);
			return res.json(
				errorFunction(false, "Sending all users", allUsers)
			);
		} else {
			res.status(403);
			return res.json(errorFunction(true, "Error getting Users"));
		}
	} catch (error) {
		res.status(400);
		return res.json(errorFunction(true, "Error getting user"));
	}
};

// user login ...........................
const Login = async(req, res)=>{
	const user = await User.findOne({ email: req.body.email });
  
    if (!user) return res.status(400).send("Email or password is wrong");
  
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).send("Email or password is wrong");
    const userInfo = {
	
		email: user.email,
		userName: user.userName
	}
    //Create and assign a token
    const token = jwt.sign({userInfo }, '123abc');
    // res.header("auth-token", token).send(token);
	res.json({
		userInfo,
		message: `You have successfully Logged in `,
		token
	})
}

//update messages

const updateUser = (req, res) =>{
    const user = {
        userName: req.body.userName,
        email: req.body.email,
		password: req.body.password,
        mobileNumber: req.body.mobileNumber,
        birthYear: req.body.birthYear,
		skillSet: req.body.skillSet,
		is_active: req.body.is_active,

    };
    User.findByIdAndUpdate(req.params.id, { $set: user}, { new: true }, (err, data) => {
        if(!err) {
            res.status(200).json({code: 200, message: 'User profile updated successfull Updated Successfully', editUserProfile: data})
        } else {
            console.log(err);
        }
    });
}

module.exports = { 
	addUser, 
	getUsers,
	Login,
	updateUser
};