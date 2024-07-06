"use client"

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import styles from "./ThemeSwitcher.module.scss";
import { Sun, Moon, Settings } from 'react-feather';

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

  const renderIcon = () => {
    switch (theme) {
      case "light":
        return <Sun size={16} />;
      case "dark":
        return <Moon size={16} />;
      case "system":
      default:
        return <Settings size={16} />;
    }
  };

  return (
    <div onClick={toggleTheme} className={styles.button}>
      {renderIcon()}
    </div>
  );
};

export default ThemeSwitcher;