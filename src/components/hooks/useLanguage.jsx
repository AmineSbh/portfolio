import { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

/**
 * La langue est dérivée de i18n via l'évènement `languageChanged` plutôt que
 * d'un state local : plusieurs composants peuvent utiliser ce hook sans risque
 * de désynchronisation.
 */
export const useLanguage = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.resolvedLanguage || i18n.language);

  useEffect(() => {
    const onChanged = (lng) => setLanguage(lng);
    i18n.on('languageChanged', onChanged);
    return () => i18n.off('languageChanged', onChanged);
  }, [i18n]);

  const handleLanguageChange = useCallback(
    (newLanguage) => i18n.changeLanguage(newLanguage),
    [i18n]
  );

  return { language, handleLanguageChange };
};
