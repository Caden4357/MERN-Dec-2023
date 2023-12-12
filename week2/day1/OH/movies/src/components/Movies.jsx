import React, {useState} from 'react'

const Movies = (props) => {
    const {title, genre, releaseDate, boxOfficeSales} = props
    // console.log(props);
    
    // useState setup

    //      getter, setter
    const [sales, setSales] = useState(boxOfficeSales)
    const increaseSales = () => {
        setSales(sales+1)
    }
    return (
        <div>
            <h2>Title: {title}</h2>
            <h2>Genre: {genre}</h2>
            <h2>Release Date: {releaseDate}</h2>
            <h2>Box Office Sales: {sales}</h2>
            <button onClick={() => setSales(sales+1)}>Purchase A Ticket</button>
            {/* <button onClick={increaseSales}>Purchase A Ticket</button> */}

        </div>
    )
}

export default Movies