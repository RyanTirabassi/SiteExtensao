import React from 'react';
import './TimelineItem.css';

const TimelineItem = ({ time, message, description, status, statusType }) => {
  const getStatusIcon = (type) => {
    switch (type) {
      case 'success':
        return '✓';
      case 'failed':
        return '✗';
      case 'pending':
        return '...';
      default:
        return '•';
    }
  };

  return (
    <div className="timeline-item">
      <div className="timeline-time">{time}</div>
      <div>
        <div className="timeline-message">{message}</div>
        <div className="timeline-message-sub">{description}</div>
      </div>
      <div className="timeline-status">
        <span className={`status-badge ${statusType}`}>
          {getStatusIcon(statusType)} {status}
        </span>
      </div>
    </div>
  );
};

export default TimelineItem;