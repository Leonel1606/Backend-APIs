const userRouteDoc = require("../docs/user.Doc");
const blogsRouteDoc = require('../docs/blogs.Doc')
const contactsRouteDoc = require('../docs/conntacts.Doc')
const subsRouteDoc = require('../docs/subscribersDoc')
const adminRouteDoc = require('../docs/adminDoc');


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
            scheme: 'Bearer',
            bearerFormat: 'JWT',
            name: "token",
            in: "headers"
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
        {
            name: "Subscribers",
            description: "subscribers routes",
        },
        {
            name: "Admin",
            description: "Admin routes",
        },

    ],
    paths: {
        ...userRouteDoc,
        ...blogsRouteDoc,
        ...contactsRouteDoc,
        ...subsRouteDoc,
        ...adminRouteDoc
    },
        };



module.exports = swaggerDocumentation;