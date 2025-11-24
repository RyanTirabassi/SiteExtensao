import React, { useState } from 'react';
import StarfieldBackground from '../Git/StarfieldBackground';
import Navbar from '../components/Navbar';
import './getting-started.css';

const GettingStarted = () => {
  const [expandedStep, setExpandedStep] = useState(0);

  const steps = [
    {
      title: "Pré-requisitos",
      icon: "✓",
      content: "Você precisa ter: Node.js, Git instalados e uma conta no GitHub e Vercel",
      details: [
        "Node.js 16+ e npm",
        "Git instalado e configurado",
        "Conta GitHub (gratuita)",
        "Conta Vercel (gratuita)"
      ]
    },
    {
      title: "Criar um Repositório",
      icon: "📁",
      content: "Configure seu repositório no GitHub com a estrutura básica",
      details: [
        "Crie novo repo no GitHub",
        "Clone para seu computador",
        "Inicialize um projeto React (Vite)",
        "Faça o primeiro commit"
      ]
    },
    {
      title: "Conectar ao Vercel",
      icon: "🚀",
      content: "Integre seu repositório com a plataforma de deploy",
      details: [
        "Acesse vercel.com e faça login",
        "Clique em 'New Project'",
        "Selecione seu repositório GitHub",
        "Configure variáveis de ambiente"
      ]
    },
    {
      title: "Criar Workflow GitHub Actions",
      icon: "⚙️",
      content: "Configure o pipeline de CI/CD automatizado",
      details: [
        "Crie pasta .github/workflows",
        "Adicione arquivo deploy.yml",
        "Configure steps: checkout, build, deploy",
        "Faça commit da configuração"
      ]
    },
    {
      title: "Testar Automação",
      icon: "✅",
      content: "Valide que tudo está funcionando corretamente",
      details: [
        "Faça uma alteração pequena no código",
        "Faça push da alteração",
        "Acompanhe o workflow no GitHub",
        "Verifique o deploy no Vercel"
      ]
    }
  ];

  return (
    <>
      <Navbar />
      <div className="getting-started-content">
        <div className="getting-started-container">
          {/* Header */}
          <div className="gs-header">
            <h1 className="gs-title">🚀 Requisitos</h1>
            <p className="gs-subtitle">
              Siga este guia passo a passo para configurar seu pipeline de CI/CD automatizado. 
              Em poucos minutos, você terá deploy automático funcionando.
            </p>
          </div>

          {/* Timeline Steps */}
          <div className="gs-timeline">
            <div className="gs-steps-container">
              {steps.map((step, idx) => (
                <div key={idx} className="gs-step-group">
                  {/* Step Card */}
                  <button
                    onClick={() => setExpandedStep(expandedStep === idx ? -1 : idx)}
                    className="gs-step-card"
                  >
                    <div className="gs-step-header">
                      <div className="gs-step-content">
                        <div className="gs-step-number">{idx + 1}</div>
                        <div>
                          <h3 className="gs-step-title">{step.title}</h3>
                          <p className="gs-step-desc">{step.content}</p>
                        </div>
                      </div>
                      <div className={`gs-chevron ${expandedStep === idx ? 'rotated' : ''}`}>
                        ↓
                      </div>
                    </div>
                  </button>

                  {/* Expanded Details */}
                  {expandedStep === idx && (
                    <div className="gs-step-details">
                      {step.details.map((detail, i) => (
                        <div key={i} className="gs-detail-item">
                          <span className="gs-check">✓</span>
                          <span className="gs-detail-text">{detail}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Code Example Section */}
          <div className="gs-code-section">
            <h2 className="gs-section-title">📝 Arquivo deploy.yml</h2>
            <div className="gs-code-block">
              <pre className="gs-code-content">{`name: Deploy Automático

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install & Build
        run: npm install && npm run build
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@master
        with:
          vercel-token: \${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: \${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: \${{ secrets.VERCEL_PROJECT_ID }}`}</pre>
            </div>
          </div>

          {/* Tips Section */}
          <div className="gs-tips-section">
            <h2 className="gs-section-title">💡 Dicas Importantes</h2>
            <div className="gs-tips-grid">
              <div className="gs-tip-card gs-tip-blue">
                <h3 className="gs-tip-title">Secrets</h3>
                <p className="gs-tip-text">
                  Sempre use GitHub Secrets para tokens. Nunca commite credenciais no código!
                </p>
              </div>
              <div className="gs-tip-card gs-tip-green">
                <h3 className="gs-tip-title">Primeira Vez?</h3>
                <p className="gs-tip-text">
                  Pode levar 2-3 minutos no primeiro deploy. Próximos são mais rápidos!
                </p>
              </div>
              <div className="gs-tip-card gs-tip-purple">
                <h3 className="gs-tip-title">Erro? Sem Pânico!</h3>
                <p className="gs-tip-text">
                  Verifique os logs no GitHub Actions. A maioria dos erros tem soluções simples.
                </p>
              </div>
              <div className="gs-tip-card gs-tip-orange">
                <h3 className="gs-tip-title">Próximo Passo</h3>
                <p className="gs-tip-text">
                  Após configurar, estude templates mais complexos e customize seu workflow!
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="gs-cta-section">
            <h2 className="gs-cta-title">Pronto para começar?</h2>
            <p className="gs-cta-text">
              Siga os passos acima e seu deploy automático estará funcionando em minutos!
            </p>
            <div className="gs-cta-buttons">
              <button className="gs-btn gs-btn-primary">
                Ir para Documentação
              </button>
              <button className="gs-btn gs-btn-secondary">
                Ver Templates
              </button>
            </div>
          </div>
        </div>
      </div>
      <StarfieldBackground />
    </>
  );
};

export default GettingStarted;

