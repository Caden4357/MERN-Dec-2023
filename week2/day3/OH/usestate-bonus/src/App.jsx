import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [userForm, setUserForm] = useState({
    name:'',
    age:0,
    email:''
  })

  const increaseCount = () => {
    // setCount(count+1) // 0
    // setCount(count+1) // Still 0 
    setCount((prevState) => prevState + 1)
    setCount((prevState) => prevState + 1)
  }

  const handleUserInput = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.name);
    setUserForm({...userForm, [e.target.name]:e.target.value})
  }

  return (
    <>
      <button onClick={increaseCount}>
        count is {count}
      </button>
      <form>
        <div>
          <label>Name:</label>
          <input type="text" value={userForm.name} name='name' onChange={handleUserInput}/>
        </div>
        <div>
          <label>Age:</label>
          <input type="number" value={userForm.age} name='age' onChange={handleUserInput}/>
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={userForm.email} name='email' onChange={handleUserInput}/>
        </div>
      </form>
    </>
  )
}

export default App
