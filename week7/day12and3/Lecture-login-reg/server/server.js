const express = require("express");
const cors = require('cors');
require('dotenv').config();
const app = express();
const cookieParser = require('cookie-parser') // ! This is to import cookie parser to send cookies to client 
app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cors({credentials:true, origin:'http://localhost:5173'}))
app.use(cookieParser(process.env.SECRET_KEY)) // ! Dont forget to use cookieParser




require('./config/mongoose.config')
const userRoutes = require('./routes/user.routes')
userRoutes(app)

app.listen(8000, () => console.log("The server is all fired up on port 8000"));
