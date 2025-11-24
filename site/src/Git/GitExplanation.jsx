import React from 'react';
import StarfieldBackground from './StarfieldBackground';
import Navbar from '../components/Navbar';
import './gitexplanation.css';

const GitExplanation = () => {
  return (
    <>
      <Navbar />
      <div className="git-page">
        <StarfieldBackground />
        
        <div className="git-content">
          <div className="git-container">
            <h1 className="git-title">O que é Git?</h1>
            
            <div className="git-section">
              <h2>Definição</h2>
              <p>
                Git é um <strong>sistema de controle de versão distribuído</strong> gratuito e de código aberto, 
                projetado para lidar com projetos de qualquer tamanho com velocidade e eficiência. Criado por 
                Linus Torvalds em 2005, o Git se tornou a ferramenta padrão da indústria para versionamento de código.
              </p>
            </div>

            <div className="git-section">
              <h2>Para que serve?</h2>
              <p>
                O Git permite que desenvolvedores:
              </p>
              <ul>
                <li><strong>Rastreiem mudanças</strong> no código ao longo do tempo</li>
                <li><strong>Colaborem</strong> com outros desenvolvedores sem conflitos</li>
                <li><strong>Revertam</strong> para versões anteriores quando necessário</li>
                <li><strong>Criem branches</strong> para experimentar novas funcionalidades</li>
                <li><strong>Mantenham um histórico completo</strong> de todas as modificações</li>
              </ul>
            </div>

            <div className="git-section">
              <h2>Conceitos Principais</h2>
              
              <div className="concept">
                <h3>📁 Repository (Repositório)</h3>
                <p>
                  Um repositório é o "container" onde seu projeto vive. Ele contém todos os arquivos 
                  e o histórico completo de mudanças.
                </p>
              </div>

              <div className="concept">
                <h3>💾 Commit</h3>
                <p>
                  Um commit é um "snapshot" do seu projeto em um determinado momento. Cada commit 
                  guarda as mudanças feitas e possui uma mensagem descritiva.
                </p>
              </div>

              <div className="concept">
                <h3>🌿 Branch</h3>
                <p>
                  Branches são ramificações do código que permitem desenvolver funcionalidades 
                  isoladamente sem afetar o código principal (geralmente chamado de "main" ou "master").
                </p>
              </div>

              <div className="concept">
                <h3>🔀 Merge</h3>
                <p>
                  Merge é o processo de integrar mudanças de uma branch para outra, combinando 
                  diferentes linhas de desenvolvimento.
                </p>
              </div>

              <div className="concept">
                <h3>☁️ Remote (Remoto)</h3>
                <p>
                  Um repositório remoto é uma versão do seu projeto hospedada na internet ou rede, 
                  como no GitHub, GitLab ou Bitbucket.
                </p>
              </div>

              <div className="concept">
                <h3>⬇️ Pull / ⬆️ Push</h3>
                <p>
                  <strong>Pull</strong> baixa mudanças do repositório remoto para o local.<br/>
                  <strong>Push</strong> envia suas mudanças locais para o repositório remoto.
                </p>
              </div>
            </div>

            <div className="git-section">
              <h2>Por que usar Git?</h2>
              <div className="benefits">
                <div className="benefit-card">
                  <span className="benefit-icon">⚡</span>
                  <h4>Velocidade</h4>
                  <p>Operações locais extremamente rápidas</p>
                </div>
                <div className="benefit-card">
                  <span className="benefit-icon">🔒</span>
                  <h4>Segurança</h4>
                  <p>Integridade criptográfica do histórico</p>
                </div>
                <div className="benefit-card">
                  <span className="benefit-icon">🤝</span>
                  <h4>Colaboração</h4>
                  <p>Trabalho simultâneo sem conflitos</p>
                </div>
                <div className="benefit-card">
                  <span className="benefit-icon">📊</span>
                  <h4>Histórico</h4>
                  <p>Rastreamento completo de mudanças</p>
                </div>
              </div>
            </div>

            <div className="git-section git-footer">
              <p className="footer-text">
                Git é essencial para desenvolvimento moderno de software e é usado por milhões 
                de desenvolvedores em todo o mundo. 🌍
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GitExplanation;