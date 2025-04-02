import React from 'react'
import './ProjectCard.css'
import arrow_icon from '../../../assets/arrow.svg'

const ProjectCard = (project) => {
    return (
        <div className="projects-format scale-hover">
            <h3 className='gradient-text'>{project.title}</h3>
            <p>{project.description}</p>
            <p>{project.status}</p>
            <p>Finished on: {project["date-finished"]}</p>
            <div className="projects-readmore">
                <p>Read More</p>
                <img src={arrow_icon} alt="" aria-hidden="true"/>
            </div>
        </div>
    )
}

export default ProjectCard