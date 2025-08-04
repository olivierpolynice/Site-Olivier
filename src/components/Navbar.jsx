import React, { useState } from "react";
import "./Navbar.css"; // ou mets le CSS dans index.css

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">Olivier Polynice</div>

      <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <li><a href="#about">À propos</a></li>
        <li><a href="#skills">Compétences</a></li>
        <li><a href="#projects">Projets</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
