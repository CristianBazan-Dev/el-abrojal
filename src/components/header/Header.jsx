import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";

import Logo from "../../assets/logo.png";
import { ReactComponent as Hamburger } from "../../assets/icons/utils/hamburger.svg";
import { ReactComponent as Close } from "../../assets/icons/utils/close.svg";
import { ReactComponent as Whatsapp } from "../../assets/icons/social/whatsapp.svg";

import { ReactComponent as Facebook } from "../../assets/icons/social/fb.svg";
import { ReactComponent as LinkedIn } from "../../assets/icons/social/in.svg";
import { ReactComponent as WhatsappIcon } from "../../assets/icons/social/wpp.svg";

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

      <Link to="/">
        <img src={Logo} alt="logo de la empresa metalúrgica 'el abrojal' " />
      </Link>

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
        className={hamburgerMenu ? "responsive-menu active" : "responsive-menu"}
      >
        <Close
          className="close-icon"
          onClick={() => {
            setHamburgerMenu(false);
          }}
        />
        <ul>
          <li>
            <Link
              to="/"
              onClick={() => {
                setHamburgerMenu(false);
              }}
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              onClick={() => {
                setHamburgerMenu(false);
              }}
            >
              Productos
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={() => {
                setHamburgerMenu(false);
              }}
            >
              Sobre nosotros
            </Link>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => {
                setHamburgerMenu(false);
              }}
            >
              Contacto
            </a>
          </li>
        </ul>

        <div className="logo">
          <img src={Logo} alt="" />
        </div>

        <div className="social-icons">
          <Link to="/">
            <Facebook className="social-icon" />
          </Link>

          <Link to="/">
            <LinkedIn className="social-icon" />
          </Link>

          <Link to="/">
            <WhatsappIcon className="social-icon" />
          </Link>
        </div>

        <div className="credits">
          <div className="copyright">
            <p>
              Página web desarrollada por{" "}
              <Link
                to="https://cristianbazan-dev.github.io/portfolio/"
                target="_blank"
              >
                CristianBazanDev
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="responsive-nav">
        {/* <div className="logo-resp-menu">
          <img src={Logo} alt="logo de la empresa metalúrgica 'el abrojal' " />
        </div>   */}

        <div className="icons">
          <Link
            to="/products"
            onClick={() => {
              setHamburgerMenu(false);
            }}
          >
            <div className="icon-item">
              <Products className="icon" />
              <p>Productos</p>
            </div>
          </Link>

          <a
            href="#contact"
            onClick={() => {
              setHamburgerMenu(false);
            }}
          >
            <div className="icon-item">
              <Contact className="icon" />
              <p>Contacto</p>
            </div>
          </a>

          <Link
            to="/about"
            onClick={() => {
              setHamburgerMenu(false);
            }}
          >
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
