import React from "react";

function Home() {
  return (
    <div style={styles.page}>
      <header style={styles.hero}>
        <h1 style={styles.title}>Escuela PROA</h1>
        <p style={styles.subtitle}>Formando el futuro con innovación y valores</p>
      </header>


      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>¿Quiénes somos?</h2>
        <p style={styles.text}>
          Somos una institución educativa comprometida con la excelencia académica,
          el desarrollo personal y la formación de ciudadanos responsables.
          mire a los responsables de la pagina en acerca de nosotros 
        </p>
      </section>


      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>¿Cuál es nuestra orientación?</h2>
        <div style={styles.cards}>
          <div style={styles.card}>
            <h3 style={{color: "black"}}>Programación</h3>
            <p style={{color: "black"}}>Formación en desarrollo de software y nuevas tecnologías.</p>
          </div>
        </div>
      </section>

      {/* Noticias */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Últimas Noticias</h2>
        <ul style={styles.newsList}>
          <li>Tenemos un Podcas propio sobre la honestidad</li>
        </ul>
      </section>

    </div>
  );
}

const styles = {
  page: {
    fontFamily: "Arial, sans-serif",
    margin: 0,
    padding: 0,
  },
  hero: {
    background: "linear-gradient(to right, #00416A, #E4E5E6)",
    color: "white",
    padding: "80px 20px",
    textAlign: "center",
  },
  title: {
    fontSize: "3rem",
    margin: 0,
  },
  subtitle: {
    fontSize: "1.2rem",
    marginTop: "10px",
  },
  section: {
    padding: "50px 20px",
    textAlign: "center",
    background: "linear-gradient(to right, #00416A, #E4E5E6)",
  },
  sectionTitle: {
    fontSize: "2rem",
    marginBottom: "20px",
    color: "white"
  },
  text: {
    maxWidth: "800px",
    margin: "0 auto",
    fontSize: "1.1rem",
    lineHeight: "1.6",
    color: "white"
  },
  cards: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
    color: "white"
  },
  card: {
    background: "#f4f4f4",
    padding: "20px",
    borderRadius: "10px",
    width: "250px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    color: "white"
  },
  newsList: {
    listStyle: "none",
    padding: 0,
    fontSize: "1.1rem",
  },
};
export default Home;
