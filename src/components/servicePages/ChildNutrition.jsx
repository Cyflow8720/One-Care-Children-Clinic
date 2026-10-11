
import { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/servicePages/ChildNutrition.css";

import ChildNutrition1 from "../../assets/ChildNutrition/ChildNutrition1.png";
import ChildNutrition2 from "../../assets/ChildNutrition/ChildNutrition2.png";
import ChildNutrition3 from "../../assets/ChildNutrition/ChildNutrition3.png";
import ChildNutrition4 from "../../assets/ChildNutrition/ChildNutrition4.png";


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
              CHILD NUTRITION
            </span>

            <h1 className="hero-title">
              <span>Building Healthy Eating  </span>
              <span className="highlight">Habits Your Child</span>
            </h1>

            <p>
              Good nutrition lays the foundation for a healthy childhood. 
              At One Care Children's Clinic, we provide pediatric nutrition guidance
               to support your child's physical growth, brain development, healthy eating habits,
                and changing nutritional needs at every stage of childhood.
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
                src={ChildNutrition1}
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
              src={ChildNutrition2}
              alt="Pediatrician assessing a child before vaccination"
            />
          </div>

          <div className="newborn-intro-content">
            <span className="section-label">
              NOURISHING HEALTHY GROWTH
            </span>

            <h2>
             Why Is  Nutrition
              <span>  Important for Children? </span>
            </h2>

            <p>
              Child nutrition plays an essential role in physical growth, brain development, 
              immunity, and overall wellbeing. A balanced diet provides the nutrients 
              children need to stay active, support healthy development, and build positive eating habits from an early age.
            </p>

            <p>
              At One Care Children's Clinic, we help parents understand age-appropriate nutrition,
               balanced food choices, infant feeding, and common concerns such as picky eating or changes in appetite.
            </p>

            <div className="intro-highlight">
              <div>
                <strong>
                 Healthy eating starts early. Give your child the nutritional foundation for a healthier future.
                  
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
              Comprehensive Child Nutrition Guidance
              <span>  for Growing Children</span>
            </h2>

            <p>
              Our pediatric nutrition guidance focuses on helping parents understand their child's dietary needs,
               establish healthy feeding routines, and make informed food choices to support healthy growth and development.
            </p>
          </div>

          <div className="newborn-care-grid">

            <div className="newborn-care-card">
              <div className="care-icon">
                <FaStethoscope />
              </div>

              <h3>Infant & Baby Feeding Guidance</h3>

              <p>
                Guidance on age-appropriate infant feeding, breastfeeding concerns, 
                and introducing complementary foods as your baby grows.
              </p>
            </div>

            <div className="newborn-care-card">
              <div className="care-icon">
                <FaBaby />
              </div>

              <h3>Balanced Diet Planning</h3>

              <p>
                Learn about nutritious food choices, balanced meals, 
                and essential nutrients that support your child's everyday health and development.
              </p>
            </div>

            <div className="newborn-care-card">
              <div className="care-icon">
                <FaWeight />
              </div>

              <h3>Healthy Growth & Weight Monitoring</h3>

              <p>
                Monitor your child's growth patterns
                 and discuss nutritional concerns related to weight, appetite, or physical development.
              </p>
            </div>

            <div className="newborn-care-card">
              <div className="care-icon">
                <FaHeartbeat />
              </div>

              <h3>Picky Eating & Feeding Supports</h3>

              <p>
               Practical guidance for parents dealing with selective eating, 
               food preferences, and common mealtime challenges in children.
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
              HEALTHY EATING HABITS
            </span>

            <h2>
              Helping Your Child Develop 
              <span> a Healthy Relationship With Food </span>
            </h2>

            <p>
              Healthy eating habits established during childhood can support 
              long-term wellbeing. Offering a variety of nutritious foods, maintaining consistent meal routines, and creating 
              positive mealtime experiences can help children explore different foods and develop balanced eating patterns.
            </p>

            <ul className="feature-list">
              <li>
                <FaCheck />
                <span>Guidance on nutritious, age-appropriate food choices</span>
              </li>

              <li>
                <FaCheck />
                <span>Support with regular meal routines and healthy eating habits</span>
              </li>

              <li>
                <FaCheck />
                <span>Advice on introducing complementary foods to infants</span>
              </li>

              <li>
                <FaCheck />
                <span>Guidance for picky eating and appetite-related concerns</span>
              </li>
            </ul>
          </div>

          <div className="newborn-feature-image">
            <img
              src={ChildNutrition3}
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
              src={ChildNutrition4}
              alt="Pediatric care supporting a child's healthy development"
            />
          </div>

          <div className="newborn-growth-content">
            <span className="section-label">
              NUTRITION & GROWTH
            </span>

            <h2>
              Supporting Healthy Growth 
              <span> Through Better Nutrition</span>
            </h2>

            <p>
             Children's nutritional needs change as they grow. Regular pediatric 
             check-ups help monitor growth patterns, discuss eating habits, and identify 
             concerns that may require additional nutritional guidance. 
             Understanding your child's individual needs helps you make informed decisions about their diet and development.
            </p>

            <div className="growth-points">
              <div>
                <strong>01.</strong>
                <span> Growth & Nutritional Assessment</span>
              </div>

              <div>
                <strong>02.</strong>
                <span> Eating Habits & Dietary Guidance</span>
              </div>

              <div>
                <strong>03.</strong>
                <span> Personalised Nutrition Recommendations</span>
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
