import { useState } from 'react';
import React from 'react';
import projects from '../../Data/projets.json'; 
import './Projects.css'


function Projects() {
  const [selectedTech, setSelectedTech] = useState('');
  
  const handleTechChange = (event) => {
    setSelectedTech(event.target.value);
  };

  const filteredProjects = selectedTech
    ? projects.projects.filter(project => 
        project.technologies.toLowerCase().includes(selectedTech.toLowerCase())
      )
    : projects.projects;

  const techOptions = ['HTML', 'CSS', 'JS', 'React', 'NodeJS', 'Redux', 'SEO', 'Lighthouse', 'SCSS'];

  return (
    <div className="projects-page">
      <h2>Mes Projets</h2>

      <div className="filters">
        <label htmlFor="techFilter"></label>
        <select id="techFilter" value={selectedTech} onChange={handleTechChange}>
          <option value="">Tous les projets</option>
          {techOptions.map((tech, index) => (
            <option key={index} value={tech}>{tech}</option>
          ))}
        </select>
      </div>

      <div className="projects-list">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <img src={project.image} alt={project.name} className="project-image" />
              <h3>{project.name}</h3>
              <p><strong>Technologies:</strong> {project.technologies}</p>
              <p>{project.text}</p>
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer">Voir sur GitHub</a>
              )}
            </div>
          ))
        ) : (
          <p>Aucun projet trouvé pour cette technologie.</p>
        )}
      </div>
    </div>
  );
}

export default Projects;
