import { useEffect, useRef, useState } from "react";
import { Leaf, Clock, Award } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "FRESH INGREDIENTS",
    description: "Locally sourced, organic produce in every dish"
  },
  {
    icon: Clock,
    title: "FAST SERVICE",
    description: "Quick preparation without compromising quality"
  },
  {
    icon: Award,
    title: "AWARD WINNING",
    description: "Recognized for culinary excellence"
  },
];

const WhyChoose = () => {
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
    <section ref={sectionRef} className="py-20 px-6 md:px-12 lg:px-20 bg-background relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-20 left-0 w-64 h-64 bg-primary/10 rounded-[60% 40% 30% 70% / 60% 30% 70% 40%] blur-3xl" />
      <div className="absolute bottom-20 right-0 w-64 h-64 bg-secondary/10 rounded-[40% 60% 70% 30% / 40% 70% 30% 60%] blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-6 text-foreground ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          WHY CHOOSE <span className="text-secondary">CHUTНEE?</span>
        </h2>
        
        <p className={`text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          We're passionate about creating memorable dining experiences through exceptional food, service, and atmosphere.
        </p>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`group text-center p-8 rounded-3xl bg-card hover:bg-primary/5 transition-all duration-500 hover:shadow-xl ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <Icon size={32} />
                </div>
                <h3 className="font-bold text-xl mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
