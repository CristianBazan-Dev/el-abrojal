import React from "react";
import "./hero.css";

import HeroBanner from "../../../assets/img/hero/hero-banner.jpg";

function Hero(props) {
  return (
    <div className="hero-section">

      <div className="hero-presentation">
      <img
        src="https://res.cloudinary.com/dhbvri4ni/image/upload/v1691605759/test-el-abrojal/Logos/logo_h2y6cy.png"
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
