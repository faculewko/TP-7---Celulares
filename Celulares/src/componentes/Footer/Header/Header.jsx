import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary header">
      <div className="container-fluid">
        <Link to="/">
          <img src="/src/assets/ccb652d1ca11908eeb950eb670c02619-telefono-celular-sonando-icono-azul.webp" alt="Milewko Logo" style={{ height: '70px' }} />
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/quienes-somos">Quienes Somos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/productos">Productos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacto">Contacto</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
