const subs = [
    {
        "_id": "63ca8042930817b4cb31349f",
        "email": "leon@gmail.com",
        "date": "Fri Jan 20 2023 13:40:40 GMT+0200 (Eastern European Standard Time)",
        "__v": 0
      }
]

const listAllSubs = {
    tags:['Subscribers'],
    description:"Get all emails",
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
                        status:"Done",
                        subs
                    }
                 }
            }
        }
    }
}

// send message to admin

const subscribe = {
    tags:['Contacts'],
    description:"make subscription to site",
    requestBody:{
        content:{
            "application/json":{
                schema:{
                    type:"object",
                    properties:{
                        email:{
                            type:"string",
                            description:"email",
                            example:"leonstonne@gmail.com"
                        }
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
                        subs
                    }
                }
            }
        }
    }
}

// all routes

const subsRouteDoc = {
    "/Admin/subscribers":{
        get:listAllSubs,
    }, 
    "/Home/subscribe":{
        post:subscribe,
    },

}
module.exports = subsRouteDoc