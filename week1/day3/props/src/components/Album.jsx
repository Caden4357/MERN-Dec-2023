import React from 'react'

function Album(props) {
    return (
        <div>
            <h1>Title: {props.title}</h1>
            <h2>Artist: {props.artist}</h2>
            <h2>Release Year: {props.releaseYear}</h2>
        </div>
    )
}

export default Album
