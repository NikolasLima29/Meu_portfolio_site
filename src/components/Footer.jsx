import React from 'react';
import { Container } from 'react-bootstrap';
import logoImg from '../assets/logo/logoN.png';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer style={{ background: '#090e1a', padding: '30px 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <Container className="text-center">
        <div style={{ marginBottom: '15px' }}>
          <img src={logoImg} alt="Nikolas Logo" style={{ height: '80px', opacity: 0.9 }} />
        </div>
        <p style={{ margin: 0, color: 'var(--text-muted)' }}>
          © {new Date().getFullYear()} {t('footer.credit')}
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
