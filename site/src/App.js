import React from "react";
import "./App.css";
import "./index.css";

import Navbar from "./components/Navbar";
import Features from "./components/Features";
import VideoShowcase from "./components/VideoShowcase";
import Workflow from "./components/Workflow";
import HeroSection from "./components/HeroSection.jsx";

import logoGif from "./img/Logo.gif";

// 🔮 Fundo 3D com Buraco Negro (versão otimizada e fiel ao seu código original)
import BlackHole from "./blackhole/BlackHoleBackground.jsx";

function App() {
  return (
    <div className="app-root">

      {/* 🔮 Black Hole 3D — Fica atrás de TUDO */}
      <BlackHole />

      {/* Navbar */}
      <Navbar />

      <HeroSection />

      {/* Logo animada */}
      <img src={logoGif} alt="Logo animada" className="logo-glow" />

      {/* Conteúdo principal */}
      <main>
        <Features />
        <VideoShowcase />
        <Workflow />
      </main>

      
    </div>
  );
}

export default App;














