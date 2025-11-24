import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DashboardToggle.css';

const DashboardToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleDashboard = () => {
    navigate('/dashboard');
    setIsOpen(false);
  };

  const handleTemplates = () => {
    navigate('/templates');
    setIsOpen(false);
  };

  const handleDemo = () => {
    navigate('/demo');
    setIsOpen(false);
  };

  const handleGit = () => {
    navigate('/git');
    setIsOpen(false);
  };

  return (
    <div className="dashboard-toggle">
      <button
        className="toggle-button"
        onClick={() => setIsOpen(!isOpen)}
        title="Abrir Menu"
      >
        📊
      </button>

      {isOpen && (
        <div className="toggle-menu">
          <div className="menu-item" onClick={handleDashboard}>
            <span className="menu-icon">📊</span>
            <span className="menu-text">Dashboard</span>
            <span className="menu-shortcut">⌘D</span>
          </div>
          <div className="menu-divider"></div>
          <div className="menu-item" onClick={handleTemplates}>
            <span className="menu-icon">📋</span>
            <span className="menu-text">Templates</span>
            <span className="menu-shortcut">⌘T</span>
          </div>
          <div className="menu-item" onClick={handleDemo}>
            <span className="menu-icon">🎬</span>
            <span className="menu-text">Demonstração</span>
          </div>
          <div className="menu-item" onClick={handleGit}>
            <span className="menu-icon">📚</span>
            <span className="menu-text">O que é Git?</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardToggle;