"use client"

import React, { useState, useEffect } from 'react';

const Clock: React.FC = () => {
  const [time, setTime] = useState<string>(getCurrentTime());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  function getCurrentTime(): string {
    const now = new Date();
    return now.toLocaleTimeString();
  }

  return time;
};

export default Clock;