import { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/servicePages/GrowthDevelopment.css";

import GrowthDevelopment1 from "../../assets/GrowthDevelopment/GrowthDevelopment1.png";
import GrowthDevelopment2 from "../../assets/GrowthDevelopment/GrowthDevelopment2.png";
import GrowthDevelopment3 from "../../assets/GrowthDevelopment/GrowthDevelopment3.png";
import GrowthDevelopment4 from "../../assets/GrowthDevelopment/GrowthDevelopment4.png";

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

  const heroImage = GrowthDevelopment1;
  const examinationImage = GrowthDevelopment2;
  const feedingImage = GrowthDevelopment3;
  const growthImage = GrowthDevelopment4;

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
              Growth & Devlopment 
            </span>

            <h1 className="hero-title">
              <span>Supporting Every Step of </span>
              <span className="highlight">Your Child's Growth</span>
            </h1>

            <p>
              Every child grows and develops at their own pace. At One Care Children's Clinic, 
              we focus on monitoring your child's physical growth, developmental milestones,
               communication skills, and overall wellbeing to help support healthy childhood development.
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
                src={GrowthDevelopment1}
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
              src={GrowthDevelopment2}
              alt="Pediatrician assessing a child before vaccination"
            />
          </div>

          <div className="newborn-intro-content">
            <span className="section-label">
              A HEALTHIER FUTURE
            </span>

            <h2>
              Why Is Growth & Development
              <span>  Important?</span>
            </h2>

            <p>
              Monitoring your child's growth and development helps track important changes in height,
               weight, physical abilities, communication, and social interaction. Regular pediatric 
              assessments can help identify developmental concerns early and guide parents towards appropriate support.
            </p>

            <p>
              At One Care Children's Clinic, we help parents understand
               childhood developmental milestones, discuss their concerns,
                and support their child's individual growth journey.
            </p>

            <div className="intro-highlight">
              <div>
                <strong>
                 Every child develops differently. Regular monitoring helps you understand your child's progress with confidence.

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
              Comprehensive Growth & Development 
              <span> Care for Children</span>
            </h2>

            <p>
              Our pediatric growth and development services focus on tracking physical growth, 
              assessing developmental milestones, and helping parents understand their child's changing needs.
            </p>
          </div>

          <div className="newborn-care-grid">

            <div className="newborn-care-card">
              <div className="care-icon">
                <FaStethoscope />
              </div>

              <h3>Physical Growth Monitoring</h3>

              <p>
                Regular assessment of height,
                 weight, and growth patterns to understand your child's physical development.
              </p>
            </div>

            <div className="newborn-care-card">
              <div className="care-icon">
                <FaBaby />
              </div>

              <h3>Developmental Milestone Assessment</h3>

              <p>
                Monitoring age-appropriate milestones related to movement,
                 learning, communication, and social interaction.
              </p>
            </div>

            <div className="newborn-care-card">
              <div className="care-icon">
                <FaWeight />
              </div>

              <h3>Behaviour & Development Guidance</h3>

              <p>
                Discussion of behavioural changes, developmental concerns, 
                and age-related challenges to help parents understand their child better.
              </p>
            </div>

            <div className="newborn-care-card">
              <div className="care-icon">
                <FaHeartbeat />
              </div>

              <h3>Early Identification of Developmental Concerns</h3>

              <p>
               Assessment of concerns related to speech,
                movement, learning, or social interaction, with guidance on further evaluation when needed.
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
              MILESTONES & WELLBEING
            </span>

            <h2>
              Understanding Your Child's 
              <span> Developmental Milestones</span>
            </h2>

            <p>
              Developmental milestones offer useful insights into how children 
              learn, communicate, move, and interact with the world around them. Our pediatric 
              team helps parents understand age-appropriate milestones and recognize
               when additional assessment may be beneficial.
            </p>

            <ul className="feature-list">
              <li>
                <FaCheck />
                <span>Guidance on age-appropriate developmental milestones</span>
              </li>

              <li>
                <FaCheck />
                <span>Monitoring speech, language, and communication progress</span>
              </li>

              <li>
                <FaCheck />
                <span>Assessment of movement and motor skills</span>
              </li>

              <li>
                <FaCheck />
                <span>Support with behavioural and social development concerns</span>
              </li>
            </ul>
          </div>

          <div className="newborn-feature-image">
            <img
              src={GrowthDevelopment3}
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
              src={GrowthDevelopment4}
              alt="Pediatric care supporting a child's healthy development"
            />
          </div>

          <div className="newborn-growth-content">
            <span className="section-label">
              GROWTH MONITORING
            </span>

            <h2>
              Tracking Your Child's Progress 
              <span> at Every Stage</span>
            </h2>

            <p>
             Regular growth monitoring helps your pediatrician assess your 
             child's physical development over time. By reviewing growth patterns and developmental 
             progress, your doctor can identify concerns and recommend appropriate next steps when needed.
            </p>

            <div className="growth-points">
              <div>
                <strong>01.</strong>
                <span> Height & Weight Assessment</span>
              </div>

              <div>
                <strong>02.</strong>
                <span> Developmental Milestone Review</span>
              </div>

              <div>
                <strong>03.</strong>
                <span> Individual Growth Guidance</span>
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
             Helping Your Child Grow, 
              <span> Learn and Thrive</span>
            </h2>

            <p>
              Book a pediatric consultation to discuss your child's growth, developmental milestones, and overall wellbeing.
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