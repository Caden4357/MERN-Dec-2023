import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [pokeList, setPokeList] = useState([])
  const [error, setError] = useState('')
//          callback, dependency array 
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
      .then((response) => {
        console.log('RESPONSE', response.data.results)
        setPokeList(response.data.results)
        setError('')
      })
      .catch((err) => {
        console.log('ERROR', err)
        setPokeList([])
        setError('Something Went Wrong')
      })
  }, [])

  return (
    <>
      <h2>Poke API</h2>

      <h2>First 10 Pokemon:</h2>
      {
        error.length > 0? 
        <p>{error}</p>:
        null
      }
      {
        pokeList.map((poke, idx) => (
          <div key={idx}>
            <h3>Pokemon Name: {poke.name}</h3>
          </div>
        ))
      }
    </>
  )
}

export default App
