import React from 'react';
import './index.css';

const row1Skills = [
  {
    name: 'Python',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  },
  {
    name: 'SQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuresqldatabase/azuresqldatabase-original.svg',
  },
  {
    name: 'Pandas',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
  },
  {
    name: 'NumPy',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg',
  },
  {
    name: 'Matplotlib',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg',
  },
  {
    name: 'Plotly',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/plotly/plotly-original.svg',
  },
];

const row2Skills = [
  {
    name: 'PostgreSQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  },
  {
    name: 'SQLAlchemy',
    customLetter: 'SA',
    color: '#cc2927',
  },
  {
    name: 'Streamlit',
    customLetter: 'ST',
    color: '#FF4B4B',
  },
  {
    name: 'Git',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  },
  {
    name: 'GitHub',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  },
  {
    name: 'VS Code',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
  },
];

const SkillIcon = ({ skill }) => {
  if (skill.customLetter) {
    return (
      <div
        className="skill-custom-icon"
        style={{
          background: `${skill.color}26`,
          border: `1px solid ${skill.color}66`,
        }}
      >
        <span style={{ color: skill.color }}>{skill.customLetter}</span>
      </div>
    );
  }
  return (
    <img
      src={skill.icon}
      alt={skill.name}
      loading="lazy"
    />
  );
};

// Duplicamos los arrays para garantizar un bucle infinito continuo sin cortes en cualquier resolución
const duplicatedRow1 = [...row1Skills, ...row1Skills, ...row1Skills, ...row1Skills];
const duplicatedRow2 = [...row2Skills, ...row2Skills, ...row2Skills, ...row2Skills];

const Skills = () => {
  return (
    <section id="skills" className="skills-section animate-on-scroll fade-in-up">
      <h2 className="section-title">Stack Tecnológico</h2>
      <p className="section-subtitle">
        Herramientas y tecnologías que potencian mi análisis de datos
      </p>

      <div className="skills-marquee-wrapper" aria-label="Tecnologías y herramientas">
        {/* Fila 1: desplazamiento suave hacia la izquierda */}
        <div className="skills-track skills-track-left">
          {duplicatedRow1.map((skill, index) => (
            <div key={`row1-${skill.name}-${index}`} className="skill-chip">
              <div className="skill-chip-icon">
                <SkillIcon skill={skill} />
              </div>
              <span className="skill-chip-name">{skill.name}</span>
            </div>
          ))}
        </div>

        {/* Fila 2: desplazamiento suave hacia la derecha */}
        <div className="skills-track skills-track-right">
          {duplicatedRow2.map((skill, index) => (
            <div key={`row2-${skill.name}-${index}`} className="skill-chip">
              <div className="skill-chip-icon">
                <SkillIcon skill={skill} />
              </div>
              <span className="skill-chip-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
