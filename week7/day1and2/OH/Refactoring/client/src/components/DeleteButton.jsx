import React, {useState} from 'react';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
const DeleteButton = ({buttonText, id}) => {
    const navigate = useNavigate()
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
        <button onClick={deleteHandler}>{buttonText}</button>
)}

export default DeleteButton;