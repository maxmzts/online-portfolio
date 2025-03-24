import React from 'react'
import './Navbar.css'
import logo from '../../../assets/logo.svg'

const Navbar = () => {
    return (
        <div className="navbar">
            <img src={logo} alt="Maximo Martínez Logo" />
            <ul className="nav-menu">
                <li>Home</li>
                <li>About Me</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>
            <button className="gradient-button">Connect With Me</button>
        </div>
    )
}

export default Navbar