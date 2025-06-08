import React, { useState } from "react";
import logo from "../assets/logo/logo.png";
import cartIcon from "../assets/icons/shopping-cart.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
  <header className="site-header">
    <nav style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 50, background: 'transparent' }}>
      <div className="nav-container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 0' }}>
          {/* Left nav/social (desktop) */}
          <div className="desktop-nav-left" style={{ display: 'none', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: '1rem', paddingRight: '1rem', borderRight: '1px solid rgba(255, 255, 255, 0.3)' }}>
              <a href="https://facebook.com" className="social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" className="social-link" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" className="social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
            <a href="/shop" className="nav-link">Shop</a>
            <a href="/plan" className="nav-link">Plan My Kitchen</a>
          </div>

          {/* Logo */}
          <div style={{ flex: 1, textAlign: 'center' }}>
            <img src={logo} alt="MTC Home Kitchens" style={{ width: 84, height: 33, opacity: 1 }} />
          </div>

          {/* Right nav (desktop) */}
          <div className="desktop-nav-right" style={{ display: 'none', alignItems: 'center' }}>
            <a href="/about" className="nav-link">About Us</a>
            <a href="/gallery" className="nav-link">Gallery</a>
            <a href="/order" className="dream-kitchen-btn">
              MY ORDER <img src={cartIcon} alt="cart" style={{ width: 14, height: 13, opacity: 1, marginLeft: 8 }} />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="mobile-menu-toggle-container">
            <button 
              onClick={toggleMobileMenu}
              className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`} 
              aria-label="Toggle mobile menu"
            >
              <div className="hamburger-box">
                <div className="hamburger-inner"></div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-overlay" onClick={closeMobileMenu}>
          <div className="mobile-menu-content" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-nav-links">
              <a href="/shop" className="mobile-nav-link" data-delay="0" onClick={closeMobileMenu}>Shop</a>
              <a href="/plan" className="mobile-nav-link" data-delay="1" onClick={closeMobileMenu}>Plan My Kitchen</a>
              <a href="/about" className="mobile-nav-link" data-delay="2" onClick={closeMobileMenu}>About Us</a>
              <a href="/gallery" className="mobile-nav-link" data-delay="3" onClick={closeMobileMenu}>Gallery</a>
            </div>
            <div className="mobile-menu-footer">
              <div className="mobile-social-links">
                <a href="https://facebook.com" className="mobile-social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                <a href="https://twitter.com" className="mobile-social-link" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                <a href="https://instagram.com" className="mobile-social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              </div>
              <a href="/order" className="mobile-cta-btn" onClick={closeMobileMenu}>
                <span>MY ORDER</span>
                <img src={cartIcon} alt="cart" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <center>
        <hr className="overflow-hidden" style={{ borderBottom: "1px solid white", width: "70%", marginTop: 10 }} />
      </center>
    </nav>
  </header>
  );
};

export default Header;
