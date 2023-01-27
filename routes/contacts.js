const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/contactsController');
const auth_admin = require('../middleware/adminAuthenticate')
const contactsValidation = require("../middleware/contactsValidator");
const auth_user = require('../middleware/userAuthenticate')


router.get('/Admin/messages', auth_admin, contactsController.getAllMessages);
router.post('/Home/messages/new', contactsValidation, contactsController.saveMessage);
router.get('/Admin/messages/:id', auth_admin, contactsController.getSingleMessage);
router.put('/Home/messages/edit/:id',auth_user, contactsController.updateMessage);
router.delete('/Admin/messages/:id', auth_admin, contactsController.deleteMessage);



//exports
module.exports = router