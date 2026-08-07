import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function ScrollToTopButton() {
  const { t } = useTranslation();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!showButton) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="scroll-to-top"
      aria-label={t('a11y.scrollTop')}
    >
      ↑
    </button>
  );
}

export default ScrollToTopButton;
