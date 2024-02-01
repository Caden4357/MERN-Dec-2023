const express = require('express');
const app = express();
const cors = require('cors');
const socket = require('socket.io');
const port = 8000;
app.use(cors());

const server = app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
});

// to initialize the socket, we need to invoke a new instance
//     of socket.io and pass it our express server instance
// We must also include a configuration settings object to prevent CORS errors
const io = socket(server, {
    cors: {
        origin: 'http://127.0.0.1:5173',
        methods: ['GET', 'POST'],
        allowedHeaders: ['*'],
        credentials: true,
    }
});


io.on('connection', socket => {
    console.log('SOCKET ID FROM SERVER', socket.id);


    socket.on('send-message', (data) => {
        console.log('DATA FROM CLIENT', data);
        io.emit('new-message', data)
    })



})

