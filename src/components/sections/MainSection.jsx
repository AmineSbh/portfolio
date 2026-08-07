import { useTranslation } from 'react-i18next';
import { useState, useEffect, useMemo } from 'react';

const TYPE_SPEED = 100;
const ERASE_SPEED = 50;
const PAUSE_AFTER_WORD = 1000;

function MainSection() {
  const { t, i18n } = useTranslation();

  // Mémorisé sur la langue : le tableau ne doit pas changer d'identité à chaque
  // rendu, sinon l'effet ci-dessous se relance en boucle.
  const texts = useMemo(
    () => [t('main.roles.data_engineer'), t('main.roles.developer')],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [i18n.language]
  );

  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isErasing, setIsErasing] = useState(false);

  // Au changement de langue les chaînes changent de longueur : on repart de zéro
  // pour éviter un curseur bloqué au-delà de la fin du mot.
  useEffect(() => {
    setTextIndex(0);
    setCharIndex(0);
    setIsErasing(false);
  }, [texts]);

  useEffect(() => {
    const current = texts[textIndex] ?? '';
    let delay;
    let next;

    if (!isErasing && charIndex < current.length) {
      delay = TYPE_SPEED;
      next = () => setCharIndex((c) => c + 1);
    } else if (!isErasing) {
      delay = PAUSE_AFTER_WORD;
      next = () => setIsErasing(true);
    } else if (charIndex > 0) {
      delay = ERASE_SPEED;
      next = () => setCharIndex((c) => c - 1);
    } else {
      delay = ERASE_SPEED;
      next = () => {
        setTextIndex((i) => (i + 1) % texts.length);
        setIsErasing(false);
      };
    }

    // Un seul timer, toujours nettoyé : plus de setTimeout orphelin qui
    // se déclenchait deux fois sous StrictMode.
    const id = setTimeout(next, delay);
    return () => clearTimeout(id);
  }, [charIndex, textIndex, isErasing, texts]);

  const currentText = texts[textIndex] ?? '';

  return (
    <section id="Home">
      <div className="main-container">
        <div className="image" data-aos="zoom-out" data-aos-duration="3000">
          <img
            src="/images/photo_linkdin.webp"
            alt={t('main.imageAlt')}
            width="400"
            height="400"
            fetchPriority="high"
            decoding="async"
          />
        </div>
        <div className="content">
          <h1 data-aos="fade-left" data-aos-duration="1500" data-aos-delay="700">
            {t('main.greeting')} <span>Amine</span>
          </h1>
          <div
            className="typewriter"
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-delay="900"
          >
            {t('main.iam')}{' '}
            <span className="typewriter-text">
              {currentText.substring(0, charIndex)}
            </span>
            <span className="typewriter-caret" aria-hidden="true">|</span>
            {/* Le rôle complet reste lisible par un lecteur d'écran */}
            <span className="sr-only">{currentText}</span>
          </div>
          <p data-aos="flip-down" data-aos-duration="1500" data-aos-delay="1100">
            {t('main.intro')}
          </p>
          <a
            href="/images/cv_a_jour_bpi.pdf"
            download
            className="custom-btn"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            {t('main.download')}
          </a>
        </div>
      </div>
    </section>
  );
}

export default MainSection;
