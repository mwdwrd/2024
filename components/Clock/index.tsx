"use client"

import React, { useState, useEffect } from 'react';

const Clock: React.FC = () => {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    // Set the initial time only after the component has mounted to ensure
    // it is consistent with subsequent updates and does not cause a mismatch.
    setTime(getCurrentTime());

    const timerId = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  function getCurrentTime(): string {
    const now = new Date();
    return now.toLocaleTimeString();
  }

  // Render null or a loading state until the component has mounted and the initial time is set.
  if (time === null) {
    return null; // Or a placeholder/loading state if preferred.
  }

  return <>{time}</>;
};

export default Clock;