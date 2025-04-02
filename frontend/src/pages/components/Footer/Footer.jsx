import React from 'react'
import './Footer.css'
import logo from '../../../assets/logo.svg'
import user_icon from '../../../assets/user.svg'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={logo} alt="" />
                    <p>FullStack Developer and Game Programmer</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input form-input">
                        <img src={user_icon} alt="" />
                        <input type="text" name="subscribe" placeholder='Enter your email'/>
                    </div>
                    <button className="footer-subscribe gradient-button">Subscribe</button>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">© Máximo Martínez. All rights reserved.</p>
                <div className="footer-bottom-right">
                    <p>Term of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect With Me</p>
                </div>
            </div>
        </div>
    )
}

export default Footer