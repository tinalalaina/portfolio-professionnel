import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Projects.css';
import { FaGithub, FaChevronLeft, FaChevronRight, FaTimes, FaSpinner } from 'react-icons/fa';

// CORRECTION : Utilisez le bon nom de repository
const GITHUB_BASE_URL = 'https://raw.githubusercontent.com/tinalalaina/myportfolio/refs/heads/main';

const generateImageUrls = (projectName, imageCount) => {
  const images = [];
  for (let i = 1; i <= imageCount; i++) {
    const imageUrl = `${GITHUB_BASE_URL}/${projectName}/${i}.jpg`;
    images.push(imageUrl);
  }
  return images;
};

// Composant Image avec loading
const ImageWithLoader = ({ src, alt, onClick, className = '', showThumbnail = false }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className={`image-container ${className}`}>
      {isLoading && (
        <div className="image-loading">
          <FaSpinner className="spinner" />
          <span>Chargement...</span>
        </div>
      )}
      
      {hasError ? (
        <div className="image-error">
          <span>❌ Image non disponible</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          onClick={onClick}
          onLoad={handleLoad}
          onError={handleError}
          style={{ 
            display: isLoading ? 'none' : 'block',
            cursor: onClick ? 'pointer' : 'default'
          }}
          className={showThumbnail ? 'thumbnail-img' : ''}
        />
      )}
    </div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [lightboxLoading, setLightboxLoading] = useState(true);

  const projects = [
    {
      id: 1,
      title: 'Application E-commerce',
      description: 'Plateforme e-commerce complète avec panier, paiement et administration.',
      images: generateImageUrls('projet1', 10),
      technologies: ['React', 'Php', 'Mysql', 'Materiel UI'],
      category: 'fullstack',
      github: 'https://github.com/tinalalaina/Certificated',
    },
    {
      id: 2,
      title: 'Application E-commerce',
      description: 'Plateforme e-commerce complète avec panier, paiement et administration.',
      images: generateImageUrls('projet7', 18),
      technologies: ['Angular', 'Postgresql', 'Python'],
      category: 'fullstack',
      github: 'https://github.com/tinalalaina/Ecommerce',
    },
    {
      id: 3,
      title: 'Plateforme de Portfolio Créatif',
      description: 'Solution de présentation de travaux.',
      images: generateImageUrls('projet2', 12),
      technologies: ['Php', 'Mysql', 'bootsrap'],
      category: 'fullstack',
      github: 'https://github.com/tinalalaina/exercicephp'
    },
    {
      id: 4,
      title: 'Application Gestion de produit',
      description: 'Plateforme e-commerce complète avec panier, paiement et administration.',
      images: generateImageUrls('projet6', 13),
      technologies: ['React', 'Php', 'Mysql', 'Materiel UI'],
      category: 'fullstack',
      github: 'https://github.com/tinalalaina/gst',
    },
    {
      id: 5,
      title: 'Application E-commerce',
      description: 'Plateforme e-commerce complète avec panier, paiement et administration.',
      images: generateImageUrls('projet5', 15),
      technologies: ['React', 'Php', 'MysSQL', 'Bootsrap'],
      category: 'fullstack',
      github: 'https://github.com/tinalalaina/purcase',
    },
    {
      id: 6,
      title: 'CRUD',
      description: 'Created, Read, Update, Delete , login and logout, authentification',
      images: generateImageUrls('projet4', 9),
      technologies: ['Redux', 'Node.js', 'mysql'],
      category: 'fullstack',
      github: 'https://github.com/tinalalaina/etudiant',
    },
    {
      id: 7,
      title: 'Application Mobile',
      description: 'Application React Native avec fonctionnalités offline.',
      images: generateImageUrls('projet3', 12),
      technologies: ['React Native', 'Php', 'MySQL'],
      category: 'mobile',
      github: 'https://github.com/tinalalaina/aczone',
    },
  ];

  const openLightbox = (project, index = 0) => {
    setSelectedProject(project);
    setCurrentImageIndex(index);
    setLightboxLoading(true);
  };

  const closeLightbox = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
    setLightboxLoading(false);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex(prev => (prev + 1) % selectedProject.images.length);
      setLightboxLoading(true);
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex(prev => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
      setLightboxLoading(true);
    }
  };

  const handleLightboxImageLoad = () => {
    setLightboxLoading(false);
  };

  const handleLightboxImageError = () => {
    setLightboxLoading(false);
  };

  // Fermer avec la touche Echap
  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeLightbox();
      }
    };

    if (selectedProject) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Empêcher le scroll
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

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
                <ImageWithLoader 
                  src={project.images[0]} 
                  alt={project.title}
                  onClick={() => openLightbox(project, 0)}
                  className="project-main-image"
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
              onClick={closeLightbox} // Fermer en cliquant sur le fond
            >
              <div 
                className="lightbox-content"
                onClick={(e) => e.stopPropagation()} // Empêcher la fermeture en cliquant sur le contenu
              >
                <button className="close-btn" onClick={closeLightbox}>
                  <FaTimes />
                </button>
                
                <div className="lightbox-image">
                  {lightboxLoading && (
                    <div className="lightbox-loading">
                      <FaSpinner className="spinner" />
                      <span>Chargement de l'image...</span>
                    </div>
                  )}
                  
                  <img 
                    src={selectedProject.images[currentImageIndex]} 
                    alt={`${selectedProject.title} - ${currentImageIndex + 1}`}
                    onLoad={handleLightboxImageLoad}
                    onError={handleLightboxImageError}
                    style={{ opacity: lightboxLoading ? 0 : 1 }}
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
                      <div key={index} className="thumbnail-container">
                        <ImageWithLoader 
                          src={image}
                          alt={`${selectedProject.title} ${index + 1}`}
                          className={index === currentImageIndex ? 'active' : ''}
                          onClick={() => {
                            setCurrentImageIndex(index);
                            setLightboxLoading(true);
                          }}
                          showThumbnail={true}
                        />
                      </div>
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