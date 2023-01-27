const blogs = require('../models/blogs');
const multer = require('multer');

// storage for images 

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
      },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
//
const uploadImg = multer({storage: storage}).single('image');

// Save blogs  ...........
const newBlog = (req, res) => {
    blogs.findOne({ title: req.body.title }, (err, data) => {

        if (!data) {

            const newBlog = new blogs({
                title:req.body.title,
                image: req.file.path, 
                description: req.body.description,
                
            })

            // save this object to database
            newBlog.save((err, data)=>{
                if(err) return res.json({Error: err});
                return res.json({
                    message: "Blog post is Done",
                    data});
            })        
        }else{
            if(err) return res.json(`Something went wrong, please try again. ${err}`);
            return res.json({message:"Blog already exists"});
        }
    })    
};

const getAllBlogs = (req, res) => {
    blogs.find({}, (err, data)=>{
        if (err){
            return res.json({Error: err});
        }
        return res.json(data);
    })
};

//GET blog by id'..............
const getOneBlog = (req, res) => {
    blogs.findById(req.params.id, (err, data) => {
        if(!err) {
            res.send(data);
        } else {
           console.log(err);
        }
    });
};

//update blog ...........................
 const updateBlog = (req, res) => {

    const blog = {
        title:req.body.title,
        image: req.file.path, 
        description: req.body.description,
    };
    blogs.findByIdAndUpdate(req.params.id, { $set: blog}, { new: true }, (err, data) => {
        if(!err) {
            res.status(200).json({code: 200, message: 'Blog Updated Successfully', editBlog: data})
        } else {
            console.log(err);
        }
    });
};

// delete blog .................
const deleteOneBlog = (req, res) => {

    blogs.findByIdAndRemove(req.params.id, (err, data) => {
        if(!err) {
            // res.send(data);
            res.status(200).json({code: 200, message: 'blog deleted', deleteBlog: data})
        } else {
            console.log(err);
        }
    });
};



// POST comments .............................

const newComment = (req, res) => {
    let id = req.params.id; //get the tea to add the comment in
    let newComment = req.body.comments; //get the comment
    //create a comment object to push
    const comment = {
        text: newComment,
        date: new Date()
    }
    //find the tea object
    blogs.findById(id, (err, data) => {
        if(err || !data || !newComment) {
            return res.json({message: "blog doesn't exist.", idd: id});
        }
        else {
            //add comment to comments array of the tea object
            data.comments.push(comment);
            //save changes to db
            data.save(err => {
                if (err) { 
                return res.json({message: "Comment failed to add.", error:err});
                }
                return res.json(data);
            })  
        } 
    })
  };
  
//export controller functions
module.exports = {
    newBlog,
    uploadImg,
    getAllBlogs,
    getOneBlog,
    updateBlog,
    deleteOneBlog,
    newComment
};