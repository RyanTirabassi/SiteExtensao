import React from "react";
import "./Navbar.css";
import logopng from "../img/Logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logopng} alt="Logo animada" />
        <h1>Deploy Automático</h1>
      </div>
      <div className="navbar-right">
        <a href="#features">Recursos</a>
        <a href="#demo">Demonstração</a>
        <a href="#workflow">Como Funciona</a>
      </div>
    </nav>
  );
}

export default Navbar;


