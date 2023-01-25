const express = require('express');
const router = express.Router();
const subscribersController = require('../controllers/subscriberController');
// const auth = require('../middleware/adminAuthenticate')


router.get('/Admin/subscribers', subscribersController.getAllSubscribers);
router.post('/Home/subscribe', subscribersController.subscribe);


//exports
module.exports = router