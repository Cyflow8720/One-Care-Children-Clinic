import React, { useEffect } from "react";

import {
  FaHandHoldingMedical,
  FaAward,
  FaUserCheck,
  FaHospital
} from "react-icons/fa";

import "../styles/WhyChooseUs.css";

const WhyChooseUs = () => {

  const stats = [
    {
      icon: <FaHandHoldingMedical />,
      number: "25+",
      title: "Years of medical excellence",
      description: "Trusted healthcare with experience and expertise"
    },
    {
      icon: <FaAward />,
      number: "80%",
      title: "Successfully treated",
      description: "Effective treatment and patient-focused care"
    },
    {
      icon: <FaUserCheck />,
      number: "1K+",
      title: "Happy patients",
      description: "Providing compassionate care patients trust"
    },
    {
      icon: <FaHospital />,
      number: "42+",
      title: "Medical specialties",
      description: "Comprehensive multispeciality healthcare"
    }
  ];

  useEffect(() => {
    const section = document.querySelector(".why-section");
    const words = document.querySelectorAll(".scroll-word");

    if (!section || !words.length) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const start = windowHeight * 0.85;
      const end = windowHeight * 0.15;

      let progress = (start - rect.top) / (start - end);

      progress = Math.max(0, Math.min(1, progress));

      const activeWords = Math.floor(progress * words.length);

      words.forEach((word, index) => {
        if (index < activeWords) {
          word.classList.add("active");
        } else {
          word.classList.remove("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="why-section">

      <div className="why-container">

        {/* Heading */}
        <div className="why-heading">

          <span className="why-label">
            Why choose us
          </span>

          <h2 className="scroll-heading">
            {"Advanced medical solutions for managing chronic conditions and improving patient outcomes"
              .split(" ")
              .map((word, index) => (
                <span
                  key={index}
                  className="scroll-word"
                >
                  {word}
                </span>
              ))}
          </h2>

        </div>

        {/* Statistics */}
        <div className="why-stats">

          {stats.map((item, index) => (
            <div className="why-card" key={index}>

              <div className="why-icon">
                {item.icon}
              </div>

              <div className="why-number">
                {item.number}
              </div>

              <div className="why-divider"></div>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default WhyChooseUs;