import React from 'react';
import { NavLink } from 'react-router-dom';
import '../CSS/Navbar.css';

function Navbar() {
  return (
    <header className="navbar">
      <div className="container">
        <NavLink to="/" className="brand">
          {/* Puedes poner un logo o el nombre del proyecto aquí */}
          Proa App
        </NavLink>
        <nav className="links">
          <NavLink to="/Inicio" className="link">Inicio</NavLink>
          <NavLink to="/tarea" className="link">Tareas</NavLink>
          <NavLink to="/Calendario" className="link">Calendario</NavLink>
          <NavLink to="/Acerca" className="link">Acerca de</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
