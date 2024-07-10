"use client"

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import s from "./VideoPlayer.module.scss";
import clsx from "clsx";
import { Play, Pause, Maximize2, Volume, Volume2 } from "react-feather"; // Import Feather icons

interface VideoPlayerProps {
  src: {
    mp4?: string;
    webm?: string;
  }
  format: "cinema" | "widescreen" | "standard" | "photo" | "square";
  autoplay?: boolean;
  controls?: "show" | "hover" | null;
  clickable?: boolean;
  loop?: boolean;
  muted?: boolean;
}

const VideoPlayer = ({
  src,
  format = "widescreen",
  autoplay = true,
  controls = null,
  clickable = true,
  loop = true,
  muted = true,
}: VideoPlayerProps): JSX.Element => {
  const [isPlaying, setIsPlaying] = useState(autoplay);
  const [isMuted, setIsMuted] = useState(muted);
  const [isLooping, setIsLooping] = useState(loop);
  const [hover, setHover] = useState(false);
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
      transition: { duration: 0.3, delay: 0 },
      ease: "anticipate",
    },
    hidden: {
      opacity: 0,
      y: 10,
      transition: { duration: 0.3, delay: 1 },
      ease: "anticipate",
    },
  };

  const ControlButtons = () => (
    <div className={s.buttonGroup}>
      <div onClick={togglePlay} className={clsx(s.button, s.pause)}>
        <div className={s.icon}>
          {isPlaying ? <Pause size={16} /> : <Play size={16} />}
        </div>
      </div>
      <div onClick={toggleMute} className={clsx(s.button, s.mute)}>
        <div className={s.icon}>
          {isMuted ? <Volume2 size={16} /> : <Volume size={16} />}
        </div>
      </div>
      <div onClick={toggleMute} className={clsx(s.button, s.mute)}>
        <div className={s.icon}>
          <Maximize2 size={16} />
        </div>
      </div>
    </div>
  );

  return (
    <div
      className={s.wrapper}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className={`${s.videoWrapper} ${s[format]}`}>
        <video
          ref={videoRef}
          autoPlay={isPlaying}
          loop={isLooping}
          muted={isMuted}
          className={s.video}
          onClick={clickable ? togglePlay : undefined}
        >
          {src.mp4 && <source src={src.mp4} type="video/mp4" />}
          {src.webm && <source src={src.webm} type="video/webm" />}
        </video>
      </div>
      {controls === "hover" && (
        <motion.div
          className={s.controls}
          animate={hover ? "visible" : "hidden"}
          variants={controlsVariants}
          initial="hidden"
        >
          <ControlButtons />
        </motion.div>
      )}
      {controls === "show" && (
        <div className={s.controls}>
          <ControlButtons />
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;

// import { Suspense } from 'react'
// import { list } from '@vercel/blob'
 
// export default function Page() {
//   return (
//     <Suspense fallback={<p>Loading video...</p>}>
//       <VideoComponent fileName="my-video.mp4" />
//     </Suspense>
//   )
// }
 
// async function VideoComponent({ fileName }) {
//   const { blobs } = await list({
//     prefix: fileName,
//     limit: 1,
//   })
//   const { url } = blobs[0]
 
//   return (
//     <video controls preload="none" aria-label="Video player">
//       <source src={url} type="video/mp4" />
//       Your browser does not support the video tag.
//     </video>
//   )
// }