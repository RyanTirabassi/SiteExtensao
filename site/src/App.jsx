import { motion } from "framer-motion";
import { Code2, GitBranch, Rocket, Lock, Cpu, Cloud } from "lucide-react";
import "./App.css";
import logo from "./img/Logo.png";
import logoGif from "./img/Logo.gif";

function App() {
  return (
    <div className="app">
      {/* Cabeçalho animado */}
      <motion.header
        className="header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="logo-container">
          <motion.img
            src={logo}
            alt="Logo"
            className="logo"
            whileHover={{ scale: 1.1 }}
          />
          <motion.img
            src={logoGif}
            alt="Logo Animada"
            className="logo-gif"
            animate={{ rotate: [0, 360] }}
            transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
          />
        </div>

        <h1 className="title">Deploy Automático</h1>
        <p className="subtitle">
          Automatize o build e o deploy de aplicações React com GitHub Actions e Vercel — direto do VS Code.
        </p>
      </motion.header>

      {/* Sessão de recursos */}
      <motion.section
        className="features"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <div className="card">
          <GitBranch className="icon" />
          <h2>Integração GitHub</h2>
          <p>Automatize o deploy a cada push no seu repositório com pipelines CI/CD seguras.</p>
        </div>

        <div className="card">
          <Rocket className="icon" />
          <h2>Deploy com 1 Clique</h2>
          <p>Envie seu projeto para produção em segundos através da Vercel, sem terminal.</p>
        </div>

        <div className="card">
          <Code2 className="icon" />
          <h2>Logs em Tempo Real</h2>
          <p>Monitore o progresso das builds diretamente pelo painel da extensão.</p>
        </div>

        <div className="card">
          <Lock className="icon" />
          <h2>Segurança Avançada</h2>
          <p>Tokens protegidos usando o Secret Storage do VS Code — sem risco de vazamentos.</p>
        </div>

        <div className="card">
          <Cpu className="icon" />
          <h2>Performance Otimizada</h2>
          <p>Builds rápidas com cache inteligente e otimização automática de dependências.</p>
        </div>

        <div className="card">
          <Cloud className="icon" />
          <h2>Infraestrutura Escalável</h2>
          <p>Hospedagem em nuvem global com deploy instantâneo e CDN integrada.</p>
        </div>
      </motion.section>

      {/* Chamada final */}
      <motion.footer
        className="footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <motion.button
          className="button"
          whileHover={{ scale: 1.05 }}
          onClick={() =>
            window.open("https://marketplace.visualstudio.com/", "_blank")
          }
        >
          Ver no Marketplace
        </motion.button>

        <p className="credits">
          Desenvolvido por <strong>Ryan Tirabassi</strong> e equipe — Projeto Integrador UNISO 2025
        </p>
      </motion.footer>

      {/* Fundo animado */}
      <div className="background-glow" />
    </div>
  );
}

export default App;
