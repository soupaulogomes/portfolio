// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss'; // Estilização opcional

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src="/path-to-your-logo.png" alt="Logo" />
        </Link>
      </div>
      <nav className="nav-menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
          <li>
            <Link to="/projects">Projetos</Link>
          </li>
          <li>
            <Link to="/contact">Contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
