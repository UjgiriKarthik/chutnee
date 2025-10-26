import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import interiorImg from "@/assets/restaurant-interior.jpg";

const ReserveSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6 md:px-12 lg:px-20 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${interiorImg})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative z-10 p-12 md:p-16 lg:p-20">
            <div className={`max-w-xl ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                RESERVE YOUR<br />
                TABLE AT<br />
                <span className="text-secondary">CHUTНEE</span>
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Experience fine dining in an elegant atmosphere. Book your table now for an unforgettable culinary journey.
              </p>
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-8 hover:scale-105 transition-all"
              ><a href="https://chutnee-1709392623.resos.com/booking?fbclid=PAY2xjawJjLm1leHRuA2FlbQIxMQABp6XclgsrI8NlL8lLSFH-Zv9bzMyEK3jdaUkvdVIhMrSDEd_mme_UZlmwXKaL_aem_u8IS-CMD9pb7NbpM5_Y56g">
                BOOK NOW
              </a>
                
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReserveSection;
