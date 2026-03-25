import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaGlobe } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Contato = () => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);
  const website = "nikolasdev.com.br";
  const email = "nikolas.lima.dev@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contato">
      <Container>
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-5"
        >
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>{t('contato.title')}</h2>
          <div style={{ width: '60px', height: '4px', background: 'var(--secondary)', margin: '0 auto', borderRadius: '2px' }}></div>
          <p style={{ marginTop: '1.5rem', color: 'var(--text-muted)' }}>
            {t('contato.description')}
          </p>
        </motion.div>

        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass p-5 text-center"
              style={{ borderRadius: '20px' }}
            >
              <div className="d-flex justify-content-center gap-4 mb-4">
                <a href="https://www.linkedin.com/in/nikolas-lima-2ba2b53a4/" target="_blank" rel="noreferrer" style={{ color: 'var(--text-light)', fontSize: '2rem', transition: '0.3s' }}>
                  <FaLinkedin className="hover-icon" />
                </a>
                <a href="https://github.com/NikolasLima29" target="_blank" rel="noreferrer" style={{ color: 'var(--text-light)', fontSize: '2rem', transition: '0.3s' }}>
                  <FaGithub className="hover-icon" />
                </a>
                <a href={`https://${website}`} target="_blank" rel="noreferrer" style={{ color: 'var(--text-light)', fontSize: '2rem', transition: '0.3s' }}>
                  <FaGlobe className="hover-icon" />
                </a>
              </div>
              
              <div style={{ background: 'rgba(0,0,0,0.2)', padding: '15px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>{email}</span>
                <Button 
                  onClick={handleCopy}
                  variant={copied ? "success" : "outline-light"}
                  size="sm"
                >
                  {copied ? t('contato.copied') : t('contato.copy')}
                </Button>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contato;
