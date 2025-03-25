import React from 'react'
import './contact.css'
import themePattern from '../../assets/theme_pattern.svg'
import Mail from '../../assets/mail_icon.svg'
import Location from '../../assets/location_icon.svg'
import Call from '../../assets/call_icon.svg'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "cabae65f-640e-49de-a9f8-39df057020cf");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
            alert("Message sent successfully");
        }
      };

  return (
    <div className='contact' id='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={themePattern} alt="theme" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={Mail} alt="mail" /> <p>workdhruvateja@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={Call} alt="call" /> <p>91+ 8867291499</p>
                    </div>
                    <div className="contact-detail">
                        <img src={Location} alt="location" /> <p>Bangalore</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name' />
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter your email' name='email' />
                <label htmlFor="">Write your message here</label>
                <textarea name="message"  rows="8" placeholder="Enter your message" id=""></textarea>
                <button type='submit' className='contact-submit'>Submit now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact