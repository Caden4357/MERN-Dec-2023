import React, {useState} from 'react';

const DisplayAlbums = (props) => {
    const {albums, setAlbums} = props
    return (
        <div>
            {
                albums.map((album) => (
                    <div>
                        <h2>Title: {album.title}</h2>
                        <h2>Artist: {album.artist}</h2>
                        <h2>Release Year: {album.releaseYear}</h2>
                        <h2>Album Sales: {album.albumSales}</h2>
                        <h2>Genre: {album.genre}</h2>
                    </div>
                ))
            }
        </div>
)}

export default DisplayAlbums;