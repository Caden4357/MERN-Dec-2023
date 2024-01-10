const Album = require('../models/album.model')

module.exports = {
    // Find All OR R in CRUD (Read All)
    findAllAlbums: (req, res) => {
        Album.find()
            .then((allAlbums) => {
                res.status(200).json(allAlbums)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    }
}