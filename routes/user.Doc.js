const user = [
    {
        "_id": "63d1501020fc45383479edb0",
      "userName": "yuyu",
      "email": "tunezero@gmail.com",
      "password": "$2a$10$4o2aE.McmyzbxuK3nDP03eCY7mtw1HBktTINt4YnzvIegO.9Mww2S",
      "mobileNumber": "0780922562",
      "birthYear": 1999,
      "skillSet": [],
      "is_active": true,
      "createdAt": "2023-01-25T15:51:44.106Z",
      "updatedAt": "2023-01-25T15:51:44.106Z",
      "__v": 0
    }
]

const listAllUsers = {
    tags: ['User'],
    description: "List of all Users",
    responses: {
        200: {
            description: "Query OK",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        example: {
                            count: 1,
                            user,
                        }
                    }
                }
            }
        }
    }
}

// create a user
const createUser = {
    tags: ['User'],
    description: "Create a New user",
    requestBody:{
        content:{
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        userName:{
                            type:"string",
                            description:"the user name",
                            example:"yuyu"
                        },
                        email:{
                            type:"string",
                            description:"the user email",
                            example:"tunezero@gmail.com"
                        },
                        password:{
                            type:"string",
                            description:"the user password",
                            example:"12345776654"
                        },
                        mobileNumber: {
                            type:"string",
                            description:"phone number",
                            example:"1780912345"

                        },
                        birthYear: {
                            type:"number",
                            description:"year ",
                            example:"1998"
                        },
                        skillSet: {
                            type:"array",
                            description: "skills to gain a job ",
                            example:"css"
                        },
                        is_active:{
                            type: "boolean",
                            description: "active status",
                            example: "true"
                        }
                    }
                }
            }
        }
    },
    responses: {
        200: {
            description: "Query OK",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        example: user
                    }
                }
            }
        }
    }
}

// login 
const Login = {
    tags:['User'],
    description:"userLogin",
    requestBody:{
        content:{
            "application/json":{
                schema:{
                    type:"object",
                    properties:{
                        email:{
                            type:"string",
                            description:"Your email",
                            example:"Munezero@gmail.com"
                        },
                        password:{
                            type:"string",
                            description:"your password",
                            example:"11111111"
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
                        status:"success",
                        user
                    }
                }
            }
        }
    }
}

// update profile

const updateUser = {
    tags:['User'],
    description:"Update user profile",
    security: [
        {
          token: [],
        },
      ],
      parameters:[
        {
            name:"id",
            in:"path",
            description:"id of user",
            type:"string",
            example:"63caaf3527b29e1d399896da"
        }
    ],
    requestBody:{
        content:{
            "application/json":{
                schema:{
                    type:"object",
                    properties:{
                        userName:{
                            type:"string",
                            description:"the user name",
                            example:"leon16061998"
                        },
                        email:{
                            type:"string",
                            description:"the user email",
                            example:"leonstone@gmail.com"
                        },
                        password:{
                            type:"string",
                            description:"the user password",
                            example:"kk908767676754"
                        },
                        mobileNumber: {
                            type:"string",
                            description:"phone number",
                            example:"1780912345"

                        },
                        birthYear: {
                            type:"number",
                            description:"year ",
                            example:"1998"
                        },
                        skillSet: {
                            type:"array",
                            description: "year ",
                            example:"css"
                        },
                        is_active:{
                            type: "boolean",
                            description: "active status",
                            example: "true"
                        }
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
                        status:"success",
                        data:[]
                    }
                }
            }
        }
    }
}


const userRouteDoc = {
    "/users":{
    get: listAllUsers,
    post: createUser,
},
"/login":{
    post: Login,
},
"/user/update/{id}": {
    put:updateUser
}
}

module.exports  = userRouteDoc;