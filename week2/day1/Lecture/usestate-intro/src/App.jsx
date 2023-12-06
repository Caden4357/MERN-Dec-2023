import { useState } from 'react'
import './App.css'

function App() {
  //     Value, Function
  const [count, setCount] = useState(10) // count = 0

  // ! Add comment 
  // const increaseCount = () => {
  //   setCount(count+1)
  // }

  return (
    <>
      <div className="card">
        <button onClick={() => setCount(count+1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
