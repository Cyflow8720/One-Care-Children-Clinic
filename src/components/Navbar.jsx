
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
  <Link to="/attachments" onClick={closeMenu}>
    Attachments
  </Link>
</li>


          {/* TESTIMONIALS */}
          <li>
            <a href="#" onClick={closeMenu}>
              Testimonials
            </a>
          </li>

<<<<<<< HEAD
          {/* Contact Us */}
<li>
  <Link to="/contact" onClick={closeMenu}>
    Contact Us
  </Link>
</li>
=======
          {/* Gallery */}
          <li>
            <a href="#" onClick={closeMenu}>
              Gallery
            </a>
          </li>

          {/* Contact us */}
          <li>
            <a href="#" onClick={closeMenu}>
              Contact us
            </a>
          </li>
>>>>>>> 14753ac36934b3c4c3dead1f83dd9a14f48ae181

        </ul>

      </nav>


      


        


     

    </header>
  );
}

export default Navbar;

