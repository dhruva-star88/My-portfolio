import React from 'react'
import './navbar.css'
import logo from "../../assets/logo.svg"

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt="my logo" />
        <ul className='nav-menu'>
            <li>Home</li>
            <li>About Me</li>
            <li>Skills</li>
            <li>My Projects</li>
            <li>Experience</li>
            <li>Contact</li>
        </ul>
        <div className="nav-connect">Connect With Me</div>
    </div>
  )
}

export default Navbar