import React from 'react';
import { motion } from 'framer-motion';
import './About.css';
import { FaDownload } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          À Propos
        </motion.h2>
        
        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Développeur Passionné & Créatif</h3>
            <p>
              Avec plus de X années d'expérience dans le développement web, je suis spécialisé 
              dans la création d'applications modernes et performantes. Mon expertise couvre 
              l'ensemble du cycle de développement, du front-end au back-end.
            </p>
            <p>
              Je suis constamment à la recherche de nouveaux défis et d'opportunités pour 
              mettre mes compétences au service de projets innovants.
            </p>
            
            <div className="about-stats">
              <div className="stat">
                <h4>50+</h4>
                <p>Projets Réalisés</p>
              </div>
              <div className="stat">
                <h4>3+</h4>
                <p>Années d'Expérience</p>
              </div>
            </div>
            
            <a href={require('../../assets/documents/cv_Rakolozafindralaky.pdf')} download="cv_Rakolozafindralaky.pdf" className="btn">
              <FaDownload style={{ marginRight: '8px' }} />
              Télécharger mon CV
            </a>

          </motion.div>
          
          <motion.div 
            className="about-skills"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4>Mes Compétences Clés</h4>
            <div className="skills-list">
              <div className="skill-item">
                <span>Développement Front-end</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '90%'}}></div>
                </div>
              </div>
              <div className="skill-item">
                <span>Développement Back-end</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '85%'}}></div>
                </div>
              </div>
              <div className="skill-item">
                <span>UI/UX Design</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '75%'}}></div>
                </div>
              </div>
              <div className="skill-item">
                <span>Base de Données</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '80%'}}></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;