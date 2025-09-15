import React from 'react';
import { NavLink } from 'react-router-dom';
import '../CSS/Navbar.css';

function Navbar() {
  return (
    <header className="navbar">
      <div className="container">
        <NavLink to="/" className="brand">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7q9TtpKoP2zgn1Sd6nuvn7ZnwObmqrYgK0Q&s" alt="Logo Proa" className="logo"
          />
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
