import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

// Particles array built functionally outside render
const particles = Array.from({ length: 190 }).map((_, i) => {
  // Metade na esquerda (1% - 15%), metade na direita (85% - 99%)
  const isLeft = i % 2 === 0;
  const leftPos = isLeft ? (Math.random() * 14 + 1) : (Math.random() * 14 + 85);

  const size = Math.random() * 6 + 3; // Menores para background longo (3 a 9px)
  return {
    id: i,
    size: size,
    // Distribuído aleatoriamente ao longo de todos os 100% de altura do container global
    top: `${Math.random() * 100}%`,
    left: `${leftPos}%`,
    color: i % 4 === 0 ? 'var(--primary)' : (i % 4 === 1 ? 'var(--secondary)' : (i % 4 === 2 ? '#00ffff' : '#ffffff')),
    dur: Math.random() * 20 + 20, // Animações de ciclo mais longo pelo tamanho da página
    x: [0, isLeft ? Math.random() * 40 - 20 : Math.random() * 40 - 20, 0],
    y: [0, Math.random() * -300 - 100, Math.random() * -300 - 100, 0], // Sempre flutuando pra cima
    parallax: size * 8
  };
});

const GlobalParticle = ({ p, mouseX, mouseY }) => {
  const offsetX = useTransform(mouseX, [-1, 1], [-p.parallax, p.parallax]);
  const offsetY = useTransform(mouseY, [-1, 1], [-p.parallax, p.parallax]);

  return (
    <motion.div
      className="position-absolute"
      style={{ top: p.top, left: p.left, x: offsetX, y: offsetY, zIndex: 0 }}
    >
      <motion.div
        style={{
          width: p.size,
          height: p.size,
          background: p.color,
          boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
          opacity: 0.6,
          borderRadius: '50%',
        }}
        animate={{ x: p.x, y: p.y, scale: [1, 1.5, 1], opacity: [0.1, 0.7, 0.1] }}
        transition={{ duration: p.dur, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
};

const GlobalParticles = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div
      className="global-particles-container"
      style={{
        position: 'absolute',
        top: '100vh',  // Inicia exato após a Home.jsx que consome 100vh
        bottom: 0,     // Expande tudo até ao rodapé
        left: 0,
        right: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0
      }}
    >
      {particles.map((p) => (
        <GlobalParticle key={p.id} p={p} mouseX={springX} mouseY={springY} />
      ))}
    </div>
  );
};

export default GlobalParticles;
