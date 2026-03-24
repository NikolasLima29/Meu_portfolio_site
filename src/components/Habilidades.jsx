import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaFigma } from 'react-icons/fa';
// Fallback: Since sometimes react-icons/fa might miss something, Fa is standard.
import { TbBrandBootstrap } from 'react-icons/tb';

const skills = [
  { name: 'HTML5', icon: <FaHtml5 size={50} color="#E34F26" /> },
  { name: 'CSS3', icon: <FaCss3Alt size={50} color="#1572B6" /> },
  { name: 'JavaScript', icon: <FaJs size={50} color="#F7DF1E" /> },
  { name: 'React', icon: <FaReact size={50} color="#61DAFB" /> },
  { name: 'Node.js', icon: <FaNodeJs size={50} color="#339933" /> },
  { name: 'Figma', icon: <FaFigma size={50} color="#F24E1E" /> },
];

const Habilidades = () => {
  return (
    <section id="habilidades" style={{ position: 'relative' }}>
      <Container>
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6 }}
           className="text-center mb-5"
        >
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Habilidades</h2>
          <div style={{ width: '60px', height: '4px', background: 'var(--secondary)', margin: '0 auto', borderRadius: '2px' }}></div>
        </motion.div>

        <Row className="justify-content-center">
          {skills.map((skill, index) => (
            <Col xs={6} md={4} lg={3} className="text-center mb-4" key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="glass p-4"
                style={{ borderRadius: '20px', cursor: 'pointer', border: '1px solid rgba(139, 92, 246, 0.2)' }}
              >
                <div className="mb-3">{skill.icon}</div>
                <h5 style={{ fontWeight: 600 }}>{skill.name}</h5>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Habilidades;
