const admin = [
    {
        "_id": "63c68ca28f6a232c0703fe3d",
        "adminInfo": {
            "name": "NP Leon",
            "username": "leon",
            "password": "leon",
            "email": "leonndayishimiye10@gmail.com"
        },
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbkluZm8iOnsibmFtZSI6Ik5QIExlb24iLCJ1c2VybmFtZSI6Imxlb24iLCJlbWFpbCI6Imxlb25uZGF5aXNoaW1peWUxMEBnbWFpbC5jb20ifSwiaWF0IjoxNjc0NzQ0MDIzfQ.ksTxyIQVes97O22Wcj94MJ5sofkSQHfpl8pgpPR_oNc"
    }
]

// login 
const AdminLogin = {
    tags:['Admin'],
    description:"AdminLogin",
    requestBody:{
        content:{
            "application/json":{
                schema:{
                    type:"object",
                    properties:{
                        username:{
                            type:"string",
                            description:"Your username",
                            example:"leon"
                        },
                        password:{
                            type:"string",
                            description:"your password",
                            example:"leon"
                        },
                    }
                }
            }
        }
    },
    responses:{
        200:{
            description:"OK",
            content:{
                "application/json":{
                    type:"object",
                    example:{
                        status:"Done",
                        admin
                    }
                }
            }
        }
    }
}

// update profile
const updateAdminInfo = {
    tags:['Admin'],
    description:"Update Admin profile",
    security: [
        {
          token: [],
        },
      ],
      parameters:[
        {
            name:"id",
            in:"path",
            description:"admin id",
            type:"string",
            example:"63c68ca28f6a232c0703fe3d"
        }
    ],
    requestBody:{
        content:{
            "application/json":{
                schema:{
                    type:"object",
                    properties:{
                        name:{
                            type:"string",
                            description:"the  name",
                            example:"pierre"
                        },
                        username:{
                            type:"string",
                            description:"the  username",
                            example:"leon"
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
                        profile: {
                            type:"string",
                            description:"profile picture",
                            example:"leon.png"

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
                        status:"Done",
                        admin
                    }
                }
            }
        }
    }
}


const AdminRouteDoc = {
    "/Home/admin/login":{
    post: AdminLogin,
},
"/admin/edit/{id}": {
    put:updateAdminInfo
}
}

module.exports  = AdminRouteDoc;