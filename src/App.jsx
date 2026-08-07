import  { useEffect } from 'react'; 
// useEffect est un "Hook" React qui permet d'exécuter du code à des moments précis

import AOS from 'aos';
// AOS (Animate On Scroll) est une bibliothèque pour créer des animations au défilement

import 'aos/dist/aos.css';
import { useLanguage } from './components/hooks/useLanguage'; 
// Import d'un hook personnalisé pour gérer les langues

// Import des composants
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
  // Récupère la langue actuelle et la fonction pour la changer
  const { language, handleLanguageChange } = useLanguage(); 

  // Configure AOS au chargement de l'application
  useEffect(() => {
    AOS.init({ offset: 0 });
  }, []);

  return (
    <div>
      {/* Passer la langue et la fonction de changement à Navbar */}
      <Navbar language={language} onLanguageChange={handleLanguageChange} />
      
      {/* Passer la langue à chaque composant */}
      <MainSection language={language} />
      <AboutSection language={language} />
      <SkillsSection language={language} />
      <ServicesSection language={language} />
      <ProjectSection language={language} />
      <ContactSection language={language} />
      <Footer language={language} />

      {/* Bouton global */}
      <ScrollToTopButton />
    </div>
  );
}

export default App;