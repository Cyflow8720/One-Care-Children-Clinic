import React, { useState } from "react";
import "../styles/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    parentName: "",
    childName: "",
    childAge: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    reason: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <main className="appointment-page">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="appointment-hero">
        <div className="appointment-hero-overlay"></div>

        <div className="appointment-hero-content">
          <span className="appointment-eyebrow">
            PERSONALIZED PEDIATRIC CARE
          </span>

          <h1>Book an Appointment</h1>

          <p>
            Give your child the care they deserve with a consultation
            designed around their individual needs.
          </p>

          <div className="appointment-hero-line"></div>
        </div>
      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}
      <section className="appointment-intro">
        <span className="section-mini-title">
          WE&apos;RE HERE FOR YOUR LITTLE ONE
        </span>

        <h2>
          Let&apos;s make your child&apos;s next visit
          <span> simple and comfortable.</span>
        </h2>

        <p>
          Fill in the details below and let us know how we can help.
          Our team will use the information to understand your child&apos;s
          needs and assist you with the appointment.
        </p>
      </section>


      {/* =====================================================
          MAIN APPOINTMENT AREA
      ===================================================== */}
      <section className="appointment-main">

        {/* ================= FORM ================= */}
        <div className="appointment-form-wrapper">

          <div className="form-heading">
            <span className="form-small-title">
              APPOINTMENT REQUEST
            </span>

            <h2>Tell us a little about your child</h2>

            <p>
              Please provide the details below. Our team will contact
              you to confirm the appointment.
            </p>
          </div>


          {/* SUCCESS MESSAGE */}
          {submitted && (
            <div className="appointment-success">
              <div className="success-icon">✓</div>

              <div>
                <strong>Appointment request received!</strong>

                <p>
                  Thank you. Our clinic team will contact you shortly
                  to confirm your appointment.
                </p>
              </div>
            </div>
          )}


          <form onSubmit={handleSubmit}>

            {/* ==============================================
                PARENT / GUARDIAN DETAILS
            ============================================== */}
            <div className="form-section">

              <div className="form-section-title">
                <span className="form-number">01</span>

                <div>
                  <h3>Parent / Guardian Details</h3>
                  <p>Tell us who we&apos;ll be coordinating with.</p>
                </div>
              </div>


              <div className="form-grid">

                <div className="form-group">
                  <label htmlFor="parentName">
                    Parent / Guardian Name
                  </label>

                  <input
                    id="parentName"
                    type="text"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>


                <div className="form-group">
                  <label htmlFor="phone">
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    required
                  />
                </div>


                <div className="form-group full-width">
                  <label htmlFor="email">
                    Email Address
                    <span className="optional">Optional</span>
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                  />
                </div>

              </div>
            </div>


            {/* ==============================================
                CHILD DETAILS
            ============================================== */}
            <div className="form-section">

              <div className="form-section-title">
                <span className="form-number">02</span>

                <div>
                  <h3>Child&apos;s Details</h3>
                  <p>This helps us understand your child better.</p>
                </div>
              </div>


              <div className="form-grid">

                <div className="form-group">
                  <label htmlFor="childName">
                    Child&apos;s Name
                  </label>

                  <input
                    id="childName"
                    type="text"
                    name="childName"
                    value={formData.childName}
                    onChange={handleChange}
                    placeholder="Enter child's name"
                    required
                  />
                </div>


                <div className="form-group">
                  <label htmlFor="childAge">
                    Child&apos;s Age
                  </label>

                  <input
                    id="childAge"
                    type="text"
                    name="childAge"
                    value={formData.childAge}
                    onChange={handleChange}
                    placeholder="e.g. 2 years"
                    required
                  />
                </div>

              </div>
            </div>


            {/* ==============================================
                PREFERRED APPOINTMENT
            ============================================== */}
            <div className="form-section">

              <div className="form-section-title">
                <span className="form-number">03</span>

                <div>
                  <h3>Preferred Appointment</h3>
                  <p>Choose a date and time that works for you.</p>
                </div>
              </div>


              <div className="form-grid">

                <div className="form-group">
                  <label htmlFor="date">
                    Preferred Date
                  </label>

                  <input
                    id="date"
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div>


                <div className="form-group">
                  <label htmlFor="time">
                    Preferred Time
                  </label>

                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                  >
                    <option value="">
                      Select preferred time
                    </option>

                    <option value="morning">
                      Morning
                    </option>

                    <option value="afternoon">
                      Afternoon
                    </option>

                    <option value="evening">
                      Evening
                    </option>
                  </select>
                </div>

              </div>
            </div>


            {/* ==============================================
                REASON FOR VISIT
            ============================================== */}
            <div className="form-section">

              <div className="form-section-title">
                <span className="form-number">04</span>

                <div>
                  <h3>How Can We Help?</h3>
                  <p>Tell us the reason for your visit.</p>
                </div>
              </div>


              <div className="form-group">

                <label htmlFor="reason">
                  Reason for Visit
                </label>

                <select
                  id="reason"
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  required
                >
                  <option value="">
                    Select a reason
                  </option>

                  <option value="newborn-care">
                    Newborn Care
                  </option>

                  <option value="vaccination">
                    Vaccination
                  </option>

                  <option value="growth-development">
                    Growth & Development
                  </option>

                  <option value="nutrition">
                    Child Nutrition
                  </option>

                  <option value="illness">
                    Childhood Illness
                  </option>

                  <option value="adolescent-care">
                    Adolescent Care
                  </option>

                  <option value="routine-checkup">
                    Routine Check-up
                  </option>

                  <option value="other">
                    Other
                  </option>
                </select>

              </div>


              <div className="form-group">

                <label htmlFor="message">
                  Additional Information
                  <span className="optional">Optional</span>
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us anything you'd like the doctor or clinic team to know..."
                  rows="5"
                ></textarea>

              </div>

            </div>


            {/* ==============================================
                SUBMIT
            ============================================== */}
            <div className="form-submit-area">

              <p className="form-note">
                By submitting this form, you are requesting an
                appointment. Our team will contact you for confirmation.
              </p>

              <button
                type="submit"
                className="appointment-submit"
              >
                <span>Request an Appointment</span>
                <span className="submit-arrow">→</span>
              </button>

            </div>

          </form>

        </div>


        {/* =================================================
            SIDEBAR
        ================================================= */}
        <aside className="appointment-sidebar">

          {/* CLINIC CARD */}
          <div className="sidebar-card clinic-card">

            <span className="sidebar-label">
              ONE CARE CHILDREN CLINIC
            </span>

            <h3>
              Thoughtful care for
              <span> growing little ones.</span>
            </h3>

            <p>
              From newborn care to adolescence, we are here to
              support your child through every stage of growth.
            </p>

            <div className="sidebar-divider"></div>

            <div className="clinic-contact-item">
              <span className="contact-icon">☎</span>

              <div>
                <small>Call us</small>

                <a href="tel:+918879333393">
                  +91 88793 33393
                </a>
              </div>
            </div>

            <div className="clinic-contact-item">
              <span className="contact-icon">✉</span>

              <div>
                <small>Email us</small>

                <a href="mailto:hello@onecarechildrenclinic.com">
                  hello@onecarechildrenclinic.com
                </a>
              </div>
            </div>

          </div>


          {/* BEFORE YOUR VISIT */}
          <div className="sidebar-card visit-card">

            <span className="sidebar-label">
              BEFORE YOUR VISIT
            </span>

            <h3>What to bring</h3>

            <ul className="visit-checklist">

              <li>
                <span>✓</span>
                <p>Previous medical records</p>
              </li>

              <li>
                <span>✓</span>
                <p>Current medication details</p>
              </li>

              <li>
                <span>✓</span>
                <p>Vaccination records</p>
              </li>

              <li>
                <span>✓</span>
                <p>Any recent test reports</p>
              </li>

              <li>
                <span>✓</span>
                <p>Your questions or concerns</p>
              </li>

            </ul>

          </div>


          {/* EMERGENCY */}
          <div className="sidebar-card emergency-card">

            <div className="emergency-icon">
              !
            </div>

            <div>
              <span className="sidebar-label">
                IMPORTANT
              </span>

              <h3>Need urgent care?</h3>

              <p>
                This appointment form is not intended for
                medical emergencies.
              </p>

              <a
                href="tel:112"
                className="emergency-link"
              >
                Call emergency services →
              </a>
            </div>

          </div>

        </aside>

      </section>


      {/* =====================================================
          HOW IT WORKS
      ===================================================== */}
      <section className="appointment-process">

        <div className="process-heading">

          <span className="section-mini-title">
            SIMPLE &amp; CONVENIENT
          </span>

          <h2>
            Your appointment,
            <span> made simple.</span>
          </h2>

          <p>
            We&apos;ve kept the process easy so you can focus on
            what matters most — your child.
          </p>

        </div>


        <div className="process-grid">

          <div className="process-card">

            <span className="process-number">
              01
            </span>

            <div className="process-icon">
              ✎
            </div>

            <h3>Share the details</h3>

            <p>
              Complete the appointment request form with your
              child&apos;s basic details and your concerns.
            </p>

          </div>


          <div className="process-card">

            <span className="process-number">
              02
            </span>

            <div className="process-icon">
              ☎
            </div>

            <h3>We&apos;ll connect</h3>

            <p>
              Our clinic team will contact you to discuss your
              preferred appointment time.
            </p>

          </div>


          <div className="process-card">

            <span className="process-number">
              03
            </span>

            <div className="process-icon">
              ✓
            </div>

            <h3>Visit the clinic</h3>

            <p>
              Once confirmed, simply arrive at the clinic for
              your child&apos;s consultation.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          FAQ
      ===================================================== */}
      <section className="appointment-faq">

        <div className="faq-heading">

          <span className="section-mini-title">
            QUESTIONS, ANSWERED
          </span>

          <h2>
            Before you
            <span> visit us.</span>
          </h2>

        </div>


        <div className="faq-list">

          <details className="faq-item">
            <summary>
              How do I book an appointment?
              <span>+</span>
            </summary>

            <p>
              Fill in the appointment request form above.
              Our team will contact you to confirm the date
              and time based on availability.
            </p>
          </details>


          <details className="faq-item">
            <summary>
              Can I request a specific appointment time?
              <span>+</span>
            </summary>

            <p>
              Yes. You can select your preferred date and
              time while submitting the form. The final
              appointment time will be confirmed by our clinic team.
            </p>
          </details>


          <details className="faq-item">
            <summary>
              What should I bring for my child&apos;s visit?
              <span>+</span>
            </summary>

            <p>
              If available, bring previous medical records,
              vaccination records, medication details and
              recent reports relevant to your child.
            </p>
          </details>


          <details className="faq-item">
            <summary>
              What if my child needs urgent medical attention?
              <span>+</span>
            </summary>

            <p>
              Please do not wait for an online appointment
              request in an emergency. Seek immediate medical
              attention or contact emergency services.
            </p>
          </details>


          <details className="faq-item">
            <summary>
              Can I contact the clinic directly?
              <span>+</span>
            </summary>

            <p>
              Yes. You can call the clinic directly at
              +91 88793 33393 for appointment-related
              assistance.
            </p>
          </details>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="appointment-bottom-cta">

        <div className="bottom-cta-content">

          <span className="section-mini-title">
            WE&apos;RE HERE WHEN YOU NEED US
          </span>

          <h2>
            Let&apos;s take the next step
            <span> together.</span>
          </h2>

          <p>
            Whether it&apos;s a routine check-up, a new concern,
            or simply a question about your child&apos;s health,
            we&apos;re here to help.
          </p>

          <div className="bottom-cta-actions">

            <a
              href="tel:+918879333393"
              className="appointment-call"
            >
              <span>☎</span>
              Call +91 88793 33393
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Contact;