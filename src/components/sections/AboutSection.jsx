import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

// Uniquement des profils réellement actifs : les liens Facebook/Twitter
// pointaient vers les pages d'accueil des plateformes.
const socials = [
  { id: 'github', href: 'https://github.com/AmineSbh', label: 'GitHub', Icon: FaGithub, delay: 300 },
  {
    id: 'linkedin',
    href: 'https://www.linkedin.com/in/amine-sabbahi-a64036207/',
    label: 'LinkedIn',
    Icon: FaLinkedin,
    delay: 400,
  },
  { id: 'email', href: 'mailto:amine.sabbahi@gmail.com', label: 'Email', Icon: FaEnvelope, delay: 500 },
];

function AboutSection() {
  const { t } = useTranslation();

  return (
    <section id="About">
      <div className="about-section">
        <h2 data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">
          {t('about.title')}
        </h2>

        <div className="about-container">
          <div className="image" data-aos="zoom-out" data-aos-duration="200">
            <img
              src="/images/photo_linkdin.webp"
              alt={t('about.imageAlt')}
              width="400"
              height="400"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="content">
            <p data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">
              {t('about.description')}
            </p>

            <div className="social-links">
              {socials.map(({ id, href, label, Icon, delay }) => (
                <a
                  key={id}
                  href={href}
                  target={href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  aria-label={label}
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-delay={delay}
                >
                  <Icon aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
