"use client"

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Clock = () => {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    setTime(getCurrentTime());

    const timerId = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  function getCurrentTime(): string {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  }

  if (time === null) {
    return null;
  }

  return (
    <motion.div 
      className="tabular-nums"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {time}
    </motion.div>
  );
};

export default Clock;