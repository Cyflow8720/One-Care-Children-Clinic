
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
  FaHeartbeat,
  FaWeight,
  FaStethoscope,
  FaAppleAlt,
  FaMoon,
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
  // SERVICE FEATURES
  // ========================================

  const careFeatures = [
    {
      icon: <FaStethoscope />,
      title: "Newborn Checkups",
      text: "Regular health assessments to monitor your baby's overall wellbeing."
    },
    {
      icon: <FaBaby />,
      title: "Feeding Support",
      text: "Guidance for breastfeeding, feeding patterns and common feeding concerns."
    },
    {
      icon: <FaWeight />,
      title: "Growth Monitoring",
      text: "Tracking your baby's weight, length and growth from the earliest days."
    },
    {
      icon: <FaHeartbeat />,
      title: "Health Monitoring",
      text: "Careful evaluation of common newborn health concerns and early warning signs."
    },
    {
      icon: <FaAppleAlt />,
      title: "Nutrition Guidance",
      text: "Age-appropriate guidance to support healthy nutrition and development."
    },
    {
      icon: <FaMoon />,
      title: "Parent Guidance",
      text: "Practical support for sleep, routine, hygiene and everyday newborn care."
    },
  ];


  // ========================================
  // WARNING SIGNS
  // ========================================

  const warningSigns = [
    "Difficulty feeding or refusing feeds",
    "Poor weight gain",
    "Yellowing of the skin or eyes",
    "Breathing difficulties",
    "Unusual sleepiness or reduced responsiveness",
    "Persistent vomiting or unusual crying",
  ];


  // ========================================
  // FAQ
  // ========================================

  const faqs = [
    {
      question: "What happens during a newborn checkup?",
      answer:
        "A newborn checkup generally includes a review of feeding, sleep, weight gain and overall wellbeing, along with a physical examination and age-appropriate guidance for parents."
    },
    {
      question: "How often should my newborn have a checkup?",
      answer:
        "The frequency of newborn visits depends on your baby's age, health, feeding and growth. Your pediatrician can recommend a follow-up schedule based on your baby's individual needs."
    },
    {
      question: "When should I be concerned about my baby's feeding?",
      answer:
        "If your baby is consistently refusing feeds, feeding much less than usual, vomiting repeatedly or showing signs of poor weight gain, it is important to discuss the concern with a pediatrician."
    },
    {
      question: "Is newborn jaundice always a reason to worry?",
      answer:
        "Jaundice is common in newborns, but its severity and timing matter. A pediatric assessment can help determine whether monitoring or further evaluation is needed."
    },
    {
      question: "Can I ask questions about sleep and newborn routines?",
      answer:
        "Yes. Newborn care visits are also an opportunity to discuss sleep patterns, feeding routines, hygiene, crying and other everyday concerns."
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
            <FaBaby />
            PEDIATRIC NEWBORN CARE
          </span>

          <h1>
            Gentle Care for Your
            <span> Little One's First Days</span>
          </h1>

          <p>
            The earliest days of your baby's life come with
            new experiences, questions and responsibilities.
            Our newborn care focuses on healthy beginnings,
            careful monitoring and confident parenting.
          </p>

          <div className="newborn-hero-buttons">

            <a href="#appointment" className="newborn-primary-btn">
              Book a Consultation
              <FaArrowRight />
            </a>

            <a href="#care-features" className="newborn-secondary-btn">
              Explore Our Care
            </a>

          </div>

          <div className="newborn-trust">

            <div>
              <FaCheck />
              <span>Personalized Care</span>
            </div>

            <div>
              <FaCheck />
              <span>Parent Guidance</span>
            </div>

            <div>
              <FaCheck />
              <span>Growth Monitoring</span>
            </div>

          </div>

        </div>


        <div className="newborn-hero-visual">

          <div className="hero-image-bg"></div>

          <img
            src={heroImage}
            alt="Newborn baby receiving gentle pediatric care"
            className="newborn-hero-image"
          />

          <div className="hero-floating-card">

            <div className="floating-icon">
              <FaHeartbeat />
            </div>

            <div>
              <strong>Healthy Beginnings</strong>
              <span>Care from day one</span>
            </div>

          </div>

        </div>

      </section>


      {/* ========================================
          INTRODUCTION
      ======================================== */}

      <section className="newborn-intro">

        <div className="newborn-intro-image">

          <div className="image-accent"></div>

          <img
            src={examinationImage}
            alt="Pediatrician examining a newborn baby"
          />

        </div>


        <div className="newborn-intro-content">

          <span className="section-label">
            WHY NEWBORN CARE MATTERS
          </span>

          <h2>
            A Healthy Start Begins
            <span> With the Right Care</span>
          </h2>

          <p>
            Newborns go through remarkable changes during their
            first weeks of life. Regular pediatric care helps
            monitor feeding, growth and overall health while
            giving parents the guidance they need during this
            important stage.
          </p>

          <p>
            At One Care Children's Clinic, we focus on thoughtful,
            age-appropriate care that considers both your baby's
            needs and your concerns as a parent.
          </p>

          <div className="intro-highlight">

            <FaHeartbeat />

            <div>
              <strong>Every baby is different.</strong>
              <span>
                Care is tailored to your child's individual
                health, growth and development.
              </span>
            </div>

          </div>

        </div>

      </section>


      {/* ========================================
          CARE FEATURES
      ======================================== */}

      <section
        className="newborn-features"
        id="care-features"
      >

        <div className="section-heading">

          <span className="section-label">
            OUR NEWBORN CARE
          </span>

          <h2>
            Supporting Your Baby
            <span> Every Step of the Way</span>
          </h2>

          <p>
            From routine checkups to everyday parenting questions,
            our care is designed to support your baby's health
            during the earliest stage of life.
          </p>

        </div>


        <div className="care-features-grid">

          {careFeatures.map((feature, index) => (

            <div
              className="care-feature-card"
              key={index}
            >

              <div className="feature-icon">
                {feature.icon}
              </div>

              <div className="feature-number">
                0{index + 1}
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.text}</p>

              <span className="feature-line"></span>

            </div>

          ))}

        </div>

      </section>


      {/* ========================================
          FEEDING SECTION
      ======================================== */}

      <section className="newborn-split-section">

        <div className="split-content">

          <span className="section-label">
            FEEDING & NUTRITION
          </span>

          <h2>
            Helping You Feel
            <span> Confident About Feeding</span>
          </h2>

          <p>
            Feeding a newborn can bring many questions.
            Pediatric guidance can help parents understand
            feeding patterns, common concerns and signs that
            their baby is receiving appropriate nourishment.
          </p>

          <div className="split-points">

            <div>
              <FaCheck />
              <span>Breastfeeding support</span>
            </div>

            <div>
              <FaCheck />
              <span>Feeding pattern guidance</span>
            </div>

            <div>
              <FaCheck />
              <span>Weight and growth monitoring</span>
            </div>

            <div>
              <FaCheck />
              <span>Parent-friendly guidance</span>
            </div>

          </div>

        </div>


        <div className="split-image">

          <img
            src={feedingImage}
            alt="Parent receiving newborn feeding guidance"
          />

        </div>

      </section>


      {/* ========================================
          GROWTH SECTION
      ======================================== */}

      <section className="growth-section">

        <div className="growth-image">

          <img
            src={growthImage}
            alt="Newborn growth and health monitoring"
          />

        </div>


        <div className="growth-content">

          <span className="section-label">
            GROWTH MONITORING
          </span>

          <h2>
            Small Changes Matter
            <span> When They're Growing</span>
          </h2>

          <p>
            Monitoring your baby's growth over time helps
            your pediatrician understand how your child is
            progressing and identify concerns that may need
            additional attention.
          </p>

          <div className="growth-stats">

            <div>
              <strong>Weight</strong>
              <span>Regular monitoring</span>
            </div>

            <div>
              <strong>Feeding</strong>
              <span>Pattern assessment</span>
            </div>

            <div>
              <strong>Development</strong>
              <span>Age-appropriate milestones</span>
            </div>

          </div>

        </div>

      </section>


      {/* ========================================
          WHEN TO CONSULT
      ======================================== */}

      <section className="warning-section">

        <div className="warning-heading">

          <span className="section-label">
            KNOW WHEN TO SEEK HELP
          </span>

          <h2>
            When Should You
            <span> Consult a Pediatrician?</span>
          </h2>

          <p>
            If something feels unusual or your baby's behaviour
            changes, it's always reasonable to discuss your
            concerns with a pediatrician.
          </p>

        </div>


        <div className="warning-layout">

          <div className="warning-list">

            {warningSigns.map((item, index) => (

              <div
                className="warning-item"
                key={index}
              >

                <span className="warning-check">
                  <FaCheck />
                </span>

                <span>{item}</span>

              </div>

            ))}

          </div>


          <div className="warning-note">

            <FaStethoscope />

            <h3>
              Trust your concerns.
            </h3>

            <p>
              Parents often notice changes before anyone else.
              If you are worried about your newborn's health,
              speaking with a pediatrician can help you understand
              what needs attention.
            </p>

          </div>

        </div>

      </section>


      {/* ========================================
          PARENT EXPERIENCE
      ======================================== */}

      <section className="parent-section">

        <div className="parent-image">

          <img
            src={consultationImage}
            alt="Parent discussing newborn care with pediatrician"
          />

          <div className="parent-image-tag">
            <FaBaby />
            <span>Care. Guidance. Reassurance.</span>
          </div>

        </div>


        <div className="parent-content">

          <span className="section-label">
            YOUR VISIT
          </span>

          <h2>
            What Parents Can
            <span> Expect</span>
          </h2>

          <p>
            Your baby's visit should feel informative,
            comfortable and supportive. We take time to
            understand your concerns and explain care in
            a way that is easy to follow.
          </p>

          <div className="parent-check-list">

            <div>
              <FaCheck />
              <span>Gentle newborn examination</span>
            </div>

