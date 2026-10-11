import React, { useState } from "react";
import "../styles/AboutPage.css";
import doctorImage from "../assets/doctor.png";
import { Link } from "react-router-dom";
function AboutPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What should I expect during my first visit?",
      answer:
        "The first visit focuses on understanding your child's health, development, medical history and any concerns you may have. The doctor will guide you through the next steps based on your child's individual needs.",
    },
    {
      question: "When should I consult a pediatrician?",
      answer:
        "You can consult a pediatrician whenever you have concerns about your child's health, growth, development, nutrition, behaviour or recurring symptoms.",
    },
    {
      question: "Can I see a pediatrician for preventive care?",
      answer:
        "Yes. Regular pediatric consultations can help monitor growth and development, vaccinations, nutrition and overall wellbeing.",
    },
  ];

  return (
    <main className="about-page">

      {/* ================================
          DOCTOR INTRO
      ================================= */}

      <section className="about-doctor-section">
        <div className="about-container">

          <div className="about-doctor-grid">

            {/* IMAGE */}

            <div className="about-doctor-image-wrapper">
              <img
                src={doctorImage}
                alt="Dr. Priyanka Reejhsinghani"
                className="about-doctor-image"
              />
            </div>


            {/* CONTENT */}

            <div className="about-doctor-content">

              <div className="about-label">
                ABOUT OUR PEDIATRICIAN
              </div>

              <h1>
                Dr. 
                <span>Priyanka Reejhsinghani</span>
              </h1>

              <p className="doctor-designation">
                Consultant Pediatrician & Neonatologist
              </p>

              <p className="about-intro">
                Dr. Priyanka Reejhsinghani (MBBS, DCH, DNB – Pediatrics) is a Consultant 
                Pediatrician and Neonatologist with advanced certifications in 
                Pediatric Diabetology and Pediatric Rheumatology.
              </p>

              <p>
                Currently associated with Criticare Asia Hospital, Andheri East,
                 and Yewale Hospital, with previous affiliations at Nanavati Max
                  Super Speciality Hospital, Kokilaben Dhirubhai Ambani Hospital, 
                  Apollo Hospitals, and Dr. L. H. Hiranandani Hospital, Powai, bringing 
                  experience from leading healthcare institutions. At OneCare Children’s Clinic,
                   comprehensive pediatric care includes newborn and neonatal care, well-baby check-ups, 
                   childhood vaccinations, growth and developmental assessments, child nutrition, respiratory 
                   disorders, childhood infections, pediatric diabetes, pediatric rheumatology, NICU follow-up,
                    pediatric emergency care, and preventive healthcare. The clinic focuses on evidence-based treatment, 
                    personalized attention, and family-centered guidance to support children’s healthy growth and development
                     at every stage.
              </p>

              
              <div className="doctor-signature">
                <strong>Dr. Priyanka Reejhsinghani</strong>
                <span>Consultant Pediatrician & Neonatologist</span>
              </div>

            </div>

          </div>

        </div>
      </section>

             {/* ================================
          ABOUT THE CLINIC
      ================================= */}

      <section className="clinic-about-section">

        <div className="about-container">

          <div className="clinic-about-grid">

            {/* LEFT CONTENT */}

            <div className="clinic-about-content">

              <div className="about-label">
                ABOUT ONE CARE CHILDREN'S CLINIC
              </div>

              <h2 className="about-heading">
  <span className="heading-main">Compassionate Pediatric Care</span>
  <span className="heading-highlight">for Every Stage of Childhood</span>
</h2>

              <p className="clinic-about-intro">
                One Care Children's Clinic is dedicated to providing
                thoughtful, personalised and child-centred healthcare
                for infants, children and adolescents.
              </p>

              <p>
                We understand that visiting a doctor can sometimes feel
                overwhelming for both children and parents. That's why
                we aim to create a warm, comfortable and reassuring
                environment where every child feels cared for and every
                parent feels heard.
              </p>

              <p>
                From newborn and infant care to childhood illnesses,
                growth and development, nutrition and preventive
                healthcare, our focus is on supporting your child's
                health at every stage.
              </p>

              <p>
                At One Care Children's Clinic, we believe good pediatric
                care is not only about treating illness. It is also
                about understanding your child, answering your questions
                and helping you make confident healthcare decisions.
              </p>

            </div>


            {/* RIGHT HIGHLIGHTS */}

            <div className="clinic-about-highlights">

              <div className="clinic-highlight-card">
                <div className="clinic-highlight-number">01</div>

                <div>
                  <h3>Personalised Care</h3>

                  <p>
                    Every child receives personalised pediatric care tailored
                     to their unique health, growth, and developmental needs.
                  </p>
                </div>
              </div>


              <div className="clinic-highlight-card">
                <div className="clinic-highlight-number">02</div>

                <div>
                  <h3>Child-Friendly Environment</h3>

                  <p>
                    We create a warm, welcoming, and comfortable 
                    environment where children feel safe and parents feel reassured.
                  </p>
                </div>
              </div>


              <div className="clinic-highlight-card">
                <div className="clinic-highlight-number">03</div>

                <div>
                  <h3>Complete Pediatric Support</h3>

                  <p>
                    From newborn care to vaccinations, nutrition, and childhood illnesses,
                     we provide comprehensive pediatric care to support your child’s health at every stage.
                  </p>
                </div>
              </div>
              <div className="clinic-highlight-card">
                <div className="clinic-highlight-number">04</div>

                <div>
                  <h3>Vaccination Prevention Caret</h3>

                  <p>
                    We provide age-appropriate childhood vaccinations to help 
                    protect your child against preventable diseases and support long-term health.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>

      
      {/* ================================
          CTA
      ================================= */}

      <section className="about-cta">

        <div className="about-container">

          <div className="about-cta-content">

            <div>

              <span>
                YOUR CHILD'S WELLNESS IS OUR PRIORITY
              </span>

              <h2>
                Caring today for a healthier tomorrow.
              </h2>

            </div>


            <Link
  to="/contact"
  className="about-cta-button"
>
  Book an Appointment
  <span>→</span>
</Link>

          </div>

        </div>

      </section>

      {/* ================================
          WHY ONE CARE
      ================================= */}

      <section className="why-about-section">

        <div className="about-container">

          <div className="why-about-grid">

            <div className="why-about-content">

              <div className="about-label">
                WHY ONE CARE
              </div>

              <h2>
                Nurturing Little Lives with
                <span> Expert Pediatric Care</span>
              </h2>

              <p>
                Our goal is to create a healthcare experience where
                children feel comfortable and parents feel supported,
                informed and confident.
              </p>


              <div className="why-points">

                <div className="why-point">
                  <span>✓</span>

                  <div>
                    <h3>Child-Centred Care</h3>
                    <p>
                      Healthcare designed around the individual needs
                      of every child.
                    </p>
                  </div>
                </div>


                <div className="why-point">
                  <span>✓</span>

                  <div>
                    <h3>Personalised Attention</h3>
                    <p>
                      Taking time to understand the child and listen
                      carefully to parents.
                    </p>
                  </div>
                </div>


                <div className="why-point">
                  <span>✓</span>

                  <div>
                    <h3>Parent-Friendly Guidance</h3>
                    <p>
                      Clear explanations to help parents make informed
                      healthcare decisions.
                    </p>
                  </div>
                </div>

              </div>

            </div>


            {/* FAQ */}

            <div className="faq-container">

              <h2>Frequently Asked Questions</h2>

              <div className="faq-list">

                {faqs.map((faq, index) => (

                  <div
                    className={`faq-item ${
                      openFaq === index ? "faq-active" : ""
                    }`}
                    key={index}
                  >

                    <button
                      className="faq-question"
                      onClick={() => toggleFaq(index)}
                    >

                      <span>{faq.question}</span>

                      <span className="faq-plus">
                        {openFaq === index ? "−" : "+"}
                      </span>

                    </button>


                    {openFaq === index && (
                      <div className="faq-answer">
                        <p>{faq.answer}</p>
                      </div>
                    )}

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>


      

    </main>
  );
}

export default AboutPage;