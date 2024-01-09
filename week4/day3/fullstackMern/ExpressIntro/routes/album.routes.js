const AlbumController = require('../controllers/album.controller')

module.exports = (app) => {
    app.get('/api/allAlbums', AlbumController.allAlbums)
    app.get('/api/album/:id', AlbumController.getOneAlbum)
    app.post('/api/newAlbum', AlbumController.createAlbum)
}