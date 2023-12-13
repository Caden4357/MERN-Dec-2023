import { useState } from 'react'
import './App.css'
import DisplayMovies from './components/DisplayMovies'
import MovieForm from './components/MovieForm'

function App() {
  const [movieList, setMovieList] = useState([])
  return (
    <>
      <MovieForm movieList={movieList} setMovieList={setMovieList}/>
      <DisplayMovies movieList={movieList}/>
    </>
  )
}

export default App
