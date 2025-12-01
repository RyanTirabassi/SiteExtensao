import React, { useState } from 'react';
import './Dashboard.css';
import DashboardFAQ from './DashboardFAQ';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('histórico');

  const stats = [
    { label: 'TOTAL DE DEPLOYS', value: '42', change: '↑ 5 neste mês', color: '#00d9ff' },
    { label: 'TAXA DE SUCESSO', value: '95.2%', change: '↑ 2.1% vs mês anterior', color: '#4ade80' },
    { label: 'TEMPO MÉDIO', value: '30 segundos', change: '↓ 15s mais lento', color: '#f97316' },
    { label: 'DEPLOY ATIVO', value: 'v2.3.1', change: 'Deploy: há 2 dias', color: '#a855f7' }
  ];

  const recentDeploys = [
    { time: 'Hoje 14:32', title: 'Deploy bem-sucedido', branch: 'main', commit: 'a3f2bfc', platform: 'GitHub', status: 'success' },
    { time: 'Hoje 12:15', title: 'Deploy bem-sucedido', branch: 'main', commit: '7e5d4k2', platform: 'Vercel', status: 'success' },
    { time: 'Ontem 18:47', title: 'Deploy falhou', branch: 'develop', commit: 'Build falhou', platform: 'GitHub', status: 'failed', error: 'npm run build' },
    { time: 'Ontem 16:20', title: 'Deploy bem-sucedido', branch: 'main', commit: '5c1n8d-9', platform: 'Vercel', status: 'success' }
  ];

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-sidebar">
        <div className="sidebar-menu">
          <div className="menu-header">MENU</div>
          <button
            className={`menu-item ${activeTab === 'histórico' ? 'active' : ''}`}
            onClick={() => setActiveTab('histórico')}
          >
            <span className="menu-icon">📊</span>
            <span className="menu-text">Dashboard</span>
          </button>
          <button
            className={`menu-item ${activeTab === 'faq' ? 'active' : ''}`}
            onClick={() => setActiveTab('faq')}
          >
            <span className="menu-icon">❓</span>
            <span className="menu-text">FAQ</span>
          </button>
          <button className="menu-item">
            <span className="menu-icon">🚀</span>
            <span className="menu-text">Deploy</span>
          </button>
          <button className="menu-item">
            <span className="menu-icon">⚙️</span>
            <span className="menu-text">Configurações</span>
          </button>
        </div>

        <div className="sidebar-projects">
          <div className="projects-header">PROJETOS</div>
          <button className="project-item">
            <span className="project-icon">📁</span>
            <span className="project-text">Deploy Auto...</span>
          </button>
        </div>
      </div>

      <div className="dashboard-main">
        {/* TAB: HISTÓRICO */}
        {activeTab === 'histórico' && (
          <div className="dashboard-content">
            <div className="dashboard-header">
              <h1>Dashboard - Histórico de Deploys</h1>
              <div className="dashboard-actions">
                <button className="btn-refresh">↻ Atualizar</button>
                <button className="btn-deploy">⚡ Deploy</button>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="stats-grid">
              {stats.map((stat, idx) => (
                <div key={idx} className="stat-card">
                  <div className="stat-label">{stat.label}</div>
                  <div className="stat-value" style={{ color: stat.color }}>{stat.value}</div>
                  <div className="stat-change">{stat.change}</div>
                </div>
              ))}
            </div>

            {/* Gráficos */}
            <div className="dashboard-grid">
              <div className="chart-card">
                <h3>Deploys Últimos 7 Dias</h3>
                <div className="chart-placeholder">
                  <div className="simple-chart">
                    {[1, 2, 3, 4, 5, 6, 7].map(i => (
                      <div key={i} className="chart-bar" style={{ height: `${20 + i * 10}%` }}></div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="status-card">
                <h3>Status Recente</h3>
                <div className="status-item">
                  <div className="status-label">Sucesso</div>
                  <div className="status-bar">
                    <div className="status-fill" style={{ width: '95%', backgroundColor: '#4ade80' }}></div>
                  </div>
                  <div className="status-count">40 / 42</div>
                </div>
                <div className="status-item">
                  <div className="status-label">Falhas</div>
                  <div className="status-bar">
                    <div className="status-fill" style={{ width: '5%', backgroundColor: '#ef4444' }}></div>
                  </div>
                  <div className="status-count">2 / 42</div>
                </div>
              </div>
            </div>

            {/* Histórico de Deploys */}
            <div className="history-section">
              <h3>Histórico de Deploys</h3>
              <div className="deploys-list">
                {recentDeploys.map((deploy, idx) => (
                  <div key={idx} className={`deploy-item ${deploy.status}`}>
                    <div className="deploy-time">{deploy.time}</div>
                    <div className="deploy-info">
                      <div className="deploy-status-icon">
                        {deploy.status === 'success' ? '✓' : '✕'}
                      </div>
                      <div className="deploy-details">
                        <div className="deploy-title">{deploy.title}</div>
                        <div className="deploy-meta">
                          Branch: {deploy.branch} | Commit: {deploy.commit} | {deploy.platform}
                        </div>
                      </div>
                    </div>
                    <div className="deploy-status">
                      {deploy.status === 'success' ? (
                        <span className="badge success">✓ OK</span>
                      ) : (
                        <span className="badge failed">✕ FALHA</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB: FAQ */}
        {activeTab === 'faq' && (
          <div className="dashboard-content">
            <DashboardFAQ />
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;