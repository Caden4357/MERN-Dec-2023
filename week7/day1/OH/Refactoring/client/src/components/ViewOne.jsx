import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const ViewOne = (props) => {
    const navigate = useNavigate()
    const [album, setAlbum] = useState({})
    const {id} = useParams()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/findOneAlbum/${id}`)
            .then((res) => {
                setAlbum(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/deleteAlbum/${id}`)
            .then(() => {
                navigate('/')
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <div>
            <h1>{album.albumName}</h1>
            <div>
                <h2>By: {album.artist}</h2>
                <h2>Released In: {album.releaseYear}</h2>
                <h2>Genre: {album.genre}</h2>
                <button onClick={deleteHandler}>Delete {album.albumName}</button>
            </div>
        </div>
)}

export default ViewOne;