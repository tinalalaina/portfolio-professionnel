import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Rakolozafindralaky Tina Lalaina</h3>
            <p>Développeur Full Stack passionné par la création de solutions web innovantes et performantes.</p>
          </div>

          <div className="footer-section">
            <h4>Liens Rapides</h4>
            <ul>
              <li><a href="#home">Accueil</a></li>
              <li><a href="#about">À propos</a></li>
              <li><a href="#projects">Projets</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <ul>
              <li>Email: tinalalaina14@gmail.com</li>
              <li>Téléphone: 0375389943</li>
              <li>Localisation: Madagascar, Antananarivo</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Réseaux Sociaux</h4>
            <div className="social-links">
              <a href="https://github.com/tinalalaina" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com" aria-label="Twitter">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Rakolozafindralaky Tina Lalaina. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;