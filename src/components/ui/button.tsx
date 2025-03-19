import React from "react";

interface ButtonHoverProps {
  text?: string;
  className?: string;
  onClick?: () => void;
}

const ButtonHover: React.FC<ButtonHoverProps> = ({ 
  text = "Click me", 
  className = "", 
  onClick 
}) => {
  return (
    <button
      className={`group relative h-12 rounded-md border-2  bg-gradient-to-r dark:from-[#070e41] dark:to-[#263381] from-[#f7f8ff] to-[#ffffff] px-5 dark:text-white text-neutral-950 ${className}`}
      onClick={onClick}
    >
      <span className='relative inline-flex overflow-hidden'>
        <div className='translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12'>
          {text}
        </div>
        <div className='absolute translate-y-[114%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0'>
          {text}
        </div>
      </span>
    </button>
  );
};

export default ButtonHover;