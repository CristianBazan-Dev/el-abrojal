import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contactForm.css";
import toast, { Toaster } from "react-hot-toast";

function ContactForm(props) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAIL_USER_ID
      )
      .then(
        (result) => {
          if ((result.status = 200)) {
            toast.success("E-mail enviado. ¡Gracias por contactarse!");
          }
        },
        (error) => {
          toast.error(
            "Hubo un error al enviar el e-mail. Espere un momento o contactese mediante teléfono. ¡Gracias por su paciencia!"
          );
          console.log(error.text);
        }
      );
  };

  return (
    <div className="form-section">
      <Toaster position="top-center" reverseOrder={false} />

      <form action="" className="contact-form" ref={form} onSubmit={sendEmail}>
        <input type="text" placeholder="Nombre completo" name="user_name" />
        <input type="text" placeholder="Mail de contacto" name="user_email" />
        <input type="text" placeholder="Asunto" name="user_subject" />
        <textarea
          name="message"
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
