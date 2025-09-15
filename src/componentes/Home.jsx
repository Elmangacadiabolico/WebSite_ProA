import React from "react";
import "../CSS/home.css";

function Home() {
  return (
    <div className="home-page">
      <header className="hero">
        <h1 className="title">Escuela PROA</h1>
        <p className="subtitle">Formando el futuro con innovación y valores</p>
      </header>

      <section className="section">
        <h2 className="section-title">¿Quiénes somos?</h2>
        <p className="text">
          Somos una institución educativa comprometida con la excelencia académica,
          el desarrollo personal y la formación de ciudadanos responsables.  
          Mira a los responsables de la página en <strong>Acerca de nosotros</strong>.
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">¿Cuál es nuestra orientación?</h2>
        <div className="cards">
          <div className="card">
            <h3>💻 Programación</h3>
            <p>Formación en desarrollo de software y nuevas tecnologías.</p>
          </div>
        </div>
      </section>

      <section className="section news">
        <h2 className="section-title">Últimas Noticias</h2>
        <ul className="news-list">
          <li>🎙️ Tenemos un podcast propio sobre la honestidad</li>
          <li>🏆 Hace poco fue la feria de ciencias</li>
        </ul>
      </section>
    </div>
  );
}

export default Home;
