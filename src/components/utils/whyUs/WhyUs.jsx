import React from "react";
import { ReactComponent as WhyIcon1 } from "../../../assets/icons/whyUs/why-1.svg";
import { ReactComponent as WhyIcon2 } from "../../../assets/icons/whyUs/why-2.svg";
import { ReactComponent as WhyIcon3 } from "../../../assets/icons/whyUs/why-3.svg";

import "./whyUs.css";

function WhyUs(props) {
  const whyCards = [
    {
      icon: "https://res.cloudinary.com/dhbvri4ni/image/upload/v1692109158/test-el-abrojal/%C3%8Dconos/Why-us/why-1_lhzjod.png",
      title: "Title 1",
      reasons: ["Reason I", "Reason II", "Reason III"],
    },
    {
      icon: "https://res.cloudinary.com/dhbvri4ni/image/upload/v1692109163/test-el-abrojal/%C3%8Dconos/Why-us/why-2_sbmfiu.png",
      title: "Title 2",
      reasons: ["Reason I", "Reason II", "Reason III"],
    },
    {
      icon: "https://res.cloudinary.com/dhbvri4ni/image/upload/v1692109167/test-el-abrojal/%C3%8Dconos/Why-us/why-3_jnnymi.png",
      title: "Title 3",
      reasons: ["Reason I", "Reason II", "Reason III"],
    },
  ];

  return (
    <section className="whyUs-section">
      <h3>¿Por qué elegirnos?</h3>

      <div className="cards-why">
        {whyCards.map((card, index) => {
          return (
            <div className="whyCard" key={index}>
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
                return <p key={index}>- {reason}</p>;
              })}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default WhyUs;
