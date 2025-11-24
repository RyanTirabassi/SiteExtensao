import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";

import Navbar from "./components/Navbar";
import Features from "./components/Features";
import HeroSection from "./components/HeroSection.jsx";
import DashboardToggle from "./components/DashboardToggle/DashboardToggle.jsx";

import logoGif from "./img/Logo.gif";

// 🔮 Fundo 3D com Buraco Negro
import BlackHole from "./blackhole/BlackHoleBackground.jsx";

// 📚 Página sobre Git
import GitExplanation from "./Git/GitExplanation.jsx";

// 🎬 Página de Demonstração
import DemoPage from "./Demo/DemoPage.jsx";

// 🚀 Página Getting Started
import GettingStarted from "./GettingStarted/GettingStarted.jsx";

// 📋 Página Templates
import Templates from "./Templates/Templates.jsx";

// 📊 Dashboard (com FAQ integrado)
import Dashboard from "./components/Dashboard/Dashboard.jsx";

function App() {
  return (
    <Router>
      <div className="app-root">
        {/* Botão flutuante do Dashboard */}
        <DashboardToggle />

        <Routes>
          {/* Rota principal */}
          <Route path="/" element={
            <>
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
              </main>
            </>
          } />

          {/* Rota para a página do Git */}
          <Route path="/git" element={<GitExplanation />} />

          {/* Rota para a página de Demonstração */}
          <Route path="/demo" element={<DemoPage />} />

          {/* Rota para Getting Started */}
          <Route path="/getting-started" element={<GettingStarted />} />

          {/* Rota para Templates */}
          <Route path="/templates" element={<Templates />} />

          {/* Rota para o Dashboard (com FAQ integrado em abas) */}
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;














