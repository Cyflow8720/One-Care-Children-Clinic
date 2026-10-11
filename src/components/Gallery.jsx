
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Gallery.css";

import gallery1 from "../assets/gallery/gallery1.png";
import gallery2 from "../assets/gallery/gallery2.png";
import gallery3 from "../assets/gallery/gallery3.png";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: gallery1, title: "Our Clinic", category: "Inside One Care" },
    { src: gallery2, title: "A Caring Environment", category: "Our Space" },
    { src: gallery3, title: "Care for Every Child", category: "Our Clinic" },
  ];

  return (
    <main className="clinic-gallery-page">
      {/* Gallery Hero */}
      <section className="gallery-page-hero">
        <div className="gallery-page-hero-content">
          <span className="gallery-eyebrow">
            A WARM SPACE FOR LITTLE SMILES
          </span>

          <h1>Explore Our Gallery</h1>

          <p>
            Take a glimpse inside One Care Children’s Clinic, where
            thoughtful care and a welcoming environment come together
            for every child.
          </p>

          <div className="gallery-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Gallery</span>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-page-section">
        <div className="gallery-section-heading">
          <span className="gallery-eyebrow">OUR SPACE, YOUR TRUST</span>
          <h2>A Closer Look at One Care</h2>
          <p>
            Discover the space where your child’s comfort and care
            come first.
          </p>
        </div>

        <div className="clinic-gallery-grid">
          {images.map((image, index) => (
            <button
              type="button"
              className={`clinic-gallery-card gallery-card-${index + 1}`}
              key={image.title}
              onClick={() => setSelectedImage(image)}
              aria-label={`View ${image.title}`}
            >
              <img src={image.src} alt={image.title} />

              <span className="gallery-card-overlay">
                <span>
                  <small>{image.category}</small>
                  <strong>{image.title}</strong>
                </span>
                <span className="gallery-view-icon">↗</span>
              </span>
            </button>
          ))}
        </div>

        <div className="gallery-contact-note">
          <div>
            <span className="gallery-eyebrow">WE’RE HERE FOR YOU</span>
            <h2>Visit One Care Children’s Clinic</h2>
            <p>
              We look forward to welcoming you and your little one.
            </p>
          </div>

          <Link to="/contact" className="gallery-contact-button">
            Book an Appointment <span>↗</span>
          </Link>
        </div>
      </section>

      {/* Image Lightbox */}
      {selectedImage && (
        <div
          className="gallery-lightbox"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            className="gallery-lightbox-close"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image"
          >
            ×
          </button>

          <img
            src={selectedImage.src}
            alt={selectedImage.title}
            onClick={(event) => event.stopPropagation()}
          />

          <p>{selectedImage.title}</p>
        </div>
      )}
    </main>
  );
};

export default Gallery;
