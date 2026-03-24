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

function App() {
  return (
    <>
      <Navigation />
      <main>
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
