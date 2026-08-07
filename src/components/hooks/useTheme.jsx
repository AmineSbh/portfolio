import { useState, useEffect, useCallback } from 'react';

const root = () => document.documentElement;

// Le thème est déjà posé sur <html> par le script inline de index.html (avant
// le premier paint) : le hook se contente de lire cet état existant.
const readInitialTheme = () =>
  root().classList.contains('light-mode') ? 'light' : 'dark';

export const useTheme = () => {
  const [theme, setTheme] = useState(readInitialTheme);

  const applyTheme = useCallback((next) => {
    root().classList.remove('light-mode', 'dark-mode');
    root().classList.add(`${next}-mode`);
    try {
      localStorage.setItem('theme', next);
    } catch {
      /* mode navigation privée : on ignore */
    }
    setTheme(next);
  }, []);

  const toggleTheme = useCallback(() => {
    applyTheme(theme === 'dark' ? 'light' : 'dark');
  }, [applyTheme, theme]);

  // Suit la préférence système tant que l'utilisateur n'a pas choisi lui-même.
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: light)');
    const onChange = (e) => {
      if (localStorage.getItem('theme')) return;
      applyTheme(e.matches ? 'light' : 'dark');
    };
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, [applyTheme]);

  return { theme, toggleTheme };
};
