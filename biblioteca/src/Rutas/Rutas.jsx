import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from '../Paginas/Home'
import { SolicitarPrestamo } from '../Paginas/SolicitarPrestamo'    
import { Historial } from '../Paginas/Historial'
import { DevolverLibro } from '../Paginas/DevolverLibro'
import { Navbar } from '../NavBar/Navbar'

export const Rutas = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Navbar/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/SolicitarPrestamo' element={<SolicitarPrestamo/>}/>
            <Route path='/DevolverLibro' element={<DevolverLibro/>}/>
            <Route path='/Historial' element={<Historial/>}/>
            <Route path='/Login' element={<Historial/>}/>
            </Route>
        </Routes>
    </div>
  )
}
