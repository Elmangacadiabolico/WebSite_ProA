import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-4">
      <div className="container">
        <p className="mb-1">&copy; 2025 Website PROA. Todos los derechos reservados.</p>
        <a href="#" className="text-white text-decoration-none mx-2">Política de Privacidad</a>
        |
        <a href="#" className="text-white text-decoration-none mx-2">Términos y Condiciones</a>
      </div>
    </footer>
  );
}

export default Footer