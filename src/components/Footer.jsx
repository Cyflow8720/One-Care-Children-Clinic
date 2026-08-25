import React, { useEffect, useRef, useState } from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaArrowUp,
} from "react-icons/fa";

import "../styles/Footer.css";

// =====================================================
// LOGO
// =====================================================
// CHANGE THIS PATH if your logo is stored somewhere else.
//
// Example:
// import logo from "../assets/logo.png";
//
// If your logo is already inside public, you can instead use:
// src="/logo.png"

import logo from "../assets/logo.png";


const Footer = () => {

  // =====================================================
  // FOOTER ANIMATION
  // =====================================================

  const footerRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {

        setIsVisible(entry.isIntersecting);

      },
      {
        threshold: 0.15,
      }
    );


    const currentFooter = footerRef.current;


    if (currentFooter) {
      observer.observe(currentFooter);
    }


    return () => {

      if (currentFooter) {
        observer.unobserve(currentFooter);
      }

    };

  }, []);


  // =====================================================
  // SCROLL TO TOP
  // =====================================================

  const scrollToTop = () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };


  // =====================================================
  // JSX
  // =====================================================

  return (

    <footer
      ref={footerRef}
      className={`site-footer ${
        isVisible ? "footer-visible" : ""
      }`}
    >

      <div className="footer-container">


        {/* =================================================
            MAIN FOOTER
        ================================================= */}

        <div className="footer-main">


          {/* ===============================================
              BRAND
          =============================================== */}

          <div className="footer-brand">

            <div className="footer-logo-wrapper">

              <img
                src={logo}
                alt="One Care Children's Clinic"
                className="footer-logo"
              />

            </div>


            <p className="footer-description">

              Caring for little ones with
              <br />
              expertise, compassion & heart.

            </p>


            {/* SOCIAL MEDIA */}

            <div className="footer-socials">

              <a
                href="https://www.instagram.com/onecare_childrensclinic/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="social-link instagram"
              >
                <FaInstagram />
              </a>


              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="social-link facebook"
              >
                <FaFacebookF />
              </a>

            </div>

          </div>


          {/* ===============================================
              QUICK LINKS
          =============================================== */}

          <div className="footer-column">

            <h3>
              Quick Links
            </h3>


            <ul>

              <li>
                <a href="#home">
                  Home
                </a>
              </li>

              <li>
                <a href="#about">
                  About Us
                </a>
              </li>

              <li>
                <a href="#services">
                  Services
                </a>
              </li>

              <li>
                <a href="#attachment">
                  Attachment
                </a>
              </li>

              <li>
                <a href="#testimonial">
                  Testimonial
                </a>
              </li>

            </ul>

          </div>


          {/* ===============================================
              CONTACT US
          =============================================== */}

          <div className="footer-column footer-contact">

            <h3>
              Contact Us
            </h3>


            {/* ADDRESS */}

            <div className="contact-item">

              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>

              <div className="contact-text">

                <span className="contact-label">
                  Address
                </span>

                <p>
                  OneCare Children Clinic,
                  <br />
                  Sanskriti Park, Mahakali Caves Road,
                  <br />
                  Opp Conosa School,
                  <br />
                  Andheri East - 40093
                </p>

              </div>

            </div>


            {/* PHONE */}

            <div className="contact-item">

              <div className="contact-icon">
                <FaPhoneAlt />
              </div>

              <div className="contact-text">

                <span className="contact-label">
                  Phone
                </span>

                <a href="tel:+918879333393">
                  +91 8879333393
                </a>

              </div>

            </div>


            {/* EMAIL */}

            <div className="contact-item">

              <div className="contact-icon">
                <FaEnvelope />
              </div>

              <div className="contact-text">

                <span className="contact-label">
                  Email
                </span>

                <a href="mailto:">
                  Email Us
                </a>

              </div>

            </div>


            {/* TIMINGS */}

            <div className="contact-item">

              <div className="contact-icon">
                <FaClock />
              </div>

              <div className="contact-text">

                <span className="contact-label">
                  Timings
                </span>

                <p>
                  Please contact the clinic
                  <br />
                  for consultation timings.
                </p>

              </div>

            </div>

          </div>

        </div>



        {/* =================================================
            FOOTER BOTTOM
        ================================================= */}

        <div className="footer-bottom">

          {/* <p>
            © 2026 One Care Children's Clinic
          </p> */}


          <div className="footer-legal">

            <a href="#privacy">
             © 2026 One Care Children's Clinic Privacy
            </a>

            <span>
              |
            </span>

            <a href="#terms">
              Terms
            </a>

          </div>


          {/* BACK TO TOP */}

          <button
            type="button"
            className="back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >

            <FaArrowUp />

          </button>

        </div>

      </div>

    </footer>

  );
};


export default Footer;