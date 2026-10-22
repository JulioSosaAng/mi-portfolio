import React, { useEffect } from 'react';
import Project from './Project';
import Navbar from './Navbar';
import Skills from './Skills';
import './index.css';

const App = () => {
    const projects = [
    {
      title: "Análisis de Datos de Ventas",
      description: "Un análisis detallado de un conjunto de datos de ventas para identificar tendencias, productos más vendidos y estacionalidad. Se usaron Python, Pandas, Matplotlib y Panel. Este último para los gráficos.",
      link: "https://juliososaang.github.io/analisis_ventas/app.html",
      linkLabel: "Ver proyecto",
      techs: ["Python", "Pandas", "Matplotlib", "Numpy", "Panel"]
    },
    {
      title: "Análisis de Pilotos F1 (2024–2026)",
      description: "Un análisis comparativo de pilotos de F1 para las temporadas 2024 hasta 2026. Permite filtrar por temporada y piloto, e incluye KPIs y gráficos interactivos sobre victorias, poles, vueltas rápidas y conversión Pole→Victoria. Construido con Streamlit y Plotly para exploración dinámica de datos.",
      link: "https://f1-pilotos-2024-2025.streamlit.app/",
      linkLabel: "Ver app interactiva",
      techs: ["Python", "Streamlit", "Pandas", "Plotly"]
    },
    {
      title: "The Last Mile Gap — Análisis de Datos",
      description: "Análisis end-to-end del impacto de retrasos logísticos en la satisfacción del cliente (Olist). Incluye un pipeline ETL automatizado, base de datos en la nube (PostgreSQL) y un dashboard interactivo para explorar la eficiencia operativa y las métricas de entrega.",
      link: "https://the-last-mile-gap-olist.streamlit.app/",
      linkLabel: "Ver dashboard",
      repoLink: "https://github.com/JulioSosaAng/the-last-mile-gap-olist",
      techs: ["Python", "SQL", "PostgreSQL", "Pandas", "Streamlit", "Plotly", "SQLAlchemy", "Git"]
    }
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

      <Navbar />
      
      <header id="inicio" className="header animate-on-scroll fade-in-up">
        <div className="header-background-animation"></div>   {/* ESTA CAPA ES CLAVE */}
         <div className="header-content">
           <h1 className="header-title">Julio Sosa Angeles</h1>
           <p className="header-subtitle">Analista de Datos</p>
           <p className="header-tagline">
             Transformo datos en decisiones · Python · SQL · Machine Learning
           </p>
           <div className="header-cta">
             <a href="#proyectos" className="btn btn-primary">
               Ver proyectos
               <span className="btn-arrow">→</span>
             </a>
             <a
               href="cv-julio-sosa-angeles.pdf"
               className="btn btn-outline"
               target="_blank"
               rel="noopener noreferrer"
             >
               Descargar CV
               <span className="btn-icon">↓</span>
             </a>
           </div>
          </div>
        <div className="scroll-indicator">↓</div>
      </header>
      
      <section id="sobre-mi" className="about-me animate-on-scroll fade-in-up">
        {/* Iconos de análisis de datos para About Me */}
        <div className="data-icon data-icon-1"></div>
        <div className="data-icon data-icon-2"></div>
        
        <h2 className="section-title">Síntesis y Expectativas</h2>
        <div className="about-content">
          <p>
            Analista de datos con experiencia en transformar información bruta en conocimiento accionable. Dando mis primeros pasos en machine learning, la visualización de datos y el análisis predictivo. Mi objetivo es especializarme en la aplicación de modelos de IA para resolver problemas complejos de negocio.
          </p>
        </div>
      </section>

      <Skills />

      <section id="proyectos" className="projects-container">
        {/* Iconos de análisis de datos para Projects */}
        <div className="data-icon data-icon-1"></div>
        <div className="data-icon data-icon-2"></div>
        
        <h2 className="section-title">Proyectos de Ciencia de Datos</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <Project key={index} project={project} className="animate-on-scroll fade-in-up" style={{ transitionDelay: `${index * 0.2}s` }} />
          ))}
        </div>
      </section>

      <footer id="contacto" className="footer">
        <div className="footer-content">

          <p className="footer-title">Julio Sosa Angeles</p>
          <p className="footer-subtitle">Analista de Datos · Buenos Aires, Argentina</p>

          <div className="footer-social">

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/jsangeles"
              className="footer-social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/JulioSosaAng"
              className="footer-social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
              GitHub
            </a>

            {/* Email */}
            <a
              href="mailto:julio.sosa.angeles@outlook.com.ar"
              className="footer-social-link"
              aria-label="Email"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              Email
            </a>

          </div>

          <p className="footer-copy">
            © {new Date().getFullYear()} Julio Sosa Angeles · Hecho con React
          </p>

        </div>
      </footer>
    </div>
  );
};

export default App;
