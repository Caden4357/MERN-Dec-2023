const express = require('express') // same as const express = import express
const app = express()

app.use( express.json() ); // ! this needs to be above the other code blocks. This code block allows us to use json
app.use( express.urlencoded({ extended: true }) ); // ! this needs to be above the other code blocks. This code block allows us to use url encoded data
const albumRoutes = require('./routes/album.routes')
albumRoutes(app)
// ! starting the server 
app.listen(8000, () => console.log('Listening on Port 8000'))