import React from 'react';
import StarfieldBackground from '../Git/StarfieldBackground';
import Navbar from '../components/Navbar';
import './demo.css';
import logoGif from '../img/Logo.gif';

const DemoPage = () => {
  return (
    <>
      <Navbar />
      <div className="demo-content">
        <div className="demo-container">
          {/* Header com Logo */}
          <div className="demo-header">
            <div>
              <h1 className="demo-title">Demonstração em Vídeo</h1>
              <p className="demo-subtitle">
                Acompanhe todo o fluxo de deployment automático, desde o commit até a aplicação em produção. 
                Veja como GitHub Actions e Vercel trabalham juntos para entregar código com confiança.
              </p>
            </div>
            <img src={logoGif} alt="Logo Deploy Automático" className="demo-logo" />
          </div>

          {/* Video Section */}
          <div className="video-section">
            <div className="video-wrapper">
              <div className="video-inner">
                <div className="video-box">
                  <div className="video-placeholder">
                    <div className="play-button">
                      <span className="play-icon">▶</span>
                    </div>
                    <p className="video-text">Clique para assistir a demonstração completa</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Code Preview */}
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
              <div className="stat-number">1min</div>
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
        </div>
      </div>
      <StarfieldBackground />
    </>
  );
};

export default DemoPage;