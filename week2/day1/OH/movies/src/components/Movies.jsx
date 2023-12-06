import React from 'react'

const Movies = (props) => {
    console.log(props);
    const {title, genre, releaseDate, boxOfficeSales} = props
    return (
        <div>
            <h2>Title: {title}</h2>
            <h2>Genre: {genre}</h2>
            <h2>Release Date: {releaseDate}</h2>
            <h2>Box Office Sales: {boxOfficeSales}</h2>
        </div>
    )
}

export default Movies