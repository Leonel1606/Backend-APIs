const express = require('express');
const router = express.Router();
const auth_admin = require('../middleware/adminAuthenticate')
const auth_user = require('../middleware/userAuthenticate')

const blogController = require('../controllers/blogsController');

router.post('/Admin/blogs/new', auth_admin, blogController.uploadImg, blogController.newBlog);// for images 
router.get('/Home/blogs' , blogController.getAllBlogs);

router.get('/Home/blogs/:id', blogController.getOneBlog);

router.put('/Admin/blogs/edit/:id', auth_admin, blogController.uploadImg, blogController.updateBlog);

// Delete blog
router.delete('/Admin/blogs/delete/:id', auth_admin, blogController.deleteOneBlog);

// comment on blog
router.post('/Home/blogs/comment/:id',auth_user, blogController.newComment)



module.exports = router