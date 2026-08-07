import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const links = [
  { id: 'github', href: 'https://github.com/AmineSbh', label: 'GitHub', Icon: FaGithub },
  {
    id: 'linkedin',
    href: 'https://www.linkedin.com/in/amine-sabbahi-a64036207/',
    label: 'LinkedIn',
    Icon: FaLinkedin,
  },
  { id: 'email', href: 'mailto:amine.sabbahi@gmail.com', label: 'Email', Icon: FaEnvelope },
];

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="portfolio-footer">
      <div className="footer-content">
        <div className="social-links">
          {links.map(({ id, href, label, Icon }) => (
            <a
              key={id}
              href={href}
              target={href.startsWith('mailto:') ? undefined : '_blank'}
              rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              aria-label={label}
            >
              <Icon aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="copyright">
          {t('footer.copyrightText', { year: new Date().getFullYear() })}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
