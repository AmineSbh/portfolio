import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser'; // <-- 1. Importer EmailJS

const ContactSection = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Empêche la page de se recharger
    setLoading(true);
    
    // Utilisation des variables d'environnement pour la sécurité
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      // 3. Utiliser emailjs.sendForm
      // e.target est le <form> lui-même, EmailJS récupère les champs grâce aux attributs 'name'
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY);
      
      // Le reste de votre logique est déjà parfait
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    } catch (error) {
      console.error('ERREUR LORS DE L\'ENVOI...', error);
      setStatus('error');
      setTimeout(() => setStatus(''), 3000); // Fait disparaître le message d'erreur
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="Contact">
      <div className="contact-container">
        <h2>{t('contact.title')}</h2>
        
        {/* L'attribut onSubmit est crucial ici */}
        <form onSubmit={handleSubmit} className="contact-form">
          
          {/* Vos champs de formulaire sont parfaits car ils ont l'attribut 'name' */}
          <div className="form-group">
            <label htmlFor="name">{t('contact.form.name')}</label>
            <input
              id="name"
              type="text"
              name="name" // <-- Important pour sendForm
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
              placeholder={t('contact.form.name')} 
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">{t('contact.form.email')}</label>
            <input
              id="email"
              type="email"
              name="email" // <-- Important pour sendForm
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
              placeholder={t('contact.form.email')} 
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">{t('contact.form.message')}</label>
            <textarea
              id="message"
              name="message" // <-- Important pour sendForm
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required
              placeholder={t('contact.form.message')} 
            />
          </div>

          {/* 4. J'ai corrigé vos clés de traduction pour les différents états */}
          <button className="custom-btn" type="submit" disabled={loading}>
            {loading ? t('contact.form.submitting') : t('contact.form.submit')}
          </button>
        </form>

        {status === 'success' && (
          <div className="success-message">{t('contact.form.success')}</div> 
        )}
        {status === 'error' && (
          <div className="error-message">{t('contact.form.error')}</div> 
        )}
      </div>
    </section>
  );
};

export default ContactSection;