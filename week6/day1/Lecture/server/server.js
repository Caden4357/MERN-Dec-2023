const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors({origin:'http://127.0.0.1:5173'}))
app.use(express.json(), express.urlencoded({ extended: true }))

require('./config/mongoose.config') // connecting to our DB

require('./routes/album.routes')(app) // config our routes 

app.listen(8000, () => console.log('The server is running on port 8000'))

