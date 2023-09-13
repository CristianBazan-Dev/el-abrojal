import React from "react";
import CarouselGallery from "../carousel/CarouselGallery";
import Gallery from "../gallery/Gallery";
import "./history.css";

function History(props) {
  return (
    <section className="history-section">
      <div className="first-section">
        <div className="titles">
          <h1>Nuestra historia</h1>
          <div className="subtitle">
            <p>
              Lorem ipsum dolor sit amet consectetur. Purus arcu arcu commodo et
              nulla ultrices lacus cras turpis
            </p>
          </div>
        </div>

        <div className="background"></div>
      </div>

      <div className="separator"></div>

      <div className="sections">
        <div className="second-section">
          <div className="first-column">
            <h2>
              Lorem ipsum dolor sit amet consectetur. Mattis amet laoreet sed
              volutpat.
            </h2>
            <img
              src="https://www.perfectionchain.com/wp-content/uploads/2019/03/Plant_01_web1.jpg"
              alt="foto de la empresa"
            />
          </div>

          <div className="second-column">
            <h4>
             A lo largo de los años nuestra empresa ha sido un faro de calidad, compromiso y progreso desde nuestros primeros pasos.
            </h4>
            <p>
            Nuestra especialización en la fabricación de cadenas es la columna vertebral de nuestro éxito. A lo largo de los años, hemos perfeccionado nuestros procesos y hemos invertido en tecnología de vanguardia para ofrecer cadenas que cumplen con los más altos estándares de calidad y durabilidad. Nuestras cadenas son confiables y versátiles, utilizadas en diversas industrias en todo el país.
            </p>
          </div>
        </div>

        <div className="third-section">
          <h2>
          En Metalúrgica El Abrojal, somos más que una empresa; somos un legado de más de 30 años de excelencia en la industria metalúrgica.
          </h2>
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
