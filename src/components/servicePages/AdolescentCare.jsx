
import { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/servicePages/AdolescentCare.css";

import AdolescentCare1 from "../../assets/AdolescentCare/AdolescentCare1.png";
import AdolescentCare2 from "../../assets/AdolescentCare/AdolescentCare2.png";
import AdolescentCare3 from "../../assets/AdolescentCare/AdolescentCare3.png";
import AdolescentCare4 from "../../assets/AdolescentCare/AdolescentCare4.png";


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
             ADOLESCENT CARE
            </span>

            <h1 className="hero-title">
              <span>Expert Adolescent Care  </span>
              <span className="highlight">for Healthy Development</span>
            </h1>

            <p>
             Adolescence is an important stage of physical,
              emotional, and social development. At One Care Children's Clinic, 
              we focus on monitoring growth, supporting nutritional needs, discussing puberty-related changes,
              and helping teenagers build healthy habits for a confident transition into adulthood.
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
                src={AdolescentCare1}
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
              src={AdolescentCare2}
              alt="Pediatrician assessing a child before vaccination"
            />
          </div>

          <div className="newborn-intro-content">
            <span className="section-label">
             GROWING WITH CONFIDENCE
            </span>

            <h2>
             Why Is Adolescent Healthcare 
              <span> Important? </span>
            </h2>

            <p>
              Adolescence brings significant changes in height, weight, hormones, 
              emotions, and social relationships. Regular health assessments help monitor
               physical development, address common teenage health concerns, 
              and support healthy habits during these important years.
            </p>

            <p>
              and support healthy habits during these important years.
At One Care Children's Clinic, we provide age-appropriate healthcare 
guidance to help teenagers and parents understand developmental
 changes, discuss health concerns, and make informed decisions about wellbeing.
            </p>

            <div className="intro-highlight">
              <div>
                <strong>
                 Every teenager deserves the right guidance, understanding, and support to grow into a healthy adult.
                  
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
             Comprehensive Adolescent Healthcare
              <span> for Growing Teens</span>
            </h2>

            <p>
            Our adolescent care services focus on physical development, nutritional health,
             puberty-related changes, and common 
            concerns that may arise during the teenage years.
            </p>
          </div>

          <div className="newborn-care-grid">

            <div className="newborn-care-card">
              <div className="care-icon">
                <FaStethoscope />
              </div>

              <h3>Growth & Puberty Assessment</h3>

              <p>
               Monitoring height, weight, growth patterns, and age-appropriate physical changes during adolescence.
              </p>
            </div>

            <div className="newborn-care-card">
              <div className="care-icon">
                <FaBaby />
              </div>

              <h3>Nutrition & Healthy Lifestyle Guidance</h3>

              <p>
                Guidance on balanced nutrition, physical activity, sleep routines, 
                and healthy habits that support teenage growth.
              </p>
            </div>

            <div className="newborn-care-card">
              <div className="care-icon">
                <FaWeight />
              </div>

              <h3>Puberty & Hormonal Health Guidance</h3>

              <p>
              Age-appropriate discussions about puberty,
               hormonal changes, menstrual health concerns, and 
               other developmental changes.
              </p>
            </div>

            <div className="newborn-care-card">
              <div className="care-icon">
                <FaHeartbeat />
              </div>

              <h3>Teenage Health & Wellbeing Assessment</h3>

              <p>
               Assessment of common teenage health concerns, with guidance on emotional 
               wellbeing, daily habits, and further support when needed.
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
             TEENAGE HEALTH & WELLBEING
            </span>

            <h2>
            Helping Teenagers Navigate
              <span> Every Stage of Adolescence</span>
            </h2>

            <p>
              The teenage years can bring new questions about physical changes, nutrition, emotions, 
              and personal health. Our pediatric team helps teenagers and parents understand these changes
               through supportive, age-appropriate healthcare
               and practical guidance.

            </p>

            <ul className="feature-list">
              <li>
                <FaCheck />
                <span>Guidance on puberty and physical development</span>
              </li>

              <li>
                <FaCheck />
                <span>Monitoring growth, nutrition, and healthy weight patterns</span>
              </li>

              <li>
                <FaCheck />
                <span>Support with menstrual health and common adolescent concerns</span>
              </li>

              <li>
                <FaCheck />
                <span>Advice on sleep, physical activity, personal hygiene, and healthy routines</span>
              </li>
            </ul>
          </div>

          <div className="newborn-feature-image">
            <img
              src={AdolescentCare3}
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
              src={AdolescentCare4}
              alt="Pediatric care supporting a child's healthy development"
            />
          </div>

          <div className="newborn-growth-content">
            <span className="section-label">
             GROWTH & DEVELOPMENT
            </span>

            <h2>
              Supporting Healthy Development 
              <span> During the Teenage Years</span>
            </h2>

            <p>
            Every teenager develops at an individual pace. 
            Regular health assessments help monitor physical
             growth, review lifestyle habits, and identify concerns 
             that may benefit from further evaluation.
            </p>



            <div className="growth-points">
              <div>
                <strong>01.</strong>
                <span> Physical Growth Assessment</span>
              </div>

              <div>
                <strong>02.</strong>
                <span> Puberty & Health Review</span>
              </div>

              <div>
                <strong>03.</strong>
                <span> Personalised Health Guidance</span>
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
             Helping Teenagers Grow Strong
              <span>   Healthy & Confident</span>
            </h2>

            <p>
             Book an adolescent health consultation to discuss your teenager's growth,
             
              puberty, nutritional needs, and overall wellbeing.
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
