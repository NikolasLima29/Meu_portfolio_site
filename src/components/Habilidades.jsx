import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, 
  FaDatabase, FaJava, FaAndroid, 
  FaGamepad, FaLaptopCode, FaChevronDown, FaChevronUp 
} from 'react-icons/fa';
import { SiKotlin, SiLaragon } from 'react-icons/si';
import { TbBrandBootstrap } from 'react-icons/tb';

import { useTranslation } from 'react-i18next';

const habilidadesPratica = [
  { name: 'HTML5', icon: <FaHtml5 size={40} color="#E34F26" />, desc: { pt: 'Aprendido nas disciplinas de Programação Web 1, 2 e 3 na ETEC. Utilizado ativamente para estruturar páginas web e projetos práticos.', en: 'Learned heavily during Web Development classes at ETEC. Actively used to structure interfaces and practical DOM mockups.', es: 'Aprendido arduamente en las clases de Programación Web en ETEC. Utilizado activamente para estructurar bases gráficas en proyectos.' } },
  { name: 'CSS3', icon: <FaCss3Alt size={40} color="#1572B6" />, desc: { pt: 'Desenvolvido junto ao HTML na ETEC para design de interfaces. Reforçado recentemente com estilizações modernas neste portfólio.', en: 'Developed alongside HTML at ETEC for UI alignments. Reinforced recently with modern aesthetic styling in this portfolio.', es: 'Desarrollado de la mano con HTML para los diseños de UI de interfaces frontales. Reforzado con este portafolio.' } },
  { name: 'PHP', icon: <FaPhp size={40} color="#777BB4" />, desc: { pt: 'Aprendido em Programação Web na ETEC. Utilizado no back-end para processamento de rotas e conexão com banco de dados MySQL, como no meu projeto FWS.', en: 'Learned fundamentally at ETEC. Used on the backend for routing ecosystems and establishing MySQL connections on my FWS project.', es: 'Aprendido en Desarrollo Web ETEC. Aplicado sólidamente a lo largo del backend del proyecto FWS interactuando con conexiones MySQL.' } },
  { name: 'JavaScript', icon: <FaJs size={40} color="#F7DF1E" />, desc: { pt: 'Estudado ao longo do curso técnico na ETEC e no BMS. Fundamental nas minhas aplicações web para trazer interatividade dinâmica aos sites.', en: 'Studied profoundly throughout my ETEC and BMS degrees. Essential framework in my skillset designed to bring dynamic web interactivity to life.', es: 'Estudiado profundamente en ETEC y BMS. Framework de base dentro de nuestro flujo para aportar una robusta interactividad web virtual.' } },
  { name: 'React', icon: <FaReact size={40} color="#61DAFB" />, desc: { pt: 'Estudado por conta própria buscando inovação. Minha primeira grande experiência prática utilizando esta tecnologia e bibliotecas derivadas foi no desenvolvimento deste portfólio.', en: 'Self-taught seeking market innovation. My very first massive practical experience crafting and deploying SPA applications using this library was this portfolio.', es: 'Aprendiendo React de forma autodidacta centrándome en la innovación. El producto de mi primer contacto real y fundamental con bibliotecas de render avanzado es este sitio.' } },
  { name: 'Bootstrap', icon: <TbBrandBootstrap size={40} color="#7952B3" />, desc: { pt: 'Ferramenta chave adotada para facilitar e agilizar estruturação HTML/CSS responsiva dos meus projetos web e deste portfólio.', en: 'Key visual tool adopted to massively quicken responsive scaling on my web products and this responsive application as well.', es: 'Framework estético crucial en las aplicaciones implementadas para el escalado frontal generalizado y la garantía responsiva total.' } },
  { name: 'MySQL', icon: <FaDatabase size={40} color="#4479A1" />, desc: { pt: 'Aprofundado nas matérias de Banco de Dados 1 e 2 na ETEC. Usado intensamente para modelar e gerenciar bases de dados e relacionamentos em projetos como o FWS.', en: 'Deepened via Database Systems 1 and 2. Applied intensely to model ERDs alongside data handling on academic capstones like the FWS.', es: 'Profundizado en Base de Datos 1 y 2. Implementado para manejar esquemas globales dentro de sistemas TCC complejos incluyendo nuestro modelo FWS.' } },
  { name: 'Laragon', icon: <SiLaragon size={40} color="#00C1D5" />, desc: { pt: 'Utilizado como servidor local (localhost) para hospedar de forma ágil meus projetos em PHP e gerenciar a base do MySQL via Heidi/PhpMyAdmin na ETEC.', en: 'Used as an offline host testing suite to rapidly develop full-stack applications through PHP and MySQL servers via Heidi integrations.', es: 'Servidor local y entorno base usado virtualmente en modo aislado para implementar mis desarrollos web por medio de enrutamiento offline PHP/MySQL y terminales interactivos globales ETEC.' } }
];

const habilidadesContato = [
  { name: 'C# & Unity', icon: <FaGamepad size={40} color="#9B4993" />, desc: { pt: 'Estudado no curso BMS (Unity 2D/3D) e na ETEC (Windows Forms com Visual Studio), onde cheguei a desenvolver calculadoras e jogos de quiz focados em aprendizado lógico.', en: 'Touched during my BMS (Unity) and ETEC courses (C# forms). I developed calculation algorithms mapping basic object behaviors and quiz games.', es: 'Usado para resolver interacciones de forma práctica en diseño de juegos BMS (2D/3D) incluyendo calculadores lógicos en interfaces ETEC de manera directa en el paradigma de programación visual interactivo universal usando variables primitivas base sólidas generalizadas algorítmicas robustas.' } },
  { name: 'Java', icon: <FaJava size={40} color="#007396" />, desc: { pt: 'Linguagem base exigida durante a ETEC voltada inteiramente para exercícios matemáticos, lógica de programação raiz e os pilares de orientação a objetos.', en: 'Foundational baseline language strictly taught at ETEC targeted solely towards mathematical OOP problem-solving arrays.', es: 'Lenguaje fundamental impartido en ETEC dirigido directamente hacia algoritmos de base matemática resolviendo los pilares del diseño POO.' } },
  { name: 'Android Studio', icon: <FaAndroid size={40} color="#3DDC84" />, desc: { pt: 'Tive sólido contato na ETEC durante as aulas de Programação para Aplicativos Mobile 1 e 2, chegando a arquitetar e desenvolver protótipos de um aplicativo nativo.', en: 'Forged solid foundations via ETEC Mobile Development classes, architecting layouts and drafting preliminary mobile application mockups.', es: 'Aprendiendo un contacto robusto con la integración lógica/visual abstracta vía clases de Programación Móvil. Desarrollé bosquejos directos y prototipos de software nativos funcionales estructurales dinámicos visuales integrales programáticos teóricos conceptuales genéricos en ETEC.' } },
  { name: 'Kotlin', icon: <SiKotlin size={40} style={{ fill: "url(#kotlinGrad)" }} />, desc: { pt: 'Estudado no meu tempo dentro do curso externo BMS com o foco de aprimorar meus algoritmos e exercitar minha lógica de programação avançada.', en: 'Studied privately amidst my BMS bootcamp with the sole intention of grinding complex logical paradigms and solving algorithms.', es: 'Estudiado en mi entorno privado y campamentos BMS focalizando en resolver operaciones conceptuales en abstracción de arreglos resolutivos puramente lógicos formales.' } },
  { name: 'Redes & Infraestrutura', icon: <FaLaptopCode size={40} color="#AAAAAA" />, desc: { pt: 'Conhecimentos teóricos e práticos absorvidos na ETEC via matérias diversificadas como Internet, Protocolos e Segurança de Redes, Design Digital, Hardware e Sistemas Embarcados.', en: 'Broad theoretical frameworks absorbed via ETEC encompassing Internet protocols, Network Security, Hardware basics and general architectures.', es: 'Protocolos sólidos impartidos a través de la formación ETEC, asimilando conceptos sobre Arquitectura y Mantenimiento de Hardware.' } }
];

const Habilidades = () => {
  const { t, i18n } = useTranslation();
  const [expandedPratica, setExpandedPratica] = useState(null);
  const [expandedContato, setExpandedContato] = useState(null);

  const togglePratica = (index) => setExpandedPratica(expandedPratica === index ? null : index);
  const toggleContato = (index) => setExpandedContato(expandedContato === index ? null : index);

  const renderCards = (habilidades, expandedState, toggleFn) => {
    return (
      <Row className="justify-content-center align-items-start">
        {habilidades.map((skill, index) => (
          <Col xs={12} md={6} lg={4} className="mb-4" key={index}>
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3 }}
              whileHover={expandedState === index ? {} : { scale: 1.02, y: -5 }}
              className="glass p-4"
              style={{
                borderRadius: '20px',
                cursor: 'pointer',
                border: '1px solid rgba(139, 92, 246, 0.2)',
                backgroundColor: expandedState === index ? 'rgba(255, 255, 255, 0.1)' : 'rgba(20, 20, 20, 0.6)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}
              onClick={() => toggleFn(index)}
            >
              <div className="d-flex align-items-center">
                <div className="me-3">{skill.icon}</div>
                <h5 style={{ fontWeight: 600, margin: 0, flex: 1 }}>{skill.name}</h5>
                <div style={{ color: 'var(--primary)' }}>
                  {expandedState === index ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </div>

              <AnimatePresence>
                {expandedState === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <hr style={{ borderColor: 'rgba(255,255,255,0.2)', margin: '15px 0' }} />
                    <p style={{ color: '#ddd', fontSize: '0.95rem', margin: 0, lineHeight: '1.6' }}>
                      {skill.desc[i18n.language]}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </Col>
        ))}
      </Row>
    );
  };

  return (
    <section id="habilidades" style={{ position: 'relative', paddingTop: '80px', paddingBottom: '80px' }}>
      {/* SVG invisível para definir o Gradiente do Kotlin */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <linearGradient id="kotlinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7F52FF" />
          <stop offset="100%" stopColor="#E54857" />
        </linearGradient>
      </svg>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-5"
        >
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>{t('habilidades.title')}</h2>
          <div style={{ width: '60px', height: '4px', background: 'var(--secondary)', margin: '0 auto', borderRadius: '2px' }}></div>
          <p className="mt-3 text-light">{i18n.language === 'en' ? 'Below are the core technologies grounding my full-stack scaling logic. Click each card to uncover their practical appliances!' : 'Abaixo estão as tecnologias que formaram a minha base como desenvolvedor. Clique em cada uma para saber como as apliquei!'}</p>
        </motion.div>

        {/* Div: Tecnologias com mais prática */}
        <div className="mb-5">
          <h3 className="mb-4 text-center" style={{ color: 'var(--primary)', fontWeight: 'bold' }}>
            {t('habilidades.pratica')}
          </h3>
          {renderCards(habilidadesPratica, expandedPratica, togglePratica)}
        </div>

        {/* Div: Contato inicial */}
        <div className="mt-5 pt-4" style={{borderTop: '1px dashed rgba(255,255,255,0.1)'}}>
          <h3 className="mb-4 text-center mt-3" style={{ color: 'var(--secondary)', fontWeight: 'bold' }}>
            {t('habilidades.contato')}
          </h3>
          {renderCards(habilidadesContato, expandedContato, toggleContato)}
        </div>

      </Container>
    </section>
  );
};

export default Habilidades;
