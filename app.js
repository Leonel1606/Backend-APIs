const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const app = express();
const port = 3000
const swaggerDoc = require('swagger-ui-express');
const swaggerDocumentation = require('./hepler/documentation')
app.use(bodyParser.json());

const connectDB = require('./config/db');
// Load Config
dotenv.config({path: './config/config.env'})

connectDB();

// Routes
app.use('/documentation', swaggerDoc.serve)
app.use('/documentation', swaggerDoc.setup(swaggerDocumentation));

const userRoutes = require("./routes/userRoute");
app.use('/', userRoutes);


app.use('/', require('./routes/contacts'));
app.use('/', require('./routes/blogs'));
app.use('/', require('./routes/admin'));
app.use('/', require('./routes/subscribers'));


app.use('/uploads', express.static('./uploads'));

// port initialization ......................

app.listen(port, () =>{
    console.log(`App is running on port: ${port}`);
});