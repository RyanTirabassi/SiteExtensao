import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logopng from "../img/Logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img src={logopng} alt="Logo animada" />
          <h1>Deployly</h1>
        </Link>
      </div>
      <div className="navbar-right">
        <Link to="/">Recursos</Link>
        <Link to="/getting-started">Requisitos</Link>
        <Link to="/demo">Demonstração</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/git">O que é Git?</Link>
      </div>
    </nav>
  );
}

export default Navbar;

