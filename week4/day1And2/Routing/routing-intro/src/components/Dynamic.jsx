import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
const Dynamic = (props) => {
    // console.log(useParams());
    const {name} = useParams()
    return (
        <div>
            <h1 style={{color:name}}>Hello {name}</h1>
        </div>
)}

export default Dynamic;