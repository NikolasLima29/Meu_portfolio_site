import React, { useState, useEffect, useRef } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlay, FaPause, FaStepForward, FaStepBackward, FaMusic } from 'react-icons/fa';

const playlist = [
  { url: "/trilha/Consolation No. 2 in A-Flat Major-Yehezkel Raz.mp3", cover: "/trilha/consolation.png" },
  { url: "/trilha/Pt. 8_ Starry dream. (Slowed Down)-A. Blomqvist.mp3", cover: "/trilha/starry_dream.png" },
  { url: "/trilha/blurred_moon-daniel.mp3.mp3", cover: "/trilha/blurred.png" },
  { url: "/trilha/The_Snow_is_Melting-Ben_Crosland.mpeg", cover: "/trilha/Snow.jpg" }
];

const AudioPlayer = () => {
  const [showModal, setShowModal] = useState(false);
  const [permissionHandled, setPermissionHandled] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFullWidget, setShowFullWidget] = useState(false);

  const [trackInfo, setTrackInfo] = useState({ title: 'Carregando...', artist: '', cover: null });

  const audioRef = useRef(null);
  const hideTimeoutRef = useRef(null);

  // Helper to trigger the 4-second auto-hide
  const triggerAutoHide = () => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }
    setShowFullWidget(true);
    hideTimeoutRef.current = setTimeout(() => {
      setShowFullWidget(false);
    }, 4000);
  };

  useEffect(() => {
    // Show modal after 5 seconds
    const timer = setTimeout(() => {
      if (!permissionHandled) {
        setShowModal(true);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [permissionHandled]);

  // Global pause event listener for other components to trigger
  useEffect(() => {
    const handleGlobalPause = () => {
      if (isPlaying && audioRef.current) {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    };

    window.addEventListener('pausePortfolioAudio', handleGlobalPause);
    return () => window.removeEventListener('pausePortfolioAudio', handleGlobalPause);
  }, [isPlaying]);

  // Load track metadata whenever currentIndex changes
  useEffect(() => {
    const track = playlist[currentIndex];
    const absoluteUrl = window.location.origin + track.url;
    const fallback = getFilenameInfo(track.url);

    // Read tags setup
    const jsmediatags = window.jsmediatags;
    if (jsmediatags) {
      jsmediatags.read(absoluteUrl, {
        onSuccess: function (tag) {
          const tags = tag.tags || {};
          let coverUrl = null;

          if (tags.picture) {
            const { data, format } = tags.picture;
            const blob = new Blob([new Uint8Array(data)], { type: format });
            coverUrl = URL.createObjectURL(blob);
          }

          setTrackInfo({
            title: fallback.title,
            artist: fallback.artist,
            cover: track.cover
          });
        },
        onError: function (error) {
          console.warn('Erro ao ler tags do MP3:', error);
          setTrackInfo({
            title: fallback.title,
            artist: fallback.artist,
            cover: track.cover
          });
        }
      });
    } else {
      setTrackInfo({
        title: fallback.title,
        artist: fallback.artist,
        cover: track.cover
      });
    }

    if (audioRef.current) {
      audioRef.current.src = track.url;
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play().catch(e => console.log('Autoplay prevent:', e));
      }
    }
  }, [currentIndex]);

  const getFilenameInfo = (path) => {
    try {
      const decodedPath = decodeURIComponent(path);
      const parts = decodedPath.split('/');
      let filename = parts[parts.length - 1].replace(/\.(mp3|mpeg)/g, '').trim();
      let title = filename;
      let artist = 'Desconhecido';
      if (filename.includes('-')) {
        const partsDash = filename.split('-');
        artist = partsDash.pop().trim().replace(/_/g, ' ');
        title = partsDash.join('-').trim();
      }

      // Clean up title and artist removing underscores and unnecessary hyphens
      title = title.replace(/[_-]/g, ' ').replace(/\s+/g, ' ').trim();
      artist = artist.replace(/[_-]/g, ' ').replace(/\s+/g, ' ').trim();

      return { title, artist };
    } catch {
      return { title: 'Música', artist: 'Desconhecido' };
    }
  };

  const handleAccept = () => {
    setShowModal(false);
    setPermissionHandled(true);

    // Choose random track
    const randomIdx = Math.floor(Math.random() * playlist.length);
    setCurrentIndex(randomIdx);
    setIsPlaying(true);

    if (audioRef.current) {
      audioRef.current.volume = 0.16;
      audioRef.current.src = playlist[randomIdx].url;
      audioRef.current.play().catch(e => console.log('Autoplay prevent:', e));
    }

    triggerAutoHide();
  };

  const handleDecline = () => {
    setShowModal(false);
    setPermissionHandled(true);
    triggerAutoHide();
  };

  const togglePlay = (e) => {
    e.stopPropagation();
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.log('Autoplay prevent:', e));
    }
    setIsPlaying(!isPlaying);
    triggerAutoHide();
  };

  const nextTrack = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % playlist.length);
    setIsPlaying(true);
    triggerAutoHide();
  };

  const prevTrack = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
    setIsPlaying(true);
    triggerAutoHide();
  };

  const handleAudioEnded = () => {
    nextTrack({ stopPropagation: () => { } });
  };

  return (
    <>
      <audio
        ref={audioRef}
        onEnded={handleAudioEnded}
      // No loop, when it ends it goes to next
      />

      <Modal show={showModal} onHide={handleDecline} centered contentClassName="text-white" style={{ backdropFilter: 'blur(5px)' }}>
        <div style={{ backgroundColor: 'var(--primary)', borderRadius: '8px' }}>
          <Modal.Header border="none" style={{ borderBottom: '1px solid rgba(255,255,255,0.2)' }}>
            <Modal.Title style={{ color: 'white', fontWeight: 700 }}>Trilha Sonora</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Gostaria de escutar músicas ambiente enquanto visualiza o portfólio?</p>
          </Modal.Body>
          <Modal.Footer border="none" style={{ borderTop: 'none' }}>
            <Button variant="danger" onClick={handleDecline} style={{ fontWeight: 600 }}>Não, muito obrigado!</Button>
            <Button variant="light" onClick={handleAccept} style={{ fontWeight: 600, color: 'var(--primary)' }}>Gostaria!</Button>
          </Modal.Footer>
        </div>
      </Modal>

      {permissionHandled && (
        <div style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: 1000 }}>
          <AnimatePresence mode="wait">
            {showFullWidget ? (
              <motion.div
                key="full-widget"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                transition={{ duration: 0.3 }}
                className="p-3 d-flex align-items-center gap-3"
                style={{ borderRadius: '15px', width: '300px', backgroundColor: 'var(--primary)', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.2)' }}
                onMouseEnter={triggerAutoHide}
              >
                <div style={{ width: '60px', height: '60px', borderRadius: '10px', overflow: 'hidden', background: 'rgba(255,255,255,0.1)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {trackInfo.cover ? (
                    <img src={trackInfo.cover} alt="Capa" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <FaMusic size={24} color="gray" />
                  )}
                </div>

                <div style={{ flex: 1, overflow: 'hidden' }}>
                  <h6 className="mb-0 text-truncate text-white" style={{ fontSize: '0.9rem', fontWeight: 600 }}>{trackInfo.title}</h6>
                  <small className="text-white text-truncate d-block" style={{ fontSize: '0.75rem' }}>{trackInfo.artist}</small>

                  <div className="d-flex align-items-center justify-content-between mt-2">
                    <button onClick={prevTrack} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}><FaStepBackward size={12} /></button>
                    <button onClick={togglePlay} style={{ background: 'transparent', border: '1px solid white', color: 'white', borderRadius: '50%', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                      {isPlaying ? <FaPause size={10} /> : <FaPlay size={10} style={{ marginLeft: '2px' }} />}
                    </button>
                    <button onClick={nextTrack} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}><FaStepForward size={12} /></button>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="mini-widget"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.3 }}
                onClick={triggerAutoHide}
                onMouseEnter={triggerAutoHide}
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: 'var(--primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 5px 15px rgba(65, 105, 225, 0.5)'
                }}
              >
                <FaMusic color="white" size={20} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </>
  );
};

export default AudioPlayer;
