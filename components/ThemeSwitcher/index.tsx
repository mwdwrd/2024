"use client"

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import styles from "./ThemeSwitcher.module.scss";
import { Sun, Moon } from 'react-feather';
import { motion, AnimatePresence } from 'framer-motion';

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const currentTheme = theme === "light" || theme === "dark" ? theme : prefersDarkMode ? "dark" : "light";
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  };

  const currentTheme = theme === "light" || theme === "dark" ? theme : 
    (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? "dark" : "light";

  return (
    <motion.div 
      onClick={toggleTheme} 
      className={styles.button}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={currentTheme}
          initial={{ y: -20, opacity: 0, rotate: -90 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 20, opacity: 0, rotate: 90 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {currentTheme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default ThemeSwitcher;