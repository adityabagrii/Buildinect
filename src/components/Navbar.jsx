import React from 'react'
import logo from '../assets/Logo.svg'
const Navbar = () => {
  return (
    <div className="flex bg-slate-950 w-full justify-between justify-items-center h-19 m-auto py-4 px-10">
        <div className="logo text-white flex justify-center justify-items-center gap-3">
            <img src={logo} alt="logo" className=" w-14" />
            <h1 className=" text-3xl font-bold">Buildinect</h1>
        </div>
        <div className="menu">
            <ul className="flex text-white gap-4 justify-center justify-items-center">
                <li className="py-1">Home</li>
                <li className="py-1">About</li>
                <li className="py-1">Contact</li>
                <li><button className="py-1">Log In</button></li>
                <li><button className="bg-white text-black py-1 px-3 rounded-2xl">Sign Up</button></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
