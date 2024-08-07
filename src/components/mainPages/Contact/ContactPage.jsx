import React from "react";
import ContactForm from "./Form/ContactForm";
import "./contactPage.css";
import Map from "../../utils/map/Map";
import ContactInfo from "./Info/ContactInfo";
import { Link } from "react-router-dom";

function ContactPage(props) {
  return (
    <section className="contact-page-section">
      <div className="first-section">
        <ContactInfo />
        <ContactForm />
      </div>

      <div className="second-section">
        <Map />

        <div className="info">
          <div className="location-info">
            <h2>Nuestra ubicación</h2>
            <h3>Pres. Juan Domingo Perón 862, Morrison, Córdoba</h3>
          </div>

          <br />
          <ul>
            <h3>Horarios de atención</h3>
            <li>Lunes: 7am - 12:30pm / 14:30pm - 18pm</li>
            <li>Martes: 7am - 12:30pm / 14:30pm - 18pm</li>
            <li>Miercoles: 7am - 12:30pm / 14:30pm - 18pm</li>
            <li>Jueves: 7am - 12:30pm / 14:30pm - 18pm</li>
            <li>Viernes: 7am - 12:30pm / 14:30pm - 17pm</li>
          </ul>

          <div className="action">
            <h3>
              Para mayores detalles sobre cómo llegar, puede comunicarse con
              nosotros{" "}
            </h3>
            <Link
              to="https://walink.co/5f6a74"
              target="_blank"
              className="button"
            >
              Haciendo click aquí
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
