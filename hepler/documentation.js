const userRouteDoc = require("../routes/user.Doc");

const swaggerDocumentation = {
    openapi: "3.0.0",
    info: {
        title: "Demo",
        version: "0.0.1",
        description: "This is demo video"
    },
    servers: [
        {
            url: "http://localhost:3000",
            description: "local  dev",
        },
        {
            url: "http://production",
            description: "production  dev",
        },
    ],
    tags: [
        {
            name: "User",
            description: "User routes",
        },

    ],
    paths: {
        ...userRouteDoc,
    },
        };



module.exports = swaggerDocumentation;