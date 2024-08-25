import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './paginas/index'
import ClienteSesion from './paginas/clienteSesion';
import RegistrarCliente from './paginas/registrarCliente';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Inicio_sesion" element={<ClienteSesion />} />
        <Route path="/Registrarse" element={<RegistrarCliente />} />
      </Routes>
      <Footer /> {/* Coloca el Footer aquí */}
    </Router>
  );
}

export default App;