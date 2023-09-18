import React from "react";
import { Link } from "react-router-dom";

import "./footer.css";

import Logo from "../../assets/logo.png";

import { ReactComponent as Facebook } from "../../assets/icons/social/fb.svg";
import { ReactComponent as LinkedIn } from "../../assets/icons/social/in.svg";
import { ReactComponent as Whatsapp } from "../../assets/icons/social/wpp.svg";

import { ReactComponent as Phone } from "../../assets/icons/contact/phone.svg";
import { ReactComponent as Mail } from "../../assets/icons/contact/mail.svg";
import { ReactComponent as Location } from "../../assets/icons/contact/location.svg";

function Footer(props) {
  return (
    <footer>
      <div className="info">
        <div className="logo-container">
          <div className="logo">
            <img
              src={Logo}
              alt="logo de la empresa metalúrgica 'el abrojal' "
            />
          </div>

          
        </div>

        <div className="credits">
        <div className="copyright">
          <p>Metalurgica El Abrojal @ 2023 - Todos los derechos reservados.</p>
        </div>

        <div className="developer">
          <p>
            Sitio web desarrollado por{" "}
            <Link
              to="https://cristianbazan-dev.github.io/CB/"
              target="_blank"
            >
              CB
            </Link>
          </p>
        </div>
      </div>

        <div className="social-icons">
            <Link to="/">
              <Facebook className="social-icon"/>
            </Link>

            <Link to="/">
              <LinkedIn className="social-icon"/>
            </Link>

            <Link to="/">
              <Whatsapp className="social-icon"/>
            </Link>
          </div>

        {/* <div className="sections">
          <div className="section">
            <ul>
              <li>
                <Link to="/products">Productos</Link>
              </li>

              <li>
                <Link to="/products">
                  <p>Cadenas</p>
                </Link>
              </li>

              <li>
                <Link to="/products">
                  <p>Clavos</p>
                </Link>
              </li>

              <li>
                <Link to="/products">
                  <p>Torniquetes</p>
                </Link>
              </li>

              <li>
                <Link to="/products">
                  <p>Ganchos J</p>
                </Link>
              </li>

              <li>
                <Link to="/products">
                  <p>Argollas</p>
                </Link>
              </li>

              <li>
                <Link to="/products">
                  <p>Mosquetones</p>
                </Link>
              </li>
            </ul>
          </div>

          <div className="section">
            <ul>
              <li>
                <Link to="/about">Sobre nosotros</Link>
              </li>

              <li>
                <Link to="/products">
                  <p>¿Por qué elegirnos?</p>
                </Link>
              </li>

              <li>
                <Link to="/products">
                  <p>Nuestra historia</p>
                </Link>
              </li>
            </ul>
          </div>

          <div className="section last">
            <ul>
              <li>
                <Link to="/#contact">Contacto</Link>
              </li>

              <div className="contact-element">
                <Phone className="contact-element-icon" />
                <p>+54 9 3537 494202</p>
              </div>

              <div className="contact-element">
                <Mail className="contact-element-icon" />
                <p>metalurgicaelabrojal@gmail.com</p>
              </div>

              <div className="contact-element last">
                <Location className="contact-element-icon" />
                <p>
                  Pres. Juan Domingo Perón 862, <br /> Morrison (X2568), <br />{" "}
                  Córdoba
                </p>
              </div>
            </ul>
          </div>
        </div> */}
      </div>


    </footer>
  );
}

export default Footer;
