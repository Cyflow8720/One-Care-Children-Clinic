import { useEffect, useRef, useState } from "react";
import "../styles/About.css";
import aboutMain from "../assets/about-us-main.jpg";
import aboutSecondary from "../assets/about-us-secondary.jpg";

function About() {
  // Reference to the About section
  const aboutRef = useRef(null);

  // Active feature
  const [activeFeature, setActiveFeature] = useState(0);

  // Replay animation every time About enters the screen
  useEffect(() => {
    const section = aboutRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Remove animation class first
          section.classList.remove("about-visible");

          // Small delay so browser can reset the animation
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              section.classList.add("about-visible");
            });
          });
        } else {
          // Remove class when About leaves the screen
          section.classList.remove("about-visible");
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="about-section"
      id="about"
      ref={aboutRef}
    >
      <div className="about-container">

        {/* LEFT - MAIN IMAGE */}
        <div className="about-main-image">
          <img
            src={aboutMain}
            alt="Pediatric doctor caring for a child"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-content">

          <span className="about-label">About us</span>

          <h2>
            Caring for little ones with{" "}
            <span>compassion, trust & expertise</span>
          </h2>

          <p>
            At One Care Children's Clinic, we believe every child deserves
            thoughtful, personalized care. From everyday health concerns to
            growing-up milestones, we are here to support children and
            parents at every step.
          </p>

          <button className="about-btn">
            Explore more
          </button>

          {/* FEATURES */}
          <div className="about-features">

            {/* FEATURE 01 */}
            <div
              className={`about-feature ${
                activeFeature === 0 ? "active" : ""
              }`}
              onClick={() => setActiveFeature(0)}
            >
              <span className="feature-number">
                01
              </span>

              <span className="feature-text">
                Child-focused healthcare
              </span>

              <span className="feature-arrow">
                ↗
              </span>
            </div>

            {/* FEATURE 02 */}
            <div
              className={`about-feature ${
                activeFeature === 1 ? "active" : ""
              }`}
              onClick={() => setActiveFeature(1)}
            >
              <span className="feature-number">
                02
              </span>

              <span className="feature-text">
                Compassionate pediatric care
              </span>

              <span className="feature-arrow">
                ↗
              </span>
            </div>

            {/* FEATURE 03 */}
            <div
              className={`about-feature ${
                activeFeature === 2 ? "active" : ""
              }`}
              onClick={() => setActiveFeature(2)}
            >
              <span className="feature-number">
                03
              </span>

              <span className="feature-text">
                Trusted medical guidance
              </span>

              <span className="feature-arrow">
                ↗
              </span>
            </div>

          </div>
        </div>

        {/* SMALL IMAGE */}
        <div className="about-secondary-image">
          <img
            src={aboutSecondary}
            alt="Doctor consulting with a parent"
          />
        </div>

      </div>
    </section>
  );
}

export default About;