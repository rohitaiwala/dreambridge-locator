
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ResourceCards } from "@/components/ResourceCards";

const Resources = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-primary animate-fade-in">
          Learning Resources
        </h1>
        <ResourceCards />
      </div>
      <Footer />
    </div>
  );
};

export default Resources;
