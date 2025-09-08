import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from "./componentes/Footer";
import Home from "./componentes/home";
import Navbar from "./componentes/Navbar";
import Lore from "./componentes/Lore";
import Error404 from "./componentes/Error404";


function App() {
  return (
    <Router>
      <Navbar/>
      
      <Routes>
      <Route path="*" element={<Error404/>} />
      <Route path="/" element={<Home/>} />
      <Route path="/Inicio" element={<Home/>} />
      <Route path="/Acerca" element={<Lore/>} />  
      <Route path="Clase" element={<clase/>} /> 

      </Routes>
          <Footer/>
    </Router>
  );
}

export default App;
