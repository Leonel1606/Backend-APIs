const express = require("express");
// const defaultController = require("../controllers/defaultController");
// const userValidation = require("../middleware/user.validator");
const { addUser, getUsers, Login } = require("../controllers/user.controller");
const router = express.Router();
const User = require('../models/user')
// const bcrypt = require('bcryptjs')

// router.get("/", defaultController);


router.post("/addUser", addUser);
router.get("/getUsers", getUsers);
// router.post("/login", userLogin);

router.post("/login", Login);



//login
router.post("/login", async (req, res) => {

    const email = req.body.email
    const password  = req.body.password
    
    const user = await User.findOne({ email: req.body.email });
  
    if (!user) return res.status(400).send("Email or password is wrong");
  
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).send("Email or password is wrong");
  
    //Create and assign a token
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
    res.header("auth-token", token).send(token);
  });
module.exports = router;