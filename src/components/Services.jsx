
import React from "react";
import "../styles/Services.css";

function Services() {
  // Replace these example video IDs with your client's YouTube video IDs.
  const videos = [
    {
      id: "VIDEO_ID_1",
      category: "Expert Advice",
      title: "Expert medical advice from our specialists",
      description: "Get valuable healthcare insights from our experienced doctors.",
      points: [
        "Expert medical guidance",
        "Health awareness",
        "Trusted specialists",
      ],
      link: "https://www.youtube.com/watch?v=VIDEO_ID_1",
    },
    {
      id: "VIDEO_ID_2",
      category: "Health Awareness",
      title: "Understanding your health and wellbeing",
      description: "Learn more about common health conditions and their prevention.",
      points: [
        "Preventive healthcare",
        "Doctor-led information",
        "Healthy living tips",
      ],
      link: "https://www.youtube.com/watch?v=VIDEO_ID_2",
    },
    {
      id: "VIDEO_ID_3",
      category: "Patient Stories",
      title: "Real experiences and stories of care",
      description: "Discover patient experiences and their healthcare journeys.",
      points: [
        "Patient experiences",
        "Compassionate care",
        "Our hospital team",
      ],
      link: "https://www.youtube.com/watch?v=VIDEO_ID_3",
    },
  ];

  // Duplicate cards to maintain the continuous slider.
  const sliderVideos = [...videos, ...videos];

  return (
    <section className="services-section">
      <div className="services-heading">
        <span>Watch & Learn</span>

        <h2>
          Healthcare insights from our experts
        </h2>
      </div>

      <div className="services-slider">
        <div className="services-track">
          {sliderVideos.map((video, index) => (
            <article
              className="service-card"
              key={`${video.id}-${index}`}
            >
              {/* YOUTUBE VIDEO */}
              <div className="service-image service-video">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                  title={video.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>

              {/* VIDEO INFORMATION */}
              <div className="service-content">
                <span className="service-category">
                  {video.category}
                </span>

                <h3>{video.title}</h3>

                <p className="video-description">
                  {video.description}
                </p>

                <div className="service-points">
                  {video.points.map((point, pointIndex) => (
                    <p key={pointIndex}>+ {point}</p>
                  ))}
                </div>

                <div className="service-read-more">
                  <a
                    href={video.link}
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
