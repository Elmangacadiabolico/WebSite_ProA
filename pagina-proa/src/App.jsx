import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from "./componentes/Footer";
import Home from "./componentes/home";
import Navbar from "./componentes/Navbar";
import Lore from "./componentes/Lore";
import "./Global.css";



function App() {
  return (
    <Router>
      <Navbar/>
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Acerca de nosotros" element={<Lore/>} />       
      </Routes>
          <Footer/>
    </Router>
  );
}

export default App;
