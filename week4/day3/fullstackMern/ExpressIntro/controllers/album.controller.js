const albums = [
    {id: 1, albumName: 'Iowa', artist: 'Slipknot'},
    {id: 2, albumName: 'The Infamous', artist: 'Mobb Deep'},
    {id: 3, albumName: 'Homework', artist: 'Daft Punk'},
    {id: 4, albumName: 'The Best Of Sade', artist: 'Sade'},
    {id: 5, albumName: 'Flying Microtonal Banana', artist: 'King Gizzard & the Lizard Wizard'}
]

module.exports = {
    // key:value
    allAlbums: (req, res) => {
        // call to the DB to get all the albums 
        res.json(albums)
    },
    getOneAlbum: (req, res) => {
        console.log(req.params);
        const id = req.params.id
        const album = albums.filter((album) => album.id == id)
        res.json(album)
    },
    createAlbum: (req, res) => {
        console.log(req.body);
        albums.push(req.body)
        res.json(albums)
    }
}