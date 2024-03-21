import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contactForm.css";
import toast, { Toaster } from "react-hot-toast";
import ReCAPTCHA from "react-google-recaptcha";

function ContactForm(props) {
  const form = useRef();
  const refCaptcha = useRef();
  const [isCaptcha, setIsCaptcha] = useState();

  // console.log(import.meta.env.VITE_RECAPTCHA_SITE_KEY);

  const captchaHandler = (value) => {
    value ? setIsCaptcha(true) : setIsCaptcha(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();



    if (isCaptcha) {
      emailjs
        .sendForm(
          import.meta.env.VITE_EMAIL_SERVICE_ID,
          import.meta.env.VITE_EMAIL_TEMPLATE_ID,
          form.current,
          import.meta.env.VITE_EMAIL_USER_ID,
        )
        .then(
          (result) => {
            if ((result.status = 200)) {
              toast.success("E-mail enviado. ¡Gracias por contactarse!");
            }
          },
          (error) => {
            console.log(error)
            toast.error(
              "Hubo un error al enviar el e-mail. Espere un momento o contactese mediante teléfono. ¡Gracias por su paciencia!"
            );
          }
        );
    } else {
      toast.error("Valide que es un humano, por favor. En caso de no ver el captcha, recargue la página.");
    }
  };

  return (
    <div className="form-section">
      <h2>Envienos un mail</h2>

      <form action="" className="contact-form" ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          placeholder="Nombre completo"
          name="user_name"
          required
        />
        <input
          type="email"
          placeholder="Mail de contacto"
          name="user_email"
          required
        />
        <input type="text" placeholder="Asunto" name="user_subject" />
        <textarea
          name="message"
          id=""
          cols="30"
          rows="10"
          placeholder="Escriba su mensaje..."
          required
        ></textarea>
        <ReCAPTCHA
          sitekey={`${import.meta.env.VITE_RECAPTCHA_SITE_KEY}`}
          onChange={captchaHandler}
          ref={refCaptcha}
        />
        <input class="btn" type="submit" value="Enviar" />
        <Toaster position="bottom-center" reverseOrder={false} />
      </form>
    </div>
  );
}

export default ContactForm;
