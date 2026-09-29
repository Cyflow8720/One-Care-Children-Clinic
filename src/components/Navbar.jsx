
import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/logo.png";
import { FaChevronDown } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className="navbar">

      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="One Care Children's Clinic" />
      </div>


      {/* Navigation */}
      <nav className={menuOpen ? "mobile-nav-open" : ""}>

        <ul className="nav-menu">

          {/* HOME */}
          <li>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>


          {/* ABOUT */}
          <li>
            <Link to="/about" onClick={closeMenu}>
              About Us
            </Link>
          </li>


          {/* SERVICES DROPDOWN */}
          <li className="services-dropdown">

            <div className="services-link">

              <a
                href="#"
                onClick={(e) => e.preventDefault()}
              >
                Services
              </a>

              <button
                className={`dropdown-arrow ${servicesOpen ? "open" : ""}`}
                onClick={() => setServicesOpen(!servicesOpen)}
                aria-label="Open services menu"
              >
                <FaChevronDown />
              </button>

            </div>


            {/* SERVICES MENU */}
            {servicesOpen && (
              <ul className="services-menu">

                {/* NEWBORN CARE */}
                <li>
                  <Link
                    to="/services/newborn-care"
                    onClick={closeMenu}
                  >
                    Newborn Care
                  </Link>
                </li>


                {/* VACCINATION */}
                <li>
                  <Link
                    to="/services/vaccination"
                    onClick={closeMenu}
                  >
                    Vaccination
                  </Link>
                </li>


                {/* GROWTH & DEVELOPMENT */}
                <li>
                  <Link
                    to="/services/growth-development"
                    onClick={closeMenu}
                  >
                    Growth & Development
                  </Link>
                </li>


                {/* CHILD NUTRITION */}
                <li>
                  <Link
                    to="/services/child-nutrition"
                    onClick={closeMenu}
                  >
                    Child Nutrition
                  </Link>
                </li>


                {/* CHILDHOOD ILLNESS */}
                <li>
                  <Link
                    to="/services/childhood-illness"
                    onClick={closeMenu}
                  >
                    Childhood Illness
                  </Link>
                </li>


                {/* ADOLESCENT CARE */}
                <li>
                  <Link
                    to="/services/adolescent-care"
                    onClick={closeMenu}
                  >
                    Adolescent Care
                  </Link>
                </li>

              </ul>
            )}

          </li>


          {/* MOBILE APPOINTMENT */}
          <li className="mobile-appointment">

            <button className="btn">
              Schedule appointment
            </button>

          </li>


          {/* ATTACHMENTS */}
          <li>
            <a href="#" onClick={closeMenu}>
              Attachments
            </a>
          </li>


          {/* TESTIMONIALS */}
          <li>
            <a href="#" onClick={closeMenu}>
              Testimonials
            </a>
          </li>

        </ul>

      </nav>


      {/* RIGHT SIDE */}
      <div className="right-section">

        <div className="phone">

          <div className="phone-text">
            <span>Call us</span>
            <h4>+91 88793 33393</h4>
          </div>

          <FiPhoneCall className="phone-icon" />

        </div>


        {/* APPOINTMENT BUTTON */}
        <button
          className="btn"
          onClick={() => {
            window.location.href = "#appointment";
          }}
        >
          Appointment
        </button>

      </div>


      {/* MOBILE MENU */}
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

    </header>
  );
}

export default Navbar;

