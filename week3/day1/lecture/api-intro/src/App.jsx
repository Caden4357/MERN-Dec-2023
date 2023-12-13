import './App.css'
import { useEffect } from 'react'
import axios from 'axios'
function App() {


  useEffect(() => {
    // API Call
    // console.log('Component is mounted');
    axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
      .then((response) => console.log('RESPONSE: ', response))
      .catch((error) => console.log(error))
  }, []) //[] = dependency array

  return (
    <>
      <h2>UseEffect Intro</h2>
    </>
  )
}

export default App
