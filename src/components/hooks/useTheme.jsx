import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useState('dark'); // Valeur par défaut

  // Bascule entre les thèmes clair et sombre
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.body.classList.remove(theme === 'dark' ? 'dark-mode' : 'light-mode');
    document.body.classList.add(newTheme === 'dark' ? 'dark-mode' : 'light-mode');
  };

  // Initialisation du thème au chargement de la page
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.body.classList.add(savedTheme === 'dark' ? 'dark-mode' : 'light-mode');
  }, []);

  return { theme, toggleTheme };
};