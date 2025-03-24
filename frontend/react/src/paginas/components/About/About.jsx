import React from 'react'
import './About.css'
import profile from '../../../assets/angular.png'

const About = () => {
    return (
        <div className="about">
            <h2 className="about-title">About me</h2>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p> I am a certified Multimedia Engineer from the University of Alicante and a passionate game enthusiast.
                            My expertise in web development primarily focuses on MERN stack projects. Additionally, I have experience in game 
                            development, whether working without an engine using languages like C++ or leveraging frameworks such as Godot Engine.
                        </p>
                        <p> Currently I'm specializing my carrer in Technical Desgin for game develpment.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"> <p>MongoDB</p> <hr style={{width:"50%"}}/> </div>
                        <div className="about-skill"> <p>Express JS</p> <hr style={{width:"30%"}}/> </div>
                        <div className="about-skill"> <p>React JS</p> <hr style={{width:"60%"}}/> </div>
                        <div className="about-skill"> <p>Node JS</p> <hr style={{width:"100%"}}/> </div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h3 className='gradient-text'>3+</h3>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h3 className='gradient-text'>2</h3>
                    <p>PROYECTS COMPLETED</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h3 className='gradient-text'>+100</h3>
                    <p>WILL TO WORK</p>
                </div>
            </div>
        </div>
    )
}

export default About