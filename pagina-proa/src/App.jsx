import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './inicio.css';

import Navbar from "./components/Navbar";
import Footer from "./componentes/Footer";
import Jumbotron from "./components/Jumbotron";
import MainContent from "./components/MainContent";

function App() {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <MainContent />
      <Footer/>
    </>
  );
}

export default App;
