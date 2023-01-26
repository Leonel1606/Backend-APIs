const blog = [
   
  {
    "_id": "63c6eff21a13ebbe4fba1065",
    "title": "King is back",
    "image": "uploads/Screenshot 2023-01-17 at 18.55.30.png",
    "description": "this is so greate bro, keep moving",
    "comments": [
      {
        "text": "nice resource bro!",
        "date": "Fri Jan 20 2023 11:37:01 GMT+0200 (Eastern European Standard Time)",
        "_id": "63ca60bfdff402b48b842813"
      },
      {
        "text": "nice resource bro!",
        "date": "Wed Jan 25 2023 17:56:52 GMT+0200 (Eastern European Standard Time)",
        "_id": "63d151449231a02937097657"
      }
    ],
    "__v": 2
  }
]

const listAllBlogs = {
    tags:['Blogs'],
    description:"List all Blogs",
    responses:{
        200:{
            description:"Query OK",
            content:{
                 "application/json":{
                    type:'object',
                    example:{
                        status:"Done",
                        blog
                    }
                 }
            }
        }
    }
}
// post  nwew blog
const newBlog = {
    tags:['Blogs'],
    description:"Create a new blog",
    requestBody:{
        content:{
            "multipart/form-data":{
                schema:{
                    type:"object",
                    properties:{
                        title:{
                            type:"string",
                        },
                        image:{
                            type:"file",
                            description:"blog picture"
                        },
                        description:{
                            type:"string",
                            description: "blog body text"
                        },
                    }
                }
            }
        }
    },
    responses:{
        200:{
            description:"Query OK",
            content:{
                "application/json":{
                    type:"object",
                    example:{
                        status:"success",
                        blog,
                    }
                }
            }
        }
    }
}

// get single blog 
const getSingleBlog = {
    tags:['Blogs'],
    description:"Get blog by id",
    parameters:[
        {
            name:"id",
            in:"path",
            description:"blog id",
            type:"string",
            example:"63c6eff21a13ebbe4fba1065"
        }
    ],
    responses:{
        200:{
            description:"Query OK",
            content:{
                 "application/json":{
                    type:'object',
                    example:{
                        status:"success",
                        blog,
                    }
                 }
            }
        }
    }
}
// update blog
const editBlog = {
    tags:['Blogs'],
    description:"edit blog",
    security: [
        {
          token: [],
        },
      ],
    parameters:[
        {
            name:"id",
            in:"path",
            description:"blog id",
            type:"string"
        }
    ],
    requestBody:{
        content:{
            "multipart/form-data":{
                schema:{
                    type:"object",
                    properties:{
                        title:{
                            type:"string",
                        },
                        image:{
                            type:"file",
                            description:"blog picture"
                        },
                        description:{
                            type:"string",
                        },
                        
                    }
                }
            }
        }
    },
    responses:{
        200:{
            description:"Query OK",
            content:{
                "application/json":{
                    type:"object",
                    example:{
                        status:"Done",
                        blog,
                    }
                }
            }
        }
    }
}
// delete a blog

const deleteBlog = {
    tags:['Blogs'],
    description:"Delete blog",
    security: [
        {
          token: [],
        },
      ],
    parameters:[
        {
            name:"id",
            in:"path",
            description:"blog id",
            type:"string"
        }
    ],

    responses:{
        200:{
            description:"Query OK",
            content:{
                 "application/json":{
                    type:'object',
                    example:{
                        status:"Done",
                        blog,
                    }
                 }
            }
        }
    }
}

// comment on certain blog
const commentOnBlog = {
    tags:['Blogs'],
    description:"comment the blog",
    parameters:[
        {
            name:"id",
            in:"path",
            description:"blog id",
            type:"string"
        }
    ],
    security: [
        {
          token: [],
        },
      ],
    requestBody:{
        content:{
            "application/json":{
                schema:{
                    type:"object",
                    properties:{
                        comment:{
                            type:"string",
                            example:"wow ! you are really a developer"
                        },
                    }
                }
            }
        }
    },
    responses:{
        201:{
            description:"OK",
            content:{
                "application/json":{
                    type:"object",
                    example:{
                        status:"Done",
                        blog,
                    }
                }
            }
        }
    }
}

const blogsRouteDoc = {
    "/Home/blogs":{
        get: listAllBlogs,
    },
    "/Admin/blogs/new":{
        post: newBlog,
    },
    "/Home/blogs/{id}":{
        get: getSingleBlog,
    },
    "/Admin/blogs/delete/{id}":{
        delete: deleteBlog,
    },
    "/Home/blogs/comment/{id}":{
        post: commentOnBlog,
    },

}

module.exports  = blogsRouteDoc;