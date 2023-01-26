const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/contactsController');
// const auth = require('../middleware/adminAuthenticate')
// const {addcontactsValidation} = require('../validations/contacts/contacts_validations')

router.get('/Admin/messages', contactsController.getAllMessages);
router.post('/Home/messages/new', contactsController.saveMessage);
router.get('/Admin/messages/:id', contactsController.getSingleMessage);
router.put('/Home/messages/edit/:id', contactsController.updateMessage);
router.delete('/Admin/messages/:id', contactsController.deleteMessage);



//exports
module.exports = router