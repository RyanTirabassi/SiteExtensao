import React from "react";
import "./VideoShowcase.css";

export default function VideoShowcase(){
  return (
    <section id="video" className="video-show">
      <div className="container">
        <h3 className="video-title">Visualize o Deploy em Ação</h3>
        <div className="video-wrap">
          <div className="video-box">
            <div className="play-circle">▶</div>
          </div>
        </div>
        <p className="video-desc">Veja como a automação CI/CD integra com o GitHub e a Vercel em segundos.</p>
      </div>
    </section>
  );
}

