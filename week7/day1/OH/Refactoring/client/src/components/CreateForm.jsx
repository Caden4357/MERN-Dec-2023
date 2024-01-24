import React, {useState} from 'react';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import AlbumForm from './AlbumForm';
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
                setErrors(err.response.data.errors)
            })
    }
    return (
        <div>
            <AlbumForm
                submitHandler={submitHandler}
                albumName={albumName}
                setAlbumName={setAlbumName}
                artist={artist}
                setArtist={setArtist}
                releaseYear={releaseYear}
                setReleaseYear={setReleaseYear}
                genre={genre}
                setGenre={setGenre}
                errors={errors}
            />
        </div>
)}

export default CreateForm;