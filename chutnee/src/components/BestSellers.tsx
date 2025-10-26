import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import burgerImg from "@/assets/burger.jpg";
import smoothieImg from "@/assets/smoothie.jpg";
import cakeImg from "@/assets/cake.jpg";

const BestSellers = () => {
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
    <section ref={sectionRef} className="py-20 px-6 md:px-12 lg:px-20 bg-primary text-white relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
      <div className="absolute bottom-10 right-10 w-56 h-56 bg-white/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          BEST SELLERS
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[burgerImg, smoothieImg, cakeImg].map((img, index) => (
            <div
              key={index}
              className={`group ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative aspect-square rounded-full overflow-hidden bg-white/10 backdrop-blur-sm shadow-2xl hover:scale-105 transition-transform duration-500">
                <img
                  src={img}
                  alt={`Best seller ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
          <Button 
            size="lg" 
            variant="secondary"
            className="bg-white text-primary hover:bg-white/90 rounded-full px-8 hover:scale-105 transition-all"
          >
            <a href="https://chutnee.co.uk/food-menu/">VIEW ALL</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
