import React, { useEffect } from 'react';
import Project from './Project';
import Navbar from './Navbar';
import Skills from './Skills';
import Certifications from './Certifications';
import DataNetworkCanvas from './DataNetworkCanvas';
import './index.css';

const App = () => {
    const projects = [
    {
      title: "Análisis de Datos de Ventas",
      description: "Un análisis detallado de un conjunto de datos de ventas para identificar tendencias, productos más vendidos y estacionalidad. Se usaron Python, Pandas, Matplotlib y Panel. Este último para los gráficos.",
      link: "https://juliososaang.github.io/analisis_ventas/app.html",
      linkLabel: "Ver proyecto",
      techs: ["Python", "Pandas", "Matplotlib", "Numpy", "Panel"],
      images: [
        "projects/ventas/ventas_01.png",
        "projects/ventas/ventas_02.png",
        "projects/ventas/ventas_03.png"
      ]
    },
    {
      title: "Análisis de Pilotos F1 (2024–2026)",
      description: "Un análisis comparativo de pilotos de F1 para las temporadas 2024 hasta 2026. Permite filtrar por temporada y piloto, e incluye KPIs y gráficos interactivos sobre victorias, poles, vueltas rápidas y conversión Pole→Victoria. Construido con Streamlit y Plotly para exploración dinámica de datos.",
      link: "https://f1-pilotos-2024-2025.streamlit.app/",
      linkLabel: "Ver app interactiva",
      techs: ["Python", "Streamlit", "Pandas", "Plotly"],
      images: [
        "projects/f1/f1_01.png",
        "projects/f1/f1_02.png",
        "projects/f1/f1_03.png"
      ]
    },
    {
      title: "The Last Mile Gap — Análisis de Datos",
      description: "Análisis end-to-end del impacto de retrasos logísticos en la satisfacción del cliente (Olist). Incluye un pipeline ETL automatizado, base de datos en la nube (PostgreSQL) y un dashboard interactivo para explorar la eficiencia operativa y las métricas de entrega.",
      link: "https://the-last-mile-gap-olist.streamlit.app/",
      linkLabel: "Ver dashboard",
      repoLink: "https://github.com/JulioSosaAng/the-last-mile-gap-olist",
      techs: ["Python", "SQL", "PostgreSQL", "Pandas", "Streamlit", "Plotly", "SQLAlchemy", "Git"],
      images: [
        "projects/last-mile/olist_01.png",
        "projects/last-mile/olist_02.png",
        "projects/last-mile/olist_03.png"
      ]
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
      <DataNetworkCanvas />
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
      
      {/* CÓDIGO NUEVO */}
  <section id="sobre-mi" className="about-me animate-on-scroll fade-in-up">
    <h2 className="section-title">Síntesis y Expectativas</h2>
    <p className="section-subtitle">
      De la analítica de negocio a la inteligencia artificial aplicada
    </p>

    <div className="synthesis-grid">
     {/* Tarjeta 1: Síntesis / Perfil Actual */}
      <article className="synthesis-card">
        <div className="synthesis-header">
          <div className="synthesis-icon-box">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="20" x2="18" y2="10" />
              <line x1="12" y1="20" x2="12" y2="4" />
              <line x1="6" y1="20" x2="6" y2="14" />
            </svg>
          </div>
          <span className="synthesis-badge">Perfil Actual</span>
        </div>

        <h3 className="synthesis-title">Síntesis Profesional</h3>
        <p className="synthesis-text">
          Analista de datos enfocado en transformar datos brutos en conocimiento accionable, optimizando la toma de decisiones estratégicas mediante análisis estadístico, ETL y visualizaciones dinámicas.
        </p>

        <ul className="synthesis-points">
          <li>
            <span className="point-bullet">✦</span>
              <span>Análisis exploratorio, diagnóstico de métricas y detección de tendencias.</span>
          </li>
          <li>
            <span className="point-bullet">✦</span>
              <span>Pipelines ETL y bases de datos relacionales en la nube (PostgreSQL, SQL).</span>
          </li>
          <li>
            <span className="point-bullet">✦</span>
              <span>Dashboards interactivos orientados a la rentabilidad y eficiencia operativa.</span>
          </li>
        </ul>
      </article>

      {/* Tarjeta 2: Expectativas / Visión Futura */}
      <article className="synthesis-card synthesis-card-future">
        <div className="synthesis-header">
          <div className="synthesis-icon-box synthesis-icon-box-accent">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
          </div>
          <span className="synthesis-badge synthesis-badge-accent">Visión Futura</span>
        </div>

        <h3 className="synthesis-title">Expectativas & Meta</h3>
        <p className="synthesis-text">
          Especializarme en la aplicación de modelos de Machine Learning e Inteligencia Artificial para resolver problemas de negocio complejos y anticipar escenarios mediante analítica predictiva.
        </p>

        <ul className="synthesis-points">
          <li>
            <span className="point-bullet point-bullet-accent">✦</span>
            <span>Implementación de algoritmos supervisados y no supervisados de Machine Learning.</span>
          </li>
          <li>
            <span className="point-bullet point-bullet-accent">✦</span>
              <span>Desarrollo de modelos predictivos que generen impacto directo en la toma de decisiones.</span>
          </li>
          <li>
            <span className="point-bullet point-bullet-accent">✦</span>
              <span>Automatización analítica y adopción de arquitecturas modernas de datos e IA.</span>
          </li>
        </ul>
      </article>
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

      <Certifications />

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
