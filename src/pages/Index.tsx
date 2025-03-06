
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { DeveloperTeam } from "@/components/DeveloperTeam";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <DeveloperTeam />
      <Footer />
    </div>
  );
};

export default Index;
