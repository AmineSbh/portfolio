import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';

import AboutSection from './components/sections/AboutSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import MainSection from './components/sections/MainSection';
import SkillsSection from './components/sections/SkillsSection';
import ServicesSection from './components/sections/ServicesSection';
import ProjectSection from './components/sections/ProjectSection';
import ScrollToTopButton from './components/common/ScrollToTopButton';

function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    AOS.init({
      offset: 0,
      // Les animations au défilement sont désactivées si l'utilisateur a
      // demandé une réduction des mouvements.
      disable: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    });
  }, []);

  // Garde <html lang> et le titre alignés sur la langue affichée (SEO + a11y).
  useEffect(() => {
    document.documentElement.lang = i18n.resolvedLanguage || i18n.language;
    document.title = t('meta.title');
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', t('meta.description'));
  }, [i18n.resolvedLanguage, i18n.language, t]);

  return (
    <>
      <Navbar />
      <main>
        <MainSection />
        <AboutSection />
        <SkillsSection />
        <ServicesSection />
        <ProjectSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}

export default App;
