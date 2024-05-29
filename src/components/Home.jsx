import React from 'react'
import './Home.css'
import Logo from '../assets/Logo.svg'
const Home = () => {
  return (
    <div className="main">
      <div className="card">
        <div className="image flex justify-center py-10">
            <img src={Logo} className="object-contain w-1/2"/>
        </div>
        <div className="text flex justify-center">
         <h1 className="text-white">Buildinect</h1>
        </div>
      </div>
    </div>
  )
}

export default Home
