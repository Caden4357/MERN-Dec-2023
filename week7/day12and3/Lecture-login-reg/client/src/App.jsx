import './App.css'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Register from './components/Register'
import { Routes, Route } from 'react-router-dom'
function App() {

  return (
    <>
      <Routes>
        <Route index element={<Register />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<Dashboard/>}/>
      </Routes>
    </>
  )
}

export default App
