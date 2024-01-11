const express = require('express')
const app = express()

app.use(express.json(), express.urlencoded({ extended: true }))

require('./config/mongoose.config') // connecting to our DB

require('./routes/album.routes')(app) // config our routes 

app.listen(8000, () => console.log('The server is running on port 8000'))

