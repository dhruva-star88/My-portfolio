import React from 'react'
import "./projects.css"
import themePattern from "../../assets/theme_pattern.svg"

const Projects = () => {
  return (
    <div className='projects' id='projects'>
        <div className="projects-title">
            <h1>Projects</h1>
            <img src={themePattern} alt="theme" />
        </div>
        <div className="projects-container">
            
        </div>
    </div>
  )
}

export default Projects