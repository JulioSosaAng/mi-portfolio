import React from 'react';

const skillCategories = [
  {
    category: 'Lenguajes',
    icon: '< />',
    skills: [
      {
        name: 'Python',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      },
      {
        name: 'SQL',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuresqldatabase/azuresqldatabase-original.svg',
      },
    ],
  },
  {
    category: 'Análisis y Visualización',
    icon: '📊',
    skills: [
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
      {
        name: 'Streamlit',
        customLetter: 'ST',
        color: '#FF4B4B',
      },
    ],
  },
  {
    category: 'Bases de Datos',
    icon: '🗄️',
    skills: [
      {
        name: 'PostgreSQL',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      },
      {
        name: 'SQLAlchemy',
        customLetter: 'SA',
        color: '#cc2927',
      },
    ],
  },
  {
    category: 'Herramientas',
    icon: '🛠️',
    skills: [
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
    ],
  },
];

const SkillIcon = ({ skill }) => {
  if (skill.customLetter) {
    return (
      <div
        className="skill-custom-icon"
        style={{ background: `${skill.color}22`, border: `1px solid ${skill.color}55` }}
      >
        <span style={{ color: skill.color }}>{skill.customLetter}</span>
      </div>
    );
  }
  return (
    <img
      src={skill.icon}
      alt={skill.name}
      className="skill-img-icon"
      loading="lazy"
    />
  );
};

const Skills = () => {
  return (
    <section id="skills" className="skills-section animate-on-scroll fade-in-up">
      <h2 className="section-title">Stack Tecnológico</h2>

      <div className="skills-categories">
        {skillCategories.map((cat) => (
          <div key={cat.category} className="skills-category">
            <h3 className="skills-category-title">
              <span className="skills-category-icon">{cat.icon}</span>
              {cat.category}
            </h3>
            <div className="skills-grid">
              {cat.skills.map((skill) => (
                <div key={skill.name} className="skill-card">
                  <div className="skill-icon-wrapper">
                    <SkillIcon skill={skill} />
                  </div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
