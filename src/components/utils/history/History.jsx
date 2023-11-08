import React from "react";
import CarouselGallery from "../carousel/CarouselGallery";
import Gallery from "../gallery/Gallery";
import "./history.css";

import Logo from "../../../assets/logo.png";
import WhyUs from "../whyUs/WhyUs";

function History(props) {
  return (
    <section className="history-section">

      <div className="sections">


        <WhyUs />

  
        <div className="last-section">
          <img
            src="https://res.cloudinary.com/dz6lrvj7u/image/upload/v1696847659/Hero/Hero_-_Banner_cxr4lm.jpg"
            alt="Foto  de la empresa"
          />
        </div>

        {/* <div className="gallery-section">
          <CarouselGallery />
          <Gallery />
        </div> */}
      </div>
    </section>
  );
}

export default History;
