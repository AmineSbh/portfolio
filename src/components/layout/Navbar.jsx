// Imports des hooks et composants nécessaires
import { useState } from 'react'; // Hook pour gérer l'état
import { useTranslation } from 'react-i18next'; // Hook pour la traduction
import { FaSun, FaMoon } from 'react-icons/fa'; // Icônes pour le thème

// Hooks personnalisés
import { useTheme } from '../hooks/useTheme';
import { useScroll } from '../hooks/useScroll';
import { useLanguage } from '../hooks/useLanguage';

function Navbar() {
  // Initialisation des hooks
  const { t } = useTranslation(); // Pour la traduction
  const { theme, toggleTheme } = useTheme(); // Gestion du thème
  const isScrolled = useScroll(); // Détection du scroll
  const { language, handleLanguageChange } = useLanguage(); // Gestion de la langue
  const [isMenuOpen, setIsMenuOpen] = useState(false); // État pour le menu hamburger

  // Gère l'ouverture/fermeture du menu hamburger
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        {/* Logo */}
        <div className="logo">
          <a href="#Home" style={{ textDecoration: "none", color: "inherit" }}> 
          Amine <span>SABBAHI</span>
          </a>
        </div>
        

        {/* Liens de navigation */}
        <div className={`links ${isMenuOpen ? 'active' : ''}`}>
          {['Home', 'About', 'Skills', 'Services', 'Projects', 'Contact'].map((item) => (
            <div key={item} className="link">
              <a href={`#${item}`} onClick={() => setIsMenuOpen(false)}>
                {t(`nav.${item}`)}
              </a>
            </div>
          ))}
        </div>

        {/* Contrôles de langue et thème */}
        <div className="controls">
          <div className="language-selector">
          <select
            onChange={(e) => handleLanguageChange(e.target.value)}
            value={language}
            className="language-select"
          >
            <option value="fr">🇫🇷 Français</option>
            <option value="en">🇬🇧 English</option>
          </select>
          </div>

          <div onClick={toggleTheme} className="theme-toggle">
            {theme === 'dark' ? (
              <FaMoon className="theme-icon" />
            ) : (
              <FaSun className="theme-icon" />
            )}
          </div>
        </div>

        {/* Bouton menu hamburger */}
        <div className="hamburg" onClick={toggleMenu}>
          ☰
        </div>
      </div>
    </nav>
  );
}

export default Navbar;