import './App.css'
import Movies from './components/Movies'
const App = () => {

  return (
    <>
      <h1>Hello Movies</h1>
      <Movies
        title={'Scream'}
        genre={'Horror'}
        releaseDate={'Dec 20, 1996'}
        boxOfficeSales={173}
      />
      <Movies
        title={'The Matrix'}
        genre={'Sci-fi/Action'}
        releaseDate={'March, 1999'}
        boxOfficeSales={467}
      />
      <Movies
        title={'Harry Potter'}
        genre={'Fantasy'}
        releaseDate={'Nov 16th, 2001'}
        boxOfficeSales={381}
      />
    </>
  )
}

export default App


// Behind the scenes react is taking the data passed into the components above and putting them in an object called props 
// props looks like this -> {title:'Scream', genre:'Horror', releaseDate:'Dec 20, 1996', boxOfficeSales:173} for the very first component