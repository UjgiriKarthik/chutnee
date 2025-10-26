import Hero from "@/components/Hero";
import About from "@/components/About";
import MenuGrid from "@/components/MenuGrid";
import WhyChoose from "@/components/WhyChoose";
import BestSellers from "@/components/BestSellers";
import ReserveSection from "@/components/ReserveSection";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <MenuGrid />
      <WhyChoose />
      <BestSellers />
      <ReserveSection />
      <Gallery />
      <Footer />
    </main>
  );
};

export default Index;
