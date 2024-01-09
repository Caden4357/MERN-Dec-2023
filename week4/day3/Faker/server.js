const express = require('express') // same as const express = import express
const app = express()
const { faker } = require('@faker-js/faker');
app.use( express.json() ); // ! this needs to be above the other code blocks. This code block allows us to use json
app.use( express.urlencoded({ extended: true }) );

// everything else goes here (routes & controllers)

const createSong = () => {
    const genre = faker.music.genre()
    const song = faker.music.songName()
    return {genre,song}
}

app.get('/api/newSong', (req, res) => {
    const song = createSong()
    res.json(song)
})

app.listen(8000, () => console.log('Listening on Port 8000'))