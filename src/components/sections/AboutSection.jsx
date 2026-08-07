import { useTranslation } from 'react-i18next';

function AboutSection() {
  const { t } = useTranslation(); // Hook pour accéder aux traductions

  return (
    <section id="About">
      <div className="about-section">
        {/* Titre de la section */}
        <h2 data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">
          {t('about.title')}
        </h2>
        
        <div className="about-container">
          {/* Image */}
          <div className="image" data-aos="zoom-out" data-aos-duration="200">
            <img src="images/photo_linkdin.jpeg" alt={t('about.imageAlt', 'About Image')} />
          </div>

          {/* Contenu */}
          <div className="content">
            <p data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">
              {t('about.description')}
            </p>

            {/* Liens sociaux */}
            <div className="social-links">
              <a 
                href="https://github.com/AmineSbh" 
                target="_blank" 
                rel="noopener noreferrer"
                data-aos="fade-up" 
                data-aos-duration="1500" 
                data-aos-delay="300"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a 
                href="https://facebook.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                data-aos="fade-up" 
                data-aos-duration="1500" 
                data-aos-delay="400"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a 
                href="https://www.linkedin.com/in/amine-sabbahi-a64036207/" 
                target="_blank" 
                rel="noopener noreferrer"
                data-aos="fade-up" 
                data-aos-duration="1500" 
                data-aos-delay="500"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a 
                href="https://twitter.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                data-aos="fade-up" 
                data-aos-duration="1500" 
                data-aos-delay="600"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
