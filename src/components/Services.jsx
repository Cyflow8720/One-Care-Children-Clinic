import React from "react";
import "../styles/Services.css";

function Services() {
  const services = [
    {
      category: "Preventive healthcare",
      title: "Comprehensive medical care and specialized treatments",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80",
      points: [
        "General medicine",
        "Specialist consultations",
        "Preventive healthcare",
      ],
    },
    {
      category: "Emergency care",
      title: "24/7 emergency care with rapid medical response",
      image:
        "https://images.unsplash.com/photo-1516841273335-e39b37888115?auto=format&fit=crop&w=1000&q=80",
      points: [
        "24/7 Emergency services",
        "Critical care",
        "Rapid response team",
      ],
    },
    {
      category: "Cardiology",
      title: "Advanced cardiac care for complete heart health",
      image:
        "https://images.unsplash.com/photo-1628348070889-cb656235b4eb?auto=format&fit=crop&w=1000&q=80",
      points: [
        "Heart checkups",
        "Cardiac consultations",
        "Advanced diagnostics",
      ],
    },
    {
      category: "Orthopaedics",
      title: "Expert orthopaedic care for bones and joints",
      image:
        "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1000&q=80",
      points: [
        "Joint replacement",
        "Sports injuries",
        "Orthopaedic surgery",
      ],
    },
    {
      category: "Neurology",
      title: "Specialized neurological care and treatment",
      image:
        "https://images.unsplash.com/photo-1559757175-7cb057f0e9a8?auto=format&fit=crop&w=1000&q=80",
      points: [
        "Neurology consultation",
        "Brain & spine care",
        "Neurological diagnostics",
      ],
    },
    {
      category: "Nephrology",
      title: "Comprehensive kidney care and treatment",
      image:
        "https://images.unsplash.com/photo-1559757175-7f1c3b1c8e3a?auto=format&fit=crop&w=1000&q=80",
      points: [
        "Kidney consultations",
        "Dialysis support",
        "Kidney disease management",
      ],
    },
    {
      category: "Gastroenterology",
      title: "Complete digestive and gastrointestinal care",
      image:
        "https://images.unsplash.com/photo-1638202993928-7d113b8a5f5e?auto=format&fit=crop&w=1000&q=80",
      points: [
        "Digestive health",
        "Endoscopy services",
        "Gastro consultations",
      ],
    },
    {
      category: "Gynaecology",
      title: "Complete women's healthcare at every stage",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80",
      points: [
        "Women's health",
        "Pregnancy care",
        "Gynaecological treatments",
      ],
    },
    {
      category: "Paediatrics",
      title: "Compassionate healthcare for children and newborns",
      image:
        "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=1000&q=80",
      points: [
        "Child healthcare",
        "Newborn care",
        "Vaccination services",
      ],
    },
    {
      category: "Critical care",
      title: "Advanced intensive care for critically ill patients",
      image:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80",
      points: [
        "Intensive care",
        "Critical monitoring",
        "Specialist medical team",
      ],
    },
    {
      category: "General surgery",
      title: "Advanced surgical care with modern techniques",
      image:
        "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1000&q=80",
      points: [
        "Laparoscopic surgery",
        "General surgery",
        "Post-operative care",
      ],
    },
    {
      category: "Dermatology",
      title: "Expert skin, hair and cosmetic healthcare",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=1000&q=80",
      points: [
        "Skin treatments",
        "Hair & scalp care",
        "Dermatology consultation",
      ],
    },
    {
      category: "Pulmonology",
      title: "Specialized care for lungs and respiratory health",
      image:
        "https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&w=1000&q=80",
      points: [
        "Respiratory care",
        "Lung diagnostics",
        "Pulmonary consultation",
      ],
    },
    {
      category: "Urology",
      title: "Advanced treatment for urinary and urological conditions",
      image:
        "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=1000&q=80",
      points: [
        "Urology consultation",
        "Urinary health",
        "Urological procedures",
      ],
    },
    {
      category: "Robotic surgery",
      title: "Precision robotic-assisted procedures and surgery",
      image:
        "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1000&q=80",
      points: [
        "Robotic-assisted surgery",
        "Precision procedures",
        "Advanced technology",
      ],
    },
  ];

  return (
    <section className="services-section">

      <div className="services-heading">
        <span>Our services</span>

        <h2>
          Comprehensive medical
          <br />
          services for you
        </h2>
      </div>

      <div className="services-slider">

        <div className="services-track">

          {services.map((service, index) => (
            <div className="service-card" key={index}>

              {/* IMAGE */}
              <div className="service-image">
                <img
                  src={service.image}
                  alt={service.category}
                />
              </div>

              {/* CONTENT */}
              <div className="service-content">

                <span className="service-category">
                  {service.category}
                </span>

                <h3>
                  {service.title}
                </h3>

                <div className="service-points">

                  {service.points.map((point, pointIndex) => (
                    <p key={pointIndex}>+ {point}</p>
                  ))}

                </div>

                <div className="service-read-more">
                  <a href="#">
                    Read more <span>→</span>
                  </a>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Services;