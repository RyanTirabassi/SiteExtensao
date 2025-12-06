import React, { useState, useRef, useEffect } from 'react';
import StarfieldBackground from '../Git/StarfieldBackground';
import Navbar from '../components/Navbar';
import './demo.css';
import logoGif from '../img/Logo.gif';
import videoFile from '../img/Extensao.mp4';

const DemoPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isTheaterMode, setIsTheaterMode] = useState(false);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef(null);
  const controlsTimeoutRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateTime = () => setCurrentTime(video.currentTime);
    const updateDuration = () => setDuration(video.duration);
    const handleEnded = () => {
      setIsPlaying(false);
      setIsTheaterMode(false);
    };

    video.addEventListener('timeupdate', updateTime);
    video.addEventListener('loadedmetadata', updateDuration);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('timeupdate', updateTime);
      video.removeEventListener('loadedmetadata', updateDuration);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  const handleMouseMove = () => {
    if (isPlaying) {
      setShowControls(true);
      
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
      
      controlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false);
      }, 3000);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
        if (!isTheaterMode) {
          setIsTheaterMode(true);
        }
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleProgressClick = (e) => {
    const progressBar = e.currentTarget;
    const rect = progressBar.getBoundingClientRect();
    const clickPosition = (e.clientX - rect.left) / rect.width;
    const newTime = clickPosition * duration;
    if (videoRef.current) {
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      setIsMuted(newVolume === 0);
    }
  };

  const formatTime = (time) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const toggleTheaterMode = () => {
    setIsTheaterMode(!isTheaterMode);
  };

  return (
    <>
      <Navbar />
      <div className={`demo-page ${isTheaterMode ? 'theater-mode' : ''}`}>
        <div className="demo-content">
          <div className="demo-container">
            {/* Header com Logo - Oculto no modo teatro */}
            {!isTheaterMode && (
              <div className="demo-header">
                <div>
                  <h1 className="demo-title">Demonstração em Vídeo</h1>
                  <p className="demo-subtitle">
                    Acompanhe todo o fluxo de deploy automático, desde o commit até a aplicação em produção. 
                    Veja como GitHub Actions e Vercel trabalham juntos para entregar código com confiança.
                  </p>
                </div>
                <img src={logoGif} alt="Logo Deploy Automático" className="demo-logo" />
              </div>
            )}

            {/* Video Section */}
            <div className={`video-section ${isTheaterMode ? 'theater-active' : ''}`}>
              <div className="video-wrapper">
                <div className="video-inner">
                  <div 
                    className="video-box"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={() => isPlaying && setShowControls(false)}
                  >
                    {/* Video Element */}
                    <video
                      ref={videoRef}
                      className="video-element"
                      onClick={togglePlay}
                    >
                      <source src={videoFile} type="video/mp4" />
                      Seu navegador não suporta o elemento de vídeo.
                    </video>

                    {/* Play Button Overlay */}
                    {!isPlaying && (
                      <div className="video-placeholder" onClick={togglePlay}>
                        <div className="play-button">
                          <span className="play-icon">▶</span>
                        </div>
                        <p className="video-text">Clique para assistir a demonstração completa</p>
                      </div>
                    )}

                    {/* Video Controls */}
                    {isPlaying && (
                      <div className={`video-controls ${showControls ? 'show' : 'hide'}`}>
                        {/* Progress Bar */}
                        <div className="progress-container" onClick={handleProgressClick}>
                          <div className="progress-bar">
                            <div 
                              className="progress-fill"
                              style={{ width: `${(currentTime / duration) * 100}%` }}
                            />
                          </div>
                        </div>

                        {/* Control Buttons */}
                        <div className="controls-row">
                          <div className="controls-left">
                            <button onClick={togglePlay} className="control-button" title="Play/Pause">
                              {isPlaying ? '⏸' : '▶'}
                            </button>
                            
                            <button onClick={toggleMute} className="control-button" title="Mute/Unmute">
                              {isMuted || volume === 0 ? '🔇' : volume < 0.5 ? '🔉' : '🔊'}
                            </button>
                            
                            <input
                              type="range"
                              min="0"
                              max="1"
                              step="0.01"
                              value={volume}
                              onChange={handleVolumeChange}
                              className="volume-slider"
                              title="Volume"
                            />
                            
                            <span className="time-display">
                              {formatTime(currentTime)} / {formatTime(duration)}
                            </span>
                          </div>

                          <div className="controls-right">
                            <button 
                              onClick={toggleTheaterMode} 
                              className="control-button"
                              title={isTheaterMode ? "Sair do Modo Teatro" : "Modo Teatro"}
                            >
                              {isTheaterMode ? '🖥️' : '📺'}
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Code Preview - Oculto no modo teatro */}
            {!isTheaterMode && (
              <>
                <div className="code-preview-section">
                  <h2 className="section-title">Pipeline CI/CD em Ação</h2>
                  <div className="code-preview">
                    <span className="code-line"><span className="code-keyword">name:</span> <span className="code-string">"Deploy Automático"</span></span>
                    <span className="code-line"><span className="code-keyword">on:</span> [push]</span>
                    <span className="code-line"></span>
                    <span className="code-line"><span className="code-keyword">jobs:</span></span>
                    <span className="code-line">  <span className="code-keyword">build-and-deploy:</span></span>
                    <span className="code-line">    <span className="code-keyword">runs-on:</span> ubuntu-latest</span>
                    <span className="code-line">    <span className="code-keyword">steps:</span></span>
                    <span className="code-line">      - <span className="code-keyword">uses:</span> <span className="code-string">actions/checkout@v3</span></span>
                    <span className="code-line">      - <span className="code-keyword">run:</span> <span className="code-string">npm install && npm run build</span></span>
                    <span className="code-line">      - <span className="code-keyword">uses:</span> <span className="code-string">amondnet/vercel-action@master</span></span>
                  </div>
                </div>

                {/* Stats */}
                <div className="stats-section">
                  <div className="stat-card">
                    <div className="stat-number">10seg</div>
                    <div className="stat-label">Tempo de Deploy</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-number">100%</div>
                    <div className="stat-label">Automação</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-number">∞</div>
                    <div className="stat-label">Escalabilidade</div>
                  </div>
                </div>

                {/* CTA */}
                <div className="cta-section">
                  <h2 className="cta-title">Pronto para automatizar seu workflow?</h2>
                  <p className="cta-text">
                    Configure uma vez e nunca mais se preocupe com deploys manuais. 
                    Deixe a automação trabalhar para você.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <StarfieldBackground />
    </>
  );
};

export default DemoPage;