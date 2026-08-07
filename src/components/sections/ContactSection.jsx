import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const isConfigured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

const EMPTY_FORM = { name: '', email: '', message: '' };

const ContactSection = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Sans variables d'environnement, emailjs recevrait `undefined` et
    // renverrait une erreur incompréhensible : on prévient explicitement.
    if (!isConfigured) {
      setStatus('config');
      return;
    }

    setLoading(true);
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY);
      setStatus('success');
      setFormData(EMPTY_FORM);
      setTimeout(() => setStatus(''), 5000);
    } catch (error) {
      console.error("Erreur lors de l'envoi du message :", error);
      setStatus('error');
      setTimeout(() => setStatus(''), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="Contact">
      <div className="contact-container">
        <h2>{t('contact.title')}</h2>

        <form onSubmit={handleSubmit} className="contact-form" aria-busy={loading}>
          <div className="form-group">
            <label htmlFor="name">{t('contact.form.name')}</label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              autoComplete="name"
              required
              placeholder={t('contact.form.name')}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">{t('contact.form.email')}</label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              required
              placeholder={t('contact.form.email')}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">{t('contact.form.message')}</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder={t('contact.form.message')}
            />
          </div>

          <button className="custom-btn" type="submit" disabled={loading}>
            {loading ? t('contact.form.submitting') : t('contact.form.submit')}
          </button>
        </form>

        {/* Les changements de statut sont annoncés par les lecteurs d'écran */}
        <div className="form-status" role="status" aria-live="polite">
          {status === 'success' && (
            <div className="success-message">{t('contact.form.success')}</div>
          )}
          {status === 'error' && (
            <div className="error-message">{t('contact.form.error')}</div>
          )}
          {status === 'config' && (
            <div className="error-message">{t('contact.form.configError')}</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
