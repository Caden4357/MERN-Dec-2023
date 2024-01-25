import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import DeleteButton from './DeleteButton';

const ViewOne = (props) => {
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

    return (
        <div>
            <h1>{album.albumName}</h1>
            <div>
                <h2>By: {album.artist}</h2>
                <h2>Released In: {album.releaseYear}</h2>
                <h2>Genre: {album.genre}</h2>
                <DeleteButton buttonText={`Delete ${album.albumName}`} id={album._id} /> 
            </div>
        </div>
)}

export default ViewOne;