import React from "react";
import "./hero.css";

import HeroBanner from "../../../assets/img/hero/hero-banner.jpg";

function Hero(props) {
  return (
    <div className="hero-section">

      <div className="hero-presentation">
      <img
        src="https://res.cloudinary.com/dz6lrvj7u/image/upload/v1694571060/Logos/logo_h2y6cy_ppunp1.png"
        alt="logo de la empresa metalúrgica 'el abrojal'"
      />

        <div className="text">
          <h1>Metalúrgica El Abrojal</h1>
          <h2>Fábrica de cadenas y accesorios.</h2>
        </div>
      </div>
    </div>
  );
}

export default Hero;
