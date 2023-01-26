const userRouteDoc = require("../routes/user.Doc");
const blogsRouteDoc = require('../routes/blogs.Doc')
const contactsRouteDoc = require('../routes/conntacts.Doc')

const swaggerDocumentation = {
    openapi: "3.0.0",
    info: {
        title: "Portfolio backend",
        version: "0.0.1",
        description: "This is backend for my portfolio"
    },
    components: {
        securitySchemes: {
          token: {
            type: 'apiKey',
            scheme: 'bearer',
            bearerFormat: 'JWT',
            name:"token",
            in:"header"
          },
        },
    },
    servers: [
        {
            url: "http://localhost:3000",
            description: "Dev server",
        },
        
    ],
    tags: [
        {
            name: "User",
            description: "User routes",
        },
        {
            name: "Blogs",
            description: "Blogs routes",
        },
        {
            name: "Contacts",
            description: "Contact Me routes",
        },

    ],
    paths: {
        ...userRouteDoc,
        ...blogsRouteDoc,
        ...contactsRouteDoc,
    },
        };



module.exports = swaggerDocumentation;