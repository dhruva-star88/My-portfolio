import React from 'react'
import './skills.css'
import themePattern from '../../assets/theme_pattern.svg'

const Skills = () => {
  return (
    <div className='skills' id='skills'>
        <div className="skills-title">
            <h1>Skills</h1>
            <img src={themePattern} alt="theme" />
        </div>
        <div className="skills-container"></div>
    </div>
  )
}

export default Skills