import React from "react";
import ContactForm from "./Form/ContactForm";
import "./contactPage.css";
import Map from "../../utils/map/Map";
import ContactInfo from "./Info/ContactInfo";

function ContactPage(props) {
  return (
    <section className="contact-page-section">
      <div className="first-section">
        <ContactInfo />
        <ContactForm />
      </div>

      <div className="second-section">
        <Map />
      </div>
    </section>
  );
}

export default ContactPage;
