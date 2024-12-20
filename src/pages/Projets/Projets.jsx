import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleLeft } from "react-icons/fa6";
import projects from '../../Data/projets.json'

import './Projets.css'

function Projects() {
  return (
    <div className="projects-page">
      {/* Flèche pour revenir à la page précédente */}
      <Link to="/">
        <div className='arrowleft'>
          <FaAngleLeft />
        </div>
      </Link>

      {/* Liste des projets */}
      <div className="projects-list">
        {projects.projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.name} className="project-image" />
            <h3>{project.name}</h3>
            <p><strong>Technologies:</strong> {project.technologies}</p>
            <p>{project.text}</p>
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer">Voir sur GitHub</a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;