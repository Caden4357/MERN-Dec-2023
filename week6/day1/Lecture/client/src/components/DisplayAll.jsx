import { useState, useEffect } from 'react'
import axios from 'axios'
const DisplayAll = (props) => {
    const { albumList, setAlbumList } = props
    useEffect(() => {
        axios.get('http://localhost:8000/api/allAlbums')
            .then((response) => {
                console.log('CALLED');
                setAlbumList(response.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    return (
        <div>
            {
                albumList.map((album) => (
                    <div key={album._id}>
                        <h2>Album: {album.albumName}</h2>
                        <h2>Artist{album.artist}</h2>
                        <h2>Release Year {album.releaseYear}</h2>
                        <h2>Genre {album.genre}</h2>
                        <button>Edit</button>
                        <button>Details</button>
                    </div>
                ))
            }
        </div>
    )
}

export default DisplayAll;