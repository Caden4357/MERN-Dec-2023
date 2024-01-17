import React, {useState} from 'react';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
const CreateForm = (props) => {
    const navigate = useNavigate()
    const [albumName, setAlbumName] = useState("");
    const [artist, setArtist] = useState("");
    const [releaseYear, setReleaseYear] = useState(1930);
    const [genre, setGenre] = useState("Rock");
    const [errors, setErrors] = useState({})
    const submitHandler = (e) => {
        e.preventDefault()
        const newAlbum = {albumName, artist, releaseYear, genre}
        axios.post('http://localhost:8000/api/createAlbum', newAlbum)
            .then((res) => {
                console.log(res);
                navigate('/')
            })
            .catch((err) => {
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors)
            })
    }
    return (
        <div>
            <h2>Add To Our Collection</h2>
            <form onSubmit={submitHandler}>
                <label>Album Name:</label>
                <input type="text" onChange={(e) => setAlbumName(e.target.value)} value={albumName}/>
                {
                    errors.albumName?
                    <p>{errors.albumName.message}</p>:
                    null
                }
                <label>Artist:</label>
                <input type="text" onChange={(e) => setArtist(e.target.value)} value={artist}/>
                {
                    errors.artist?
                    <p>{errors.artist.message}</p>:
                    null
                }
                <label>Release Year:</label>
                <input type="number" onChange={(e) => setReleaseYear(e.target.value)} value={releaseYear}/>
                {
                    errors.releaseYear?
                    <p>{errors.releaseYear.message}</p>:
                    null
                }
                <label>Genre:</label>
                <select onChange={(e) => setGenre(e.target.value)}>
                    <option value="Rock">Rock</option>
                    <option value="Hip Hop">Hip Hop</option>
                    <option value="Country">Country</option>
                    <option value="Classical">Classical</option>
                    <option value="R&B">R&B</option>
                </select>
                {
                    errors.genre?
                    <p>{errors.genre.message}</p>:
                    null
                }
                <button>Submit</button>
            </form>
        </div>
)}

export default CreateForm;