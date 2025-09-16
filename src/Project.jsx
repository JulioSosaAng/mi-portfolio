import React from 'react';
import './index.css';

const Project = ({ project }) => {
  return (
    <div className="project-card">
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
        Ver en GitHub
      </a>
    </div>
  );
};

export default Project;