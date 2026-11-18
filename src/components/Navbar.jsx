
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/logo.png";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const navigate = useNavigate();

  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  const handleAppointment = () => {
    closeMenu();
    navigate("/appointment");
  };

  return (
    <header className="navbar">

      {/* LOGO */}
      <div className="logo">
        <Link to="/" onClick={closeMenu}>
          <img src={logo} alt="One Care Children's Clinic" />
        </Link>
      </div>

      {/* MOBILE HAMBURGER BUTTON */}
      <button
        type="button"
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* NAVIGATION */}
      <nav
        id="main-navigation"
        className={menuOpen ? "mobile-nav-open" : ""}
      >
        <ul className="nav-menu">

          <li>
            <Link to="/" onClick={closeMenu}>Home</Link>
          </li>

          <li>
            <Link to="/about" onClick={closeMenu}>About Us</Link>
          </li>

          {/* SERVICES */}
          <li className="services-dropdown">
            <div className="services-link">
              <a href="#" onClick={(e) => e.preventDefault()}>
                Services
              </a>

              <button
                type="button"
                className={`dropdown-arrow ${servicesOpen ? "open" : ""}`}
                onClick={() => setServicesOpen(!servicesOpen)}
                aria-label="Open services menu"
              >
                <FaChevronDown />
              </button>
            </div>

            {servicesOpen && (
              <ul className="services-menu">
                <li><Link to="/services/newborn-care" onClick={closeMenu}>Newborn Care</Link></li>
                <li><Link to="/services/vaccination" onClick={closeMenu}>Vaccination</Link></li>
                <li><Link to="/services/growth-development" onClick={closeMenu}>Growth & Development</Link></li>
                <li><Link to="/services/child-nutrition" onClick={closeMenu}>Child Nutrition</Link></li>
                <li><Link to="/services/childhood-illness" onClick={closeMenu}>Childhood Illness</Link></li>
                <li><Link to="/services/adolescent-care" onClick={closeMenu}>Adolescent Care</Link></li>
              </ul>
            )}
          </li>

          {/* MOBILE APPOINTMENT */}
          <li className="mobile-appointment">
            <button
              type="button"
              className="btn"
              onClick={handleAppointment}
            >
              Schedule Appointment
            </button>
          </li>

          <li>
            <Link to="/attachments" onClick={closeMenu}>Attachments</Link>
          </li>

          <li>
            <Link to="/gallery" onClick={closeMenu}>Gallery</Link>
          </li>

          <li>
            <Link to="/contact" onClick={closeMenu}>Contact Us</Link>
          </li>

        </ul>
      </nav>

    </header>
  );
}

export default Navbar;
