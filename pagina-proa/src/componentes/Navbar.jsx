import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSession, signIn, signOut } from 'next-auth/react';
import '../CSS/Navbar.css';

function Navbar() {
  const { data: session, status } = useSession();

  return (
    <header className="navbar">
      <div className="container">
        <NavLink to="/" className="brand">
          Proa App
        </NavLink>
        <nav className="links">
          <NavLink to="/Inicio" className="link">Inicio</NavLink>
          {/* Solo muestra Tareas y Calendario si el usuario está logueado */}
          {status === 'authenticated' && (
            <>
              <NavLink to="/tarea" className="link">Tareas</NavLink>
              <NavLink to="/Calendario" className="link">Calendario</NavLink>
            </>
          )}
          <NavLink to="/Acerca" className="link">Acerca de</NavLink>
        </nav>

        <div className="auth-section">
          {status === 'loading' && (
            <div className="loader"></div>
          )}

          {status === 'unauthenticated' && (
            <button onClick={() => signIn('google')} className="btn btn-login">
              Login
            </button>
          )}

          {status === 'authenticated' && session && (
            <div className="user-info">
              <img src={session.user.image} alt={session.user.name} className="user-avatar" />
              <span>{session.user.name}</span>
              <button onClick={() => signOut()} className="btn btn-logout">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
