import { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/servicePages/Vaccination.css";

import VACCINATION1 from "../../assets/VACCINATION/VACCINATION 1.png";
import VACCINATION2 from "../../assets/VACCINATION/VACCINATION 2.png";
import VACCINATION3 from "../../assets/VACCINATION/VACCINATION 3.png";
import VACCINATION4 from "../../assets/VACCINATION/VACCINATION 4.png";

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

  const examinationImage = VACCINATION2;
  const feedingImage = VACCINATION3;
  const growthImage = VACCINATION4;

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
              CHILD VACCINATION
            </span>

            <h1 className="hero-title">
              <span>A Healthy Start</span>
              <span className="highlight">Through Vaccination</span>
            </h1>

            <p>
              Your child’s vaccination needs change with every stage of growth. 
              Knowing which vaccines are due, when they should be given, 
              and what to expect can help you make informed decisions about your child’s health.
              
            </p>
            <p> At OneCare Children’s Clinic, we offer personalised vaccination guidance based on your child’s age, 
              immunisation history, and individual needs, helping you navigate each stage of childhood with clarity and confidence.</p>

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
                src={VACCINATION1}
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
              src={examinationImage}
              alt="Pediatrician assessing a child before vaccination"
            />
          </div>

          <div className="newborn-intro-content">
            <span className="section-label">
              A HEALTHIER FUTURE
            </span>

            <h2>
              Why Is Childhood Vaccination
              <span> Important?</span>
            </h2>

            <p>
              Vaccination helps the body develop protection against specific 
              infectious diseases, reducing the risk of serious illness and related complications. Receiving recommended vaccines
               at the appropriate ages is an important part of your child’s preventive healthcare.
            </p>

            <p>
              At OneCare Children’s Clinic, we help parents understand 
              recommended childhood vaccines, their benefits, and what to expect before and after vaccination.
               We also provide guidance on common post-vaccination reactions and when medical advice may be needed.
            </p>

            <div className="intro-highlight">
              <div>
                <strong>
                  Every vaccine has a purpose. Timely, age-appropriate immunisation helps protect your child’s health.
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
              Comprehensive Vaccination
              <span> Care for Children</span>
            </h2>

            <p>
              Every child’s vaccination needs evolve with
               age and medical history. We guide parents through recommended 
               immunisations, help them keep track of upcoming doses, 
               and provide advice when a scheduled vaccine has been missed.

            </p>
          </div>

          <div className="newborn-care-grid">

            <div className="newborn-care-card">
              <div className="care-icon">
                <FaStethoscope />
              </div>

              <h3>Newborn & Infant Vaccination</h3>

              <p>
                Guidance on vaccines recommended 
                during the newborn period and infancy, in accordance with the applicable immunisation schedule.
              </p>
            </div>

            <div className="newborn-care-card">
              <div className="care-icon">
                <FaBaby />
              </div>

              <h3>Childhood Immunisation</h3>

              <p>
                Support with routine childhood vaccinations to help protect against vaccine-preventable diseases throughout the growing years.
              </p>
            </div>

            <div className="newborn-care-card">
              <div className="care-icon">
                <FaWeight />
              </div>

              <h3>Vaccination Schedule Guidance</h3>

              <p>
                Clear guidance on recommended vaccine timings, upcoming doses,
                 and immunisation requirements based on your child’s age and vaccination history.

              </p>
            </div>

            <div className="newborn-care-card">
              <div className="care-icon">
                <FaHeartbeat />
              </div>

              <h3>Catch-Up Vaccination Guidance</h3>

              <p>
                If your child has missed a scheduled dose, 
                we can review the vaccination records and advise on an appropriate catch-up plan.
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
              VACCINATION & PROTECTION
            </span>

            <h2>
              Helping Protect Your Child
              <span> at Every Stage</span>
            </h2>

            <p>
              Vaccination is an essential part of preventive pediatric care. 
              Understanding the recommended schedule and keeping vaccination records
               up to date can help parents plan their child’s immunisations with confidence.
            </p>

            <ul className="feature-list">
              <li>
                <FaCheck />
                <span>Guidance on age-appropriate vaccines</span>
              </li>

              <li>
                <FaCheck />
                <span>Support with vaccination records</span>
              </li>

              <li>
                <FaCheck />
                <span>Information about common post-vaccination reactions</span>
              </li>

              <li>
                <FaCheck />
                <span>Advice on follow-up doses and missed vaccinations</span>
              </li>
            </ul>
          </div>

          <div className="newborn-feature-image">
            <img
              src={feedingImage}
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
              src={growthImage}
              alt="Pediatric care supporting a child's healthy development"
            />
          </div>

          <div className="newborn-growth-content">
            <span className="section-label">
              VACCINATION SCHEDULE
            </span>

            <h2>
              Staying on Track With
              <span> Your Child's Vaccines</span>
            </h2>

            <p>
              Vaccines are recommended at specific ages to provide protection when
               children need it. Your child’s 
              vaccination history, age, and previous doses help determine which vaccines are due.
            </p>
            <p>Our pediatric vaccination guidance can help you understand the recommended schedule and plan your child’s upcoming doses.
</p>

            <div className="growth-points">
              <div>
                <strong>01.</strong>
                <span>Review Vaccination Records</span>
              </div>

              <div>
                <strong>02.</strong>
                <span>Follow Recommended Timings</span>
              </div>

              <div>
                <strong>03.</strong>
                <span>Plan Follow-Up Doses</span>
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
              ONECARE CHILDREN'S CLINIC
            </span>

            <h2>
              Every Dose Is a Step
              <span> Towards Better Protection</span>
            </h2>

            <p>
              Book a pediatric vaccination consultation at OneCare Children’s Clinic to review your child’s immunisation history, discuss recommended vaccines, and plan the next steps in their vaccination journey.

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