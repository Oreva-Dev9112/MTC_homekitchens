import React from "react";
import logo from "../assets/logo/logo.png";

const Footer = () => (
  <footer className="footer-section">
    <div className="footer-container">
      {/* Footer Logo Row */}
      <div className="footer-logo-row">
        <div className="footer-line"></div>
        <div className="footer-logo">
          <img src={logo} alt="MTC Home Kitchens" className="footer-logo-img" />
        </div>
        <div className="footer-line"></div>
      </div>

      {/* Footer Columns */}
      <div className="footer-columns">
        <div className="footer-column">
          <h3 className="footer-heading">About</h3>
          <ul className="footer-links">
            <li><a href="/shop" className="footer-link">Shop</a></li>
            <li><a href="/plan" className="footer-link">Plan My Kitchen</a></li>
            <li><a href="/about" className="footer-link">About Us</a></li>
            <li><a href="/gallery" className="footer-link">Gallery</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="footer-heading">Service</h3>
          <ul className="footer-links">
            <li><a href="/faq" className="footer-link">FAQ</a></li>
            <li><a href="/contact" className="footer-link">Contact</a></li>
            <li><a href="/how-to-buy" className="footer-link">How to Buy</a></li>
            <li><a href="/downloads" className="footer-link">Downloads</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="footer-heading">Info</h3>
          <ul className="footer-links">
            <li><a href="/delivery" className="footer-link">Delivery</a></li>
            <li><a href="/terms" className="footer-link">Terms</a></li>
            <li><a href="/privacy" className="footer-link">Privacy</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="footer-heading">Follow</h3>
          <div className="footer-social">
            <a href="https://facebook.com" className="footer-social-link footer-social-override" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" className="footer-social-link footer-social-override" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" className="footer-social-link footer-social-override" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-divider"></div>

      {/* Copyright */}
      <div className="footer-copyright">
        <p>
        Copyright Online MTC Home Kitchens 2018 - All rights reserved.<br/> Responsive website design, Development & Hosting by mtc.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
