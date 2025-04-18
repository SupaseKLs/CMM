"use client";

import { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const TOTAL_FRAMES = 960;
const IMAGE_PATH = (index: number) => `/images/frame${index}.jpg`;

const ScrollImageSequence = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentFrame, setCurrentFrame] = useState(1);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [1, TOTAL_FRAMES]);

  useEffect(() => {
    const unsubscribe = frameIndex.on("change", (v) => {
      setCurrentFrame(Math.floor(v));
    });

    return () => unsubscribe();
  }, [frameIndex]);

  return (
    <div ref={containerRef} className="relative h-[500vh]">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center bg-black">
        <motion.img
          src={IMAGE_PATH(currentFrame)}
          alt={`Frame ${currentFrame}`}
          className="w-full h-full"
          loading="eager"
        />
      </div>
    </div>
  );
};

export default ScrollImageSequence;
