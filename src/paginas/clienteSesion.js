import React from "react";
import Header from '../components/header';
import '../components/clienteSesion.css'
import Logo from '../assets/Logo.avif'
import { Link } from "react-router-dom";


function clienteSesion () {
    return(
    <div>        
        <Header />
        <center><div className="login-container" style={{marginTop: '50px'}}>
        <div className="login-header">
        <img src={Logo} alt="Logo" height="30px"/> 
    <h1>Omega PetShop</h1>
    </div>
    <h2>Iniciar sesión</h2>
        <form action="#" method="POST">
    <label htmlFor="email">Correo electrónico</label>
    <input type="email" id="email" name="email" required />
    <label htmlFor="password">Contraseña</label>
    <input type="password" id="password" name="password" required />
    <Link to="#" className="forgot-password">¿Olvidaste tu contraseña?</Link>
    <button type="submit" onclick="window.location.href='productos.html'; return false;">Guardar</button>
        </form>
    <Link to="/Registrarse" className="register-link">Registrarse</Link>
</div></center>

    </div>
    );

}

export default clienteSesion;