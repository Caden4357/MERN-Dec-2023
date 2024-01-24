const express = require("express");
const cors = require('cors');

const app = express();

app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cors())
require('./config/mongoose.config')
const userRoutes = require('./routes/user.routes')
userRoutes(app)

app.listen(8000, () => console.log("The server is all fired up on port 8000"));
