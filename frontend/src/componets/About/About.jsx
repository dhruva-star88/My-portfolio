import React from 'react'
import "./about.css"
import themePattern from "../../assets/theme_pattern.svg"
import Profile from "../../assets/my-profile.jpg"

const About = () => {
  return (
    <div className='about' id='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={themePattern} alt="theme" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={Profile} alt="profile_img" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Hey there! I’m Dhruva Teja D R, a web developer and AI enthusiast with a strong passion for building smart, scalable, and efficient applications. I specialize in backend development using Django, and I’ve also worked with Node.js, React.js, and AI/ML technologies.</p>
                    <p>With experience in full-stack development, I’ve contributed to projects ranging from AI-driven solutions to real-time web applications. Currently, I’m working on an AI-powered Random Question Paper Generator and exploring Langchain, TensorFlow, and LLMs.</p>
                    <p>Beyond coding, I love documenting my learnings, sketching mandalas, and exploring the intersection of AI and creativity. I’m always up for collaborations on AI and full-stack projects—let’s build something amazing together!</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About