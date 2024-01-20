import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const options = [
    {value:'Rock'},
    {value:'Hip Hop'},
    {value:'Country'},
    {value:'Classical'},
    {value:'R&B'}
]



const Edit = (props) => {
    const navigate = useNavigate()
    const {id} = useParams()

    const [albumName, setAlbumName] = useState("");
    const [artist, setArtist] = useState("");
    const [releaseYear, setReleaseYear] = useState(1930);
    const [genre, setGenre] = useState("Rock");
    const [errors, setErrors] = useState({})
    const [dropdown, setDropdown] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/findOneAlbum/${id}`)
            .then((res) => {
                setAlbumName(res.data.albumName)
                setArtist(res.data.artist)
                setReleaseYear(res.data.releaseYear)
                setGenre(res.data.genre)
                console.log(genre);
                generateDropdown(res.data.genre)
            })
            .catch((err) => {
                console.log(err);
            })
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

    const submitHandler = (e) => {
        e.preventDefault();
        const newAlbum = {albumName, artist, releaseYear, genre}
        axios.put(`http://localhost:8000/api/updateAlbum/${id}`, newAlbum)
            .then((res) => {
                console.log(res);
                navigate('/')
            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data.errors)
            })
    }
    return (
        <div>
            <h1>EDIT</h1>
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
                    {
                        dropdown.map((option) => (
                            option
                        ))
                    }
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

export default Edit;