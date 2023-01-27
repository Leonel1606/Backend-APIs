const express = require('express');
const router = express.Router();
const subscribersController = require('../controllers/subscriberController');
const auth_admin = require('../middleware/adminAuthenticate')
const subValidation = require("../middleware/subValidator");


router.get('/Admin/subscribers',auth_admin, subscribersController.getAllSubscribers);
router.post('/Home/subscribe',subValidation, subscribersController.subscribe);


//exports
module.exports = router