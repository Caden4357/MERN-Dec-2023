import './App.css'
import Album from './components/Album'
import Nav from './components/Nav'
function App() {

  return (
    <>
      {/* <Nav/> */}
      <Album
        title={'In Rainbows'}
        artist={'Radiohead'}
        releaseYear={2006}
      />
      <Album
        title={'Lateralus'}
        artist={'Tool'}
        releaseYear={1999}
      />
      <Album
        title={'Thriller'}
        artist={'Michael Jackson'}
        releaseYear={1982} 
      />
    </>
  )
}

export default App
