import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
        <nav>
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/SolicitarPrestamo">Solicitar prestamo</Link>
                </li>
                <li>
                    <Link to="/DevolverLibro">Devolver libro</Link>
                </li>
                <li>
                    <Link to="/Historial">Historial</Link>
                </li>
            </ul>
        </nav>
        <Outlet/>
    </div>
  )
}
