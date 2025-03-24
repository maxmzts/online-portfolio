import React from 'react'
import './Contact.css'
import arrow_icon from '../../../assets/arrow.svg'

const Contact = () => {
    return (
        <div className="contact">
            <h2 className="contact-title">Contact Me</h2>
            <div className="contact-section">
                <div className="contact-left">
                    <h3 className='gradient-text'>Let's talk</h3>
                    <p>Feel free to contact me anytime.</p>
                    <div className="contact-details">
                        <div className="contact-detail">Email: maximomzts@gmail.com</div>
                        <div className="contact-detail">Phone: number</div>
                        <div className="contact-detail">Location: Spain</div>
                    </div>
                </div>
                <form className="contact-right">
                    <label htmlFor="name">Your Name</label>
                    <input className='form-input' type="text" placeholder='Enter your name' name='name'/>
                    <label htmlFor="email">Your Name</label>
                    <input className='form-input' type="email" placeholder='Enter your email' name='email'/>
                    <label htmlFor="name">Write your message</label>
                    <textarea className='form-input' name="message" placeholder='Enter your message'></textarea>
                    <button type='submit' className="gradient-button">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact