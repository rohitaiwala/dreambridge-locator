import { Navbar } from "@/components/Navbar";

const Resources = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-primary animate-fade-in">
          Learning Resources
        </h1>
        {/* Resources content will be implemented in future updates */}
        <div className="text-center text-gray-600">
          Educational resources coming soon!
        </div>
      </div>
    </div>
  );
};

export default Resources;