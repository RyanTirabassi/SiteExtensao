import React from 'react';
import './Chart.css';

const Chart = ({ title, type, data }) => {
  if (type === 'line') {
    return (
      <div className="chart-card">
        <div className="chart-title">{title}</div>
        <div className="chart-placeholder">
          <svg width="100%" height="250" viewBox="0 0 400 200" className="line-chart">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#007acc" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#007acc" stopOpacity="0.01" />
              </linearGradient>
            </defs>
            <path
              d="M 20 150 Q 80 120 140 100 T 260 80 T 380 60"
              stroke="#007acc"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M 20 150 Q 80 120 140 100 T 260 80 T 380 60 L 380 200 L 20 200"
              fill="url(#gradient)"
            />
            <circle cx="20" cy="150" r="3" fill="#007acc" />
            <circle cx="80" cy="120" r="3" fill="#007acc" />
            <circle cx="140" cy="100" r="3" fill="#007acc" />
            <circle cx="200" cy="90" r="3" fill="#007acc" />
            <circle cx="260" cy="80" r="3" fill="#007acc" />
            <circle cx="320" cy="70" r="3" fill="#007acc" />
            <circle cx="380" cy="60" r="3" fill="#007acc" />
          </svg>
        </div>
      </div>
    );
  }

  if (type === 'status') {
    return (
      <div className="chart-card">
        <div className="chart-title">{title}</div>
        <div className="status-chart">
          <div className="status-row">
            <div className="status-label">Sucesso</div>
            <div className="progress-bar">
              <div className="progress-fill success" style={{ width: '95%' }}></div>
            </div>
            <div className="status-count">40 / 42</div>
          </div>

          <div className="status-row">
            <div className="status-label">Falhas</div>
            <div className="progress-bar">
              <div className="progress-fill failed" style={{ width: '5%' }}></div>
            </div>
            <div className="status-count">2 / 42</div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default Chart;