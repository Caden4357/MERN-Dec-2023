import { useState, useEffect } from 'react'
import './App.css'
import DisplayAll from './components/DisplayAll'
import { Link, Route, Routes } from 'react-router-dom'
import CreateForm from './components/CreateForm'
import ViewOne from './components/ViewOne'
import Edit from './components/Edit'
function App() {
  const [albumList, setAlbumList] = useState([])

  return (
    <>
      <h1>Records Dot Com</h1>
      <Link to="/newAlbum">Add Album</Link>
      <br />
      <Link to="/">Home</Link>
      <h2>Albums</h2>
      <Routes>
        <Route index element={<DisplayAll albumList={albumList} setAlbumList={setAlbumList}/>} />
        <Route path="/newAlbum" element={<CreateForm />} />
        <Route path='/album/:id' element={<ViewOne/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>

      </Routes>
    </>
  )
}

export default App
