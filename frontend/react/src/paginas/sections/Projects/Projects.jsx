import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Projects.css';

import NavigateButton from '../../components/NavigateButton/NavigateButton';
import Projects_Data from './projects-data';
import arrow_icon from '../../../assets/arrow.svg';

const Projects = () => {
    const navigate = useNavigate();

    return (
        <div className="projects">
            <h2 className="projects-title">My Projects</h2>
            <div className="projects-container">
                {Projects_Data.map((project,index)=>{
                    return <div key={index} className="projects-format scale-hover">
                        {/* <h3>{project.p_no}</h3> */}
                        <h3 className='gradient-text'>{project.p_name}</h3>
                        <p>{project.p_desc}</p>
                        <div className="projects-readmore">
                            <p>Read More</p>
                            <img src={arrow_icon} alt="" aria-hidden="true"/>
                        </div>
                    </div>
                })}
            </div>
            <button className="projects-showmore" onClick={() => navigate('/portfolio')}>
                Show More <img src={arrow_icon} alt="" aria-hidden="true"/>
            </button>
        </div>
    )
}

export default Projects