import React, {useState} from 'react';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import AlbumForm from './AlbumForm';
const CreateForm = (props) => {
    const navigate = useNavigate()
    // const [albumName, setAlbumName] = useState("");
    // const [artist, setArtist] = useState("");
    // const [releaseYear, setReleaseYear] = useState(1930);
    // const [genre, setGenre] = useState("Rock");
    const [errors, setErrors] = useState({})
    
    const [album, setAlbum] = useState({
        artist:'',
        albumName:'',
        releaseYear:1930,
        genre:'Rock'
    })

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/createAlbum', album)
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
                album={album}
                setAlbum={setAlbum}
                errors={errors}
            />
        </div>
)}

export default CreateForm;