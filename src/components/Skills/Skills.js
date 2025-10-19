import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Skills.css';
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaDatabase,
  FaGitAlt,
  FaPhp,
  FaJava,
  FaBootstrap,
  FaAngular,
  FaGithub,
  FaJs,
  FaCode,
  FaCog,
  FaPalette,
  FaServer,
  FaMobile
} from 'react-icons/fa';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const skills = [
    // Frontend
    { name: 'React', icon: <FaReact />, level: 85, category: 'frontend' },
    { name: 'Angular', icon: <FaAngular />, level: 75, category: 'frontend' },
    { name: 'JavaScript', icon: <FaJs />, level: 90, category: 'frontend' },
    { name: 'TypeScript', icon: <FaCode />, level: 80, category: 'frontend' },
    { name: 'Redux', icon: <FaCog />, level: 82, category: 'frontend' },
    { name: 'Bootstrap', icon: <FaBootstrap />, level: 88, category: 'frontend' },
    { name: 'Material UI', icon: <FaPalette />, level: 83, category: 'frontend' },
    
    // Backend
    { name: 'Node.js', icon: <FaNodeJs />, level: 88, category: 'backend' },
    { name: 'Express.js', icon: <FaServer />, level: 85, category: 'backend' },
    { name: 'Python', icon: <FaPython />, level: 78, category: 'backend' },
    { name: 'PHP', icon: <FaPhp />, level: 80, category: 'backend' },
    { name: 'Laravel', icon: <FaCode />, level: 75, category: 'backend' },
    { name: 'Java', icon: <FaJava />, level: 72, category: 'backend' },
    
    // Mobile
    { name: 'React Native', icon: <FaMobile />, level: 80, category: 'mobile' },
    
    // Bases de données
    { name: 'PostgreSQL', icon: <FaDatabase />, level: 83, category: 'database' },
    { name: 'MongoDB', icon: <FaDatabase />, level: 80, category: 'database' },
    { name: 'MySQL', icon: <FaDatabase />, level: 85, category: 'database' },
    { name: 'SQL', icon: <FaDatabase />, level: 87, category: 'database' },
    
    // Outils & autres
    { name: 'Git', icon: <FaGitAlt />, level: 90, category: 'tools' },
    { name: 'GitHub', icon: <FaGithub />, level: 88, category: 'tools' }
  ];

  const categories = [
    { id: 'all', name: 'Toutes' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'mobile', name: 'Mobile' },
    { id: 'database', name: 'Bases de données' },
    { id: 'tools', name: 'Outils' }
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const averageLevel = Math.round(skills.reduce((acc, skill) => acc + skill.level, 0) / skills.length);

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Mes Compétences
        </motion.h2>

        {/* Filtres par catégorie */}
        <motion.div 
          className="skills-filter"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-card"
              data-category={skill.category}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="skill-icon">
                {skill.icon}
              </div>
              <h3>{skill.name}</h3>
              <div className="skill-level">
                <div 
                  className="skill-level-bar"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="skill-percentage">{skill.level}%</span>
              <span className="skill-category">{skill.category}</span>
            </motion.div>
          ))}
        </div>

        {/* Statistiques résumées */}
        <motion.div 
          className="skills-summary"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="summary-item">
            <h4>{skills.length}</h4>
            <p>Technologies Maîtrisées</p>
          </div>
          <div className="summary-item">
            <h4>{categories.length - 1}</h4>
            <p>Catégories</p>
          </div>
          <div className="summary-item">
            <h4>{averageLevel}%</h4>
            <p>Niveau Moyen</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;