import React from "react";
import "./Workflow.css";

const steps = [
  "Clone o repositório e conecte ao GitHub",
  "Configure o Token da Vercel com segurança",
  "Realize um push e o build será acionado",
  "Acompanhe logs em tempo real no painel",
  "Seu site é publicado automaticamente"
];

export default function Workflow(){
  return (
    <section id="workflow" className="workflow">
      <div className="container">
        <h3>Como Funciona</h3>
        <div className="steps">
          {steps.map((s,i)=>(
            <div className="step" key={i}>
              <div className="step-num">{i+1}</div>
              <p>{s}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

