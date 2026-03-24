import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import '../styles/animations.css';

const Navigation = () => {
  const [navBackground, setNavBackground] = useState('transparent');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setNavBackground('var(--bg-dark)');
      } else {
        setNavBackground('transparent');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar expand="lg" fixed="top" style={{ backgroundColor: navBackground, transition: '0.3s ease', borderBottom: navBackground === 'transparent' ? 'none' : '1px solid rgba(255,255,255,0.1)' }} variant="dark">
      <Container>
        <Navbar.Brand href="#home" style={{ fontWeight: 700, color: 'var(--primary)' }}>Nikolas Dev.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" style={{ gap: '1rem' }}>
            <Nav.Link as={Link} to="home" smooth={true} duration={500} style={{ cursor: 'pointer', color: '#ffffff' }}>Home</Nav.Link>
            <Nav.Link as={Link} to="sobre" smooth={true} duration={500} style={{ cursor: 'pointer', color: '#ffffff' }}>Sobre Mim</Nav.Link>
            <Nav.Link as={Link} to="habilidades" smooth={true} duration={500} style={{ cursor: 'pointer', color: '#ffffff' }}>Habilidades</Nav.Link>
            <Nav.Link as={Link} to="projetos" smooth={true} duration={500} style={{ cursor: 'pointer', color: '#ffffff' }}>Projetos</Nav.Link>
            <Nav.Link as={Link} to="contato" smooth={true} duration={500} style={{ cursor: 'pointer', color: '#ffffff' }}>Contato</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
