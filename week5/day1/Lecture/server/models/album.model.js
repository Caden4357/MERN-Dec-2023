const mongoose = require('mongoose');

const AlbumSchema = mongoose.Schema({
    albumName:String,
    artist:String,
    releaseYear:Number,
    genre:String

    // For created at and updated at
}, {timestamps:true} )

module.exports = mongoose.model('Album', AlbumSchema)