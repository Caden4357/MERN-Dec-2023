// ! Step 1.) import useState
import React, {useState} from 'react'

function Album(props) {
    // ! Step 2.) Initialize useState
    // const [getter, setter] = useState()
    const [sales, setSales] = useState(props.albumSales)

    const increaseAlbumSales = () => {
        setSales(sales+1)
    }


    return (
        <div>
            {/* comment here */}
            <h1>Title: {props.title}</h1>
            <h2>Artist: {props.artist}</h2>
            <h2>Release Year: {props.releaseYear}</h2>
            <h2>Album Sales: {sales}</h2>
            <button onClick={increaseAlbumSales}>Buy this album</button>
        </div>
    )
}

export default Album
