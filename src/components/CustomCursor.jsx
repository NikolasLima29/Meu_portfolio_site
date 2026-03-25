import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      // Se passar o mouse em algo "clicável", o anel acende
      if (
        e.target.tagName === 'A' ||
        e.target.tagName === 'BUTTON' ||
        e.target.closest('button') ||
        e.target.closest('a') ||
        e.target.closest('.card') ||
        window.getComputedStyle(e.target).cursor === 'pointer'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Ponto central brilhante */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '10px',
          height: '10px',
          backgroundColor: isHovering ? 'var(--secondary)' : 'var(--primary)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99999,
          boxShadow: isHovering ? '0 0 15px var(--secondary)' : '0 0 10px var(--primary)'
        }}
        animate={{
          x: mousePosition.x - 5,
          y: mousePosition.y - 5,
          scale: isHovering ? 0 : 1, // Ponto some quando você foca num botão
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.1 }}
      />
      
      {/* Anel elástico rastreador */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '50px',
          height: '50px',
          border: `2px solid ${isHovering ? 'var(--secondary)' : 'var(--primary)'}`,
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99998,
          boxShadow: isHovering ? '0 0 10px rgba(139, 92, 246, 0.4)' : 'none'
        }}
        animate={{
          x: mousePosition.x - 25,
          y: mousePosition.y - 25,
          scale: isHovering ? 1.4 : 1,
          backgroundColor: isHovering ? 'rgba(139, 92, 246, 0.15)' : 'transparent'
        }}
        transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.5 }}
      />
    </>
  );
};

export default CustomCursor;
