import React from "react";
import logo from "../img/Logo.png";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="header-logo" />
      <nav>
        <a href="#features">Recursos</a>
        <a href="#video">Visualização</a>
        <a href="#footer">Sobre</a>
      </nav>
    </header>
  );
}

