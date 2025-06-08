import React from "react";

const FeatureSection = () => (
  <section className="feature-section" style={{ marginTop: 2 }}>
    <div className="feature-container">
      {/* Left Column (Background image can be set in CSS or inline) */}
      <div className="feature-image-column">
        {/* Background image is set via CSS */}
      </div>

      {/* Right Column Content */}
      <div className="feature-content-column">
        <p className="feature-overline">
          Quality Craftmanship from build to delivery
        </p>
        <h2 className="feature-heading">
          Discover the beauty of a handmade kitchen
        </h2>
        <p className="feature-paragraph">
          Our expert craftsmen combine traditional techniques with modern innovation to create 
          bespoke kitchens that are as functional as they are beautiful. Every detail is 
          meticulously planned and executed to perfection, ensuring your kitchen becomes 
          the heart of your home for generations to come.
        </p>
        <a className="feature-cta-button" href="/about">
          About Us
        </a>
      </div>
    </div>
  </section>
);

export default FeatureSection;
