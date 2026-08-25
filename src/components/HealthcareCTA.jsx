import React, { useEffect, useRef, useState } from "react";
import "../styles/HealthcareCTA.css";

import photoOne from "../assets/healthcare/photo-one.png";
import photoTwo from "../assets/healthcare/photo-two.png";
import photoThree from "../assets/healthcare/photo-three.png";
import photoFour from "../assets/healthcare/photo-four.png";
import photoFive from "../assets/healthcare/photo-five.png";
import photoSix from "../assets/healthcare/photo-six.png";

const HealthcareCTA = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Section entered viewport
          setIsVisible(true);
        } else {
          // Section left viewport
          // Reset animation so it can play again
          setIsVisible(false);
        }
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(section);

    return () => {
      observer.unobserve(section);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`healthcare-cta ${
        isVisible ? "healthcare-cta-visible" : ""
      }`}
    >
      {/* Floating Images */}

      <div className="healthcare-image image-one">
        <img src={photoOne} alt="Healthcare consultation" />
      </div>

      <div className="healthcare-image image-two">
        <img src={photoTwo} alt="Healthcare professional" />
      </div>

      <div className="healthcare-image image-three">
        <img src={photoThree} alt="Healthcare care" />
      </div>

      <div className="healthcare-image image-four">
        <img src={photoFour} alt="Medical consultation" />
      </div>

      <div className="healthcare-image image-five">
        <img src={photoFive} alt="Patient care" />
      </div>

      <div className="healthcare-image image-six">
        <img src={photoSix} alt="Doctor consultation" />
      </div>

      {/* Decorative Lines */}

      <div className="decorative-lines lines-left">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="decorative-lines lines-right">
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Main Content */}

      <div className="healthcare-cta-content">
        <h2>
          Contact us for
          <br />
          personalized health care
        </h2>

        <p>
          Providing trusted, medical care focused on your comfort
        </p>

        <button
          className="healthcare-cta-button"
          onClick={() => {
            window.location.href = "#appointment";
          }}
        >
          Appointment now
        </button>
      </div>
    </section>
  );
};

export default HealthcareCTA;