import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Nav.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from "../Assets/bibliotecalogo.png"; 

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Para obtener la ruta actual

  return (
    <header className={`navbar ${menuOpen ? 'open' : ''}`}>
      <div className="container">
        <Link to="/" className="logo">
          <img src={logo} alt="Logo Biblioteca" />
        </Link>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <nav>
          <ul className={`nav-links ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>
            {[
              { path: "/", label: "Inicio" },
              { path: "/SolicitarPrestamo", label: "Solicitar préstamo" },
              { path: "/DevolverLibro", label: "Devolver libro" },
              { path: "/Historial", label: "Historial" },
              { path: "/LoginAlum", label: "Login Alumno" },
              { path: "/LoginAdmin", label: "Login Bibliotecario" },
            ].map((item) => (
              <li key={item.path} className={location.pathname === item.path ? "active" : ""}>
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
