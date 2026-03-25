import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Badge, Collapse, Carousel } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projectsData';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Projetos = () => {
  const { t, i18n } = useTranslation();
  const [expandedId, setExpandedId] = useState(null);

  const handleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
    if (expandedId !== id) {
      setTimeout(() => {
        document.getElementById('project-details-section').scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  };

  return (
    <section id="projetos" style={{ background: 'rgba(15, 23, 42, 0.5)' }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-5"
        >
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem', color: '#ffffff' }}>{t('projetos.title')}</h2>
          <div style={{ width: '60px', height: '4px', background: 'var(--primary)', margin: '0 auto', borderRadius: '2px' }}></div>
        </motion.div>

        <Row className="justify-content-center">
          {projectsData.map((project, index) => (
            <Col md={6} lg={4} className="mb-4" key={project.id}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                style={{ height: '100%' }}
              >
                  <Card className="glass text-white h-100" style={{ borderRadius: '15px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <div style={{ overflow: 'hidden' }}>
                      <motion.img
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        src={project.image}
                        alt={project.title}
                        style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                      />
                    </div>
                    <Card.Body className="d-flex flex-column p-4">
                      <Card.Title style={{ fontWeight: 700, fontSize: '1.4rem', color: 'var(--primary)' }}>{project.title[i18n.language]}</Card.Title>
                      <Card.Text style={{ color: 'var(--text-muted)' }}>
                        {project.description[i18n.language]}
                      </Card.Text>
                      <div className="mb-4">
                        {project.techs.map((tech, i) => (
                          <Badge pill bg="dark" style={{ border: '1px solid var(--primary)', marginRight: '5px', fontWeight: 500, padding: '8px 12px' }} key={i}>
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="mt-auto d-flex flex-column gap-2">
                        <Button onClick={() => handleExpand(project.id)} variant="outline-info" style={{ width: '100%', borderRadius: '10px' }}>
                          {expandedId === project.id ? t('projetos.hide') : t('projetos.more')}
                        </Button>
                        <div className="d-flex gap-2">
                          <Button href={project.github} target="_blank" variant="outline-light" style={{ width: '50%', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                            <FaGithub /> {t('projetos.github')}
                          </Button>
                          <Button href={project.demo} target="_blank" style={{ width: '50%', background: 'var(--primary)', border: 'none', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                            <FaExternalLinkAlt /> {t('projetos.demo')}
                          </Button>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* Seção Expansível de Detalhes do Projeto */}
        <Collapse in={expandedId !== null}>
          <div id="project-details-section" className="mt-5 glass p-4 p-md-5" style={{ borderRadius: '20px', border: '1px solid rgba(255,255,255,0.15)' }}>
            {projectsData.map((p) => {
              if (p.id !== expandedId) return null;
              return (
                <div key={`detail-${p.id}`} className="text-white">
                  <div className="d-flex flex-column align-items-center mb-4 text-center">
                    <h3 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary)' }}>{p.title[i18n.language]}</h3>
                    <Badge className="fs-6 mt-2" style={{ backgroundColor: '#2e8b57', padding: '8px 15px', borderRadius: '15px' }}>{p.nature?.[i18n.language] || 'Project'}</Badge>
                  </div>

                  {/* 2. Carrossel de Fotos */}
                  {p.carouselImages && p.carouselImages.length > 0 && (
                    <div className="mb-4 mx-auto" style={{ width: '55%', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
                      <Carousel>
                        {p.carouselImages.map((imgUrl, i) => (
                          <Carousel.Item key={i}>
                            <img
                              className="d-block w-100"
                              src={imgUrl}
                              alt={`${p.title} foto ${i + 1}`}
                              style={{ width: '100%', aspectRatio: '16/10', objectFit: 'cover', borderRadius: '15px' }}
                            />
                          </Carousel.Item>
                        ))}
                      </Carousel>
                    </div>
                  )}

                  <Row className="gy-5">
                    {/* 3. Descrição do Projeto */}
                    <Col md={6} className="d-flex flex-column pe-md-4">
                      <h4 style={{ color: 'var(--secondary)', fontWeight: 700 }} className="mb-3">{t('projetos.about')}</h4>
                      <div style={{ color: 'var(--text-light)', lineHeight: '1.8', textAlign: 'justify' }} dangerouslySetInnerHTML={{ __html: p.fullDescription[i18n.language] }} />
                      {p.descImage && (
                        <div className="mt-3 mt-auto align-self-center" style={{ width: '90%', borderRadius: '15px', overflow: 'hidden' }}>
                          {Array.isArray(p.descImage) ? (
                            <Carousel indicators={true} controls={true} interval={5000} style={{ borderRadius: '15px', overflow: 'hidden' }}>
                              {p.descImage.map((imgSrc, idx) => (
                                <Carousel.Item key={idx}>
                                  <img src={imgSrc} alt={`Descrição ${idx + 1}`} style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
                                </Carousel.Item>
                              ))}
                            </Carousel>
                          ) : (
                            <img src={p.descImage} alt="Descrição" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
                          )}
                        </div>
                      )}
                    </Col>

                    {/* 4. Desenvolvimento do Projeto */}
                    <Col md={6} className="d-flex flex-column border-start border-secondary ps-md-4" style={{ borderColor: 'rgba(255,255,255,0.1) !important' }}>
                      <h4 style={{ color: 'var(--secondary)', fontWeight: 700 }} className="mb-3">{t('projetos.dev')}</h4>
                      <div style={{ color: 'var(--text-light)', lineHeight: '1.8', textAlign: 'justify' }} dangerouslySetInnerHTML={{ __html: p.developmentProcess[i18n.language] }} />
                      {p.devImage && (
                        <div className="mt-3 mt-auto align-self-center" style={{ width: '90%', borderRadius: '15px', overflow: 'hidden' }}>
                          {Array.isArray(p.devImage) ? (
                            <Carousel indicators={true} controls={true} interval={5000} style={{ borderRadius: '15px', overflow: 'hidden' }}>
                              {p.devImage.map((imgSrc, idx) => (
                                <Carousel.Item key={idx}>
                                  <img src={imgSrc} alt={`Processo de desenvolvimento ${idx + 1}`} style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
                                </Carousel.Item>
                              ))}
                            </Carousel>
                          ) : (
                            <img src={p.devImage} alt="Processo de desenvolvimento" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
                          )}
                        </div>
                      )}
                    </Col>
                  </Row>

                  {/* 5. Ações (Github/Demo) na seção expandida */}
                  <div className="d-flex justify-content-center mt-5 gap-3">
                    <Button href={p.github} target="_blank" variant="outline-light" size="lg" style={{ borderRadius: '15px', display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 30px' }}>
                      <FaGithub /> {t('projetos.github')}
                    </Button>
                    <Button 
                      href={p.demo} 
                      target="_blank" 
                      variant="primary" 
                      size="lg" 
                      onClick={() => window.dispatchEvent(new Event('pausePortfolioAudio'))}
                      style={{ background: 'var(--primary)', border: 'none', borderRadius: '15px', display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 30px' }}
                    >
                      <FaExternalLinkAlt /> {t('projetos.demo')}
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </Collapse>
      </Container>
    </section>
  );
};

export default Projetos;
