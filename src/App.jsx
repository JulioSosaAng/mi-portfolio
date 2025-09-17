import React, { useEffect } from 'react';
import Project from './Project';
import './index.css';

const App = () => {
  const projects = [
    {
      title: "Análisis de Datos de Ventas",
      description: "Un análisis detallado de un conjunto de datos de ventas para identificar tendencias, productos más vendidos y estacionalidad. Se usaron Python, Pandas y Matplotlib.",
      link: "https://github.com/tu-usuario/proyecto-ventas",
      techs: ["Python", "Pandas", "Matplotlib"]
    },
    {
      title: "Clasificación de Especies de Flores",
      description: "Modelo de machine learning para clasificar especies de flores basado en sus características. Implementado con scikit-learn y Python.",
      link: "https://github.com/tu-usuario/proyecto-flores",
      techs: ["Python", "scikit-learn", "Jupyter"]
    },
    // Añade más proyectos aquí
  ];

  useEffect(() => {
    // Lógica para animaciones al hacer scroll
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        } else {
          // Elimina la clase 'animate' cuando el elemento sale de la vista
          entry.target.classList.remove('animate');
        }
      });
    }, {
      threshold: 0.1
    });

    animatedElements.forEach(el => {
      observer.observe(el);
    });

    // Lógica para la barra de progreso
    const progressBar = document.querySelector('.progress-bar');
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
      
      if (progressBar) {
        progressBar.style.width = scrollPercent + '%';
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Limpieza: importante para evitar fugas de memoria
    return () => {
      observer.disconnect(); // Desconecta el observer
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);

  return (
    <div>
      <div className="progress-container">
        <div className="progress-bar"></div>
      </div>
      
      <header className="header animate-on-scroll fade-in-up">
        <div className="header-background-animation"></div>   {/* ESTA CAPA ES CLAVE */}
         <div className="header-content">
           <h1 className="header-title">Julio Sosa Angeles</h1>
             <p className="header-subtitle">Científico de Datos</p>
          </div>
        <div className="scroll-indicator">↓</div>
      </header>
      
      <section className="about-me animate-on-scroll fade-in-up">
        {/* Iconos de análisis de datos para About Me */}
        <div className="data-icon data-icon-1"></div>
        <div className="data-icon data-icon-2"></div>
        
        <h2 className="section-title">Síntesis y Expectativas</h2>
        <div className="about-content">
          <p>
            Desarrollador y analista de datos con experiencia en transformar información bruta en conocimiento accionable. Apasionado por el machine learning, la visualización de datos y el análisis predictivo. Mi objetivo es especializarme en la aplicación de modelos de IA para resolver problemas complejos de negocio.
          </p>
        </div>
      </section>

      <section className="projects-container">
        {/* Iconos de análisis de datos para Projects */}
        <div className="data-icon data-icon-1"></div>
        <div className="data-icon data-icon-2"></div>
        
        <h2 className="section-title">Proyectos de Ciencia de Datos</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <Project key={index} project={project} className="animate-on-scroll fade-in-up" style={{ animationDelay: `${index * 0.2}s` }} />
          ))}
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <p>Email: julio.sosa.angeles@outlook.com.ar</p>
          <p>LinkedIn: <a href="https://linkedin.com/in/jsangeles" target="_blank" rel="noopener noreferrer">jsangeles</a></p>
          <p>GitHub: <a href="https://github.com/JulioSosaAng" target="_blank" rel="noopener noreferrer">JulioSosaAng</a></p>
        </div>
      </footer>
    </div>
  );
};

export default App;