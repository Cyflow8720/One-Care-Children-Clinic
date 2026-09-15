import React, { useState } from "react";
import "../styles/PediatricServices.css";

// Direct imports ensure Vite resolves asset paths correctly
import newbornImg from "../assets/newborn-care.jpg";
import vaccinationImg from "../assets/vaccination.jpg";
import growthImg from "../assets/growth-development.jpg";
import nutritionImg from "../assets/nutrition.jpg";
import illnessImg from "../assets/childhood-illness.jpg";
import adolescentImg from "../assets/adolescent-cares.jpg"; // exact filename match

const services = [
  {
    id: "newborn",
    name: "Newborn Care",
    image: newbornImg,
    description:
      "Comprehensive newborn care focused on healthy growth, feeding, development, and early detection of common newborn concerns. Our pediatric experts ensure your baby receives gentle, attentive care right from day one.",
    linkText: "Learn more about newborn care",
    ctaTitle: "If you need trusted newborn care, we'll help support your journey.",
    buttonText: "Book a consultation ›",
  },
  {
    id: "vaccination",
    name: "Vaccination",
    image: vaccinationImg,
    description:
      "Stay on track with age-appropriate vaccinations and get expert guidance about your child's immunisation schedule. Protect your little ones against preventable illnesses with safe, timely care.",
    linkText: "Learn more about vaccinations",
    ctaTitle: "Keep immunisations up to date with our dedicated care team.",
    buttonText: "View vaccination schedule ›",
  },
  {
    id: "growth",
    name: "Growth & Development",
    image: growthImg,
    description:
      "Regular monitoring of height, weight, milestones, and physical development helps ensure your child is growing as expected. Early evaluation supports long-term health and wellbeing.",
    linkText: "Learn more about growth & development",
    ctaTitle: "Track every milestone with guidance from top pediatricians.",
    buttonText: "Book a growth check ›",
  },
  {
    id: "nutrition",
    name: "Child Nutrition",
    image: nutritionImg,
    description:
      "Personalised nutrition guidance to support healthy eating habits, immunity, physical growth, and overall development in children from infancy through adolescence.",
    linkText: "Learn more about child nutrition",
    ctaTitle: "Ensure balanced nutrition tailored to your child's needs.",
    buttonText: "Talk to our pediatrician ›",
  },
  {
    id: "illness",
    name: "Childhood Illness",
    image: illnessImg,
    description:
      "Accurate diagnosis and evidence-based treatment for common childhood illnesses including fevers, coughs, colds, ear infections, seasonal allergies, and digestive issues.",
    linkText: "Learn more about childhood illness",
    ctaTitle: "When your child isn't feeling well, we provide fast, loving care.",
    buttonText: "Book a pediatric visit ›",
  },
  {
    id: "adolescent",
    name: "Adolescent Care",
    image: adolescentImg,
    description:
      "Age-appropriate healthcare and guidance addressing physical growth, mental health, nutritional needs, and developmental changes during teenage and pre-teen years.",
    linkText: "Learn more about adolescent care",
    ctaTitle: "Guiding growing young adults toward lifelong health and wellness.",
    buttonText: "Schedule adolescent visit ›",
  },
];

const ServiceIcon = ({ type }) => {
  const icons = {
    newborn: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="32" cy="22" r="11" />
        <path d="M17 53c1-11 7-17 15-17s14 6 15 17" />
        <path d="M25 21c2 2 4 3 7 3s5-1 7-3" />
      </svg>
    ),
    vaccination: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M38 11l15 15" />
        <path d="M33 16l15 15" />
        <path d="M27 22l15 15" />
        <path d="M22 27l15 15" />
        <path d="M16 33l15 15" />
        <path d="M39 12l8-8 9 9-8 8" />
        <path d="M16 48l-8 8" />
        <path d="M9 55l10-2 1-9" />
      </svg>
    ),
    growth: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M15 54V10" />
        <path d="M15 16h7" />
        <path d="M15 25h7" />
        <path d="M15 34h7" />
        <path d="M15 43h7" />
        <path d="M25 47l9-10 7 5 13-18" />
        <path d="M45 24h9v9" />
      </svg>
    ),
    nutrition: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M19 8v18" />
        <path d="M14 8v12" />
        <path d="M24 8v12" />
        <path d="M14 20c0 5 10 5 10 0" />
        <path d="M19 25v31" />
        <path d="M43 8c-6 8-7 18 0 23v25" />
        <path d="M43 8c8 6 8 16 0 23" />
      </svg>
    ),
    illness: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M32 10a14 14 0 1 0 14 14" />
        <path d="M46 10v14H32" />
        <path d="M19 42l-7 7" />
        <path d="M26 49l-7 7" />
        <path d="M13 39l12 12" />
      </svg>
    ),
    adolescent: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="32" cy="18" r="9" />
        <path d="M19 55c1-14 5-22 13-22s12 8 13 22" />
        <path d="M25 36l-6 8" />
        <path d="M39 36l6 8" />
      </svg>
    ),
  };

  return icons[type] || null;
};

const PediatricServices = () => {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <section className="pediatric-services-section">
      <div className="services-container">
        
        {/* Top Heading */}
        <h2 className="services-headline">
          Here are some of the pediatric services we offer
        </h2>

        {/* Tab Selection Bar */}
        <div className="services-tabs-container">
          <div className="services-tabs-track">
            {services.map((service) => (
              <button
                key={service.id}
                className={`tab-item ${
                  activeService.id === service.id ? "active" : ""
                }`}
                onClick={() => setActiveService(service)}
              >
                <div className="tab-icon">
                  <ServiceIcon type={service.id} />
                </div>
                <span className="tab-label">{service.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Tab Panel Content */}
        <div className="tab-panel-content">
          
          {/* Left Side: Image + Description Text */}
          <div className="panel-main-info">
            <div className="panel-image-wrapper">
              <img src={activeService.image} alt={activeService.name} />
            </div>

            <div className="panel-text-content">
              <p className="panel-description">{activeService.description}</p>
              <a href="#services" className="panel-link">
                {activeService.linkText}
              </a>
            </div>
          </div>

          {/* Right Side: CTA Box with Divider */}
          <div className="panel-cta-sidebar">
            <h3 className="cta-headline">{activeService.ctaTitle}</h3>
            <button className="cta-yellow-btn">{activeService.buttonText}</button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default PediatricServices;