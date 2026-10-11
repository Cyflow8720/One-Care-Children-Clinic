
import "../styles/Attachments.css";

import hospital1 from "../assets/Hospitals/hospital1.png";
import hospital2 from "../assets/Hospitals/hospital2.png";
import hospital3 from "../assets/Hospitals/hospital3.png";
import hospital4 from "../assets/Hospitals/hospital4.png";
import hospital5 from "../assets/Hospitals/hospital5.png";
import hospital6 from "../assets/Hospitals/hospital6.png";

const hospitalLocations = [
  {
    name: "OneCare Children’s Clinic",
    address:
      "Sanskriti Park, Mahakali Caves Road, Opp. Canossa School, Andheri East, Mumbai - 400093",
    mapLink:
      "https://www.google.com/maps?q=OneCare+Children's+Clinic,+Sanskriti+Park,+Mahakali+Caves+Road,+Andheri+East,+Mumbai&output=embed",
  },
  {
    name: "Criticare Asia Hospital – Andheri East",
    address:
      "Plot No 516, Beside SBI, Teli Gali, Maheshwari Nagar, Andheri East, Mumbai, Maharashtra - 400069",
    mapLink:
      "https://www.google.com/maps?q=19.1181073,72.8505634&output=embed",
  },
];

const previousHospitals = [
  {
    name: "Ankura Hospital, Hyderabad",
    location: "Hyderabad, Telangana, India",
    mapLink: "PASTE_ANKURA_GOOGLE_MAPS_LINK_HERE",
    logo: hospital1,
  },
  {
    name: "Nanavati Hospital, Mumbai",
    location: "Vile Parle West, Mumbai, Maharashtra, India",
    mapLink: "PASTE_NANAVATI_GOOGLE_MAPS_LINK_HERE",
    logo: hospital2,
  },
  {
    name: "Kokilaben Hospital, Mumbai",
    location: "Andheri West, Mumbai, Maharashtra, India",
    mapLink: "PASTE_KOKILABEN_GOOGLE_MAPS_LINK_HERE",
    logo: hospital3,
  },
  {
    name: "Apollo Hospital, Navi Mumbai",
    location: "Navi Mumbai, Maharashtra, India",
    mapLink: "PASTE_APOLLO_GOOGLE_MAPS_LINK_HERE",
    logo: hospital4,
  },
  {
    name: "Hiranandani Hospital, Powai",
    location: "Powai, Mumbai, Maharashtra, India",
    mapLink: "PASTE_HIRANANDANI_GOOGLE_MAPS_LINK_HERE",
    logo: hospital5,
  },
  {
    name: "Yewale Hospital, Vashi",
    location: "Vashi, Navi Mumbai, Maharashtra, India",
    mapLink: "PASTE_YEWALE_GOOGLE_MAPS_LINK_HERE",
    logo: hospital6,
  },
];

const Attachments = () => {
  return (
    <section className="attachments-section">
      {/* EXISTING HOSPITAL LOCATIONS */}
      <div className="attachments-heading">
        <span>Our Locations</span>
        <h2>Visit Our Hospital</h2>
        <p>
          Find our hospital locations and get the care your family deserves.
        </p>
      </div>

      <div className="hospital-cards">
        {hospitalLocations.map((hospital, index) => (
          <div className="hospital-card" key={hospital.name}>
            <div className="hospital-info">
              <span className="hospital-label">
                HOSPITAL {index + 1}
              </span>

              <h3>{hospital.name}</h3>

              <p className="hospital-address">
                {hospital.address}
              </p>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  hospital.address
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="direction-btn"
              >
                Get Directions
              </a>
            </div>

            <div className="hospital-map">
              <iframe
                src={hospital.mapLink}
                title={`${hospital.name} Location`}
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>
        ))}
      </div>

      

      {/* PREVIOUS PROFESSIONAL ENGAGEMENTS */}
      <section className="engagements-section">
        <div className="engagements-heading">
          <span className="engagements-eyebrow">
            professional engagements
          </span>

          <h2>
            Dr. Priyanka’s Previous
            <br />
            <span>Professional Engagements</span>
          </h2>

          

          <div className="engagements-heading-line" />
        </div>

        <div className="engagements-grid">
          {previousHospitals.map((hospital, index) => (
            <article
              className="engagement-card"
              key={hospital.name}
              style={{ "--card-index": index }}
            >
              <div className="engagement-card-top">
                <span className="engagement-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="engagement-indicator" />
              </div>

              {/* SAME-SIZE WHITE LOGO CANVAS */}
              <div className="engagement-logo-box">
                <img
                  src={hospital.logo}
                  alt={`${hospital.name} logo`}
                  loading="lazy"
                />
              </div>

              <div className="engagement-details">
                <h3>{hospital.name}</h3>

                <a
                  className="engagement-location"
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    hospital.location
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${hospital.name} on Google Maps`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="17"
                    height="17"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>

                  <span>{hospital.location}</span>
                </a>
              </div>

              <div className="engagement-card-accent" />
            </article>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Attachments;
