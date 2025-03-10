"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

type NumberTickerProps = {
  value: number;
  direction?: "up" | "down";
  delay?: number;
  className?: string;
  decimalPlaces?: number;
  motionConfig?: { damping: number; stiffness: number };
  inViewConfig?: { once?: boolean; margin?: string };
  locale?: string;
};

function NumberTicker({
  value,
  direction = "up",
  delay = 0,
  className = "",
  decimalPlaces = 0,
  motionConfig = { damping: 60, stiffness: 150 },
  inViewConfig = { once: true, margin: "0px" },
  locale = "en-US",
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, motionConfig);
  const isInView = useInView(ref, inViewConfig);

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        motionValue.set(direction === "down" ? 0 : value);
      }, delay * 10);
    }
  }, [motionValue, isInView, delay, value, direction]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat(locale, {
          minimumFractionDigits: decimalPlaces,
          maximumFractionDigits: decimalPlaces,
        }).format(Number(latest.toFixed(decimalPlaces)));
      }
    });
  }, [springValue, decimalPlaces, locale]);

  return (
    <span
      className={`inline-block tabular-nums text-black dark:text-white tracking-wider ${className}`}
      ref={ref}
    />
  );
}

export default NumberTicker;