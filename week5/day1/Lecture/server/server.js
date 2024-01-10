const express = require('express')
const app = express()

app.use(express.json(), express.urlencoded({ extended: true }))

require('./config/mongoose.config')

require('./routes/album.routes')(app)

app.listen(8000, () => console.log('The server is running on port 8000'))

