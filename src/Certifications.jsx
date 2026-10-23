import React from 'react';
import './index.css';

const certificationsData = [
  {
    title: 'Certificado Intermedio de Data Science',
    issuer: 'Teclab Instituto Técnico Superior',
    date: 'Res. 2023-3691-GCABA-MEDGC',
    link: 'certificates/certificado-data-science-teclab.pdf',
    linkLabel: 'Ver diploma (PDF)',
    platform: 'Título Oficial',
    tags: ['Ciencia de Datos', 'Tecnicatura Superior', 'Python & Analytics', 'Validez Nacional GCABA'],
    iconType: 'teclab',
  },
  {
    title: 'Microsoft Certified: Power Platform Fundamentals',
    issuer: 'Microsoft',
    credentialId: 'PL-900',
    date: 'Credencial oficial',
    link: 'https://www.credly.com/badges/7ad2e0a4-706b-4399-9b44-53444e24dceb',
    platform: 'Credly',
    tags: ['Power BI', 'Power Apps', 'Dataverse', 'Automatización'],
    iconType: 'microsoft',
  },
  {
    title: 'Data Analysis with Python',
    issuer: 'freeCodeCamp',
    date: '300 horas de formación',
    link: 'https://www.freecodecamp.org/certification/julio_sosa_angeles/data-analysis-with-python-v7',
    platform: 'freeCodeCamp',
    tags: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    iconType: 'freecodecamp',
  },
  {
    title: 'Scientific Computing with Python',
    issuer: 'freeCodeCamp',
    date: '300 horas de formación',
    link: 'https://www.freecodecamp.org/certification/julio_sosa_angeles/scientific-computing-with-python-v7',
    platform: 'freeCodeCamp',
    tags: ['Python', 'Algoritmos', 'Estructuras de Datos'],
    iconType: 'freecodecamp',
  },
  {
    title: 'Data Visualization',
    issuer: 'freeCodeCamp',
    date: '300 horas de formación',
    link: 'https://www.freecodecamp.org/certification/julio_sosa_angeles/data-visualization',
    platform: 'freeCodeCamp',
    tags: ['D3.js', 'Visualización de Datos', 'APIs', 'JSON'],
    iconType: 'freecodecamp',
  },
  {
    title: 'EF SET English Certificate — C1 Advanced',
    issuer: 'EF Standard English Test',
    date: 'Octubre 2026 · Puntaje: 65/100',
    link: 'https://cert.efset.org/en/aNBCLQ',
    platform: 'EF SET',
    tags: ['Inglés C1', 'Reading: 68/100', 'Listening: 62/100'],
    iconType: 'efset',
  },
];

const IssuerIcon = ({ type }) => {
  if (type === 'teclab') {
    return (
      <div
        className="cert-badge-pill"
        title="Teclab Instituto Técnico Superior"
        style={{ background: 'linear-gradient(135deg, #0050ff, #00bcd4)' }}
      >
        <svg viewBox="0 0 24 24" width="18" height="18" fill="#fff" aria-hidden="true">
          <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
        </svg>
      </div>
    );
  }
  if (type === 'microsoft') {
    return (
      <svg className="cert-issuer-icon" viewBox="0 0 23 23" width="28" height="28" aria-hidden="true">
        <path fill="#f35325" d="M1 1h10v10H1z" />
        <path fill="#81bc06" d="M12 1h10v10H12z" />
        <path fill="#05a6f0" d="M1 12h10v10H1z" />
        <path fill="#ffba08" d="M12 12h10v10H12z" />
      </svg>
    );
  }
  if (type === 'freecodecamp') {
    return (
      <svg
        className="cert-issuer-icon"
        viewBox="0 0 24 24"
        width="28"
        height="28"
        fill="#00bcd4"
        aria-hidden="true"
      >
        <path d="M19.885 3.906a.621.621 0 00-.354.12c-.08.08-.161.196-.161.313 0 .2.236.474.673.923 1.822 1.754 2.738 3.903 2.732 6.494-.007 2.867-.97 5.17-2.844 6.954-.394.353-.556.63-.557.867 0 .116.08.237.16.353.076.08.237.162.353.162.434 0 1.04-.512 1.833-1.509 1.542-1.89 2.24-3.978 2.279-6.824.036-2.847-.857-4.777-2.603-6.77-.63-.712-1.153-1.082-1.511-1.083zm-15.769.002c-.358 0-.882.37-1.51 1.083C.858 6.984-.035 8.914.001 11.761c.04 2.846.737 4.933 2.28 6.824.791.997 1.398 1.51 1.832 1.509a.573.573 0 00.352-.162c.08-.116.16-.237.16-.353 0-.237-.162-.514-.556-.866-1.873-1.785-2.837-4.087-2.844-6.955-.006-2.591.91-4.74 2.732-6.494.437-.449.674-.722.673-.923 0-.117-.08-.233-.161-.313a.621.621 0 00-.354-.12zm7.056.895s.655 2.081-2.649 6.727c-3.156 4.433 1.045 7.15 1.432 7.386-.281-.18-2.001-1.5.402-5.423.466-.77 1.076-1.47 1.834-3.041 0 0 .67.946.32 2.998-.523 3.101 2.271 2.214 2.314 2.257.976 1.15-.808 3.17-.917 3.233-.108.061 5.096-3.13 1.399-7.935-.253.253-.582 1.442-1.267 1.266-.684-.174 2.125-3.494-2.868-7.468zM9.955 18.916c.023.016.038.024.038.024l-.038-.024z" />
      </svg>
    );
  }
  if (type === 'efset') {
    return (
      <div className="cert-badge-pill" title="Nivel C1 Avanzado">
        <span>C1</span>
      </div>
    );
  }
  return <span className="cert-issuer-icon">🎓</span>;
};

const Certifications = () => {
  const getCertUrl = (link) => {
    if (!link) return '#';
    if (link.startsWith('http://') || link.startsWith('https://')) {
      return link;
    }
    const baseUrl = import.meta.env.BASE_URL || '/';
    const cleanPath = link.startsWith('/') ? link.slice(1) : link;
    return `${baseUrl}${cleanPath}`;
  };

  return (
    <section id="certificaciones" className="certifications-section animate-on-scroll fade-in-up">
      <div className="data-icon data-icon-1"></div>
      <div className="data-icon data-icon-2"></div>

      <div className="certifications-content">
        <h2 className="section-title">Certificaciones y Credenciales</h2>
        <p className="section-subtitle">
          Formación continua y certificaciones oficiales que respaldan mis competencias técnicas
        </p>

        <div className="certifications-grid">
          {certificationsData.map((cert, index) => (
            <article key={index} className="certification-card">
              <div className="cert-header">
                <div className="cert-issuer-wrapper">
                  <IssuerIcon type={cert.iconType} />
                  <div>
                    <span className="cert-issuer-name">{cert.issuer}</span>
                    <span className="cert-date">{cert.date}</span>
                  </div>
                </div>
                <span className="cert-platform-badge">{cert.platform}</span>
              </div>

              <h3 className="cert-title">{cert.title}</h3>

              <div className="cert-tags">
                {cert.tags.map((tag, i) => (
                  <span key={i} className="cert-tag">{tag}</span>
                ))}
              </div>

              <a
                href={getCertUrl(cert.link)}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-link"
              >
                <span>{cert.linkLabel || 'Verificar credencial'}</span>
                <span className="cert-link-arrow">↗</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
