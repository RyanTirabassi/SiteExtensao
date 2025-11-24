import React from 'react';
import './StatCard.css';

const StatCard = ({ label, value, change, isPositive }) => {
  return (
    <div className="stat-card">
      <div className="stat-label">{label}</div>
      <div className="stat-value">{value}</div>
      <div className={`stat-change ${isPositive ? 'positive' : 'negative'}`}>
        {change}
      </div>
    </div>
  );
};

export default StatCard;