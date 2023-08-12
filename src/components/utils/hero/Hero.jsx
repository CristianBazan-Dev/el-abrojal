import React from "react";
import "./hero.css";

import HeroBanner from "../../../assets/img/hero/hero-banner.jpg";

function Hero(props) {
  return (
    <div className="hero-section">
      <div className="hero-presentation">
        <div className="text">
          <img
            src="https://res.cloudinary.com/dhbvri4ni/image/upload/v1691605759/test-el-abrojal/Logos/logo_h2y6cy.png"
            alt=""
          />

          <h1>Metalúrgica El Abrojal</h1>
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h2>
        </div>
      </div>
    </div>
  );
}

export default Hero;
