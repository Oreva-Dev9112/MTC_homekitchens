import React from "react";
import imgOne from "../assets/gallery/one.png";
import imgTwo from "../assets/gallery/two.png";
import imgThree from "../assets/gallery/three.png";
import imgFour from "../assets/gallery/four.png";

const galleryImages = [imgOne, imgTwo, imgThree, imgFour];

const Gallery = () => (
  <section className="gallery-section">
    <div className="gallery-container">
      <h2 className="gallery-title">Customer Gallery</h2>
      <div className="gallery-grid">
        {galleryImages.map((img, i) => (
          <div className="gallery-item" key={i}>
            <img src={img} alt={`Gallery ${i + 1}`} loading="lazy" />
          </div>
        ))}
      </div>
      <a href="#gallery.php" className="gallery-button" type="button">
        View More
      </a>
    </div>
  </section>
);

export default Gallery;
