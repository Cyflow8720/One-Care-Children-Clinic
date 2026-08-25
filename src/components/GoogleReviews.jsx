import React, { useEffect, useRef, useState } from "react";
import {
  FaStar,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import "../styles/GoogleReviews.css";

const GoogleReviews = () => {
  const reviews = [
    {
      name: "Emma Wilson",
      review:
        "Highly recommend! The entire experience was smooth, professional and caring.",
    },
    {
      name: "Grace Miller",
      review:
        "I left with a very positive impression overall. From beginning to end, the experience felt smooth, well organized, and easy to follow.",
    },
    {
      name: "Sofia Martinez",
      review:
        "Better than I imagined. The staff was extremely helpful and professional throughout the entire experience.",
    },
    {
      name: "Olivia Anderson",
      review:
        "Excellent service and very supportive staff. Everything was handled professionally and with great care.",
    },
    {
      name: "Daniel Thomas",
      review:
        "Very happy with the overall experience. The team was kind, helpful and attentive throughout.",
    },
    {
      name: "Michael Brown",
      review:
        "A wonderful experience from start to finish. The staff was courteous, professional and supportive.",
    },
  ];

  /* =========================================
     SECTION ANIMATION
  ========================================= */

  const sectionRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2,
      }
    );

    const section = sectionRef.current;

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  /* =========================================
     SLIDER
  ========================================= */

  const sliderRef = useRef(null);

  const scrollReviews = (direction) => {
    if (!sliderRef.current) return;

    const slider = sliderRef.current;

    const card = slider.querySelector(".review-card");

    if (!card) return;

    const cardWidth = card.offsetWidth;

    const gap = 18;

    const scrollAmount = cardWidth + gap;

    slider.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  /* =========================================
     JSX
  ========================================= */

  return (
    <section
      ref={sectionRef}
      className={`reviews-section ${
        isVisible ? "reviews-visible" : ""
      }`}
    >
      <div className="reviews-container">

        {/* =====================================
            HEADING
        ===================================== */}

        <div className="reviews-heading">

          <span className="reviews-small-title">
            WHAT OUR CLIENTS SAY
          </span>

          <h2>
            Our Happy <span>Clients!</span>
          </h2>

          <p>
            Real experiences from people who trusted us with their care.
          </p>

        </div>


        {/* =====================================
            GOOGLE SUMMARY
        ===================================== */}

        <div className="google-summary">

          <div className="google-info">

            <div className="google-logo">
              <span className="google-g">G</span>
            </div>

            <div className="google-details">

              <h3>
                Google Reviews
              </h3>

              <div className="rating-row">

                <strong>
                  4.3
                </strong>

                <div className="stars">

                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar key={star} />
                  ))}

                </div>

                <span className="review-count">
                  (191)
                </span>

              </div>

            </div>

          </div>


          <a
            href="https://www.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="feedback-button"
          >
            Share your feedback
          </a>

        </div>


        {/* =====================================
            REVIEW SLIDER
        ===================================== */}

        <div className="reviews-slider">

          {/* LEFT ARROW */}

          <button
            type="button"
            className="slider-arrow left-arrow"
            onClick={() => scrollReviews("previous")}
            aria-label="Previous reviews"
          >
            <FaChevronLeft />
          </button>


          {/* REVIEW TRACK */}

          <div
            className="reviews-track"
            ref={sliderRef}
          >

            {reviews.map((review, index) => (

              <div
                className="review-card"
                key={`${review.name}-${index}`}
              >

                {/* STARS */}

                <div className="card-stars">

                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar key={star} />
                  ))}

                </div>


                {/* REVIEW TEXT */}

                <p className="review-text">
                  {review.review}
                </p>


                {/* CLIENT NAME */}

                <div className="review-user">

                  <h4>
                    {review.name}
                  </h4>

                  <span>
                    Google Reviewer
                  </span>

                </div>

              </div>

            ))}

          </div>


          {/* RIGHT ARROW */}

          <button
            type="button"
            className="slider-arrow right-arrow"
            onClick={() => scrollReviews("next")}
            aria-label="Next reviews"
          >
            <FaChevronRight />
          </button>

        </div>

      </div>
    </section>
  );
};

export default GoogleReviews;