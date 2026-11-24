
import React from "react";
import "../styles/Services.css";

function Services() {
  const videos = [
    {
      id: "4YMoGNQcpYU",
      category: "Expert Advice",
      title: "3 Signs Your Child Needs a Doctor Immediately!",
      description:
        "Get valuable healthcare insights from our experienced doctors.",
      points: [
        "Expert medical guidance",
        "Health awareness",
        "Trusted specialists",
      ],
    },
    {
      id: "wi7gn2t0exA",
      category: "Health Awareness",
      title: "Understanding Your Health and Wellbeing",
      description:
        "Learn more about common health conditions and their prevention.",
      points: [
        "Preventive healthcare",
        "Doctor-led information",
        "Healthy living tips",
      ],
    },
    {
      id: "H4nw8qmgdqs",
      category: "Patient Stories",
      title: "Real Experiences and Stories of Care",
      description:
        "Discover patient experiences and their healthcare journeys.",
      points: [
        "Patient experiences",
        "Compassionate care",
        "Our hospital team",
      ],
    },
  ];

  return (
    <section className="services-section">
      <div className="services-heading">
        <span>Watch & Learn</span>
        <h2>Healthcare insights from our experts</h2>
      </div>

      <div className="services-slider">
        <div className="services-track">

          {videos.map((video) => (
            <article
              className="service-card"
              key={video.id}
            >
              {/* YOUTUBE VIDEO THUMBNAIL */}

              <a
                className="service-image service-video"
                href={`https://www.youtube.com/shorts/${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Watch ${video.title} on YouTube`}
              >
                <img
                  className="service-video-thumbnail"
                  src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                  alt={video.title}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src =
                      `https://i.ytimg.com/vi/${video.id}/0.jpg`;
                  }}
                />

                <span className="service-play-button">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M8 5v14l11-7z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </a>

              {/* VIDEO CONTENT */}

              <div className="service-content">

                <span className="service-category">
                  {video.category}
                </span>

                <h3>{video.title}</h3>

                <p className="video-description">
                  {video.description}
                </p>

                <div className="service-points">
                  {video.points.map((point, index) => (
                    <p key={index}>+ {point}</p>
                  ))}
                </div>

                <div className="service-read-more">
                  <a
                    href={`https://www.youtube.com/shorts/${video.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Watch on YouTube <span>→</span>
                  </a>
                </div>

              </div>
            </article>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Services;
