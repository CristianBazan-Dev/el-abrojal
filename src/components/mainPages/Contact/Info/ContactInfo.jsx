import React from "react";
import "./contactInfo.css";
import { ReactComponent as Location } from "../../../../assets/icons/contact/location.svg";
import { ReactComponent as Mail } from "../../../../assets/icons/contact/mail.svg";
import { ReactComponent as Phone } from "../../../../assets/icons/contact/phone.svg";
import { ReactComponent as Facebook } from "../../../../assets/icons/social/fb.svg";
import { ReactComponent as LinkedIn } from "../../../../assets/icons/social/in.svg";
import { Link } from "react-router-dom";

function ContactInfo(props) {
  return (
    <div className="info">
      <h4>Metalúrgica El Abrojal</h4>

      <div className="detailed-info">
        <div className="items">
          <div className="item">
            <Phone />
            +54 9 3537 519583
          </div>
          <div className="item">
            <Location />
            Morrison, Córdoba, Argentina
          </div>
          <div className="item">
            <Mail />
            metalurgicaelabrojal@gmail.com
          </div>
        </div>
      </div>

      <div className="social-icons">
        <Link>
          <Facebook />
        </Link>

        <Link>
          <LinkedIn />
        </Link>
      </div>
    </div>
  );
}

export default ContactInfo;
