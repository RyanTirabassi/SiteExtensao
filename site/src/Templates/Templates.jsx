import React, { useState } from 'react';
import StarfieldBackground from '../Git/StarfieldBackground';
import Navbar from '../components/Navbar';
import './templates.css';

const Templates = () => {
  const [copiedId, setCopiedId] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('frameworks');
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const templates = {
    frameworks: [
      {
        id: 1,
        name: 'React + Vite',
        icon: '⚛️',
        description: 'Pipeline otimizado para React com Vite',
        code: `name: Deploy React Vite

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
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run tests
        run: npm run test
      
      - name: Build project
        run: npm run build
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@master
        with:
          vercel-token: \${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: \${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: \${{ secrets.VERCEL_PROJECT_ID }}`
      },
      {
        id: 2,
        name: 'Vue 3',
        icon: '💚',
        description: 'Pipeline para Vue 3 com build otimizado',
        code: `name: Deploy Vue 3

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
      
      - name: Install dependencies
        run: npm install
      
      - name: Build Vue app
        run: npm run build
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@master
        with:
          vercel-token: \${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: \${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: \${{ secrets.VERCEL_PROJECT_ID }}`
      },
      {
        id: 3,
        name: 'Next.js',
        icon: '⬛',
        description: 'Pipeline completo para Next.js com SSR',
        code: `name: Deploy Next.js

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
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run linter
        run: npm run lint
      
      - name: Build Next.js
        run: npm run build
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@master
        with:
          vercel-token: \${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: \${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: \${{ secrets.VERCEL_PROJECT_ID }}`
      }
    ],
    hosting: [
      {
        id: 4,
        name: 'Deploy Vercel',
        icon: '▲',
        description: 'Configuração nativa para Vercel',
        code: `name: Deploy Vercel

on:
  push:
    branches: [main, develop]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Build
        run: npm run build
      
      - name: Deploy
        uses: amondnet/vercel-action@master
        with:
          vercel-token: \${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: \${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: \${{ secrets.VERCEL_PROJECT_ID }}`
      },
      {
        id: 5,
        name: 'Deploy Netlify',
        icon: '🔷',
        description: 'Integração com Netlify',
        code: `name: Deploy Netlify

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
      
      - name: Build
        run: npm run build
      
      - name: Deploy to Netlify
        uses: netlify/actions/cli@master
        with:
          args: deploy --prod --dir=dist
        env:
          NETLIFY_AUTH_TOKEN: \${{ secrets.NETLIFY_TOKEN }}
          NETLIFY_SITE_ID: \${{ secrets.NETLIFY_SITE_ID }}`
      },
      {
        id: 6,
        name: 'Deploy AWS S3',
        icon: '🔶',
        description: 'Deploy estático para AWS S3',
        code: `name: Deploy AWS S3

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
      
      - name: Build
        run: npm run build
      
      - name: Deploy to S3
        uses: jakejarvis/s3-sync-action@master
        with:
          args: --acl public-read --follow-symlinks --delete
        env:
          AWS_S3_BUCKET: \${{ secrets.AWS_S3_BUCKET }}
          AWS_ACCESS_KEY_ID: \${{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: \${{ secrets.AWS_SECRET_ACCESS_KEY }}`
      }
    ],
    advanced: [
      {
        id: 7,
        name: 'Com Testes E2E',
        icon: '🧪',
        description: 'Pipeline com testes end-to-end (Cypress)',
        code: `name: Deploy com E2E Tests

on:
  push:
    branches: [main]

jobs:
  test-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Run Cypress tests
        uses: cypress-io/github-action@v5
        with:
          start: npm run dev
          browser: chrome
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@master
        with:
          vercel-token: \${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: \${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: \${{ secrets.VERCEL_PROJECT_ID }}`
      },
      {
        id: 8,
        name: 'Com Análise de Código',
        icon: '📊',
        description: 'Pipeline com SonarQube para qualidade',
        code: `name: Deploy com SonarQube

on:
  push:
    branches: [main]

jobs:
  analyze-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run ESLint
        run: npm run lint
      
      - name: SonarQube Scan
        uses: sonarsource/sonarcloud-github-action@master
        env:
          GITHUB_TOKEN: \${{ secrets.GITHUB_TOKEN }}
          SONAR_TOKEN: \${{ secrets.SONAR_TOKEN }}
      
      - name: Build
        run: npm run build
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@master
        with:
          vercel-token: \${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: \${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: \${{ secrets.VERCEL_PROJECT_ID }}`
      },
      {
        id: 9,
        name: 'Preview + Produção',
        icon: '🔄',
        description: 'Pipeline com preview branch e deploy produção',
        code: `name: Preview e Produção

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Build
        run: npm run build
      
      - name: Deploy Preview/Prod
        uses: amondnet/vercel-action@master
        with:
          vercel-token: \${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: \${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: \${{ secrets.VERCEL_PROJECT_ID }}
          scope: \${{ secrets.VERCEL_ORG_ID }}`
      }
    ]
  };

  const handleCopy = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const currentTemplates = templates[selectedCategory];

  return (
    <>
      <Navbar />
      <div className="templates-content">
        <div className="templates-container">
          {/* Header */}
          <div className="templates-header">
            <h1 className="templates-title">📋 Templates de Configuração</h1>
            <p className="templates-subtitle">
              Escolha um template pronto para copiar e customizar. Basta substituir os tokens e começar!
            </p>
          </div>

          {/* Category Tabs */}
          <div className="templates-tabs">
            {[
              { id: 'frameworks', label: '⚙️ Frameworks' },
              { id: 'hosting', label: '🚀 Hosting' },
              { id: 'advanced', label: '🎯 Avançado' }
            ].map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`templates-tab ${selectedCategory === category.id ? 'active' : ''}`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Templates Grid */}
          <div className="templates-grid-section">
            <div className="templates-grid">
              {currentTemplates.map(template => (
                <div key={template.id} className="template-card">
                  {/* Card Header */}
                  <div className="template-card-header">
                    <div className="template-icon">{template.icon}</div>
                    <h3 className="template-name">{template.name}</h3>
                    <p className="template-desc">{template.description}</p>
                  </div>

                  {/* Card Body with Code Preview */}
                  <div className="template-card-body">
                    <div className="template-code-preview">
                      <pre>{template.code.slice(0, 150)}...</pre>
                    </div>
                    <button
                      onClick={() => handleCopy(template.code, template.id)}
                      className="template-btn template-btn-primary"
                    >
                      {copiedId === template.id ? '✓ Copiado!' : '📋 Copiar'}
                    </button>
                    <button
                      onClick={() => setSelectedTemplate(template)}
                      className="template-btn template-btn-secondary"
                    >
                      Ver código completo →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Info Section */}
          <div className="templates-info-section">
            <h2 className="templates-info-title">ℹ️ Como Usar os Templates</h2>
            <div className="templates-info-grid">
              <div className="templates-info-card">
                <div className="templates-info-number">1️⃣</div>
                <h3 className="templates-info-heading">Selecione</h3>
                <p className="templates-info-text">Escolha o template que melhor se adequa ao seu projeto</p>
              </div>
              <div className="templates-info-card">
                <div className="templates-info-number">2️⃣</div>
                <h3 className="templates-info-heading">Copie</h3>
                <p className="templates-info-text">Clique em "Copiar" e cole em .github/workflows/deploy.yml</p>
              </div>
              <div className="templates-info-card">
                <div className="templates-info-number">3️⃣</div>
                <h3 className="templates-info-heading">Customize</h3>
                <p className="templates-info-text">Ajuste os secrets e configurações conforme necessário</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedTemplate && (
        <div className="templates-modal-overlay" onClick={() => setSelectedTemplate(null)}>
          <div className="templates-modal" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="templates-modal-header">
              <div className="templates-modal-header-content">
                <div className="templates-modal-icon">{selectedTemplate.icon}</div>
                <div>
                  <h2 className="templates-modal-title">{selectedTemplate.name}</h2>
                  <p className="templates-modal-desc">{selectedTemplate.description}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedTemplate(null)}
                className="templates-modal-close"
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div className="templates-modal-body">
              <pre className="templates-modal-code">{selectedTemplate.code}</pre>
            </div>

            {/* Modal Footer */}
            <div className="templates-modal-footer">
              <button
                onClick={() => {
                  handleCopy(selectedTemplate.code, selectedTemplate.id);
                }}
                className="templates-modal-btn templates-modal-btn-primary"
              >
                {copiedId === selectedTemplate.id ? '✓ Copiado!' : '📋 Copiar Tudo'}
              </button>
              <button
                onClick={() => setSelectedTemplate(null)}
                className="templates-modal-btn templates-modal-btn-secondary"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}

      <StarfieldBackground />
    </>
  );
};

export default Templates;