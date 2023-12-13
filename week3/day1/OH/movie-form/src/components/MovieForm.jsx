import React, {useState} from 'react';

const MovieForm = (props) => {
    const {movieList, setMovieList} = props
    const [title, setTitle] = useState('')
    const [director, setDirector] = useState('')
    const [genre, setGenre] = useState('Action')
    const [releaseYear, setReleaseYear] = useState(1920)

    const submitHandler = (e) => {
        e.preventDefault()
        const newMovie = {title, director, genre, releaseYear}
        const newList = [...movieList, newMovie]
        setMovieList(newList)
        setTitle('')
        setDirector('')
        setGenre('Action')
        setReleaseYear(1920)
    }
    return (
        <div>
            <h2>Form</h2>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Title:</label>
                    <input type="text" name='title' onChange={(e) => setTitle(e.target.value)} value={title}/>
                </div>
                <div>
                    <label>Director:</label>
                    <input type="text" name='director' onChange={(e) => setDirector(e.target.value)} value={director}/>
                </div>
                <div>
                    <label>Genre:</label>
                    <select name="genre" onChange={(e) => setGenre(e.target.value)}>
                        <option value="Action">Action</option>
                        <option value="Drama">Drama</option>
                        <option value="Horror">Horror</option>
                        <option value="Family">Family</option>
                        <option value="Comedy">Comedy</option>
                    </select>
                </div>
                <div>
                    <label>Release Year:</label>
                    <input type="number" name='releaseYear' onChange={(e) => setReleaseYear(e.target.value)} value={releaseYear}/>
                </div>
                <input type="submit" value="Submit" />
                {/* <button>Submit</button> */}
            </form>
        </div>
)}

export default MovieForm;