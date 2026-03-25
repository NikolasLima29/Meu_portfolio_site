import React, { useRef, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const MagneticButton = ({ children, className, style, onClick, href, target }) => {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    
    // Cálculo do centro relativo do elemento
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    
    // Suavidade do campo magnético (quanto menor o divisor, mais forte puxa pro mouse)
    x.set(middleX * 0.3);
    y.set(middleY * 0.3);
  };

  const reset = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={reset}
      animate={{ scale: isHovered ? 1.05 : 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 10 }}
      className={className}
      style={{
        ...style,
        position: 'relative',
        x,
        y,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        textDecoration: 'none' // Para links 'a'
      }}
      onClick={onClick}
      href={href}
      target={target}
    >
      {/* Container interno pro texto/icone contrabalancear levemente o magnetismo dando efeito 3D (Opcional) */}
      <motion.div style={{ x: useSpring(x.get() * 0.4, springConfig), y: useSpring(y.get() * 0.4, springConfig), pointerEvents: 'none' }}>
        {children}
      </motion.div>
    </Component>
  );
};

export default MagneticButton;
