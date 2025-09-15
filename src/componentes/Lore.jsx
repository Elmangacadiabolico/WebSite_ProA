import React from "react";
import "../CSS/lore.css";

function Lore() {
  return (
    <section className="lore-section">
      <h3>
        En PRoA creemos que la educación es mucho más que aprender contenidos:
        es una forma de transformar realidades. Somos una comunidad educativa
        innovadora, pensada para preparar a las y los jóvenes en las habilidades
        del futuro, combinando tecnología, creatividad y trabajo en equipo.
        <br />
        <br />
        Nuestro proyecto se basa en:
        <br />
        <br />
        <strong>•</strong> Formación técnica y académica de calidad, con foco en
        la programación, la ciencia y la innovación.
        <br />
        <strong>•</strong> Valores humanos y sociales, porque formar
        profesionales también implica formar personas responsables y solidarias.
        <br />
        <strong>•</strong> Experiencias reales de aprendizaje, donde cada
        estudiante puede crear, experimentar y crecer.
        <br />
        <br />
        En PRoA formamos a la nueva generación de protagonistas que van a
        construir el mañana. Porque creemos que el futuro no se espera…{" "}
        <span className="highlight">¡se programa!</span>
      </h3>

      <div className="container">
        <div className="card">
          <h4>🌟 Innovación</h4>
          <p>Metodologías modernas que combinan tecnología y creatividad.</p>
        </div>
        <div className="card">
          <h4>🤝 Valores</h4>
          <p>Fomentamos la solidaridad, el respeto y la responsabilidad.</p>
        </div>
        <div className="card">
          <h4>🚀 Futuro</h4>
          <p>Formamos protagonistas capaces de transformar su realidad.</p>
        </div>
      </div>
    </section>
  );
}

export default Lore;
