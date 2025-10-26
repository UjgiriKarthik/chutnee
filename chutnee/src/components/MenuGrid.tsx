import { useEffect, useRef, useState } from "react";
import burgerImg from "@/assets/burger.jpg";
import saladImg from "@/assets/salad.jpg";
import cakeImg from "@/assets/cake.jpg";
import coffeeImg from "@/assets/coffee.jpg";
import smoothieImg from "@/assets/smoothie.jpg";
import pastaImg from "@/assets/pasta.jpg";

const menuItems = [
  { name: "BURGER", image: burgerImg },
  { name: "SALAD", image: saladImg },
  { name: "CAKE", image: cakeImg },
  { name: "COFFEE", image: coffeeImg },
  { name: "SMOOTHIE", image: smoothieImg },
  { name: "PASTA", image: pastaImg },
];

const MenuGrid = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6 md:px-12 lg:px-20 bg-cream">
      <div className="max-w-7xl mx-auto">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 text-foreground ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          WHAT WE <span className="text-primary">OFFER</span>
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {menuItems.map((item, index) => (
            <div
              key={item.name}
              className={`group cursor-pointer ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <a href="https://chutnee.co.uk/food-menu/">
              <div className="relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
                {/* Image */}
                <div className="aspect-square overflow-hidden">
                  <a href="https://chutnee.co.uk/food-menu/">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </a>
                </div>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
                  <a href="https://chutnee.co.uk/food-menu/"><span className="text-white font-bold text-xl">View Details</span></a>
                </div>
              </div>
              </a>
              
              {/* Item Info */}
              <div className="mt-4 text-center">
                <h3 className="font-bold text-lg md:text-xl text-foreground">{item.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuGrid;
