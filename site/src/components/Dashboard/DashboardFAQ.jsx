import React, { useState } from 'react';
import { faqData, categories } from '../../data/faqData';
import './dashboard-faq.css';

const DashboardFAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedId, setExpandedId] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [ratings, setRatings] = useState({});
  const [showIssueModal, setShowIssueModal] = useState(false);
  const [issueTitle, setIssueTitle] = useState('');
  const [issueDescription, setIssueDescription] = useState('');

  const filteredFAQ = faqData.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleRating = (id, helpful) => {
    setRatings(prev => ({
      ...prev,
      [id]: helpful ? 'helpful' : 'not-helpful'
    }));
  };

  const handleOpenIssue = (faq) => {
    setIssueTitle(faq.githubIssueTemplate);
    setShowIssueModal(true);
  };

  const handleSubmitIssue = () => {
    const description = issueDescription || 'Descrição do problema...';
    const issueBody = `## Problema\n${description}\n\n## Contexto\n- Framework: React/Vue/Next.js\n- Hosting: Vercel/Netlify/AWS\n- Node.js Version: \n- OS: Windows/Mac/Linux`;
    
    const encodedTitle = encodeURIComponent(issueTitle);
    const encodedBody = encodeURIComponent(issueBody);
    const githubRepoUrl = 'https://github.com/RyanTirabassi/SiteExtensao';
    const issueUrl = `${githubRepoUrl}/issues/new?title=${encodedTitle}&body=${encodedBody}&labels=help%20wanted`;
    
    window.open(issueUrl, '_blank');
    setShowIssueModal(false);
    setIssueTitle('');
    setIssueDescription('');
  };

  return (
    <div className="faq-container">
      {/* Header */}
      <div className="faq-header">
        <h2 className="faq-title">❓ FAQ & Troubleshooting</h2>
        <p className="faq-subtitle">Encontre soluções para problemas comuns durante deploy</p>
      </div>

      {/* Search Bar */}
      <div className="faq-search-container">
        <div className="faq-search-icon">🔍</div>
        <input
          type="text"
          placeholder="Procure por erro, problema ou solução..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="faq-search-input"
        />
      </div>

      {/* Category Tabs */}
      <div className="faq-categories">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`faq-category-btn ${selectedCategory === cat.id ? 'active' : ''}`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* FAQ List */}
      <div className="faq-list">
        {filteredFAQ.length > 0 ? (
          filteredFAQ.map(faq => (
            <div key={faq.id} className="faq-item">
              {/* Question */}
              <button
                onClick={() => setExpandedId(expandedId === faq.id ? null : faq.id)}
                className="faq-question"
              >
                <div className="faq-question-content">
                  <h3 className="faq-question-text">{faq.question}</h3>
                  <div className="faq-tags">
                    {faq.tags.map(tag => (
                      <span key={tag} className="faq-tag">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className={`faq-chevron ${expandedId === faq.id ? 'rotated' : ''}`}>
                  ↓
                </div>
              </button>

              {/* Answer */}
              {expandedId === faq.id && (
                <div className="faq-answer">
                  <pre className="faq-answer-text">{faq.answer}</pre>

                  {/* Rating & GitHub Issue */}
                  <div className="faq-footer">
                    <div className="faq-rating">
                      <span className="faq-rating-label">Foi útil?</span>
                      <button
                        onClick={() => handleRating(faq.id, true)}
                        className={`faq-rating-btn ${ratings[faq.id] === 'helpful' ? 'helpful' : ''}`}
                      >
                        👍 Sim
                      </button>
                      <button
                        onClick={() => handleRating(faq.id, false)}
                        className={`faq-rating-btn ${ratings[faq.id] === 'not-helpful' ? 'not-helpful' : ''}`}
                      >
                        👎 Não
                      </button>
                    </div>

                    {/* GitHub Issue Button */}
                    <button
                      onClick={() => handleOpenIssue(faq)}
                      className="faq-github-btn"
                    >
                      <span>🐙 GitHub Issues</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="faq-empty">
            <p className="faq-empty-title">Nenhuma FAQ encontrada</p>
            <p className="faq-empty-text">Tente outra palavra-chave ou categoria</p>
          </div>
        )}
      </div>

      {/* Footer Info */}
      <div className="faq-info-box">
        <div className="faq-info-icon">ℹ️</div>
        <div className="faq-info-content">
          <p className="faq-info-title">Problema não resolvido?</p>
          <p className="faq-info-text">Clique em "GitHub Issues" para abrir uma issue e a comunidade pode ajudar!</p>
        </div>
      </div>

      {/* GitHub Issue Modal */}
      {showIssueModal && (
        <div className="faq-modal-overlay" onClick={() => setShowIssueModal(false)}>
          <div className="faq-modal" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="faq-modal-header">
              <div className="faq-modal-header-content">
                <span className="faq-modal-icon">🐙</span>
                <h2 className="faq-modal-title">Reportar no GitHub</h2>
              </div>
              <button
                onClick={() => setShowIssueModal(false)}
                className="faq-modal-close"
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div className="faq-modal-body">
              <div className="faq-modal-field">
                <label className="faq-modal-label">Título do Problema</label>
                <input
                  type="text"
                  value={issueTitle}
                  onChange={(e) => setIssueTitle(e.target.value)}
                  className="faq-modal-input"
                />
              </div>

              <div className="faq-modal-field">
                <label className="faq-modal-label">Descrição (Opcional)</label>
                <textarea
                  value={issueDescription}
                  onChange={(e) => setIssueDescription(e.target.value)}
                  placeholder="Descreva seu problema em detalhes..."
                  rows="5"
                  className="faq-modal-textarea"
                />
              </div>

              <div className="faq-modal-info">
                <p>ℹ️ Você será redirecionado para GitHub para abrir a issue. Certifique-se de estar conectado!</p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="faq-modal-footer">
              <button
                onClick={() => setShowIssueModal(false)}
                className="faq-modal-btn faq-modal-btn-secondary"
              >
                Cancelar
              </button>
              <button
                onClick={handleSubmitIssue}
                className="faq-modal-btn faq-modal-btn-primary"
              >
                🐙 Abrir no GitHub
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardFAQ;