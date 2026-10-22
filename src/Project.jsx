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

      <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
        <a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer">
          {project.linkLabel || "Ver proyecto"}
        </a>
        
        {project.repoLink && (
          <a className="project-link" href={project.repoLink} target="_blank" rel="noopener noreferrer">
            Repositorio
          </a>
        )}
      </div>
    </article>
  );
};

export default Project;
