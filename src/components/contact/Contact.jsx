import React from "react";
import "./contact.css";

import { ReactComponent as Location } from "../../assets/icons/contact/location.svg";
import { ReactComponent as Mail } from "../../assets/icons/contact/mail.svg";
import { ReactComponent as Phone } from "../../assets/icons/contact/phone.svg";
import { ReactComponent as Facebook } from "../../assets/icons/contact/fb-round.svg";
import { Link } from "react-router-dom";
import Map from "../utils/map/Map";

function Contact(props) {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-info">
        <div className="text">
          <h2>¿Dónde encontrarnos?</h2>

          <ul>
            <Link>
              <div className="contact-element">
                <Location />
                <p>
                  Pres. Juan Domingo Perón 862, Morrison (X2568), Córdoba{" "}
                  <li>
                    Lunes a Jueves: 7:00am a 12:30pm - 14:30pm a 18:00 pm.
                  </li>
                  <li>Viernes: 7:00am 12:30pm - 14:30pm a 17:00 pm.</li>
                </p>
              </div>
            </Link>

            <Link>
              <div className="contact-element">
                <Mail />
                <p>metalurgicaelabrojal@gmail.com</p>
              </div>
            </Link>

            <Link>
              <div className="contact-element">
                <Phone />
                <p>+54 9 3537 494202</p>
              </div>
            </Link>

            <Link>
              <div className="contact-element">
                <Facebook />
                <p>/elabrojal</p>
              </div>
            </Link>
          </ul>
        </div>

        <Map />
      </div>
    </section>
  );
}

export default Contact;
