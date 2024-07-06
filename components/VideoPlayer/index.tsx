import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import s from "./VideoPlayer.module.scss";
import clsx from 'clsx';
import { Play, Pause, Volume, Volume2 } from 'react-feather'; // Import Feather icons

interface VideoPlayerProps {
  src: string;
  format: 'cinema' | 'widescreen' | 'standard' | 'photo' | 'square';
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
}

const VideoPlayer = ({ src, format = 'widescreen', autoplay = true, loop = true, muted = true }: VideoPlayerProps): JSX.Element => {
  const [isPlaying, setIsPlaying] = useState(autoplay);
  const [isMuted, setIsMuted] = useState(muted);
  const [isLooping, setIsLooping] = useState(loop);
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const controlsVariants = {
    visible: { 
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0 }
    },
    hidden: { 
      opacity: 0,
      y: 4,
      transition: { duration: 0.5, delay: 1 } 
    },
  };

  return (
    <div className={s.wrapper} onMouseEnter={() => setShowControls(true)} onMouseLeave={() => setShowControls(false)}>
      <div className={`${s.videoWrapper} ${s[format]}`}>
        <video
          ref={videoRef}
          autoPlay={isPlaying}
          loop={isLooping}
          muted={isMuted}
          className={s.video}
          onClick={togglePlay}
        >
          <source src={`/${src}.mp4`} type="video/mp4" />
          <source src={`/${src}.webm`} type="video/webm" />
        </video>
      </div>
      <motion.div
        className={s.controls}
        animate={showControls ? "visible" : "hidden"}
        variants={controlsVariants}
        initial="hidden"
        transition={{ duration: 0.5, ease: "easeInOut" }} // Added easeInOut for a more organic feel
      >
        <div onClick={togglePlay} className={clsx(s.button, s.pause)}>
          <div className={s.icon}>
            {isPlaying ? <Pause size={24} /> : <Play size={24} />}
          </div>
        </div>
        <div onClick={toggleMute} className={clsx(s.button, s.mute)}>
          <div className={s.icon}>
            {isMuted ? <Volume2 size={24} /> : <Volume size={24} />}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default VideoPlayer;