import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navbar';
import Home from './components/Home';
import Sobre from './components/Sobre';
import Habilidades from './components/Habilidades';
import Projetos from './components/Projetos';
import Contato from './components/Contato';
import Footer from './components/Footer';
import AudioPlayer from './components/AudioPlayer';

import GlobalParticles from './components/GlobalParticles';

import { motion } from 'framer-motion';

function App() {
  return (
    <>
      {/* 1. Barra de decoração permanente no topo */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          height: '5px',
          background: 'linear-gradient(90deg, var(--primary), var(--secondary))',
          zIndex: 999999,
          boxShadow: '0 0 15px var(--primary)'
        }}
      />
      <Navigation />
      <main style={{ position: 'relative', overflowX: 'hidden' }}>
        <GlobalParticles />
        <Home />
        <Sobre />
        <Habilidades />
        <Projetos />
        <Contato />
      </main>
      <Footer />
      <AudioPlayer />
    </>
  );
}

export default App;
