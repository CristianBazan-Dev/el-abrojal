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
              alt=""
            />
          </div>

          <div className="second-column">
            <h4>
              Lorem ipsum dolor sit amet consectetur. Ut leo ultrices duis
              integer congue sit enim praesent tortor.
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur. Scelerisque porta viverra
              auctor est auctor eu id urna turpis. Consequat ut interdum enim
              fermentum eget purus est viverra egestas. Lacus nunc odio turpis
              pretium ultrices faucibus. Massa vel nunc nisi suspendisse non.
              Eget sed diam arcu ut est mi. In lobortis lectus molestie sodales.
              Ac dignissim vitae elit turpis enim nec. Sit nulla mattis arcu
              ultrices praesent aliquam turpis fermentum. Id viverra eget nisl
              risus. Dolor hendrerit aliquet morbi sit adipiscing ut eleifend
              habitant sed. Nisi neque adipiscing sit quis pulvinar et. Cras
              aliquam tempor ut tellus faucibus dapibus augue. Ultrices ac nisi
              risus et mi cras. Aliquam fermentum pulvinar auctor at ullamcorper
              imperdiet. Fermentum consectetur arcu ut ultrices etiam mauris
              ultrices turpis. Nulla a quis sit commodo in mauris. Varius dui
              egestas morbi leo tempor amet. Augue consequat fringilla sed
              pharetra enim erat tellus risus tincidunt. Lorem amet sodales nunc
              tincidunt habitant non lacus.{" "}
            </p>
          </div>
        </div>

        <div className="third-section">
          <h2>
            Lorem ipsum dolor sit amet consectetur. Nunc semper sit dolor amet
            proin sit bibendum a pellentesque.
          </h2>
        </div>

        <div className="gallery-section">
          <CarouselGallery />
          <Gallery/>
        </div>
      </div>
    </section>
  );
}

export default History;
