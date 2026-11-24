import "../styles/Hero.css";

import doctor from "../assets/doctor.png";
import heroBackground from "../assets/hero-background.png";
import { useNavigate } from "react-router-dom";
import gallery1 from "../assets/gallery/gallery1.png";
import gallery2 from "../assets/gallery/gallery2.png";
import gallery3 from "../assets/gallery/gallery3.png";

import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function Hero() {
  const featuresRef = useRef(null);
  const [featuresVisible, setFeaturesVisible] = useState(false);
const navigate = useNavigate();
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFeaturesVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >

      {/* =========================
          HERO CONTENT
      ========================= */}

      <div className="hero-content">

        <span className="hero-tag">
          Trusted Pediatric Care
        </span>

<h1 className="hero-title">
  <span className="title-first">Expert Pediatric Care for</span>
  <span className="title-second">Healthier &amp; Happier Childhood</span>
</h1>


        <p>
          Compassionate, comprehensive and personalised healthcare for newborns, infants, children and adolescents.

From newborn care and vaccinations to growth, development and specialised paediatric care, we are here to support your child’s health at every stage.
        </p>

        <button
  className="hero-btn"
  onClick={() => navigate("/contact")}
>
  Book an Appointment
</button>


        {/* =========================
            TRUST CARDS
        ========================= */}

        <div className="hero-trust-cards">

          {/* CARD 1 */}
          <div className="trust-card trust-card-main">

            <div className="trust-stars">
              ★★★★★
            </div>

            <strong>
              Trusted by Happy Parents
            </strong>

            <span>
              1k+ Families Served
            </span>

          </div>


          


          {/* CARD 3 */}
          <div className="trust-card">

            <strong className="trust-number">
              24/7
            </strong>

            <span>
              Care & support
              <br />
              when you need it
            </span>

          </div>

        </div>

      </div>


      {/* =========================
          DOCTOR
      ========================= */}

      <div className="hero-doctor">

        <img
          src={doctor}
          alt="Pediatric Doctor"
        />

      </div>


      {/* Gallery visuals */}
                <div className="appointment-hero-gallery">
                  <div className="hero-gallery-decoration"></div>
      
                  <div className="hero-gallery-image hero-gallery-image-back">
                    <img src={gallery1} alt="Children's clinic" />
                  </div>
      
                  <div className="hero-gallery-image hero-gallery-image-middle">
                    <img src={gallery2} alt="Clinic care" />
                  </div>
      
                  <div className="hero-gallery-image hero-gallery-image-front">
                    <img src={gallery3} alt="One Care clinic gallery" />
                  </div>
      
                  <Link to="/gallery" className="hero-gallery-label">
                    <span className="hero-gallery-label-icon">
                      <svg
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        aria-hidden="true"
                      >
                        <rect x="3" y="3" width="18" height="18" rx="3" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <path d="m21 15-5-5L5 21" />
                      </svg>
                    </span>
      
                    <span className="hero-gallery-label-copy">
                      <strong>Explore Our Gallery</strong>
                      <span>Take a look inside our clinic</span>
                    </span>
      
                    <span className="hero-gallery-arrow">↗</span>
                  </Link>
                </div>


      

    </section>
  );
}

export default Hero;