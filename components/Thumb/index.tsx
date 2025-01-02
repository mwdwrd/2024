import React, { useRef } from "react";
import s from "./Thumb.module.scss";
import Image from "next/image";
import clsx from "clsx";
import AnimatedThumb from "../AnimatedThumb";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { aspectRatios } from "@/lib/utils";
import type { AspectRatioType } from "@/lib/utils";

interface ThumbProps {
  src: string | string[] | any;
  type: "image" | "video" | "images" | string;
  alt: string;
  format: AspectRatioType;
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
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative rounded-md overflow-hidden"
    >
      <AspectRatio ratio={aspectRatios[format]}>
      {type === "video" ? (
        <video
          ref={videoRef}
          src={src}
          loop
          playsInline
          muted
        />
      ) : type === "image" ? (
        <Image src={src} alt={alt} fill={true} className="object-cover" />
      ) : type === "images" ? (
        <AnimatedThumb
          images={src}
          alt={alt}
        />
      ) : (
        <div className={s.default} />
      )}
      </AspectRatio>
    </div>
  );
};

export default Thumb;
