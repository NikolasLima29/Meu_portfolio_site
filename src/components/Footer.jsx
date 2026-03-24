import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer style={{ background: '#090e1a', padding: '30px 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <Container className="text-center">
        <p style={{ margin: 0, color: 'var(--text-muted)' }}>
          © {new Date().getFullYear()} Desenvolvido com React, Vite e Framer Motion. 
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
