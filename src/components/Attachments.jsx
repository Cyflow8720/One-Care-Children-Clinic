import { useEffect, useRef, useState } from "react";
import "../styles/Attachments.css";

const Attachments = () => {
  const hospitals = [
    {
  name: "OneCare Children’s Clinic",
  address:
    "Sanskriti Park, Mahakali Caves Road, Opp. Canossa School, Andheri East, Mumbai - 400093",

  mapLink:
    "https://www.google.com/maps?q=OneCare+Children's+Clinic,+Sanskriti+Park,+Mahakali+Caves+Road,+Andheri+East,+Mumbai&output=embed",
},
    {
      name: "Criticare Asia Hospital  – Andheri east",
      address:
        "Plot No 516, Beside SBI, Teli Gali, Maheshwari Nagar, Andheri East, Mumbai, Maharashtra - 400069",
        mapLink:
      "https://www.google.com/maps?q=19.1181073,72.8505634&output=embed"},
    
  ];

  return (
    <section className="attachments-section">

      {/* Section Heading */}
      <div className="attachments-heading">
        <span>Our Locations</span>
        <h2>Visit Our Hospital</h2>
        <p>
          Find our hospital locations and get the care your family deserves.
        </p>
      </div>

      {/* Hospital Cards */}
      <div className="hospital-cards">
        {hospitals.map((hospital, index) => (
          <div className="hospital-card" key={index}>

            {/* Left Content */}
            <div className="hospital-info">
              <span className="hospital-label">
                HOSPITAL {index + 1}
              </span>

              <h3>{hospital.name}</h3>

              <p className="hospital-address">
                {hospital.address}
              </p>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  hospital.address
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="direction-btn"
              >
                Get Directions
              </a>
            </div>

            {/* Right Map */}
            <div className="hospital-map">
              <iframe
                src={hospital.mapLink}
                title={`${hospital.name} Location`}
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>

          </div>
        ))}
      </div>

      {/* Experience Card */}
      <div className="experience-card">

        <div className="experience-content">
          <span className="experience-label">
            OUR EXPERIENCE
          </span>

          <h2>
            Compassionate Care Backed by Experience
          </h2>

          <p>
            With years of experience in women's and children's healthcare,
            our team is committed to providing trusted, personalized and
            compassionate medical care for every family.
          </p>

          <div className="experience-stats">

            <div className="experience-stat">
              <strong>25+</strong>
              <span>Years of Experience</span>
            </div>

            <div className="experience-stat">
              <strong>10K+</strong>
              <span>Happy Families</span>
            </div>

            <div className="experience-stat">
              <strong>24/7</strong>
              <span>Patient Support</span>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
};

export default Attachments;