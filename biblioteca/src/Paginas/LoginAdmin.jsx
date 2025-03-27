import React from "react";
import "../Paginas/Desings/LoginAdmin.css";
import fondo from "../Assets/FondoLogin.png";
import logo from "../Assets/bibliotecalogo.png"; 

export const LoginAdmin = () => {  
  return (
    <div 
      className="login-page-wrapper" 
      style={{ backgroundImage: `url(${fondo})`, backgroundSize: "cover" }}
    >
      <div className="login-container">
        
        <div className="login-box">
          <img 
            src={logo}  // Usa la variable importada
            alt="Biblioteca Logo" 
            className="login-logo" 
          />

          <h2 className="login-title">Iniciar sesión</h2>

          <div className="login-form">
            <input 
              type="text" 
              placeholder="ID Bibliotecario" 
              className="login-input" 
            />
            <input 
              type="password" 
              placeholder="Contraseña" 
              className="login-input" 
            />
            <button className="login-button">Ingresar</button>
          </div>
        </div>
      </div>
    </div>
  );
};