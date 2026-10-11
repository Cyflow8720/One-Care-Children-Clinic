import "../styles/TopBar.css";
import { Link } from "react-router-dom";

import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaAmbulance,
  FaMapMarkerAlt,
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

        {/* Location */}
        <a
          href="https://www.google.com/maps/place/Sanskriti+Park/@19.1251109,72.8662295,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c83ab41b43b5:0xec30a4af385587eb!8m2!3d19.1251109!4d72.8662295!16s%2Fg%2F1tjz6d_0?entry=ttu&g_ep=EgoyMDI2MTAwNy4wIKXMDSoASAFQAw%3D%3D"
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