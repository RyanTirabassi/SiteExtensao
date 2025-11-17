import React from "react";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          <span className="gradient-text">Deploy Automático</span>
        </h1>
        <p>
          Automatize o build e o deploy de aplicações React com GitHub Actions e Vercel — direto do VS Code.
        </p>
        <div className="buttons">
          <button>Ver no Marketplace</button>
          <button className="outline">Saiba Mais</button>
        </div>
      </div>

    </section>
  );
}
