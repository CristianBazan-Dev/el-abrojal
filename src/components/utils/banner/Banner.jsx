import React from "react";
import "./banner.css";

import { ReactComponent as Truck } from "../../../assets/icons/banner/truck.svg";
import { ReactComponent as Stock } from "../../../assets/icons/banner/variety.svg";

function Banner(props) {
  return (
    <div className="banner-section">
      <div className="banner-text">
        <div className="banner-item">
        <Stock className="variety-icon" />
          <h5>Stock permanente</h5>
        </div>

        <div className="banner-item">
          <h5>Garantía de calidad</h5>
        </div>

        <div className="banner-item">
          <Truck className="truck-icon" />
          <div className="text-item">
            <h5>Envíos a todo el país</h5>
          </div>
        </div>

        <div className="banner-item">

          <div className="text-item">
            <h5>Variedad de productos</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
