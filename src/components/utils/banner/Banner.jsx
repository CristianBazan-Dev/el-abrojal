import React from "react";
import "./banner.css";

import { ReactComponent as Truck } from "../../../assets/icons/banner/truck.svg";
import { ReactComponent as Variety } from "../../../assets/icons/banner/variety.svg";

function Banner(props) {
  return (
    <div className="banner-section">
      
      <div className="banner-text">
        <h3>Garantía de calidad</h3>

        <div className="banner-item">
          <Truck className="truck-icon" />
          <div className="text-item">
            <h3>Envíos</h3>
            <h3>a todo el país</h3>
          </div>
        </div>

        <div className="banner-item">
          <Variety className="variety-icon" />
          <div className="text-item">
            <h3>Variedad</h3>
            <h3>de productos</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
