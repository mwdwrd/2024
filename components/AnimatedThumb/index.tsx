import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import s from './AnimatedThumb.module.scss';

interface AnimatedThumbProps {
  images: string[];
  alt: string;
  aspectRatio?: number;
  interval?: number;
}

const useImageCycle = (imageCount: number, interval: number) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const startAnimation = () => {
    if (imageCount > 1 && !isPlaying) {
      setIsPlaying(true);
      cycleImage();
    }
  };

  const cycleImage = () => {
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageCount);
      cycleImage();
    }, interval);
  };

  const stopAnimation = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      setIsPlaying(false);
      setCurrentIndex(0);
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return { currentIndex, startAnimation, stopAnimation };
};

const AnimatedThumb: React.FC<AnimatedThumbProps> = ({ 
  images, 
  alt, 
  aspectRatio = 16 / 9,
  interval = 1000
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const effectiveImageCount = images.length - 1;
  const { currentIndex, startAnimation, stopAnimation } = useImageCycle(effectiveImageCount, interval);

  useEffect(() => {
    if (isHovered) {
      startAnimation();
    } else {
      stopAnimation();
    }
  }, [isHovered, startAnimation, stopAnimation]);

  return (
    <div 
      className={s.outerContainer}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className={s.imageContainer}
        whileHover={{ scale: 1.01 }}
        transition={{ type: "anticipate", stiffness: 300, damping: 20 }}
        style={{ aspectRatio }}
      >
        <Image
          src={images[currentIndex]}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={90}
          priority={currentIndex === 0}
          className={s.image}
        />
      </motion.div>
      {effectiveImageCount > 1 && isHovered && (
        <div className={s.progressContainer}>
          <motion.div
            className={s.progressBarFill}
            initial={{ x: '-100%' }}
            animate={{ x: '0%' }}
            transition={{
              duration: effectiveImageCount,
              ease: "linear",
              repeat: Infinity,
            }}
          />
        </div>
      )}
    </div>
  );
};

export default AnimatedThumb;