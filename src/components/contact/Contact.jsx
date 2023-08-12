import React from "react";
import "./contact.css";

import { ReactComponent as Location } from "../../assets/icons/contact/location.svg";
import { ReactComponent as Mail } from "../../assets/icons/contact/mail.svg";
import { ReactComponent as Phone } from "../../assets/icons/contact/phone.svg";
import { ReactComponent as Facebook } from "../../assets/icons/contact/fb-round.svg";
import { Link } from "react-router-dom";

function Contact(props) {
  return (
    <section className="contact-section">
      <div className="contact-info">
        <div className="text">
          <h2>¿Dónde encontrarnos?</h2>

          <ul>
            <Link>
              <div className="contact-element">
                <Location />
                <p>
                  Pres. Juan Domingo Perón 862, Morrison (X2568), Córdoba{" "}
                  <li>Lunes a viernes - 9:00 am a 17:00 pm.</li>
                </p>
              </div>
            </Link>

            <Link>
              <div className="contact-element">
                <Mail />
                <p>panebianco@gmail.com</p>
              </div>
            </Link>

            <Link>
              <div className="contact-element">
                <Phone />
                <p>3537 342323</p>
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

        <div className="map">Mapa</div>
      </div>
    </section>
  );
}

export default Contact;
