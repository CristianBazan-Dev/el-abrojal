import React from "react";
import "./contactForm.css";

function ContactForm(props) {
  return (
    <div className="form-section">
      <div className="title-container">
        <h2 className="title">Envíe su correo</h2>
      </div>

      <form action="" className="contact-form">
        <input type="text" placeholder="Nombre completo" />
        <input type="text" placeholder="Mail de contacto" />
        <input type="text" placeholder="Asunto" />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Escriba su mensaje..."
        ></textarea>
        <button>Enviar</button>
      </form>
    </div>
  );
}

export default ContactForm;
