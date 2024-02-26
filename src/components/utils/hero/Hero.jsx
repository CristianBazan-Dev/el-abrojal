import React from "react";
import "./hero.css";

import HeroBanner from "../../../assets/img/hero/hero-banner.jpg";
import Logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";

function Hero(props) {
  return (
    <div className="hero-section">
      <div className="hero-info">
        <img src={Logo} alt="" />

        <div className="info">
          <p>Fábrica de cadenas con más de 30 años en el rubro</p>
          <Link>Realizar una consulta</Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
