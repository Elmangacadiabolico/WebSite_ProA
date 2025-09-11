import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaShareAlt } from "react-icons/fa";
import "../CSS/Redes.css";

function Contactos() {
  const [active, setActive] = useState(false);

  const socialLinks = [
    { name: 'facebook', href: 'https://facebook.com', icon: <FaFacebook /> },
    { name: 'twitter', href: 'https://twitter.com', icon: <FaTwitter /> },
    { name: 'instagram', href: 'https://instagram.com', icon: <FaInstagram /> },
    { name: 'linkedin', href: 'https://linkedin.com', icon: <FaLinkedin /> },
    { name: 'github', href: 'https://github.com/tu-usuario', icon: <FaGithub /> },
  ];

  return (
    // Contenedor principal del widget, posicionado de forma fija
    <div className="contact-widget">
      <div 
        className={`menu ${active ? "active" : ""}`}
        style={{ '--total-items': socialLinks.length }}
      >
        <div className="toggle" onClick={() => setActive(!active)}>
          <FaShareAlt />
        </div>

        {socialLinks.map((link, index) => (
          <div
            key={link.name}
            className="social-item"
            style={{ '--i': index }} // Solo pasamos el índice
          >
            <a href={link.href} target="_blank" rel="noreferrer" title={link.name}>
              {link.icon}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contactos;
