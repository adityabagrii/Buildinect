import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      {/* <Login/> */}
      <Home/>
    </>
  )
}

export default App
