import { useState, useEffect } from 'react';

const useIsMobile = (breakpoint: number = 1440) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    handleResize(); // Check the initial width
    window.addEventListener('resize', handleResize); // Update on resize

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [breakpoint]);

  return isMobile;
};

export default useIsMobile;
