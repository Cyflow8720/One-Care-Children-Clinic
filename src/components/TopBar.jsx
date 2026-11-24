import "../styles/TopBar.css";
import { Link } from "react-router-dom";

import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaAmbulance,
  FaMapMarkerAlt,
  FaYoutube,
} from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="clinic-topbar">
      <div className="clinic-topbar-inner">

        {/* Emergency */}
        <a
          href="tel:+918879333393"
          className="clinic-topbar-link"
        >
          <FaAmbulance className="clinic-topbar-contact-icon" />
          <span>
            Emergency: <strong>+91 88793 33393</strong>
          </span>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/918879333393"
          target="_blank"
          rel="noopener noreferrer"
          className="clinic-topbar-link"
        >
          <FaWhatsapp className="clinic-topbar-contact-icon" />
          <span>
            WhatsApp: <strong>+91 88793 33393</strong>
          </span>
        </a>

        {/* Divider */}
        <div className="clinic-topbar-divider"></div>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/onecare_childrensclinic?xtok=MWthcTFtMmR6dzFoMA=="
          className="clinic-social-link"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/share/1BxKwcESYp/"
          target="_blank"
          rel="noopener noreferrer"
          className="clinic-social-link"
          aria-label="Facebook"
        >
          <FaFacebookF />
        </a>

        {/* YouTube */}
<a
  href="https://youtube.com/@onecarechildrensclinic?si=V1KfjMGmDaolPGkX"
  target="_blank"
  rel="noopener noreferrer"
  className="clinic-social-link"
  aria-label="YouTube"
>
  <FaYoutube />
</a>

        {/* Location */}
        <a
          href="https://maps.app.goo.gl/5Z4UpT4eg71AVdfE8"
          target="_blank"
          rel="noopener noreferrer"
          className="clinic-social-link"
          aria-label="Location"
        >
          <FaMapMarkerAlt />
        </a>

         {/* Appointment */}
<Link
  to="/contact"
  className="clinic-appointment-button"
>
  Book Appointment
 
</Link>

      </div>
    </div>
  );
};

export default TopBar;