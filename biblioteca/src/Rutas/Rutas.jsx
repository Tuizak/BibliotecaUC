import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../Paginas/Home';
import { SolicitarPrestamo } from '../Paginas/SolicitarPrestamo';    
import { Historial } from '../Paginas/Historial';
import { DevolverLibro } from '../Paginas/DevolverLibro';
import { Navbar } from '../NavBar/Navbar';
import { LoginAlum } from '../Paginas/LoginAlum';  
import { LoginAdmin } from '../Paginas/LoginAdmin';

export const Rutas = () => {
  return (
    <div>
      {/* Navbar ahora está fuera de <Routes> para que siempre se muestre */}
      <Navbar />  

      {/* Contenedor de rutas */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/SolicitarPrestamo' element={<SolicitarPrestamo />} />
        <Route path='/DevolverLibro' element={<DevolverLibro />} />
        <Route path='/Historial' element={<Historial />} />
        <Route path='/LoginAlum' element={<LoginAlum />} />
        <Route path='/LoginAdmin' element={<LoginAdmin />} />
      </Routes>
    </div>
  );
};
