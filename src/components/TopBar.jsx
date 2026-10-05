import "../styles/TopBar.css";

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
          href="#"
          className="clinic-social-link"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>

        {/* Facebook */}
        <a
          href="#"
          className="clinic-social-link"
          aria-label="Facebook"
        >
          <FaFacebookF />
        </a>

        {/* Location */}
        <a
          href="https://www.google.com/maps"
          target="_blank"
          rel="noopener noreferrer"
          className="clinic-social-link"
          aria-label="Location"
        >
          <FaMapMarkerAlt />
        </a>

        {/* Appointment */}
        <a
          href="/book-appointment"
          className="clinic-appointment-button"
        >
          Book Appointment
          <span className="appointment-arrow">→</span>
        </a>

      </div>
    </div>
  );
};

export default TopBar;