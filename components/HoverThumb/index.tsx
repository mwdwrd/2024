import React, { useRef } from "react";
import s from "./HoverThumb.module.scss";

interface HoverThumbProps {
  src: string;
}

const HoverThumb = ({ src }: HoverThumbProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.0;
      videoRef.current.play();
    }
  };

  const handleMouseEnter = () => {
    playVideo();
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0; // Reset video to the beginning
      videoRef.current.pause(); // Pause the video
    }
  };

  return (
    <div
      className={s.wrapper}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        className={s.video}
        ref={videoRef}
        src={src}
        loop
        playsInline
        muted
      />
    </div>
  );
};

export default HoverThumb;
