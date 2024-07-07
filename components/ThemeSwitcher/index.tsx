"use client"

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import styles from "./ThemeSwitcher.module.scss";
import { Sun, Moon } from 'react-feather';

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    // Determine if the system prefers a dark mode
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    // Determine the current theme or fallback to system preference
    const currentTheme = theme === "light" || theme === "dark" ? theme : prefersDarkMode ? "dark" : "light";
    // Toggle theme based on the current setting
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  };

  const renderIcon = () => {
    // Determine if the system prefers a dark mode
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    // Determine the current theme or fallback to system preference
    const currentTheme = theme === "light" || theme === "dark" ? theme : prefersDarkMode ? "dark" : "light";
    return currentTheme === "dark" ? <Sun size={16} /> : <Moon size={16} />;
  };

  return (
    <div onClick={toggleTheme} className={styles.button}>
      {renderIcon()}
    </div>
  );
};

export default ThemeSwitcher;