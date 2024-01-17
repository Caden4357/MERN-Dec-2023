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
    },
    // Read One
    findOneAlbum: (req, res) => {
        console.log(req.params);
        Album.findOne({_id: req.params.id})
            .then((oneAlbum) => {
                res.status(200).json(oneAlbum)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },
    // Create C in CRUD
    createAlbum: (req, res) => {
        console.log(req.body);
        Album.create(req.body)
            .then((newAlbum) => {
                res.status(201).json(newAlbum)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },
    // Update 
    updateAlbum: (req, res) => {
        Album.findOneAndUpdate({ _id: req.params.id },
            req.body,
            { new: true, runValidators: true })
            .then((updatedAlbum) => {
                res.json(updatedAlbum)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },
    // Delete
    deleteAlbum: (req, res) => {
        Album.deleteOne({_id: req.params.id})
            .then((result) => {
                res.status(201).json(result)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    }
}