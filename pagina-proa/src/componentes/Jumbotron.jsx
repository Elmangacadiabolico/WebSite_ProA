import React from "react";

function Jumbotron() {
  return (
    <header className="bg-light p-5 mb-4">
      <div className="container py-5">
        <h1 className="display-4 fw-bold">Bienvenido a Website PROA</h1>
        <p className="lead">
          Este es un ejemplo de jumbotron usando Bootstrap 5 con utilidades en
          lugar de la clase antigua <code>.jumbotron</code>.
        </p>
        <a className="btn btn-primary btn-lg" href="#" role="button">
          Comenzar
        </a>
      </div>
    </header>
  );
}

export default Jumbotron 