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

                <li><Link to="/LoginAlum">Login Alumno</Link></li> 

                <li><Link to="/LoginAdmin">Login Bibliotecario</Link></li> 


            </ul>
        </nav>
        <Outlet/>
    </div>
  )
}
