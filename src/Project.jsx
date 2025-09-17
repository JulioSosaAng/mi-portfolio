import React from 'react';
import './index.css';

const Project = ({ project, className, style }) => {
  return (
    <article className={`project-card ${className}`} style={style}>
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>
      
      <div className="project-tech">
        {project.techs.map((tech, index) => (
          <span key={index} className="tech-tag">{tech}</span>
        ))}
      </div>

      <a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer">
        Ver repositorio
      </a>
    </article>
  );
};

export default Project;
