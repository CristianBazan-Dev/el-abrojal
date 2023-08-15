import React from "react";
import "./banner.css";

import { ReactComponent as Truck } from "../../../assets/icons/banner/truck.svg";
import { ReactComponent as Variety } from "../../../assets/icons/banner/variety.svg";

function Banner(props) {
  return (
    <div className="banner-section">
      <div className="banner-text">
        <h2>Garantía de calidad</h2>

        <div className="banner-item">
          <Truck className="truck-icon" />
          <div className="text-item">
            <h2>Envíos</h2>
            <h3>a todo el país</h3>
          </div>
        </div>

        <div className="banner-item">
          <Variety className="variety-icon" />
          <div className="text-item">
            <h2>Variedad</h2>
            <h3>de productos</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
