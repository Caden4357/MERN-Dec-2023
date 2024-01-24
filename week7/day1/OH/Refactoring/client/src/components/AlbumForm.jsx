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
    const { submitHandler, albumName, setAlbumName, artist, setArtist, releaseYear, setReleaseYear, genre, setGenre, errors } = props;
    const [dropdown, setDropdown] = useState([])

    useEffect(() => {
        generateDropdown(genre)
    }, [])

    const generateDropdown = (genre) => {
        const optionTags = options.map((option) => {
            if(option.value === genre){
                return <option value={option.value} selected>{option.value}</option>
            }
            else{
                return <option value={option.value}>{option.value}</option>
            }
        })
        setDropdown(optionTags)
    }


    return (
        <div>
            <h2>Add To Our Collection</h2>
            <form onSubmit={submitHandler}>
                <label>Album Name:</label>
                <input type="text" onChange={(e) => setAlbumName(e.target.value)} value={albumName} />
                {
                    errors.albumName ?
                        <p>{errors.albumName.message}</p> :
                        null
                }
                <label>Artist:</label>
                <input type="text" onChange={(e) => setArtist(e.target.value)} value={artist} />
                {
                    errors.artist ?
                        <p>{errors.artist.message}</p> :
                        null
                }
                <label>Release Year:</label>
                <input type="number" onChange={(e) => setReleaseYear(e.target.value)} value={releaseYear} />
                {
                    errors.releaseYear ?
                        <p>{errors.releaseYear.message}</p> :
                        null
                }
                <label>Genre:</label>
                <select onChange={(e) => setGenre(e.target.value)}>
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