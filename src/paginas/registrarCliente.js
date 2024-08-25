import React from "react";
import Header from '../components/header';
import '../components/registrarCliente.css'
import Logo from '../assets/Logo.avif'





function registrarCliente () {
    return(
    <div>        
        <Header />
        <div className="container">
        <div className="logocontainer">
        <img className="logocontainer" src={Logo} alt="Logo" height="30px"/> 
        </div>
            <h2>Registrate</h2>
        <form action="#">
            <div className="form-row">
            <div className="form-group">
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" placeholder="Ingrese su nombre" required />
            </div>
            <div className="form-group">
            <label htmlFor="apellido">Apellido:</label>
            <input type="text" id="apellido" name="apellido" placeholder="Ingrese su apellido" required />
            </div>
            <div className="form-group">
            <label htmlFor="correo">Correo:</label>
            <input type="email" id="correo" name="correo" placeholder="Ingrese su correo electrónico" required />
        </div>
        <div className="form-group">
        <label htmlFor="contraseña">Contraseña:</label>
        <input type="password" id="contraseña" name="contraseña" placeholder="Ingrese su contraseña" required />
        </div>
        <div className="form-group">
        <label htmlFor="celular">Celular:</label>
        <input type="text" id="celular" name="celular" placeholder="Ingrese su número de celular" required />
        </div>
        <div className="form-group">
        <label htmlFor="direccion">Dirección:</label>
        <input type="text" id="direccion" name="direccion" placeholder="Ingrese su dirección" required />
        </div>
        <div className="form-group full-width">
        <label htmlFor="tipo_documento">Tipo documento:</label>
        <select id="tipo_documento" name="tipo_documento" required>
            <option value>Seleccione un tipo de documento</option>
            <option value="CC">C.C</option>
            <option value="TI">T.i</option>
            <option value="CE">C.E</option>
        </select>
        </div>
        <div className="form-group full-width">
        <label htmlFor="numero_documento">Número Documento:</label>
        <input type="text" id="numero_documento" name="numero_documento" placeholder="Ingrese su número de documento" required />
        </div>
    </div>
    <button type="submit" onclick="window.location.href='iniciar-sesion-cliente.html'; return false;">Guardar</button>
    </form>
</div>
    </div>
    );

}

export default registrarCliente ;