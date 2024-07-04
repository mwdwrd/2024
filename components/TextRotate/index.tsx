"use client"

import { FC, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type TextRotateProps = {
  texts: string[];
  duration?: number;
};

const TextRotate: FC<TextRotateProps> = ({ texts, duration = 2000 }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, duration);

    return () => clearInterval(interval);
  }, [texts, duration]);

  return (
    <div style={{ position: 'relative' }}>
      <AnimatePresence>
        <motion.div
          key={texts[index]}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ position: 'absolute' }}
        >
          {texts[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TextRotate;