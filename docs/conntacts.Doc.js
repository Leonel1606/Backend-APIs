const message = [
    {
        "_id": "63d24e15c46cca5ed1c5f857",
        "name": "leon stone",
        "email": "leonstonne@gmail.com",
        "phone": "6578987654",
        "message": "where do you live Sir",
        "date": "Thu Jan 26 2023 11:52:31 GMT+0200 (Eastern European Standard Time)",
        "__v": 0
      }
]

const listAllContacts = {
    tags:['Contacts'],
    description:"Get all messages",
    security: [
        {
          token: [],
        },
      ],
    responses:{
        200:{
            description:"OK",
            content:{
                 "application/json":{
                    type:'object',
                    example:{
                        status:"success",
                        message
                    }
                 }
            }
        }
    }
}

// send message to admin

const saveMessage = {
    tags:['Contacts'],
    description:"send new  message",
    requestBody:{
        content:{
            "application/json":{
                schema:{
                    type:"object",
                    properties:{
                        name:{
                            type:"string",
                            description:"Your name",
                            example:"leon stone"
                        },
                        email:{
                            type:"string",
                            description:"email",
                            example:"leonstonne@gmail.com"
                        },
                        phone:{
                            type:"string",
                            description:"phone number",
                            example:"6578987654"
                        },
                        message:{
                            type:"string",
                            description:"body message",
                            example:"where do you live Sir"
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
                        message,
                    }
                }
            }
        }
    }
}
// get a single message
const getSingleMessage = {
    tags:['Contacts'],
    description:"get a single message",
    security: [
        {
          token: [],
        },
      ],
    parameters:[
        {
            name:"id",
            in:"path",
            description:"single message id",
            type:"string",
            example:"63d24e15c46cca5ed1c5f857"
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
                        message,
                    }
                 }
            }
        }
    }
}

// delete message

const deleteMessage = {
    tags:['Contacts'],
    description:"Delete a singlr message",
    security: [
        {
          token: [],
        },
      ],
    parameters:[
        {
            name:"id",
            in:"path",
            description:"message id",
            type:"string",
            example:"63d1505920fc45383479edb3"
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
                        message
                    }
                 }
            }
        }
    }
}

// all routes

const contactsRouteDoc = {
    "/Admin/messages":{
        get:listAllContacts
    }, 
    "/Home/messages/new":{
        post:saveMessage,
    },
    "/Admin/messages/{id}":{
        get:getSingleMessage,
    },
    "/Admin/messages/{id}":{
        delete:deleteMessage,
    },

}
module.exports = contactsRouteDoc