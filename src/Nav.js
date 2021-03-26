import React from 'react';
import './NavStyles.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <header>
      <nav className="container">
        <Link to="/">
          <h1>Solarix</h1>
        </Link>
        <ul className="nav-links">
          <Link to="/">
            <li className="nav-link">Modelo 3D</li>
          </Link>
          <Link to="/glosario">
            <li className="nav-link">Glosario</li>
          </Link>
          <Link to="/guiadeayuda">
            <li className="nav-link">Guía de ayuda</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
