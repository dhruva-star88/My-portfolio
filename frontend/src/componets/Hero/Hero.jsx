import React from 'react'
import './hero.css'
import Profile from "../../assets/profile_img.svg"
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id="home"  className='hero'>
      <img src={Profile} alt="my profile" />
      <h1><span>I'm Dhruva Teja D R,</span> Fullstack developer based in India.</h1>
      <p>i'm Full Stack Developer from Bangalore, India with 10 years of experience and I am passionate about Generative AI love to collab with fullstack and AI projects.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink  className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero