import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from "./componentes/Footer";
import Home from "./componentes/home";
import Navbar from "./componentes/Navbar";
import Lore from "./componentes/Lore";
import Error404 from "./componentes/Error404";
import Calendraio from "./componentes/Calendario"
import TareasApp from "./componentes/Tareas";
import Contactos from "./componentes/Contactos";
import Dioses from "./componentes/Dioses"; // <-- Importar el nuevo componente


function App() {
  return (
    <Router>
      <Navbar/>
      
      <div style={{ flex: '1 0 auto', paddingTop: '20px' }}> {/* Contenedor principal para empujar el footer hacia abajo */}
        <Routes>
          <Route path="*" element={<Error404/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/Inicio" element={<Home/>} />
          <Route path="/Acerca" element={<Lore/>} />  
          <Route path="/tarea" element={<TareasApp/>} /> 
          <Route path="/Calendario" element={<Calendraio/>} /> 
          <Route path="/creditos" element={<Dioses />} /> {/* <-- Añadir la nueva ruta */}
        </Routes>
      </div>

      <Contactos/>
      <Footer/>
    </Router>
  );
}

export default App;
