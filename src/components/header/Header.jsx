import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";

import Logo from "../../assets/logo.png";
import { ReactComponent as Hamburger } from "../../assets/icons/utils/hamburger.svg";
import { ReactComponent as Whatsapp } from "../../assets/icons/social/whatsapp.svg";

import { ReactComponent as Products } from "../../assets/icons/banner/variety.svg";
import { ReactComponent as Us } from "../../assets/icons/whyUs/why-1.svg";
import { ReactComponent as Contact } from "../../assets/icons/contact/phone.svg";

function Header(props) {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);

  return (
    <header>
      <Link to="https://wa.link/2s3t1s" target="_blank">
        <Whatsapp className="whatsapp-icon" />
      </Link>

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

      <div className="responsive-nav">
        {/* <div className="logo-resp-menu">
          <img src={Logo} alt="logo de la empresa metalúrgica 'el abrojal' " />
        </div>   */}

        <div className="icons">
          <Link to="/products">
            <div className="icon-item">
              <Products className="icon" />
              <p>Productos</p>
            </div>
          </Link>

          <a href="#contact">
            <div className="icon-item">
              <Contact className="icon" />
              <p>Contacto</p>
            </div>
          </a>

          <Link to="/about">
            <div className="icon-item">
              <Us className="icon" />
              <p>Nosotros</p>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
