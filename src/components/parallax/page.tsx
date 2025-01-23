import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import Image from 'next/image';
import Cmm from "@/assets/img/cmm.png"
function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Create spring-animated values for smooth movement
  const springConfig = { damping: 25, stiffness: 150 };
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useSpring(0, springConfig);
  const rotateY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;
      
      // Calculate mouse position relative to the center of the screen
      const normalizedX = clientX / innerWidth - 0.5;
      const normalizedY = clientY / innerHeight - 0.5;

      setMousePosition({ x: normalizedX, y: normalizedY });
      
      // Update rotation values based on mouse position
      rotateX.set(normalizedY * 20); // Rotate around X axis
      rotateY.set(normalizedX * 20); // Rotate around Y axis
      
      // Update position values
      x.set(normalizedX * 100);
      y.set(normalizedY * 100);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden flex   ">
      <motion.div
        className="relative w-full h-screen overflow-hidden"
        style={{
          rotateX,
          rotateY,
          transformPerspective: 100000,
        }}
      >
        {/* Background Layer - Mountains */}
        <motion.div
          className="absolute bottom-0 inset-0"
          style={{
            x: useSpring(x, { ...springConfig, stiffness: 10 }),
            y: useSpring(y, { ...springConfig, stiffness: 10 }),
          }}
        >
          <div className='flex justify-center'>
          <Image 
            src={Cmm}
            alt="Mountains background"
          />
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}

export default App;