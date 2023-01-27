
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const auth_admin = require('../middleware/adminAuthenticate')

// router.get('/Admin/users', usersController.getAllUsers);
router.post('/Home/users/new', adminController.registerUser);
router.put('/admin/edit/:id',auth_admin, adminController.updateAdmin);
// router.delete('/Admin/users/:id', usersController.deleteAccount);
router.post('/Home/admin/login', adminController.adminLogin);


//exports ...............

module.exports = router