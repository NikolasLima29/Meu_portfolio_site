import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import profilePic from '../assets/Foto_perfil.jpg';

const Home = () => {
  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative background elements */}
      <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '400px', height: '400px', background: 'var(--primary)', filter: 'blur(100px)', opacity: 0.3, borderRadius: '50%' }}></div>
      <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '400px', height: '400px', background: 'var(--secondary)', filter: 'blur(100px)', opacity: 0.3, borderRadius: '50%' }}></div>
      
      <Container style={{ zIndex: 1 }}>
        <Row className="align-items-center">
          <Col md={7}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1rem', background: 'linear-gradient(to right, var(--primary), var(--secondary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Olá sou Nikolas Lima! Bem-vindo ao meu portfólio!
              </h1>
              <h2 style={{ fontSize: '1.5rem', color: 'var(--text-light)', fontWeight: 500, marginBottom: '1.5rem' }}>
                Sou desenvolvedor de software e estudante de engenharia de software no IFSP.
              </h2>
              <Link to="projetos" smooth={true} duration={500}>
                <Button variant="primary" size="lg" style={{ background: 'var(--primary)', border: 'none', padding: '12px 30px', fontWeight: 600, borderRadius: '30px', boxShadow: '0 4px 15px rgba(65, 105, 225, 0.4)' }}>
                  Ver Projetos
                </Button>
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
