import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

function MainSection() {
  const { t } = useTranslation();
  const [charIndex, setCharIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [isErasing, setIsErasing] = useState(false);

  // Utilisation des textes traduits
  const texts = [
    t('main.roles.data_engineer'),
    t('main.roles.developer')
  ];

  const speed = 100;
  const eraseSpeed = 50;
  const delayBetweenWords = 1000;

  const writeCharacter = () => {
    if (charIndex < texts[textIndex].length) {
      setCharIndex((prev) => prev + 1);
    } else {
      setTimeout(() => setIsErasing(true), delayBetweenWords);
    }
  };

  const eraseCharacter = () => {
    if (charIndex > 0) {
      setCharIndex((prev) => prev - 1);
    } else {
      setTextIndex((prev) => (prev + 1) % texts.length);
      setIsErasing(false);
    }
  };

  const handleTypewriterEffect = () => {
    if (isErasing) {
      eraseCharacter();
    } else {
      writeCharacter();
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(handleTypewriterEffect, isErasing ? eraseSpeed : speed);
    return () => clearTimeout(timeoutId);
  }, [charIndex, textIndex, isErasing]);

  return (
    <section id="Home">
      <div className="main-container">
        <div className="image" data-aos="zoom-out" data-aos-duration="3000">
          <img src="images/photo_linkdin.jpeg" alt="Photo de profil d'Amine SABBAHI" />
        </div>
        <div className="content">
          <h1 data-aos="fade-left" data-aos-duration="1500" data-aos-delay="700">
            {t('main.greeting')} <span>Amine</span>
          </h1>
          <div className="typewriter" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="900">
            {t('main.iam')} <span className="typewriter-text">{texts[textIndex].substring(0, charIndex)}</span><label>|</label>
          </div>
          <p data-aos="flip-down" data-aos-duration="1500" data-aos-delay="1100">
            {t('main.intro')}
          </p>
          <a
            href="images/cv_a_jour_bpi.pdf"
            download
            style={{ textDecoration: "none" }} // pour éviter le soulignement du lien
          >
            <button
              className="custom-btn"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              {t('main.download')}
            </button>
          </a>

        </div>
      </div>
    </section>
  );
}

export default MainSection;