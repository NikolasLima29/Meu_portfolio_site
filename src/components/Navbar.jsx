import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import '../styles/animations.css';
import logoImg from '../assets/logo/logoN.png';
import { useTranslation } from 'react-i18next';

const Navigation = () => {
  const { t, i18n } = useTranslation();
  const [navBackground, setNavBackground] = useState('transparent');
  const [langHover, setLangHover] = useState(false);

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
        <Navbar.Brand href="#home" style={{ display: 'flex', alignItems: 'center' }}>
          <img src={logoImg} alt="Nikolas Lima Logo" style={{ height: '65px', width: 'auto' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" style={{ gap: '1rem', alignItems: 'center' }}>
            <Nav.Link as={Link} to="home" smooth={true} duration={500} className="nav-link-custom" style={{ cursor: 'pointer' }}>{t('navbar.home')}</Nav.Link>
            <Nav.Link as={Link} to="sobre" smooth={true} duration={500} className="nav-link-custom" style={{ cursor: 'pointer' }}>{t('navbar.sobre')}</Nav.Link>
            <Nav.Link as={Link} to="habilidades" smooth={true} duration={500} className="nav-link-custom" style={{ cursor: 'pointer' }}>{t('navbar.habilidades')}</Nav.Link>
            <Nav.Link as={Link} to="projetos" smooth={true} duration={500} className="nav-link-custom" style={{ cursor: 'pointer' }}>{t('navbar.projetos')}</Nav.Link>
            <Nav.Link as={Link} to="contato" smooth={true} duration={500} className="nav-link-custom" style={{ cursor: 'pointer' }}>{t('navbar.contato')}</Nav.Link>
            
            {/* Language Toggle Dropdown */}
            <div 
              onMouseEnter={() => setLangHover(true)}
              onMouseLeave={() => setLangHover(false)}
              style={{ position: 'relative', marginLeft: '10px' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', background: 'rgba(255,255,255,0.1)', padding: '5px 12px', borderRadius: '20px', transition: '0.3s' }}>
                <img 
                  src={i18n.language === 'en' ? "https://flagcdn.com/w20/us.png" : i18n.language === 'es' ? "https://flagcdn.com/w20/es.png" : "https://flagcdn.com/w20/br.png"} 
                  width="20" 
                  alt="flag" 
                  style={{ marginRight: '8px', borderRadius: '2px' }} 
                />
                <span style={{ color: '#fff', fontWeight: 600, fontSize: '0.9rem' }}>
                  {i18n.language === 'en' ? 'ENG' : i18n.language === 'es' ? 'ESP' : 'PT-BR'}
                </span>
                <FaChevronDown style={{ marginLeft: '6px', color: '#fff', fontSize: '0.8rem', transition: 'transform 0.3s', transform: langHover ? 'rotate(180deg)' : 'none' }} />
              </div>
              
              <AnimatePresence>
                {langHover && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    style={{ position: 'absolute', top: '100%', right: 0, marginTop: '8px', background: 'var(--bg-dark)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '15px', padding: '8px', display: 'flex', flexDirection: 'column', gap: '5px', minWidth: '120px', zIndex: 1000 }}
                  >
                    {[
                      { code: 'pt', label: 'PT-BR', flag: 'br' },
                      { code: 'en', label: 'ENG', flag: 'us' },
                      { code: 'es', label: 'ESP', flag: 'es' }
                    ].filter(l => l.code !== i18n.language).map(lang => (
                      <div 
                        key={lang.code}
                        onClick={() => {
                          i18n.changeLanguage(lang.code);
                          setLangHover(false); // fecha o drowdown logo após o clique
                        }}
                        style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', padding: '8px 12px', borderRadius: '10px', transition: 'background 0.2s', color: '#fff' }}
                        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                        onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                      >
                        <img src={`https://flagcdn.com/w20/${lang.flag}.png`} width="20" alt="flag" style={{ marginRight: '8px', borderRadius: '2px' }} />
                        <span style={{ fontWeight: 500, fontSize: '0.9rem' }}>{lang.label}</span>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
