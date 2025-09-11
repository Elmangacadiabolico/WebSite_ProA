import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Website PROA. Todos los derechos reservados.</p>
        <div className="footer-links">
          {/* El enlace a la nueva página de créditos */}
          <Link to="/creditos">Créditos</Link>
          <span>|</span>
          <Link to="/LICENSE">Política de Privacidad</Link>
          <span>|</span>
          <Link to="/terminos">Términos y Condiciones</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

