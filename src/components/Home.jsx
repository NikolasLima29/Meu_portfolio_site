import React, { useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Link } from 'react-scroll';
import profilePic from '../assets/Foto_perfil.jpg';
import { Typewriter } from 'react-simple-typewriter';
import MagneticButton from './MagneticButton';
import { useTranslation } from 'react-i18next';

// Gerando 100 partículas nítidas e brilhantes com fator Parallax
const particles = Array.from({ length: 40 }).map((_, i) => {
  const size = Math.random() * 8 + 3; // Tamanhos bem menores (3px a 11px)
  return {
    id: i,
    size: size,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    color: i % 4 === 0 ? 'var(--primary)' : (i % 4 === 1 ? 'var(--secondary)' : (i % 4 === 2 ? '#00ffff' : '#ffffff')),
    dur: Math.random() * 15 + 10,
    x: [0, Math.random() * 400 - 200, Math.random() * 400 - 200, 0],
    y: [0, Math.random() * -500 - 100, Math.random() * -500 - 100, 0],
    parallax: size * 12 // Partículas maiores movem mais junto do mouse (criação da profundidade real)
  };
});

const Particle = ({ p, mouseX, mouseY }) => {
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
          opacity: 0.8,
          borderRadius: '50%',
        }}
        animate={{ x: p.x, y: p.y, scale: [1, 1.8, 1], opacity: [0.2, 1, 0.2] }}
        transition={{ duration: p.dur, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
};

const Home = () => {
  const { t } = useTranslation();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Mola suavizadora: O mouse vai ser "arrastado" em vez de colar direto no cursor instantaneamente
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Normaliza as coordenadas do Windows para um gradiente de -1 a 1 baseando no centro
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>

      {/* Decorative animated background elements - Partículas Nítidas com Efeito Parallax Sensível ao Mouse */}
      {particles.map((p) => (
        <Particle key={p.id} p={p} mouseX={springX} mouseY={springY} />
      ))}

      {/* Smooth transition gradient at the bottom */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '150px', background: 'linear-gradient(to top, var(--bg-dark), transparent)', zIndex: 1 }}></div>

      <Container style={{ zIndex: 1 }}>
        <Row className="align-items-center">
          <Col md={7}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1rem', background: 'linear-gradient(to right, var(--primary), var(--secondary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                {t('home.greeting')}
              </h1>
              <h2 style={{ fontSize: '1.5rem', color: 'var(--text-light)', fontWeight: 500, marginBottom: '1.5rem', minHeight: '60px' }}>
                <Typewriter
                  key={t('home.typewriter', { returnObjects: true }).join('-')} // Force remount se a língua mudar para não mixar texto
                  words={t('home.typewriter', { returnObjects: true })}
                  loop={0}
                  cursor
                  cursorStyle='|'
                  typeSpeed={50}
                  deleteSpeed={30}
                  delaySpeed={2000}
                />
              </h2>
              <Link to="projetos" smooth={true} duration={500} style={{ textDecoration: 'none' }}>
                <MagneticButton 
                  className="btn btn-primary btn-lg"
                  style={{ background: 'var(--primary)', border: 'none', padding: '12px 35px', fontWeight: 600, borderRadius: '30px', boxShadow: '0 4px 15px rgba(65, 105, 225, 0.4)', fontSize: '1.2rem', color: '#fff' }}
                >
                  {t('home.cta')}
                </MagneticButton>
              </Link>
            </motion.div>
          </Col>
          <Col md={5} className="text-center mt-5 mt-md-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src={profilePic}
                alt="Nikolas Lima"
                style={{ width: '100%', maxWidth: '400px', borderRadius: '50%', border: '5px solid var(--primary)', boxShadow: '0 10px 30px rgba(65, 105, 225, 0.3)' }}
              />
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
