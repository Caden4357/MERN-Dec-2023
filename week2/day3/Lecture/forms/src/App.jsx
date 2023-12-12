import './App.css'
import AlbumForm from './components/AlbumForm'
import { useState } from 'react'
import DisplayAlbums from './components/DisplayAlbums'
function App() {
  const [albums, setAlbums] = useState([])
  return (
    <>
      <AlbumForm
        albums={albums}
        setAlbums={setAlbums}
      />
      <DisplayAlbums
        albums={albums}
        setAlbums={setAlbums}
      />
    </>
  )
}

export default App
