import React, { useEffect, useRef, useState } from "react";
import dish1 from "@/assets/dish1.jpg";
import dish2 from "@/assets/dish2.jpg";
import dish3 from "@/assets/dish3.jpg";
import dish4 from "@/assets/dish4.jpg";
import reel1 from "@/assets/reel1.jpg";
import reel2 from "@/assets/reel2.jpg";
import reel3 from "@/assets/reel3.jpg";
import tiktok from "@/assets/tiktok.jpg";
import instagram from "@/assets/instagram.jpg";
import snapchat from "@/assets/snapchat.jpg";
import about1 from "@/assets/about1.jpg";
import about2 from "@/assets/about2.jpg";
import about3 from "@/assets/about3.jpg";
import burgerImg from "@/assets/burger.jpg";
import saladImg from "@/assets/salad.jpg";
import cakeImg from "@/assets/cake.jpg";
import coffeeImg from "@/assets/coffee.jpg";
import smoothieImg from "@/assets/smoothie.jpg";
import pastaImg from "@/assets/pasta.jpg";
import interiorImg from "@/assets/restaurant-interior.jpg";
import heroImg from "@/assets/hero-bg.jpg";
import "./Gallery.css";

const galleryImages = [
  burgerImg,
  smoothieImg,
  pastaImg,
  cakeImg,
  interiorImg,
  coffeeImg,
  heroImg,
  saladImg,
];

const Gallery: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className={`main-container ${isVisible ? "visible" : ""}`}>
      {/* ---- MOST POPULAR DISHES ---- */}
      <section className="popular-dishes">
        <h2 className="section-title">MOST POPULAR DISHES</h2>
        <p className="section-subtitle">
          Dive into our signature dishes loved by everyone at{" "}
          <span className="highlight">CHUTNEE</span>
        </p>

        <div className="dishes-grid">
          {[dish1, dish2, dish3, dish4].map((img, i) => (
            <div key={i} className="dish-card">
              <img src={img} alt="dish" />
              <div className="overlay">VIEW DISH</div>
            </div>
          ))}
        </div>

        <div className="button-container">
          <button className="view-more-btn"><a href="https://chutnee.co.uk/our-story/">VIEW MORE</a></button>
        </div>

      </section>

      {/* ---- ABOUT US ---- */}
      <section className="about-section">
        <h2 className="section-title">ABOUT US</h2>
        <p className="section-subtitle">LOVE ABOUT US</p>
        <a href="https://chutnee.co.uk/our-story/">
        <div className="about-grid">
          {[about1, about2, about3].map((img, i) => (
            <div key={i} className="about-card">
              <img src={img} alt="about" />
              <p>
                “Our chefs bring passion and creativity to every plate, ensuring
                each bite is a perfect balance of tradition and innovation.”
              </p>
              <div className="stars">★★★★★</div>
            </div>
          ))}
        </div>
        </a>
      </section>

      {/* ---- WATCH OUR REELS ---- */}
      <section className="reels-section">
        <h2 className="section-title">WATCH OUR REELS</h2>
        <p className="section-subtitle">
          Get a sneak peek of our vibrant dishes and behind-the-scenes moments
        </p>
        <a href="https://www.instagram.com/chutnee.london/reels/">
          <div className="reels-grid">
            {[reel1, reel2, reel3].map((img, i) => (
              <div key={i} className="reel-card">
                <img src={img} alt="reel" />
                <div className="overlay">▶ PLAY REEL</div>
              </div>
            ))}
          </div>
        </a>
        
      </section>

      {/* ---- STAY CONNECTED ---- */}
      <section className="connect-section">
        <h2 className="section-title">
          STAY CONNECTED & SHARE YOUR EXPERIENCE!
        </h2>
        <a href="https://www.instagram.com/CHUTNEE.LONDON/">
          <div className="social-grid">
            {[
              { img: tiktok, name: "TIKTOK" },
              { img: instagram, name: "INSTAGRAM" },
              { img: snapchat, name: "SNAPCHAT" },
            ].map((social, i) => (
              <div key={i} className="social-card">
                <img src={social.img} alt={social.name} />
                <p>{social.name}</p>
              </div>
            ))}
          </div>
        </a>
      </section>

      {/* ---- GALLERY ---- */}
      <section className="gallery-section">
        <h2 className="gallery-title">
          OUR <span>GALLERY</span>
        </h2>
        <div className="gallery-grid">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className="gallery-item"
              style={{ animationDelay: `${index * 0.05}s` }}
            ><a href="https://chutnee.co.uk/food-menu/">
              <img src={img} alt={`Gallery ${index + 1}`} />
              <div className="overlay">View</div>
            </a>
              
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
