
import "../styles/Hero.css";

import doctor from "../assets/doctor.png";
import heroBackground from "../assets/hero-background.png";
import React, { useEffect, useRef, useState } from "react";
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
          MAIN HERO CONTENT
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

      </div>


      {/* =========================
          DOCTOR IMAGE
      ========================= */}

      <div className="hero-doctor">

        <img
          src={doctor}
          alt="Pediatric Doctor"
        />

      </div>


      {/* =========================
          PATIENT SATISFACTION
      ========================= */}

      <div className="patient-card">

        <div className="stars">
          ★★★★★
        </div>

        <strong>Trusted by Happy Parents</strong>

        <span>1k+ Families Served</span>

      </div>


      {/* =========================
          STAT CARDS
      ========================= */}

      <div className="stats">

        <div className="stat-card">

          <strong>98%</strong>

          <span>
            Parents recommend
            <br />
            our care
          </span>

        </div>


        <div className="stat-card">

          <strong>24/7</strong>

          <span>
            Care & support
            <br />
            when you need it
          </span>

        </div>

      </div>


      {/* =========================
          SERVICE FEATURES
      ========================= */}

      <div
  ref={featuresRef}
  className={`hero-features ${
    featuresVisible ? "features-visible" : ""
  }`}
>

        <div className="feature-card">
          <span>♡</span>
          <p>Child-Friendly Care</p>
        </div>

        <div className="feature-card">
          <span>♡</span>
          <p>Expert Pediatric Care</p>
        </div>

        <div className="feature-card">
          <span>♡</span>
          <p>Complete Child Wellness</p>
        </div>

        <div className="feature-card">
          <span>♡</span>
          <p>Personalized Attention</p>
        </div>

      </div>


      {/* =========================
          SCROLL INDICATOR
      ========================= */}

      <div className="scroll-indicator">

        <div className="scroll-circle">
          ↓
        </div>

        <span>
          Scroll down
        </span>

      </div>

    </section>
  );
}

export default Hero;