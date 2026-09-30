import { useState } from "react";
import "../../styles/servicePages/NewbornCare.css";

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


  // ========================================
  // FAQ DATA
  // ========================================

  const faqs = [
    {
      question: "What happens during a newborn check-up?",
      answer:
        "A newborn check-up includes a detailed assessment of your baby's feeding, weight, growth, physical health and overall development. Parents can also discuss feeding, sleep, hygiene and other newborn-care concerns."
    },
    {
      question: "How often should my newborn be checked?",
      answer:
        "Newborn follow-up visits depend on your baby's age, health, feeding and individual needs. Your pediatrician will recommend an appropriate schedule and guide you about the next visit."
    },
    {
      question: "How can I know if my newborn is feeding well?",
      answer:
        "Your baby's feeding pattern, urine output, weight gain and overall behaviour can provide useful clues. If your baby is feeding poorly, seems unusually sleepy or is not gaining weight as expected, consult your pediatrician."
    },
    {
      question: "When should I be concerned about jaundice?",
      answer:
        "Mild newborn jaundice can be common, but increasing yellow discoloration, poor feeding, unusual sleepiness or other concerning symptoms should be evaluated by a pediatrician."
    },
    {
      question: "When should I seek urgent medical attention for my newborn?",
      answer:
        "Breathing difficulty, bluish skin, seizures, significant lethargy, persistent vomiting, fever or difficulty feeding can require prompt medical evaluation."
    },
  ];


  return (
    <main className="newborn-page">

      {/* ========================================
          HERO SECTION
      ======================================== */}

      <section className="newborn-hero">

        <div className="newborn-hero-content">

          <span className="newborn-eyebrow">
            NEWBORN CARE
          </span>

          <h1>
            Gentle care for
            <span> your little one.</span>
          </h1>

          <p>
            The first days of life are filled with important changes.
            Our newborn care focuses on your baby's health, growth,
            feeding and wellbeing while giving parents the guidance
            they need with confidence.
          </p>

          <div className="newborn-hero-buttons">

            <a
              href="#appointment"
              className="newborn-primary-btn"
            >
              Book an Appointment
              <FaArrowRight />
            </a>

            <a
              href="#newborn-care"
              className="newborn-secondary-btn"
            >
              Explore Newborn Care
            </a>

          </div>

          <div className="newborn-hero-points">

            <div>
              <FaCheck />
              <span>Personalized care</span>
            </div>

            <div>
              <FaCheck />
              <span>Growth monitoring</span>
            </div>

            <div>
              <FaCheck />
              <span>Parent guidance</span>
            </div>

          </div>

        </div>


        <div className="newborn-hero-image">

          <div className="hero-image-shape"></div>

          <img
            src={heroImage}
            alt="Newborn baby receiving pediatric care"
          />

        </div>

      </section>


      {/* ========================================
          INTRODUCTION
      ======================================== */}

      <section
        className="newborn-intro section-container"
        id="newborn-care"
      >

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
            The newborn period is an important stage when babies
            need careful observation and gentle support. Regular
            pediatric care helps monitor feeding, weight, growth
            and overall wellbeing.
          </p>

          <p>
            At One Care Children's Clinic, we also help parents
            understand their baby's changing needs and provide
            practical guidance for everyday newborn care.
          </p>

          <div className="intro-highlight">

            <FaBaby />

            <div>
              <strong>
                Every newborn is different.
              </strong>

              <span>
                Care is tailored to your baby's individual needs.
              </span>
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
              Complete care for your
              <span> newborn's early days</span>
            </h2>

            <p>
              From routine assessments to parent guidance, we
              support you through the important early stages
              of your baby's life.
            </p>

          </div>


          <div className="newborn-care-grid">

            {/* CARD 1 */}

            <div className="newborn-care-card">

              <div className="care-icon">
                <FaStethoscope />
              </div>

              <h3>
                Newborn Check-ups
              </h3>

              <p>
                Routine assessments to monitor your baby's
                overall health and wellbeing.
              </p>

            </div>


            {/* CARD 2 */}

            <div className="newborn-care-card">

              <div className="care-icon">
                <FaBaby />
              </div>

              <h3>
                Feeding Support
              </h3>

              <p>
                Guidance for breastfeeding, feeding patterns
                and common feeding concerns.
              </p>

            </div>


            {/* CARD 3 */}

            <div className="newborn-care-card">

              <div className="care-icon">
                <FaWeight />
              </div>

              <h3>
                Weight & Growth
              </h3>

              <p>
                Regular monitoring of weight, growth and
                important developmental changes.
              </p>

            </div>


            {/* CARD 4 */}

            <div className="newborn-care-card">

              <div className="care-icon">
                <FaHeartbeat />
              </div>

              <h3>
                Health Monitoring
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

      <section className="newborn-feature section-container">

        <div className="newborn-feature-content">

          <span className="section-label">
            FEEDING & WELLBEING
          </span>

          <h2>
            Supporting healthy
            <span> feeding habits</span>
          </h2>

          <p>
            Feeding is one of the most important parts of
            newborn care. We help parents understand feeding
            patterns and recognize signs that may need attention.
          </p>

          <ul className="feature-list">

            <li>
              <FaCheck />
              Breastfeeding guidance
            </li>

            <li>
              <FaCheck />
              Feeding pattern support
            </li>

            <li>
              <FaCheck />
              Monitoring weight gain
            </li>

            <li>
              <FaCheck />
              Guidance for common feeding concerns
            </li>

          </ul>

        </div>


        <div className="newborn-feature-image">

          <img
            src={feedingImage}
            alt="Newborn feeding support"
          />

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
              Small changes matter
              <span> in the early days</span>
            </h2>

            <p>
              Tracking your baby's growth helps your pediatrician
              understand how your baby is progressing and whether
              additional support may be needed.
            </p>

            <div className="growth-points">

              <div>
                <strong>01</strong>
                <span>Weight monitoring</span>
              </div>

              <div>
                <strong>02</strong>
                <span>Feeding assessment</span>
              </div>

              <div>
                <strong>03</strong>
                <span>Overall wellbeing</span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ========================================
          WHEN TO CONSULT
      ======================================== */}

      <section className="newborn-warning section-container">

        <div className="section-heading">

          <span className="section-label">
            KNOW WHEN TO SEEK HELP
          </span>

          <h2>
            When should you
            <span> consult a pediatrician?</span>
          </h2>

          <p>
            If something feels different about your newborn,
            it is always okay to seek professional guidance.
          </p>

        </div>


        <div className="warning-grid">

          <div className="warning-item">
            <FaCheck />
            <span>Difficulty feeding</span>
          </div>

          <div className="warning-item">
            <FaCheck />
            <span>Poor or inadequate weight gain</span>
          </div>

          <div className="warning-item">
            <FaCheck />
            <span>Increasing yellowing of the skin</span>
          </div>

          <div className="warning-item">
            <FaCheck />
            <span>Breathing difficulties</span>
          </div>

          <div className="warning-item">
            <FaCheck />
            <span>Unusual sleepiness or lethargy</span>
          </div>

          <div className="warning-item">
            <FaCheck />
            <span>Fever or other concerning symptoms</span>
          </div>

        </div>

      </section>


      {/* ========================================
          PARENT EXPERIENCE
      ======================================== */}

      <section className="newborn-parent-section">

        <div className="section-container parent-care-grid">

          <div className="parent-care-content">

            <span className="section-label">
              PARENT-CENTRED CARE
            </span>

            <h2>
              Care that gives
              <span> parents confidence</span>
            </h2>

            <p>
              Newborn care is not only about examining the baby.
              It is also about helping parents understand what
              their little one needs at every stage.
            </p>

            <div className="parent-care-list">

              <div>
                <FaCheck />
                <span>Gentle and thorough examination</span>
              </div>

              <div>
                <FaCheck />
                <span>Clear explanations for parents</span>
              </div>

              <div>
                <FaCheck />
                <span>Personalized care guidance</span>
              </div>

              <div>
                <FaCheck />
                <span>Follow-up recommendations</span>
              </div>

            </div>

          </div>


          <div className="parent-care-image">

            <img
              src={consultationImage}
              alt="Parents discussing newborn care with pediatrician"
            />

          </div>

        </div>

      </section>


      {/* ========================================
          FAQ
      ======================================== */}

      <section className="newborn-faq section-container">

        <div className="section-heading">

          <span className="section-label">
            COMMON QUESTIONS
          </span>

          <h2>
            Newborn care
            <span> FAQs</span>
          </h2>

        </div>


        <div className="faq-list">

          {faqs.map((faq, index) => (

            <div
              className={`faq-item ${
                openFaq === index ? "active" : ""
              }`}
              key={index}
            >

              <button
                className="faq-question"
                onClick={() => toggleFaq(index)}
              >

                <span>
                  {faq.question}
                </span>

                <FaChevronDown />

              </button>


              <div className="faq-answer">

                <p>
                  {faq.answer}
                </p>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* ========================================
          APPOINTMENT CTA
      ======================================== */}

      <section
        className="newborn-cta"
        id="appointment"
      >

        <div className="newborn-cta-inner">

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

          <a
            href="#"
            className="newborn-cta-button"
          >
            Book an Appointment
            <FaArrowRight />
          </a>

        </div>

      </section>

    </main>
  );
}

export default NewbornCare;