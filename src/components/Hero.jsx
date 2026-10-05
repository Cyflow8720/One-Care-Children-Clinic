import "../styles/Hero.css";

import doctor from "../assets/doctor.png";
import heroBackground from "../assets/hero-background.png";

import gallery1 from "../assets/gallery/gallery1.png";
import gallery2 from "../assets/gallery/gallery2.png";
import gallery3 from "../assets/gallery/gallery3.png";

import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function Hero() {
  const featuresRef = useRef(null);
  const [featuresVisible, setFeaturesVisible] = useState(false);

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

        <h1>
          Helping Little Ones
          <br />
          <span>Grow Healthy & Happy</span>
        </h1>

        <p>
          Understanding every little health concern.
          Finding the right path to better health.
          Nurturing happier, healthier tomorrows.
        </p>

        <button className="hero-btn">
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


          {/* CARD 2 */}
          <div className="trust-card">

            <strong className="trust-number">
              98%
            </strong>

            <span>
              Parents recommend
              <br />
              our care
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


      {/* =========================
          GALLERY
      ========================= */}

      <div className="hero-gallery">

        <div className="gallery-photo gallery-photo-one">
          <img
            src={gallery1}
            alt="Clinic"
          />
        </div>

        <div className="gallery-photo gallery-photo-two">
          <img
            src={gallery2}
            alt="Clinic"
          />
        </div>

        <div className="gallery-photo gallery-photo-three">
          <img
            src={gallery3}
            alt="Clinic"
          />
        </div>


        {/* GALLERY LABEL */}

        <div className="gallery-info">

          <div>
            <span>OUR CLINIC</span>

            <h3>
              Explore Our Space
            </h3>
          </div>

          <Link
            to="/gallery"
            className="gallery-btn"
          >
            View Gallery →
          </Link>

        </div>

      </div>


      

    </section>
  );
}

export default Hero;