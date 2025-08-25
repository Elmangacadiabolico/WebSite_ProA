import React from "react";
import Calendario from "./Calendario";

function MainContent() {
  return (
    <main className="container">
      <h2>Contenido principal</h2>
      <p>Aquí puedes agregar tu contenido.</p>
      <Calendario/>
    </main>
  );
}

export default MainContent