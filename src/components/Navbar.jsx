import { useState } from "react";
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

          <li>
            <a href="#" onClick={closeMenu}>
              Home
            </a>
          </li>


          <li>
            <a href="#" onClick={closeMenu}>
              About us
            </a>
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


            {/* Dropdown */}
            {servicesOpen && (
              <ul className="services-menu">

                <li>
                  <a href="#" onClick={closeMenu}>
                    Pediatric Consultation
                  </a>
                </li>

                <li>
                  <a href="#" onClick={closeMenu}>
                    Vaccination
                  </a>
                </li>

                <li>
                  <a href="#" onClick={closeMenu}>
                    Child Development
                  </a>
                </li>

                <li>
                  <a href="#" onClick={closeMenu}>
                    Newborn Care
                  </a>
                </li>

                <li>
                  <a href="#" onClick={closeMenu}>
                    Nutrition & Growth
                  </a>
                </li>

              </ul>
            )}

          </li>


          {/* Mobile Appointment */}
          <li className="mobile-appointment">

            <button className="btn">
              Schedule appointment
            </button>

          </li>


          <li>
            <a href="#" onClick={closeMenu}>
              Attachments
            </a>
          </li>


          <li>
            <a href="#" onClick={closeMenu}>
              Testimonials 
            </a>
          </li>

        </ul>

      </nav>


      {/* Right Side */}
      <div className="right-section">

        <div className="phone">
  <div className="phone-text">
    <span>Call us</span>
    <h4>+91 88793 33393</h4>
  </div>

  <FiPhoneCall className="phone-icon" />
</div>

        <button className="btn">
          Appointment
        </button>

      </div>


      {/* Mobile Menu */}
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