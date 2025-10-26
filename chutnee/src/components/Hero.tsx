import React from "react";
import "./Hero.css";
import heroBg from "../assets/hero.jpg"; // ✅ make sure the image exists in /src/assets/

const Hero = () => {
  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Top Info Bar */}
      <div className="top-bar">
        <p>📍 124 THE BROADWAY, SOUTHALL, LONDON, UB1 1QF</p>
        <p>📞 02085711688</p>
        <div className="social-icons">
          <i className="fab fa-instagram"></i>
          <i className="fab fa-tiktok"></i>
        </div>
      </div>

      {/* Navigation */}
      <nav className="navbar">
        <div className="logo"><a href="">CHUTNEE</a></div>
        <ul className="nav-links">
          <li><a href="https://chutnee.co.uk/our-story/">Our Story</a></li>
          <li><a href="https://chutnee.co.uk/menu/">Menu</a></li>
          <li><a href="https://chutnee.co.uk/afternoon-tea/">Afternoon Tea</a></li>
          <li><a href="https://chutnee.co.uk/events/">Events</a></li>
          <li><a href="https://chutnee.co.uk/chutnee-family/">Chutnee Family</a></li>
          <li><a href="https://chutnee.co.uk/contact/">Contact</a></li>
        </ul>
        <button className="reserve-btn"><a href="https://chutnee-1709392623.resos.com/booking?fbclid=PAY2xjawJjLm1leHRuA2FlbQIxMQABp6XclgsrI8NlL8lLSFH-Zv9bzMyEK3jdaUkvdVIhMrSDEd_mme_UZlmwXKaL_aem_u8IS-CMD9pb7NbpM5_Y56g">Reservation →</a></button>
      </nav>

      {/* Hero Content */}
      <div className="hero-content">
        <h1 className="hero-title">WELCOME TO CHUTNEE</h1>
        <div className="hero-buttons">
          <button className="btn blue"><a href="https://chutnee.co.uk/food-menu/">VIEW MENU</a></button>
          <button className="btn pink"><a href="https://chutnee-1709392623.resos.com/booking?fbclid=PAY2xjawJjLm1leHRuA2FlbQIxMQABp6XclgsrI8NlL8lLSFH-Zv9bzMyEK3jdaUkvdVIhMrSDEd_mme_UZlmwXKaL_aem_u8IS-CMD9pb7NbpM5_Y56g">BOOK A TABLE</a></button>
        </div>
      </div>

      {/* Decorative Floating Lights */}
      <div className="circle pink"></div>
      <div className="circle teal"></div>
    </section>
  );
};

export default Hero;
