import React, { useState } from 'react';
import './index.css';

const Project = ({ project, className, style }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = project.images || [];

  const getImageUrl = (path) => {
    if (!path) return '';
    const baseUrl = import.meta.env.BASE_URL || '/';
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return `${baseUrl}${cleanPath}`;
  };

  const handlePrev = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (idx, e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex(idx);
  };

  return (
    <article className={`project-card ${className}`} style={style}>
      {images.length > 0 && (
        <div className="project-carousel">
          <div className="carousel-image-wrapper">
            <img
              src={getImageUrl(images[currentImageIndex])}
              alt={`${project.title} - Captura ${currentImageIndex + 1}`}
              className="carousel-image"
              loading="lazy"
            />

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  className="carousel-btn carousel-btn-prev"
                  onClick={handlePrev}
                  aria-label="Imagen anterior"
                >
                  &#10094;
                </button>
                <button
                  type="button"
                  className="carousel-btn carousel-btn-next"
                  onClick={handleNext}
                  aria-label="Siguiente imagen"
                >
                  &#10095;
                </button>

                <div className="carousel-dots">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className={`carousel-dot ${idx === currentImageIndex ? 'active' : ''}`}
                      onClick={(e) => goToSlide(idx, e)}
                      aria-label={`Ver imagen ${idx + 1}`}
                    />
                  ))}
                </div>

                <span className="carousel-counter">
                  {currentImageIndex + 1} / {images.length}
                </span>
              </>
            )}
          </div>
        </div>
      )}

      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>
      
      <div className="project-tech">
        {project.techs.map((tech, index) => (
          <span key={index} className="tech-tag">{tech}</span>
        ))}
      </div>

      <div className="project-links">
        <a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer">
          <span>{project.linkLabel || "Ver proyecto"}</span>
          <span className="project-link-arrow">↗</span>
        </a>
        
        {project.repoLink && (
          <a className="project-link project-link-secondary" href={project.repoLink} target="_blank" rel="noopener noreferrer">
            <span>Repositorio</span>
            <span className="project-link-arrow">↗</span>
          </a>
        )}
      </div>
    </article>
  );
};

export default Project;
