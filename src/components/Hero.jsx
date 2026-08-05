import React from "react";
import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <span className="hero-tag">
          Trusted Pediatric Care
        </span>

        <h1>
          Caring for Little Ones,
          <br />
          Every Step of the Way
        </h1>

        <p>
          Compassionate pediatric care focused on your child’s
          health, growth, and well-being.
        </p>

        <button className="hero-btn">
          Book an Appointment
        </button>

      </div>

    </section>
  );
}

export default Hero;