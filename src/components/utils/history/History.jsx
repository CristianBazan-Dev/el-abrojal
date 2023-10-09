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

        <div className="second-section">
          <h2>Entendemos que el mundo está en constante evolución.</h2>

          <h2 className="accent">Nuestra empresa sigue ese curso.</h2>

          <div className="column">
            <img
              src="https://www.perfectionchain.com/wp-content/uploads/2019/03/Plant_01_web1.jpg"
              alt="foto de la empresa"
            />

            <div className="text">
              <h4 style={{ textAlign: "left" }}>
                A lo largo de los años, nuestra empresa ha sido un faro de
                calidad, compromiso y progreso desde nuestros primeros pasos.
              </h4>
              <br />
              <p>
                Nuestra especialización en la fabricación de cadenas es la
                columna vertebral de nuestro éxito. Con el pasar del tiempo,
                hemos perfeccionado nuestros procesos y hemos invertido en
                tecnología de vanguardia para ofrecer cadenas que cumplen con
                los más altos estándares de calidad y durabilidad.
              </p>
            </div>
          </div>
        </div>

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
