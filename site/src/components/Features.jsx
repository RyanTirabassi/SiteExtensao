import React from "react";
import "./Features.css";
import { GitBranch, Rocket, Code2, Lock, Cpu, Cloud } from "lucide-react";

const list = [
  { icon: <GitBranch />, title: "Integração GitHub", text:"Automatize cada push com pipelines CI/CD."},
  { icon: <Rocket />, title: "Deploy com 1 Clique", text:"Envie seu projeto para a Vercel em segundos."},
  { icon: <Code2 />, title: "Logs em Tempo Real", text:"Monitore as builds no painel."},
  { icon: <Lock />, title: "Tokens Seguros", text:"Armazene tokens com Secret Storage."},
  { icon: <Cpu />, title: "Performance", text:"Builds otimizadas com cache inteligente."},
  { icon: <Cloud />, title: "Escalável", text:"Deploy global com CDN integrada."},
];

export default function Features(){
  return (
    <section id="features" className="features-section">
      <div className="container">
        <div className="features-grid">
          {list.map((f,i)=>(
            <div key={i} className="feature-card">
              <div className="feature-icon">{f.icon}</div>
              <h4>{f.title}</h4>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


