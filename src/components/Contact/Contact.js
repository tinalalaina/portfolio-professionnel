import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import './Contact.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alert, setAlert] = useState({ show: false, type: '', message: '' });

  const showAlert = (type, message) => {
    setAlert({ show: true, type, message });
    setTimeout(() => setAlert({ show: false, type: '', message: '' }), 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'tinalalaina14@gmail.com',
        date: new Date().toLocaleDateString('fr-FR')
      };

      // ⚡ ENVOI AVEC VOS IDs
      await emailjs.send(
        'service_nu7y28r',      // Votre Service ID
        'template_vmyd4gr',     // Votre Template ID
        templateParams,
        'xvPf0ZqKfh4bkAYsw'    // Votre Public Key
      );

      showAlert('success', '✅ Message envoyé avec succès !');
      
      // Réinitialiser le formulaire
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

    } catch (error) {
      console.error('Erreur EmailJS:', error);
      showAlert('error', '❌ Erreur lors de l\'envoi. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact
        </motion.h2>

        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3>Travaillons ensemble</h3>
            <p>
              Vous avez un projet en tête ? N'hésitez pas à me contacter. 
              Je serais ravi de discuter de vos idées et de voir comment je peux vous aider.
            </p>

            <div className="contact-items">
              <div className="contact-item">
                <div className="contact-icon">
                  <FaPhone />
                </div>
                <div>
                  <h4>Téléphone</h4>
                  <p>037 53 89 943</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div>
                  <h4>Email</h4>
                  <p>tinalalaina14@gmail.com</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4>Localisation</h4>
                  <p>Madagascar, Antananarivo</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form 
            onSubmit={handleSubmit}
            className="contact-form"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {alert.show && (
              <div className={`alert alert-${alert.type}`}>
                {alert.message}
              </div>
            )}

            <div className="form-group">
              <input 
                type="text" 
                name="name"
                placeholder="Votre nom"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <input 
                type="email" 
                name="email"
                placeholder="Votre email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <input 
                type="text" 
                name="subject"
                placeholder="Sujet du message"
                value={formData.subject}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <textarea 
                name="message"
                placeholder="Votre message..."
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? '📨 Envoi en cours...' : '🚀 Envoyer le message'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;