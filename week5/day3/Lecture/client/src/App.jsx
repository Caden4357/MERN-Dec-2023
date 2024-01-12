import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [albumList, setAlbumList] = useState([])
  useEffect(() => {
    axios.get('http://localhost:8000/api/allAlbums')
      .then((response) => {
        // console.log(response.data);
        setAlbumList(response.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  return (
    <>
      <h1>Full Stack MERN</h1>
      {
        albumList.map((album) => (
          <div>
            <h2>Album: {album.albumName}</h2>
            <h2>Artist{album.artist}</h2>
            <h2>Release Year {album.releaseYear }</h2>
            <h2>Genre {album.genre }</h2>
          </div>
        ))
      }
    </>
  )
}

export default App
