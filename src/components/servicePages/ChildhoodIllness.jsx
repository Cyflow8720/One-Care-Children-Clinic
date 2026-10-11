
import { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/servicePages/ChildhoodIllness.css";

import Childhood1 from "../../assets/Childhood/Childhood1.png";
import Childhood2 from "../../assets/Childhood/Childhood2.png";
import Childhood3 from "../../assets/Childhood/Childhood3.png";
import Childhood4 from "../../assets/Childhood/Childhood4.png";


import {
  FaBaby,
  FaStethoscope,
  FaWeight,
  FaHeartbeat,
  FaCheck,
  FaArrowRight,
  FaChevronDown,
} from "react-icons/fa";

function Vaccination() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "When should my baby receive the first vaccines?",
      answer:
        "Some vaccines are recommended at birth, while others are given during infancy and childhood. Your pediatrician can guide you according to the applicable immunization schedule and your baby's vaccination records.",
    },
    {
      question: "Which vaccines does my child need?",
      answer:
        "Recommended vaccines depend on your child's age, vaccination history, health, and the immunization schedule being followed. Your pediatrician can help determine which doses are due.",
    },
    {
      question: "Are childhood vaccines safe?",
      answer:
        "Approved vaccines are evaluated for safety and effectiveness. Mild reactions, such as soreness at the injection site or a low-grade fever, may occur. Discuss any concerns or previous vaccine reactions with your pediatrician.",
    },
    {
      question: "What should I do if my child misses a vaccine?",
      answer:
        "Contact your pediatrician to review your child's vaccination record and determine the appropriate catch-up schedule. In most cases, a missed dose does not mean the entire vaccination series must be restarted.",
    },
    {
      question: "What care does my child need after vaccination?",
      answer:
        "Follow your healthcare professional's advice and monitor your child for unusual symptoms. Seek urgent medical attention for signs of a serious allergic reaction, such as difficulty breathing or swelling of the face or throat.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className="newborn-page">

      {/* HERO SECTION */}

      <section className="newborn-hero">
        <div className="section-container newborn-hero-inner">

          <div className="newborn-hero-content">
            <span className="newborn-eyebrow">
              CHILDHOOD ILLNESS
            </span>

            <h1 className="hero-title">
              <span>Expert Care for   </span>
              <span className="highlight">Childhood Illnesses</span>
            </h1>

            <p>
             Childhood illnesses can affect your child's comfort,
              energy, and daily activities. At One Care Children's Clinic, we focus on assessing common childhood symptoms,
              guiding appropriate treatment, and helping parents support their child's recovery with attentive pediatric care.
            </p>

            <div className="newborn-hero-buttons">
              <Link to="/contact" className="newborn-primary-btn">
                Book an Appointment
                <FaArrowRight />
              </Link>
            </div>
          </div>

          <div className="newborn-hero-image">
            <div className="hero-image-shape">
              <img
                src={Childhood1}
                alt="Baby receiving gentle pediatric care"
              />
            </div>
          </div>

        </div>
      </section>


      {/* INTRODUCTION */}

      <section className="newborn-intro" id="vaccination">
        <div className="section-container newborn-intro-inner">

          <div className="newborn-intro-image">
            <img
              src={Childhood2}
              alt="Pediatrician assessing a child before vaccination"
            />
          </div>

          <div className="newborn-intro-content">
            <span className="section-label">
              CARING FOR LITTLE ONES
            </span>

            <h2>
             Understanding  
              <span> Childhood Illnesses </span>
            </h2>

            <p>
              Children commonly experience illnesses such as fever, 
              cough, cold, stomach infections, and seasonal infections. Recognising symptoms 
              early and seeking appropriate medical advice can help identify health concerns and support timely treatment.
            </p>

            <p>
              At One Care Children's Clinic, we help parents understand their 
              child's symptoms, manage common illnesses, and recognise when further medical attention may be needed.
            </p>

            <div className="intro-highlight">
              <div>
                <strong>
                 The right care at the right time helps support your child's health, comfort, and recovery.
                  
                </strong>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* VACCINATION SERVICES */}

      <section className="newborn-services">
        <div className="section-container">

          <div className="section-heading">
            <span className="section-label">
              OUR CARE
            </span>

            <h2>
             Comprehensive Care for 
              <span> Childhood Illnesses</span>
            </h2>

            <p>
             Our pediatric services focus on assessing common childhood health concerns,
              understanding symptoms, and guiding parents towards appropriate treatment and recovery.
            </p>
          </div>

          <div className="newborn-care-grid">

            <div className="newborn-care-card">
              <div className="care-icon">
                <FaStethoscope />
              </div>

              <h3>Fever Assessment & Management</h3>

              <p>
               Assessment of fever and associated symptoms 
               to help identify possible causes and guide appropriate care.
              </p>
            </div>

            <div className="newborn-care-card">
              <div className="care-icon">
                <FaBaby />
              </div>

              <h3>Cough, Cold & Respiratory Infections</h3>

              <p>
                Evaluation of common respiratory symptoms, 
                including cough, cold, sore throat, and other breathing-related concerns.
              </p>
            </div>

            <div className="newborn-care-card">
              <div className="care-icon">
                <FaWeight />
              </div>

              <h3>Stomach & Digestive Problems</h3>

              <p>
               Assessment and guidance for common concerns such as vomiting, 
               diarrhoea, stomach discomfort, and constipation.
              </p>
            </div>

            <div className="newborn-care-card">
              <div className="care-icon">
                <FaHeartbeat />
              </div>

              <h3>Seasonal & Recurrent Infections</h3>

              <p>
               Evaluation of recurring symptoms and seasonal illnesses,
                with guidance on treatment, recovery, and preventive care.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* VACCINATION AND PROTECTION */}

      <section className="newborn-feature">
        <div className="section-container newborn-feature-content">

          <div className="newborn-feature-text">
            <span className="section-label">
             SYMPTOMS & RECOVERY
            </span>

            <h2>
             Helping Your Child Feel Better 
              <span> With the Right Care</span>
            </h2>

            <p>
              When a child becomes unwell, parents need clear 
              information and appropriate medical guidance. Our pediatric team focuses on understanding symptoms,
               assessing your child's condition, and helping families make informed decisions about care and recovery.
            </p>

            <ul className="feature-list">
              <li>
                <FaCheck />
                <span>Assessment of common childhood symptoms and health concerns</span>
              </li>

              <li>
                <FaCheck />
                <span>Guidance on managing illnesses and supporting recovery</span>
              </li>

              <li>
                <FaCheck />
                <span>Advice on hydration, nutrition, rest, and home care</span>
              </li>

              <li>
                <FaCheck />
                <span>Information about warning signs that require urgent medical attention</span>
              </li>
            </ul>
          </div>

          <div className="newborn-feature-image">
            <img
              src={Childhood3}
              alt="Baby receiving attentive pediatric care"
            />
          </div>

        </div>
      </section>


      {/* VACCINATION SCHEDULE */}

      <section className="newborn-growth-section">
        <div className="section-container newborn-growth-inner">

          <div className="newborn-growth-image">
            <img
              src={Childhood4}
              alt="Pediatric care supporting a child's healthy development"
            />
          </div>

          <div className="newborn-growth-content">
            <span className="section-label">
              ASSESSMENT & RECOVERY
            </span>

            <h2>
              Supporting Your Child Through 
              <span>Every Stage of Recovery</span>
            </h2>

            <p>
             Every child responds differently to illness.
              A pediatric assessment helps evaluate symptoms, understand your child's needs, 
             and determine appropriate next steps for treatment and recovery.
            </p>

            <div className="growth-points">
              <div>
                <strong>01.</strong>
                <span> Symptom Assessment</span>
              </div>

              <div>
                <strong>02.</strong>
                <span> Personalised Treatment Guidance</span>
              </div>

              <div>
                <strong>03.</strong>
                <span> Personalised Treatment Guidance</span>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* FINAL APPOINTMENT CTA */}

      <section className="newborn-cta" id="appointment">
        <div className="section-container newborn-cta-inner">

          <div className="newborn-cta-content">
            <span className="section-label">
              ONE CARE CHILDREN'S CLINIC
            </span>

            <h2>
             Caring for Your Child's
              <span>  Health at Every Step</span>
            </h2>

            <p>
             Book a pediatric consultation to discuss your child's
              symptoms, common illnesses, and appropriate treatment and recovery guidance.
            </p>
          </div>

          <Link to="/contact" className="newborn-cta-button">
            Book an Appointment
            <FaArrowRight />
          </Link>

        </div>
      </section>

    </main>
  );
}

export default Vaccination;
