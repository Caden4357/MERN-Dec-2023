import { useState } from 'react'
import './App.css'
import Form from './components/Form'

function App() {

  // goal list state 
  const [goals, setGoals] = useState([{goal:'Graduate Coding Dojo', isCompleted:false}])
  return (
    <>
      <h1>2024 Resolutions & Goals</h1>
      <Form goals={goals} setGoals={setGoals}/>
    </>
  )
}

export default App
