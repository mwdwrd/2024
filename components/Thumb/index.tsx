import React, { useRef } from "react";
import s from "./Thumb.module.scss";
import Image from "next/image";
import clsx from "clsx";

interface ThumbProps {
  src: string;
  type: "image" | "video" | string;
  alt: string;
  format: "cinema" | "widescreen" | "standard" | "photo" | "square";
}

const Thumb = ({ src, type, alt, format = "standard" }: ThumbProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.0;
      videoRef.current.play();
    }
  };

  const handleMouseEnter = () => {
    if (type === "video") {
      playVideo();
    }
  };

  const handleMouseLeave = () => {
    if (type === "video" && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.pause();
    }
  };

  return (
    <div
      className={clsx(s.wrapper, s[format])}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {type === "video" ? (
        <video
          className={s.video}
          ref={videoRef}
          src={src}
          loop
          playsInline
          muted
        />
      ) : type === "image" ? (
        <Image src={src} alt={alt} fill={true} className={s.image} />
      ) : (
        <div className={s.default} />
      )}
    </div>
  );
};

export default Thumb;