import React, { useEffect, useRef, useState } from "react";
import "./About.css";
import burgerImg from "../assets/burger.jpg"; // ✅ Make sure this file exists

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="about-section">
      <div className="about-container">
        {/* Text Side */}
        <div className={`about-text ${isVisible ? "slide-in-left" : "hidden"}`}>
          <h2>
            WHERE <span className="highlight-primary">TRADITION</span>
            <br />
            MEETS <span className="highlight-secondary">INNOVATION</span>
            <br />
            IN EVERY BITE
          </h2>
          <p>
            At Chutnee, we blend authentic flavors with contemporary culinary
            techniques to create an unforgettable dining experience. Each dish
            tells a story of passion, creativity, and dedication to excellence.
          </p>
          <button className="learn-more-btn"><a href="https://chutnee.co.uk/our-story/">LEARN MORE</a></button>
        </div>

        {/* Image Side */}
        <div className={`relative ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          <div className="relative w-full aspect-square max-w-md mx-auto">
            {/* Organic blob shape */}
            <div className="absolute inset-0 bg-primary rounded-[60% 40% 30% 70% / 60% 30% 70% 40%] opacity-20 animate-float" />
            <div 
              className="absolute inset-8 bg-cover bg-center rounded-[60% 40% 30% 70% / 60% 30% 70% 40%] shadow-2xl"
              style={{ 
                backgroundImage: `url(${new URL('@/assets/burger.jpg', import.meta.url).href})`,
              }}
            />
            {/* Floating accent */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary rounded-full flex items-center justify-center text-white font-bold shadow-lg animate-float" style={{ animationDelay: '0.5s' }}>
              <span className="text-center text-sm">Fresh<br />Daily</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
