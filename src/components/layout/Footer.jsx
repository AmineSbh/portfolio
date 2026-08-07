import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope
} from 'react-icons/fa';

function Footer() {
  return (
    <footer className="portfolio-footer">
      <div className="footer-content">
        <div className="social-links">
          <a href="https://github.com/votrenom" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/amine-sabbahi-a64036207/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/votrenom" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="mailto:votre.email@example.com">
            <FaEnvelope />
          </a>
        </div>
        <p className="copyright">
          © {new Date().getFullYear()} Amine SABBAHI. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}

export default Footer;