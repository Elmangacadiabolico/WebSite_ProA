import React from "react";
import "../index.css"; 

function Navbar() {
  return (
    <nav>
      <div className="container">
        <a href="/" className="brand">
          <img
            src="" className="logo"/>
        </a>
        <div className="links">
          <a href="/Inicio" className="link">Inicio</a>
          <a href="/Contenido" className="link">Contenido</a>
          <a href="/Acerca" className="link">Acerca de nosotros</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
