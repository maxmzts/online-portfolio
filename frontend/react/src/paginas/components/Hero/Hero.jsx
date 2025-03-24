import React from 'react'
import './Hero.css'
import profile from '../../../assets/angular.png'

const Hero = () => {
    return (
        <div className="hero">
            <img src={profile} alt="" />
            <h1 className=".poppins-black">I'm <span className='gradient-text'>Máximo Martínez Torres</span>, FullStack Developer and Game Programmer</h1>
            <br/>
            <p>I am a certified Multimedia Engineer from the University of Alicante and a passionate game enthusiast.
                My expertise in web development primarily focuses on MERN stack projects. Additionally, I have experience in game 
                development, whether working without an engine using languages like C++ or leveraging frameworks such as Godot Engine.
            </p>
            <div className="hero-action">
                <button className="gradient-button">Connect With Me</button>
                <button className="hero-resume">My resume</button>
            </div>
        </div>
    )
}

export default Hero