import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaSun, FaMoon } from 'react-icons/fa';

import { useTheme } from '../hooks/useTheme';
import { useScroll } from '../hooks/useScroll';
import { useLanguage } from '../hooks/useLanguage';

const NAV_ITEMS = ['Home', 'About', 'Skills', 'Services', 'Projects', 'Contact'];

function Navbar() {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const isScrolled = useScroll();
  const { language, handleLanguageChange } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Échap ferme le menu mobile
  useEffect(() => {
    if (!isMenuOpen) return undefined;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isMenuOpen]);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo">
          <a href="#Home">
            Amine <span>SABBAHI</span>
          </a>
        </div>

        <div id="nav-links" className={`links ${isMenuOpen ? 'active' : ''}`}>
          {NAV_ITEMS.map((item) => (
            <div key={item} className="link">
              <a href={`#${item}`} onClick={() => setIsMenuOpen(false)}>
                {t(`nav.${item}`)}
              </a>
            </div>
          ))}
        </div>

        <div className="controls">
          <div className="language-selector">
            <select
              onChange={(e) => handleLanguageChange(e.target.value)}
              value={language}
              className="language-select"
              aria-label={t('a11y.language')}
            >
              <option value="fr">🇫🇷 Français</option>
              <option value="en">🇬🇧 English</option>
            </select>
          </div>

          {/* <button> et non <div> : sinon inaccessible au clavier */}
          <button
            type="button"
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label={theme === 'dark' ? t('a11y.toLightMode') : t('a11y.toDarkMode')}
          >
            {theme === 'dark' ? (
              <FaMoon className="theme-icon" aria-hidden="true" />
            ) : (
              <FaSun className="theme-icon" aria-hidden="true" />
            )}
          </button>
        </div>

        <button
          type="button"
          className="hamburg"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? t('a11y.closeMenu') : t('a11y.openMenu')}
          aria-expanded={isMenuOpen}
          aria-controls="nav-links"
        >
          ☰
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
