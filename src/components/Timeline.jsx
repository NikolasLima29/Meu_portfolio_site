import React, { useRef } from 'react';
import { Row, Col, Carousel } from 'react-bootstrap';
import { motion, useScroll, useTransform } from 'framer-motion';
import { timelineData } from '../data/timelineData';
import '../styles/animations.css';
import { useTranslation } from 'react-i18next';

const TimelineItem = ({ item, index }) => {
  const { i18n } = useTranslation();
  return (
    <Row className="mb-5 mx-0 align-items-center" style={{ position: 'relative', zIndex: 1 }}>
      {/* Marcador no centro */}
      <div className="timeline-dot"></div>

      {/* Conteúdo: Imagem (Esquerda) */}
      <Col xs={12} md={6} className="mb-4 mb-md-0 ps-5 ps-md-0 pe-md-5">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass p-2 mx-auto"
          style={{ borderRadius: '15px', overflow: 'hidden', width: '70%' }}
        >
          {Array.isArray(item.image) ? (
            <Carousel indicators={true} controls={true} interval={10000} style={{ borderRadius: '10px', overflow: 'hidden' }}>
              {item.image.map((imgSrc, idx) => (
                <Carousel.Item key={idx}>
                  <img src={imgSrc} alt={`Ano ${item.year} - Foto ${idx + 1}`} style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
                </Carousel.Item>
              ))}
            </Carousel>
          ) : (
            <img src={item.image} alt={`Ano ${item.year}`} style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
          )}
        </motion.div>
      </Col>

      {/* Conteúdo: Texto (Direita) */}
      <Col xs={12} md={6} className="text-md-start ps-5">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h3 style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '2rem', marginBottom: item.subtitulo ? '0.2rem' : '0.5rem' }}>{item.year[i18n.language]}</h3>
          {item.subtitulo && (
            <h2 style={{ color: '#87CEFA', fontWeight: 600, fontSize: '1.4rem', marginBottom: '1rem' }}>{item.subtitulo[i18n.language]}</h2>
          )}
          <p style={{ color: 'var(--text-light)', fontSize: '1rem', whiteSpace: 'pre-line' }}>{item.text[i18n.language]}</p>
        </motion.div>
      </Col>
    </Row>
  );
};

const Timeline = () => {
  const containerRef = useRef(null);

  // Efeito de scroll linked para a linha central preencher
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div style={{ position: 'relative', padding: '40px 0' }} ref={containerRef}>
      {/* Linha de fundo escura */}
      <div className="timeline-line-bg" style={{
        background: 'rgba(255,255,255,0.05)',
        borderRadius: '2px'
      }}></div>

      {/* Linha colorida que cresce com o scroll (Scroll Linked) */}
      <motion.div className="timeline-line" style={{
        background: 'linear-gradient(to bottom, var(--primary), var(--secondary))',
        transformOrigin: 'top',
        scaleY,
        borderRadius: '2px',
        zIndex: 0
      }}></motion.div>

      {timelineData.map((item, index) => (
        <TimelineItem key={index} item={item} index={index} />
      ))}
    </div>
  );
};

export default Timeline;
