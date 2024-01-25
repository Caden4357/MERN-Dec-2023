import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const options = [
    {value:'Rock'},
    {value:'Hip Hop'},
    {value:'Country'},
    {value:'Classical'},
    {value:'R&B'}
]

const AlbumForm = (props) => {
    const { submitHandler, album, setAlbum, errors } = props;
    const [dropdown, setDropdown] = useState([])

    useEffect(() => {
        generateDropdown(album.genre)
    }, [album.genre])

    const generateDropdown = (genre) => {
        const optionTags = options.map((option, idx) => {
            if(option.value === genre){
                return <option key={idx} value={option.value} selected>{option.value}</option>
            }
            else{
                return <option key={idx} value={option.value}>{option.value}</option>
            }
        })
        setDropdown(optionTags)
    }


    return (
        <div>
            <h2>Add To Our Collection</h2>
            <form onSubmit={submitHandler}>
                <label>Album Name:</label>
                <input type="text" onChange={(e) => setAlbum({...album, albumName:e.target.value})} value={album.albumName} />
                {
                    errors.albumName ?
                        <p>{errors.albumName.message}</p> :
                        null
                }
                <label>Artist:</label>
                <input type="text" onChange={(e) => setAlbum({...album, artist:e.target.value})} value={album.artist} />
                {
                    errors.artist ?
                        <p>{errors.artist.message}</p> :
                        null
                }
                <label>Release Year:</label>
                <input type="number" onChange={(e) => setAlbum({...album, releaseYear:e.target.value})} value={album.releaseYear} />
                {
                    errors.releaseYear ?
                        <p>{errors.releaseYear.message}</p> :
                        null
                }
                <label>Genre:</label>
                <select onChange={(e) => setAlbum({...album, genre:e.target.value})}>
                    {
                        dropdown.map((option) => (
                            option
                        ))
                    }
                </select>
                {
                    errors.genre ?
                        <p>{errors.genre.message}</p> :
                        null
                }
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AlbumForm;