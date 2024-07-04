"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import styles from "./ThemeSwitcher.module.scss";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    const currentTheme = theme ?? "system";
    const nextTheme = currentTheme === "system" ? "dark" : currentTheme === "dark" ? "light" : "system";
    setTheme(nextTheme);
  };

  return (
    <div onClick={toggleTheme} className={styles.button}>
      {theme ? (theme === "system" ? "Auto" : theme.charAt(0).toUpperCase() + theme.slice(1)) : "Loading..."}
    </div>
  );
};

export default ThemeSwitcher;