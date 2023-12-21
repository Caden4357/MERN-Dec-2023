const express = require('express') // same as const express = import express
const app = express()

app.use( express.json() ); // ! this needs to be above the other code blocks. This code block allows us to use json
app.use( express.urlencoded({ extended: true }) ); // ! this needs to be above the other code blocks. This code block allows us to use url encoded data


// * This is just some placeholder data that we will be using for our routes today
// * this is not connected to a database this is just an array of objects I hard coded
// * normally this would be data that is coming from a database. We will learn how to connect to a database tomorrow and next week
const albums = [
    {id: 1, albumName: 'Iowa', artist: 'Slipknot'},
    {id: 2, albumName: 'The Infamous', artist: 'Mobb Deep'},
    {id: 3, albumName: 'Homework', artist: 'Daft Punk'},
    {id: 4, albumName: 'The Best Of Sade', artist: 'Sade'},
    {id: 5, albumName: 'Flying Microtonal Banana', artist: 'King Gizzard & the Lizard Wizard'}
]
// * /api/allAlbums - this is the route that we are listening to localhost:8000/api/allAlbums
// * the second argument is a callback function that will run when the route is hit
// * request is an object that contains all the information about the request that was made to the server
// * response is an object that contains all the methods for sending a response to the client
// * response.json() will send a json response to the client
// * response.json() can take in an object as an argument and it will send that object as a json response to the client


// * Get all 
app.get('/api/allAlbums', (request, response) => {
    // in the big picture 
    // database call to get all the albums in the database 
    response.json(albums)
})

// * Get One
app.get('/api/album/:id', (request, response) => {
    console.log(request.params);
    const id = request.params.id
    const album = albums.filter((album) => album.id == id)
    response.json(album)
})

// * Create
app.post('/api/newAlbum', (request, response) => {
    console.log(request.body);
    albums.push(request.body)
    response.json(albums)
})

app.listen(8000, () => console.log('Listening on Port 8000'))