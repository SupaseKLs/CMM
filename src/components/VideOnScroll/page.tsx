"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useAnimationFrame } from "framer-motion";

const AppleSmoothScrollVideo = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Scroll progress from Framer Motion (0 - 1)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], // start when top of container hits bottom of screen
  });

  // Smooth transform to simulate video scrub progress
  const videoProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useAnimationFrame(() => {
    if (videoRef.current) {
      const video = videoRef.current;
      const duration = video.duration || 1;

      videoProgress.get() !== undefined &&
        (video.currentTime += (videoProgress.get() * duration - video.currentTime) * 0.05); // easing
    }
  });

  return (
    <div ref={containerRef} className="relative h-[500vh]">
      <div className="sticky top-0 h-screen w-full bg-black">
        <motion.video
          ref={videoRef}
          src="/video/thesis.mp4"
          className="w-full h-full object-cover"
          muted
          playsInline
          preload="auto"
        />
      </div>
    </div>
  );
};

export default AppleSmoothScrollVideo;
