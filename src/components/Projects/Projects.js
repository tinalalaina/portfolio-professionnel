import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Projects.css';
import { FaGithub, FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

// Fonction pour importer les images avec gestion d'erreurs
const importImages = (projectName, imageCount) => {
  const images = [];
  for (let i = 1; i <= imageCount; i++) {
    try {
      const image = require(`../../assets/images/${projectName}/${i}.jpg`);
      images.push(image);
    } catch (error) {
      console.warn(`Image non trouvée: ${projectName}/${i}.jpg`);
      // Continue sans cette image
    }
  }
  return images;
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'Application E-commerce',
      description: 'Plateforme e-commerce complète avec panier, paiement et administration.',
      images: importImages('projet1', 10), // 10 images pour projet1
      technologies: ['React', 'Php', 'Mysql', 'Materiel UI'],
      category: 'fullstack',
      github: 'https://github.com/tinalalaina/Certificated',
    },
    
    {
      id: 2,
      title: 'Application E-commerce',
      description: 'Plateforme e-commerce complète avec panier, paiement et administration.',
      images: importImages('projet7', 18), // 18 images pour projet5
      technologies: ['Angular', 'Postgresql', 'Python'],
      category: 'fullstack',
      github: 'https://github.com/tinalalaina/Ecommerce',
    },
    {
      id: 3,
      title: 'Plateforme de Portfolio Créatif',
      description: 'Solution de présentation de travaux.',
      images: importImages('projet2', 12), // 12 images pour projet2
      technologies:  ['Php', 'Mysql', 'bootsrap'],
      category: 'fullstack',
      github: 'https://github.com/tinalalaina/exercicephp'
    },
    
    {
      id: 4,
      title: 'Application Gestion de produit',
      description: 'Plateforme e-commerce complète avec panier, paiement et administration.',
      images: importImages('projet6', 13), // 16 images pour projet5
      technologies: ['React', 'Php', 'Mysql', 'Materiel UI'],
      category: 'fullstack',
      github: 'https://github.com/tinalalaina/gst',
    },
    {
      id: 5,
      title: 'Application E-commerce',
      description: 'Plateforme e-commerce complète avec panier, paiement et administration.',
      images: importImages('projet5', 15), // 15 images pour projet5
      technologies: ['React', 'Php', 'MysSQL', 'Bootsrap'],
      category: 'fullstack',
      github: 'https://github.com/tinalalaina/purcase',
    },
    {
      id: 6,
      title: 'CRUD',
      description: 'Created, Read, Update, Delete , login and logout, authentification',
      images: importImages('projet4', 9), // 9 images pour projet4
      technologies: ['Redux', 'Node.js', 'mysql'],
      category: 'fullstack',
      github: 'https://github.com/tinalalaina/etudiant',
    },
    {
      id: 7,
      title: 'Application Mobile',
      description: 'Application React Native avec fonctionnalités offline.',
      images: importImages('projet3', 12), // 12 images pour projet3
      technologies: ['React Native', 'Php', 'MySQL'],
      category: 'mobile',
      github: 'https://github.com/tinalalaina/aczone',
    },
  ].filter(project => project.images.length > 0); // Filtre les projets sans images

  const openLightbox = (project, index = 0) => {
    setSelectedProject(project);
    setCurrentImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex(prev => 
        (prev + 1) % selectedProject.images.length
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex(prev => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Mes Projets
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id} 
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="project-image">
                <img 
                  src={project.images[0]} 
                  alt={project.title}
                  onClick={() => openLightbox(project, 0)}
                />
                <div className="image-count">
                  {project.images.length} image{project.images.length > 1 ? 's' : ''}
                </div>
                <div className="project-overlay">
                  <button 
                    className="view-gallery-btn"
                    onClick={() => openLightbox(project, 0)}
                  >
                    Voir la galerie
                  </button>
                </div>
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox/Carrousel */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div 
              className="lightbox"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="lightbox-content">
                <button className="close-btn" onClick={closeLightbox}>
                  <FaTimes />
                </button>
                
                <div className="lightbox-image">
                  <img 
                    src={selectedProject.images[currentImageIndex]} 
                    alt={`${selectedProject.title} - ${currentImageIndex + 1}`}
                  />
                  
                  <button className="nav-btn prev-btn" onClick={prevImage}>
                    <FaChevronLeft />
                  </button>
                  
                  <button className="nav-btn next-btn" onClick={nextImage}>
                    <FaChevronRight />
                  </button>
                </div>

                <div className="lightbox-info">
                  <h3>{selectedProject.title}</h3>
                  <p>Image {currentImageIndex + 1} sur {selectedProject.images.length}</p>
                  
                  <div className="image-thumbnails">
                    {selectedProject.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`${selectedProject.title} ${index + 1}`}
                        className={index === currentImageIndex ? 'active' : ''}
                        onClick={() => setCurrentImageIndex(index)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;