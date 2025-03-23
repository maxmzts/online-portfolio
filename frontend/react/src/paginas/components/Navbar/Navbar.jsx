import React from 'react'
import './Navbar.css'
import logo from '../../../assets/logoipsum-362.svg'

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
            <div className="nav-connect">Connect With Me</div>
        </div>
    )
}

export default Navbar