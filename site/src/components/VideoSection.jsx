import React from "react";
import "./VideoSection.css";

export default function VideoSection() {
  return (
    <section id="video" className="video-section">
      <div className="video-container">
        <div className="fake-video">
          <div className="play-btn">▶</div>
        </div>
      </div>
      <p className="video-desc">
        Veja como funciona o processo de deploy automatizado com GitHub Actions e Vercel.
      </p>
    </section>
  );
}
