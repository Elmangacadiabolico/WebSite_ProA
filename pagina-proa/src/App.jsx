import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from "./componentes/Footer";
import Home from "./componentes/home";
import Navbar from "./componentes/Navbar";
import Lore from "./componentes/Lore";
import Error404 from "./componentes/Error404";
import Calendraio from "./componentes/Calendario"
import TareasApp from "./componentes/Tareas";
import Contactos from "./componentes/Contactos";


function App() {
  return (
    <Router>
      <Navbar/>
      
      <Routes>
      <Route path="*" element={<Error404/>} />
      <Route path="/" element={<Home/>} />
      <Route path="/Inicio" element={<Home/>} />
      <Route path="/Acerca" element={<Lore/>} />  
      <Route path="/tarea" element={<TareasApp/>} /> 
      <Route path="/Calendario" element={<Calendraio/>} /> 

      </Routes>
      <Contactos/>
          <Footer/>
    </Router>
  );
}

export default App;
