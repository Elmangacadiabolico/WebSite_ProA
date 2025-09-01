import React from "react";

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        <a href="/" style={styles.brand}>
          <img
            src=""
            alt="Logo"
            style={styles.logo}
          />
          <span style={styles.text}>website_proa</span>
        </a>
        <div style={styles.links}>
          <a href="" style={styles.link}>Inicio</a>
          <a href="" style={styles.link}>Contenido</a>
          <a href="" style={styles.link}>Contacto</a>
        </div>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    backgroundColor: "#222",
    padding: "10px 20px",
    color: "#fff",
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: "1100px",
    margin: "0 auto",
  },
  brand: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "18px",
  },
  logo: {
    marginRight: "10px",
    borderRadius: "5px",
  },
  text: {
    verticalAlign: "middle",
  },
  links: {
    display: "flex",
    gap: "15px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
    transition: "color 0.3s ease",
  },
};

export default Navbar;
