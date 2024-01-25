const mongoose = require('mongoose');

const AlbumSchema = mongoose.Schema({
    albumName:{
        type:String,
        required:[true, 'Album Name is required'],
        minLength:[2, 'The album name must be at least 2 characters long'],
        maxLength:[25, 'That album name is too long must be 25 characters or less']
    },
    artist:{
        type:String,
        required:[true, 'Artist Name is required'],
        minLength:[2, 'The Artist name must be at least 2 characters long']
    },
    releaseYear:{
        type:Number,
        required:[true, 'Release year is required'],
        min:[1930, 'The release cannot be before 1930'],
        max:[2024, 'The release year cannot be in the future']
    },
    genre:{
        type:String,
        required:[true, 'Genre is required'],
        minLength:[3, 'The Genre must be at least 3 characters long']
    }

    // For created at and updated at
}, {timestamps:true} )

module.exports = mongoose.model('Album', AlbumSchema)