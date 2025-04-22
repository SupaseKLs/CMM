'use client';

import { ReactLenis } from 'lenis/react';
import { ReactNode, FC, useEffect, useState } from 'react';

interface SmoothScrollProps {
  children: ReactNode;
}

const SmoothScroll: FC<SmoothScrollProps> = ({ children }) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // wait until mount to prevent hydration issues
    setIsReady(true);
  }, []);

  return isReady ? <ReactLenis root>{children}</ReactLenis> : <>{children}</>;
};

export default SmoothScroll;
