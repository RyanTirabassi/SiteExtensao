import React from "react";
import { GitBranch, Rocket, Code2, Lock, Cpu, Cloud } from "lucide-react";
import "./FeatureGrid.css";

export default function FeatureGrid() {
  const features = [
    { icon: <GitBranch />, title: "Integração GitHub", text: "Automatize cada push com pipelines CI/CD." },
    { icon: <Rocket />, title: "Deploy com 1 Clique", text: "Envie seu projeto para a Vercel em segundos." },
    { icon: <Code2 />, title: "Logs em Tempo Real", text: "Acompanhe o progresso das builds em tempo real." },
    { icon: <Lock />, title: "Tokens Seguros", text: "Armazene autenticações com VS Code Secret Storage." },
    { icon: <Cpu />, title: "Performance Otimizada", text: "Builds rápidas com cache inteligente." },
    { icon: <Cloud />, title: "Infraestrutura Escalável", text: "Hospedagem global e CDN integrada." },
  ];

  return (
    <section id="features" className="features">
      {features.map((f, i) => (
        <div key={i} className="card">
          <div className="icon">{f.icon}</div>
          <h3>{f.title}</h3>
          <p>{f.text}</p>
        </div>
      ))}
    </section>
  );
}
