import React, { useState } from 'react'
import './navbar.css'
import logo from "../../assets/logo.svg"
import underLine from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {
  
  const[menu, setMenu] = useState("home")
  return (
    <div className='navbar'>
        <img src={logo} alt="my logo" />
        <ul className='nav-menu'>
            <li><AnchorLink className='anchor-link' href='#home'><p onClick={() => setMenu("home")}>Home</p></AnchorLink>{menu === "home"? <img src={underLine} alt='underline'></img> : <></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={() => setMenu("about")}>About Me</p></AnchorLink>{menu === "about"? <img src={underLine} alt='underline'></img> : <></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#skills'><p onClick={() => setMenu("skills")}>Skills</p></AnchorLink>{menu === "skills"? <img src={underLine} alt='underline'></img> : <></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#projects'><p onClick={() => setMenu("projects")}>My Projects</p></AnchorLink>{menu === "projects"? <img src={underLine} alt='underline'></img> : <></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#experience'><p onClick={() => setMenu("experience")}>Experience</p></AnchorLink>{menu === "experience"? <img src={underLine} alt='underline'></img> : <></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={() => setMenu("contact")}>Contact</p></AnchorLink>{menu === "contact"? <img src={underLine} alt='underline'></img> : <></>}</li>
        </ul>
        <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
    </div>
  )
}

export default Navbar