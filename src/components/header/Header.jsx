import React, { useContext, useEffect, useState } from "react";
import "./header.css";
import { Link, useLocation, useParams } from "react-router-dom";

import Logo from "../../assets/logo.png";
import LogoAlt from "../../assets/logoAlt.png"

import { ReactComponent as Hamburger } from "../../assets/icons/utils/hamburger.svg";
import { ReactComponent as Close } from "../../assets/icons/utils/close.svg";
import { ReactComponent as Whatsapp } from "../../assets/icons/social/whatsapp.svg";

import { ReactComponent as Facebook } from "../../assets/icons/social/fb.svg";
import { ReactComponent as LinkedIn } from "../../assets/icons/social/in.svg";
import { ReactComponent as WhatsappIcon } from "../../assets/icons/social/wpp.svg";

import { ReactComponent as Products } from "../../assets/icons/banner/variety.svg";
import { ReactComponent as Us } from "../../assets/icons/whyUs/why-1.svg";
import { ReactComponent as Contact } from "../../assets/icons/contact/phone.svg";

import { GlobalState } from "../../GlobalState";


function Header(props) {
  const location = useLocation();
  const state = useContext(GlobalState);

  const [hamburgerMenu, setHamburgerMenu] = useState(false);
  const [headerAlt, setHeaderAlt] = state.headerAlt;

  const [categorySelected, setCategorySelected] =
    state.categories.categorySelected;

  const [subcategorySelected, setSubcategorySelected] =
    state.categories.subcategorySelected;

  const [productSelected, setProductSelected] =
    state.categories.productSelected;

 

  const ClearCategories = () => {
    setCategorySelected("");
    setSubcategorySelected("");
    setProductSelected("");
  };

  const RedirectToContact = () => {
    window.scrollTo(0, document.body.scrollHeight)
  }




  return (
    <header className={!headerAlt ? "" : "header-alt"}>
      <Link
        to="https://wa.link/2s3t1s"
        target="_blank"
        className="whatsapp-icon-container"
      >
        <Whatsapp />

        <div className="deploy-msg-wpp">
          <p>Contáctenos a través de Whatsapp</p>
        </div>
        <i className="fab fa-whatsapp"></i>
      </Link>

      {/* FOr development  */}

      {/* <Link to="/">
        <img src={Logo} alt="logo de la empresa metalúrgica 'el abrojal' " />
      </Link> */}

      {/* For production  */}
      <Link
        to="/"
        onClick={() => {
          ClearCategories();
          window.scrollTo(0,0); 
        }}
      >
        <img src={!headerAlt ? Logo : LogoAlt} alt="logo de la empresa metalúrgica 'el abrojal' " />
      </Link>

      <nav>
        <ul>
          <li
            onClick={() => {
              ClearCategories();
              window.scrollTo(0,0); 
            }}
            className={!headerAlt ? "" : "li-alt"}
          >
            <Link to="/">Inicio</Link>
          </li>
          <li
            onClick={() => {
              ClearCategories();
          
            }}
            className={!headerAlt ? "" : "li-alt"}
          >
            <Link to="/products">Productos</Link>
          </li>
          <li
            onClick={() => {
              ClearCategories();
              window.scrollTo(0,0); 
            }}
            className={!headerAlt ? "" : "li-alt"}
          >
            <Link to="/about">Sobre nosotros</Link>
          </li>
          <li  className={!headerAlt ? "" : "li-alt"} onClick={() => {RedirectToContact()}}>
            Contacto
          </li>
        </ul>
      </nav>

      <Hamburger
        className={!headerAlt ? "hamburger-menu" : "hamburger-menu alt"}
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
                ClearCategories();
                window.scrollTo(0,0); 
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
                ClearCategories();
                window.scrollTo(0,0);   
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
                ClearCategories();
                window.scrollTo(0,0);  
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
                window.scrollTo(0,0);  
              }}
            >
              Contacto
            </a>
          </li>
        </ul>

        <div className="logo">
          <img src={LogoAlt} alt="" />
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
                to="https://cristianbazan-dev.github.io/CB/"
                target="_blank"
              >
                CB
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
              ClearCategories();
              window.scrollTo(0,0);  
            }}
          >
            <div className="icon-item">
              <Products className="icon" />
              <p>Productos</p>
            </div>
          </Link>

          <div
            
            onClick={() => {
              setHamburgerMenu(false);
              RedirectToContact(); 
              ClearCategories();
              
            }}
          >
            <div className="icon-item">
              <Contact className="icon" />
              <p>Contacto</p>
            </div>
          </div>

          <Link
            to="/about"
            onClick={() => {
              setHamburgerMenu(false);
              ClearCategories();
              window.scrollTo(0,0);  
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
