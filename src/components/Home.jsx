import React from 'react'
import './Home.css'
import Logo from '../assets/Logo.svg'
import Community from '../assets/comm.svg'
const Home = () => {
  return (
    <div className="main">
      <div className="community">
        {/* <img src={Community}/> */}
        <div className="animation">
          <div class="loader">
          <div class="loader-square"></div>
          <div class="loader-square"></div>
          <div class="loader-square"></div>
          <div class="loader-square"></div>
          <div class="loader-square"></div>
          <div class="loader-square"></div>
          <div class="loader-square"></div>
          </div>
        </div>
        <h1>Join the community</h1>
      </div>
      
    </div>
  )
}

export default Home
