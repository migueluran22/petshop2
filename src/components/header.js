import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.avif'; 
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart, faBuilding } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <header>
            <div className="navbar">
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="Logo" />
                    </Link>
                </div>
                <ul className="nav-links">
                    <li>
                        <Link to="/Inicio_sesion">
                            <FontAwesomeIcon icon={faUser} size="lg" />
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <FontAwesomeIcon icon={faShoppingCart} size="lg" />
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <FontAwesomeIcon icon={faBuilding} size="lg" />
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;

