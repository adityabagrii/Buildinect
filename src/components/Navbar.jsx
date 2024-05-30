import React from 'react'
import logo from '../assets/Logo.svg'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className="Nav">
      <div className="logo">
        <img src={logo} alt="Logo"/>
        <h1 className="logoText">Buildinect</h1>
      </div>
      <div className="options">
          <ul>
          <li><button>Home</button></li>
          <li><button>About</button></li>
          <li><button>Contact</button></li>
          <li><button>Log In</button></li>
          <li><button className="signUp">Sign Up</button></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
