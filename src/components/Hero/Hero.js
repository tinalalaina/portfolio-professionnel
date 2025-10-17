import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';
import { FaGithub, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="hero">
            <div className="container">
                <div className="hero-content">
                    <motion.div
                        className="hero-text"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1>
                            Bonjour, je suis <span className="highlight">Rakolozafindralaky Tina Lalaina</span>
                        </h1>
                        <h2>Développeur Full Stack</h2>
                        <p>
                            Je crée des expériences web exceptionnelles avec les dernières technologies.
                            Passionné par l'innovation et les solutions créatives.
                        </p>
                        <div className="hero-buttons">
                            <button
                                className="btn"
                                onClick={() => scrollToSection('projects')}
                            >
                                Voir mes projets
                            </button>
                            <button
                                className="btn btn-outline"
                                onClick={() => scrollToSection('contact')}
                            >
                                Me contacter
                            </button>
                        </div>
                        <div className="social-links">
                            <a href="https://github.com/tinalalaina" aria-label="GitHub">
                                <FaGithub />
                            </a>
                            <a href="mailto:tinalalaina14@gmail.com" aria-label="Email">
                                <FaEnvelope />
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        className="hero-image"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="image-placeholder">
                            {/* Remplacez par votre photo */}
                            <div className="profile-image">
                                <img
                                    src={require('../../assets/images/profile.jpg')}
                                    alt="Votre Nom - Développeur Full Stack"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;