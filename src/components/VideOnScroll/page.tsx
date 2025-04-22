"use client";

import { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const TOTAL_FRAMES = 967;
const IMAGE_PATH = (index: number) => {
  const paddedIndex = String(index).padStart(3, "0");
  return `/images/frame${paddedIndex}.jpg`;
};

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
      <div className="sticky top-0 h-screen w-full flex items-center justify-center">
        <motion.img
          src={IMAGE_PATH(currentFrame)}
          alt={`Frame ${currentFrame}`}
          className="w-full max-h-full object-contain"
          loading="eager"
        />
      </div>
    </div>
  );
};

export default ScrollImageSequence;
