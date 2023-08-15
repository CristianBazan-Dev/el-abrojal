import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";

import Logo from "../../assets/logo.png";
import { ReactComponent as Hamburger } from "../../assets/icons/utils/hamburger.svg";

function Header(props) {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);

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

      <Hamburger
        className="hamburger-menu"
        onClick={() => {
          setHamburgerMenu(!hamburgerMenu);
        }}
      />

      <div
        className={hamburgerMenu ? "responsive-nav active" : "responsive-nav"}
      ></div>
    </header>
  );
}

export default Header;
