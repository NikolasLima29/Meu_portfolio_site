import React from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Timeline from './Timeline';

const Sobre = () => {
  return (
    <section id="sobre" style={{ background: 'rgba(15, 23, 42, 0.5)' }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-5"
        >
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Sobre Mim</h2>
          <div style={{ width: '60px', height: '4px', background: 'var(--primary)', margin: '0 auto', borderRadius: '2px' }}></div>
          <p style={{ marginTop: '1.5rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '1.5rem auto' }}>
            Minha jornada na tecnologia através dos anos. Um resumo das minhas experiências, estudos e conquistas profissionais organizadas na linha do tempo.
          </p>
        </motion.div>
        
        <Timeline />
      </Container>
    </section>
  );
};

export default Sobre;
