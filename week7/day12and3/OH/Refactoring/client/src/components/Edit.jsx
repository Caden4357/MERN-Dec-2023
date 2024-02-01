import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import AlbumForm from './AlbumForm';

const Edit = (props) => {
    const navigate = useNavigate()
    const {id} = useParams()

    const [albumName, setAlbumName] = useState("");
    const [artist, setArtist] = useState("");
    const [releaseYear, setReleaseYear] = useState(1930);
    const [genre, setGenre] = useState("Rock");
    const [errors, setErrors] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/findOneAlbum/${id}`)
            .then((res) => {
                setAlbumName(res.data.albumName)
                setArtist(res.data.artist)
                setReleaseYear(res.data.releaseYear)
                setGenre(res.data.genre)
                console.log(genre);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])


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

export default Edit;