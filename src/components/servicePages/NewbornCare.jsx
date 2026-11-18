import { useState } from "react";
import "../../styles/servicePages/NewbornCare.css";
import { Link } from "react-router-dom";

// ========================================
// IMAGES
// ========================================

import heroImage from "../../assets/services/NewbornCare/newborn-hero.png";
import examinationImage from "../../assets/services/NewbornCare/newborn-examination.png";
import feedingImage from "../../assets/services/NewbornCare/newborn-feeding.png";
import growthImage from "../../assets/services/NewbornCare/newborn-growth.png";
import consultationImage from "../../assets/services/NewbornCare/newborn-consultation.png";

// ========================================
// ICONS
// ========================================

import {
  FaBaby,
  FaStethoscope,
  FaWeight,
  FaHeartbeat,
  FaCheck,
  FaArrowRight,
  FaChevronDown,
} from "react-icons/fa";

// ========================================
// COMPONENT
// ========================================

function NewbornCare() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };


  return (
    <main className="newborn-page">

      {/* ========================================
          HERO
      ======================================== */}

      <section className="newborn-hero">

        <div className="section-container newborn-hero-inner">

          <div className="newborn-hero-content">

            <span className="newborn-eyebrow">
              NEWBORN CARE
            </span>

            <h1 className="hero-title">
  <span>Gentle, Expert Care</span>
  <span className="highlight">for Your Newborn</span>
</h1>

            <p>
              The first weeks of life are essential for your baby's health and development. 
              Our newborn care focuses on regular health check-ups, feeding support, healthy
               weight gain, and early identification of common newborn concerns, 
               helping parents feel informed and confident.
            </p>

            <div className="newborn-hero-buttons">

              <Link
  to="/contact"
  className="newborn-primary-btn"
>
  Book Newborn Check-up
  <FaArrowRight />
</Link>

              

            </div>

            

          </div>

          <div className="newborn-hero-image">

            <div className="hero-image-shape">
              <img
                src={heroImage}
                alt="Newborn baby receiving pediatric care"
              />
            </div>

          </div>

        </div>

      </section>


           
      {/* ========================================
          INTRODUCTION — STARTING STRONG
      ======================================== */}

      <section className="newborn-intro" id="newborn-care">
        <div className="section-container newborn-intro-inner">

          <div className="newborn-intro-image">
            <img
              src={examinationImage}
              alt="Pediatrician examining a newborn baby"
            />
          </div>

          <div className="newborn-intro-content">
            <span className="section-label">
              STARTING STRONG
            </span>

            <h2>
              Why newborn care
              <span> matters</span>
            </h2>

            <p>
              The first 28 days of life are an important period for your baby’s health and well-being. Regular newborn check-ups help assess feeding, weight gain, jaundice and overall health, allowing concerns to be identified early and addressed appropriately.

            </p>

            <p>
              At OneCare Children’s Clinic, we guide parents through essential newborn care and help them feel confident in caring for their little one.

            </p>

            <div className="intro-highlight">
              

              <div>
                <strong>Every baby is unique. Our newborn care is tailored to your baby's individual needs.</strong>
                <span>
                  
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================
          WHAT WE COVER
      ======================================== */}

      <section className="newborn-services">

        <div className="section-container">

          <div className="section-heading">

            <span className="section-label">
              OUR CARE
            </span>

            <h2>
              Essential Care
              <span> for Your Newborn Baby</span>
            </h2>

            <p>
              Our newborn care services focus on your baby's health, growth, feeding, and wellbeing during the first weeks of life.
            </p>

          </div>


          <div className="newborn-care-grid">

            <div className="newborn-care-card">

              <div className="care-icon">
                <FaStethoscope />
              </div>

              <h3>
                Newborn health check-ups and examination
              </h3>

              <p>
                Routine assessments to monitor your baby's
                overall health and wellbeing.
              </p>

            </div>


            <div className="newborn-care-card">

              <div className="care-icon">
                <FaBaby />
              </div>

              <h3>Breastfeeding and feeding support
              </h3>

              <p>
               Helping Your Newborn Feed and Grow Well
              </p>

            </div>


            <div className="newborn-care-card">

              <div className="care-icon">
                <FaWeight />
              </div>

              <h3>
                Weight monitoring and assessment of weight gain
              </h3>

              <p>
                Regular monitoring of weight, growth and
                important developmental changes.
              </p>

            </div>


            <div className="newborn-care-card">

              <div className="care-icon">
                <FaHeartbeat />
              </div>

              <h3>
                Newborn jaundice assessment
              </h3>

              <p>
                Assessment of common newborn concerns and
                guidance on when medical attention is needed.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ========================================
          FEEDING SECTION
      ======================================== */}

      <section className="newborn-feature">

        <div className="section-container newborn-feature-content">

          <div className="newborn-feature-text">

            <span className="section-label">
              FEEDING & WELLBEING
            </span>

            <h2>
              Supporting Your Baby’s 
              <span> Feeding and Well-being</span>
            </h2>

            <p>
              Feeding is an essential part of your newborn’s early growth. We guide parents on breastfeeding, feeding cues, common feeding difficulties and signs of adequate feeding, with individualised advice to support the baby’s health and well-being.

            </p>

            <ul className="feature-list">

              <li>
                <FaCheck />
                <span>Breastfeeding guidance</span>
              </li>

              <li>
                <FaCheck />
                <span>Feeding pattern support</span>
              </li>

              <li>
                <FaCheck />
                <span>Monitoring weight gain</span>
              </li>

              <li>
                <FaCheck />
                <span>Guidance for common feeding concerns</span>
              </li>

            </ul>

          </div>


          <div className="newborn-feature-image">

            <img
              src={feedingImage}
              alt="Newborn feeding support"
            />

          </div>

        </div>

      </section>


      {/* ========================================
          GROWTH SECTION
      ======================================== */}

      <section className="newborn-growth-section">

        <div className="section-container newborn-growth-inner">

          <div className="newborn-growth-image">

            <img
              src={growthImage}
              alt="Newborn growth and weight monitoring"
            />

          </div>


          <div className="newborn-growth-content">

            <span className="section-label">
              GROWTH MONITORING
            </span>

            <h2>
              Monitoring Your Baby's
              <span> Early Growth</span>
            </h2>

            <p>
              Regular newborn assessments help monitor weight gain, feeding adequacy and overall well-being. Our paediatric team guides parents on their baby’s progress and recommends further evaluation when needed.
            </p>

            <div className="growth-points">

              <div>
                <strong>01.  </strong>
                <span>Weight monitoring</span>
              </div>

              <div>
                <strong>02.  </strong>
                <span>Feeding assessment</span>
              </div>

              <div>
                <strong>03. </strong>
                <span>Overall wellbeing</span>
              </div>

            </div>

          </div>

        </div>

      </section>
      {/* ========================================
          APPOINTMENT CTA
      ======================================== */}

      <section
        className="newborn-cta"
        id="appointment"
      >

        <div className="section-container newborn-cta-inner">

          <div className="newborn-cta-content">

            <span className="section-label">
              ONE CARE CHILDREN'S CLINIC
            </span>

            <h2>
              Give your little one
              <span> the right start.</span>
            </h2>

            <p>
              Have questions about your newborn's health,
              feeding or growth? Schedule a consultation
              with our pediatric care team.
            </p>

          </div>

          
<Link
  to="/contact"
  className="newborn-cta-button"
>
  Book an Appointment
  <FaArrowRight />
</Link>


        </div>

      </section>

    </main>
  );
}

export default NewbornCare;