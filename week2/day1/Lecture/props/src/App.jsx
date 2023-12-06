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
        albumSales={200}
      />
      <Album
        title={'Lateralus'}
        artist={'Tool'}
        releaseYear={1999}
        albumSales={300}
      />
      <Album
        title={'Thriller'}
        artist={'Michael Jackson'}
        releaseYear={1982} 
        albumSales={600}
      />
    </>
  )
}

export default App
