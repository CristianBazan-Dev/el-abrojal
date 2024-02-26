import React from "react";
import { ReactComponent as WhyIcon1 } from "../../../assets/icons/whyUs/why-1.svg";
import { ReactComponent as WhyIcon2 } from "../../../assets/icons/whyUs/why-2.svg";
import { ReactComponent as WhyIcon3 } from "../../../assets/icons/whyUs/why-3.svg";

import Logo from "../../../assets/logo.png";

import "./whyUs.css";

function WhyUs(props) {
  const whyCards = [
    {
      icon: "https://res.cloudinary.com/dhbvri4ni/image/upload/v1692109158/test-el-abrojal/%C3%8Dconos/Why-us/why-1_lhzjod.png",
      title: "Incorporación de nuevos productos y servicios",
      reasons: [
        "En Metalúrgica El Abrojal, la innovación es parte de nuestro ADN. Siempre estamos buscando formas de mejorar y expandir nuestra oferta.",
        "Recientemente, hemos incorporado nuevos productos, como clavos y ganchos para tejido olímpico, así como servicios de corte y plegado de chapa para satisfacer las demandas cambiantes del mercado.",
        "Estas adiciones reflejan nuestro compromiso de estar a la vanguardia de la industria y proporcionar soluciones integrales a nuestros clientes, respaldados por nuestra pasión por la calidad y la innovación",
      ],
    },
    {
      icon: "https://res.cloudinary.com/dhbvri4ni/image/upload/v1692109163/test-el-abrojal/%C3%8Dconos/Why-us/why-2_sbmfiu.png",
      title: "Mejoramiento Continuo de Procesos",
      reasons: [
        "Entendemos que el mundo está en constante evolución, y nuestra empresa también debe hacerlo.",
        "Es por eso que nos comprometemos a mejorar continuamente nuestros procesos de fabricación y operaciones.",
        "Esto nos permite mantenernos a la vanguardia de la industria, ofreciendo productos de alta calidad de manera eficiente y sostenible.",
      ],
    },
    {
      icon: "https://res.cloudinary.com/dhbvri4ni/image/upload/v1692109167/test-el-abrojal/%C3%8Dconos/Why-us/why-3_jnnymi.png",
      title: "Diversidad de Productos y Accesorios",
      reasons: [
        "No nos conformamos con ser solo expertos en cadenas; nuestra gama de productos incluye una amplia variedad de accesorios metálicos.",
        " Desde torniquetes hasta argollas, cadenas especiales, tranqueras, lanzas de seguridad y mosquetones, ofrecemos soluciones para una variedad de necesidades industriales y comerciales.",
      ],
    },
    {
      icon: "https://res.cloudinary.com/dz6lrvj7u/image/upload/v1699467395/%C3%8Dconos/Why-us/why-4_neq20f.png",
      title: "Evolución continua",
      reasons: [
        "A lo largo de los años, nuestra empresa ha sido un faro de calidad, compromiso y progreso desde nuestros primeros pasos",
        "Nuestra especialización en la fabricación de cadenas es la columna vertebral de nuestro éxito. Con el pasar del tiempo, hemos perfeccionado nuestros procesos y hemos invertido en tecnología de vanguardia para ofrecer cadenas que cumplen con los más altos estándares de calidad y durabilidad.",
      ],
    },
  ];

  const EraseAnimation = (e) => {
    const element = e.target;
    e.target.style.animation = "none";
  };

  return (
    <section className="whyUs-section">
      <div className="first-section">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quibusdam porro, dolores minima eum quae iste molestiae maxime illo totam enim iure ex. Praesentium possimus harum accusantium eum, beatae fugiat!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quibusdam porro, dolores minima eum quae iste molestiae maxime illo totam enim iure ex. Praesentium possimus harum accusantium eum, beatae fugiat!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quibusdam porro, dolores minima eum quae iste molestiae maxime illo totam enim iure ex. Praesentium possimus harum accusantium eum, beatae fugiat!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quibusdam porro, dolores minima eum quae iste molestiae maxime illo totam enim iure ex. Praesentium possimus harum accusantium eum, beatae fugiat!
        </p>
        <img src="https://www.rssinc.com/wp-content/uploads/2022/10/factory-workers-needed-2023.jpg" alt="" />
      </div>

      {/* <div className="why-section">
        <img src={Logo} alt="" />

        <div className="text">
          <h1>¿Por qué elegirnos?</h1>
          <h2>En Metalúrgica El Abrojal, somos más que una empresa</h2>

          <h2 className="accent">
            {" "}
            Somos un legado de más de 30 años de excelencia en la industria
            metalúrgica.
          </h2>
        </div>
      </div>

      <div className="cards-why">
        {whyCards.map((card, index) => {
          return (
            <div
              className="whyCard"
              key={index}
              onMouseEnter={(e) => {
                EraseAnimation(e);
              }}
            >
              <div className="images">
                <img
                  src={card.icon}
                  alt={`ícono de la carta que refiere a ${card.title}`}
                />
                <img
                  src="https://res.cloudinary.com/dhbvri4ni/image/upload/v1691605759/test-el-abrojal/Logos/logo_h2y6cy.png"
                  alt="logo de la empresa"
                />
              </div>

              <h4>{card.title}</h4>
              {card.reasons.map((reason, index) => {
                return <p key={index}>{reason}</p>;
              })}
            </div>
          );
        })}
      </div> */}
    </section>
  );
}

export default WhyUs;
