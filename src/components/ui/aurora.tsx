"use client";

import React from "react";

interface AuroraTextProps {
  children: React.ReactNode;
  className?: string;
  colors?: string[];
  speed?: number;
}

export const AuroraText = ({
  children,
  className = "",
  colors = ["#59CCBE", "#F9C545","#59CCBE", "#F9C545","#59CCBE", "#F9C545"],
  speed = 1,
}: AuroraTextProps) => {
  const gradientStyle = {
    backgroundImage: `linear-gradient(135deg, ${colors.join(", ")}, ${colors[0]})`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    animationDuration: `${10 / speed}s`,
  };

  return (
    <span className={`relative inline-block ${className}`}>
      {/* Hidden for screen readers */}
      <span className="sr-only">{children}</span>

      {/* Visible gradient text */}
      <span
        className="relative animate-aurora bg-[length:200%_auto] bg-clip-text text-transparent"
        style={gradientStyle}
        aria-hidden="true"
      >
        {children}
      </span>
    </span>
  );
};
