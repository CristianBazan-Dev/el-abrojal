import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

import Logo from "../../assets/logo.png";

function Header(props) {
  return (
    <header>
      <div className="logo-container">
        <Link to="/">
          <img src={Logo} alt="logo de la empresa metalúrgica 'el abrojal' " />
        </Link>
      </div>

      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/products">Productos</Link>
          </li>
          <li>
            <Link to="/about">Sobre nosotros</Link>
          </li>
          <li>
            <a href="#contact">Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
